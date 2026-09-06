/**
 * EASY MY TAXES - STATUTORY TAX COMPLIANCE CALENDAR & DUE DATES (2026–2027)
 * Indian Regulatory Master Calendar for Income Tax, GST, MCA/ROC, TDS & Advance Tax
 */

const complianceCalendarData = [
  {
    id: 'itr-salaried-2026',
    category: 'itr',
    title: 'Income Tax Return (ITR) Filing for Salaried Individuals & Non-Audit Assessees',
    form: 'ITR-1 / ITR-2 / ITR-4',
    dueDate: '2026-07-31',
    period: 'FY 2025-26 (AY 2026-27)',
    description: 'Statutory deadline for filing returns for individual taxpayers, HUF, and entities not subject to tax audit.',
    status: 'urgent',
    penalty: '₹5,000 late fee u/s 234F + 1% per month interest u/s 234A'
  },
  {
    id: 'itr-audit-2026',
    category: 'itr',
    title: 'ITR Filing for Tax Audit Cases & Corporate Entities',
    form: 'ITR-3 / ITR-5 / ITR-6',
    dueDate: '2026-10-31',
    period: 'FY 2025-26 (AY 2026-27)',
    description: 'Filing of Income Tax returns for companies and businesses requiring statutory tax audit under Section 44AB.',
    status: 'scheduled',
    penalty: 'Late fee + interest u/s 234A/B/C and penalties u/s 271B'
  },
  {
    id: 'adv-tax-q1-2026',
    category: 'advance-tax',
    title: '1st Installment of Advance Tax (15%)',
    form: 'Challan ITNS 280',
    dueDate: '2026-06-15',
    period: 'FY 2026-27 (Q1)',
    description: 'Applicable to all taxpayers with estimated tax liability exceeding ₹10,000 in the fiscal year.',
    status: 'upcoming',
    penalty: '1% interest per month u/s 234C on default in advance tax'
  },
  {
    id: 'adv-tax-q2-2026',
    category: 'advance-tax',
    title: '2nd Installment of Advance Tax (45%)',
    form: 'Challan ITNS 280',
    dueDate: '2026-09-15',
    period: 'FY 2026-27 (Q2)',
    description: 'Payment of cumulative 45% of total estimated annual tax liability.',
    status: 'scheduled',
    penalty: '1% interest per month u/s 234C'
  },
  {
    id: 'adv-tax-q3-2026',
    category: 'advance-tax',
    title: '3rd Installment of Advance Tax (75%)',
    form: 'Challan ITNS 280',
    dueDate: '2026-12-15',
    period: 'FY 2026-27 (Q3)',
    description: 'Payment of cumulative 75% of total estimated tax liability.',
    status: 'scheduled',
    penalty: '1% interest per month u/s 234C'
  },
  {
    id: 'adv-tax-q4-2027',
    category: 'advance-tax',
    title: '4th & Final Installment of Advance Tax (100%)',
    form: 'Challan ITNS 280',
    dueDate: '2027-03-15',
    period: 'FY 2026-27 (Q4)',
    description: '100% of estimated annual tax payable (also applicable for Presumptive 44AD/44ADA taxpayers).',
    status: 'scheduled',
    penalty: '1% interest per month u/s 234B and 234C'
  },
  {
    id: 'gst-gstr1-monthly-2026',
    category: 'gst',
    title: 'GSTR-1 Monthly Return Filing',
    form: 'GSTR-1 (Outward Supplies)',
    dueDate: '2026-08-11',
    period: 'July 2026',
    description: 'Details of outward supplies of taxable goods and services for regular monthly filers.',
    status: 'upcoming',
    penalty: '₹50/day (₹20/day for Nil return) late fee under Section 47'
  },
  {
    id: 'gst-gstr3b-monthly-2026',
    category: 'gst',
    title: 'GSTR-3B Summary Return & Tax Payment',
    form: 'GSTR-3B',
    dueDate: '2026-08-20',
    period: 'July 2026',
    description: 'Monthly self-declaration of summary tax liability, Input Tax Credit (ITC) claimed, and net tax payout.',
    status: 'urgent',
    penalty: '18% p.a. interest on delayed tax payment + ₹50/day late fee'
  },
  {
    id: 'gst-annual-2026',
    category: 'gst',
    title: 'GSTR-9 & GSTR-9C Annual GST Return',
    form: 'GSTR-9 / GSTR-9C',
    dueDate: '2026-12-31',
    period: 'FY 2025-26',
    description: 'Annual GST return and reconciliation statement for registered regular taxpayers.',
    status: 'scheduled',
    penalty: '₹200/day late fee subject to 0.50% of total turnover'
  },
  {
    id: 'tds-q1-2026',
    category: 'tds',
    title: 'Quarterly TDS / TCS Return Filing (Q1)',
    form: 'Form 24Q (Salary) / 26Q (Non-Salary)',
    dueDate: '2026-07-31',
    period: 'Quarter 1 (Apr - Jun 2026)',
    description: 'Quarterly statement of tax deducted at source by employers and businesses.',
    status: 'upcoming',
    penalty: '₹200 per day u/s 234E until the return is submitted'
  },
  {
    id: 'tds-q2-2026',
    category: 'tds',
    title: 'Quarterly TDS / TCS Return Filing (Q2)',
    form: 'Form 24Q / 26Q / 27Q',
    dueDate: '2026-10-31',
    period: 'Quarter 2 (Jul - Sep 2026)',
    description: 'TDS filing for deduction on contractual payments, professional fees, rent, dividend & interest.',
    status: 'scheduled',
    penalty: '₹200 per day u/s 234E'
  },
  {
    id: 'roc-dir3-kyc-2026',
    category: 'roc',
    title: 'Director KYC Annual Filing (DIR-3 KYC)',
    form: 'DIR-3 KYC Web / e-Form',
    dueDate: '2026-09-30',
    period: 'FY 2025-26',
    description: 'Mandatory annual KYC verification for all individuals holding a Director Identification Number (DIN).',
    status: 'scheduled',
    penalty: '₹5,000 one-time penalty for non-filing & DIN deactivation'
  },
  {
    id: 'roc-aoc4-2026',
    category: 'roc',
    title: 'MCA / ROC Filing of Financial Statements (AOC-4)',
    form: 'AOC-4 / AOC-4 XBRL',
    dueDate: '2026-10-30',
    period: 'FY 2025-26',
    description: 'Submission of audited balance sheet and P&L statement to the Registrar of Companies.',
    status: 'scheduled',
    penalty: '₹100 per day default fine per company + director penalties'
  },
  {
    id: 'roc-mgt7-2026',
    category: 'roc',
    title: 'MCA / ROC Annual Return (MGT-7 / MGT-7A)',
    form: 'MGT-7',
    dueDate: '2026-11-29',
    period: 'FY 2025-26',
    description: 'Annual return containing shareholding structure, directorships, and corporate governance details.',
    status: 'scheduled',
    penalty: '₹100 per day of delay'
  }
];

// Helper to generate Google Calendar Add URL
function getGoogleCalendarUrl(item) {
  const d = item.dueDate.replace(/-/g, '');
  const title = encodeURIComponent(`Tax Deadline: ${item.title}`);
  const details = encodeURIComponent(`${item.description}\nPenalty: ${item.penalty}\nAssisted by Easy My Taxes (CA Pradeep Agarwal)`);
  const location = encodeURIComponent('Income Tax / GST Portal India');
  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${d}T090000Z/${d}T180000Z&details=${details}&location=${location}`;
}

let activeCalCategory = 'all';
let activeCalSearch = '';

// Render calendar items into the table
function renderComplianceCalendar(filter = 'all', searchQuery = '') {
  const container = document.getElementById('complianceCalendarBody');
  if (!container) return;

  activeCalCategory = filter;
  activeCalSearch = searchQuery.toLowerCase().trim();

  let filtered = complianceCalendarData;

  if (activeCalCategory !== 'all') {
    filtered = filtered.filter(item => item.category === activeCalCategory);
  }

  if (activeCalSearch) {
    filtered = filtered.filter(item => 
      item.title.toLowerCase().includes(activeCalSearch) ||
      item.form.toLowerCase().includes(activeCalSearch) ||
      item.description.toLowerCase().includes(activeCalSearch) ||
      item.period.toLowerCase().includes(activeCalSearch)
    );
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <tr>
        <td colspan="5" style="text-align: center; padding: 2.5rem; color: var(--text-muted);">
          🔍 No compliance deadlines found matching "<strong>${searchQuery}</strong>". Try searching for "ITR", "GST", "TDS", or "ROC".
        </td>
      </tr>
    `;
    return;
  }

  container.innerHTML = filtered.map(item => {
    const d = new Date(item.dueDate);
    const dateFormatted = d.toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });

    let badgeClass = 'scheduled';
    let badgeText = 'Scheduled';
    if (item.status === 'urgent') {
      badgeClass = 'urgent';
      badgeText = 'Immediate Action';
    } else if (item.status === 'upcoming') {
      badgeClass = 'upcoming';
      badgeText = 'Approaching Soon';
    }

    const gCalUrl = getGoogleCalendarUrl(item);

    return `
      <tr>
        <td>
          <div class="due-date-cell">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
            <span>${dateFormatted}</span>
          </div>
          <a href="${gCalUrl}" target="_blank" class="cal-sync-btn" title="Add reminder to Google Calendar">
            <span>+ Google Calendar</span>
          </a>
        </td>
        <td>
          <strong style="color: var(--primary-950); display: block; font-size: 0.95rem;">${item.title}</strong>
          <span style="font-size: 0.8125rem; color: var(--text-subtle);">${item.description}</span>
          <div style="font-size: 0.75rem; color: var(--amber-600); font-weight: 600; margin-top: 0.25rem;">⚠️ ${item.penalty}</div>
        </td>
        <td>
          <span style="background: var(--surface-100); padding: 0.3rem 0.6rem; border-radius: 6px; font-weight: 700; font-size: 0.8125rem; color: var(--primary-900);">
            ${item.form}
          </span>
        </td>
        <td>
          <span class="status-badge ${badgeClass}">${badgeText}</span>
        </td>
        <td>
          <button class="btn btn-sm btn-outline" onclick="openConsultationModal('${(item.title || '').replace(/'/g, "\\'").replace(/"/g, '&quot;')} (Assistance by CA Pradeep Agarwal)')">
            Get CA Assistance
          </button>
        </td>
      </tr>
    `;
  }).join('');
}

// Attach calendar filters and search
document.addEventListener('DOMContentLoaded', () => {
  renderComplianceCalendar('all', '');

  const calPills = document.querySelectorAll('.cal-pill');
  calPills.forEach(pill => {
    pill.addEventListener('click', () => {
      calPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      const cat = pill.getAttribute('data-cat') || 'all';
      renderComplianceCalendar(cat, activeCalSearch);
    });
  });

  const searchInput = document.getElementById('calendarSearchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      renderComplianceCalendar(activeCalCategory, e.target.value);
    });
  }
});
