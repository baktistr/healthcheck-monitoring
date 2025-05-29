import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const body = await req.json()
  const { username, password } = body

  const validUsers: Record<string, string> = {
    admin: '@8*!AQGt#zMtbf$JeYuds5Hz'
  }

  if (validUsers[username] === password) {
    const token = `valid-token-for-${username}`
    
    const response = NextResponse.json({ token })
    response.cookies.set('token', token, {
      path: '/',
      httpOnly: false,  // <- important for testing; set true later for real apps
      sameSite: 'lax',
    })

    return response
  }

  return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 })
}
