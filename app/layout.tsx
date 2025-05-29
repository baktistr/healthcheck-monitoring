import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Monitoring Health App Check',
  description: 'Monitoring Health App Check for Celestial.lab',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{
        margin: 0,
        fontFamily: 'system-ui, sans-serif',
        backgroundColor: '#f9f9f9',
        color: '#2c3e50'
      }}>
        <header style={{
          backgroundColor: '#2c3e50',
          color: 'white',
          padding: '1rem 2rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
        }}>
          <h1 style={{ margin: 0, fontSize: '1.5rem' }}>
            Health Check Monitoring
          </h1>
        </header>

        <main style={{ padding: '2rem' }}>
          {children}
        </main>
      </body>
    </html>
  )
}
