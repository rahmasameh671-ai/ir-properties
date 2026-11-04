/**
 * IR-PROPERTIES | City Gate New Cairo Interactive Logic
 * Route: /city-gate
 * Entity: By ir-properties — Independent Real Estate Consultancy
 * WhatsApp: +201277752731
 */

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('cityGateLeadForm');
  const modal = document.getElementById('cityGateSuccessModal');
  const modalCloseBtn = document.getElementById('cityGateModalClose');
  const modalLeadName = document.getElementById('modalLeadName');

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const fullNameInput = document.getElementById('cgFullName');
      const countryCodeInput = document.getElementById('cgCountryCode');
      const phoneInput = document.getElementById('cgPhoneNumber');

      const fullName = fullNameInput ? fullNameInput.value.trim() : '';
      const countryCode = countryCodeInput ? countryCodeInput.value : '+20';
      const phoneNumber = phoneInput ? phoneInput.value.trim() : '';

      if (!fullName) {
        if (fullNameInput) fullNameInput.focus();
        return;
      }

      if (!phoneNumber) {
        if (phoneInput) phoneInput.focus();
        return;
      }

      // Log inquiry for analytics/CRM dispatch
      console.log('Inquiry submitted to ir-properties Consultancy:', {
        project: 'City Gate New Cairo',
        developer: 'Qatari Diar Egypt',
        consultancy: 'ir-properties',
        role: 'Independent Real Estate Consultancy',
        name: fullName,
        phone: countryCode + ' ' + phoneNumber,
        timestamp: new Date().toISOString()
      });

      // Google Ads & Tag Lead Conversion Event for Form Submission
      if (typeof gtag === 'function') {
        gtag('event', 'conversion', {
          'send_to': 'AW-18125180547/AZcICJes-qQcEIOd4cJD'
        });
        gtag('event', 'generate_lead', {
          event_category: 'form',
          event_label: 'City Gate Lead Inquiry'
        });
      }

      // Update modal text
      if (modalLeadName) {
        modalLeadName.textContent = fullName;
      }

      // Show success modal
      if (modal) {
        modal.classList.add('is-active');
        document.body.style.overflow = 'hidden';
      }

      // Reset form
      form.reset();
      if (countryCodeInput) {
        countryCodeInput.value = '+20';
      }
    });
  }

  // Modal dismiss handlers
  if (modalCloseBtn && modal) {
    modalCloseBtn.addEventListener('click', function () {
      modal.classList.remove('is-active');
      document.body.style.overflow = '';
    });
  }

  if (modal) {
    modal.addEventListener('click', function (e) {
      if (e.target === modal) {
        modal.classList.remove('is-active');
        document.body.style.overflow = '';
      }
    });
  }

  // Smooth scroll for anchor jump links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId && targetId !== '#') {
        const targetEl = document.querySelector(targetId);
        if (targetEl) {
          e.preventDefault();
          targetEl.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });

  // Outbound WhatsApp Click Conversion Tracking
  document.querySelectorAll('a[href*="wa.me"]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      if (typeof gtag_report_conversion === 'function') {
        e.preventDefault();
        gtag_report_conversion(this.href);
      }
    });
  });
});
