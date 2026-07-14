const encoder = new TextEncoder();

export const ADMIN_SESSION_COOKIE = "byd_admin_session";
export const SESSION_MAX_AGE_SECONDS = 60 * 60 * 12;

function bufToHex(buf: ArrayBuffer): string {
  return Array.from(new Uint8Array(buf))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

function hexToBuf(hex: string): Uint8Array {
  const bytes = new Uint8Array(hex.length / 2);
  for (let i = 0; i < bytes.length; i++) {
    bytes[i] = parseInt(hex.slice(i * 2, i * 2 + 2), 16);
  }
  return bytes;
}

async function getKey(secret: string): Promise<CryptoKey> {
  return crypto.subtle.importKey(
    "raw",
    encoder.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign", "verify"]
  );
}

export async function createSessionToken(secret: string): Promise<string> {
  const exp = Date.now() + SESSION_MAX_AGE_SECONDS * 1000;
  const key = await getKey(secret);
  const sig = await crypto.subtle.sign(
    "HMAC",
    key,
    encoder.encode(`admin:${exp}`)
  );
  return `${exp}.${bufToHex(sig)}`;
}

export async function verifySessionToken(
  token: string | undefined,
  secret: string | undefined
): Promise<boolean> {
  if (!token || !secret) return false;
  const [expStr, sigHex] = token.split(".");
  if (!expStr || !sigHex || !/^[0-9a-f]+$/.test(sigHex)) return false;
  const exp = Number(expStr);
  if (!Number.isFinite(exp) || Date.now() > exp) return false;
  const key = await getKey(secret);
  return crypto.subtle.verify(
    "HMAC",
    key,
    hexToBuf(sigHex),
    encoder.encode(`admin:${exp}`)
  );
}
