/**
 * EASY MY TAXES - APPLICATION CONTROLLER & INTERACTION MANAGER
 */

// Master Services Data (2026 Edition)
const servicesCatalog = [
  {
    id: 'itr-salaried',
    category: 'direct-tax',
    icon: '📝',
    title: 'Salaried Individual ITR (AY 2026-27)',
    shortDesc: 'Complete tax return filing for salaried professionals with Single/Multiple Form 16, ESOPs, and allowances.',
    fullDesc: 'Expert CA-assisted ITR filing for Assessment Year 2026-27 tailored to maximize deductions under 80C, 80D, HRA, and home loans with 100% AIS and TIS 2026 reconciliation.',
    price: 'Starting at ₹999',
    deliverables: [
      'AIS & 26AS Tax Credit Matching (AY 2026-27)',
      'Old vs New Regime comparative tax optimization',
      'Deductions verification (80C, 80D, 80CCD, HRA, Sec 24)',
      'Computation Sheet & Official ITR-V E-Verification acknowledgement'
    ],
    documents: ['Form 16 / Form 16A', 'Bank Statements (All accounts)', 'PAN & Aadhaar Card', 'Investment Proofs']
  },
  {
    id: 'itr-capital-gains',
    category: 'direct-tax',
    icon: '📈',
    title: 'Capital Gains & Trading (AY 2026-27)',
    shortDesc: 'Accurate tax computation for Stocks, Mutual Funds, Crypto (VDA), Futures & Options (F&O), and Real Estate.',
    fullDesc: 'Comprehensive calculation of Short-Term (STCG) and Long-Term (LTCG) Capital Gains with set-off and carry forward of business and trading losses across all brokers for FY 2025-26.',
    price: 'Starting at ₹2,499',
    deliverables: [
      'P&L statement consolidation from Zerodha, Groww, Upstox, etc.',
      'Cryptocurrency / VDA 30% tax and 1% TDS audit',
      'Property sale capital gain tax exemption guidance (Sec 54/54EC)',
      'Loss carry forward setup to save tax in future years'
    ],
    documents: ['Broker Tax P&L Statement', 'Property Purchase & Sale Deeds', 'Form 26AS & AIS', 'Dematerialized holding statements']
  },
  {
    id: 'itr-nri',
    category: 'direct-tax',
    icon: '✈️',
    title: 'NRI Taxation & Foreign Assets (2026)',
    shortDesc: 'Specialized cross-border tax advisory, DTAA benefits, Form 15CA/CB, and FEMA compliance for non-residents.',
    fullDesc: 'End-to-end tax filing for Non-Resident Indians (NRIs) with Indian rental income, capital gains, NRE/NRO accounts, and Foreign Bank and Financial Accounts (FBAR) reporting.',
    price: 'Starting at ₹4,999',
    deliverables: [
      'DTAA (Double Tax Avoidance Agreement) credit claims',
      'Form 15CA / 15CB CA certification for funds repatriation',
      'Foreign Asset (Schedule FA) disclosures',
      'TDS lower deduction certificate (Form 13) applications'
    ],
    documents: ['Passport & Visa copies', 'NRE/NRO Bank Statements', 'Tax Residency Certificate (TRC)', 'Indian Income proofs']
  },
  {
    id: 'tax-notices',
    category: 'direct-tax',
    icon: '⚖️',
    title: 'Tax Notice & Scrutiny Resolution',
    shortDesc: 'Professional legal drafting and representation for notices under Section 143(1), 139(9), 148, or 156.',
    fullDesc: 'Handled directly by Senior Chartered Accountant CA Pradeep Agarwal to draft strong technical responses, rectify defective returns, and prevent unnecessary penalties or litigation.',
    price: 'Custom Quote',
    deliverables: [
      'In-depth notice analysis and root cause diagnostic',
      'Drafting legally compliant replies on Income Tax Portal',
      'AIS/TIS mismatch rectification and revision filing',
      'Direct representation before the Assessing Officer (AO)'
    ],
    documents: ['Copy of IT Notice received', 'Original ITR-V & Computation Sheet', 'Supporting vouchers and bank proofs']
  },
  {
    id: 'gst-returns',
    category: 'gst',
    icon: '📑',
    title: 'Monthly & Quarterly GST Returns 2026',
    shortDesc: 'Error-free filing of GSTR-1, GSTR-3B, GSTR-4, and complete 2B Input Tax Credit (ITC) reconciliation.',
    fullDesc: 'Automated 100% invoice matching with GSTR-2B to ensure maximum ITC claim without notices or penalties. Includes e-way bills and e-invoicing support.',
    price: 'Starting at ₹1,499/mo',
    deliverables: [
      'GSTR-1 outward supply filing & GSTR-3B summary returns',
      'Vendor ITC reconciliation & 2B mismatch alerts',
      'E-Way Bill & E-Invoicing advisory',
      'Monthly tax liability computation & challan generation'
    ],
    documents: ['Sales & Purchase Excel Registers', 'Bank Statements', 'GSTR-2B downloads', 'Expense vouchers']
  },
  {
    id: 'gst-reg-refund',
    category: 'gst',
    icon: '🏢',
    title: 'GST Registration & Export Refund',
    shortDesc: 'New GSTIN generation within 3-5 days, LUT for 0% zero-rated exports, and accumulated ITC refund claims.',
    fullDesc: 'Fast-track GST registration for proprietorship, partnership, companies, and ecommerce sellers. Complete documentation for GST refunds on export of services and inverted duty structures.',
    price: 'Starting at ₹1,499',
    deliverables: [
      'GSTIN Certificate issuance from GST department',
      'Letter of Undertaking (LUT) filing for zero-tax exports',
      'Filing Form RFD-01 for GST refund disbursement',
      'Departmental query replies and site verification assistance'
    ],
    documents: ['PAN & Aadhaar of Promoters', 'Electricity Bill / Rent Agreement of Office', 'Cancelled Cheque / Bank Proof']
  },
  {
    id: 'pvt-ltd-incorporation',
    category: 'incorporation',
    icon: '🚀',
    title: 'Company & LLP Incorporation',
    shortDesc: 'Setup Private Limited, LLP, OPC, or Section 8 Company with SPICe+ MCA approval in just 7 days.',
    fullDesc: 'All-inclusive company registration package including Name Approval, DSC, DIN, MOA/AOA drafting, Certificate of Incorporation, PAN, TAN, and Bank Account opening.',
    price: 'Starting at ₹6,999',
    deliverables: [
      '2 Digital Signature Certificates (DSC Class 3)',
      'RUN Name Approval & SPICe+ Form MCA Filing',
      'Certificate of Incorporation (COI) + PAN & TAN',
      'Drafting of Memorandum & Articles of Association (MOA/AOA)'
    ],
    documents: ['PAN & Aadhaar of all Directors', 'Passport Size Photos', 'Registered Office Address Proof (NOC + Utility Bill)']
  },
  {
    id: 'startup-india',
    category: 'incorporation',
    icon: '⭐',
    title: 'Startup India & 80-IAC Tax Exemption',
    shortDesc: 'DPIIT Recognition, Section 80-IAC 3-Year 100% Tax Holiday, and Angel Tax Exemption advisory.',
    fullDesc: 'Get your startup officially certified by DPIIT to unlock 3 consecutive years of zero income tax, government tender relaxations, and intellectual property rebates.',
    price: 'Starting at ₹7,999',
    deliverables: [
      'DPIIT Recognition Certificate application',
      'Form 80-IAC submission with pitch deck alignment',
      'Inter-Ministerial Board (IMB) compliance review',
      'Seed fund scheme & grant eligibility assessment'
    ],
    documents: ['COI & MOA of Company', 'Pitch Deck / Business Plan', 'Website / App Demo Link', 'Financial Projections']
  },
  {
    id: 'virtual-cfo',
    category: 'accounting',
    icon: '📊',
    title: 'Virtual CFO & Accounting Retainer',
    shortDesc: 'Strategic finance leadership, cloud bookkeeping on Zoho/Tally, monthly MIS, and cash flow governance.',
    fullDesc: 'Get senior CA financial direction without the cost of a full-time CFO. We manage your daily books, payroll, statutory deductions, investor reporting, and financial forecasting.',
    price: 'Starting at ₹9,999/mo',
    deliverables: [
      'Daily/Weekly Bookkeeping on Zoho Books / Tally Prime / QuickBooks',
      'Monthly Executive MIS & Cash Flow Burn Rate reports',
      'Payroll processing with PF, ESIC & Professional Tax compliance',
      'Investor metrics, Unit Economics & Budgeting models'
    ],
    documents: ['Bank & Payment Gateway statements', 'Invoices & Bills', 'Employee Salary structures']
  },
  {
    id: 'tax-statutory-audit',
    category: 'audit',
    icon: '🔍',
    title: 'Statutory & Tax Audit (Sec 44AB)',
    shortDesc: 'Independent assurance, Form 3CA/3CD compliance, internal controls review, and balance sheet certification.',
    fullDesc: 'Expert audit services conducted in strict adherence to ICAI Standards on Auditing (SAs) and Companies Act provisions, ensuring transparent financials for banks, investors, and regulators.',
    price: 'Custom Quote',
    deliverables: [
      'Tax Audit Report in Form 3CA/3CB and Form 3CD',
      'Statutory Financial Statements with Notes to Accounts',
      'Internal Financial Controls (IFC) evaluation',
      'UDIN-generated authentic CA certification'
    ],
    documents: ['Trial Balance & Ledgers', 'Fixed Asset Register', 'Bank Confirmations', 'Statutory registers']
  },
  {
    id: 'trademark-ipr',
    category: 'registrations',
    icon: '🛡️',
    title: 'Trademark & Brand Protection',
    shortDesc: 'Fast-track trademark search, class identification, TM-A filing, and objection handling.',
    fullDesc: 'Protect your brand name, logo, and slogan from competitors with comprehensive trademark search and registration before the Controller General of Patents, Designs and Trade Marks.',
    price: 'Starting at ₹2,999 + Govt Fees',
    deliverables: [
      'Comprehensive Trademark Conflict & Distinctiveness Search',
      'Application Filing (Form TM-A) for ™ symbol usage within 24 hrs',
      'Drafting reply to Trademark Examination Objections',
      'Tracking application status until Certificate of Registration (®)'
    ],
    documents: ['Logo / Brand Name image', 'Applicant Identity Proof', 'User Affidavit for prior usage (if applicable)']
  },
  {
    id: 'msme-udyam',
    category: 'registrations',
    icon: '🏷️',
    title: 'MSME / Udyam & Import Export Code (IEC)',
    shortDesc: 'Udyam Registration for collateral-free bank loans, priority subsidies, and DGFT IEC for global trading.',
    fullDesc: 'Instant government registration for micro, small, and medium enterprises to avail priority bank lending, lower interest rates, 50% trademark fee discount, and export licenses.',
    price: 'Starting at ₹1,199',
    deliverables: [
      'Udyam Registration Certificate with QR Code',
      'IEC Certificate from DGFT for international trade',
      'Advisory on Credit Linked Capital Subsidy (CLCSS)',
      'Samadhaan portal guidance for delayed client payments'
    ],
    documents: ['Aadhaar of Business Owner', 'PAN Card of Entity', 'Bank Account details', 'NIC Code selection']
  }
];

// Document Checklist Data
const checklistData = {
  salaried: {
    title: 'Salaried Individual ITR Checklist (ITR-1 / ITR-2)',
    desc: 'Keep these documents ready for a seamless 15-minute tax filing session:',
    items: [
      { name: 'Form 16 (Part A & Part B)', note: 'Issued by your employer showing total salary and TDS deducted.' },
      { name: 'PAN & Aadhaar Card', note: 'Ensure Aadhaar is linked with PAN on the IT portal.' },
      { name: 'Bank Account Statements', note: 'All active bank accounts with interest certificate (Savings & FDs).' },
      { name: 'Section 80C Investment Proofs', note: 'EPF, PPF, ELSS mutual funds, Life Insurance, School Tuition fees.' },
      { name: 'Section 80D Medical Insurance', note: 'Health insurance receipts for self, spouse, children, and parents.' },
      { name: 'HRA Rent Receipts / Agreement', note: 'Landlord PAN required if annual rent exceeds ₹1,00,000.' },
      { name: 'Home Loan Interest Certificate', note: 'Section 24(b) interest & principal repayment certificate.' },
      { name: 'Annual Information Statement (AIS / TIS)', note: 'Can also be fetched directly by our CAs during filing.' }
    ]
  },
  capitalGains: {
    title: 'Capital Gains & Trading Tax Checklist',
    desc: 'Documents needed for Stocks, Crypto, Mutual Funds & Property:',
    items: [
      { name: 'Consolidated Tax P&L Statement', note: 'From Zerodha, Groww, AngelOne, Upstox, etc. for the financial year.' },
      { name: 'Mutual Fund Capital Gain Statement', note: 'From CAMS or KFintech showing LTCG and STCG.' },
      { name: 'Cryptocurrency / VDA P&L Report', note: 'Transaction register from WazirX, CoinDCX, Binance, etc.' },
      { name: 'Property Purchase & Sale Deed', note: 'For real estate capital gain calculation and indexation.' },
      { name: 'Home Improvement Expenses Proofs', note: 'Invoices for renovation to deduct from capital gains.' },
      { name: '54EC Capital Gain Bond Receipts', note: 'Proof of investment in REC / NHAI bonds to claim exemption.' }
    ]
  },
  gstReg: {
    title: 'New GST Registration Checklist',
    desc: 'Documents required for instant GSTIN approval by the department:',
    items: [
      { name: 'PAN Card & Aadhaar of Authorized Signatory', note: 'Clear scanned color copy.' },
      { name: 'Passport Size Photograph', note: 'Of proprietor, partners, or directors.' },
      { name: 'Proof of Business Address', note: 'Electricity bill, Property Tax receipt, or Municipal Khata copy.' },
      { name: 'Rent Agreement & Landlord NOC', note: 'If business premise is rented.' },
      { name: 'Bank Account Proof', note: 'Cancelled cheque or first page of bank statement with IFSC & Name.' },
      { name: 'Partnership Deed / COI & MOA', note: 'In case of Partnership, LLP, or Private Limited Company.' }
    ]
  },
  incorporation: {
    title: 'Private Limited Company Incorporation Checklist',
    desc: 'Requirements for SPICe+ MCA filing and DSC issuance:',
    items: [
      { name: 'PAN & Aadhaar of Minimum 2 Directors', note: 'Identity and address proof.' },
      { name: 'Voter ID / Driving License / Passport', note: 'Secondary identity document for KYC.' },
      { name: 'Bank Statement / Utility Bill of Directors', note: 'Not older than 2 months for address proof.' },
      { name: 'Registered Office Address Proof', note: 'Electricity bill not older than 2 months.' },
      { name: 'No Objection Certificate (NOC)', note: 'From owner of registered property.' },
      { name: 'Proposed Company Names (Up to 2)', note: 'Unique name reflecting your business activity.' }
    ]
  },
  nri: {
    title: 'NRI Taxation & Repatriation (15CA/CB) Checklist',
    desc: 'Documents for cross-border income and Indian asset sales:',
    items: [
      { name: 'Passport & Visa Copy', note: 'With entry/exit stamps proving non-resident status.' },
      { name: 'Tax Residency Certificate (TRC)', note: 'From foreign country to claim DTAA tax relief.' },
      { name: 'NRE and NRO Bank Statements', note: 'Complete transaction history for the fiscal year.' },
      { name: 'Form 15CB CA Certificate & Form 15CA', note: 'For remitting funds outside India.' },
      { name: 'Agreement for Sale of Indian Property', note: 'With TDS certificate (Form 16B) under Section 195.' }
    ]
  }
};

// --------------------------------------------------------------------------
// INITIALIZATION & EVENT HANDLERS
// --------------------------------------------------------------------------

document.addEventListener('DOMContentLoaded', () => {
  initStickyHeader();
  initMobileNav();
  initServiceGrid('all');
  initServiceFilters();
  initChecklist('salaried');
  initChecklistSelector();
  initStatsCounter();
  initFaqAccordion();
  initHeroQuickFinder();
  initCalcTabs();
});

// Sticky Header
function initStickyHeader() {
  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  });
}

// Mobile Nav
function initMobileNav() {
  const toggleBtn = document.getElementById('mobileNavToggle');
  const closeBtn = document.getElementById('mobileNavClose');
  const overlay = document.getElementById('mobileNavOverlay');
  const drawer = document.getElementById('mobileNavDrawer');
  const drawerLinks = document.querySelectorAll('.mobile-drawer-link');

  function openNav() {
    overlay?.classList.add('active');
    drawer?.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeNav() {
    overlay?.classList.remove('active');
    drawer?.classList.remove('active');
    document.body.style.overflow = '';
  }

  toggleBtn?.addEventListener('click', openNav);
  closeBtn?.addEventListener('click', closeNav);
  overlay?.addEventListener('click', closeNav);
  drawerLinks.forEach(l => l.addEventListener('click', closeNav));
}

// Render Service Grid
function initServiceGrid(filter = 'all') {
  const container = document.getElementById('servicesGridContainer');
  if (!container) return;

  const filtered = filter === 'all'
    ? servicesCatalog
    : servicesCatalog.filter(s => s.category === filter);

  container.innerHTML = filtered.map(s => `
    <div class="service-card" data-category="${s.category}">
      <div>
        <div class="service-icon-box">${s.icon}</div>
        <h3 class="service-card-title">${s.title}</h3>
        <p class="service-card-desc">${s.shortDesc}</p>
        <div class="service-highlights">
          ${s.deliverables.slice(0, 2).map(d => `
            <div class="highlight-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span>${d}</span>
            </div>
          `).join('')}
        </div>
      </div>
      <div class="service-card-footer">
        <div class="service-price">
          <span>Fee:</span><br>
          <strong>${s.price}</strong>
        </div>
        <button class="service-action-btn" onclick="openServiceDetailModal('${s.id}')">
          View Details &rarr;
        </button>
      </div>
    </div>
  `).join('');
}

// Service Filter Tabs
function initServiceFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.getAttribute('data-filter') || 'all';
      initServiceGrid(cat);
    });
  });
}

// Service Detail Modal
function openServiceDetailModal(serviceId) {
  const service = servicesCatalog.find(s => s.id === serviceId);
  if (!service) return;

  const modal = document.getElementById('serviceDetailModal');
  const title = document.getElementById('serviceModalTitle');
  const body = document.getElementById('serviceModalBody');

  if (title) title.textContent = `${service.icon} ${service.title}`;
  if (body) {
    body.innerHTML = `
      <p style="font-size: 1rem; color: var(--text-muted); line-height: 1.65; margin-bottom: 1.5rem;">
        ${service.fullDesc}
      </p>

      <div class="service-modal-section">
        <h4>📋 Key Deliverables &amp; Inclusions</h4>
        <ul class="service-modal-bullets">
          ${service.deliverables.map(d => `
            <li>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span>${d}</span>
            </li>
          `).join('')}
        </ul>
      </div>

      <div class="service-modal-section">
        <h4>📁 Required Documents</h4>
        <ul class="service-modal-bullets">
          ${service.documents.map(doc => `
            <li>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
              </svg>
              <span>${doc}</span>
            </li>
          `).join('')}
        </ul>
      </div>

      <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem; padding-top: 1.5rem; border-top: 1px solid var(--surface-200); margin-top: 1.5rem;">
        <div>
          <span style="font-size: 0.8125rem; color: var(--text-subtle);">Professional Advisory Fee</span>
          <div style="font-size: 1.35rem; font-weight: 800; color: var(--primary-900);">${service.price}</div>
        </div>
        <div style="display: flex; gap: 0.75rem;">
          <button class="btn btn-whatsapp" onclick="openWhatsAppInquiry('${service.title}')">
            Chat on WhatsApp
          </button>
          <button class="btn btn-primary" onclick="closeServiceModal(); openConsultationModal('${service.title}')">
            Book Consultation
          </button>
        </div>
      </div>
    `;
  }

  modal?.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeServiceModal() {
  const modal = document.getElementById('serviceDetailModal');
  modal?.classList.remove('active');
  document.body.style.overflow = '';
}

// Document Checklist Logic
function initChecklist(type = 'salaried') {
  const data = checklistData[type];
  const container = document.getElementById('checklistContainer');
  if (!container || !data) return;

  container.innerHTML = `
    <div class="checklist-results-card">
      <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 1rem;">
        <div>
          <h4 style="font-size: 1.25rem; font-weight: 800; color: var(--primary-900); margin-bottom: 0.25rem;">
            ${data.title}
          </h4>
          <p style="font-size: 0.875rem; color: var(--text-muted);">${data.desc}</p>
        </div>
        <button class="btn btn-sm btn-outline" onclick="window.print()">
          🖨️ Print Checklist
        </button>
      </div>

      <div class="checklist-items-grid">
        ${data.items.map((item, index) => `
          <label class="checklist-doc-item" for="chk-${type}-${index}">
            <input type="checkbox" id="chk-${type}-${index}" class="doc-checkbox">
            <div class="doc-info">
              <h5>${item.name}</h5>
              <p>${item.note}</p>
            </div>
          </label>
        `).join('')}
      </div>

      <div style="margin-top: 1.75rem; padding-top: 1.25rem; border-top: 1px solid var(--surface-200); display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem;">
        <span style="font-size: 0.875rem; color: var(--text-subtle);">
          Have your documents ready? Hand them over safely to our certified CAs.
        </span>
        <button class="btn btn-primary" onclick="openConsultationModal('${data.title}')">
          Start My Tax Filing Now &rarr;
        </button>
      </div>
    </div>
  `;
}

function initChecklistSelector() {
  const btns = document.querySelectorAll('.checklist-btn');
  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const type = btn.getAttribute('data-type') || 'salaried';
      initChecklist(type);
    });
  });
}

// Consultation Modal
function openConsultationModal(prefilledService = '') {
  const modal = document.getElementById('consultationModal');
  const serviceInput = document.getElementById('consultationService');
  if (serviceInput && prefilledService) {
    serviceInput.value = prefilledService;
  }
  modal?.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeConsultationModal() {
  const modal = document.getElementById('consultationModal');
  modal?.classList.remove('active');
  document.body.style.overflow = '';
}

// Handle Consultation Booking Form Submission
function handleConsultationSubmit(e) {
  e.preventDefault();
  const name = document.getElementById('cName')?.value;
  const phone = document.getElementById('cPhone')?.value;
  const email = document.getElementById('cEmail')?.value;
  const service = document.getElementById('consultationService')?.value;
  const notes = document.getElementById('cNotes')?.value;

  // Show Toast Success
  showToast(`Thank you, ${name}! Your consultation request for "${service}" has been received. Our CA team will call you within 2 business hours.`);
  
  // Close Modal
  closeConsultationModal();

  // Reset form
  const form = document.getElementById('consultationForm');
  if (form) form.reset();
}

// WhatsApp Direct Connect
function openWhatsAppInquiry(serviceName = 'General CA Consultation') {
  const phone = "919891495092"; // Official CA Pradeep Agarwal Advisory Helpline
  const message = encodeURIComponent(`Hi CA Pradeep Agarwal / Easy My Taxes team, I would like to consult regarding: ${serviceName}. Please share the process and fee details.`);
  window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
}

// Calculator Tab Navigation
function initCalcTabs() {
  const tabs = document.querySelectorAll('.calc-tab-btn');
  const panes = document.querySelectorAll('.calc-pane');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetId = tab.getAttribute('data-target');
      tabs.forEach(t => t.classList.remove('active'));
      panes.forEach(p => p.classList.remove('active'));

      tab.classList.add('active');
      const targetPane = document.getElementById(targetId);
      if (targetPane) targetPane.classList.add('active');
    });
  });
}

// Hero Quick Finder Action
function initHeroQuickFinder() {
  const form = document.getElementById('heroQuickForm');
  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    const serviceType = document.getElementById('heroServiceSelect')?.value;
    const clientType = document.getElementById('heroClientType')?.value;
    openConsultationModal(`${serviceType} (${clientType})`);
  });
}

// FAQ Accordion
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const header = item.querySelector('.faq-header');
    header?.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      faqItems.forEach(i => i.classList.remove('open'));
      if (!isOpen) {
        item.classList.add('open');
      }
    });
  });
}

// Animated Counter
function initStatsCounter() {
  const counters = document.querySelectorAll('.stat-num[data-target]');
  let started = false;

  function countUp() {
    counters.forEach(counter => {
      const target = +counter.getAttribute('data-target');
      const prefix = counter.getAttribute('data-prefix') || '';
      const suffix = counter.getAttribute('data-suffix') || '';
      const count = +counter.innerText.replace(/[^0-9.]/g, '') || 0;
      const speed = 200;
      const inc = target / speed;

      if (count < target) {
        counter.innerText = prefix + Math.ceil(count + inc).toLocaleString('en-IN') + suffix;
        setTimeout(countUp, 15);
      } else {
        counter.innerText = prefix + target.toLocaleString('en-IN') + suffix;
      }
    });
  }

  window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero-section');
    if (hero && !started && window.scrollY < hero.offsetHeight) {
      countUp();
      started = true;
    }
  });

  // Trigger once on load
  setTimeout(() => {
    if (!started) {
      countUp();
      started = true;
    }
  }, 400);
}

// Toast Notice Helper
function showToast(message) {
  let toast = document.getElementById('toastNotice');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toastNotice';
    toast.className = 'toast-notice';
    document.body.appendChild(toast);
  }
  toast.innerHTML = `
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
      <polyline points="22 4 12 14.01 9 11.01"></polyline>
    </svg>
    <span>${message}</span>
  `;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 4500);
}
