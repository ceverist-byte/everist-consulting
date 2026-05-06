import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Hide assessment until Stage 2 funnel is built (email gate + conditioning sequence)
  if (request.nextUrl.pathname === '/assessment') {
    return NextResponse.redirect(new URL('/contact', request.url), 302)
  }
  // Legacy redirect — /coming-soon was the previous landing; send users to home
  if (request.nextUrl.pathname === '/coming-soon') {
    return NextResponse.redirect(new URL('/', request.url), 302)
  }
  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}