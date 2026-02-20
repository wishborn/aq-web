# Asset Quest Website

Corporate website for **Asset Quest, LLC** — a leading real estate investment firm based in Fort Myers, FL specializing in acquisition, management, marketing, and sales of residential lots, commercial properties, and multi-family homes.

## Tech Stack

- **Next.js 16** (App Router)
- **TypeScript**
- **Tailwind CSS 4**
- **Resend** for transactional email
- **Lucide React** for icons

## Pages

- `/` — Home (hero, company overview, experience highlights)
- `/our-focus` — Investment verticals (SFR/BTR, Capital Deployment, Acquisitions Management, Tax Collector Debt Service)
- `/contact` — Contact form with SMS opt-in, office info, Google Maps embed
- `/privacy-policy` — Privacy policy (placeholder)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

Create a `.env.local` file:

```
RESEND_API_KEY=re_your_api_key_here
```

The Resend API key is required for the contact, newsletter, and quick contact forms to send emails.

## Project Structure

```
src/
  app/
    page.tsx              # Home page
    layout.tsx            # Root layout (header + footer)
    globals.css           # Tailwind config + custom theme
    contact/page.tsx      # Contact page
    our-focus/page.tsx    # Our Focus page
    privacy-policy/page.tsx
    api/
      contact/route.ts    # Contact form API
      newsletter/route.ts # Newsletter signup API
      quick-contact/route.ts
  components/
    Header.tsx            # Site navigation
    Footer.tsx            # Footer with forms
    HeroDiamonds.tsx      # Diamond-shaped info cards
    ExperienceGrid.tsx    # Experience section icons
    ContactForm.tsx       # Contact page form
    NewsletterForm.tsx    # Newsletter signup
    QuickContactForm.tsx  # Footer quick contact
public/
  images/
    logo.png              # Asset Quest logo
    world-map.svg         # Hero background
```

## Deployment

Deploy to Vercel, Netlify, or any Node.js host. Set the `RESEND_API_KEY` environment variable in your hosting provider's dashboard.
