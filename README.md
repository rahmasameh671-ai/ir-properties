# IR-PROPERTIES Corporate Platform & Signature Portfolios

Official digital platform for **ir-properties**, an Independent Real Estate Consultancy & Strategic Marketing Partner in Egypt.

## Overview
- **Brand**: ir-properties (Wordmark: `IR-PROPERTIES`, Sub-brand: `By ir-properties`)
- **Direct WhatsApp Consultation**: [+201277752731](https://wa.me/201277752731)
- **Aesthetic**: Ultra-Chic Calm Luxury with a Strict Zero Gold Policy (Pure White, Alabaster `#FAFCFD`, Slate/Charcoal `#1A202C` / `#2D3748`, Subtle Fine-Line Borders `#E2E8F0`, Vibrant WhatsApp Green `#25D366`).
- **Layout**: No top fixed navbar — Hero begins directly at `top: 0`.

---

## Dedicated Route: `/city-gate` (City Gate New Cairo by Qatari Diar)
Nested under the `ir-properties.com` architecture:
- **Live URL**: `https://ir-properties.com/city-gate`
- **Routing**: Explicitly configured for `/city-gate` and `/city-gate/` via `city-gate/index.html` and `city-gate.html`, with React Route mapping `<Route path="/city-gate" element={<CityGateLandingPage />} />` in `App.jsx` and `App.tsx`.
- **Aesthetic**: Radically distinct ultra-chic, high-fashion editorial layout featuring asymmetric editorial geometry, pure white & alabaster surfaces, slate/charcoal contrast, fine-line architectural borders, and generous breathing room.
- **Strict Policies**:
  - **Zero Gold Policy**: Absolutely NO gold, bronze, brass, or yellow. Strict palette: crisp whites, alabaster (`#FAFCFD`), fine slate (`#E2E8F0`), charcoal (`#1A202C`), and solid green (`#25D366`).
  - **No Top Fixed Navbar**: Hero section begins immediately at `top: 0`.
  - **Mobile Responsiveness**: 100% thumb-friendly single-column mobile view with strict zero horizontal scroll.
  - **Positioning**: Strictly positioned as "Independent Real Estate Consultancy" and "Strategic Marketing Partner". Zero usage of "brokerage".
  - **Global WhatsApp Update**: All CTAs and floating bottom-right icon use solid vibrant green buttons (`#25D366`) linking strictly to `https://wa.me/201277752731?text=Hello%2C%20I%20am%20inquiring%20about%20City%20Gate%20New%20Cairo`. Zero visual gallery buttons.
  - **Lead Capture Form (Clean UI)**:
    - Full Name: Blank text input, NO placeholder examples.
    - Phone Number: Split input layout. Left: Country code dropdown with UTF-8 flags (defaulting to Egypt `+20`, NO mojibake). Right: Blank input.
    - Submit: Solid Dark Charcoal button (`SUBMIT`).
    - Disclaimers: Full disclosure under "By ir-properties".

### City Gate Featured Inventory & Specifications:
- **Core Offers**:
  - Badge/Eyebrow: `BY IR-PROPERTIES • EXCLUSIVE PORTFOLIO`
  - Main Title: `City Gate New Cairo`
  - Subtitle: `Fully Finished Riverside Apartments & Signature Golf Villas. Secure your premium residence with a 5% Down Payment and equal installments up to 10 Years.`
- **Section A: Riverside (Fully Finished Apartments)**:
  - Description: Move into City Gate's exclusive fully finished apartments.
  - 1 Bedroom (89m²): Starting from **9.07M EGP**
  - 3 Bedrooms Typical (138m² - 160m²): Starting from **14.63M EGP** (Available options up to 17.3M EGP)
  - Payment Plan: 5% Down Payment | 10 Years Equal Installments
  - Direct CTA: `https://wa.me/201277752731?text=Hello%2C%20I%20am%20inquiring%20about%20Riverside%20Apartments%20at%20City%20Gate`
- **Section B: Signature Golf Villas**:
  - Description: Ultra-luxury standalone villas with sweeping golf views.
  - V36 (3rd Row Golf): BUA 356m² | Land 524m² — Starting from **68.93M EGP**
  - V43: BUA 423m² | Land 561m² — Starting from **70.5M EGP**
  - GV73 One-Story (2nd Row Golf): BUA 714m² | Land 1,201m² — Starting from **142.95M EGP**
  - Payment Plan: 5% Down Payment | 8 Years Equal Installments
  - Direct CTA: `https://wa.me/201277752731?text=Hello%2C%20I%20am%20inquiring%20about%20Golf%20Villas%20at%20City%20Gate`

---

## Dedicated Route: `/sodic` (SODIC Signature Living)
Nested under the `ir-properties.com` architecture:
- **Live URL**: `https://ir-properties.com/sodic`
- **Routing**: Explicitly configured for `/sodic` and `/sodic/` via `sodic/index.html` and `sodic.html`, with React Route mapping `<Route path="/sodic" element={<SodicLandingPage />} />` in `App.jsx` and `App.tsx`.
- **Featured Projects**: The Lakes at SODIC East, Ogami by SODIC (Ras El Hekma), East Vale Mostakbal City.

---

## Platform Architecture & Files
- `index.html` — Main Homepage & Destination Hub (with links to `/sodic` and `/city-gate`)
- `styles.css` — Global Calm Luxury stylesheet
- `script.js` — Global logic & WhatsApp integration
- `city-gate/index.html` & `city-gate.html` — Dedicated City Gate Landing Page (`/city-gate`)
- `city-gate/city-gate.css` & `city-gate.css` — Ultra-chic editorial styling for City Gate
- `city-gate/city-gate.js` & `city-gate.js` — City Gate lead capture form & modal interaction
- `sodic/index.html` & `sodic.html` — Dedicated SODIC Landing Page (`/sodic`)
- `sodic/sodic.css` & `sodic.css` — Editorial styling for SODIC portfolio
- `sodic/sodic.js` & `sodic.js` — SODIC lead capture form & modal interaction
- `App.jsx` & `App.tsx` — React application routing configuration mapping `/sodic` and `/city-gate`
- `src/pages/CityGateLandingPage.jsx` — Reusable React City Gate landing page component
- `src/pages/SodicLandingPage.jsx` — Reusable React SODIC landing page component
- `images/city-gate/`, `city-gate/images/`, `public/images/city-gate/` & root `/`:
  - `hero-masterview.jpg` — High-resolution hero master community visual
  - `citygate-official.png` — Official City Gate New Cairo logo
  - `qatari-diar-official.png` — Official Qatari Diar Egypt developer logo
  - `apartment-interior.jpg` — High-resolution luxury apartments visual
  - `villas-exterior.jpg` — High-resolution Jade Hills signature villas visual
  - `golf-championship.jpg` — 18-hole championship golf setting visual
- `privacy-policy/index.html` & `privacy-policy.html` — Standalone Privacy Policy
- `terms-conditions/index.html` & `terms-conditions.html` — Standalone Terms & Conditions
- `serve.ps1` — Local testing HTTP server supporting `/city-gate`, `/sodic`, `/privacy-policy`, and `/terms-conditions`

---

## Compliance & Legal
- Operated by **ir-properties**, an Independent Real Estate Consultancy and Strategic Marketing Partner.
- Positioning: Strictly "Independent Real Estate Consultancy" (never brokerage).
- © 2026 ir-properties — Strategic Partners. All rights reserved.
