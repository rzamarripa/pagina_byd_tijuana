import { promises as fs } from "fs";
import path from "path";

export type EventosImages = {
  imageDesktop: string | null;
  imageMobile: string | null;
};

const DATA_DIR = path.join(process.cwd(), "data");
const DATA_FILE = path.join(DATA_DIR, "eventos.json");

export const EVENTOS_UPLOADS_DIR = path.join(
  process.cwd(),
  "uploads",
  "eventos"
);

export async function readEventosImages(): Promise<EventosImages> {
  try {
    const raw = await fs.readFile(DATA_FILE, "utf-8");
    const parsed = JSON.parse(raw);
    return {
      imageDesktop:
        typeof parsed?.imageDesktop === "string" ? parsed.imageDesktop : null,
      imageMobile:
        typeof parsed?.imageMobile === "string" ? parsed.imageMobile : null,
    };
  } catch {
    return { imageDesktop: null, imageMobile: null };
  }
}

export async function writeEventosImages(data: EventosImages): Promise<void> {
  await fs.mkdir(DATA_DIR, { recursive: true });
  await fs.writeFile(DATA_FILE, JSON.stringify(data, null, 2), "utf-8");
}

export async function saveEventosImage(
  buffer: Buffer,
  kind: "desktop" | "mobile"
): Promise<string> {
  const sharp = (await import("sharp")).default;
  await fs.mkdir(EVENTOS_UPLOADS_DIR, { recursive: true });
  const fileName = `${kind}-${Date.now()}.jpg`;
  const maxWidth = kind === "desktop" ? 2560 : 1440;
  await sharp(buffer)
    .rotate()
    .resize({ width: maxWidth, withoutEnlargement: true })
    .jpeg({ quality: 82 })
    .toFile(path.join(EVENTOS_UPLOADS_DIR, fileName));
  return `/api/uploads/eventos/${fileName}`;
}

export async function deleteEventosImage(image: string): Promise<void> {
  const fileName = path.basename(image);
  try {
    await fs.unlink(path.join(EVENTOS_UPLOADS_DIR, fileName));
  } catch {
    // el archivo ya no existe; no afecta el reemplazo
  }
}
