import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import { UPLOADS_DIR } from "@/lib/bannersStore";

export async function GET(
  _request: NextRequest,
  { params }: { params: { file: string } }
) {
  const fileName = params.file;
  if (!/^[a-zA-Z0-9_-]+\.jpg$/.test(fileName)) {
    return NextResponse.json({ message: "No encontrado" }, { status: 404 });
  }

  try {
    const buffer = await fs.readFile(path.join(UPLOADS_DIR, fileName));
    return new NextResponse(buffer, {
      headers: {
        "Content-Type": "image/jpeg",
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    });
  } catch {
    return NextResponse.json({ message: "No encontrado" }, { status: 404 });
  }
}
