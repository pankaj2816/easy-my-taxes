/**
 * SERVICE & CATEGORY DIRECTORY ENGINE - EASY MY TAXES (2026 EDITION)
 * Direct CA Advisory & Statutory Services Portal
 *
 * Provides:
 * 1. Smart Category Directory Hub (?category=registrations | ?category=compliance | ?category=licenses)
 * 2. In-Depth RegisterKaro-Style Single Service Landing (?id=private-limited-company, etc.)
 * 3. Detailed Plain-English Overviews & "Who Should Choose This"
 * 4. Statutory Minimum Eligibility & Pre-Requisites Grid
 * 5. Categorized Mandatory Document Checklist
 * 6. Step-by-Step Filing Roadmap & Package Deliverables
 * 7. Mandatory Post-Registration / Post-Approval Compliances (INC-20A, ADT-1, Annual Filings)
 * 8. Entity Comparison Decision Matrix
 * 9. Expanded In-Depth Practical FAQs
 * 10. Sibling Services Showcase Grid
 * 11. Zero fees / charges display compliant with ICAI guidelines
 */

// Category Metadata
const CATEGORY_META = {
  registrations: {
    key: 'registrations',
    name: 'Company Registrations',
    shortName: 'Registrations',
    icon: '🏢',
    badge: 'MCA SPICe+ Fastrack Directory (2026)',
    title: 'All Company Registrations in India',
    tagline: 'Compare, choose, and incorporate your corporate structure with MCA in 5–7 working days under direct Chartered Accountant supervision.',
    portal: 'Ministry of Corporate Affairs (MCA)',
    timeline: '5 - 7 Working Days',
    chips: [
      '⚡ 16 Legal Structures Available',
      '📄 100% Online Paperless MCA SPICe+',
      '🔒 Direct CA Pradeep Review',
      '🏦 Zero Office Visit Required'
    ]
  },
  compliance: {
    key: 'compliance',
    name: 'Compliance & Filings',
    shortName: 'Compliances',
    icon: '⚖️',
    badge: 'Statutory ROC & Corporate Compliance Hub (2026)',
    title: 'Corporate Compliance & Statutory ROC Filings',
    tagline: 'End-to-end statutory annual ROC filings, director KYC, statutory audits, and income tax governance to protect your company from penalties and strikes.',
    portal: 'MCA, Income Tax Department & GSTN',
    timeline: 'Per Statutory Due Dates',
    chips: [
      '⚡ 12 Compliance Offerings',
      '🛡️ Zero Late Fee & Penalty Protection',
      '📑 Form AOC-4, MGT-7 & Form 11',
      '💼 Dedicated CA Relationship Manager'
    ]
  },
  licenses: {
    key: 'licenses',
    name: 'Licenses & Certifications',
    shortName: 'Licenses',
    icon: '📜',
    badge: 'Central & State Statutory Licensing Hub (2026)',
    title: 'Business Licenses & Central/State Certifications',
    tagline: 'Procure mandatory central, state, and municipal statutory licenses to trade, manufacture, and operate legally without regulatory interruption.',
    portal: 'DGFT, FSSAI, BIS, MSME & Municipal Authorities',
    timeline: '24 Hours to 15 Working Days',
    chips: [
      '⚡ 13 Statutory Licenses',
      '🚀 Fastrack Approval Guarantee',
      '📄 100% Paperless Online Processing',
      '🏛️ Government Approved Certification'
    ]
  }
};

// Smart Category-level Fallback Data Generators
const STATUTORY_DEFAULTS = {
  registrations: {
    whoFor: [
      { icon: '🚀', title: 'Tech & SaaS Startups', desc: 'Ideal for founders seeking angel/VC funding, ESOP pools, and rapid scale.' },
      { icon: '💼', title: 'Professional Firms', desc: 'Great for consultants, agencies, and service providers wanting a corporate shield.' },
      { icon: '🛒', title: 'E-Commerce Merchants', desc: 'Essential for selling on Amazon, Flipkart, or operating direct-to-consumer portals.' },
      { icon: '🏭', title: 'Manufacturing & Trading', desc: 'Required for commercial vendor contracts, bank loans, and institutional tenders.' }
    ],
    eligibility: [
      { icon: '👥', label: 'Minimum Promoters', value: '2 Directors / Partners', desc: 'At least two individuals required to act as directors or designated partners.' },
      { icon: '🇮🇳', label: 'Resident Indian', value: '1 Resident Director', desc: 'At least one director must have resided in India for ≥ 182 days in the previous FY.' },
      { icon: '💰', label: 'Minimum Capital', value: '₹0 Paid-Up Capital', desc: 'No statutory minimum capital mandated by MCA; start with any nominal amount.' },
      { icon: '🏢', label: 'Registered Address', value: 'Commercial or Home', desc: 'Can be rented, owned, or residential premise with a recent utility bill and owner NOC.' }
    ],
    postCompliances: [
      { badge: 'Mandatory', timeline: 'Within 180 Days', title: 'Commencement of Business (INC-20A)', desc: 'File declaration with ROC confirming directors have deposited share capital in bank.' },
      { badge: 'Mandatory', timeline: 'Within 30 Days', title: 'First Auditor Appointment (ADT-1)', desc: 'Appoint an independent statutory Chartered Accountant at first board meeting.' },
      { badge: 'Annual', timeline: 'By 30th October', title: 'Annual ROC Filings (AOC-4 & MGT-7)', desc: 'Submit audited balance sheet, profit & loss statement, and annual return to MCA.' },
      { badge: 'Annual', timeline: 'By 30th September', title: 'Director KYC (DIR-3 KYC)', desc: 'Mandatory annual verification of DIN credentials for all active directors.' },
      { badge: 'Statutory', timeline: 'Within 60 Days', title: 'Share Certificates Issuance', desc: 'Issue stamped physical or electronic share certificates to initial subscribers.' },
      { badge: 'Annual', timeline: 'By 31st October', title: 'Corporate Income Tax Return (ITR-6)', desc: 'Annual corporate tax return filing with audited financials under Income Tax Act.' }
    ]
  },
  compliance: {
    whoFor: [
      { icon: '🏢', title: 'Private Limited Companies', desc: 'Fulfill annual ROC, AOC-4, MGT-7, and Director KYC statutory mandates.' },
      { icon: '🤝', title: 'Limited Liability Partnerships', desc: 'Submit mandatory Form 11 (Annual Return) and Form 8 (Statement of Accounts).' },
      { icon: '👥', title: 'Company Directors', desc: 'Preserve active DIN status and prevent personal disqualification u/s 164(2).' },
      { icon: '📊', title: 'Audited Enterprises', desc: 'Complete statutory, internal, and tax audits under Section 44AB seamlessly.' }
    ],
    eligibility: [
      { icon: '📑', label: 'Entity Identification', value: 'Active CIN / LLPIN', desc: 'The company or LLP must be active and not struck off on the MCA master database.' },
      { icon: '🔑', label: 'Director Credentials', value: 'Active DIN & DSC', desc: 'Valid Class-3 Digital Signature Certificate and active Director Identification Number.' },
      { icon: '📚', label: 'Financial Records', value: 'Updated Books of Accounts', desc: 'General ledger, bank statements, and trial balance ready for reconciliation.' },
      { icon: '🏛️', label: 'Prior Year Status', value: 'Preceding Filings Clear', desc: 'Prior year ROC returns and ITR acknowledgements available for audit trail.' }
    ],
    postCompliances: [
      { badge: 'Statutory', timeline: 'Immediate Post-Filing', title: 'ROC Acknowledgement & SRN Storage', desc: 'Maintain official MCA Challan with SRN for statutory audit trail and bank KYC.' },
      { badge: 'Secretarial', timeline: 'Within 30 Days', title: 'Update Statutory Registers (Sec 88)', desc: 'Record filing details in Register of Members, Directors, and Charges at registered office.' },
      { badge: 'Corporate', timeline: 'Annual Cycle', title: 'Minutes of Board & AGM Meetings', desc: 'Formalize minutes of Annual General Meeting (AGM) and board resolutions in statutory binder.' }
    ]
  },
  licenses: {
    whoFor: [
      { icon: '🛍️', title: 'Retailers & Shopkeepers', desc: 'Procure mandatory Shop & Establishment (Gumasta) and municipal Trade Licenses.' },
      { icon: '🍽️', title: 'Food Business Operators', desc: 'Mandatory FSSAI Registration or State/Central License for restaurants, cloud kitchens & FMCG.' },
      { icon: '🌐', title: 'Exporters & Importers', desc: 'Procure 10-digit DGFT Import Export Code (IEC) to trade globally without barriers.' },
      { icon: '🏭', title: 'Manufacturers & Brands', desc: 'Obtain MSME / Udyam priority certifications, BIS ISI mark, and ISO quality standards.' }
    ],
    eligibility: [
      { icon: '🏢', label: 'Legal Constitution', value: 'Any Business Entity', desc: 'Proprietorship, Partnership, LLP, Company, or Trust with valid PAN card.' },
      { icon: '📍', label: 'Operational Premise', value: 'Valid Address Proof', desc: 'Utility bill not older than 2 months, Rent Agreement, and Landlord NOC.' },
      { icon: '🏦', label: 'Banking Facility', value: 'Active Bank Account', desc: 'Bank statement or cancelled cheque in the operational business name.' },
      { icon: '👤', label: 'Authorized Signatory', value: 'PAN & Aadhaar Card', desc: 'Identity verification and mobile number linked with Aadhaar for OTP signing.' }
    ],
    postCompliances: [
      { badge: 'Mandatory', timeline: 'Permanent', title: 'Premise Display of License', desc: 'Statutorily display license certificate (e.g. FSSAI QR / GSTIN / Trade License) at reception.' },
      { badge: 'Periodic', timeline: '30-60 Days Before Expiry', title: 'Timely License Renewal', desc: 'File renewal application before expiry to prevent late penalties or business closure notices.' },
      { badge: 'Compliance', timeline: 'On Request', title: 'Maintain Statutory Audit Register', desc: 'Keep inspection register, invoice files, and safety clearance records updated on site.' }
    ]
  }
};

let currentActiveCategory = 'registrations';
let currentSearchQuery = '';

/**
 * Main Controller: Inspects URL params and routes to either:
 * - Category Hub View
 * - Single Service Detail View
 */
function initServicePageRouter() {
  const urlParams = new URLSearchParams(window.location.search);
  const categoryParam = urlParams.get('category');
  const serviceId = urlParams.get('id');

  // Handle explicit category requests
  if (categoryParam && CATEGORY_META[categoryParam]) {
    renderCategoryHub(categoryParam);
    return;
  }

  // If id is a category root or if "company-registration" without specific intent
  if (serviceId === 'company-registration' && !urlParams.has('single')) {
    renderCategoryHub('registrations');
    return;
  }
  if (serviceId === 'pvt-ltd-compliance' && categoryParam === 'compliance') {
    renderCategoryHub('compliance');
    return;
  }
  if (serviceId === 'licenses-certifications' && !urlParams.has('single')) {
    renderCategoryHub('licenses');
    return;
  }

  // Handle specific single service
  if (serviceId && typeof MASTER_SERVICES_DATA !== 'undefined' && MASTER_SERVICES_DATA[serviceId]) {
    renderSingleServicePage(serviceId);
    return;
  }

  // Default fallback: Category Hub for registrations
  renderCategoryHub('registrations');
}

/**
 * Switch category dynamically without page reload
 */
function switchCategory(catKey) {
  if (!CATEGORY_META[catKey]) return;
  currentActiveCategory = catKey;
  currentSearchQuery = '';

  // Update browser URL without reloading
  const newUrl = `${window.location.pathname}?category=${catKey}`;
  window.history.pushState({ category: catKey }, '', newUrl);

  renderCategoryHub(catKey);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/**
 * Render the Smart Category Directory Showcase
 */
function renderCategoryHub(catKey, searchQuery = '') {
  currentActiveCategory = catKey;
  currentSearchQuery = searchQuery.toLowerCase().trim();
  const meta = CATEGORY_META[catKey];
  if (!meta) return;

  // Toggle View Containers
  const hubView = document.getElementById('categoryHubView');
  const singleView = document.getElementById('singleServiceView');
  if (hubView) hubView.style.display = 'block';
  if (singleView) singleView.style.display = 'none';

  // Update Category Switcher Tabs Active State
  document.querySelectorAll('.category-hub-tab').forEach(tab => {
    if (tab.getAttribute('data-cat') === catKey) {
      tab.classList.add('active');
    } else {
      tab.classList.remove('active');
    }
  });

  // 1. Page Title & Meta
  document.title = `${meta.title} | Easy My Taxes & CA Pradeep Agarwal`;
  const metaDesc = document.getElementById('pageMetaDesc');
  if (metaDesc) metaDesc.setAttribute('content', `${meta.tagline} Direct CA advisory with 100% compliance guarantee.`);

  // 2. Hub Header Content
  const catHubCrumb = document.getElementById('catHubCrumb');
  if (catHubCrumb) catHubCrumb.textContent = meta.name;
  const catHubBadge = document.getElementById('catHubBadge');
  if (catHubBadge) catHubBadge.textContent = meta.badge;
  const catHubTitle = document.getElementById('catHubTitle');
  if (catHubTitle) catHubTitle.textContent = `${meta.icon} ${meta.title}`;
  const catHubTagline = document.getElementById('catHubTagline');
  if (catHubTagline) catHubTagline.textContent = meta.tagline;

  // Stats Chips
  const catHubStats = document.getElementById('catHubStats');
  if (catHubStats) {
    catHubStats.innerHTML = meta.chips.map(chip => `
      <div class="cat-stat-chip">${chip}</div>
    `).join('');
  }

  // 3. Filter services from MASTER_SERVICES_DATA
  if (typeof MASTER_SERVICES_DATA === 'undefined') return;

  let services = Object.values(MASTER_SERVICES_DATA).filter(s => s.category === catKey);

  // If search query is applied
  if (currentSearchQuery) {
    services = services.filter(s =>
      s.title.toLowerCase().includes(currentSearchQuery) ||
      s.tagline.toLowerCase().includes(currentSearchQuery) ||
      (s.overview && s.overview.toLowerCase().includes(currentSearchQuery)) ||
      (s.deliverables && s.deliverables.some(d => d.toLowerCase().includes(currentSearchQuery)))
    );
  }

  // 4. Update Count Indicator
  const catHubCount = document.getElementById('catHubCount');
  if (catHubCount) {
    catHubCount.textContent = currentSearchQuery 
      ? `Found ${services.length} matching services` 
      : `Showing all ${services.length} statutory services in ${meta.shortName}`;
  }

  // 5. Render Grid
  const grid = document.getElementById('catHubGrid');
  if (!grid) return;

  if (services.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 2rem; background: var(--surface-0); border-radius: var(--radius-2xl); border: 2px dashed var(--surface-300);">
        <span style="font-size: 3rem; display: block; margin-bottom: 1rem;">🔍</span>
        <h3 style="font-size: 1.35rem; font-weight: 800; color: var(--primary-950); margin-bottom: 0.5rem;">
          No services matching "${searchQuery}"
        </h3>
        <p style="font-size: 0.95rem; color: var(--text-muted); margin-bottom: 1.5rem;">
          We offer bespoke business setups, cross-border holding formations, and direct representation before regulatory authorities.
        </p>
        <button class="btn btn-primary" onclick="openConsultationModal('Custom Statutory Inquiry')">
          Consult CA Pradeep Directly
        </button>
      </div>
    `;
    return;
  }

  grid.innerHTML = services.map(s => {
    // Deliverables preview (2 items)
    const inclusions = (s.deliverables || []).slice(0, 2).map(item => `
      <li>
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
        <span>${item}</span>
      </li>
    `).join('');

    const waMsg = encodeURIComponent(`Hello CA Pradeep Agarwal, I would like to inquire about ${s.title}. Please guide me through the documents and process.`);

    return `
      <div class="cat-card">
        <div>
          <div class="cat-card-header">
            <div class="cat-card-icon">${s.icon || '🏢'}</div>
            <div class="cat-card-badges">
              <span class="cat-badge-fastrack">${s.badge ? s.badge.slice(0, 24) : 'CA Supervised'}</span>
              <span class="cat-badge-time">⏱️ ${s.timeline}</span>
            </div>
          </div>
          <h3 class="cat-card-title">${s.title}</h3>
          <p class="cat-card-tagline">${s.tagline}</p>
          <ul class="cat-card-inclusions">
            ${inclusions}
          </ul>
        </div>
        <div class="cat-card-footer">
          <a href="service.html?id=${s.id}" class="btn-cat-details" onclick="navigateToService(event, '${s.id}')">
            Explore &amp; Apply &rarr;
          </a>
          <a href="https://wa.me/919891495092?text=${waMsg}" target="_blank" class="btn-cat-wa" title="WhatsApp Inquiry" aria-label="WhatsApp Inquiry">
            💬
          </a>
        </div>
      </div>
    `;
  }).join('');
}

/**
 * Handle Live Search inside Category Hub
 */
function handleCatSearch(val) {
  renderCategoryHub(currentActiveCategory, val);
}

/**
 * Navigate to Single Service View smoothly
 */
function navigateToService(e, serviceId) {
  e.preventDefault();
  const newUrl = `${window.location.pathname}?id=${serviceId}`;
  window.history.pushState({ serviceId: serviceId }, '', newUrl);
  renderSingleServicePage(serviceId);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/**
 * Render In-Depth RegisterKaro-Style Single Service Landing Page
 */
function renderSingleServicePage(serviceId) {
  const data = typeof MASTER_SERVICES_DATA !== 'undefined' && MASTER_SERVICES_DATA[serviceId] 
    ? MASTER_SERVICES_DATA[serviceId] 
    : (typeof MASTER_SERVICES_DATA !== 'undefined' ? MASTER_SERVICES_DATA['private-limited-company'] : null);

  if (!data) return;

  // Toggle View Containers
  const hubView = document.getElementById('categoryHubView');
  const singleView = document.getElementById('singleServiceView');
  if (hubView) hubView.style.display = 'none';
  if (singleView) singleView.style.display = 'block';

  // Update Category Switcher Tabs
  document.querySelectorAll('.category-hub-tab').forEach(tab => {
    if (tab.getAttribute('data-cat') === data.category) {
      tab.classList.add('active');
    } else {
      tab.classList.remove('active');
    }
  });

  // 1. Page Title & Meta
  document.title = `${data.title} | Easy My Taxes & CA Pradeep Agarwal`;
  const metaDesc = document.getElementById('pageMetaDesc');
  if (metaDesc) metaDesc.setAttribute('content', `${data.tagline} End-to-end statutory CA filing with 100% compliance guarantee.`);
  const ogTitle = document.getElementById('ogTitle');
  if (ogTitle) ogTitle.setAttribute('content', `${data.title} | Easy My Taxes`);
  const ogDesc = document.getElementById('ogDesc');
  if (ogDesc) ogDesc.setAttribute('content', data.tagline);

  // 2. Breadcrumbs with link to Category Hub
  const crumbCategory = document.getElementById('crumbCategory');
  if (crumbCategory) {
    crumbCategory.innerHTML = `<a href="service.html?category=${data.category}" onclick="event.preventDefault(); switchCategory('${data.category}');" style="color: var(--emerald-400); text-decoration: none; font-weight: 600;">${data.categoryLabel}</a>`;
  }
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
  const heroMode = document.getElementById('heroMode');
  if (heroMode) heroMode.textContent = data.filingMode || '100% Online Paperless';
  const heroIcon = document.getElementById('heroIcon');
  if (heroIcon) heroIcon.textContent = data.icon;
  const heroOverview = document.getElementById('heroOverview');
  if (heroOverview) heroOverview.textContent = data.overview;

  // Pre-fill Consultation forms
  const sfService = document.getElementById('sfService');
  if (sfService) sfService.value = data.title;
  const cService = document.getElementById('cService');
  if (cService) cService.value = data.title;

  // Button Listeners (No fee text in WhatsApp message)
  const btnBook = document.getElementById('btnBookThisService');
  if (btnBook) {
    btnBook.onclick = () => openConsultationModal(data.title);
  }
  const btnWhatsApp = document.getElementById('btnWhatsAppService');
  if (btnWhatsApp) {
    btnWhatsApp.onclick = () => {
      const msg = encodeURIComponent(`Hello CA Pradeep Agarwal, I would like to inquire about ${data.title}. Please guide me through the documents and process.`);
      window.open(`https://wa.me/919891495092?text=${msg}`, '_blank');
    };
  }

  // -------------------------------------------------------------------------
  // NEW REGISTERKARO-STYLE SECTIONS
  // -------------------------------------------------------------------------

  // A. Deep Dive Overview ("Understanding This Service")
  const deepDiveTitle = document.getElementById('deepDiveTitle');
  if (deepDiveTitle) deepDiveTitle.textContent = `Understanding ${data.title} in Simple Terms`;
  const deepDiveCard = document.getElementById('deepDiveCard');
  if (deepDiveCard) {
    const defaultExplanation = `
      <p style="font-size: 1.1rem; color: var(--primary-950); font-weight: 600; line-height: 1.75;">
        ${data.overview}
      </p>
      <p>
        In India, statutory compliance and legal registration are administered under dedicated statutory authorities such as the <strong>${data.govtPortal}</strong>. When you register or file through <strong>Easy My Taxes</strong> under the direct stewardship of <strong>CA Pradeep Agarwal (FCA, DISA)</strong>, our chartered accountancy team conducts a thorough pre-scrutiny of all documents to ensure zero rejection, seamless regulatory approval, and complete protection against statutory notices.
      </p>
      <div style="background: var(--surface-50); border-left: 4px solid var(--emerald-500); padding: 1rem 1.25rem; border-radius: var(--radius-sm); margin-top: 1.25rem;">
        <strong style="color: var(--primary-950);">💡 Key Regulatory Advantage:</strong>
        <span style="font-size: 0.925rem; color: var(--text-muted); margin-left: 0.35rem;">
          Every filing is executed 100% digitally through the central government portal with official timestamping, permanent government registration identifiers, and instant bank account integration.
        </span>
      </div>
    `;
    deepDiveCard.innerHTML = data.detailedOverview || defaultExplanation;
  }

  // B. "Who Should Choose This?" Grid
  const whoForGrid = document.getElementById('whoForGrid');
  if (whoForGrid) {
    const whoForItems = data.whoIsItFor || (STATUTORY_DEFAULTS[data.category] ? STATUTORY_DEFAULTS[data.category].whoFor : []);
    whoForGrid.innerHTML = whoForItems.map(item => `
      <div class="who-for-card">
        <div class="who-for-icon">${item.icon}</div>
        <h4 class="who-for-title">${item.title}</h4>
        <p class="who-for-desc">${item.desc}</p>
      </div>
    `).join('');
  }

  // C. Statutory Eligibility Criteria & Pre-Requisites Grid
  const eligibilityGrid = document.getElementById('eligibilityGrid');
  if (eligibilityGrid) {
    const eligItems = data.eligibility || (STATUTORY_DEFAULTS[data.category] ? STATUTORY_DEFAULTS[data.category].eligibility : []);
    eligibilityGrid.innerHTML = eligItems.map(item => `
      <div class="eligibility-card">
        <div class="eligibility-icon">${item.icon}</div>
        <span class="eligibility-label">${item.label}</span>
        <div class="eligibility-value">${item.value}</div>
        <p class="eligibility-desc">${item.desc}</p>
      </div>
    `).join('');
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

  // D. Mandatory Post-Registration / Post-Approval Compliances
  const postCompGrid = document.getElementById('postCompGrid');
  if (postCompGrid) {
    const postItems = data.postCompliances || (STATUTORY_DEFAULTS[data.category] ? STATUTORY_DEFAULTS[data.category].postCompliances : []);
    postCompGrid.innerHTML = postItems.map(item => `
      <div class="post-compliance-card">
        <div class="post-comp-header">
          <span class="post-comp-badge">${item.badge}</span>
          <span class="post-comp-timeline">⏱️ ${item.timeline}</span>
        </div>
        <h4 class="post-comp-title">${item.title}</h4>
        <p class="post-comp-desc">${item.desc}</p>
      </div>
    `).join('');
  }

  // E. Entity Comparison Matrix (Display only for Company Registrations)
  const comparisonSection = document.getElementById('comparisonSection');
  if (comparisonSection) {
    if (data.category === 'registrations') {
      comparisonSection.style.display = 'block';
    } else {
      comparisonSection.style.display = 'none';
    }
  }

  // 8. FAQs Accordion (Expanded)
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

  // 9. Sibling Services Showcase (Explore other offerings in this category)
  renderSiblingServices(data);
}

/**
 * Render Sibling Services Carousel / Grid at bottom of single service page
 */
function renderSiblingServices(currentService) {
  const section = document.getElementById('siblingServicesSection');
  const grid = document.getElementById('siblingGridContainer');
  const tag = document.getElementById('siblingTag');
  const title = document.getElementById('siblingTitle');
  const desc = document.getElementById('siblingDesc');

  if (!section || !grid || typeof MASTER_SERVICES_DATA === 'undefined') return;

  const siblings = Object.values(MASTER_SERVICES_DATA)
    .filter(s => s.category === currentService.category && s.id !== currentService.id)
    .slice(0, 6); // show up to 6 siblings

  if (siblings.length === 0) {
    section.style.display = 'none';
    return;
  }

  section.style.display = 'block';
  if (tag) tag.textContent = `Related in ${currentService.categoryLabel}`;
  if (title) title.textContent = `Explore Other ${currentService.categoryLabel}`;
  if (desc) desc.textContent = `Compare related corporate structures, regulatory compliances, and statutory licenses handled by CA Pradeep Agarwal.`;

  grid.innerHTML = siblings.map(s => {
    const waMsg = encodeURIComponent(`Hello CA Pradeep Agarwal, I would like to inquire about ${s.title}.`);
    return `
      <div class="cat-card">
        <div>
          <div class="cat-card-header">
            <div class="cat-card-icon">${s.icon || '🏢'}</div>
            <div class="cat-card-badges">
              <span class="cat-badge-fastrack">${s.badge ? s.badge.slice(0, 20) : 'CA Supervised'}</span>
              <span class="cat-badge-time">⏱️ ${s.timeline}</span>
            </div>
          </div>
          <h4 class="cat-card-title" style="font-size: 1.1rem;">${s.title}</h4>
          <p class="cat-card-tagline" style="font-size: 0.84rem;">${s.tagline}</p>
        </div>
        <div class="cat-card-footer">
          <a href="service.html?id=${s.id}" class="btn-cat-details" onclick="navigateToService(event, '${s.id}')">
            View Details &rarr;
          </a>
          <a href="https://wa.me/919891495092?text=${waMsg}" target="_blank" class="btn-cat-wa" title="WhatsApp Inquiry" aria-label="WhatsApp Inquiry">
            💬
          </a>
        </div>
      </div>
    `;
  }).join('');
}

/**
 * Handle Service Lead Form submit
 */
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

// Support browser back/forward buttons
window.addEventListener('popstate', () => {
  initServicePageRouter();
});

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  initServicePageRouter();
});
