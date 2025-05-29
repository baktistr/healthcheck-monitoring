'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault()
    const res = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    })

    const data = await res.json()

    if (res.ok && data.token) {
      document.cookie = `token=${data.token}; path=/`
      router.push('/protected')
    } else {
      setError(data.error || 'Login failed')
    }
  }

  return (
    <div style={{
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      minHeight: '100vh', padding: '2rem', backgroundColor: '#f4f6f8'
    }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem', color: '#2c3e50' }}>
        Internal Login Portal
      </h1>

      <form onSubmit={handleLogin} style={{
        display: 'flex', flexDirection: 'column', gap: '1rem', width: '320px',
        background: '#fff', padding: '2rem', borderRadius: '8px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
      }}>
        <input
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{ padding: '0.75rem', borderRadius: '4px', border: '1px solid #ccc' }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ padding: '0.75rem', borderRadius: '4px', border: '1px solid #ccc' }}
        />
        <button
          type="submit"
          style={{
            backgroundColor: '#2980b9', color: '#fff', padding: '0.75rem',
            border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold'
          }}>
          Login
        </button>
        {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
      </form>
    </div>
  )
}
