export const AUTH_COOKIE_NAME = "venuze-session";
export const SESSION_MAX_AGE_SECONDS = 60 * 60 * 24 * 7;

type SessionPayload = {
  email: string;
  expiresAt: number;
};

const encoder = new TextEncoder();

function toBase64Url(value: string): string {
  const bytes = encoder.encode(value);
  let binary = "";
  for (const byte of bytes) binary += String.fromCharCode(byte);
  return btoa(binary)
    .replaceAll("+", "-")
    .replaceAll("/", "_")
    .replaceAll("=", "");
}

function fromBase64Url(value: string): string {
  const base64 = value.replaceAll("-", "+").replaceAll("_", "/");
  const padded = base64.padEnd(Math.ceil(base64.length / 4) * 4, "=");
  const binary = atob(padded);
  return new TextDecoder().decode(
    Uint8Array.from(binary, (character) => character.charCodeAt(0)),
  );
}

function bytesToBase64Url(bytes: Uint8Array): string {
  let binary = "";
  for (const byte of bytes) binary += String.fromCharCode(byte);
  return btoa(binary)
    .replaceAll("+", "-")
    .replaceAll("/", "_")
    .replaceAll("=", "");
}

function base64UrlToBytes(value: string): Uint8Array {
  const base64 = value.replaceAll("-", "+").replaceAll("_", "/");
  const padded = base64.padEnd(Math.ceil(base64.length / 4) * 4, "=");
  const binary = atob(padded);
  return Uint8Array.from(binary, (character) => character.charCodeAt(0));
}

async function signingKey(secret: string): Promise<CryptoKey> {
  return crypto.subtle.importKey(
    "raw",
    encoder.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign", "verify"],
  );
}

async function signatureFor(payload: string, secret: string): Promise<string> {
  const signature = await crypto.subtle.sign(
    "HMAC",
    await signingKey(secret),
    encoder.encode(payload),
  );
  return bytesToBase64Url(new Uint8Array(signature));
}

export async function createSession(
  email: string,
  secret: string,
): Promise<string> {
  const payload: SessionPayload = {
    email,
    expiresAt: Date.now() + SESSION_MAX_AGE_SECONDS * 1000,
  };
  const encodedPayload = toBase64Url(JSON.stringify(payload));
  return `${encodedPayload}.${await signatureFor(encodedPayload, secret)}`;
}

export async function verifySession(
  value: string | undefined,
  secret: string | undefined,
): Promise<SessionPayload | null> {
  if (!value || !secret) return null;

  const [encodedPayload, suppliedSignature] = value.split(".");
  if (!encodedPayload || !suppliedSignature) return null;

  try {
    const isAuthentic = await crypto.subtle.verify(
      "HMAC",
      await signingKey(secret),
      base64UrlToBytes(suppliedSignature).buffer as ArrayBuffer,
      encoder.encode(encodedPayload),
    );
    if (!isAuthentic) return null;

    const payload = JSON.parse(fromBase64Url(encodedPayload)) as SessionPayload;
    if (
      typeof payload.email !== "string" ||
      typeof payload.expiresAt !== "number" ||
      payload.expiresAt <= Date.now()
    ) {
      return null;
    }

    return payload;
  } catch {
    return null;
  }
}
