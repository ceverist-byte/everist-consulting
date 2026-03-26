import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === '/coming-soon') {
    return NextResponse.next()
  }
  return NextResponse.redirect(new URL('/coming-soon', request.url), 302)
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}
