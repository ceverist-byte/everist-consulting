import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { jwtVerify } from 'jose'

const PORTAL_COOKIE = 'ec-portal-session'

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Client portal auth gate
  if (pathname.startsWith('/portal')) {
    return portalGuard(request)
  }

  return NextResponse.next()
}

async function portalGuard(request: NextRequest): Promise<NextResponse> {
  const { pathname } = request.nextUrl

  if (pathname === '/portal/login') {
    return NextResponse.next()
  }

  const rawSecret = process.env.PORTAL_JWT_SECRET
  if (!rawSecret) {
    return toLogin(request)
  }

  const token = request.cookies.get(PORTAL_COOKIE)?.value
  if (!token) return toLogin(request)

  try {
    const secret = new TextEncoder().encode(rawSecret)
    const { payload } = await jwtVerify(token, secret)
    const sessionClient =
      typeof payload.client === 'string' ? payload.client : null

    const segments = pathname.split('/').filter(Boolean)
    const urlClient = segments[1] ?? null

    if (!sessionClient || !urlClient || sessionClient !== urlClient) {
      const res = toLogin(request)
      res.cookies.delete(PORTAL_COOKIE)
      return res
    }

    return NextResponse.next()
  } catch {
    const res = toLogin(request)
    res.cookies.delete(PORTAL_COOKIE)
    return res
  }
}

function toLogin(request: NextRequest): NextResponse {
  const url = new URL('/portal/login', request.url)
  url.searchParams.set('next', request.nextUrl.pathname)
  return NextResponse.redirect(url)
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}
