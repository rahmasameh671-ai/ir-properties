م/**
 * IR-PROPERTIES | SODIC EXCLUSIVE PORTFOLIO LOGIC
 * Route: /sodic
 * Central WhatsApp Number: +201277752731
 * Zero Gold / Clean Luxury Form Handling
 */

document.addEventListener('DOMContentLoaded', () => {
  const WHATSAPP_NUMBER = '201277752731';

  // Form Elements
  const sodicForm = document.getElementById('sodicEnquiryForm');
  const fullNameInput = document.getElementById('sodicFullName');
  const countryCodeSelect = document.getElementById('sodicCountryCode');
  const phoneNumberInput = document.getElementById('sodicPhoneNumber');
  const confirmationModal = document.getElementById('sodicConfirmationModal');
  const closeModalBtn = document.getElementById('closeSodicModalBtn');
  const modalWhatsappLink = document.getElementById('modalSodicWhatsappLink');

  // Handle Private Enquiry Lead Capture Form Submission
  if (sodicForm) {
    sodicForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = fullNameInput ? fullNameInput.value.trim() : '';
      const countryCode = countryCodeSelect ? countryCodeSelect.value : '+20';
      const phone = phoneNumberInput ? phoneNumberInput.value.trim() : '';

      // Validation
      if (!name) {
        if (fullNameInput) {
          fullNameInput.focus();
          fullNameInput.style.borderColor = '#E53E3E';
          setTimeout(() => {
            fullNameInput.style.borderColor = '';
          }, 3000);
        }
        return;
      }

      if (!phone) {
        if (phoneNumberInput) {
          phoneNumberInput.focus();
          phoneNumberInput.style.borderColor = '#E53E3E';
          setTimeout(() => {
            phoneNumberInput.style.borderColor = '';
          }, 3000);
        }
        return;
      }

      const fullPhoneNumber = `${countryCode} ${phone}`;

      // Construct prefilled WhatsApp consultation message for SODIC portfolio
      const messageText = `Hello ir-properties,\nI am submitting a private enquiry for the SODIC Portfolio & Floor Plans.\n\n*Client Name:* ${name}\n*Contact Number:* ${fullPhoneNumber}\n\nPlease share the official project brochures, floor plans, and pricing breakdown.`;
      const encodedMsg = encodeURIComponent(messageText);
      const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMsg}`;

      // Trigger Google Ads Conversion Tracking for Form Submit
      if (typeof window.gtag_report_conversion === 'function') {
        try {
          window.gtag_report_conversion();
        } catch (err) {
          console.warn('Conversion notice:', err);
        }
      }
      if (typeof window.gtag === 'function') {
        try {
          window.gtag('event', 'conversion', {
            'send_to': 'AW-18564830215/A7t2CIvYnLYdEIeos5RF',
            'value': 1.0,
            'currency': 'EGP'
          });
          window.gtag('event', 'conversion', {
            'send_to': 'AW-18125180547/AZcICJes-qQcEIOd4cJD',
            'value': 1.0,
            'currency': 'EGP'
          });
          window.gtag('event', 'generate_lead', {
            event_category: 'form',
            event_label: 'SODIC Lead Inquiry'
          });
        } catch (err) {
          console.warn('GTag notice:', err);
        }
      }

      // Update Modal WhatsApp Button URL
      if (modalWhatsappLink) {
        modalWhatsappLink.href = waUrl;
      }

      // Show confirmation modal
      if (confirmationModal) {
        confirmationModal.classList.add('active');
        document.body.style.overflow = 'hidden';
      }

      // Auto-open WhatsApp chat in new window
      try {
        window.open(waUrl, '_blank', 'noopener,noreferrer');
      } catch (err) {
        console.warn('Popup blocked, WhatsApp link available in modal:', err);
      }

      // Reset form fields
      sodicForm.reset();
      if (countryCodeSelect) countryCodeSelect.value = '+20';
    });
  }

  // Modal Close Handlers
  if (closeModalBtn && confirmationModal) {
    closeModalBtn.addEventListener('click', () => {
      confirmationModal.classList.remove('active');
      document.body.style.overflow = '';
    });
  }

  if (confirmationModal) {
    confirmationModal.addEventListener('click', (e) => {
      if (e.target === confirmationModal) {
        confirmationModal.classList.remove('active');
        document.body.style.overflow = '';
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && confirmationModal.classList.contains('active')) {
        confirmationModal.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }

  // Outbound WhatsApp Click Conversion Tracking (100% Delegated Coverage)
  document.addEventListener('click', (e) => {
    const waLink = e.target.closest('a[href*="wa.me"]');
    if (waLink) {
      if (typeof window.gtag_report_conversion === 'function') {
        window.gtag_report_conversion(waLink.href);
      } else if (typeof window.gtag === 'function') {
        window.gtag('event', 'conversion', {
          'send_to': 'AW-18564830215/A7t2CIvYnLYdEIeos5RF',
          'value': 1.0,
          'currency': 'EGP'
        });
      }
    }
  });

  // Standalone Legal Links & Home Fallback for Local File Protocol
  if (window.location.protocol === 'file:') {
    const linkPrivacy = document.getElementById('sodicLinkPrivacy');
    const linkTerms = document.getElementById('sodicLinkTerms');
    const isSubdir = window.location.pathname.includes('/sodic/');
    const basePath = isSubdir ? '../' : '';

    if (linkPrivacy) linkPrivacy.setAttribute('href', `${basePath}privacy-policy.html`);
    if (linkTerms) linkTerms.setAttribute('href', `${basePath}terms-conditions.html`);
    const returnLink = document.querySelector('.top-return-link');
    if (returnLink) returnLink.setAttribute('href', `${basePath}index.html`);
  }
});
