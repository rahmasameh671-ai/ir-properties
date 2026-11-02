import React, { useState } from 'react';
import '../../sodic/sodic.css';

/**
 * SODIC Portfolio Landing Page Component
 * Route: /sodic under ir-properties.com
 * Aesthetic: Ultra-Chic Editorial Luxury | Zero Gold Policy | Asymmetric Geometry
 * Sub-branding: 'By ir-properties'
 * Positioning: Independent Real Estate Consultancy / Strategic Marketing Partner
 */
export default function SodicLandingPage() {
  const WHATSAPP_NUMBER = '201277752731';

  // Form State
  const [fullName, setFullName] = useState('');
  const [countryCode, setCountryCode] = useState('+20');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalWhatsappUrl, setModalWhatsappUrl] = useState('');
  const [nameError, setNameError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);

  // Form Submission
  const handleFormSubmit = (e) => {
    e.preventDefault();

    let valid = true;
    if (!fullName.trim()) {
      setNameError(true);
      valid = false;
      setTimeout(() => setNameError(false), 3000);
    }
    if (!phoneNumber.trim()) {
      setPhoneError(true);
      valid = false;
      setTimeout(() => setPhoneError(false), 3000);
    }

    if (!valid) return;

    const fullPhone = `${countryCode} ${phoneNumber.trim()}`;
    const message = `Hello ir-properties,\nI am submitting a private enquiry for the SODIC Portfolio & Floor Plans.\n\n*Client Name:* ${fullName.trim()}\n*Contact Number:* ${fullPhone}\n\nPlease share the official project brochures, floor plans, and pricing breakdown.`;
    const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

    setModalWhatsappUrl(waUrl);
    setIsModalOpen(true);

    try {
      window.open(waUrl, '_blank', 'noopener,noreferrer');
    } catch {
      // Handled via modal link
    }

    // Reset Form
    setFullName('');
    setPhoneNumber('');
    setCountryCode('+20');
  };

  return (
    <div className="sodic-page-wrapper">
      
      {/* ====================================================================
          1. HERO SECTION (THE EXCLUSIVE LAUNCH)
          Starts directly at absolute top (top: 0). No top fixed navbar.
          ==================================================================== */}
      <header className="sodic-hero-section" id="hero">
        <div className="sodic-container">

          {/* Top Brand & Advisory Context Bar (Non-fixed, top of hero) */}
          <div className="sodic-top-brand-bar">
            <div className="brand-identity-group">
              <div className="sodic-vector-logo" aria-label="SODIC">
                <svg width="128" height="32" viewBox="0 0 140 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <text x="0" y="27" fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight="900" fontSize="28" letterSpacing="0.22em" fill="#1A202C">SODIC</text>
                </svg>
              </div>

              <div className="brand-divider-pipe"></div>

              <div className="brand-parent-tag">
                <span className="parent-label">Exclusively Presented</span>
                <span className="parent-name">By ir-properties</span>
              </div>
            </div>

            <a href="/" className="top-return-link" title="Return to IR-PROPERTIES Corporate Portal">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
              ir-properties.com
            </a>
          </div>

          {/* Asymmetrical Hero Grid */}
          <div className="sodic-hero-grid">

            {/* Left Column: Narrative & Offers */}
            <div className="sodic-hero-narrative">
              
              {/* Eyebrow Badge: BY IR-PROPERTIES • EXCLUSIVE PORTFOLIO */}
              <div className="sodic-eyebrow-badge">
                <span className="badge-pulse-dot"></span>
                BY IR-PROPERTIES • EXCLUSIVE PORTFOLIO
              </div>

              {/* Headline */}
              <h1 className="sodic-hero-headline">
                SODIC Signature Living: Redefining Modern Spaces
              </h1>

              {/* Offer Subtitle & Key Highlights */}
              <div className="sodic-hero-offer-box">
                <div className="offer-main-highlight">
                  0% Down Payment | Flexible Installments Up to 10 Years
                </div>
                <div className="offer-price-tag">
                  <span>Primary Ownership</span>
                  <strong>Starting From 6.7M EGP</strong>
                </div>
                <div className="offer-destinations-row">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <span>Premier Destinations: East Cairo, Mostakbal City & Ras El Hekma</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="sodic-hero-cta-row">
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hello ir-properties, I am inquiring about the SODIC Portfolio.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-sodic-green"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.969.541 1.879.809 2.796.809 3.183 0 5.77-2.587 5.77-5.766.001-3.187-2.575-5.996-5.77-5.996zm7.986 5.766c-.001 4.405-3.584 7.988-7.986 7.988-1.379 0-2.674-.356-3.812-1.002l-4.219 1.106 1.127-4.116c-.714-1.189-1.082-2.56-1.082-3.976.002-4.406 3.586-7.988 7.988-7.988 4.398.001 7.984 3.584 7.984 7.988z"/>
                  </svg>
                  CONTACT US
                </a>
                <a href="#developments" className="btn-sodic-charcoal">
                  View Developments
                </a>
              </div>

              {/* Metrics */}
              <div className="sodic-hero-metrics">
                <div className="metric-card">
                  <div className="metric-val">655 Acres</div>
                  <div className="metric-lbl">East Cairo Masterplan</div>
                </div>
                <div className="metric-card">
                  <div className="metric-val">800m Beach</div>
                  <div className="metric-lbl">Ras El Hekma Coast</div>
                </div>
                <div className="metric-card">
                  <div className="metric-val">Up to 10 Yrs</div>
                  <div className="metric-lbl">Payment Horizon</div>
                </div>
              </div>

            </div>

            {/* Right Column: Lead Capture Form */}
            <div className="sodic-form-wrapper">
              <div className="sodic-form-card">
                
                <div className="sodic-form-header">
                  <h2 className="sodic-form-title">Private Enquiry | Request Portfolio & Floor Plans</h2>
                  <p className="sodic-form-subtitle">Direct advisory access to official developer inventory and launch pricing</p>
                </div>

                <form onSubmit={handleFormSubmit} noValidate>
                  {/* Full Name: Blank input, NO placeholder examples */}
                  <div className="sodic-form-group">
                    <label htmlFor="reactFullName" className="sodic-form-label">Full Name</label>
                    <input
                      type="text"
                      id="reactFullName"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="sodic-input-text"
                      style={{ borderColor: nameError ? '#E53E3E' : undefined }}
                      required
                      placeholder=""
                      autoComplete="name"
                    />
                  </div>

                  {/* Phone Number: Split Input Layout */}
                  <div className="sodic-form-group">
                    <label htmlFor="reactPhoneNumber" className="sodic-form-label">Phone Number</label>
                    <div className="sodic-phone-split">
                      <div className="sodic-country-select-wrapper">
                        <select
                          value={countryCode}
                          onChange={(e) => setCountryCode(e.target.value)}
                          className="sodic-country-select"
                          aria-label="Country Code"
                        >
                          <option value="+20">🇪🇬 +20</option>
                          <option value="+966">🇸🇦 +966</option>
                          <option value="+971">🇦🇪 +971</option>
                          <option value="+965">🇰🇼 +965</option>
                          <option value="+974">🇶🇦 +974</option>
                          <option value="+968">🇴🇲 +968</option>
                          <option value="+973">🇧🇭 +973</option>
                          <option value="+44">🇬🇧 +44</option>
                          <option value="+1">🇺🇸 +1</option>
                          <option value="+1">🇨🇦 +1</option>
                          <option value="+49">🇩🇪 +49</option>
                          <option value="+33">🇫🇷 +33</option>
                          <option value="+41">🇨🇭 +41</option>
                          <option value="+962">🇯🇴 +962</option>
                          <option value="+961">🇱🇧 +961</option>
                        </select>
                        <svg className="select-chevron" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                      </div>

                      <input
                        type="tel"
                        id="reactPhoneNumber"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        className="sodic-phone-input"
                        style={{ borderColor: phoneError ? '#E53E3E' : undefined }}
                        required
                        placeholder=""
                        autoComplete="tel-national"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button type="submit" className="btn-sodic-charcoal" style={{ width: '100%', justifyContent: 'center' }}>
                    SUBMIT
                  </button>

                  {/* Disclaimer */}
                  <p className="sodic-form-disclaimer">
                    By submitting, you agree to receive communications from ir-properties regarding real estate projects. This landing page is operated by ir-properties, an independent real estate consultancy. Prices and availability are subject to change.
                  </p>
                </form>

              </div>
            </div>

          </div>

        </div>
      </header>

      {/* ====================================================================
          2. DEDICATED PROJECT SECTIONS (ALL DETAILED SPECS)
          ==================================================================== */}
      <main className="sodic-projects-wrapper" id="developments">
        <div className="sodic-container">

          <div className="sodic-section-header">
            <div className="sodic-section-eyebrow">
              <span className="eyebrow-line"></span>
              CURATED DEVELOPMENTS
              <span className="eyebrow-line"></span>
            </div>
            <h2 className="sodic-section-heading">Architectural Excellence by SODIC</h2>
            <p className="sodic-section-intro">
              Discover a signature trio of iconic destinations engineered for discerning homeowners and strategic investors across Greater Cairo and the Mediterranean coastline.
            </p>
          </div>

          {/* Section 1: The Lakes at SODIC East */}
          <article className="sodic-project-item" id="the-lakes">
            <div className="sodic-project-grid">
              
              <div className="sodic-project-visual">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
                  alt="The Lakes at SODIC East Master Community"
                  className="sodic-project-img"
                  loading="lazy"
                />
                <div className="sodic-visual-overlay"></div>
                <div className="visual-top-badge">New Launch • East Cairo</div>
                <div className="visual-bottom-marker">
                  <div className="marker-title">The Lakes at SODIC East</div>
                  <div className="marker-subtitle">655-Acre Master Community • 6,000 Private Residences</div>
                </div>
              </div>

              <div className="sodic-project-info">
                <div>
                  <div className="project-subtitle-badge">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    East Cairo Integrated Master Community
                  </div>

                  <h3 className="project-title">The Lakes at SODIC East</h3>

                  <p className="project-narrative">
                    655-Acre expansive destination with 6,000 units. Master-planned community with 80% dedicated to private Villas & Townhouses and 20% reserved for luxury Apartments. Complete with world-class sports clubs and open green spaces.
                  </p>

                  <div className="project-breakdown-card">
                    <div className="breakdown-row">
                      <span className="breakdown-label">1 Bedroom</span>
                      <span className="breakdown-value">Starting from 6.7M EGP</span>
                    </div>
                    <div className="breakdown-row">
                      <span className="breakdown-label">2 Bedrooms</span>
                      <span className="breakdown-value">Starting from 10.9M EGP</span>
                    </div>
                    <div className="breakdown-row">
                      <span className="breakdown-label">3 Bedrooms</span>
                      <span className="breakdown-value">Starting from 13.2M EGP</span>
                    </div>
                  </div>

                  <div className="payment-schedule-box">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                      <line x1="16" y1="2" x2="16" y2="6"></line>
                      <line x1="8" y1="2" x2="8" y2="6"></line>
                      <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                    <span className="payment-schedule-text">0% Down Payment | Installments Up to 10 Years</span>
                  </div>
                </div>

                <div className="project-action-strip">
                  <div className="project-starting-hint">
                    <span className="hint-label">Primary Entry</span>
                    <span className="hint-val">From 6.7M EGP</span>
                  </div>
                  <a
                    href="https://wa.me/201277752731?text=Hello%2C%20I%20am%20inquiring%20about%20SODIC%20East%20The%20Lakes"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-sodic-green"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.969.541 1.879.809 2.796.809 3.183 0 5.77-2.587 5.77-5.766.001-3.187-2.575-5.996-5.77-5.996zm7.986 5.766c-.001 4.405-3.584 7.988-7.986 7.988-1.379 0-2.674-.356-3.812-1.002l-4.219 1.106 1.127-4.116c-.714-1.189-1.082-2.56-1.082-3.976.002-4.406 3.586-7.988 7.988-7.988 4.398.001 7.984 3.584 7.984 7.988z"/>
                    </svg>
                    CONTACT US
                  </a>
                </div>

              </div>

            </div>
          </article>

          {/* Section 2: Ogami by SODIC */}
          <article className="sodic-project-item" id="ogami">
            <div className="sodic-project-grid reversed">
              
              <div className="sodic-project-visual">
                <img
                  src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80"
                  alt="Ogami by SODIC Ras El Hekma Sanctuary"
                  className="sodic-project-img"
                  loading="lazy"
                />
                <div className="sodic-visual-overlay"></div>
                <div className="visual-top-badge">Coastal Sanctuary • Ras El Hekma</div>
                <div className="visual-bottom-marker">
                  <div className="marker-title">Ogami by SODIC</div>
                  <div className="marker-subtitle">440-Acre Coastal Masterpiece • 800m Beachfront</div>
                </div>
              </div>

              <div className="sodic-project-info">
                <div>
                  <div className="project-subtitle-badge">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    Ras El Hekma • KM 204 Alex-Matrouh Road
                  </div>

                  <h3 className="project-title">Ogami by SODIC</h3>

                  <p className="project-narrative">
                    440-Acre coastal sanctuary featuring an 800-meter pristine beachfront. Maldives-inspired lifestyle blending contemporary Japanese architecture with crystal lagoons. An exclusive collection of private chalets and villas.
                  </p>

                  <div className="project-breakdown-card">
                    <div className="breakdown-row">
                      <span className="breakdown-label">Starting Price</span>
                      <span className="breakdown-value">Starting from 18.8M EGP</span>
                    </div>
                    <div className="breakdown-row">
                      <span className="breakdown-label">Typologies</span>
                      <span className="breakdown-value">Luxury Chalets & Signature Villas (Fully Finished)</span>
                    </div>
                    <div className="breakdown-row">
                      <span className="breakdown-label">Payment Plan</span>
                      <span className="breakdown-value">Installments Up to 7 Years</span>
                    </div>
                  </div>

                  <div className="payment-schedule-box">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                    <span className="payment-schedule-text">Fully Finished | Installments Up to 7 Years</span>
                  </div>
                </div>

                <div className="project-action-strip">
                  <div className="project-starting-hint">
                    <span className="hint-label">Starting Entry</span>
                    <span className="hint-val">From 18.8M EGP</span>
                  </div>
                  <a
                    href="https://wa.me/201277752731?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20Ogami%20by%20SODIC"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-sodic-green"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.969.541 1.879.809 2.796.809 3.183 0 5.77-2.587 5.77-5.766.001-3.187-2.575-5.996-5.77-5.996zm7.986 5.766c-.001 4.405-3.584 7.988-7.986 7.988-1.379 0-2.674-.356-3.812-1.002l-4.219 1.106 1.127-4.116c-.714-1.189-1.082-2.56-1.082-3.976.002-4.406 3.586-7.988 7.988-7.988 4.398.001 7.984 3.584 7.984 7.988z"/>
                    </svg>
                    CONTACT US
                  </a>
                </div>

              </div>

            </div>
          </article>

          {/* Section 3: East Vale Mostakbal City */}
          <article className="sodic-project-item" id="east-vale">
            <div className="sodic-project-grid">
              
              <div className="sodic-project-visual">
                <img
                  src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80"
                  alt="East Vale Mostakbal City Master Community"
                  className="sodic-project-img"
                  loading="lazy"
                />
                <div className="sodic-visual-overlay"></div>
                <div className="visual-top-badge">Flagship Community • Mostakbal City</div>
                <div className="visual-bottom-marker">
                  <div className="marker-title">East Vale</div>
                  <div className="marker-subtitle">Serene Greenery • Clean Architectural Geometry</div>
                </div>
              </div>

              <div className="sodic-project-info">
                <div>
                  <div className="project-subtitle-badge">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    Mostakbal City Master Community
                  </div>

                  <h3 className="project-title">East Vale</h3>

                  <p className="project-narrative">
                    SODIC’s flagship community in Mostakbal City combining serene greenery with clean architectural design, engineered for quiet elegance and family privacy.
                  </p>

                  <div className="project-breakdown-card">
                    <div className="breakdown-row">
                      <span className="breakdown-label">Apartments</span>
                      <span className="breakdown-value">Starting from 10.5M EGP</span>
                    </div>
                    <div className="breakdown-row">
                      <span className="breakdown-label">Villas</span>
                      <span className="breakdown-value">Starting from 33M EGP</span>
                    </div>
                    <div className="breakdown-row">
                      <span className="breakdown-label">Specifications</span>
                      <span className="breakdown-value">Fully Finished with Installed Air Conditioning</span>
                    </div>
                    <div className="breakdown-row">
                      <span className="breakdown-label">Payment Plan</span>
                      <span className="breakdown-value">5% Down Payment | Installments Up to 9 Years</span>
                    </div>
                  </div>

                  <div className="payment-schedule-box">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span className="payment-schedule-text">5% Down Payment | Installments Up to 9 Years</span>
                  </div>
                </div>

                <div className="project-action-strip">
                  <div className="project-starting-hint">
                    <span className="hint-label">Apartments From</span>
                    <span className="hint-val">10.5M EGP</span>
                  </div>
                  <a
                    href="https://wa.me/201277752731?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20East%20Vale%20Mostakbal%20City"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-sodic-green"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.969.541 1.879.809 2.796.809 3.183 0 5.77-2.587 5.77-5.766.001-3.187-2.575-5.996-5.77-5.996zm7.986 5.766c-.001 4.405-3.584 7.988-7.986 7.988-1.379 0-2.674-.356-3.812-1.002l-4.219 1.106 1.127-4.116c-.714-1.189-1.082-2.56-1.082-3.976.002-4.406 3.586-7.988 7.988-7.988 4.398.001 7.984 3.584 7.984 7.988z"/>
                    </svg>
                    CONTACT US
                  </a>
                </div>

              </div>

            </div>
          </article>

          {/* Strategic Advisory Banner */}
          <section className="sodic-partnership-banner">
            <div className="partnership-inner">
              <div className="partnership-text">
                <h3>Strategic Property Advisory</h3>
                <p>
                  ir-properties acts as an independent real estate consultancy and strategic marketing partner. We secure direct developer pricing, priority unit allotment, and unbiased investment feasibility analysis across Egypt’s tier-one projects.
                </p>
              </div>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hello ir-properties, I would like to consult with an independent adviser regarding SODIC projects.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-sodic-green"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.969.541 1.879.809 2.796.809 3.183 0 5.77-2.587 5.77-5.766.001-3.187-2.575-5.996-5.77-5.996zm7.986 5.766c-.001 4.405-3.584 7.988-7.986 7.988-1.379 0-2.674-.356-3.812-1.002l-4.219 1.106 1.127-4.116c-.714-1.189-1.082-2.56-1.082-3.976.002-4.406 3.586-7.988 7.988-7.988 4.398.001 7.984 3.584 7.984 7.988z"/>
                </svg>
                CONTACT US
              </a>
            </div>
          </section>

        </div>
      </main>

      {/* ====================================================================
          3. TECHNICAL FOOTER & COMPLIANCE
          ==================================================================== */}
      <footer className="sodic-footer">
        <div className="sodic-container">
          <div className="sodic-footer-inner">

            <div className="footer-branding-block">
              <div className="footer-brand-title">IR-PROPERTIES</div>
              <div className="footer-brand-subtext">By ir-properties</div>
            </div>

            <p className="footer-compliance-disclaimer">
              This landing page is operated by ir-properties, an independent real estate consultancy and authorized marketing partner. ir-properties does not own the listed projects. Prices, availability, and plans are subject to change.
            </p>

            <div className="footer-legal-links-bar">
              <a href="/privacy-policy">Privacy Policy</a>
              <span className="legal-separator">|</span>
              <a href="/terms-conditions">Terms & Conditions</a>
            </div>

            <div className="footer-copyright-sig">
              © 2026 ir-properties — Strategic Partners
            </div>

          </div>
        </div>
      </footer>

      {/* Floating WhatsApp CTA */}
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}`}
        target="_blank"
        rel="noopener noreferrer"
        className="sodic-floating-whatsapp"
        aria-label="Direct WhatsApp Consultation with ir-properties"
      >
        <span className="floating-whatsapp-tooltip">Chat with a Consultant</span>
        <svg viewBox="0 0 24 24">
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.969.541 1.879.809 2.796.809 3.183 0 5.77-2.587 5.77-5.766.001-3.187-2.575-5.996-5.77-5.996zm7.986 5.766c-.001 4.405-3.584 7.988-7.986 7.988-1.379 0-2.674-.356-3.812-1.002l-4.219 1.106 1.127-4.116c-.714-1.189-1.082-2.56-1.082-3.976.002-4.406 3.586-7.988 7.988-7.988 4.398.001 7.984 3.584 7.984 7.988z"/>
        </svg>
      </a>

      {/* Confirmation Modal */}
      {isModalOpen && (
        <div className="sodic-modal-backdrop active" role="dialog" aria-modal="true">
          <div className="sodic-modal-box">
            <div className="sodic-modal-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
            <h3 className="sodic-modal-title">Enquiry Received</h3>
            <p className="sodic-modal-desc">
              Thank you. An ir-properties senior advisor has received your request for the SODIC portfolio and floor plans. Connect directly on WhatsApp for instantaneous priority access:
            </p>
            <div className="sodic-modal-actions">
              <a href={modalWhatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-sodic-green" style={{ width: '100%' }}>
                Open WhatsApp Chat
              </a>
              <button type="button" onClick={() => setIsModalOpen(false)} className="btn-modal-close">
                Close Window
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

