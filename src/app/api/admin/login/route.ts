import { NextRequest, NextResponse } from "next/server";
import { timingSafeEqual } from "crypto";
import {
  ADMIN_SESSION_COOKIE,
  SESSION_MAX_AGE_SECONDS,
  createSessionToken,
} from "@/lib/adminAuth";

function safeCompare(a: string, b: string): boolean {
  const bufA = Buffer.from(a);
  const bufB = Buffer.from(b);
  if (bufA.length !== bufB.length) return false;
  return timingSafeEqual(bufA, bufB);
}

export async function POST(request: NextRequest) {
  const adminUser = process.env.ADMIN_USER;
  const adminPassword = process.env.ADMIN_PASSWORD;
  const secret = process.env.ADMIN_AUTH_SECRET;

  if (!adminUser || !adminPassword || !secret) {
    return NextResponse.json(
      { message: "Autenticación no configurada en el servidor" },
      { status: 500 }
    );
  }

  let body: { username?: string; password?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ message: "Solicitud inválida" }, { status: 400 });
  }

  const { username, password } = body;
  if (
    typeof username !== "string" ||
    typeof password !== "string" ||
    !safeCompare(username, adminUser) ||
    !safeCompare(password, adminPassword)
  ) {
    return NextResponse.json(
      { message: "Usuario o contraseña incorrectos" },
      { status: 401 }
    );
  }

  const token = await createSessionToken(secret);
  const response = NextResponse.json({ ok: true });
  response.cookies.set(ADMIN_SESSION_COOKIE, token, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: SESSION_MAX_AGE_SECONDS,
  });
  return response;
}
