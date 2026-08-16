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
  if (newNetTaxable > 1500000) {
    newTaxBeforeRebate = 150000 + (newNetTaxable - 1500000) * 0.30;
  } else if (newNetTaxable > 1200000) {
    newTaxBeforeRebate = 90000 + (newNetTaxable - 1200000) * 0.20;
  } else if (newNetTaxable > 1000000) {
    newTaxBeforeRebate = 60000 + (newNetTaxable - 1000000) * 0.15;
  } else if (newNetTaxable > 700000) {
    newTaxBeforeRebate = 20000 + (newNetTaxable - 700000) * 0.10;
  } else if (newNetTaxable > 300000) {
    newTaxBeforeRebate = (newNetTaxable - 300000) * 0.05;
  } else {
    newTaxBeforeRebate = 0;
  }

  // Section 87A Rebate in New Regime (Income up to ₹7,00,000 is tax free, rebate up to ₹25,000)
  let newTaxAfterRebate = newTaxBeforeRebate;
  if (newNetTaxable <= 700000) {
    newTaxAfterRebate = 0;
  }

  // Surcharge (if applicable) & 4% Health & Education Cess
  const newCess = newTaxAfterRebate * 0.04;
  const totalNewTax = Math.round(newTaxAfterRebate + newCess);

  // --- OLD REGIME COMPUTATION ---
  // Standard Deduction in Old Regime = ₹50,000 for salaried
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

  // Section 87A Rebate in Old Regime (Income up to ₹5,00,000 is tax free, rebate up to ₹12,500)
  let oldTaxAfterRebate = oldTaxBeforeRebate;
  if (oldNetTaxable <= 500000) {
    oldTaxAfterRebate = 0;
  }

  const oldCess = oldTaxAfterRebate * 0.04;
  const totalOldTax = Math.round(oldTaxAfterRebate + oldCess);

  // --- UPDATE UI RESULTS ---
  const elNewTax = document.getElementById('resNewTax');
  const elOldTax = document.getElementById('resOldTax');
  const elCardNew = document.getElementById('cardNewRegime');
  const elCardOld = document.getElementById('cardOldRegime');
  const elBannerTitle = document.getElementById('recBannerTitle');
  const elBannerDesc = document.getElementById('recBannerDesc');

  if (elNewTax) elNewTax.textContent = formatINR(totalNewTax);
  if (elOldTax) elOldTax.textContent = formatINR(totalOldTax);

  // Table Breakdowns
  const elNewTaxable = document.getElementById('resNewTaxable');
  const elOldTaxable = document.getElementById('resOldTaxable');
  const elNewDed = document.getElementById('resNewDed');
  const elOldDed = document.getElementById('resOldDed');

  if (elNewTaxable) elNewTaxable.textContent = formatINR(newNetTaxable);
  if (elOldTaxable) elOldTaxable.textContent = formatINR(oldNetTaxable);
  if (elNewDed) elNewDed.textContent = formatINR(newStdDeduction);
  if (elOldDed) elOldDed.textContent = formatINR(totalOldDeductions);

  // Recommendation
  if (totalNewTax < totalOldTax) {
    const diff = totalOldTax - totalNewTax;
    elCardNew?.classList.add('winner');
    elCardOld?.classList.remove('winner');
    if (elBannerTitle) elBannerTitle.textContent = `🎉 New Tax Regime (AY 2026-27) is best for you!`;
    if (elBannerDesc) elBannerDesc.textContent = `You save ${formatINR(diff)} in taxes under the revised New Regime.`;
  } else if (totalOldTax < totalNewTax) {
    const diff = totalNewTax - totalOldTax;
    elCardOld?.classList.add('winner');
    elCardNew?.classList.remove('winner');
    if (elBannerTitle) elBannerTitle.textContent = `🎉 Old Tax Regime is best for you!`;
    if (elBannerDesc) elBannerDesc.textContent = `Due to high Chapter VI-A deductions, you save ${formatINR(diff)} in taxes under the Old Regime.`;
  } else {
    elCardNew?.classList.remove('winner');
    elCardOld?.classList.remove('winner');
    if (elBannerTitle) elBannerTitle.textContent = `⚖️ Both Regimes result in equal tax`;
    if (elBannerDesc) elBannerDesc.textContent = `Your tax liability is identical in both options (${formatINR(totalNewTax)}).`;
  }
}

// --------------------------------------------------------------------------
// 2. FREELANCER / SECTION 44ADA PRESUMPTIVE TAX CALCULATOR
// --------------------------------------------------------------------------

function calculate44ADA() {
  const grossReceipts = parseFloat(document.getElementById('adaGrossReceipts')?.value) || 0;
  const actualExpenses = parseFloat(document.getElementById('adaActualExpenses')?.value) || 0;

  // Sec 44ADA: 50% of gross receipts is presumed as profit
  const presumptiveProfit = grossReceipts * 0.50;
  const actualProfit = Math.max(0, grossReceipts - actualExpenses);

  // Calculate tax on 44ADA profit vs Actual Profit under New Regime
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
// 3. NOTICE DIAGNOSTIC & RISK SCANNER
// --------------------------------------------------------------------------

function scanNotice() {
  const section = document.getElementById('noticeSectionSelect')?.value || '143_1';
  const demand = parseFloat(document.getElementById('noticeDemandAmount')?.value) || 0;
  const days = parseInt(document.getElementById('noticeDaysElapsed')?.value) || 5;

  let riskLevel = 'Moderate';
  let riskClass = 'medium';
  let gaugeIcon = '⚠️';
  let analysis = '';
  let actionAdvice = '';

  if (section === '148' || section === '144' || demand > 500000 || days > 25) {
    riskLevel = 'CRITICAL / HIGH RISK';
    riskClass = 'high';
    gaugeIcon = '🚨';
    analysis = 'High severity notice. Demands urgent CA rejoinder to prevent penalty proceedings under Section 270A/271(1)(c) and bank attachment.';
    actionAdvice = 'Immediate legal response drafting by CA Pradeep Agarwal required within 48 hours.';
  } else if (section === '139_9' || section === '156') {
    riskLevel = 'HIGH ATTENTION';
    riskClass = 'high';
    gaugeIcon = '⚠️';
    analysis = 'Defective Return or Demand notice. Failure to respond within 15-30 days will result in return being treated as invalid.';
    actionAdvice = 'File corrected ITR and upload rectified computation sheet on e-Filing portal.';
  } else {
    riskLevel = 'MODERATE / ROUTINE';
    riskClass = 'low';
    gaugeIcon = '📝';
    analysis = 'Intimation under Section 143(1) indicating mismatch between claimed TDS/deductions and AIS records.';
    actionAdvice = 'Submit online rectification u/s 154 or agree/disagree with demand with proper TDS vouchers.';
  }

  const elRiskLevel = document.getElementById('noticeResRiskLevel');
  const elGauge = document.getElementById('noticeRiskGauge');
  const elAnalysis = document.getElementById('noticeResAnalysis');
  const elAdvice = document.getElementById('noticeResAdvice');

  if (elRiskLevel) elRiskLevel.textContent = riskLevel;
  if (elGauge) {
    elGauge.className = `risk-gauge-circle ${riskClass}`;
    elGauge.textContent = gaugeIcon;
  }
  if (elAnalysis) elAnalysis.textContent = analysis;
  if (elAdvice) elAdvice.textContent = actionAdvice;
}

// --------------------------------------------------------------------------
// 4. INTERACTIVE GST CALCULATOR
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
// 5. HRA EXEMPTION CALCULATOR (Section 10(13A))
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
});
