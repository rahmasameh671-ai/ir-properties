/**
 * IR-PROPERTIES | City Gate New Cairo Interactive Logic
 * Route: /city-gate & /citygate
 * Entity: By ir-properties — Independent Real Estate Consultancy
 * WhatsApp: +201277752731
 */

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('cityGateLeadForm');
  const modal = document.getElementById('cityGateSuccessModal');
  const modalCloseBtn = document.getElementById('cityGateModalClose');
  const modalLeadName = document.getElementById('modalLeadName');

  if (form) {
    form.addEventListener('submit', async function (e) {
      e.preventDefault();

      const fullNameInput = document.getElementById('cgFullName');
      const countryCodeInput = document.getElementById('cgCountryCode');
      const phoneInput = document.getElementById('cgPhoneNumber');
      const submitBtn = form.querySelector('button[type="submit"]');

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

      const fullPhoneNumber = `${countryCode} ${phoneNumber}`.trim();

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = 'SUBMITTING...';
      }

      // Log inquiry for analytics/CRM dispatch
      console.log('Inquiry submitted to ir-properties Consultancy:', {
        project: 'City Gate New Cairo',
        developer: 'Qatari Diar Egypt',
        consultancy: 'ir-properties',
        role: 'Independent Real Estate Consultancy',
        name: fullName,
        phone: fullPhoneNumber,
        timestamp: new Date().toISOString()
      });

      // Google Ads & Tag Lead Conversion Event for Form Submission
      if (typeof window.gtag_report_form_conversion === 'function') {
        try {
          window.gtag_report_form_conversion();
        } catch (err) {
          console.warn('Form conversion notice:', err);
        }
      } else if (typeof gtag_report_conversion === 'function') {
        try {
          gtag_report_conversion();
        } catch (err) {
          console.warn('Conversion notice:', err);
        }
      }
      if (typeof gtag === 'function') {
        gtag('event', 'conversion', {
          'send_to': 'AW-18125180547/AZcICJes-qQcEIOd4cJD',
          'value': 1.0,
          'currency': 'EGP'
        });
        gtag('event', 'conversion', {
          'send_to': 'AW-18125180547',
          'value': 1.0,
          'currency': 'EGP'
        });
        gtag('event', 'generate_lead', {
          'send_to': 'AW-18125180547',
          event_category: 'form',
          event_label: 'City Gate Lead Inquiry'
        });
        gtag('event', 'lead_form_submission', {
          'send_to': 'AW-18125180547'
        });
      }

      // Dispatch to Zapier Webhook (Lead Integration)
      const zapierData = {
        fullName: fullName,
        phoneNumber: fullPhoneNumber,
        landingPageUrl: window.location.href,
        submissionDate: new Date().toISOString()
      };

      try {
        await fetch("https://hooks.zapier.com/hooks/catch/25429357/uclzmpn/", {
          method: "POST",
          body: JSON.stringify(zapierData)
        });
      } catch (err) {
        console.warn("Zapier notice:", err);
      } finally {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = 'SUBMIT';
        }
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

  // Outbound WhatsApp Click Conversion Tracking (Direct & Delegated)
  document.addEventListener('click', function (e) {
    const waLink = e.target.closest('a[href*="wa.me"]');
    if (waLink) {
      if (typeof gtag_report_conversion === 'function') {
        gtag_report_conversion(waLink.href);
      } else if (typeof gtag === 'function') {
        gtag('event', 'conversion', {
          'send_to': 'AW-18125180547/AZcICJes-qQcEIOd4cJD',
          'value': 1.0,
          'currency': 'EGP'
        });
        gtag('event', 'conversion', {
          'send_to': 'AW-18125180547',
          'value': 1.0,
          'currency': 'EGP'
        });
        gtag('event', 'contact', {
          'send_to': 'AW-18125180547',
          'method': 'WhatsApp',
          'event_category': 'WhatsApp',
          'event_label': 'WhatsApp Click'
        });
        gtag('event', 'whatsapp_click', {
          'send_to': 'AW-18125180547'
        });
      }
    }
  });
});
