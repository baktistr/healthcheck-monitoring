export default function Home() {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">CVE-2025-29927 Demonstration</h2>
      <p className="mb-3">
        This app demonstrates the Next.js middleware vulnerability (CVE-2025-29927) that allows bypassing middleware authorization.
      </p>
      <p className="mb-3">
        The <span className="font-mono bg-gray-100 px-1">Protected Page</span> should only be accessible to authorized users, 
        but can be accessed by exploiting the vulnerability.
      </p>
      <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded">
        <h3 className="text-lg font-medium mb-2">Exploit Instructions:</h3>
        <p className="mb-2">To bypass the middleware protection, send a request with the header:</p>
        <pre className="bg-gray-800 text-white p-3 rounded overflow-x-auto">
          <code>x-middleware-subrequest: true</code>
        </pre>
      </div>
    </div>
  )
} 