import React, { useState, useEffect } from 'react';
import '../../hassan-allam.css';

/**
 * Hassan Allam Properties Portfolio Landing Page Component
 * Route: /hassan-allam/ strictly under ir-properties.com domain architecture
 * Final Live URL: https://ir-properties.com/hassan-allam/
 * Branding: 'By ir-properties' | Independent Real Estate Consultancy
 * Aesthetic: Modern Ultra-Luxury (Apple sleekness / Aman Resorts aesthetic)
 * Global WhatsApp: +201277752731 (Solid Vibrant Green #25D366, min 48px tap height)
 */

const COUNTRIES = [
  { name: 'Egypt', code: 'EG', dial: '+20', flag: '🇪🇬', priority: true },
  { name: 'Saudi Arabia', code: 'SA', dial: '+966', flag: '🇸🇦', priority: true },
  { name: 'United Arab Emirates', code: 'AE', dial: '+971', flag: '🇦🇪', priority: true },
  { name: 'Kuwait', code: 'KW', dial: '+965', flag: '🇰🇼', priority: true },
  { name: 'Qatar', code: 'QA', dial: '+974', flag: '🇶🇦', priority: true },
  { name: 'Oman', code: 'OM', dial: '+968', flag: '🇴🇲', priority: true },
  { name: 'Bahrain', code: 'BH', dial: '+973', flag: '🇧🇭', priority: true },
  { name: 'Jordan', code: 'JO', dial: '+962', flag: '🇯🇴', priority: true },
  { name: 'United Kingdom', code: 'GB', dial: '+44', flag: '🇬🇧', priority: true },
  { name: 'United States', code: 'US', dial: '+1', flag: '🇺🇸', priority: true },
  { name: 'Canada', code: 'CA', dial: '+1', flag: '🇨🇦', priority: true },
  { name: 'Germany', code: 'DE', dial: '+49', flag: '🇩🇪' },
  { name: 'France', code: 'FR', dial: '+33', flag: '🇫🇷' },
  { name: 'Italy', code: 'IT', dial: '+39', flag: '🇮🇹' },
  { name: 'Spain', code: 'ES', dial: '+34', flag: '🇪🇸' },
  { name: 'Switzerland', code: 'CH', dial: '+41', flag: '🇨🇭' },
  { name: 'Netherlands', code: 'NL', dial: '+31', flag: '🇳🇱' },
  { name: 'Australia', code: 'AU', dial: '+61', flag: '🇦🇺' },
  { name: 'Lebanon', code: 'LB', dial: '+961', flag: '🇱🇧' },
  { name: 'Iraq', code: 'IQ', dial: '+964', flag: '🇮🇶' },
  { name: 'Libya', code: 'LY', dial: '+218', flag: '🇱🇾' },
  { name: 'Morocco', code: 'MA', dial: '+212', flag: '🇲🇦' },
  { name: 'Tunisia', code: 'TN', dial: '+216', flag: '🇹🇳' },
  { name: 'Turkey', code: 'TR', dial: '+90', flag: '🇹🇷' }
];

export default function HassanAllamLandingPage() {
  const WHATSAPP_NUMBER = '201277752731';

  // Lead Form States
  const [fullName, setFullName] = useState('');
  const [selectedCountry, setSelectedCountry] = useState(COUNTRIES[0]);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [submittedName, setSubmittedName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest('.phone-split-container')) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const modalWhatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=Hello%20ir-properties,%20I%20have%20just%20submitted%20my%20inquiry%20for%20the%20Hassan%20Allam%20Properties%20portfolio%20on%20ir-properties.com%20and%20would%20like%20to%20receive%20the%20brochures%20and%20availability%20right%20away.`;

  const filteredCountries = COUNTRIES.filter(
    (c) =>
      c.name.toLowerCase().includes(searchQuery.toLowerCase().trim()) ||
      c.dial.includes(searchQuery.trim()) ||
      c.code.toLowerCase().includes(searchQuery.toLowerCase().trim())
  );

  // Form Submission Handler (Email First, Then Success Modal)
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!fullName.trim()) {
      alert('Please fill in your full name.');
      return;
    }
    if (!phoneNumber.trim() || phoneNumber.trim().length < 6) {
      alert('Please enter a valid phone number.');
      return;
    }

    const fullPhone = `${selectedCountry.dial} ${phoneNumber.trim()}`;
    const clientName = fullName.trim();
    setSubmittedName(clientName);
    setIsSubmitting(true);

    // Save Lead Locally
    try {
      const stored = JSON.parse(localStorage.getItem('ir_properties_hassan_allam_leads') || '[]');
      stored.push({
        name: clientName,
        phone: fullPhone,
        timestamp: new Date().toISOString(),
        portfolio: 'Hassan Allam Properties Portfolio',
        consultancy: 'By ir-properties (Independent Real Estate Consultancy)'
      });
      localStorage.setItem('ir_properties_hassan_allam_leads', JSON.stringify(stored));
    } catch (err) {
      console.warn('Storage notice:', err);
    }

    // Google Tag Conversion Event Tracking
    if (typeof window !== 'undefined') {
      if (typeof window.gtag_report_form_conversion === 'function') {
        try {
          window.gtag_report_form_conversion();
        } catch (err) {
          console.warn('Form conversion notice:', err);
        }
      } else if (typeof window.gtag_report_conversion === 'function') {
        try {
          window.gtag_report_conversion();
        } catch (err) {
          console.warn('Conversion notice:', err);
        }
      } else if (typeof window.gtag === 'function') {
        try {
          window.gtag('event', 'conversion', {
            send_to: 'AW-18125180547/AZcICJes-qQcEIOd4cJD',
            value: 1.0,
            currency: 'EGP'
          });
          window.gtag('event', 'conversion', {
            send_to: 'AW-18125180547',
            value: 1.0,
            currency: 'EGP'
          });
          window.gtag('event', 'generate_lead', {
            send_to: 'AW-18125180547',
            value: 1.0,
            currency: 'EGP',
            event_category: 'form',
            event_label: 'Hassan Allam Lead Inquiry'
          });
          window.gtag('event', 'lead_form_submission', {
            send_to: 'AW-18125180547'
          });
          window.gtag('event', 'conversion', {
            send_to: 'AW-18564830215/A7t2CIvYnLYdEIeos5RF',
            value: 1.0,
            currency: 'EGP'
          });
        } catch (err) {
          console.warn('Gtag notice:', err);
        }
      }
    }

    // Requirement 4: Email Routed & Sent First, Then Success Modal
    try {
      const emailPromise = fetch('https://formsubmit.co/ajax/Rahma@irtkaz.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          name: clientName,
          phone: fullPhone,
          source: 'Hassan Allam Properties Portfolio – ir-properties.com',
          consultancy: 'By ir-properties (Independent Real Estate Consultancy)',
          _replyto: 'Rahma@irtkaz.com',
          _cc: 'Mostafa.a.ashmawy@gmail.com,Mostafa.ashmawy@irtkaz.com',
          _subject: `New Lead: Hassan Allam - ${clientName} (${fullPhone}) [ir-properties.com]`,
          _template: 'table'
        })
      });

      const zapierPromise = fetch('https://hooks.zapier.com/hooks/catch/25429357/uclzmpn/', {
        method: 'POST',
        body: JSON.stringify({
          fullName: clientName,
          phoneNumber: fullPhone,
          portfolio: 'Hassan Allam Properties',
          landingPageUrl: typeof window !== 'undefined' ? window.location.href : 'https://ir-properties.com/hassan-allam/',
          submissionDate: new Date().toISOString()
        })
      });

      const timeoutPromise = new Promise((resolve) => setTimeout(resolve, 5000));
      await Promise.race([
        Promise.allSettled([emailPromise, zapierPromise]),
        timeoutPromise
      ]);
    } catch (err) {
      console.warn('Dispatch notice:', err);
    }

    setIsSubmitting(false);
    setIsModalOpen(true);
    setFullName('');
    setPhoneNumber('');
  };

  return (
    <div className="hap-page-wrapper">
      {/* =========================================================================
           1. IMMERSIVE HERO SECTION WITH SLEEK FLOATING FORM CARD (STARTS AT TOP: 0)
           ========================================================================= */}
      <section className="hap-hero" id="hero">
        <div className="hero-bg-layer">
          <img
            src="/images/hassan-allam/hero-hap-cinematic.jpg"
            alt="Hassan Allam Properties Ultra-Luxury Architecture"
          />
        </div>
        <div className="hero-gradient-overlay" />

        <div className="container hero-content-grid">
          {/* Left Hero Narrative */}
          <div className="hero-narrative">
            <div className="hero-badge-pill">
              <span className="hero-badge-dot" />
              <span>NEW RELEASE</span>
            </div>

            <div className="hero-brand-logo-wrap">
              <img
                src="/images/hassan-allam/logo-hassan-allam.png"
                alt="Hassan Allam Properties"
                className="hero-brand-logo"
              />
            </div>

            <h1 className="hero-title">Park Central by Hassan Allam</h1>
            <p className="hero-subtitle">
              Secure your premium residence in Mostakbal City's most highly-anticipated new phase today. Discover exclusive layouts and take advantage of our limited-time payment plans before they sell out.
            </p>

            <div className="hero-trust-row">
              <div className="trust-item">
                <span className="trust-val">5</span>
                <span className="trust-lbl">Flagship Destinations</span>
              </div>
              <div className="trust-item">
                <span className="trust-val">Up to 10 Yrs</span>
                <span className="trust-lbl">Payment Plans</span>
              </div>
            </div>
          </div>

          {/* Sleek Floating White Lead Capture Form Card */}
          <div className="lead-card-floating">
            <div className="card-heading">
              <h3>Request Property Information</h3>
              <p>Direct dispatch to our senior consultancy team.</p>
            </div>

            <form onSubmit={handleFormSubmit}>
              {/* Full Name (Blank input, NO placeholder) */}
              <div className="field-group">
                <label htmlFor="reactLeadFullName" className="field-label">
                  Full Name
                </label>
                <input
                  type="text"
                  id="reactLeadFullName"
                  className="field-input"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  autoComplete="name"
                />
              </div>

              {/* Phone Number (Split: Country code left with UTF-8 flags, blank input right) */}
              <div className="field-group">
                <label htmlFor="reactLeadPhoneInput" className="field-label">
                  Phone Number
                </label>
                <div className="phone-split-container">
                  {/* Country Trigger Button */}
                  <button
                    type="button"
                    className="country-selector-btn"
                    aria-expanded={isDropdownOpen}
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  >
                    <span className="flag-icon">{selectedCountry.flag}</span>
                    <span className="dial-text">{selectedCountry.dial}</span>
                    <svg width="10" height="6" viewBox="0 0 10 6" fill="currentColor">
                      <path
                        d="M1 1L5 5L9 1"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>

                  {/* Popover */}
                  <div className={`country-popover-panel ${isDropdownOpen ? 'is-open' : ''}`}>
                    <div className="country-filter-wrap">
                      <input
                        type="text"
                        className="country-filter-input"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder=""
                      />
                    </div>
                    <div className="country-items-scroll">
                      {filteredCountries.map((c) => (
                        <div
                          key={c.code}
                          className={`country-item-btn ${c.code === selectedCountry.code ? 'is-active' : ''}`}
                          onClick={() => {
                            setSelectedCountry(c);
                            setIsDropdownOpen(false);
                            setSearchQuery('');
                          }}
                        >
                          <span className="c-flag">{c.flag}</span>
                          <span className="c-name">{c.name}</span>
                          <span className="c-dial">{c.dial}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Blank Phone Input (NO placeholder) */}
                  <input
                    type="tel"
                    id="reactLeadPhoneInput"
                    className="field-input phone-main-input"
                    required
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    autoComplete="tel"
                  />
                </div>
              </div>

              {/* Solid Green Submit Button */}
              <button type="submit" className="btn-submit-action" disabled={isSubmitting}>
                <span>{isSubmitting ? 'Sending Request...' : 'Request Information'}</span>
              </button>

              <p className="card-privacy-notice">Independent Consultancy • Strict Confidentiality</p>
            </form>
          </div>
        </div>
      </section>

      {/* =========================================================================
           3. REFINED PROJECT DATA (ESSENTIALS ONLY — EXACTLY 4 PROJECTS)
           ========================================================================= */}
      <main className="portfolio-showcase-section">
        <div className="container">
          <div className="portfolio-header-block">
            <h2>Featured Developments</h2>
            <p>Key unit types, starting prices, and official payment plans.</p>
          </div>

          {/* =====================================================================
               SECTION 1: PARK CENTRAL (Mostakbal City)
               ===================================================================== */}
          <article className="project-showcase-card" id="park-central">
            <div className="project-showcase-grid">
              <div className="project-visual-frame">
                <img
                  src="/images/hassan-allam/park-central-exterior.jpg"
                  alt="Park Central Mostakbal City"
                  loading="lazy"
                />
                <div className="visual-logo-watermark">
                  <img src="/images/hassan-allam/logo-park-central.png" alt="Park Central" />
                </div>
              </div>
              <div className="project-detail-panel">
                <div>
                  <div className="panel-header">
                    <span className="location-pill">Mostakbal City</span>
                    <div className="project-logo-wrap">
                      <img
                        src="/images/hassan-allam/logo-park-central-dark.png"
                        alt="Park Central by Hassan Allam"
                        className="project-heading-logo"
                      />
                      <h3 className="sr-only">Park Central</h3>
                    </div>
                  </div>

                  <div className="specs-overview-grid">
                    <div className="spec-tile">
                      <div className="spec-tag">Villas</div>
                      <div className="spec-inventory">Townhouses, Twin Houses, and One-Story Villas</div>
                      <div className="spec-price-range">Starting from 20M to 75M EGP</div>
                      <span className="spec-badge">Fully Finished</span>
                    </div>

                    <div className="spec-tile">
                      <div className="spec-tag">Apartments</div>
                      <div className="spec-inventory">1 to 3 Bedrooms & Duplexes</div>
                      <div className="spec-price-range">Starting from 6.2M to 20M EGP</div>
                      <span className="spec-badge">Fully Finished</span>
                    </div>
                  </div>

                  <div className="payment-terms-box">
                    <span className="terms-label">Payment Plan</span>
                    <div className="terms-description">10% Down Payment over 5 Years (or up to 10 Years)</div>
                  </div>
                </div>

                {/* CTA: Chat on WhatsApp */}
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hello%20ir-properties,%20I%20would%20like%20to%20inquire%20about%20Park%20Central%20Mostakbal%20City.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp-chat"
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 20.15C10.57 20.15 9.12 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.81 13.47 3.81 11.91C3.81 7.37 7.5 3.69 12.05 3.69C14.25 3.69 16.31 4.55 17.87 6.11C19.42 7.67 20.28 9.73 20.28 11.93C20.27 16.48 16.59 20.15 12.05 20.15ZM16.56 14.33C16.31 14.2 15.09 13.6 14.86 13.52C14.64 13.44 14.47 13.4 14.31 13.65C14.15 13.9 13.68 14.45 13.54 14.61C13.4 14.77 13.26 14.79 13.01 14.66C12.76 14.54 11.96 14.27 11.01 13.43C10.27 12.77 9.77 11.96 9.63 11.71C9.49 11.46 9.61 11.33 9.74 11.2C9.85 11.09 9.99 10.91 10.12 10.76C10.25 10.61 10.29 10.5 10.37 10.33C10.45 10.16 10.41 10.02 10.35 9.89C10.29 9.76 9.79 8.54 9.59 8.04C9.39 7.56 9.18 7.62 9.03 7.61C8.89 7.6 8.72 7.6 8.55 7.6C8.38 7.6 8.11 7.66 7.88 7.91C7.65 8.16 7 8.77 7 10.01C7 11.25 7.9 12.44 8.02 12.61C8.14 12.77 9.8 15.33 12.33 16.42C12.93 16.68 13.4 16.84 13.76 16.95C14.36 17.14 14.91 17.12 15.34 17.05C15.82 16.98 16.82 16.45 17.03 15.86C17.23 15.27 17.23 14.77 17.17 14.66C17.11 14.56 16.95 14.49 16.7 14.37L16.56 14.33Z" />
                  </svg>
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </article>

          {/* =====================================================================
               SECTION 2: THE VALLEYS (Mostakbal City)
               ===================================================================== */}
          <article className="project-showcase-card" id="the-valleys">
            <div className="project-showcase-grid">
              <div className="project-visual-frame">
                <img
                  src="/images/hassan-allam/the-valleys-villas.jpg"
                  alt="The Valleys Mostakbal City"
                  loading="lazy"
                />
                <div className="visual-logo-watermark">
                  <img src="/images/hassan-allam/logo-the-valleys.png" alt="The Valleys" />
                </div>
              </div>
              <div className="project-detail-panel">
                <div>
                  <div className="panel-header">
                    <span className="location-pill">Mostakbal City</span>
                    <div className="project-logo-wrap">
                      <img
                        src="/images/hassan-allam/logo-the-valleys-dark.png"
                        alt="The Valleys"
                        className="project-heading-logo"
                      />
                      <h3 className="sr-only">The Valleys</h3>
                    </div>
                  </div>

                  <div className="specs-overview-grid">
                    <div className="spec-tile">
                      <div className="spec-tag">Exclusive Villas</div>
                      <div className="spec-inventory">Townhouses, Twinhouses, and Standalones</div>
                      <div className="spec-price-range">Starting from 29M to 55.6M EGP</div>
                      <span className="spec-badge">Fully Finished</span>
                    </div>
                  </div>

                  <div className="payment-terms-box">
                    <span className="terms-label">Payment Plan</span>
                    <div className="terms-description">5% Down Payment + 5% after 3 months over 9 Years</div>
                  </div>
                </div>

                {/* CTA: Chat on WhatsApp */}
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hello%20ir-properties,%20I%20would%20like%20to%20inquire%20about%20The%20Valleys%20Mostakbal%20City.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp-chat"
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 20.15C10.57 20.15 9.12 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.81 13.47 3.81 11.91C3.81 7.37 7.5 3.69 12.05 3.69C14.25 3.69 16.31 4.55 17.87 6.11C19.42 7.67 20.28 9.73 20.28 11.93C20.27 16.48 16.59 20.15 12.05 20.15ZM16.56 14.33C16.31 14.2 15.09 13.6 14.86 13.52C14.64 13.44 14.47 13.4 14.31 13.65C14.15 13.9 13.68 14.45 13.54 14.61C13.4 14.77 13.26 14.79 13.01 14.66C12.76 14.54 11.96 14.27 11.01 13.43C10.27 12.77 9.77 11.96 9.63 11.71C9.49 11.46 9.61 11.33 9.74 11.2C9.85 11.09 9.99 10.91 10.12 10.76C10.25 10.61 10.29 10.5 10.37 10.33C10.45 10.16 10.41 10.02 10.35 9.89C10.29 9.76 9.79 8.54 9.59 8.04C9.39 7.56 9.18 7.62 9.03 7.61C8.89 7.6 8.72 7.6 8.55 7.6C8.38 7.6 8.11 7.66 7.88 7.91C7.65 8.16 7 8.77 7 10.01C7 11.25 7.9 12.44 8.02 12.61C8.14 12.77 9.8 15.33 12.33 16.42C12.93 16.68 13.4 16.84 13.76 16.95C14.36 17.14 14.91 17.12 15.34 17.05C15.82 16.98 16.82 16.45 17.03 15.86C17.23 15.27 17.23 14.77 17.17 14.66C17.11 14.56 16.95 14.49 16.7 14.37L16.56 14.33Z" />
                  </svg>
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </article>

          {/* =====================================================================
               SECTION 3: SWANLAKE RESIDENCE (New Cairo)
               ===================================================================== */}
          <article className="project-showcase-card" id="swanlake-residence">
            <div className="project-showcase-grid">
              <div className="project-visual-frame">
                <img
                  src="/images/hassan-allam/swanlake-residence-apartments.jpg"
                  alt="Swanlake Residence New Cairo"
                  loading="lazy"
                />
                <div className="visual-logo-watermark">
                  <img src="/images/hassan-allam/logo-swanlake-residence.png" alt="Swanlake Residence" />
                </div>
              </div>
              <div className="project-detail-panel">
                <div>
                  <div className="panel-header">
                    <span className="location-pill">New Cairo</span>
                    <div className="project-logo-wrap">
                      <img
                        src="/images/hassan-allam/logo-swanlake-residence-dark.png"
                        alt="Swanlake Residence"
                        className="project-heading-logo"
                      />
                      <h3 className="sr-only">Swanlake Residence</h3>
                    </div>
                  </div>

                  <div className="specs-overview-grid">
                    <div className="spec-tile">
                      <div className="spec-tag">Apartments & Monos</div>
                      <div className="spec-inventory">Luxury Apartments & Signature Monos</div>
                      <div className="spec-price-range">Starting from 15.5M to 59.4M EGP</div>
                    </div>

                    <div className="spec-tile">
                      <div className="spec-tag">Signature Villas</div>
                      <div className="spec-inventory">Twinhouses & Standalones</div>
                      <div className="spec-price-range">Starting from 105M to 183M EGP</div>
                    </div>
                  </div>

                  <div className="payment-terms-box">
                    <span className="terms-label">Payment Plan</span>
                    <div className="terms-description">5% Down Payment over 10 Years</div>
                  </div>
                </div>

                {/* CTA: Chat on WhatsApp */}
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hello%20ir-properties,%20I%20would%20like%20to%20inquire%20about%20Swanlake%20Residence%20New%20Cairo.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp-chat"
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 20.15C10.57 20.15 9.12 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.81 13.47 3.81 11.91C3.81 7.37 7.5 3.69 12.05 3.69C14.25 3.69 16.31 4.55 17.87 6.11C19.42 7.67 20.28 9.73 20.28 11.93C20.27 16.48 16.59 20.15 12.05 20.15ZM16.56 14.33C16.31 14.2 15.09 13.6 14.86 13.52C14.64 13.44 14.47 13.4 14.31 13.65C14.15 13.9 13.68 14.45 13.54 14.61C13.4 14.77 13.26 14.79 13.01 14.66C12.76 14.54 11.96 14.27 11.01 13.43C10.27 12.77 9.77 11.96 9.63 11.71C9.49 11.46 9.61 11.33 9.74 11.2C9.85 11.09 9.99 10.91 10.12 10.76C10.25 10.61 10.29 10.5 10.37 10.33C10.45 10.16 10.41 10.02 10.35 9.89C10.29 9.76 9.79 8.54 9.59 8.04C9.39 7.56 9.18 7.62 9.03 7.61C8.89 7.6 8.72 7.6 8.55 7.6C8.38 7.6 8.11 7.66 7.88 7.91C7.65 8.16 7 8.77 7 10.01C7 11.25 7.9 12.44 8.02 12.61C8.14 12.77 9.8 15.33 12.33 16.42C12.93 16.68 13.4 16.84 13.76 16.95C14.36 17.14 14.91 17.12 15.34 17.05C15.82 16.98 16.82 16.45 17.03 15.86C17.23 15.27 17.23 14.77 17.17 14.66C17.11 14.56 16.95 14.49 16.7 14.37L16.56 14.33Z" />
                  </svg>
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </article>

          {/* =====================================================================
               SECTION 4: ENCORE SWANLAKE (El Gouna)
               ===================================================================== */}
          <article className="project-showcase-card" id="encore-elgouna">
            <div className="project-showcase-grid">
              <div className="project-visual-frame">
                <img
                  src="/images/hassan-allam/encore-elgouna-lagoon.jpg"
                  alt="Encore Swanlake El Gouna"
                  loading="lazy"
                />
                <div className="visual-logo-watermark">
                  <img src="/images/hassan-allam/logo-encore-swanlake.png" alt="Encore Swanlake" />
                </div>
              </div>
              <div className="project-detail-panel">
                <div>
                  <div className="panel-header">
                    <span className="location-pill">El Gouna</span>
                    <div className="project-logo-wrap">
                      <img
                        src="/images/hassan-allam/logo-encore-swanlake-dark.png"
                        alt="Encore Swanlake El Gouna"
                        className="project-heading-logo"
                      />
                      <h3 className="sr-only">Encore Swanlake</h3>
                    </div>
                  </div>

                  <div className="specs-overview-grid">
                    <div className="spec-tile">
                      <div className="spec-tag">Chalets & Duplexes</div>
                      <div className="spec-inventory">Fully Finished Chalets & Duplexes</div>
                      <div className="spec-price-range">Starting from 25.6M to 40.4M EGP</div>
                      <span className="spec-badge">Buy now, live now program</span>
                    </div>
                  </div>

                  <div className="payment-terms-box">
                    <span className="terms-label">Payment Plan</span>
                    <div className="terms-description">5% Down Payment over 8 Years</div>
                  </div>
                </div>

                {/* CTA: Chat on WhatsApp */}
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hello%20ir-properties,%20I%20would%20like%20to%20inquire%20about%20Encore%20Swanlake%20El%20Gouna.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp-chat"
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 20.15C10.57 20.15 9.12 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.81 13.47 3.81 11.91C3.81 7.37 7.5 3.69 12.05 3.69C14.25 3.69 16.31 4.55 17.87 6.11C19.42 7.67 20.28 9.73 20.28 11.93C20.27 16.48 16.59 20.15 12.05 20.15ZM16.56 14.33C16.31 14.2 15.09 13.6 14.86 13.52C14.64 13.44 14.47 13.4 14.31 13.65C14.15 13.9 13.68 14.45 13.54 14.61C13.4 14.77 13.26 14.79 13.01 14.66C12.76 14.54 11.96 14.27 11.01 13.43C10.27 12.77 9.77 11.96 9.63 11.71C9.49 11.46 9.61 11.33 9.74 11.2C9.85 11.09 9.99 10.91 10.12 10.76C10.25 10.61 10.29 10.5 10.37 10.33C10.45 10.16 10.41 10.02 10.35 9.89C10.29 9.76 9.79 8.54 9.59 8.04C9.39 7.56 9.18 7.62 9.03 7.61C8.89 7.6 8.72 7.6 8.55 7.6C8.38 7.6 8.11 7.66 7.88 7.91C7.65 8.16 7 8.77 7 10.01C7 11.25 7.9 12.44 8.02 12.61C8.14 12.77 9.8 15.33 12.33 16.42C12.93 16.68 13.4 16.84 13.76 16.95C14.36 17.14 14.91 17.12 15.34 17.05C15.82 16.98 16.82 16.45 17.03 15.86C17.23 15.27 17.23 14.77 17.17 14.66C17.11 14.56 16.95 14.49 16.7 14.37L16.56 14.33Z" />
                  </svg>
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </article>

          {/* =====================================================================
               SECTION 5: GROVA EASTHILLS (VILLAS ONLY COMMUNITY)
               ===================================================================== */}
          <article className="project-showcase-card" id="grova-easthills">
            <div className="project-showcase-grid">
              <div className="project-visual-frame">
                <img
                  src="/images/hassan-allam/grova-easthills-villas.jpg?v=20261116v1"
                  alt="Grova Easthills by Hassan Allam"
                  loading="lazy"
                />
                <div className="visual-logo-watermark">
                  <img src="/images/hassan-allam/logo-grova-easthills.png" alt="Grova Easthills" />
                </div>
              </div>
              <div className="project-detail-panel">
                <div>
                  <div className="panel-header">
                    <div className="panel-header-badges">
                      <span className="location-pill">New Launch &bull; New Cairo</span>
                      <span className="spec-badge">Villas Only</span>
                      <span className="spec-badge">Fully Finished</span>
                    </div>

                    <div className="project-logo-wrap">
                      <img
                        src="/images/hassan-allam/logo-grova-easthills-dark.png"
                        alt="Grova Easthills by Hassan Allam"
                        className="project-heading-logo"
                      />
                      <h3 className="sr-only">Grova Easthills</h3>
                    </div>

                    <p className="project-subtitle-lead">An exclusive Villas-Only community by Hassan Allam Holding.</p>

                    <div className="project-highlights-grid">
                      <span className="highlight-pill">300 Feddans &bull; 15% Footprint &bull; 1,217 Keys</span>
                      <span className="highlight-pill">Villas Only &bull; Fully Finished</span>
                      <span className="highlight-pill highlight-pill-discount">Exclusive Offer: 25% Cash Discount</span>
                    </div>
                  </div>

                  <div className="specs-overview-grid">
                    <div className="spec-tile">
                      <div className="spec-tag">Townhouses (Middle &amp; Corner)</div>
                      <div className="spec-inventory">BUA: 263 SQM</div>
                      <div className="spec-price-range">Starting from 35,800,000 EGP</div>
                    </div>

                    <div className="spec-tile">
                      <div className="spec-tag">Twin Houses (Type A &amp; B)</div>
                      <div className="spec-inventory">BUA: 276 &ndash; 287 SQM</div>
                      <div className="spec-price-range">Starting from 43,600,000 EGP</div>
                    </div>

                    <div className="spec-tile">
                      <div className="spec-tag">Signature Villas (V1 &amp; V2B)</div>
                      <div className="spec-inventory">BUA: 332 &ndash; 397 SQM</div>
                      <div className="spec-price-range">Starting from 49,800,000 EGP (Up to 77.9M)</div>
                    </div>
                  </div>

                  <div className="payment-terms-box">
                    <span className="terms-label">Payment Plan</span>
                    <div className="terms-description">5% Down Payment + 5% After 3 Months | 8 Years Equal Installments &bull; 7% Maintenance</div>
                  </div>
                </div>

                {/* CTA: Chat on WhatsApp */}
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hello%20ir-properties,%20I%20am%20inquiring%20about%20Grova%20Easthills%20by%20Hassan%20Allam`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp-chat"
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 20.15C10.57 20.15 9.12 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.81 13.47 3.81 11.91C3.81 7.37 7.5 3.69 12.05 3.69C14.25 3.69 16.31 4.55 17.87 6.11C19.42 7.67 20.28 9.73 20.28 11.93C20.27 16.48 16.59 20.15 12.05 20.15ZM16.56 14.33C16.31 14.2 15.09 13.6 14.86 13.52C14.64 13.44 14.47 13.4 14.31 13.65C14.15 13.9 13.68 14.45 13.54 14.61C13.4 14.77 13.26 14.79 13.01 14.66C12.76 14.54 11.96 14.27 11.01 13.43C10.27 12.77 9.77 11.96 9.63 11.71C9.49 11.46 9.61 11.33 9.74 11.2C9.85 11.09 9.99 10.91 10.12 10.76C10.25 10.61 10.29 10.5 10.37 10.33C10.45 10.16 10.41 10.02 10.35 9.89C10.29 9.76 9.79 8.54 9.59 8.04C9.39 7.56 9.18 7.62 9.03 7.61C8.89 7.6 8.72 7.6 8.55 7.6C8.38 7.6 8.11 7.66 7.88 7.91C7.65 8.16 7 8.77 7 10.01C7 11.25 7.9 12.44 8.02 12.61C8.14 12.77 9.8 15.33 12.33 16.42C12.93 16.68 13.4 16.84 13.76 16.95C14.36 17.14 14.91 17.12 15.34 17.05C15.82 16.98 16.82 16.45 17.03 15.86C17.23 15.27 17.23 14.77 17.17 14.66C17.11 14.56 16.95 14.49 16.7 14.37L16.56 14.33Z" />
                  </svg>
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </article>
        </div>
      </main>

      {/* =========================================================================
           4. PRE-FOOTER SECTION (WHY IR-PROPERTIES)
           ========================================================================= */}
      <section className="why-consultancy-section">
        <div className="container">
          <div className="why-minimalist-card">
            <span className="why-minimalist-eyebrow">INDEPENDENT REAL ESTATE CONSULTANCY</span>
            <h2 className="why-minimalist-title">Why Hassan Allam through ir-properties?</h2>
            <div className="why-minimalist-content">
              <p className="why-minimalist-text">
                We provide 100% unbiased consultations to ensure Hassan Allam is the absolute best match for your investment goals compared to the entire market.
              </p>
              <p className="why-minimalist-text">
                Our experts guide you step-by-step to secure prime units and tailor payment plans that perfectly fit your budget.
              </p>
            </div>
            <div className="why-minimalist-cta">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hello%20ir-properties,%20I%20would%20like%20to%20consult%20an%20independent%20advisor%20about%20Hassan%20Allam%20projects.`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp-solid"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 20.15C10.57 20.15 9.12 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.81 13.47 3.81 11.91C3.81 7.37 7.5 3.69 12.05 3.69C14.25 3.69 16.31 4.55 17.87 6.11C19.42 7.67 20.28 9.73 20.28 11.93C20.27 16.48 16.59 20.15 12.05 20.15ZM16.56 14.33C16.31 14.2 15.09 13.6 14.86 13.52C14.64 13.44 14.47 13.4 14.31 13.65C14.15 13.9 13.68 14.45 13.54 14.61C13.4 14.77 13.26 14.79 13.01 14.66C12.76 14.54 11.96 14.27 11.01 13.43C10.27 12.77 9.77 11.96 9.63 11.71C9.49 11.46 9.61 11.33 9.74 11.2C9.85 11.09 9.99 10.91 10.12 10.76C10.25 10.61 10.29 10.5 10.37 10.33C10.45 10.16 10.41 10.02 10.35 9.89C10.29 9.76 9.79 8.54 9.59 8.04C9.39 7.56 9.18 7.62 9.03 7.61C8.89 7.6 8.72 7.6 8.55 7.6C8.38 7.6 8.11 7.66 7.88 7.91C7.65 8.16 7 8.77 7 10.01C7 11.25 7.9 12.44 8.02 12.61C8.14 12.77 9.8 15.33 12.33 16.42C12.93 16.68 13.4 16.84 13.76 16.95C14.36 17.14 14.91 17.12 15.34 17.05C15.82 16.98 16.82 16.45 17.03 15.86C17.23 15.27 17.23 14.77 17.17 14.66C17.11 14.56 16.95 14.49 16.7 14.37L16.56 14.33Z" />
                </svg>
                <span>CONNECT WITH AN INDEPENDENT ADVISOR</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
           5. ULTRA-LUXURY EDITORIAL FOOTER & COMPLIANCE
           ========================================================================= */}
      <footer className="hap-footer">
        <div className="container footer-inner-container">
          <img
            src="/images/hassan-allam/logo-hassan-allam-dark.png"
            alt="Hassan Allam Properties Official Logo"
            className="footer-brand-logo"
            loading="lazy"
          />

          <div className="footer-signature-bar">By ir-properties</div>
          <div className="footer-consultancy-badge">Independent Real Estate Consultancy</div>

          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hello%20ir-properties,%20I%20would%20like%20to%20inquire%20about%20the%20Hassan%20Allam%20Properties%20portfolio.`}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-consultation-btn"
          >
            <svg viewBox="0 0 24 24" className="footer-btn-wa-icon" aria-hidden="true">
              <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 20.15C10.57 20.15 9.12 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.81 13.47 3.81 11.91C3.81 7.37 7.5 3.69 12.05 3.69C14.25 3.69 16.31 4.55 17.87 6.11C19.42 7.67 20.28 9.73 20.28 11.93C20.27 16.48 16.59 20.15 12.05 20.15ZM16.56 14.33C16.31 14.2 15.09 13.6 14.86 13.52C14.64 13.44 14.47 13.4 14.31 13.65C14.15 13.9 13.68 14.45 13.54 14.61C13.4 14.77 13.26 14.79 13.01 14.66C12.76 14.54 11.96 14.27 11.01 13.43C10.27 12.77 9.77 11.96 9.63 11.71C9.49 11.46 9.61 11.33 9.74 11.2C9.85 11.09 9.99 10.91 10.12 10.76C10.25 10.61 10.29 10.5 10.37 10.33C10.45 10.16 10.41 10.02 10.35 9.89C10.29 9.76 9.79 8.54 9.59 8.04C9.39 7.56 9.18 7.62 9.03 7.61C8.89 7.6 8.72 7.6 8.55 7.6C8.38 7.6 8.11 7.66 7.88 7.91C7.65 8.16 7 8.77 7 10.01C7 11.25 7.9 12.44 8.02 12.61C8.14 12.77 9.8 15.33 12.33 16.42C12.93 16.68 13.4 16.84 13.76 16.95C14.36 17.14 14.91 17.12 15.34 17.05C15.82 16.98 16.82 16.45 17.03 15.86C17.23 15.27 17.23 14.77 17.17 14.66C17.11 14.56 16.95 14.49 16.7 14.37L16.56 14.33Z" />
            </svg>
            <span>Direct WhatsApp Consultation</span>
          </a>

          <p className="footer-compliance-text">
            This landing page is presented by <strong>ir-properties.com</strong>, an Independent Real Estate Consultancy. It is not an
            official direct web property of Hassan Allam Properties. All trademarks, project designations, and architectural visualizations
            belong to their respective developers. Displayed prices, terms, and inventory availability are subject to official developer
            verification and market change without notice.
          </p>

          <div className="footer-legal-links">
            <a href="/privacy-policy">Privacy Policy</a>
            <span className="footer-legal-sep">&bull;</span>
            <a href="/terms-conditions">Terms &amp; Conditions</a>
          </div>

          <div className="footer-copyright-line">
            &copy; 2026 ir-properties.com &mdash; Independent Real Estate Consultancy. All Rights Reserved.
          </div>
        </div>
      </footer>

      {/* =========================================================================
           6. FLOATING WHATSAPP BUTTON (+201277752731)
           ========================================================================= */}
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hello%20ir-properties,%20I%20would%20like%20to%20inquire%20about%20the%20Hassan%20Allam%20portfolio.`}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-whatsapp-widget"
        aria-label="Direct WhatsApp Consultation"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 20.15C10.57 20.15 9.12 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.81 13.47 3.81 11.91C3.81 7.37 7.5 3.69 12.05 3.69C14.25 3.69 16.31 4.55 17.87 6.11C19.42 7.67 20.28 9.73 20.28 11.93C20.27 16.48 16.59 20.15 12.05 20.15ZM16.56 14.33C16.31 14.2 15.09 13.6 14.86 13.52C14.64 13.44 14.47 13.4 14.31 13.65C14.15 13.9 13.68 14.45 13.54 14.61C13.4 14.77 13.26 14.79 13.01 14.66C12.76 14.54 11.96 14.27 11.01 13.43C10.27 12.77 9.77 11.96 9.63 11.71C9.49 11.46 9.61 11.33 9.74 11.2C9.85 11.09 9.99 10.91 10.12 10.76C10.25 10.61 10.29 10.5 10.37 10.33C10.45 10.16 10.41 10.02 10.35 9.89C10.29 9.76 9.79 8.54 9.59 8.04C9.39 7.56 9.18 7.62 9.03 7.61C8.89 7.6 8.72 7.6 8.55 7.6C8.38 7.6 8.11 7.66 7.88 7.91C7.65 8.16 7 8.77 7 10.01C7 11.25 7.9 12.44 8.02 12.61C8.14 12.77 9.8 15.33 12.33 16.42C12.93 16.68 13.4 16.84 13.76 16.95C14.36 17.14 14.91 17.12 15.34 17.05C15.82 16.98 16.82 16.45 17.03 15.86C17.23 15.27 17.23 14.77 17.17 14.66C17.11 14.56 16.95 14.49 16.7 14.37L16.56 14.33Z" />
        </svg>
        <span className="widget-label">Chat on WhatsApp</span>
      </a>

      {/* =========================================================================
           7. SUCCESS MODAL OVERLAY (EXACT REQUIRED TEXT)
           ========================================================================= */}
      <div
        className={`modal-overlay success-modal-overlay ${isModalOpen ? 'is-active' : ''}`}
        role="dialog"
        aria-modal="true"
        onClick={(e) => {
          if (e.target.classList.contains('modal-overlay')) {
            setIsModalOpen(false);
          }
        }}
      >
        <div className="modal-dialog-card success-modal-card">
          <div className="modal-success-icon modal-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
          </div>

          <h3 className="modal-header-title modal-title">Registration Received</h3>

          {/* EXACT REQUIRED TEXT */}
          <p className="modal-body-text modal-message">
            Thank you <strong>{submittedName || 'there'}</strong>! Your registration has been securely dispatched to our senior consultancy team. A dedicated property advisor will contact you shortly with full brochures, master plans, and unit availability.
          </p>

          {/* SOLID GREEN "CHAT ON WHATSAPP" BUTTON */}
          <a
            href={modalWhatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-modal-whatsapp btn-modal-wa"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 20.15C10.57 20.15 9.12 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.81 13.47 3.81 11.91C3.81 7.37 7.5 3.69 12.05 3.69C14.25 3.69 16.31 4.55 17.87 6.11C19.42 7.67 20.28 9.73 20.28 11.93C20.27 16.48 16.59 20.15 12.05 20.15ZM16.56 14.33C16.31 14.2 15.09 13.6 14.86 13.52C14.64 13.44 14.47 13.4 14.31 13.65C14.15 13.9 13.68 14.45 13.54 14.61C13.4 14.77 13.26 14.79 13.01 14.66C12.76 14.54 11.96 14.27 11.01 13.43C10.27 12.77 9.77 11.96 9.63 11.71C9.49 11.46 9.61 11.33 9.74 11.2C9.85 11.09 9.99 10.91 10.12 10.76C10.25 10.61 10.29 10.5 10.37 10.33C10.45 10.16 10.41 10.02 10.35 9.89C10.29 9.76 9.79 8.54 9.59 8.04C9.39 7.56 9.18 7.62 9.03 7.61C8.89 7.6 8.72 7.6 8.55 7.6C8.38 7.6 8.11 7.66 7.88 7.91C7.65 8.16 7 8.77 7 10.01C7 11.25 7.9 12.44 8.02 12.61C8.14 12.77 9.8 15.33 12.33 16.42C12.93 16.68 13.4 16.84 13.76 16.95C14.36 17.14 14.91 17.12 15.34 17.05C15.82 16.98 16.82 16.45 17.03 15.86C17.23 15.27 17.23 14.77 17.17 14.66C17.11 14.56 16.95 14.49 16.7 14.37L16.56 14.33Z" />
            </svg>
            <span>CHAT ON WHATSAPP</span>
          </a>

          {/* CLOSE WINDOW LINK */}
          <button
            type="button"
            className="btn-modal-dismiss modal-close-link"
            onClick={() => setIsModalOpen(false)}
          >
            Close Window
          </button>
        </div>
      </div>
    </div>
  );
}
