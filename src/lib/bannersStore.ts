import { promises as fs } from "fs";
import path from "path";

export type BannerSlide = {
  id: string;
  image: string;
  link: string;
};

const DATA_DIR = path.join(process.cwd(), "data");
const DATA_FILE = path.join(DATA_DIR, "banners.json");

export const UPLOADS_DIR = path.join(process.cwd(), "uploads", "banners");

const DEFAULT_BANNERS = [
  {
    id: "default-shark",
    file: "web_shark_julio26.jpg",
    link: "/car/BYDSHARK",
  },
  {
    id: "default-dolphin-mini",
    file: "web_dolphin-mini_julio26.jpg",
    link: "/car/dolphin-mini",
  },
  {
    id: "default-song-pro",
    file: "web_song-pro_julio26.jpg",
    link: "/car/song-pro-dmi",
  },
  {
    id: "default-song-plus",
    file: "web_song-plus_julio26.jpg",
    link: "/car/song-plus-dmi",
  },
  {
    id: "default-yuan-pro",
    file: "web_yuan-pro_julio26.jpg",
    link: "/car/yuan-pro",
  },
];

const CARRUSEL_SRC_DIR = path.join(
  process.cwd(),
  "src",
  "assets",
  "images",
  "home-page",
  "carrusel"
);

async function seedDefaultBanners(): Promise<BannerSlide[]> {
  await fs.mkdir(UPLOADS_DIR, { recursive: true });
  const slides: BannerSlide[] = [];
  for (const banner of DEFAULT_BANNERS) {
    try {
      await fs.copyFile(
        path.join(CARRUSEL_SRC_DIR, banner.file),
        path.join(UPLOADS_DIR, `${banner.id}.jpg`)
      );
    } catch {
      continue;
    }
    slides.push({
      id: banner.id,
      image: `/api/uploads/banners/${banner.id}.jpg`,
      link: banner.link,
    });
  }
  await writeBanners(slides);
  return slides;
}

export async function readBanners(): Promise<BannerSlide[]> {
  let raw: string;
  try {
    raw = await fs.readFile(DATA_FILE, "utf-8");
  } catch {
    // primera vez: los banners actuales del carrusel pasan a ser editables
    return seedDefaultBanners();
  }
  try {
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed?.slides)) {
      return parsed.slides;
    }
    return [];
  } catch {
    return [];
  }
}

export async function writeBanners(slides: BannerSlide[]): Promise<void> {
  await fs.mkdir(DATA_DIR, { recursive: true });
  await fs.writeFile(
    DATA_FILE,
    JSON.stringify({ slides }, null, 2),
    "utf-8"
  );
}

export async function saveBannerImage(
  buffer: Buffer,
  id: string
): Promise<string> {
  const sharp = (await import("sharp")).default;
  await fs.mkdir(UPLOADS_DIR, { recursive: true });
  const fileName = `${id}.jpg`;
  await sharp(buffer)
    .rotate()
    .resize({ width: 2560, withoutEnlargement: true })
    .jpeg({ quality: 82 })
    .toFile(path.join(UPLOADS_DIR, fileName));
  return `/api/uploads/banners/${fileName}`;
}

export async function deleteBannerImage(image: string): Promise<void> {
  const fileName = path.basename(image);
  try {
    await fs.unlink(path.join(UPLOADS_DIR, fileName));
  } catch {
    // el archivo ya no existe; no es un error para el flujo de borrado
  }
}
