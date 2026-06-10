import { SignJWT, jwtVerify, type JWTPayload } from 'jose';

export const PORTAL_COOKIE = 'ec-portal-session';
const EXPIRES_SECONDS = 60 * 60 * 24 * 7; // 7 days

export interface PortalClaims extends JWTPayload {
  client: string;
}

function getSecret(): Uint8Array {
  const s = process.env.PORTAL_JWT_SECRET;
  if (!s) throw new Error('PORTAL_JWT_SECRET environment variable is not set');
  return new TextEncoder().encode(s);
}

export async function signSession(client: string): Promise<string> {
  return new SignJWT({ client })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime(`${EXPIRES_SECONDS}s`)
    .sign(getSecret());
}

export async function verifySession(token: string): Promise<PortalClaims | null> {
  try {
    const s = process.env.PORTAL_JWT_SECRET;
    if (!s) return null;
    const { payload } = await jwtVerify<PortalClaims>(
      token,
      new TextEncoder().encode(s)
    );
    return payload;
  } catch {
    return null;
  }
}
