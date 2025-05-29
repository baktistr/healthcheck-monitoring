import { NextResponse } from 'next/server'
import { exec } from 'child_process'
import { promisify } from 'util'

const execAsync = promisify(exec)

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const target = searchParams.get('target') || '127.0.0.1'

  try {
    const { stdout } = await execAsync(`ping -c 1 ${target}`)
    return NextResponse.json({ output: stdout })
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}
