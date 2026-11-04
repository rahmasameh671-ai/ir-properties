import React, { useState } from 'react';
import '../../madient-masr/madient-masr.css';

/**
 * Madinet Masr Portfolio Landing Page Component
 * Explicit Route: /Madient-Masr under properties-s.com / ir-properties.com domain architecture
 * Final Live URL: https://properties-s.com/Madient-Masr
 * Branding: 'By ir-properties.com' | Independent Real Estate Consultancy
 * Aesthetic: Radically New Ultra-Chic Editorial Luxury | Zero Gold Policy | Asymmetric Cards
 * WhatsApp Consultation: Strictly +201277752731 (Solid Vibrant Green #25D366)
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

export default function MadinetMasrLandingPage() {
  const WHATSAPP_NUMBER = '201277752731';

  // Lead Form States
  const [fullName, setFullName] = useState('');
  const [selectedCountry, setSelectedCountry] = useState(COUNTRIES[0]);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [submittedName, setSubmittedName] = useState('');
  const [modalWhatsappLink, setModalWhatsappLink] = useState('');

  // Handle Form Submission
  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!fullName.trim() || !phoneNumber.trim()) {
      alert('Please fill in your name and phone number.');
      return;
    }

    const fullPhone = `${selectedCountry.dial} ${phoneNumber.trim()}`;
    const clientName = fullName.trim();
    setSubmittedName(clientName);

    // Prepare WhatsApp URL
    const message = `Hello ir-properties,\nI am inquiring about the Madinet Masr Portfolio (The Butterfly, Taj City - Etaje, Sarai, Talala).\n\n*Client Name:* ${clientName}\n*Phone:* ${fullPhone}\n\nPlease share official unit availabilities, tailored payment plans, and floor plans.`;
    const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    setModalWhatsappLink(waUrl);

    // Save Lead Locally
    try {
      const stored = JSON.parse(localStorage.getItem('ir_madinet_masr_leads') || '[]');
      stored.push({
        name: clientName,
        phone: fullPhone,
        timestamp: new Date().toISOString(),
        portfolio: 'Madinet Masr Portfolio',
        consultancy: 'ir-properties.com Independent Real Estate Consultancy'
      });
      localStorage.setItem('ir_madinet_masr_leads', JSON.stringify(stored));
    } catch (err) {
      console.warn('Storage warning:', err);
    }

    // Google Tag Conversion Event Tracking
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('event', 'conversion', {
        'send_to': 'AW-18125180547/AZcICJes-qQcEIOd4cJD'
      });
      window.gtag('event', 'generate_lead', {
        event_category: 'form',
        event_label: 'Madinet Masr Lead Inquiry'
      });
    }

    // Background Dispatch to FormSubmit
    try {
      fetch('https://formsubmit.co/ajax/Rahma@irtkaz.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: clientName,
          phone: fullPhone,
          source: 'Madinet Masr Portfolio (ir-properties.com)',
          consultancy: 'ir-properties.com Independent Real Estate Consultancy',
          _replyto: 'Rahma@irtkaz.com',
          _cc: 'Mostafa.a.ashmawy@gmail.com,Mostafa.ashmawy@irtkaz.com',
          _subject: `New Lead: Madinet Masr - ${clientName} (${fullPhone})`,
          _template: 'table'
        })
      }).catch((err) => console.warn('Background notice:', err));
    } catch (err) {
      console.warn('Transmission notice:', err);
    }

    // Open Success Modal
    setIsModalOpen(true);

    // Attempt direct WhatsApp launch
    try {
      window.open(waUrl, '_blank', 'noopener,noreferrer');
    } catch {
      // Handled via modal button
    }

    // Reset fields
    setFullName('');
    setPhoneNumber('');
  };

  const filteredCountries = COUNTRIES.filter((c) =>
    c.name.toLowerCase().includes(searchQuery.toLowerCase().trim()) ||
    c.dial.includes(searchQuery.trim()) ||
    c.code.toLowerCase().includes(searchQuery.toLowerCase().trim())
  );

  return (
    <div className="madinet-masr-page-wrap">
      {/* =========================================================================
           1. HERO SECTION (STARTS AT TOP: 0 — NO TOP FIXED NAVBAR)
           ========================================================================= */}
      <header className="madinet-hero-section" id="hero">
        <div className="hero-overlay"></div>

        <div className="container hero-editorial-grid">
          
          {/* Hero Left Column: High-Fashion Narrative */}
          <div className="hero-content-column">
            
            <div className="hero-brand-signature-bar">
              <img 
                src="/images/madinet-masr/madinet-masr-official.webp" 
                alt="Madinet Masr Official Logo" 
                className="hero-brand-logo-img" 
              />
              <div className="hero-signature-label">
                <span className="signature-by">By ir-properties.com</span>
                <span className="signature-role">Independent Real Estate Consultancy</span>
              </div>
            </div>

            <div style={{ marginBottom: '16px' }}>
              <span className="chic-badge chic-badge-dark">Exclusive Curated Portfolio</span>
            </div>

            <h1 className="hero-main-headline">
              Madinet Masr
              <span>A Legacy of Urban Distinction</span>
            </h1>

            <p className="hero-lead-text">
              Access private allocations across Madinet Masr's flagship master developments in New Cairo and Mostakbal City. Providing discerning investors with impartial guidance and bespoke financial terms.
            </p>

            {/* Terms Highlights Bar */}
            <div className="hero-terms-highlights">
              <div className="term-highlight-card">
                <span className="term-stat-number">1.5%</span>
                <span className="term-stat-label">Starting Down Payment</span>
              </div>
              <div className="term-highlight-card">
                <span className="term-stat-number">12 YRS</span>
                <span className="term-stat-label">Flexible Installments</span>
              </div>
              <div className="term-highlight-card">
                <span className="term-stat-number">5M EGP</span>
                <span className="term-stat-label">Starting Unit Rates</span>
              </div>
            </div>

          </div>

          {/* Hero Right Column: Frosted Glass Lead Capture Form */}
          <div className="hero-form-column">
            <div className="frosted-lead-card">
              
              <div className="form-header-block">
                <span className="form-eyebrow">BY IR-PROPERTIES.COM</span>
                <h2 className="form-headline">REGISTER YOUR INTEREST</h2>
                <p className="form-subtext">Direct allocation access, official brochures, and tailored payment plans.</p>
              </div>

              <form onSubmit={handleFormSubmit} noValidate>
                
                {/* Full Name: Clean blank input, NO placeholder examples */}
                <div className="lead-form-group">
                  <label htmlFor="reactFullName" className="lead-form-label">Full Name</label>
                  <input 
                    type="text" 
                    id="reactFullName" 
                    name="fullName" 
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="lead-input-text" 
                    required 
                    autoComplete="name"
                  />
                </div>

                {/* Phone Number: Split Input Layout (UTF-8 Flags Dropdown + Blank Input) */}
                <div className="lead-form-group">
                  <label htmlFor="reactPhoneInput" className="lead-form-label">Phone Number</label>
                  
                  <div className="phone-split-container">
                    
                    {/* Trigger Button */}
                    <button 
                      type="button" 
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      className="country-dropdown-trigger" 
                      aria-haspopup="true" 
                      aria-expanded={isDropdownOpen}
                      title="Select Country Dial Code">
                      <span className="trigger-flag">{selectedCountry.flag}</span>
                      <span className="trigger-dial">{selectedCountry.dial}</span>
                      <svg className="trigger-chevron" viewBox="0 0 24 24" fill="none" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </button>

                    {/* Popover Dropdown */}
                    {isDropdownOpen && (
                      <div className="country-dropdown-popover is-open">
                        <div className="country-search-wrap">
                          <input 
                            type="text" 
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="country-search-input" 
                            placeholder="Search country or code..." 
                            autoFocus
                          />
                        </div>
                        <div className="country-options-scroll">
                          {filteredCountries.map((item) => (
                            <div 
                              key={item.code}
                              className={`country-option-item ${item.code === selectedCountry.code ? 'is-selected' : ''}`}
                              onClick={() => {
                                setSelectedCountry(item);
                                setIsDropdownOpen(false);
                                setSearchQuery('');
                              }}>
                              <span className="country-option-flag">{item.flag}</span>
                              <span className="country-option-name">{item.name}</span>
                              <span className="country-option-dial">{item.dial}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Blank Phone Input (NO placeholder examples) */}
                    <input 
                      type="tel" 
                      id="reactPhoneInput" 
                      name="phoneNumber" 
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      className="phone-number-field" 
                      required 
                      autoComplete="tel-national"
                    />
                  </div>
                </div>

                {/* Solid Charcoal Submit Button */}
                <button type="submit" className="btn-charcoal-solid">
                  REGISTER INTEREST
                </button>
              </form>

              {/* Disclaimer Location A */}
              <p className="form-legal-disclaimer">
                By submitting, you agree to receive communications from <strong>ir-properties.com</strong> regarding real estate projects. This landing page is operated by <strong>ir-properties.com</strong>, an Independent Real Estate Consultancy, and is not the official website of the developer. Prices and availability are subject to change.
              </p>

              <div className="form-legal-links">
                <a href="/privacy-policy">Privacy Policy</a>
                <span>•</span>
                <a href="/terms-conditions">Terms & Conditions</a>
              </div>

            </div>
          </div>

        </div>
      </header>

      {/* =========================================================================
           2. ASYMMETRICAL EDITORIAL PROJECT SHOWCASE (4 PROJECTS)
           ========================================================================= */}
      <main className="portfolio-curation-section">
        <div className="container">
          
          <div className="section-editorial-intro">
            <span className="editorial-kicker">CURATED MASTER DEVELOPMENTS</span>
            <h2 className="editorial-section-title">The Madinet Masr Living Portfolio</h2>
            <p className="editorial-section-desc">
              Four distinct master-planned sanctuaries engineered with low-density architectural layouts, expansive green corridors, and market-defining payment arrangements.
            </p>
          </div>

          {/* PROJECT 01: THE BUTTERFLY (MOSTAKBAL CITY) */}
          <article className="editorial-project-row" id="the-butterfly">
            <div className="project-visual-column">
              <div className="project-image-frame">
                <img 
                  src="/images/madinet-masr/butterfly-official.webp" 
                  alt="The Butterfly Mostakbal City by Madinet Masr" 
                  loading="lazy" 
                />
                <div className="floating-payment-tag">
                  <span className="tag-accent">12 YRS PLAN</span>
                  <span className="tag-plan">1.5% Down Payment • Up to 12 Years Installments</span>
                </div>
              </div>
            </div>

            <div className="project-info-column">
              <div className="project-meta-header">
                <span className="project-index-number">01 / 04</span>
              </div>

              {/* Official Project Logo as Prominent Section Heading */}
              <div className="project-logo-heading-wrap">
                <img 
                  src="/images/madinet-masr/the-butterfly-logo.png" 
                  alt="The Butterfly" 
                  className="project-hero-logo logo-butterfly" 
                />
              </div>

              <p className="project-subtitle-editorial">Signature Villas in Mostakbal City</p>

              <div className="project-terms-matrix">
                <div className="terms-matrix-grid">
                  <div className="matrix-cell">
                    <span className="matrix-cell-label">Starting Price</span>
                    <span className="matrix-cell-value">6.3M EGP</span>
                    <span className="matrix-cell-sub">Starting Rate</span>
                  </div>
                  <div className="matrix-cell">
                    <span className="matrix-cell-label">Down Payment</span>
                    <span className="matrix-cell-value">1.5%</span>
                    <span className="matrix-cell-sub">Immediate Reservation</span>
                  </div>
                  <div className="matrix-cell">
                    <span className="matrix-cell-label">Installments</span>
                    <span className="matrix-cell-value">12 Years</span>
                    <span className="matrix-cell-sub">Equal Installment Plan</span>
                  </div>
                </div>
              </div>

              <div className="project-features-list">
                <div className="feature-pill-item">
                  <svg viewBox="0 0 24 24" fill="none"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                  <span>Exclusive Gated Villa Enclave</span>
                </div>
                <div className="feature-pill-item">
                  <svg viewBox="0 0 24 24" fill="none"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span>Central Green Spines & Botanical Trails</span>
                </div>
                <div className="feature-pill-item">
                  <svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10"></circle><polygon points="12 8 8 12 12 16 16 12 12 8"></polygon></svg>
                  <span>Holistic Wellness & Sports Center</span>
                </div>
                <div className="feature-pill-item">
                  <svg viewBox="0 0 24 24" fill="none"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
                  <span>Private Gardens & Solitude Patios</span>
                </div>
              </div>

              <div className="project-actions-block">
                <a 
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20The%20Butterfly%20Mostakbal%20City`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-whatsapp-solid">
                  <svg viewBox="0 0 24 24">
                    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 20.15C10.57 20.15 9.12 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.81 13.47 3.81 11.91C3.81 7.37 7.5 3.69 12.05 3.69C14.25 3.69 16.31 4.55 17.87 6.11C19.42 7.67 20.28 9.73 20.28 11.93C20.27 16.48 16.59 20.15 12.05 20.15ZM16.56 14.33C16.31 14.2 15.09 13.6 14.86 13.52C14.64 13.44 14.47 13.4 14.31 13.65C14.15 13.9 13.68 14.45 13.54 14.61C13.4 14.77 13.26 14.79 13.01 14.66C12.76 14.54 11.96 14.27 11.01 13.43C10.27 12.77 9.77 11.96 9.63 11.71C9.49 11.46 9.61 11.33 9.74 11.2C9.85 11.09 9.99 10.91 10.12 10.76C10.25 10.61 10.29 10.5 10.37 10.33C10.45 10.16 10.41 10.02 10.35 9.89C10.29 9.76 9.79 8.54 9.59 8.04C9.39 7.56 9.18 7.62 9.03 7.61C8.89 7.6 8.11 7.66 7.88 7.91C7.65 8.16 7 8.77 7 10.01C7 11.25 7.9 12.44 8.02 12.61C8.14 12.77 9.8 15.33 12.33 16.42C12.93 16.68 13.4 16.84 13.76 16.95C14.36 17.14 14.91 17.12 15.34 17.05C15.82 16.98 16.82 16.45 17.03 15.86C17.23 15.27 17.23 14.77 17.17 14.66C17.11 14.56 16.95 14.49 16.7 14.37L16.56 14.33Z"/>
                  </svg>
                  <span>INQUIRE VIA WHATSAPP</span>
                </a>
              </div>
            </div>
          </article>

          {/* PROJECT 02: TAJ CITY — ETAJE PHASE */}
          <article className="editorial-project-row row-inverted" id="taj-city-etaje">
            <div className="project-visual-column">
              <div className="project-image-frame">
                <img 
                  src="/images/madinet-masr/etaje-main.jpg" 
                  alt="Taj City Etaje Phase by Madinet Masr" 
                  loading="lazy" 
                />
                <div className="floating-payment-tag">
                  <span className="tag-accent">10 YRS PLAN</span>
                  <span className="tag-plan">3% Down Payment • Up to 10 Years Installments</span>
                </div>
              </div>
            </div>

            <div className="project-info-column">
              <div className="project-meta-header">
                <span className="project-index-number">02 / 04</span>
              </div>

              {/* Official Project Logo as Prominent Section Heading */}
              <div className="project-logo-heading-wrap">
                <img 
                  src="/images/madinet-masr/taj-city-logo.png" 
                  alt="Taj City" 
                  className="project-hero-logo logo-taj-city" 
                />
              </div>

              <p className="project-subtitle-editorial">Etaje Phase — Premium Apartments & Duplexes</p>

              <div className="project-terms-matrix">
                <div className="terms-matrix-grid">
                  <div className="matrix-cell">
                    <span className="matrix-cell-label">Starting Price</span>
                    <span className="matrix-cell-value">6M EGP</span>
                    <span className="matrix-cell-sub">Starting Rate</span>
                  </div>
                  <div className="matrix-cell">
                    <span className="matrix-cell-label">Down Payment</span>
                    <span className="matrix-cell-value">3%</span>
                    <span className="matrix-cell-sub">Initial Down Payment</span>
                  </div>
                  <div className="matrix-cell">
                    <span className="matrix-cell-label">Installments</span>
                    <span className="matrix-cell-value">10 Years</span>
                    <span className="matrix-cell-sub">Up to 10 Years Plan</span>
                  </div>
                </div>
              </div>

              <div className="project-features-list">
                <div className="feature-pill-item">
                  <svg viewBox="0 0 24 24" fill="none"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
                  <span>Minimalist Contemporary Architecture</span>
                </div>
                <div className="feature-pill-item">
                  <svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                  <span>Expansive Central Park & Green Vistas</span>
                </div>
                <div className="feature-pill-item">
                  <svg viewBox="0 0 24 24" fill="none"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
                  <span>International Educational Campus</span>
                </div>
                <div className="feature-pill-item">
                  <svg viewBox="0 0 24 24" fill="none"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
                  <span>Vibrant Commercial & Business Strip</span>
                </div>
              </div>

              <div className="project-actions-block">
                <a 
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20Taj%20City%20Etaje`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-whatsapp-solid">
                  <svg viewBox="0 0 24 24">
                    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 20.15C10.57 20.15 9.12 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.81 13.47 3.81 11.91C3.81 7.37 7.5 3.69 12.05 3.69C14.25 3.69 16.31 4.55 17.87 6.11C19.42 7.67 20.28 9.73 20.28 11.93C20.27 16.48 16.59 20.15 12.05 20.15ZM16.56 14.33C16.31 14.2 15.09 13.6 14.86 13.52C14.64 13.44 14.47 13.4 14.31 13.65C14.15 13.9 13.68 14.45 13.54 14.61C13.4 14.77 13.26 14.79 13.01 14.66C12.76 14.54 11.96 14.27 11.01 13.43C10.27 12.77 9.77 11.96 9.63 11.71C9.49 11.46 9.61 11.33 9.74 11.2C9.85 11.09 9.99 10.91 10.12 10.76C10.25 10.61 10.29 10.5 10.37 10.33C10.45 10.16 10.41 10.02 10.35 9.89C10.29 9.76 9.79 8.54 9.59 8.04C9.39 7.56 9.18 7.62 9.03 7.61C8.89 7.6 8.72 7.6 8.55 7.6C8.38 7.6 8.11 7.66 7.88 7.91C7.65 8.16 7 8.77 7 10.01C7 11.25 7.9 12.44 8.02 12.61C8.14 12.77 9.8 15.33 12.33 16.42C12.93 16.68 13.4 16.84 13.76 16.95C14.36 17.14 14.91 17.12 15.34 17.05C15.82 16.98 16.82 16.45 17.03 15.86C17.23 15.27 17.23 14.77 17.17 14.66C17.11 14.56 16.95 14.49 16.7 14.37L16.56 14.33Z"/>
                  </svg>
                  <span>INQUIRE VIA WHATSAPP</span>
                </a>
              </div>
            </div>
          </article>

          {/* PROJECT 03: SARAI */}
          <article className="editorial-project-row" id="sarai">
            <div className="project-visual-column">
              <div className="project-image-frame">
                <img 
                  src="/images/madinet-masr/sarai-official.webp" 
                  alt="Sarai Lagoon Living by Madinet Masr" 
                  loading="lazy" 
                />
                <div className="floating-payment-tag">
                  <span className="tag-accent">12 YRS PLAN</span>
                  <span className="tag-plan">1.5% Down Payment • Up to 12 Years Installments</span>
                </div>
              </div>
            </div>

            <div className="project-info-column">
              <div className="project-meta-header">
                <span className="project-index-number">03 / 04</span>
              </div>

              {/* Official Project Logo as Prominent Section Heading */}
              <div className="project-logo-heading-wrap">
                <img 
                  src="/images/madinet-masr/logo-sarai.png" 
                  alt="Sarai" 
                  className="project-hero-logo logo-sarai" 
                />
              </div>

              <p className="project-subtitle-editorial">Integrated Community in New Cairo</p>

              <div className="project-terms-matrix">
                <div className="terms-matrix-grid">
                  <div className="matrix-cell">
                    <span className="matrix-cell-label">Starting Price</span>
                    <span className="matrix-cell-value">5M EGP</span>
                    <span className="matrix-cell-sub">Starting Rate</span>
                  </div>
                  <div className="matrix-cell">
                    <span className="matrix-cell-label">Down Payment</span>
                    <span className="matrix-cell-value">1.5%</span>
                    <span className="matrix-cell-sub">Initial Down Payment</span>
                  </div>
                  <div className="matrix-cell">
                    <span className="matrix-cell-label">Installments</span>
                    <span className="matrix-cell-value">12 Years</span>
                    <span className="matrix-cell-sub">Up to 12 Years Plan</span>
                  </div>
                </div>
              </div>

              <div className="project-features-list">
                <div className="feature-pill-item">
                  <svg viewBox="0 0 24 24" fill="none"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                  <span>Crystal Lagoons & Sandy Shoreline</span>
                </div>
                <div className="feature-pill-item">
                  <svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 14 14"></polyline></svg>
                  <span>Championship Equestrian Track</span>
                </div>
                <div className="feature-pill-item">
                  <svg viewBox="0 0 24 24" fill="none"><path d="M3 21h18"></path><path d="M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16"></path></svg>
                  <span>Luxury Hospitality & Five-Star Hotels</span>
                </div>
                <div className="feature-pill-item">
                  <svg viewBox="0 0 24 24" fill="none"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line></svg>
                  <span>Curated Dining & Lifestyle Boulevard</span>
                </div>
              </div>

              <div className="project-actions-block">
                <a 
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20Sarai`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-whatsapp-solid">
                  <svg viewBox="0 0 24 24">
                    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 20.15C10.57 20.15 9.12 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.81 13.47 3.81 11.91C3.81 7.37 7.5 3.69 12.05 3.69C14.25 3.69 16.31 4.55 17.87 6.11C19.42 7.67 20.28 9.73 20.28 11.93C20.27 16.48 16.59 20.15 12.05 20.15ZM16.56 14.33C16.31 14.2 15.09 13.6 14.86 13.52C14.64 13.44 14.47 13.4 14.31 13.65C14.15 13.9 13.68 14.45 13.54 14.61C13.4 14.77 13.26 14.79 13.01 14.66C12.76 14.54 11.96 14.27 11.01 13.43C10.27 12.77 9.77 11.96 9.63 11.71C9.49 11.46 9.61 11.33 9.74 11.2C9.85 11.09 9.99 10.91 10.12 10.76C10.25 10.61 10.29 10.5 10.37 10.33C10.45 10.16 10.41 10.02 10.35 9.89C10.29 9.76 9.79 8.54 9.59 8.04C9.39 7.56 9.18 7.62 9.03 7.61C8.89 7.6 8.72 7.6 8.55 7.6C8.38 7.6 8.11 7.66 7.88 7.91C7.65 8.16 7 8.77 7 10.01C7 11.25 7.9 12.44 8.02 12.61C8.14 12.77 9.8 15.33 12.33 16.42C12.93 16.68 13.4 16.84 13.76 16.95C14.36 17.14 14.91 17.12 15.34 17.05C15.82 16.98 16.82 16.45 17.03 15.86C17.23 15.27 17.23 14.77 17.17 14.66C17.11 14.56 16.95 14.49 16.7 14.37L16.56 14.33Z"/>
                  </svg>
                  <span>INQUIRE VIA WHATSAPP</span>
                </a>
              </div>
            </div>
          </article>

          {/* PROJECT 04: TALALA */}
          <article className="editorial-project-row row-inverted" id="talala">
            <div className="project-visual-column">
              <div className="project-image-frame">
                <img 
                  src="/images/madinet-masr/talala-official.png" 
                  alt="Talala Boutique Living by Madinet Masr" 
                  loading="lazy" 
                />
                <div className="floating-payment-tag">
                  <span className="tag-accent">12 YRS PLAN</span>
                  <span className="tag-plan">5% Down Payment • Up to 12 Years Installments</span>
                </div>
              </div>
            </div>

            <div className="project-info-column">
              <div className="project-meta-header">
                <span className="project-index-number">04 / 04</span>
              </div>

              {/* Official Project Logo as Prominent Section Heading */}
              <div className="project-logo-heading-wrap">
                <img 
                  src="/images/madinet-masr/talala-logo.png" 
                  alt="Talala" 
                  className="project-hero-logo logo-talala" 
                />
              </div>

              <p className="project-subtitle-editorial">Exclusive Boutique Living</p>

              <div className="project-terms-matrix">
                <div className="terms-matrix-grid">
                  <div className="matrix-cell">
                    <span className="matrix-cell-label">Starting Price</span>
                    <span className="matrix-cell-value">8.4M EGP</span>
                    <span className="matrix-cell-sub">Starting Rate</span>
                  </div>
                  <div className="matrix-cell">
                    <span className="matrix-cell-label">Down Payment</span>
                    <span className="matrix-cell-value">5%</span>
                    <span className="matrix-cell-sub">Initial Down Payment</span>
                  </div>
                  <div className="matrix-cell">
                    <span className="matrix-cell-label">Installments</span>
                    <span className="matrix-cell-value">12 Years</span>
                    <span className="matrix-cell-sub">Up to 12 Years Plan</span>
                  </div>
                </div>
              </div>

              <div className="project-features-list">
                <div className="feature-pill-item">
                  <svg viewBox="0 0 24 24" fill="none"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path></svg>
                  <span>Architectural Boutique Landscape</span>
                </div>
                <div className="feature-pill-item">
                  <svg viewBox="0 0 24 24" fill="none"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
                  <span>Private Residents Clubhouse</span>
                </div>
                <div className="feature-pill-item">
                  <svg viewBox="0 0 24 24" fill="none"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span>Fully Finished Premium Residences</span>
                </div>
                <div className="feature-pill-item">
                  <svg viewBox="0 0 24 24" fill="none"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path></svg>
                  <span>Cascading Water Architectural Features</span>
                </div>
              </div>

              <div className="project-actions-block">
                <a 
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20Talala`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-whatsapp-solid">
                  <svg viewBox="0 0 24 24">
                    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 20.15C10.57 20.15 9.12 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.81 13.47 3.81 11.91C3.81 7.37 7.5 3.69 12.05 3.69C14.25 3.69 16.31 4.55 17.87 6.11C19.42 7.67 20.28 9.73 20.28 11.93C20.27 16.48 16.59 20.15 12.05 20.15ZM16.56 14.33C16.31 14.2 15.09 13.6 14.86 13.52C14.64 13.44 14.47 13.4 14.31 13.65C14.15 13.9 13.68 14.45 13.54 14.61C13.4 14.77 13.26 14.79 13.01 14.66C12.76 14.54 11.96 14.27 11.01 13.43C10.27 12.77 9.77 11.96 9.63 11.71C9.49 11.46 9.61 11.33 9.74 11.2C9.85 11.09 9.99 10.91 10.12 10.76C10.25 10.61 10.29 10.5 10.37 10.33C10.45 10.16 10.41 10.02 10.35 9.89C10.29 9.76 9.79 8.54 9.59 8.04C9.39 7.56 9.18 7.62 9.03 7.61C8.89 7.6 8.72 7.6 8.55 7.6C8.38 7.6 8.11 7.66 7.88 7.91C7.65 8.16 7 8.77 7 10.01C7 11.25 7.9 12.44 8.02 12.61C8.14 12.77 9.8 15.33 12.33 16.42C12.93 16.68 13.4 16.84 13.76 16.95C14.36 17.14 14.91 17.12 15.34 17.05C15.82 16.98 16.82 16.45 17.03 15.86C17.23 15.27 17.23 14.77 17.17 14.66C17.11 14.56 16.95 14.49 16.7 14.37L16.56 14.33Z"/>
                  </svg>
                  <span>INQUIRE VIA WHATSAPP</span>
                </a>
              </div>
            </div>
          </article>

        </div>
      </main>

      {/* =========================================================================
           3. STRATEGIC CONSULTANCY SECTION ("WHY IR-PROPERTIES.COM?")
           ========================================================================= */}
      <section className="consultancy-why-section">
        <div className="container">
          
          <div className="why-header-wrap">
            <span className="editorial-kicker">STRATEGIC ADVISORY ADVANTAGE</span>
            <h2 className="editorial-section-title">Why Madinet Masr with ir-properties.com?</h2>
            <p className="editorial-section-desc">
              Positioned exclusively as an Independent Real Estate Consultancy, ir-properties.com delivers objective capital advisory, zero brokerage markups, and uncompromised fiduciary representation.
            </p>
          </div>

          <div className="why-pillars-grid">
            <div className="why-pillar-card">
              <div className="pillar-numeric-index">01</div>
              <h3 className="pillar-headline">100% Unbiased Consultation</h3>
              <p className="pillar-body-text">
                We evaluate Madinet Masr developments against the entire Greater Cairo competitive landscape to ensure every unit allocation strictly aligns with your personal wealth goals.
              </p>
            </div>

            <div className="why-pillar-card">
              <div className="pillar-numeric-index">02</div>
              <h3 className="pillar-headline">Custom Financial Structuring</h3>
              <p className="pillar-body-text">
                Our senior advisors negotiate directly for prime corner exposures, preferred view corridors, and payment structures tailored to your capital distribution timeline.
              </p>
            </div>

            <div className="why-pillar-card">
              <div className="pillar-numeric-index">03</div>
              <h3 className="pillar-headline">Zero Buyer Advisory Fees</h3>
              <p className="pillar-body-text">
                Experience world-class real estate advisory without paying agency brokerage fees. Our advisory services are 100% complimentary to discerning private buyers.
              </p>
            </div>
          </div>

          <div className="why-cta-center">
            <a 
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hello%2C%20I%20would%20like%20to%20talk%20to%20an%20independent%20expert%20about%20Madinet%20Masr%20projects`} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-whatsapp-solid">
              <svg viewBox="0 0 24 24">
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 20.15C10.57 20.15 9.12 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.81 13.47 3.81 11.91C3.81 7.37 7.5 3.69 12.05 3.69C14.25 3.69 16.31 4.55 17.87 6.11C19.42 7.67 20.28 9.73 20.28 11.93C20.27 16.48 16.59 20.15 12.05 20.15ZM16.56 14.33C16.31 14.2 15.09 13.6 14.86 13.52C14.64 13.44 14.47 13.4 14.31 13.65C14.15 13.9 13.68 14.45 13.54 14.61C13.4 14.77 13.26 14.79 13.01 14.66C12.76 14.54 11.96 14.27 11.01 13.43C10.27 12.77 9.77 11.96 9.63 11.71C9.49 11.46 9.61 11.33 9.74 11.2C9.85 11.09 9.99 10.91 10.12 10.76C10.25 10.61 10.29 10.5 10.37 10.33C10.45 10.16 10.41 10.02 10.35 9.89C10.29 9.76 9.79 8.54 9.59 8.04C9.39 7.56 9.18 7.62 9.03 7.61C8.89 7.6 8.72 7.6 8.55 7.6C8.38 7.6 8.11 7.66 7.88 7.91C7.65 8.16 7 8.77 7 10.01C7 11.25 7.9 12.44 8.02 12.61C8.14 12.77 9.8 15.33 12.33 16.42C12.93 16.68 13.4 16.84 13.76 16.95C14.36 17.14 14.91 17.12 15.34 17.05C15.82 16.98 16.82 16.45 17.03 15.86C17.23 15.27 17.23 14.77 17.17 14.66C17.11 14.56 16.95 14.49 16.7 14.37L16.56 14.33Z"/>
              </svg>
              <span>TALK TO AN INDEPENDENT ADVISOR</span>
            </a>
          </div>

        </div>
      </section>

      {/* =========================================================================
           4. TECHNICAL FOOTER & COMPLIANCE
           ========================================================================= */}
      <footer className="site-editorial-footer">
        <div className="container footer-inner-content">
          
          <img 
            src="/images/madinet-masr/madinet-masr-official.webp" 
            alt="Madinet Masr Official Logo" 
            className="footer-brand-logo-xl" 
          />
          
          <div className="footer-signature-bar">
            By ir-properties.com
          </div>

          <div className="footer-consultancy-positioning">
            Independent Real Estate Consultancy
          </div>

          <p className="footer-compliance-text">
            This landing page is presented by <strong>ir-properties.com</strong>, an Independent Real Estate Consultancy. It is not an official direct web property of Madinet Masr. All trademarks, project designations, and architectural visualizations belong to their respective developers. Displayed prices, terms, and inventory availability are subject to official developer verification and market change without notice.
          </p>

          <div className="footer-legal-links">
            <a href="/privacy-policy">Privacy Policy</a>
            <span>•</span>
            <a href="/terms-conditions">Terms & Conditions</a>
          </div>

          <div className="footer-copyright">
            © 2026 ir-properties.com — Independent Real Estate Consultancy. All Rights Reserved.
          </div>

        </div>
      </footer>

      {/* =========================================================================
           5. FLOATING WHATSAPP BUTTON (ROUND GREEN ICON ONLY #25D366)
           ========================================================================= */}
      <a 
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20the%20Madinet%20Masr%20Portfolio`} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="floating-whatsapp-trigger" 
        aria-label="Direct WhatsApp Consultation">
        <div className="whatsapp-pulse-ring"></div>
        <svg viewBox="0 0 24 24">
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 20.15C10.57 20.15 9.12 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.81 13.47 3.81 11.91C3.81 7.37 7.5 3.69 12.05 3.69C14.25 3.69 16.31 4.55 17.87 6.11C19.42 7.67 20.28 9.73 20.28 11.93C20.27 16.48 16.59 20.15 12.05 20.15ZM16.56 14.33C16.31 14.2 15.09 13.6 14.86 13.52C14.64 13.44 14.47 13.4 14.31 13.65C14.15 13.9 13.68 14.45 13.54 14.61C13.4 14.77 13.26 14.79 13.01 14.66C12.76 14.54 11.96 14.27 11.01 13.43C10.27 12.77 9.77 11.96 9.63 11.71C9.49 11.46 9.61 11.33 9.74 11.2C9.85 11.09 9.99 10.91 10.12 10.76C10.25 10.61 10.29 10.5 10.37 10.33C10.45 10.16 10.41 10.02 10.35 9.89C10.29 9.76 9.79 8.54 9.59 8.04C9.39 7.56 9.18 7.62 9.03 7.61C8.89 7.6 8.72 7.6 8.55 7.6C8.38 7.6 8.11 7.66 7.88 7.91C7.65 8.16 7 8.77 7 10.01C7 11.25 7.9 12.44 8.02 12.61C8.14 12.77 9.8 15.33 12.33 16.42C12.93 16.68 13.4 16.84 13.76 16.95C14.36 17.14 14.91 17.12 15.34 17.05C15.82 16.98 16.82 16.45 17.03 15.86C17.23 15.27 17.23 14.77 17.17 14.66C17.11 14.56 16.95 14.49 16.7 14.37L16.56 14.33Z"/>
        </svg>
      </a>

      {/* =========================================================================
           6. SUCCESS CONFIRMATION MODAL
           ========================================================================= */}
      {isModalOpen && (
        <div className="success-modal-overlay is-active" role="dialog" aria-modal="true">
          <div className="success-modal-window">
            <div className="modal-icon-badge">
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>

            <h3 className="modal-title-editorial">Interest Confirmed</h3>
            
            <p className="modal-body-editorial">
              Thank you, <strong>{submittedName || 'Valued Investor'}</strong>. Your registration for Madinet Masr has been received by <strong>ir-properties.com</strong>. A dedicated independent real estate advisor will connect with you shortly with unit specifications and floor plans.
            </p>

            <div className="modal-actions-stack">
              <a 
                href={modalWhatsappLink || `https://wa.me/${WHATSAPP_NUMBER}`} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-whatsapp-solid">
                <svg viewBox="0 0 24 24">
                  <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 20.15C10.57 20.15 9.12 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.81 13.47 3.81 11.91C3.81 7.37 7.5 3.69 12.05 3.69C14.25 3.69 16.31 4.55 17.87 6.11C19.42 7.67 20.28 9.73 20.28 11.93C20.27 16.48 16.59 20.15 12.05 20.15ZM16.56 14.33C16.31 14.2 15.09 13.6 14.86 13.52C14.64 13.44 14.47 13.4 14.31 13.65C14.15 13.9 13.68 14.45 13.54 14.61C13.4 14.77 13.26 14.79 13.01 14.66C12.76 14.54 11.96 14.27 11.01 13.43C10.27 12.77 9.77 11.96 9.63 11.71C9.49 11.46 9.61 11.33 9.74 11.2C9.85 11.09 9.99 10.91 10.12 10.76C10.25 10.61 10.29 10.5 10.37 10.33C10.45 10.16 10.41 10.02 10.35 9.89C10.29 9.76 9.79 8.54 9.59 8.04C9.39 7.56 9.18 7.62 9.03 7.61C8.89 7.6 8.72 7.6 8.55 7.6C8.38 7.6 8.11 7.66 7.88 7.91C7.65 8.16 7 8.77 7 10.01C7 11.25 7.9 12.44 8.02 12.61C8.14 12.77 9.8 15.33 12.33 16.42C12.93 16.68 13.4 16.84 13.76 16.95C14.36 17.14 14.91 17.12 15.34 17.05C15.82 16.98 16.82 16.45 17.03 15.86C17.23 15.27 17.23 14.77 17.17 14.66C17.11 14.56 16.95 14.49 16.7 14.37L16.56 14.33Z"/>
                </svg>
                <span>CONTINUE ON WHATSAPP</span>
              </a>
              <button 
                type="button" 
                onClick={() => setIsModalOpen(false)} 
                className="modal-close-quiet">
                Close Window
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

