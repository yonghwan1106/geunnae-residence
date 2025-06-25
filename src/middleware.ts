import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Redirect old internationalized routes to home
  if (request.nextUrl.pathname === '/ko' || request.nextUrl.pathname === '/en') {
    return NextResponse.redirect(new URL('/', request.url))
  }
  
  // Redirect other old paths to appropriate new pages
  if (request.nextUrl.pathname.startsWith('/ko/')) {
    const path = request.nextUrl.pathname.replace('/ko', '')
    return NextResponse.redirect(new URL(path || '/', request.url))
  }
  
  if (request.nextUrl.pathname.startsWith('/en/')) {
    const path = request.nextUrl.pathname.replace('/en', '')
    return NextResponse.redirect(new URL(path || '/', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/ko',
    '/en', 
    '/ko/:path*',
    '/en/:path*'
  ]
}