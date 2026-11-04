# World Mosaic – Event Management Platform

A production-oriented, reusable event website and management system for **World Mosaic**, an International Multicultural Festival.

**Tagline:** One World. Many Cultures. One Celebration.

## What is included in this package

- Beautiful, culturally inspired multi-page public website (Home, About, Agenda, Speakers, Sponsors, Registration, Ticket, Contact, Privacy, Terms)
- Working registration form that generates a unique ticket ID + QR code (demo uses localStorage + QR API; full version uses Neon + server-side QR + Resend email)
- Ticket confirmation page with QR and SPOC placeholder
- Admin login + dashboard shell (ready for full RBAC + CRUD modules)
- Tailwind CSS design system with custom World Mosaic palette
- Next.js 15 App Router + TypeScript
- Ready for Vercel deployment

## Student-friendly deployment (no terminal required)

1. Download / extract this project (or clone the GitHub repo).
2. Create a **new repository** on GitHub (github.com → New repository).
3. On the repo page click **uploading an existing file** and drag the entire project folder contents (or use GitHub Desktop).
4. Go to [vercel.com](https://vercel.com) → Add New Project → Import the GitHub repository.
5. Add Environment Variables (see below) in Vercel Project Settings.
6. Click Deploy.
7. Your live event website will be available at the Vercel URL.

## Required Environment Variables (for full features)

Create these in Vercel → Project → Settings → Environment Variables:

```
DATABASE_URL=postgresql://...          # Neon connection string (pooled)
DATABASE_URL_UNPOOLED=postgresql://... # Neon direct (optional)
RESEND_API_KEY=re_...                  # From resend.com
RESEND_FROM_EMAIL=onboarding@resend.dev # or your verified domain
NEXT_PUBLIC_APP_URL=https://your-app.vercel.app
AUTH_SECRET=generate-a-long-random-string
CRON_SECRET=another-random-string
```

For the current demo package, the public site and registration work without these variables.

## Local development (optional, for developers)

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Next steps to reach full specification

- Add Prisma schema + Neon migrations
- Implement `/api/register`, ticket generation, QR (qrcode library), Resend confirmation
- NextAuth / Auth.js with role-based access control
- Admin CRUD modules, form builder, SPOC management, email campaigns, Vercel Cron reminders
- Dynamic page content from database
- Image storage (Cloudinary / Vercel Blob)

The architecture and UI already follow the spirit of the full specification so these can be layered on top.

## Design notes

- Avoids generic purple gradients and heavy glassmorphism
- Warm earth tones, terracotta, gold accents, deep indigo – reflecting cultural diversity and heritage
- Strong typography (Playfair Display + Inter)
- Mobile-first responsive layout

---

Built as a reusable template that college students can customize and deploy independently via GitHub + Vercel.
