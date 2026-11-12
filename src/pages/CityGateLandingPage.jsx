import React, { useState } from 'react';
import '../../city-gate/city-gate.css';

/**
 * City Gate New Cairo Internal Landing Page Component
 * Feature: Sunray Lagoon Residences (Alam El Rom) New Launch Integration
 * Internal Route: ir-properties.com/city-gate & ir-properties.com/citygate
 * Entity: By ir-properties — Independent Real Estate Consultancy
 * Aesthetic: Ultra-Chic Editorial Luxury | Warm Terracotta & Copper Palette
 * WhatsApp Number: +201277752731
 */
export default function CityGateLandingPage() {
  const WHATSAPP_NUMBER = '201277752731';
  const WHATSAPP_SUNRAY_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Hello%2C%20I%20am%20inquiring%20about%20the%20New%20Launch%20Sunray%20Lagoon%20(Alam%20El%20Rom)%20at%20City%20Gate`;
  const WHATSAPP_HERO_LINK = WHATSAPP_SUNRAY_LINK;
  const WHATSAPP_RIVERSIDE_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Hello%2C%20I%20am%20inquiring%20about%20Riverside%20Apartments%20at%20City%20Gate`;
  const WHATSAPP_VILLAS_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Hello%2C%20I%20am%20inquiring%20about%20Golf%20Villas%20at%20City%20Gate`;

  // Form State
  const [fullName, setFullName] = useState('');
  const [countryCode, setCountryCode] = useState('+20');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [submittedName, setSubmittedName] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!fullName.trim() || !phoneNumber.trim()) {
      return;
    }

    setSubmittedName(fullName.trim());
    setIsModalOpen(true);

    // Analytics / Dispatch
    console.log('City Gate Inquiry Dispatched:', {
      project: 'City Gate New Cairo',
      launch: 'Sunray Lagoon Residences (Alam El Rom)',
      developer: 'Qatari Diar Egypt',
      consultancy: 'ir-properties',
      name: fullName.trim(),
      phone: `${countryCode} ${phoneNumber.trim()}`,
      timestamp: new Date().toISOString()
    });

    // Google Ads & Tag Lead Conversion Event for Form Submission
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('event', 'conversion', {
        'send_to': 'AW-18125180547/AZcICJes-qQcEIOd4cJD'
      });
      window.gtag('event', 'generate_lead', {
        event_category: 'form',
        event_label: 'City Gate Lead Inquiry'
      });
    }

    // Reset inputs
    setFullName('');
    setPhoneNumber('');
    setCountryCode('+20');
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="city-gate-page">
      {/* ==========================================================================
           1. HERO SECTION (NEW LAUNCH FOCUS - SUNRAY LAGOON RESIDENCES / ALAM EL ROM)
           Starts directly at top: 0 (No Top Fixed Navbar)
           ========================================================================== */}
      <header className="cg-hero-section" id="hero">
        <div className="cg-container">
          
          <div className="cg-hero-grid">
            
            {/* Hero Left Column: Editorial Narrative & Value Proposition */}
            <div className="cg-hero-narrative">
              
              {/* PRISTINE WHITE LOGO PLAQUE: LOGOS ARE 100% CLEAR, SHARP, AND NOT WHITE */}
              <div className="cg-hero-brand-plaque">
                <img 
                  src="/qatari-diar-official.png" 
                  onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = 'images/qatari-diar-official.png'; }}
                  alt="Qatari Diar Egypt Official Logo" 
                  className="cg-hero-qatari-logo" 
                  width="130" 
                  height="48"
                />
                <div className="cg-plaque-divider"></div>
                <img 
                  src="/citygate-official.png" 
                  onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = 'images/citygate-official.png'; }}
                  alt="City Gate New Cairo Official Logo" 
                  className="cg-hero-citygate-logo" 
                  width="120" 
                  height="40"
                />
                <div className="cg-plaque-divider"></div>
                <img 
                  src="/alam-al-roum-seal-dark.png" 
                  onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = 'images/alam-al-roum-seal-dark.png'; }}
                  alt="Alam El Rom Seal علم الروم" 
                  className="cg-hero-alam-seal" 
                  width="44" 
                  height="44"
                />
                <div className="cg-plaque-by-box">
                  <span className="cg-plaque-by-text">By ir-properties</span>
                  <span className="cg-plaque-role-text">Independent Real Estate Consultancy</span>
                </div>
              </div>

              {/* Eyebrow Badge as requested: NEW LAUNCH • CITY GATE */}
              <div className="cg-badge-row">
                <div className="cg-status-badge cg-status-badge-launch">
                  <span className="cg-pulse-dot"></span>
                  NEW LAUNCH &bull; CITY GATE
                </div>
                <div className="cg-price-badge cg-price-badge-copper">
                  Starting from 8.26M EGP
                </div>
              </div>

              {/* Main Title as requested: City Gate: Sunray Lagoon Residences (Alam El Rom) */}
              <h1 className="cg-hero-title">
                City Gate: Sunray Lagoon Residences <span className="cg-hero-arabic-title">(علم الروم)</span>
              </h1>

              {/* Subtitle as requested: Discover 'Life in New Light'. Premium residences delivered Fully Finished + Kitchen Cabinets. */}
              <div className="cg-hero-subtitle-bar">
                <span>Discover &lsquo;Life in New Light&rsquo; &bull; Fully Finished + Kitchen Cabinets</span>
              </div>

              <p className="cg-hero-desc">
                Discover &lsquo;Life in New Light&rsquo; at City Gate&rsquo;s marquee waterfront launch. Secure your premium residence with a <strong>5% Down Payment</strong> and equal installments up to <strong>10 Years</strong>. Spanning swimmable sandy beach lagoons with world-class master planning by Qatari Diar.
              </p>

              {/* Metric Highlights Strip */}
              <div className="cg-hero-metrics-grid">
                <div className="cg-hero-metric-card">
                  <div className="cg-metric-value">From 8.26M</div>
                  <div className="cg-metric-label">Starting Price</div>
                </div>
                <div className="cg-hero-metric-card">
                  <div className="cg-metric-value">5% DP</div>
                  <div className="cg-metric-label">Down Payment</div>
                </div>
                <div className="cg-hero-metric-card">
                  <div className="cg-metric-value">10 Yrs</div>
                  <div className="cg-metric-label">Equal Installments</div>
                </div>
                <div className="cg-hero-metric-card">
                  <div className="cg-metric-value">Finished</div>
                  <div className="cg-metric-label">+ Kitchen Cabinets</div>
                </div>
              </div>

              {/* Hero Action CTAs */}
              <div className="cg-hero-cta-group">
                <a 
                  href={WHATSAPP_HERO_LINK} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-cg-green"
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.969.541 1.879.809 2.796.809 3.183 0 5.77-2.587 5.77-5.766.001-3.187-2.575-5.996-5.77-5.996zm7.986 5.766c-.001 4.405-3.584 7.988-7.986 7.988-1.379 0-2.674-.356-3.812-1.002l-4.219 1.106 1.127-4.116c-.714-1.189-1.082-2.56-1.082-3.976.002-4.406 3.586-7.988 7.988-7.988 4.398.001 7.984 3.584 7.984 7.988z"/>
                  </svg>
                  INQUIRE ON WHATSAPP
                </a>

                <a href="#sunray" className="btn-cg-ghost-light">
                  Explore Sunray Lagoon &darr;
                </a>
              </div>
            </div>

            {/* Hero Right Column: LEAD CAPTURE FORM (CLEAN UI) */}
            <div className="cg-form-card-wrap" id="register">
              <div className="cg-clean-form-card">
                
                <div className="cg-form-header">
                  <span className="cg-form-eyebrow">DIRECT ADVISORY ACCESS</span>
                  <h2 className="cg-form-title">REGISTER YOUR INTEREST</h2>
                  <p className="cg-form-subtitle">Receive verified master plans, pricing, and available unit allocations.</p>
                </div>

                <form onSubmit={handleFormSubmit} noValidate>
                  {/* Full Name Input: Blank input, NO placeholder examples */}
                  <div className="cg-form-group">
                    <label htmlFor="cgFullName" className="cg-form-label">Full Name</label>
                    <input 
                      type="text" 
                      id="cgFullName" 
                      name="fullName" 
                      className="cg-input-text" 
                      required 
                      autoComplete="name"
                      placeholder=""
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                    />
                  </div>

                  {/* Phone Number Input: Split layout with proper UTF-8 flags */}
                  <div className="cg-form-group">
                    <label htmlFor="cgPhoneNumber" className="cg-form-label">Phone Number</label>
                    <div className="cg-phone-split">
                      <div className="cg-country-select-wrapper">
                        <select 
                          id="cgCountryCode" 
                          name="countryCode" 
                          className="cg-country-select" 
                          aria-label="Country Code"
                          value={countryCode}
                          onChange={(e) => setCountryCode(e.target.value)}
                        >
                          <option value="+20">🇪🇬 +20</option>
                          <option value="+966">🇸🇦 +966</option>
                          <option value="+971">🇦🇪 +971</option>
                          <option value="+974">🇶🇦 +974</option>
                          <option value="+965">🇰🇼 +965</option>
                          <option value="+973">🇧🇭 +973</option>
                          <option value="+968">🇴🇲 +968</option>
                          <option value="+44">🇬🇧 +44</option>
                          <option value="+1">🇺🇸 +1</option>
                          <option value="+1">🇨🇦 +1</option>
                          <option value="+49">🇩🇪 +49</option>
                          <option value="+33">🇫🇷 +33</option>
                          <option value="+39">🇮🇹 +39</option>
                          <option value="+962">🇯🇴 +962</option>
                          <option value="+961">🇱🇧 +961</option>
                        </select>
                        <svg className="cg-select-chevron" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                      </div>
                      <input 
                        type="tel" 
                        id="cgPhoneNumber" 
                        name="phoneNumber" 
                        className="cg-phone-input" 
                        required 
                        autoComplete="tel-national"
                        placeholder=""
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                      />
                    </div>
                  </div>

                  {/* Submit Button: Solid Dark Charcoal */}
                  <button type="submit" className="btn-cg-submit">
                    SUBMIT
                  </button>
                </form>

                {/* Legal Disclaimer Notice */}
                <div className="cg-form-legal-notice">
                  By submitting this inquiry, you request verified brochures, inventory availability, and advisory from <strong>ir-properties</strong>, an Independent Real Estate Consultancy. You consent to communications under our <a href="/privacy-policy">Privacy Policy</a> and <a href="/terms-conditions">Terms &amp; Conditions</a>. This landing page is operated by ir-properties and is not the official developer website.
                </div>

              </div>
            </div>

          </div>

        </div>
      </header>

      {/* ==========================================================================
           2. NEW DEDICATED SECTION: SUNRAY LAGOON RESIDENCES (علم الروم)
           Rich Earthy Brown / Warm Copper Palette (#933D18) & Editorial Layout
           ========================================================================== */}
      <section className="cg-sunray-section" id="sunray">
        <div className="cg-container">

          {/* Official Twin Emblems & Brand Crest */}
          <div className="cg-sunray-crest-row">
            <div className="cg-sunray-emblems-box">
              <img 
                src="/alam-al-roum-seal-trans.png" 
                onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = 'images/alam-al-roum-seal-trans.png'; }}
                alt="Alam El Rom Official Seal علم الروم" 
                className="cg-sunray-seal-img" 
                width="56" 
                height="56" 
                loading="lazy"
              />
              <div className="cg-sunray-compass-icon" aria-hidden="true">
                <svg viewBox="0 0 100 100" width="52" height="52" fill="none" stroke="#FAF5F0" strokeWidth="2.5">
                  <circle cx="50" cy="50" r="46" stroke="rgba(250, 245, 240, 0.45)" strokeWidth="1.5" />
                  <path d="M50 8 L54 44 L92 50 L54 56 L50 92 L46 56 L8 50 L46 44 Z" fill="#FAF5F0" />
                  <circle cx="50" cy="22" r="1.5" fill="#FAF5F0"/>
                  <circle cx="78" cy="50" r="1.5" fill="#FAF5F0"/>
                  <circle cx="50" cy="78" r="1.5" fill="#FAF5F0"/>
                  <circle cx="22" cy="50" r="1.5" fill="#FAF5F0"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Section Header */}
          <div className="cg-sunray-header">
            <div className="cg-sunray-pill-badge">
              OFFICIAL DEVELOPER LAUNCH &bull; QATARI DIAR EGYPT
            </div>
            <h2 className="cg-sunray-title">
              Sunray Lagoon Residences
              <span className="cg-sunray-sub-arabic">(علم الروم)</span>
            </h2>
            <div className="cg-sunray-tagline">Life in New Light</div>
            <p className="cg-sunray-lead">
              A welcoming waterfront enclave drawn around the calm of 28 kilometers of swimmable sandy-beach lagoons. Thoughtfully crafted low-rise residences delivered fully finished with integrated kitchen cabinets, offering flexible 10-year installment horizons.
            </p>

            {/* Specs Badge Bar */}
            <div className="cg-sunray-specs-strip">
              <div className="cg-sunray-spec-item">
                <span className="cg-spec-dot"></span>
                <strong>Finishing:</strong> Fully Finished + Kitchen Cabinets
              </div>
              <div className="cg-sunray-spec-divider"></div>
              <div className="cg-sunray-spec-item">
                <span className="cg-spec-dot"></span>
                <strong>Payment Plan:</strong> 5% Down Payment | 10 Years Equal Installments
              </div>
              <div className="cg-sunray-spec-divider"></div>
              <div className="cg-sunray-spec-item">
                <span className="cg-spec-dot"></span>
                <strong>Starting Price:</strong> From 8,260,000 EGP
              </div>
            </div>
          </div>

          {/* Editorial Visual Showcase (Lagoon Beach + Interior + Architecture) */}
          <div className="cg-sunray-showcase-grid">
            <div className="cg-showcase-card cg-showcase-main">
              <img 
                src="/sunray-lagoon-terrace.jpg" 
                onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = 'images/sunray-lagoon-terrace.jpg'; }}
                alt="Sunray Lagoon Residences Waterfront Lifestyle" 
                className="cg-showcase-img" 
                loading="lazy" 
                width="800" 
                height="500"
              />
              <div className="cg-showcase-overlay">
                <span className="cg-showcase-tag">THE LAGOON EXPERIENCE</span>
                <h3>Sandy Beachfront &amp; Swimmable Lagoons</h3>
                <p>Soft-edged turquoise waters at your private doorstep.</p>
              </div>
            </div>

            <div className="cg-showcase-col">
              <div className="cg-showcase-card">
                <img 
                  src="/sunray-living-lagoon.jpg" 
                  onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = 'images/sunray-living-lagoon.jpg'; }}
                  alt="Sunray Lagoon Residences Interior With Kitchen Cabinets" 
                  className="cg-showcase-img" 
                  loading="lazy" 
                  width="450" 
                  height="280"
                />
                <div className="cg-showcase-overlay">
                  <span className="cg-showcase-tag">TURNKEY LUXURY</span>
                  <h4>Fully Finished + Kitchen Cabinets</h4>
                </div>
              </div>

              <div className="cg-showcase-card">
                <img 
                  src="/sunray-grand-exterior.jpg" 
                  onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = 'images/sunray-grand-exterior.jpg'; }}
                  alt="Grand Low-Rise Coastal Architecture" 
                  className="cg-showcase-img" 
                  loading="lazy" 
                  width="450" 
                  height="280"
                />
                <div className="cg-showcase-overlay">
                  <span className="cg-showcase-tag">MASTER ARCHITECTURE</span>
                  <h4>Low-Rise Buildings Designed by SOM</h4>
                </div>
              </div>
            </div>
          </div>

          {/* Starting Prices By Typology (Extracted From Developer Brochure) */}
          <div className="cg-sunray-typologies-wrap">
            <div className="cg-sunray-subheading">
              <h3>Starting Prices by Typology</h3>
              <p>Verified developer pricing schedule across Grand (S), Light (J1), and Crest (J2) residential collections.</p>
            </div>

            <div className="cg-typology-cards-grid">

              {/* 1 Bedroom */}
              <div className="cg-typology-card">
                <div className="cg-typology-badge">1 BEDROOM</div>
                <div className="cg-typology-price-box">
                  <span className="cg-typology-from">Starting From</span>
                  <div className="cg-typology-price">8,260,000 <span className="cg-typology-curr">EGP</span></div>
                  <span className="cg-typology-sub">Grand S (59m&sup2;)</span>
                </div>
                <div className="cg-typology-details">
                  <div className="cg-typology-line">
                    <span>BUA Horizon</span>
                    <strong>59m&sup2; &ndash; 65m&sup2;</strong>
                  </div>
                  <div className="cg-typology-line">
                    <span>Average Price</span>
                    <strong>8.56M &ndash; 10.93M EGP</strong>
                  </div>
                  <div className="cg-typology-line">
                    <span>Finishing</span>
                    <strong>Fully Finished + Cabinets</strong>
                  </div>
                  <div className="cg-typology-line">
                    <span>Collections</span>
                    <strong>Grand S &bull; Light J1 &bull; Crest J2</strong>
                  </div>
                </div>
                <a 
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hello%2C%20I%20am%20inquiring%20about%20the%201%20Bedroom%20residences%20at%20Sunray%20Lagoon%20(Alam%20El%20Rom)%20City%20Gate`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-cg-typology-cta"
                >
                  Inquire 1 Bedroom &rarr;
                </a>
              </div>

              {/* 2 Bedrooms */}
              <div className="cg-typology-card">
                <div className="cg-typology-badge">2 BEDROOMS</div>
                <div className="cg-typology-price-box">
                  <span className="cg-typology-from">Starting From</span>
                  <div className="cg-typology-price">13,000,000 <span className="cg-typology-curr">EGP</span></div>
                  <span className="cg-typology-sub">Light J1 (92m&sup2;)</span>
                </div>
                <div className="cg-typology-details">
                  <div className="cg-typology-line">
                    <span>BUA Horizon</span>
                    <strong>92m&sup2; &ndash; 111m&sup2;</strong>
                  </div>
                  <div className="cg-typology-line">
                    <span>Average Price</span>
                    <strong>14.10M &ndash; 17.97M EGP</strong>
                  </div>
                  <div className="cg-typology-line">
                    <span>Finishing</span>
                    <strong>Fully Finished + Cabinets</strong>
                  </div>
                  <div className="cg-typology-line">
                    <span>Collections</span>
                    <strong>Light J1 &bull; Crest J2 &bull; Grand S</strong>
                  </div>
                </div>
                <a 
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hello%2C%20I%20am%20inquiring%20about%20the%202%20Bedroom%20residences%20at%20Sunray%20Lagoon%20(Alam%20El%20Rom)%20City%20Gate`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-cg-typology-cta"
                >
                  Inquire 2 Bedrooms &rarr;
                </a>
              </div>

              {/* 3 Bedrooms */}
              <div className="cg-typology-card">
                <div className="cg-typology-badge">3 BEDROOMS</div>
                <div className="cg-typology-price-box">
                  <span className="cg-typology-from">Starting From</span>
                  <div className="cg-typology-price">16,690,000 <span className="cg-typology-curr">EGP</span></div>
                  <span className="cg-typology-sub">Crest J2 (117m&sup2;)</span>
                </div>
                <div className="cg-typology-details">
                  <div className="cg-typology-line">
                    <span>BUA Horizon</span>
                    <strong>117m&sup2; &ndash; 133m&sup2;</strong>
                  </div>
                  <div className="cg-typology-line">
                    <span>Average Price</span>
                    <strong>18.02M &ndash; 21.95M EGP</strong>
                  </div>
                  <div className="cg-typology-line">
                    <span>Finishing</span>
                    <strong>Fully Finished + Cabinets</strong>
                  </div>
                  <div className="cg-typology-line">
                    <span>Collections</span>
                    <strong>Crest J2 &bull; Light J1 &bull; Grand S</strong>
                  </div>
                </div>
                <a 
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hello%2C%20I%20am%20inquiring%20about%20the%203%20Bedroom%20residences%20at%20Sunray%20Lagoon%20(Alam%20El%20Rom)%20City%20Gate`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-cg-typology-cta"
                >
                  Inquire 3 Bedrooms &rarr;
                </a>
              </div>

              {/* Penthouses (2 & 3 BR) */}
              <div className="cg-typology-card highlight-card">
                <div className="cg-typology-badge">PENTHOUSES (2 &amp; 3 BR)</div>
                <div className="cg-typology-price-box">
                  <span className="cg-typology-from">Starting From</span>
                  <div className="cg-typology-price">20,250,000 <span className="cg-typology-curr">EGP</span></div>
                  <span className="cg-typology-sub">Light J1 (164m&sup2;)</span>
                </div>
                <div className="cg-typology-details">
                  <div className="cg-typology-line">
                    <span>BUA Horizon</span>
                    <strong>164m&sup2; &ndash; 197m&sup2;</strong>
                  </div>
                  <div className="cg-typology-line">
                    <span>Average Price</span>
                    <strong>21.02M &ndash; 27.20M EGP</strong>
                  </div>
                  <div className="cg-typology-line">
                    <span>Features</span>
                    <strong>Rooftop Sky Terraces</strong>
                  </div>
                  <div className="cg-typology-line">
                    <span>Collections</span>
                    <strong>Light J1 (2 &amp; 3 BR PH)</strong>
                  </div>
                </div>
                <a 
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hello%2C%20I%20am%20inquiring%20about%20the%20Penthouses%20at%20Sunray%20Lagoon%20(Alam%20El%20Rom)%20City%20Gate`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-cg-typology-cta"
                >
                  Inquire Penthouses &rarr;
                </a>
              </div>

            </div>
          </div>

          {/* Developer Verified Pricing Schedule Table */}
          <div className="cg-sunray-table-section">
            <div className="cg-sunray-table-header">
              <div>
                <h4>Official Developer Price Schedule</h4>
                <p>Directly extracted from Qatari Diar Egypt official price sheet.</p>
              </div>
              <div className="cg-sunray-table-dev-logo">
                <img 
                  src="/qatari-diar-official.png" 
                  onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = 'images/qatari-diar-official.png'; }}
                  alt="Qatari Diar Egypt" 
                  width="90" 
                  height="32"
                />
              </div>
            </div>

            <div className="cg-table-responsive-wrapper">
              <table className="cg-sunray-table">
                <thead>
                  <tr>
                    <th>TYPE</th>
                    <th>FEATURES</th>
                    <th>BUA M&sup2;</th>
                    <th>MIN. PRICE</th>
                    <th>AVG. PRICE</th>
                    <th>MAX. PRICE</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Light (J1) */}
                  <tr className="cg-row-heading"><td colSpan={6}>Light (J1) Collection</td></tr>
                  <tr><td>Light (J1)</td><td>1 Br</td><td>60 m&sup2;</td><td>8,560,000 EGP</td><td>8,788,000 EGP</td><td>9,360,000 EGP</td></tr>
                  <tr><td>Light (J1)</td><td>1 Br</td><td>65 m&sup2;</td><td>10,130,000 EGP</td><td>10,930,000 EGP</td><td>12,500,000 EGP</td></tr>
                  <tr><td>Light (J1)</td><td>2 Br</td><td>92 m&sup2;</td><td>13,000,000 EGP</td><td>14,099,000 EGP</td><td>16,330,000 EGP</td></tr>
                  <tr><td>Light (J1)</td><td>2 Br</td><td>111 m&sup2;</td><td>16,860,000 EGP</td><td>17,969,000 EGP</td><td>20,000,000 EGP</td></tr>
                  <tr><td>Light (J1)</td><td>3 Br</td><td>119 m&sup2;</td><td>17,760,000 EGP</td><td>19,314,000 EGP</td><td>22,480,000 EGP</td></tr>
                  <tr><td>Light (J1)</td><td>3 Br</td><td>127 m&sup2;</td><td>17,950,000 EGP</td><td>19,511,000 EGP</td><td>22,990,000 EGP</td></tr>
                  <tr><td>Light (J1)</td><td>2 Br + Penthouse</td><td>164 m&sup2;</td><td>20,250,000 EGP</td><td>21,022,000 EGP</td><td>21,880,000 EGP</td></tr>
                  <tr><td>Light (J1)</td><td>3 Br + Penthouse</td><td>187 m&sup2;</td><td>25,340,000 EGP</td><td>26,314,000 EGP</td><td>27,560,000 EGP</td></tr>
                  <tr><td>Light (J1)</td><td>3 Br + Penthouse</td><td>197 m&sup2;</td><td>26,360,000 EGP</td><td>27,195,000 EGP</td><td>28,130,000 EGP</td></tr>

                  {/* Crest (J2) */}
                  <tr className="cg-row-heading"><td colSpan={6}>Crest (J2) Collection</td></tr>
                  <tr><td>Crest (J2)</td><td>1 Br</td><td>63 m&sup2;</td><td>9,900,000 EGP</td><td>10,489,000 EGP</td><td>11,980,000 EGP</td></tr>
                  <tr><td>Crest (J2)</td><td>2 Br</td><td>92 m&sup2;</td><td>13,970,000 EGP</td><td>14,857,000 EGP</td><td>17,120,000 EGP</td></tr>
                  <tr><td>Crest (J2)</td><td>3 Br</td><td>117 m&sup2;</td><td>16,690,000 EGP</td><td>18,019,000 EGP</td><td>21,630,000 EGP</td></tr>

                  {/* Grand (S) */}
                  <tr className="cg-row-heading"><td colSpan={6}>Grand (S) Collection</td></tr>
                  <tr><td>Grand (S)</td><td>1 Br</td><td>59 m&sup2;</td><td>8,260,000 EGP</td><td>8,564,000 EGP</td><td>9,090,000 EGP</td></tr>
                  <tr><td>Grand (S)</td><td>2 Br</td><td>96 m&sup2;</td><td>14,520,000 EGP</td><td>15,350,000 EGP</td><td>17,540,000 EGP</td></tr>
                  <tr><td>Grand (S)</td><td>2 Br</td><td>103 m&sup2;</td><td>15,980,000 EGP</td><td>16,915,000 EGP</td><td>19,010,000 EGP</td></tr>
                  <tr><td>Grand (S)</td><td>3 Br</td><td>125 m&sup2;</td><td>18,240,000 EGP</td><td>19,575,000 EGP</td><td>22,730,000 EGP</td></tr>
                  <tr><td>Grand (S)</td><td>3 Br</td><td>133 m&sup2;</td><td>20,980,000 EGP</td><td>21,947,000 EGP</td><td>24,410,000 EGP</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Marquee WhatsApp CTA Section */}
          <div className="cg-sunray-cta-box">
            <div className="cg-sunray-cta-text">
              <h3>Secure Your Sunray Lagoon Allocation</h3>
              <p>Direct priority reservation, floor plans, and verified payment structuring via our senior consultancy team.</p>
            </div>
            {/* Solid Green WhatsApp button (#25D366) with exact requested link */}
            <a 
              href={WHATSAPP_SUNRAY_LINK} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-cg-green btn-cg-large"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.969.541 1.879.809 2.796.809 3.183 0 5.77-2.587 5.77-5.766.001-3.187-2.575-5.996-5.77-5.996zm7.986 5.766c-.001 4.405-3.584 7.988-7.986 7.988-1.379 0-2.674-.356-3.812-1.002l-4.219 1.106 1.127-4.116c-.714-1.189-1.082-2.56-1.082-3.976.002-4.406 3.586-7.988 7.988-7.988 4.398.001 7.984 3.584 7.984 7.988z"/>
              </svg>
              CHAT ON WHATSAPP &bull; SUNRAY LAGOON
            </a>
          </div>

        </div>
      </section>

      {/* ==========================================================================
           3. PREVIOUS RESIDENTIAL PHASES (RIVERSIDE & SIGNATURE GOLF VILLAS)
           Retained Lower Down As Available Inventory
           ========================================================================== */}
      <section className="cg-section cg-section-alabaster" id="collections">
        <div className="cg-container">
          
          <div className="cg-section-header">
            <span className="cg-section-eyebrow">AVAILABLE RESIDENTIAL INVENTORY</span>
            <h2 className="cg-section-title">Established Collections: Riverside &amp; Signature Golf Villas</h2>
            <p className="cg-section-lead">
              Explore additional verified residential inventory within City Gate New Cairo. Featuring fully finished riverside apartments and signature golf villas with tailored 8 to 10-year developer payment horizons.
            </p>
          </div>

          <div className="cg-collections-stack">
            
            {/* ==========================================
                 SECTION A: RIVERSIDE (FULLY FINISHED APARTMENTS)
                 ========================================== */}
            <article className="cg-collection-card" id="riverside">
              <div className="cg-collection-media">
                <img 
                  src="/apartment-interior.jpg" 
                  onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = 'images/apartment-interior.jpg'; }}
                  alt="Riverside Fully Finished Apartments at City Gate New Cairo" 
                  className="cg-collection-img" 
                  loading="lazy" 
                  width="600" 
                  height="420"
                />
                <div className="cg-collection-tag">FULLY FINISHED &bull; 10 YEARS INSTALLMENTS</div>
              </div>

              <div className="cg-collection-details">
                <div>
                  <span className="cg-collection-eyebrow">SECTION A &bull; RIVERSIDE</span>
                  <h3 className="cg-collection-title">Riverside (Fully Finished Apartments)</h3>
                  <p className="cg-collection-desc">
                    Move into City Gate's exclusive fully finished apartments. Elegantly designed contemporary residences with expansive glass facades and picturesque panoramic views.
                  </p>

                  <div className="cg-unit-breakdown-list">
                    <div className="cg-unit-row">
                      <div>
                        <div className="cg-unit-title">1 Bedroom</div>
                        <div className="cg-unit-specs">89m² Built-up Area &bull; Fully Finished</div>
                      </div>
                      <div className="cg-unit-pricing-col">
                        <div className="cg-price-label">Starting From</div>
                        <div className="cg-price-num">9.07M EGP</div>
                      </div>
                    </div>

                    <div className="cg-unit-row">
                      <div>
                        <div className="cg-unit-title">3 Bedrooms Typical</div>
                        <div className="cg-unit-specs">138m² &ndash; 160m² Built-up Area &bull; Options up to 17.3M EGP</div>
                      </div>
                      <div className="cg-unit-pricing-col">
                        <div className="cg-price-label">Starting From</div>
                        <div className="cg-price-num">14.63M EGP</div>
                      </div>
                    </div>
                  </div>

                  <div className="cg-payment-frame">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                      <line x1="16" y1="2" x2="16" y2="6"></line>
                      <line x1="8" y1="2" x2="8" y2="6"></line>
                      <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                    <div>
                      <div className="cg-payment-title">Payment Plan</div>
                      <div className="cg-payment-content">
                        5% Down Payment | 10 Years Equal Installments
                      </div>
                    </div>
                  </div>
                </div>

                <a 
                  href={WHATSAPP_RIVERSIDE_LINK} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-cg-green"
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.969.541 1.879.809 2.796.809 3.183 0 5.77-2.587 5.77-5.766.001-3.187-2.575-5.996-5.77-5.996zm7.986 5.766c-.001 4.405-3.584 7.988-7.986 7.988-1.379 0-2.674-.356-3.812-1.002l-4.219 1.106 1.127-4.116c-.714-1.189-1.082-2.56-1.082-3.976.002-4.406 3.586-7.988 7.988-7.988 4.398.001 7.984 3.584 7.984 7.988z"/>
                  </svg>
                  INQUIRE ON WHATSAPP
                </a>
              </div>
            </article>

            {/* ==========================================
                 SECTION B: SIGNATURE GOLF VILLAS
                 ========================================== */}
            <article className="cg-collection-card reverse-grid" id="villas">
              <div className="cg-collection-media">
                <img 
                  src="/villas-exterior.jpg" 
                  onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = 'images/villas-exterior.jpg'; }}
                  alt="Signature Golf Villas at City Gate New Cairo" 
                  className="cg-collection-img" 
                  loading="lazy" 
                  width="600" 
                  height="420"
                />
                <div className="cg-collection-tag">SIGNATURE VILLAS &bull; 8 YEARS INSTALLMENTS</div>
              </div>

              <div className="cg-collection-details">
                <div>
                  <span className="cg-collection-eyebrow">SECTION B &bull; ULTRA LUXURY</span>
                  <h3 className="cg-collection-title">Signature Golf Villas</h3>
                  <p className="cg-collection-desc">
                    Ultra-luxury standalone villas with sweeping golf views. Bespoke architectural grandeur, private manicured grounds, and uncompromised privacy along the championship fairways.
                  </p>

                  <div className="cg-unit-breakdown-list">
                    <div className="cg-unit-row">
                      <div>
                        <div className="cg-unit-title">V36 (3rd Row Golf)</div>
                        <div className="cg-unit-specs">BUA 356m² | Land 524m² &bull; Standalone Villa</div>
                      </div>
                      <div className="cg-unit-pricing-col">
                        <div className="cg-price-label">Starting From</div>
                        <div className="cg-price-num">68.93M EGP</div>
                      </div>
                    </div>

                    <div className="cg-unit-row">
                      <div>
                        <div className="cg-unit-title">V43 Standalone Villa</div>
                        <div className="cg-unit-specs">BUA 423m² | Land 561m² &bull; Grand Layout</div>
                      </div>
                      <div className="cg-unit-pricing-col">
                        <div className="cg-price-label">Starting From</div>
                        <div className="cg-price-num">70.5M EGP</div>
                      </div>
                    </div>

                    <div className="cg-unit-row">
                      <div>
                        <div className="cg-unit-title">GV73 One-Story (2nd Row Golf)</div>
                        <div className="cg-unit-specs">BUA 714m² | Land 1,201m² &bull; Rare Single-Story Master Villa</div>
                      </div>
                      <div className="cg-unit-pricing-col">
                        <div className="cg-price-label">Starting From</div>
                        <div className="cg-price-num">142.95M EGP</div>
                      </div>
                    </div>
                  </div>

                  <div className="cg-payment-frame">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                      <line x1="16" y1="2" x2="16" y2="6"></line>
                      <line x1="8" y1="2" x2="8" y2="6"></line>
                      <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                    <div>
                      <div className="cg-payment-title">Payment Plan</div>
                      <div className="cg-payment-content">
                        5% Down Payment | 8 Years Equal Installments
                      </div>
                    </div>
                  </div>
                </div>

                <a 
                  href={WHATSAPP_VILLAS_LINK} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-cg-green"
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.969.541 1.879.809 2.796.809 3.183 0 5.77-2.587 5.77-5.766.001-3.187-2.575-5.996-5.77-5.996zm7.986 5.766c-.001 4.405-3.584 7.988-7.986 7.988-1.379 0-2.674-.356-3.812-1.002l-4.219 1.106 1.127-4.116c-.714-1.189-1.082-2.56-1.082-3.976.002-4.406 3.586-7.988 7.988-7.988 4.398.001 7.984 3.584 7.984 7.988z"/>
                  </svg>
                  INQUIRE ON WHATSAPP
                </a>
              </div>
            </article>

          </div>

          <div className="cg-transparency-note">
            *All prices, installment plans, and unit availabilities are starting figures provided for guidance by Qatari Diar and are subject to developer contract terms and change without prior notice.
          </div>

        </div>
      </section>

      {/* ==========================================================================
           4. MASTER COMMUNITY AMENITIES (ZERO WHATSAPP BUTTONS AS REQUIRED)
           ========================================================================== */}
      <section className="cg-section" id="amenities">
        <div className="cg-container">
          
          <div className="cg-section-header">
            <span className="cg-section-eyebrow">MASTER COMMUNITY AMENITIES</span>
            <h2 className="cg-section-title">Everything You Need In One Place</h2>
            <p className="cg-section-lead">
              A meticulously planned community offering championship sporting, premier education, medical excellence, corporate hubs, and recreation.
            </p>
          </div>

          <div className="cg-amenities-grid">
            <div className="cg-amenity-card">
              <div className="cg-amenity-icon-box">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                  <path d="M2 12h20"></path>
                </svg>
              </div>
              <div className="cg-amenity-text">
                <h3>18-Hole Golf</h3>
                <p>Championship USGA standards.</p>
              </div>
            </div>

            <div className="cg-amenity-card">
              <div className="cg-amenity-icon-box">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
              </div>
              <div className="cg-amenity-text">
                <h3>Golf Clubhouse</h3>
                <p>Pool, spa, gym &amp; lounge.</p>
              </div>
            </div>

            <div className="cg-amenity-card">
              <div className="cg-amenity-icon-box">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
              </div>
              <div className="cg-amenity-text">
                <h3>1M M² Ring Park</h3>
                <p>80% green parkland.</p>
              </div>
            </div>

            <div className="cg-amenity-card">
              <div className="cg-amenity-icon-box">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="m4.93 4.93 4.24 4.24"></path>
                  <path d="m14.83 9.17 4.24-4.24"></path>
                  <path d="m14.83 14.83 4.24 4.24"></path>
                  <path d="m9.17 14.83-4.24 4.24"></path>
                </svg>
              </div>
              <div className="cg-amenity-text">
                <h3>Sports Club</h3>
                <p>Elite athletic facilities.</p>
              </div>
            </div>

            <div className="cg-amenity-card">
              <div className="cg-amenity-icon-box">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                </svg>
              </div>
              <div className="cg-amenity-text">
                <h3>Business Park</h3>
                <p>720K M² corporate hub.</p>
              </div>
            </div>

            <div className="cg-amenity-card">
              <div className="cg-amenity-icon-box">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path>
                  <path d="M3 6h18"></path>
                  <path d="M16 10a4 4 0 0 1-8 0"></path>
                </svg>
              </div>
              <div className="cg-amenity-text">
                <h3>Commercial Town</h3>
                <p>300K M² retail &amp; dining.</p>
              </div>
            </div>

            <div className="cg-amenity-card">
              <div className="cg-amenity-icon-box">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2z"></path>
                  <path d="M9 10h6"></path>
                  <path d="M12 7v6"></path>
                </svg>
              </div>
              <div className="cg-amenity-text">
                <h3>Luxury Hotels</h3>
                <p>4 international retreats.</p>
              </div>
            </div>

            <div className="cg-amenity-card">
              <div className="cg-amenity-icon-box">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <div className="cg-amenity-text">
                <h3>Medical Hospital</h3>
                <p>300-bed international care.</p>
              </div>
            </div>

            <div className="cg-amenity-card">
              <div className="cg-amenity-icon-box">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                  <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                </svg>
              </div>
              <div className="cg-amenity-text">
                <h3>Premier Schools</h3>
                <p>International campuses.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ==========================================================================
           5. STRATEGIC LOCATION & CONNECTIVITY
           ========================================================================== */}
      <section className="cg-section cg-section-alabaster" id="location">
        <div className="cg-container">
          
          <div className="cg-section-header">
            <span className="cg-section-eyebrow">STRATEGIC ACCESSIBILITY</span>
            <h2 className="cg-section-title">At The Heart of New Cairo</h2>
            <p className="cg-section-lead">
              Located 30 km southeast of Cairo, City Gate stands poised as the gateway to Egypt&rsquo;s New Administrative Capital. Direct access ensures seamless connection across all major arteries.
            </p>
          </div>

          <div className="cg-location-layout">
            <div className="cg-location-points">
              <div className="cg-loc-item">
                <div className="cg-loc-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
                </div>
                <div className="cg-loc-content">
                  <h4>5 Minutes to AUC</h4>
                  <p>Just a 5-minute drive to The American University in Cairo and premier educational academies.</p>
                </div>
              </div>

              <div className="cg-loc-item">
                <div className="cg-loc-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/></svg>
                </div>
                <div className="cg-loc-content">
                  <h4>30 Minutes to Cairo International Airport</h4>
                  <p>Direct highway connections for effortless domestic and international journeys.</p>
                </div>
              </div>

              <div className="cg-loc-item">
                <div className="cg-loc-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="3 11 22 2 13 21 11 13 3 11"/></svg>
                </div>
                <div className="cg-loc-content">
                  <h4>Gateway to the New Administrative Capital</h4>
                  <p>Positioned along Sheikh Mohammed Bin Zayed road leading directly into the New Capital.</p>
                </div>
              </div>

              <div className="cg-loc-item">
                <div className="cg-loc-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>
                </div>
                <div className="cg-loc-content">
                  <h4>Direct Major Road Links</h4>
                  <p>Effortless access to Road 90, Ring Road, Cairo-Suez Highway, and Ain Sokhna Highway.</p>
                </div>
              </div>
            </div>

            <div className="cg-location-visual-card">
              <img 
                src="/golf-championship.jpg" 
                onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = 'images/golf-championship.jpg'; }}
                alt="City Gate New Cairo Golf Setting" 
                className="cg-location-img" 
                loading="lazy" 
                width="600" 
                height="400"
              />
            </div>
          </div>

        </div>
      </section>

      {/* ==========================================================================
           6. DEVELOPER HERITAGE & WHY CITY GATE THROUGH IR-PROPERTIES
           ========================================================================== */}
      <section className="cg-section" id="developer">
        <div className="cg-container">
          
          <div className="cg-heritage-box">
            <div className="cg-dev-top-row">
              <div className="cg-dev-logo-badge">
                <img 
                  src="/citygate-official.png" 
                  onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = 'images/citygate-official.png'; }}
                  alt="City Gate New Cairo Official Logo" 
                  className="cg-dev-citygate-logo" 
                  width="135" 
                  height="45" 
                />
                <div className="cg-dev-badge-divider"></div>
                <img 
                  src="/qatari-diar-official.png" 
                  onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = 'images/qatari-diar-official.png'; }}
                  alt="Qatari Diar Egypt Official Logo" 
                  className="cg-dev-qatari-logo" 
                  width="130" 
                  height="48" 
                />
                <div className="cg-dev-badge-divider"></div>
                <img 
                  src="/alam-al-roum-seal-dark.png" 
                  onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = 'images/alam-al-roum-seal-dark.png'; }}
                  alt="Alam El Rom Seal علم الروم" 
                  className="cg-hero-alam-seal" 
                  width="44" 
                  height="44" 
                />
              </div>
              <div className="cg-dev-intro-text">
                <h2>About Qatari Diar Egypt &amp; City Gate</h2>
                <p>Global Sovereign Developer &bull; Iconic Master Communities</p>
              </div>
            </div>

            <p className="cg-dev-narrative">
              Through continuous innovation and visionary leadership, Qatari Diar Egypt has secured an iconic position at the forefront of international real estate development. With a strategic land bank exceeding 40 million square meters, Qatari Diar creates transformative master communities that embrace the highest international standards of architectural excellence, sustainability, and enduring luxury.
            </p>
          </div>

          <div className="cg-advisory-section-box">
            <span className="cg-advisory-eyebrow">INDEPENDENT REAL ESTATE CONSULTANCY</span>
            <h2 className="cg-advisory-title">Why Diar Qatari through ir-properties?</h2>
            <p className="cg-advisory-subtitle">
              We provide 100% unbiased consultations to ensure Diar Qatari is the absolute best match for your investment goals compared to the entire market. Our experts guide you step-by-step to secure prime units and tailor payment plans that perfectly fit your financial framework.
            </p>

            <div className="cg-advisory-grid">
              <div className="cg-advisory-pillar">
                <div className="cg-advisory-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <h4>100% Unbiased Advisory</h4>
                <p>Objective market comparative analysis to protect and maximize your capital without developer bias.</p>
              </div>

              <div className="cg-advisory-pillar">
                <div className="cg-advisory-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                </div>
                <h4>Priority Unit Allocation</h4>
                <p>Direct intermediary access to premium first-row lagoon, golf, and high-demand residential allocations.</p>
              </div>

              <div className="cg-advisory-pillar">
                <div className="cg-advisory-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                    <line x1="2" y1="10" x2="22" y2="10"></line>
                  </svg>
                </div>
                <h4>Tailored Financial Structuring</h4>
                <p>Customizing 8 to 10 year payment schedules aligned seamlessly with your liquidity and investment horizon.</p>
              </div>
            </div>

            <a 
              href={WHATSAPP_HERO_LINK} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-cg-green"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.969.541 1.879.809 2.796.809 3.183 0 5.77-2.587 5.77-5.766.001-3.187-2.575-5.996-5.77-5.996zm7.986 5.766c-.001 4.405-3.584 7.988-7.986 7.988-1.379 0-2.674-.356-3.812-1.002l-4.219 1.106 1.127-4.116c-.714-1.189-1.082-2.56-1.082-3.976.002-4.406 3.586-7.988 7.988-7.988 4.398.001 7.984 3.584 7.984 7.988z"/>
              </svg>
              CONTACT US
            </a>
          </div>

        </div>
      </section>

      {/* ==========================================================================
           7. CORPORATE FOOTER & COMPLIANCE (BY IR-PROPERTIES)
           ========================================================================== */}
      <footer className="cg-footer">
        <div className="cg-container cg-footer-inner">
          <div className="cg-footer-branding">
            <div className="cg-footer-logos-card">
              <img 
                src="/qatari-diar-official.png" 
                onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = 'images/qatari-diar-official.png'; }}
                alt="Qatari Diar Egypt Official Logo" 
                className="cg-footer-qatari-logo" 
                width="120" 
                height="40" 
              />
              <img 
                src="/citygate-official.png" 
                onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = 'images/citygate-official.png'; }}
                alt="City Gate New Cairo Official Logo" 
                className="cg-footer-citygate-logo" 
                width="110" 
                height="34" 
              />
              <img 
                src="/alam-al-roum-seal-dark.png" 
                onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = 'images/alam-al-roum-seal-dark.png'; }}
                alt="Alam El Rom Seal علم الروم" 
                className="cg-hero-alam-seal" 
                width="38" 
                height="38" 
              />
            </div>
            <div className="cg-footer-sub-branding">By <span>ir-properties</span></div>
            <div className="cg-footer-role-badge">Independent Real Estate Consultancy &bull; Strategic Marketing Partner</div>
          </div>

          <div className="cg-footer-disclaimer-box">
            <p className="cg-footer-disclaimer-text">
              <strong>Advertiser &amp; Agency Disclosure:</strong> This advertising campaign and internal landing page are managed and operated by <strong>ir-properties</strong>, an Independent Real Estate Consultancy and authorized marketing partner. This page is designed to provide consultations, master plans, and unit pricing for City Gate New Cairo and the Sunray Lagoon Residences launch on behalf of prospective buyers and investors. This is not the official corporate website of the master developer, Qatari Diar Egypt. All project names, renderings, logos, and trademarks are the property of their respective owners.
            </p>

            <div className="cg-footer-corporate-info">
              <div className="cg-footer-corp-line"><strong>Operating Entity:</strong> ir-properties &mdash; Independent Real Estate Consultancy</div>
              <div className="cg-footer-corp-line"><strong>Physical Headquarters:</strong> New Cairo, Cairo, Egypt</div>
              <div className="cg-footer-corp-line"><strong>Direct Support Desk:</strong> WhatsApp: <a href={WHATSAPP_HERO_LINK} target="_blank" rel="noopener noreferrer">+20 127 775 2731</a> &bull; <a href="mailto:info@ir-properties.com">info@ir-properties.com</a></div>
            </div>

            <div className="cg-footer-legal-nav">
              <a href="/privacy-policy" className="cg-footer-legal-link">Privacy Policy</a>
              <span className="cg-footer-sep">&bull;</span>
              <a href="/terms-conditions" className="cg-footer-legal-link">Terms &amp; Conditions</a>
            </div>
          </div>

          <div className="cg-footer-signature">
            &copy; 2026 ir-properties &mdash; Independent Real Estate Consultancy &bull; Strategic Marketing Partner. All rights reserved.
          </div>
        </div>
      </footer>

      {/* ==========================================================================
           8. FLOATING WHATSAPP BUTTON (#25D366)
           ========================================================================== */}
      <a 
        href={WHATSAPP_HERO_LINK} 
        className="cg-floating-whatsapp" 
        target="_blank" 
        rel="noopener noreferrer" 
        aria-label="Direct WhatsApp Contact"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.969.541 1.879.809 2.796.809 3.183 0 5.77-2.587 5.77-5.766.001-3.187-2.575-5.996-5.77-5.996zm7.986 5.766c-.001 4.405-3.584 7.988-7.986 7.988-1.379 0-2.674-.356-3.812-1.002l-4.219 1.106 1.127-4.116c-.714-1.189-1.082-2.56-1.082-3.976.002-4.406 3.586-7.988 7.988-7.988 4.398.001 7.984 3.584 7.984 7.988z"/>
        </svg>
      </a>

      {/* ==========================================================================
           9. SUCCESS MODAL NOTIFICATION (POLISHED AS REQUESTED)
           ========================================================================== */}
      {isModalOpen && (
        <div className="cg-modal-backdrop is-active" role="dialog" aria-modal="true" aria-labelledby="cgModalTitle" onClick={closeModal}>
          <div className="cg-modal-box" onClick={(e) => e.stopPropagation()}>
            <div className="cg-modal-icon">
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
            </div>
            <h3 className="cg-modal-title" id="cgModalTitle">Inquiry Received</h3>
            <p className="cg-modal-text">
              Thank you <strong style={{ color: '#111827' }}>{submittedName}</strong>! Your registration has been securely dispatched to our senior consultancy team. A dedicated property advisor will contact you shortly with full brochures, master plans, and unit availability.
            </p>

            {/* Primary Action: Solid Vibrant Green WhatsApp Button (#25D366) */}
            <a 
              href="https://wa.me/201277752731?text=Hello%20I%20have%20just%20submitted%20my%20inquiry%20for%20City%20Gate%20on%20the%20website%20and%20would%20like%20to%20receive%20the%20brochures%20and%20availability%20right%20away" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-cg-modal-whatsapp"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.969.541 1.879.809 2.796.809 3.183 0 5.77-2.587 5.77-5.766.001-3.187-2.575-5.996-5.77-5.996zm7.986 5.766c-.001 4.405-3.584 7.988-7.986 7.988-1.379 0-2.674-.356-3.812-1.002l-4.219 1.106 1.127-4.116c-.714-1.189-1.082-2.56-1.082-3.976.002-4.406 3.586-7.988 7.988-7.988 4.398.001 7.984 3.584 7.984 7.988z"/>
              </svg>
              CHAT ON WHATSAPP
            </a>

            {/* Secondary Dismiss Action: Subtle Underline Link Text */}
            <button type="button" className="btn-cg-modal-dismiss" onClick={closeModal}>
              Close Window
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
