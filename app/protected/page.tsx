'use client'

import { useState } from 'react'

export default function ProtectedPage() {
  const [result, setResult] = useState<string>('')

  async function checkHealth() {
    try {
      const res = await fetch('/api/ping?target=127.0.0.1')
      const data = await res.json()
      setResult(data.output || data.error || 'No output')
    } catch (err) {
      setResult(`Error: ${err}`)
    }
  }

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-start',
      minHeight: '100vh',
      padding: '3rem',
      backgroundColor: '#f4f6f8',
      color: '#2c3e50'
    }}>
      <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>
        System Health Dashboard
      </h2>

      <div style={{
        width: '100%',
        maxWidth: '600px',
        backgroundColor: '#fff',
        borderRadius: '8px',
        padding: '2rem',
        boxShadow: '0 4px 8px rgba(0,0,0,0.05)'
      }}>
        <p style={{ marginBottom: '1rem' }}>
          Click below to run a system health check on the main application server.
        </p>

        <button
          onClick={checkHealth}
          style={{
            backgroundColor: '#27ae60',
            color: 'white',
            padding: '0.75rem 1.5rem',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontWeight: 'bold',
            fontSize: '1rem'
          }}
        >
          Run Health Check
        </button>

        <pre style={{
          marginTop: '1.5rem',
          backgroundColor: '#ecf0f1',
          padding: '1rem',
          borderRadius: '4px',
          fontSize: '0.9rem',
          whiteSpace: 'pre-wrap'
        }}>
          {result}
        </pre>
      </div>

      <p style={{
        fontSize: '0.8rem',
        color: '#999',
        marginTop: '3rem'
      }}>
        Access to this dashboard is restricted to internal monitoring team only.
      </p>
    </div>
  )
}
