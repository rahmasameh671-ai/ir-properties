# IR-PROPERTIES Corporate Platform & SODIC Portfolio

Official digital platform for **ir-properties**, an Independent Real Estate Consultancy & Strategic Marketing Partner in Egypt.

## Overview
- **Brand**: ir-properties (Wordmark: `IR-PROPERTIES`, Sub-brand: `By ir-properties`)
- **Direct WhatsApp Consultation**: [+201277752731](https://wa.me/201277752731)
- **Aesthetic**: Ultra-Chic Calm Luxury with a Strict Zero Gold Policy (Pure White, Alabaster, Slate/Charcoal `#1A202C` / `#2D3748`, Subtle Fine-Line Borders `#E2E8F0`, WhatsApp Green `#25D366`).
- **Layout**: No top fixed navbar — Hero begins directly at `top: 0`.

---

## Dedicated Route: `/sodic` (SODIC Signature Living)
Nested under the `ir-properties.com` architecture:
- **Live URL**: `https://ir-properties.com/sodic`
- **Routing**: Explicitly configured for `/sodic` and `/sodic/` via `sodic/index.html` and `sodic.html`, with React Route mapping `<Route path="/sodic" element={<SodicLandingPage />} />` in `App.jsx` and `App.tsx`.
- **Aesthetic**: Editorial, high-fashion real estate design with asymmetrical card layouts, spacious breathable margins, subtle fine-line borders (`#E2E8F0`), and crisp high-contrast typography.
- **Strict Policies**:
  - Zero Gold: Strictly NO gold, bronze, brass, or yellow hues.
  - Zero Brokerage Word: Strictly positioned as "Independent Real Estate Consultancy" or "Strategic Marketing Partner".
  - Clean Lead Capture: Full Name blank input (no placeholder examples), Split phone input with UTF-8 flags (defaulting to Egypt `+20`), Solid dark charcoal submit button (`SUBMIT`).
  - WhatsApp CTAs: Solid green buttons (`#25D366`) reading `CONTACT US`. Strictly NO visual gallery buttons.

### SODIC Featured Developments:
1. **The Lakes at SODIC East (New Launch)**
   - Location: East Cairo Integrated Master Community (655 Acres, 6,000 units, 80% Villas/Townhouses, 20% Apartments)
   - Pricing: 1 Bed (from 6.7M EGP) | 2 Beds (from 10.9M EGP) | 3 Beds (from 13.2M EGP)
   - Terms: 0% Down Payment | Installments Up to 10 Years
   - Direct CTA: `https://wa.me/201277752731?text=Hello%2C%20I%20am%20inquiring%20about%20SODIC%20East%20The%20Lakes`

2. **Ogami by SODIC**
   - Location: Ras El Hekma • KM 204 Alex-Matrouh Road (440 Acres, 800m Beachfront, Maldives & Japanese Inspired, Crystal Lagoons)
   - Pricing: Starting from 18.8M EGP (Fully Finished Luxury Chalets & Signature Villas)
   - Terms: Installments Up to 7 Years
   - Direct CTA: `https://wa.me/201277752731?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20Ogami%20by%20SODIC`

3. **East Vale Mostakbal City**
   - Location: Mostakbal City Master Community (Serene Greenery, Clean Architectural Geometry, Quiet Elegance)
   - Pricing: Apartments from 10.5M EGP | Villas from 33M EGP
   - Specs: Fully Finished with Installed Air Conditioning
   - Terms: 5% Down Payment | Installments Up to 9 Years
   - Direct CTA: `https://wa.me/201277752731?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20East%20Vale%20Mostakbal%20City`

---

## Platform Architecture & Files
- `index.html` — Main Homepage & Destination Hub
- `styles.css` — Global Calm Luxury stylesheet
- `script.js` — Global logic & WhatsApp integration
- `sodic/index.html` & `sodic.html` — Dedicated SODIC Landing Page (`/sodic`)
- `sodic/sodic.css` & `sodic.css` — Ultra-chic editorial styling for SODIC portfolio
- `sodic/sodic.js` & `sodic.js` — SODIC lead capture form & modal interaction
- `App.jsx` & `App.tsx` — React application routing configuration mapping `path="/sodic"`
- `src/pages/SodicLandingPage.jsx` — Reusable React landing page component
- `privacy-policy/index.html` & `privacy-policy.html` — Standalone Privacy Policy
- `terms-conditions/index.html` & `terms-conditions.html` — Standalone Terms & Conditions
- `serve.ps1` — Local testing HTTP server supporting `/sodic`, `/privacy-policy`, and `/terms-conditions`

---

## Compliance & Legal
- Operated by **ir-properties**, an Independent Real Estate Consultancy and Authorized Marketing Partner.
- © 2026 ir-properties — Strategic Partners. All rights reserved.
