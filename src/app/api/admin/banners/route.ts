import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { randomUUID } from "crypto";
import {
  BannerSlide,
  deleteBannerImage,
  readBanners,
  saveBannerImage,
  writeBanners,
} from "@/lib/bannersStore";

const MAX_FILE_SIZE = 15 * 1024 * 1024;
const ALLOWED_TYPES = ["image/jpeg", "image/png", "image/webp"];

type UploadedFile = {
  type: string;
  size: number;
  arrayBuffer: () => Promise<ArrayBuffer>;
};

// `File` no existe como global en Node 18, así que validamos por forma
// (Blob/File) en vez de usar `instanceof File`, que lanza ReferenceError.
function isUploadedFile(value: unknown): value is UploadedFile {
  return (
    typeof value === "object" &&
    value !== null &&
    typeof (value as UploadedFile).arrayBuffer === "function" &&
    typeof (value as UploadedFile).type === "string" &&
    typeof (value as UploadedFile).size === "number"
  );
}

function isValidLink(link: unknown): link is string {
  return (
    typeof link === "string" &&
    link.length > 0 &&
    link.length < 500 &&
    (link.startsWith("/") || link.startsWith("https://") || link.startsWith("http://"))
  );
}

export async function GET() {
  const slides = await readBanners();
  return NextResponse.json({ slides });
}

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const file = formData.get("image");
  const link = formData.get("link");

  if (!isUploadedFile(file) || file.size === 0) {
    return NextResponse.json(
      { message: "Falta la imagen del banner" },
      { status: 400 }
    );
  }
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
  if (!isValidLink(link)) {
    return NextResponse.json(
      { message: "El link debe iniciar con / o https://" },
      { status: 400 }
    );
  }

  const id = randomUUID();
  const buffer = Buffer.from(await file.arrayBuffer());

  let image: string;
  try {
    image = await saveBannerImage(buffer, id);
  } catch {
    return NextResponse.json(
      { message: "No se pudo procesar la imagen" },
      { status: 400 }
    );
  }

  const slides = await readBanners();
  slides.push({ id, image, link });
  await writeBanners(slides);
  revalidatePath("/");

  return NextResponse.json({ slides }, { status: 201 });
}

export async function PUT(request: NextRequest) {
  let body: { slides?: { id?: string; link?: string }[] };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ message: "Solicitud inválida" }, { status: 400 });
  }

  if (!Array.isArray(body.slides)) {
    return NextResponse.json({ message: "Solicitud inválida" }, { status: 400 });
  }

  const current = await readBanners();
  const byId = new Map(current.map((s) => [s.id, s]));

  const updated: BannerSlide[] = [];
  for (const item of body.slides) {
    const existing = item.id ? byId.get(item.id) : undefined;
    if (!existing) {
      return NextResponse.json(
        { message: `Banner no encontrado: ${item.id}` },
        { status: 400 }
      );
    }
    if (!isValidLink(item.link)) {
      return NextResponse.json(
        { message: "El link debe iniciar con / o https://" },
        { status: 400 }
      );
    }
    updated.push({ ...existing, link: item.link });
  }

  if (updated.length !== current.length) {
    return NextResponse.json(
      { message: "La lista debe incluir todos los banners" },
      { status: 400 }
    );
  }

  await writeBanners(updated);
  revalidatePath("/");
  return NextResponse.json({ slides: updated });
}

export async function DELETE(request: NextRequest) {
  const id = request.nextUrl.searchParams.get("id");
  if (!id) {
    return NextResponse.json({ message: "Falta el id" }, { status: 400 });
  }

  const slides = await readBanners();
  const slide = slides.find((s) => s.id === id);
  if (!slide) {
    return NextResponse.json(
      { message: "Banner no encontrado" },
      { status: 404 }
    );
  }

  const remaining = slides.filter((s) => s.id !== id);
  await writeBanners(remaining);
  await deleteBannerImage(slide.image);
  revalidatePath("/");

  return NextResponse.json({ slides: remaining });
}
