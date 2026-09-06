/**
 * EASY MY TAXES - FINANCIAL & TAX COMPUTATION ENGINES (AY 2026-27 & FY 2025-26 / 2026-27)
 * Compliant with Indian Income Tax Act Provisions, GST & ICAI Standards
 */

// Helper to format currency in Indian Rupees
function formatINR(amount) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(Math.round(amount || 0));
}

// --------------------------------------------------------------------------
// 1. OLD VS NEW TAX REGIME CALCULATOR (AY 2026-27 / FY 2025-26)
// --------------------------------------------------------------------------

let currentTaxState = {
  grossSalary: 1250000,
  otherIncome: 50000,
  totalNewTax: 0,
  totalOldTax: 0,
  diff: 0,
  winner: 'new',
  newNetTaxable: 0,
  oldNetTaxable: 0
};

function calculateTax() {
  const grossSalary = parseFloat(document.getElementById('calcGrossSalary')?.value) || 0;
  const otherIncome = parseFloat(document.getElementById('calcOtherIncome')?.value) || 0;
  const deduction80C = Math.min(parseFloat(document.getElementById('calc80C')?.value) || 0, 150000);
  const deduction80D = parseFloat(document.getElementById('calc80D')?.value) || 0;
  const deductionNPS = Math.min(parseFloat(document.getElementById('calcNPS')?.value) || 0, 50000);
  const deductionHomeLoan = Math.min(parseFloat(document.getElementById('calcHomeLoan')?.value) || 0, 200000);
  const deductionHRA = parseFloat(document.getElementById('calcHRA')?.value) || 0;
  const otherDeductions = parseFloat(document.getElementById('calcOtherDeductions')?.value) || 0;

  const totalIncome = grossSalary + otherIncome;

  // --- NEW REGIME COMPUTATION (AY 2026-27) ---
  // Standard Deduction in New Regime = ₹75,000 for salaried
  const newStdDeduction = grossSalary > 0 ? 75000 : 0;
  const newNetTaxable = Math.max(0, totalIncome - newStdDeduction);

  let newTaxBeforeRebate = 0;
  let slabMath = [];

  if (newNetTaxable > 1500000) {
    newTaxBeforeRebate = 150000 + (newNetTaxable - 1500000) * 0.30;
    slabMath.push({ slab: '₹15L+', rate: '30%', amount: (newNetTaxable - 1500000) * 0.30 });
    slabMath.push({ slab: '₹12L - ₹15L', rate: '20%', amount: 60000 });
    slabMath.push({ slab: '₹10L - ₹12L', rate: '15%', amount: 30000 });
    slabMath.push({ slab: '₹7L - ₹10L', rate: '10%', amount: 30000 });
    slabMath.push({ slab: '₹3L - ₹7L', rate: '5%', amount: 20000 });
  } else if (newNetTaxable > 1200000) {
    newTaxBeforeRebate = 90000 + (newNetTaxable - 1200000) * 0.20;
    slabMath.push({ slab: '₹12L - ₹15L', rate: '20%', amount: (newNetTaxable - 1200000) * 0.20 });
    slabMath.push({ slab: '₹10L - ₹12L', rate: '15%', amount: 30000 });
    slabMath.push({ slab: '₹7L - ₹10L', rate: '10%', amount: 30000 });
    slabMath.push({ slab: '₹3L - ₹7L', rate: '5%', amount: 20000 });
  } else if (newNetTaxable > 1000000) {
    newTaxBeforeRebate = 60000 + (newNetTaxable - 1000000) * 0.15;
    slabMath.push({ slab: '₹10L - ₹12L', rate: '15%', amount: (newNetTaxable - 1000000) * 0.15 });
    slabMath.push({ slab: '₹7L - ₹10L', rate: '10%', amount: 30000 });
    slabMath.push({ slab: '₹3L - ₹7L', rate: '5%', amount: 20000 });
  } else if (newNetTaxable > 700000) {
    newTaxBeforeRebate = 20000 + (newNetTaxable - 700000) * 0.10;
    slabMath.push({ slab: '₹7L - ₹10L', rate: '10%', amount: (newNetTaxable - 700000) * 0.10 });
    slabMath.push({ slab: '₹3L - ₹7L', rate: '5%', amount: 20000 });
  } else if (newNetTaxable > 300000) {
    newTaxBeforeRebate = (newNetTaxable - 300000) * 0.05;
    slabMath.push({ slab: '₹3L - ₹7L', rate: '5%', amount: (newNetTaxable - 300000) * 0.05 });
  } else {
    newTaxBeforeRebate = 0;
  }

  // Section 87A Rebate in New Regime (Taxable income up to ₹7,00,000 has zero net tax)
  let newTaxAfterRebate = newTaxBeforeRebate;
  let newRebateApplied = 0;
  if (newNetTaxable <= 700000 && newTaxBeforeRebate > 0) {
    newRebateApplied = newTaxBeforeRebate;
    newTaxAfterRebate = 0;
  }

  // 4% Health & Education Cess
  const newCess = newTaxAfterRebate * 0.04;
  const totalNewTax = Math.round(newTaxAfterRebate + newCess);

  // --- OLD REGIME COMPUTATION ---
  const oldStdDeduction = grossSalary > 0 ? 50000 : 0;
  const totalOldDeductions = oldStdDeduction + deduction80C + deduction80D + deductionNPS + deductionHomeLoan + deductionHRA + otherDeductions;
  const oldNetTaxable = Math.max(0, totalIncome - totalOldDeductions);

  let oldTaxBeforeRebate = 0;
  if (oldNetTaxable > 1000000) {
    oldTaxBeforeRebate = 112500 + (oldNetTaxable - 1000000) * 0.30;
  } else if (oldNetTaxable > 500000) {
    oldTaxBeforeRebate = 12500 + (oldNetTaxable - 500000) * 0.20;
  } else if (oldNetTaxable > 250000) {
    oldTaxBeforeRebate = (oldNetTaxable - 250000) * 0.05;
  } else {
    oldTaxBeforeRebate = 0;
  }

  let oldTaxAfterRebate = oldTaxBeforeRebate;
  if (oldNetTaxable <= 500000) {
    oldTaxAfterRebate = 0;
  }

  const oldCess = oldTaxAfterRebate * 0.04;
  const totalOldTax = Math.round(oldTaxAfterRebate + oldCess);

  const winningTax = Math.min(totalNewTax, totalOldTax);
  const taxDiff = Math.abs(totalOldTax - totalNewTax);
  const monthlyTakeHome = Math.max(0, Math.round((totalIncome - winningTax) / 12));
  const monthlySavings = Math.round(taxDiff / 12);

  // Store state for WhatsApp export
  currentTaxState = {
    grossSalary,
    otherIncome,
    totalNewTax,
    totalOldTax,
    diff: taxDiff,
    winner: totalNewTax <= totalOldTax ? 'New Tax Regime' : 'Old Tax Regime',
    newNetTaxable,
    oldNetTaxable
  };

  // --- UPDATE UI RESULTS ---
  const elNewTax = document.getElementById('resNewTax');
  const elOldTax = document.getElementById('resOldTax');
  const elCardNew = document.getElementById('cardNewRegime');
  const elCardOld = document.getElementById('cardOldRegime');
  const elBannerTitle = document.getElementById('recBannerTitle');
  const elBannerDesc = document.getElementById('recBannerDesc');

  if (elNewTax) elNewTax.textContent = formatINR(totalNewTax);
  if (elOldTax) elOldTax.textContent = formatINR(totalOldTax);

  // Monthly Take-Home update
  const elTakeHomeVal = document.getElementById('resTakeHomeMonthly');
  const elTakeHomeSavings = document.getElementById('resTakeHomeSavings');
  if (elTakeHomeVal) elTakeHomeVal.textContent = `${formatINR(monthlyTakeHome)} / mo`;
  if (elTakeHomeSavings) {
    elTakeHomeSavings.textContent = taxDiff > 0 ? `Saving +${formatINR(monthlySavings)} / mo` : `Equal monthly tax`;
  }

  // Visual Comparison Bars update
  const barNewVal = document.getElementById('barNewTaxVal');
  const barOldVal = document.getElementById('barOldTaxVal');
  const barNewFill = document.getElementById('barNewTaxFill');
  const barOldFill = document.getElementById('barOldTaxFill');

  if (barNewVal) barNewVal.textContent = formatINR(totalNewTax);
  if (barOldVal) barOldVal.textContent = formatINR(totalOldTax);

  if (barNewFill && barOldFill) {
    const maxTax = Math.max(totalNewTax, totalOldTax, 1000);
    const newPct = Math.max(4, Math.round((totalNewTax / maxTax) * 100));
    const oldPct = Math.max(4, Math.round((totalOldTax / maxTax) * 100));
    barNewFill.style.width = `${newPct}%`;
    barOldFill.style.width = `${oldPct}%`;
  }

  // Table Breakdowns
  const elNewTaxable = document.getElementById('resNewTaxable');
  const elOldTaxable = document.getElementById('resOldTaxable');
  const elNewDed = document.getElementById('resNewDed');
  const elOldDed = document.getElementById('resOldDed');

  if (elNewTaxable) elNewTaxable.textContent = formatINR(newNetTaxable);
  if (elOldTaxable) elOldTaxable.textContent = formatINR(oldNetTaxable);
  if (elNewDed) elNewDed.textContent = formatINR(newStdDeduction);
  if (elOldDed) elOldDed.textContent = formatINR(totalOldDeductions);

  // Recommendation Banner
  if (totalNewTax < totalOldTax) {
    elCardNew?.classList.add('winner');
    elCardOld?.classList.remove('winner');
    if (elBannerTitle) elBannerTitle.textContent = `🎉 New Tax Regime (AY 2026-27) is best for you!`;
    if (elBannerDesc) elBannerDesc.textContent = `You save ${formatINR(taxDiff)} in taxes under the revised New Regime with ₹75k Standard Deduction.`;
  } else if (totalOldTax < totalNewTax) {
    elCardOld?.classList.add('winner');
    elCardNew?.classList.remove('winner');
    if (elBannerTitle) elBannerTitle.textContent = `🎉 Old Tax Regime is best for you!`;
    if (elBannerDesc) elBannerDesc.textContent = `Due to substantial deductions, you save ${formatINR(taxDiff)} in taxes under the Old Regime.`;
  } else {
    elCardNew?.classList.remove('winner');
    elCardOld?.classList.remove('winner');
    if (elBannerTitle) elBannerTitle.textContent = `⚖️ Both Regimes result in equal tax liability`;
    if (elBannerDesc) elBannerDesc.textContent = `Your tax liability is identical in both options (${formatINR(totalNewTax)}).`;
  }

  // Render Detailed Slab Computation
  const slabBody = document.getElementById('slabAccordionBody');
  if (slabBody) {
    slabBody.innerHTML = `
      <table style="width: 100%; border-collapse: collapse; margin-top: 0.25rem;">
        <tr style="border-bottom: 1px solid var(--surface-200); font-weight: 700; color: var(--text-subtle);">
          <th style="text-align: left; padding: 0.35rem 0;">Slab Range</th>
          <th style="text-align: center; padding: 0.35rem 0;">Rate</th>
          <th style="text-align: right; padding: 0.35rem 0;">Tax Computed</th>
        </tr>
        <tr><td>₹0 to ₹3,00,000</td><td style="text-align: center;">Nil</td><td style="text-align: right;">₹0</td></tr>
        ${slabMath.reverse().map(s => `
          <tr><td>${s.slab}</td><td style="text-align: center;">${s.rate}</td><td style="text-align: right;">${formatINR(s.amount)}</td></tr>
        `).join('')}
        ${newStdDeduction > 0 ? `<tr style="color: var(--emerald-700); font-weight: 600;"><td>Less: Std. Deduction</td><td style="text-align: center;">Flat</td><td style="text-align: right;">-₹75,000</td></tr>` : ''}
        ${newRebateApplied > 0 ? `<tr style="color: var(--emerald-700); font-weight: 600;"><td>Less: Rebate u/s 87A</td><td style="text-align: center;">100%</td><td style="text-align: right;">-${formatINR(newRebateApplied)}</td></tr>` : ''}
        <tr><td>Add: 4% Health &amp; Education Cess</td><td style="text-align: center;">4%</td><td style="text-align: right;">+${formatINR(newCess)}</td></tr>
        <tr style="font-weight: 800; border-top: 1.5px solid var(--surface-300); color: var(--primary-950);">
          <td>Net Total Tax Payable</td><td></td><td style="text-align: right; color: var(--emerald-600);">${formatINR(totalNewTax)}</td>
        </tr>
      </table>
    `;
  }

  // Update slider if not currently dragging
  const slider = document.getElementById('calcGrossSalarySlider');
  if (slider && document.activeElement !== slider) {
    slider.value = grossSalary;
  }

  // Also update advance tax if present
  calculateAdvanceTax(Math.min(totalNewTax, totalOldTax));
}

// Preset Salary Chip Click Handler
function setSalaryPreset(amount, btnElement) {
  const salaryInput = document.getElementById('calcGrossSalary');
  if (salaryInput) {
    salaryInput.value = amount;
    calculateTax();
  }

  document.querySelectorAll('.preset-chip').forEach(chip => chip.classList.remove('active'));
  if (btnElement) {
    btnElement.classList.add('active');
  }
}

// WhatsApp Calculation Bridge
function sendTaxSummaryToWhatsApp() {
  const phone = "919891495092";
  const { grossSalary, totalNewTax, totalOldTax, diff, winner } = currentTaxState;
  
  const text = `Hi CA Pradeep Agarwal & Easy My Taxes team,%0A%0A*AY 2026-27 Tax Calculation Summary:*%0A• Gross Annual Salary: ${formatINR(grossSalary)}%0A• New Regime Tax: ${formatINR(totalNewTax)}%0A• Old Regime Tax: ${formatINR(totalOldTax)}%0A• Recommended Choice: *${winner}*%0A• Estimated Tax Saved: *${formatINR(diff)}*%0A%0APlease review my Form 16 / investment proofs and help me optimize and file my return.`;
  
  window.open(`https://wa.me/${phone}?text=${text}`, '_blank');
}

// --------------------------------------------------------------------------
// 2. ADVANCE TAX SCHEDULE ENGINE (FY 2026-27)
// --------------------------------------------------------------------------

function calculateAdvanceTax(estimatedAnnualTax) {
  const baseTax = estimatedAnnualTax !== undefined 
    ? estimatedAnnualTax 
    : (parseFloat(document.getElementById('advTaxAnnualAmount')?.value) || 120000);

  const q1 = Math.round(baseTax * 0.15);
  const q2 = Math.round(baseTax * 0.45);
  const q3 = Math.round(baseTax * 0.75);
  const q4 = baseTax;

  const q1Payable = q1;
  const q2Payable = Math.max(0, q2 - q1);
  const q3Payable = Math.max(0, q3 - q2);
  const q4Payable = Math.max(0, q4 - q3);

  const elQ1 = document.getElementById('advResQ1');
  const elQ2 = document.getElementById('advResQ2');
  const elQ3 = document.getElementById('advResQ3');
  const elQ4 = document.getElementById('advResQ4');

  if (elQ1) elQ1.innerHTML = `${formatINR(q1)} <span style="display:block; font-size: 0.72rem; color: var(--emerald-600); font-weight: 700;">Pay: ${formatINR(q1Payable)}</span>`;
  if (elQ2) elQ2.innerHTML = `${formatINR(q2)} <span style="display:block; font-size: 0.72rem; color: var(--emerald-600); font-weight: 700;">Pay: ${formatINR(q2Payable)}</span>`;
  if (elQ3) elQ3.innerHTML = `${formatINR(q3)} <span style="display:block; font-size: 0.72rem; color: var(--emerald-600); font-weight: 700;">Pay: ${formatINR(q3Payable)}</span>`;
  if (elQ4) elQ4.innerHTML = `${formatINR(q4)} <span style="display:block; font-size: 0.72rem; color: var(--emerald-600); font-weight: 700;">Pay: ${formatINR(q4Payable)}</span>`;

  const slider = document.getElementById('advTaxAnnualAmountSlider');
  if (slider && document.activeElement !== slider) {
    slider.value = baseTax;
  }
}

// --------------------------------------------------------------------------
// 3. FREELANCER / SECTION 44ADA PRESUMPTIVE TAX CALCULATOR
// --------------------------------------------------------------------------

function calculate44ADA() {
  const grossReceipts = parseFloat(document.getElementById('adaGrossReceipts')?.value) || 0;
  const actualExpenses = parseFloat(document.getElementById('adaActualExpenses')?.value) || 0;

  // Sec 44ADA: 50% of gross receipts is presumed as profit
  const presumptiveProfit = grossReceipts * 0.50;
  const actualProfit = Math.max(0, grossReceipts - actualExpenses);

  // Compute tax on 44ADA profit vs Actual Profit under New Regime
  function computeQuickTax(taxable) {
    let t = 0;
    if (taxable > 1500000) t = 150000 + (taxable - 1500000) * 0.30;
    else if (taxable > 1200000) t = 90000 + (taxable - 1200000) * 0.20;
    else if (taxable > 1000000) t = 60000 + (taxable - 1000000) * 0.15;
    else if (taxable > 700000) t = 20000 + (taxable - 700000) * 0.10;
    else if (taxable > 300000) t = (taxable - 300000) * 0.05;
    if (taxable <= 700000) t = 0;
    return Math.round(t * 1.04);
  }

  const tax44ADA = computeQuickTax(presumptiveProfit);
  const taxActual = computeQuickTax(actualProfit);
  const savings = Math.max(0, taxActual - tax44ADA);

  const elProfitADA = document.getElementById('adaResProfitADA');
  const elProfitActual = document.getElementById('adaResProfitActual');
  const elTaxADA = document.getElementById('adaResTaxADA');
  const elTaxActual = document.getElementById('adaResTaxActual');
  const elSavings = document.getElementById('adaResSavings');

  if (elProfitADA) elProfitADA.textContent = formatINR(presumptiveProfit);
  if (elProfitActual) elProfitActual.textContent = formatINR(actualProfit);
  if (elTaxADA) elTaxADA.textContent = formatINR(tax44ADA);
  if (elTaxActual) elTaxActual.textContent = formatINR(taxActual);
  if (elSavings) elSavings.textContent = formatINR(savings);
}

// --------------------------------------------------------------------------
// 4. NOTICE DIAGNOSTIC & RISK SCANNER WITH 4-STEP RESOLUTION ROADMAP
// --------------------------------------------------------------------------

const noticeDatabase = {
  '143_1': {
    name: 'Section 143(1) - Intimation of Tax Demand or Mismatch',
    risk: 'MODERATE RISK',
    badgeClass: 'medium',
    icon: '⚠️',
    analysis: 'Intimation received regarding mismatch between reported income/TDS in ITR and 26AS/AIS records, resulting in an automated demand or reduced refund.',
    advice: 'Submit online response on IT Portal, verify AIS mismatch, and file Section 154 Rectification or revise ITR.',
    roadmap: [
      { title: 'AIS & 26AS Trace', desc: 'Perform deep line-by-line reconciliation of employer TDS, bank interest & AIS data.' },
      { title: 'Mismatch Identification', desc: 'Pinpoint exact difference between portal calculations and your filed computation.' },
      { title: 'Draft Technical Rejoinder', desc: 'Draft legal response with TDS certificates and bank reconciliation.' },
      { title: 'Rectification u/s 154', desc: 'Submit electronic rectification to wipe off illegitimate demand.' }
    ]
  },
  '143_1_a': {
    name: 'Section 143(1)(a) - Proposed Adjustment Notice',
    risk: 'HIGH ATTENTION',
    badgeClass: 'high',
    icon: '⚡',
    analysis: 'Automated notification proposing disallowance of Chapter VI-A deductions, late filing loss carry-forward, or 80-IAC claims. 30-day response window.',
    advice: 'File objection under e-Proceedings portal with documentary evidence before department issues final demand order.',
    roadmap: [
      { title: 'Notice Clause Breakdown', desc: 'Analyze exact variance claimed by Centralized Processing Center (CPC).' },
      { title: 'Document Collation', desc: 'Compile investment receipts, Form 10-IEA proof, and audit reports.' },
      { title: 'Online Objection Filing', desc: 'Submit disagreement rejoinder under e-Proceedings portal.' },
      { title: 'Demand Neutralization', desc: 'Ensure CPC accepts explanation without generating tax liability.' }
    ]
  },
  '139_9': {
    name: 'Section 139(9) - Notice for Defective Return',
    risk: 'HIGH URGENCY',
    badgeClass: 'high',
    icon: '⚠️',
    analysis: 'ITR declared defective due to missing balance sheet (for F&O / Freelancers), gross revenue mismatches, or unpaid self-assessment tax. Strict 15-day deadline.',
    advice: 'File Defective Return Response under Section 139(9) along with rectified XML/JSON return immediately.',
    roadmap: [
      { title: 'Defect Error Diagnosis', desc: 'Identify structural errors causing CPC invalidation (e.g. Schedule P&L omitted).' },
      { title: 'Prepare Rectified ITR', desc: 'Re-compute correct schedules, Profit & Loss, and balance sheet.' },
      { title: 'Upload Defective Reply', desc: 'Submit response u/s 139(9) with fresh digital signature.' },
      { title: 'Ack Verification', desc: 'Obtain valid e-verification acknowledgement from Income Tax Department.' }
    ]
  },
  '148': {
    name: 'Section 148 - Reopening & Income Escaping Assessment',
    risk: 'CRITICAL / SEVERE RISK',
    badgeClass: 'high',
    icon: '🚨',
    analysis: 'Assessing Officer (AO) has initiated reassessment proceedings for past financial years based on high-value transaction data (Insights Portal / Cash / Property / Crypto).',
    advice: 'Requires direct senior legal drafting by CA Pradeep Agarwal and filing formal objection challenging jurisdiction.',
    roadmap: [
      { title: 'Reason to Believe Review', desc: 'Scrutinize AO recorded reasons and validity under Section 148A.' },
      { title: 'Jurisdiction Challenge', desc: 'Check limitation periods (3 years / 10 years threshold rules).' },
      { title: 'Comprehensive Legal Submission', desc: 'Draft comprehensive reply with fund flow statements and purchase deeds.' },
      { title: 'Appellate Representation', desc: 'Represent before Faceless Assessment Officer / CIT (Appeals).' }
    ]
  },
  '148A': {
    name: 'Section 148A - Show Cause Notice before Reassessment',
    risk: 'CRITICAL ATTENTION',
    badgeClass: 'high',
    icon: '🚨',
    analysis: 'Pre-reopening enquiry giving you 7-30 days to explain why your case should NOT be reopened under Section 148.',
    advice: 'Immediate submission of documentary trail explaining source of funds to prevent reassessment order.',
    roadmap: [
      { title: 'Enquiry Scope Analysis', desc: 'Analyze information flagged by Risk Management System (RMS).' },
      { title: 'Source of Funds Trail', desc: 'Build verifiable bank trail, gift deeds, or audited financials.' },
      { title: 'Reply to Show Cause', desc: 'Submit reasoned argument proving income has not escaped assessment.' },
      { title: 'Drop Proceedings Order', desc: 'Aim to obtain Section 148A(d) favorable order dropping the case.' }
    ]
  },
  '156': {
    name: 'Section 156 - Notice of Demand (Tax Payable)',
    risk: 'HIGH RISK',
    badgeClass: 'high',
    icon: '⚠️',
    analysis: 'Official order requiring payment of outstanding tax, interest under Sec 234A/B/C, or penalties within 30 days of service.',
    advice: 'Review computational validity before paying; file appeal before CIT(A) or rectification u/s 154 if demand is erroneous.',
    roadmap: [
      { title: 'Challan Audit', desc: 'Verify if advance tax or TDS credits were missed by department software.' },
      { title: 'Interest Verification', desc: 'Recalculate 234A/B/C interest to check for excess computation.' },
      { title: 'Stay of Demand / Rectification', desc: 'Apply for stay of demand or submit rectification petition.' },
      { title: 'Clearance Certificate', desc: 'Secure clean IT clearance without recovery action or bank freezing.' }
    ]
  },
  '68': {
    name: 'Section 68 / 69 - Unexplained Cash Credits & Investments',
    risk: 'CRITICAL / LITIGATION',
    badgeClass: 'high',
    icon: '🚨',
    analysis: 'Unexplained cash deposits, unexplained credits, or luxury purchases attracting penal tax rate of 78% (60% tax + 25% surcharge + cess u/s 115BBE).',
    advice: 'Senior CA representation required to establish Identity, Creditworthiness, and Genuineness of transaction.',
    roadmap: [
      { title: '3-Pillar Audit', desc: 'Establish identity, creditworthiness, and genuineness of lender/investor.' },
      { title: 'ITR & Bank Evidence', desc: 'Collate audited ITRs and bank statements of counter-parties.' },
      { title: 'Legal Jurisprudence Drafting', desc: 'Draft legal rejoinder supported by relevant Supreme Court & High Court rulings.' },
      { title: 'Faceless Defence', desc: 'Submit exhaustive paperbook to prevent punitive Section 115BBE assessment.' }
    ]
  }
};

function scanNotice() {
  const section = document.getElementById('noticeSectionSelect')?.value || '143_1';
  const demand = parseFloat(document.getElementById('noticeDemandAmount')?.value) || 0;
  const days = parseInt(document.getElementById('noticeDaysElapsed')?.value) || 5;

  const data = noticeDatabase[section] || noticeDatabase['143_1'];

  let riskLevel = data.risk;
  let riskClass = data.badgeClass;
  let gaugeIcon = data.icon;

  if (demand > 500000 || days > 20) {
    riskLevel = 'CRITICAL / IMMEDIATE CA ACTION REQUIRED';
    riskClass = 'high';
    gaugeIcon = '🚨';
  }

  const elRiskLevel = document.getElementById('noticeResRiskLevel');
  const elGauge = document.getElementById('noticeRiskGauge');
  const elAnalysis = document.getElementById('noticeResAnalysis');
  const elAdvice = document.getElementById('noticeResAdvice');
  const roadmapContainer = document.getElementById('noticeRoadmapContainer');

  if (elRiskLevel) elRiskLevel.textContent = riskLevel;
  if (elGauge) {
    elGauge.className = `risk-gauge-circle ${riskClass}`;
    elGauge.textContent = gaugeIcon;
  }
  if (elAnalysis) elAnalysis.textContent = data.analysis;
  if (elAdvice) elAdvice.textContent = data.advice;

  // Render 4-Step Resolution Roadmap
  if (roadmapContainer && data.roadmap) {
    roadmapContainer.innerHTML = `
      <div class="roadmap-grid">
        ${data.roadmap.map((step, idx) => `
          <div class="roadmap-item">
            <div class="roadmap-num">${idx + 1}</div>
            <div class="roadmap-title">${step.title}</div>
            <div class="roadmap-desc">${step.desc}</div>
          </div>
        `).join('')}
      </div>
    `;
  }
}

function sendNoticeToWhatsApp() {
  const phone = "919891495092";
  const section = document.getElementById('noticeSectionSelect')?.value || '143_1';
  const demand = parseFloat(document.getElementById('noticeDemandAmount')?.value) || 0;
  const days = parseInt(document.getElementById('noticeDaysElapsed')?.value) || 0;
  const data = noticeDatabase[section] || noticeDatabase['143_1'];

  const text = `Hi CA Pradeep Agarwal & Easy My Taxes litigation desk,%0A%0A*Income Tax Notice Consultation Request:*%0A• Notice Section: *${data.name}*%0A• Demand Amount: ${formatINR(demand)}%0A• Days Elapsed: ${days} days%0A%0AI would like your office to review my notice and draft an official reply on the Income Tax portal.`;

  window.open(`https://wa.me/${phone}?text=${text}`, '_blank');
}

// --------------------------------------------------------------------------
// 5. INTERACTIVE GST CALCULATOR
// --------------------------------------------------------------------------

function calculateGST() {
  const baseAmount = parseFloat(document.getElementById('gstAmount')?.value) || 0;
  const gstRate = parseFloat(document.getElementById('gstRate')?.value) || 18;
  const gstType = document.querySelector('input[name="gstType"]:checked')?.value || 'exclusive';

  let netAmount = 0;
  let gstAmount = 0;
  let totalAmount = 0;

  if (gstType === 'exclusive') {
    netAmount = baseAmount;
    gstAmount = (baseAmount * gstRate) / 100;
    totalAmount = baseAmount + gstAmount;
  } else {
    totalAmount = baseAmount;
    netAmount = (baseAmount * 100) / (100 + gstRate);
    gstAmount = totalAmount - netAmount;
  }

  const cgst = gstAmount / 2;
  const sgst = gstAmount / 2;
  const igst = gstAmount;

  const elNet = document.getElementById('gstResNet');
  const elTax = document.getElementById('gstResTax');
  const elTotal = document.getElementById('gstResTotal');
  const elCgst = document.getElementById('gstResCgst');
  const elSgst = document.getElementById('gstResSgst');
  const elIgst = document.getElementById('gstResIgst');

  if (elNet) elNet.textContent = formatINR(netAmount);
  if (elTax) elTax.textContent = formatINR(gstAmount);
  if (elTotal) elTotal.textContent = formatINR(totalAmount);
  if (elCgst) elCgst.textContent = formatINR(cgst);
  if (elSgst) elSgst.textContent = formatINR(sgst);
  if (elIgst) elIgst.textContent = formatINR(igst);
}

// --------------------------------------------------------------------------
// 6. HRA EXEMPTION CALCULATOR (Section 10(13A))
// --------------------------------------------------------------------------

function calculateHRA() {
  const basicSalary = parseFloat(document.getElementById('hraBasic')?.value) || 0;
  const da = parseFloat(document.getElementById('hraDA')?.value) || 0;
  const hraReceived = parseFloat(document.getElementById('hraReceived')?.value) || 0;
  const rentPaid = parseFloat(document.getElementById('hraRentPaid')?.value) || 0;
  const isMetro = document.getElementById('hraIsMetro')?.value === 'metro';

  const salaryForHRA = basicSalary + da;

  const condition1 = hraReceived;
  const condition2 = Math.max(0, rentPaid - (0.10 * salaryForHRA));
  const condition3 = (isMetro ? 0.50 : 0.40) * salaryForHRA;

  const exemptHRA = Math.min(condition1, condition2, condition3);
  const taxableHRA = Math.max(0, hraReceived - exemptHRA);

  const elExempt = document.getElementById('hraResExempt');
  const elTaxable = document.getElementById('hraResTaxable');
  const elCond1 = document.getElementById('hraCond1');
  const elCond2 = document.getElementById('hraCond2');
  const elCond3 = document.getElementById('hraCond3');

  if (elExempt) elExempt.textContent = formatINR(exemptHRA);
  if (elTaxable) elTaxable.textContent = formatINR(taxableHRA);
  if (elCond1) elCond1.textContent = formatINR(condition1);
  if (elCond2) elCond2.textContent = formatINR(condition2);
  if (elCond3) elCond3.textContent = formatINR(condition3);
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
  const taxInputs = [
    'calcGrossSalary', 'calcOtherIncome', 'calc80C', 'calc80D',
    'calcNPS', 'calcHomeLoan', 'calcHRA', 'calcOtherDeductions'
  ];
  taxInputs.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('input', calculateTax);
  });

  const advTaxInput = document.getElementById('advTaxAnnualAmount');
  if (advTaxInput) {
    advTaxInput.addEventListener('input', () => calculateAdvanceTax());
  }

  const adaInputs = ['adaGrossReceipts', 'adaActualExpenses'];
  adaInputs.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('input', calculate44ADA);
  });

  const noticeInputs = ['noticeSectionSelect', 'noticeDemandAmount', 'noticeDaysElapsed'];
  noticeInputs.forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener('input', scanNotice);
      el.addEventListener('change', scanNotice);
    }
  });

  const gstInputs = ['gstAmount', 'gstRate'];
  gstInputs.forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener('input', calculateGST);
      el.addEventListener('change', calculateGST);
    }
  });
  document.querySelectorAll('input[name="gstType"]').forEach(radio => {
    radio.addEventListener('change', calculateGST);
  });

  const hraInputs = ['hraBasic', 'hraDA', 'hraReceived', 'hraRentPaid', 'hraIsMetro'];
  hraInputs.forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener('input', calculateHRA);
      el.addEventListener('change', calculateHRA);
    }
  });

  calculateTax();
  calculate44ADA();
  scanNotice();
  calculateGST();
  calculateHRA();
  calculateAdvanceTax();
});


// Sync range slider with text input
function syncSalarySlider(val) {
  const input = document.getElementById('calcGrossSalary');
  if (input) {
    input.value = val;
    calculateTax();
  }
}

// Sync Advance Tax slider
function syncAdvTaxSlider(val) {
  const input = document.getElementById('advTaxAnnualAmount');
  if (input) {
    input.value = val;
    calculateAdvanceTax(parseFloat(val));
  }
}

// Sync 44ADA slider
function syncAdaSlider(val) {
  const input = document.getElementById('adaGrossReceipts');
  if (input) {
    input.value = val;
    calculate44ADA();
  }
}

// Toggle Slab Accordion
function toggleSlabAccordion() {
  const body = document.getElementById('slabAccordionBody');
  const icon = document.getElementById('slabToggleIcon');
  if (body) {
    body.classList.toggle('open');
    if (icon) icon.textContent = body.classList.contains('open') ? '−' : '+';
  }
}
