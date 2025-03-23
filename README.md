# CVE-2025-29927: Next.js Middleware Bypass Vulnerability

This repository demonstrates the CVE-2025-29927 vulnerability in Next.js where the internal header `x-middleware-subrequest` can be used to bypass middleware checks like authentication.

## Vulnerability Details

Next.js uses an internal header `x-middleware-subrequest` to prevent recursive requests from triggering infinite loops. The security vulnerability shows it's possible to skip running Middleware, which could allow requests to bypass critical checks—such as authorization cookie validation—before reaching routes.

## Affected Versions

- Next.js 15.x < 15.2.3
- Next.js 14.x < 14.2.25
- Next.js 13.x < 13.5.9

## Impact Scope

### Affected
- Self-hosted Next.js applications using Middleware (next start with output: standalone)
- Applications that rely on Middleware for auth or security checks, which are not then validated later in the application

### Not Affected
- Applications hosted on Vercel
- Applications hosted on Netlify
- Applications deployed as static exports (Middleware not executed)

## Reproduction Steps

1. Clone this repository
2. Install dependencies: `npm install`
3. Build the application: `npm run build`
4. Start the application in production mode: `node .next/standalone/server.js`
5. Test the vulnerability: `node exploit-test.js`

## How the Exploit Works

The exploit adds the `x-middleware-subrequest: middleware` header to bypass Next.js middleware authentication checks. 

<img width="1345" alt="image" src="https://github.com/user-attachments/assets/0f48e548-89cb-4991-9430-f29b748823e7" />


The middleware in this demo app redirects unauthenticated users away from protected routes, but with the exploit header, this check can be bypassed.

<img width="1345" alt="image" src="https://github.com/user-attachments/assets/82f48e22-e4c7-4d5d-91dd-62207a697079" />

<img width="1345" alt="image" src="https://github.com/user-attachments/assets/b532c43f-8f6b-472b-a379-88e7a0ecd338" />

## Fix

Update to one of the following patched versions:
- Next.js 15.2.3 or higher
- Next.js 14.2.25 or higher
- Next.js 13.5.9 or higher

## Source
- https://nextjs.org/blog/cve-2025-29927
