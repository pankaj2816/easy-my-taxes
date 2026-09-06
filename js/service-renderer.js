/**
 * SERVICE DETAIL DYNAMIC RENDERER
 * Loads parameters from URL (e.g. ?id=private-limited-company), finds data in MASTER_SERVICES_DATA,
 * and dynamically populates the page.
 */

function renderServiceDetailPage() {
  const urlParams = new URLSearchParams(window.location.search);
  const serviceId = urlParams.get('id') || 'private-limited-company';

  const data = typeof MASTER_SERVICES_DATA !== 'undefined' && MASTER_SERVICES_DATA[serviceId] 
    ? MASTER_SERVICES_DATA[serviceId] 
    : (typeof MASTER_SERVICES_DATA !== 'undefined' ? MASTER_SERVICES_DATA['private-limited-company'] : null);

  if (!data) return;

  // 1. Page Title & Meta
  document.title = `${data.title} | Easy My Taxes & CA Pradeep Agarwal`;
  const metaDesc = document.getElementById('pageMetaDesc');
  if (metaDesc) metaDesc.setAttribute('content', `${data.tagline} End-to-end statutory CA filing with 100% compliance guarantee.`);
  const ogTitle = document.getElementById('ogTitle');
  if (ogTitle) ogTitle.setAttribute('content', `${data.title} | Easy My Taxes`);
  const ogDesc = document.getElementById('ogDesc');
  if (ogDesc) ogDesc.setAttribute('content', data.tagline);

  // 2. Breadcrumbs
  const crumbCategory = document.getElementById('crumbCategory');
  if (crumbCategory) crumbCategory.textContent = data.categoryLabel;
  const crumbTitle = document.getElementById('crumbTitle');
  if (crumbTitle) crumbTitle.textContent = data.title;

  // 3. Hero Section
  const heroBadge = document.getElementById('heroBadge');
  if (heroBadge) heroBadge.textContent = data.badge;
  const heroTitle = document.getElementById('heroTitle');
  if (heroTitle) heroTitle.textContent = data.title;
  const heroTagline = document.getElementById('heroTagline');
  if (heroTagline) heroTagline.textContent = data.tagline;
  const heroTimeline = document.getElementById('heroTimeline');
  if (heroTimeline) heroTimeline.textContent = data.timeline;
  const heroPortal = document.getElementById('heroPortal');
  if (heroPortal) heroPortal.textContent = data.govtPortal;
  const heroPrice = document.getElementById('heroPrice');
  if (heroPrice) heroPrice.textContent = data.startingPrice;
  const heroIcon = document.getElementById('heroIcon');
  if (heroIcon) heroIcon.textContent = data.icon;
  const heroOverview = document.getElementById('heroOverview');
  if (heroOverview) heroOverview.textContent = data.overview;

  // Pre-fill Consultation forms
  const sfService = document.getElementById('sfService');
  if (sfService) sfService.value = data.title;
  const cService = document.getElementById('cService');
  if (cService) cService.value = data.title;

  // Button Listeners
  const btnBook = document.getElementById('btnBookThisService');
  if (btnBook) {
    btnBook.onclick = () => openConsultationModal(data.title);
  }
  const btnWhatsApp = document.getElementById('btnWhatsAppService');
  if (btnWhatsApp) {
    btnWhatsApp.onclick = () => {
      const msg = encodeURIComponent(`Hello CA Pradeep Agarwal, I would like to inquire about ${data.title} (${data.startingPrice}). Please guide me through the documents and process.`);
      window.open(`https://wa.me/919891495092?text=${msg}`, '_blank');
    };
  }

  // 4. Benefits Grid
  const benefitsContainer = document.getElementById('benefitsContainer');
  if (benefitsContainer && data.benefits) {
    benefitsContainer.innerHTML = data.benefits.map((b, idx) => `
      <div class="service-benefit-card">
        <div class="benefit-icon-badge">${idx + 1}</div>
        <h3 class="benefit-card-title">${b.title}</h3>
        <p class="benefit-card-desc">${b.desc}</p>
      </div>
    `).join('');
  }

  // 5. Documents Checklist
  const documentsContainer = document.getElementById('documentsContainer');
  if (documentsContainer && data.documents) {
    documentsContainer.innerHTML = data.documents.map((doc, idx) => `
      <label class="doc-check-item">
        <input type="checkbox" id="docCheck_${idx}" class="doc-checkbox">
        <span class="doc-check-label">${doc}</span>
      </label>
    `).join('');
  }

  // 6. Process Steps
  const stepsContainer = document.getElementById('stepsContainer');
  if (stepsContainer && data.steps) {
    stepsContainer.innerHTML = data.steps.map(s => `
      <div class="process-card">
        <div class="process-header-row">
          <span class="process-step-num">Step 0${s.step}</span>
          <div class="process-icon-circle">✓</div>
        </div>
        <h3 class="process-card-title">${s.title}</h3>
        <p class="process-card-desc">${s.desc}</p>
      </div>
    `).join('');
  }

  // 7. Deliverables Grid
  const deliverablesContainer = document.getElementById('deliverablesContainer');
  if (deliverablesContainer && data.deliverables) {
    deliverablesContainer.innerHTML = data.deliverables.map(item => `
      <div class="deliverable-item">
        <span class="deliverable-check">✓</span>
        <span class="deliverable-text">${item}</span>
      </div>
    `).join('');
  }

  // 8. FAQs Accordion
  const faqsContainer = document.getElementById('faqsContainer');
  if (faqsContainer && data.faqs) {
    faqsContainer.innerHTML = data.faqs.map((faq, idx) => `
      <div class="faq-item ${idx === 0 ? 'open' : ''}">
        <button class="faq-header" type="button">
          <span class="faq-q-text">${faq.q}</span>
          <span class="faq-toggle-icon">${idx === 0 ? '−' : '+'}</span>
        </button>
        <div class="faq-body">
          <p>${faq.a}</p>
        </div>
      </div>
    `).join('');

    // Attach click listener to FAQs
    faqsContainer.querySelectorAll('.faq-header').forEach(header => {
      header.addEventListener('click', () => {
        const item = header.parentElement;
        const isOpen = item.classList.contains('open');
        faqsContainer.querySelectorAll('.faq-item').forEach(i => {
          i.classList.remove('open');
          const icon = i.querySelector('.faq-toggle-icon');
          if (icon) icon.textContent = '+';
        });
        if (!isOpen) {
          item.classList.add('open');
          const icon = item.querySelector('.faq-toggle-icon');
          if (icon) icon.textContent = '−';
        }
      });
    });
  }
}

// Handle Service Lead Form submit
function handleServiceLeadSubmit(e) {
  e.preventDefault();
  const name = document.getElementById('sfName')?.value;
  const phone = document.getElementById('sfPhone')?.value;
  const email = document.getElementById('sfEmail')?.value;
  const service = document.getElementById('sfService')?.value;
  const notes = document.getElementById('sfNotes')?.value;

  const msg = encodeURIComponent(`*New Fastrack Service Application*\n\n*Client:* ${name}\n*Phone:* ${phone}\n*Email:* ${email}\n*Service:* ${service}\n*Notes:* ${notes || 'N/A'}`);
  window.open(`https://wa.me/919891495092?text=${msg}`, '_blank');

  alert(`Thank you ${name}! Your request for ${service} has been forwarded to CA Pradeep Agarwal. We will connect with you in under 30 minutes.`);
}

document.addEventListener('DOMContentLoaded', () => {
  renderServiceDetailPage();
});
