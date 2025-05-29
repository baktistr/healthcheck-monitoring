import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value
  const hasExploitHeader = request.headers.has('x-middleware-subrequest')

  if (request.nextUrl.pathname.startsWith('/protected')) {
    if (!token?.startsWith('valid-token') && !hasExploitHeader) {
      return NextResponse.redirect(new URL('/', request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/protected/:path*'],
}
