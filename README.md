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

If patching to a safe version is infeasible, it's recommended to prevent external user requests which contain the `x-middleware-subrequest` header from reaching your Next.js application by setting up a WAF rule.

Next.js version 15.2.3 has been released to address a security vulnerability (CVE-2025-29927

). Additionally, backported patches are available.

We recommend that all self-hosted Next.js deployments using next start and output: 'standalone' should update immediately.

Continue reading for more details on the CVE.
Timeline

    2025-02-27T06:03Z: Disclosure to Next.js team via GitHub private vulnerability reporting
    2025-03-14T17:13Z: Next.js team started triaging the report
    2025-03-14T19:08Z: Patch pushed for Next.js 15.x
    2025-03-14T19:26Z: Patch pushed for Next.js 14.x
    2025-03-17T22:44Z: Next.js 14.2.25 released
    2025-03-18T00:23Z: Next.js 15.2.3 released
    2025-03-18T18:03Z: CVE-2025-29927 issued by GitHub
    2025-03-21T10:17Z: Security Advisory published
    2025-03-22T21:21Z: Next.js 13.5.9 released

We are also publishing a backport for v12. We will update this post as they are released.
Vulnerability details

Next.js uses an internal header x-middleware-subrequest to prevent recursive requests from triggering infinite loops. The security report showed it was possible to skip running Middleware, which could allow requests to skip critical checks—such as authorization cookie validation—before reaching routes.
Impact scope
Affected

    Self-hosted Next.js applications using Middleware (next start with output: standalone)
    This affects you if you rely on Middleware for auth or security checks, which are not then validated later in your application.
    Applications using Cloudflare can turn on a Managed WAF rule

Not affected

    Applications hosted on Vercel
    Applications hosted on Netlify
    Applications deployed as static exports (Middleware not executed)

Patched versions

    For Next.js 15.x, this issue is fixed in 15.2.3
    For Next.js 14.x, this issue is fixed in 14.2.25
    For Next.js 13.x, this issue is fixed in 13.5.9

If patching to a safe version is infeasible, it is recommended that you prevent external user requests which contain the x-middleware-subrequest header from reaching your Next.js application.

We are also publishing a backport for v12. We will update this post as they are released.
Our security responsibility

Next.js has published 16 security advisories

since 2016. Over time, we've continued to improve how we gather, patch, and disclose vulnerabilities.

GitHub Security Advisories and CVEs are industry-standard approaches to notifying users, vendors, and companies of vulnerabilities in software. While we have published a CVE, we missed the mark on partner communications.

To help us more proactively work with partners depending on Next.js, and other infrastructure providers, we are opening a partner mailing list. Please reach out to partners@nextjs.org to be included.
