import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import {
  deleteEventosImage,
  readEventosImages,
  saveEventosImage,
  writeEventosImages,
} from "@/lib/eventosStore";

const MAX_FILE_SIZE = 15 * 1024 * 1024;
const ALLOWED_TYPES = ["image/jpeg", "image/png", "image/webp"];

type UploadedFile = {
  size: number;
  type: string;
  arrayBuffer: () => Promise<ArrayBuffer>;
};

// Node 18 no expone el global File; se valida por duck typing
function isUploadedFile(value: unknown): value is UploadedFile {
  return (
    typeof value === "object" &&
    value !== null &&
    typeof (value as UploadedFile).arrayBuffer === "function" &&
    typeof (value as UploadedFile).size === "number" &&
    typeof (value as UploadedFile).type === "string"
  );
}

export async function GET() {
  const images = await readEventosImages();
  return NextResponse.json(images);
}

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const current = await readEventosImages();
  const updated = { ...current };
  let changed = false;

  for (const kind of ["desktop", "mobile"] as const) {
    const file = formData.get(kind);
    if (!isUploadedFile(file) || file.size === 0) continue;

    if (!ALLOWED_TYPES.includes(file.type)) {
      return NextResponse.json(
        { message: "Formato no permitido (usa JPG, PNG o WebP)" },
        { status: 400 }
      );
    }
    if (file.size > MAX_FILE_SIZE) {
      return NextResponse.json(
        { message: "La imagen supera el límite de 15MB" },
        { status: 400 }
      );
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    let image: string;
    try {
      image = await saveEventosImage(buffer, kind);
    } catch {
      return NextResponse.json(
        { message: "No se pudo procesar la imagen" },
        { status: 400 }
      );
    }

    const previous =
      kind === "desktop" ? updated.imageDesktop : updated.imageMobile;
    if (previous) {
      await deleteEventosImage(previous);
    }
    if (kind === "desktop") {
      updated.imageDesktop = image;
    } else {
      updated.imageMobile = image;
    }
    changed = true;
  }

  if (!changed) {
    return NextResponse.json(
      { message: "Selecciona al menos una imagen" },
      { status: 400 }
    );
  }

  await writeEventosImages(updated);
  revalidatePath("/eventos");
  return NextResponse.json(updated);
}
