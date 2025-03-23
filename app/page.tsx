export default function Home() {
  return (
    <div style={{ 
      padding: '2rem',
      maxWidth: '1200px',
      margin: '0 auto'
    }}>
      <h1 style={{ 
        fontSize: '2.5rem', 
        marginBottom: '1.5rem',
        color: '#333'
      }}>
        CVE-2025-29927: Next.js Middleware Bypass POC
      </h1>
      
      <div style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#444' }}>Vulnerability Information</h2>
        <p style={{ fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '1rem' }}>
          This application demonstrates the CVE-2025-29927 vulnerability in Next.js where the internal header 
          <code style={{ background: '#f5f5f5', padding: '0.2rem 0.4rem', borderRadius: '4px' }}>x-middleware-subrequest</code> 
          can be used to bypass middleware authentication checks.
        </p>
      </div>
      
      <div style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#444' }}>Testing the Vulnerability</h2>
        <p style={{ fontSize: '1.1rem', lineHeight: 1.6 }}>
          This application has a protected route at <a href="/protected" style={{ color: '#0070f3', textDecoration: 'none' }}>/protected</a> that 
          should require authentication. Click the link to see the middleware redirect you to the home page.
        </p>
        
        <div style={{ 
          background: '#f5f5f5', 
          padding: '1.5rem', 
          borderRadius: '8px',
          marginTop: '1.5rem'
        }}>
          <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem', color: '#333' }}>To exploit the vulnerability:</h3>
          <pre style={{ 
            background: '#333', 
            color: '#fff', 
            padding: '1rem', 
            borderRadius: '4px',
            overflowX: 'auto'
          }}>
{`# Run the exploit test script
node exploit-test.js

# Or use curl directly
curl -H "x-middleware-subrequest: middleware" http://localhost:3000/protected`}
          </pre>
        </div>
      </div>
      
      <div style={{ 
        background: '#fff8f8', 
        border: '1px solid #ffcdd2',
        padding: '1.5rem',
        borderRadius: '8px',
        marginTop: '2rem'
      }}>
        <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#d32f2f' }}>Security Impact</h2>
        <p style={{ fontSize: '1.1rem', lineHeight: 1.6 }}>
          This vulnerability allows attackers to bypass critical security checks in middleware, 
          such as authentication, authorization, rate limiting, or other protective measures.
        </p>
        <p style={{ fontSize: '1.1rem', lineHeight: 1.6, marginTop: '1rem' }}>
          Applications that rely on middleware for security without additional checks in API routes or 
          pages are particularly vulnerable.
        </p>
      </div>
    </div>
  )
} 