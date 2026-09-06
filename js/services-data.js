/**
 * MASTER SERVICES REPOSITORY - EASY MY TAXES (2026 EDITION)
 * Comprehensive statutory data for Company Registrations, Compliance, and Licenses
 */

const MASTER_SERVICES_DATA = {
  "company-registration": {
    "id": "company-registration",
    "category": "registrations",
    "categoryLabel": "Company Registrations",
    "icon": "\ud83c\udfe2",
    "badge": "MCA SPICe+ Fastrack",
    "title": "Company Registration in India (2026)",
    "tagline": "Incorporate your Private Limited, LLP, OPC, or Public Company with MCA in 5\u20137 working days.",
    "timeline": "5 - 7 Working Days",
    "govtPortal": "Ministry of Corporate Affairs (MCA)",
    "filingMode": "100% Online Paperless",
    "overview": "Company incorporation in India is fully digital via the MCA SPICe+ unified portal. Easy My Taxes, directed by CA Pradeep Agarwal, manages name reservation, Digital Signature Certificates (DSC), Director Identification Numbers (DIN), drafting MOA & AOA, and post-incorporation tax registrations with 100% compliance guarantee.",
    "benefits": [
      {
        "title": "Limited Liability Protection",
        "desc": "Shareholders' personal assets remain legally protected against business liabilities and operational debts."
      },
      {
        "title": "Seamless Equity Fundraising",
        "desc": "Preferred corporate structure for Venture Capital (VC), Angel Investors, and Institutional Debt."
      },
      {
        "title": "Unbroken Corporate Existence",
        "desc": "Perpetual succession ensures the company remains an independent legal entity regardless of member changes."
      }
    ],
    "documents": [
      "PAN Card & Aadhaar Card of all proposed Directors",
      "Passport-size photographs and specimen signatures",
      "Address Proof of Directors (Bank Statement, Electricity Bill or Driving License < 2 months old)",
      "Registered Office Proof (Electricity Bill, Water Bill or Gas Bill < 2 months old)",
      "No-Objection Certificate (NOC) from the property owner / landlord"
    ],
    "steps": [
      {
        "step": "1",
        "title": "DSC & Name Reservation",
        "desc": "Class-3 Digital Signatures issued and RUN (Reserve Unique Name) submitted on MCA portal."
      },
      {
        "step": "2",
        "title": "SPICe+ Part B Filing",
        "desc": "Comprehensive filing of Part B with DIN allocation, PAN, TAN, EPFO, and ESIC registrations."
      },
      {
        "step": "3",
        "title": "MOA & AOA Legal Drafting",
        "desc": "Electronic drafting of Charter documents (e-MOA and e-AOA) in compliance with Companies Act 2013."
      },
      {
        "step": "4",
        "title": "COI & Bank Account",
        "desc": "ROC approves Certificate of Incorporation (COI) with permanent CIN, PAN, TAN, and instant bank account."
      }
    ],
    "deliverables": [
      "Certificate of Incorporation (COI) with CIN",
      "Permanent Account Number (PAN) & Tax Deduction Account Number (TAN)",
      "2 Digital Signature Certificates (Class 3 DSC)",
      "Director Identification Numbers (DIN) for 2 Directors",
      "Charter e-MOA & e-AOA documents",
      "First Board Resolution for Corporate Bank Account Opening"
    ],
    "faqs": [
      {
        "q": "How many directors are required for company registration?",
        "a": "A minimum of 2 directors (at least 1 must be an Indian resident) and 2 shareholders are required for a Private Limited Company."
      },
      {
        "q": "Is physical office visit required by the ROC?",
        "a": "No, the entire incorporation procedure is 100% online under the MCA SPICe+ digital framework."
      },
      {
        "q": "What is the minimum capital required?",
        "a": "There is no statutory minimum paid-up capital requirement under the Companies Act 2013; you can start with as little as \u20b91,000."
      }
    ]
  },
  "private-limited-company": {
    "id": "private-limited-company",
    "category": "registrations",
    "categoryLabel": "Company Registrations",
    "icon": "\ud83d\ude80",
    "badge": "Most Popular For Startups",
    "title": "Private Limited Company Registration",
    "tagline": "The gold standard legal entity for startups, high-growth businesses, and venture-backed ventures.",
    "timeline": "5 - 7 Days",
    "govtPortal": "MCA (Ministry of Corporate Affairs)",
    "filingMode": "100% Online Paperless",
    "overview": "A Private Limited Company (Pvt Ltd) is India's most recognized corporate structure. It grants limited liability to its members, allows easy equity allocation for angel investment and ESOPs, and establishes immense institutional credibility with clients, banks, and enterprise vendors.",
    "benefits": [
      {
        "title": "Investor Confidence & Equity Dilution",
        "desc": "Enables issuing preference shares, equity shares, convertible notes, and employee ESOP pools."
      },
      {
        "title": "Separate Legal Identity",
        "desc": "The company can purchase property, hold intellectual property, and sue or be sued in its own legal name."
      },
      {
        "title": "High Credibility & Global Reach",
        "desc": "Trusted by multinational enterprise clients, venture capital firms, and government procurement tenders."
      }
    ],
    "documents": [
      "PAN Card and Aadhaar Card / Passport of all Directors",
      "Passport size photographs of all promoters",
      "Latest Bank Statement / Utility Bill (less than 2 months old) as Director Address Proof",
      "Electricity Bill / Property Tax Receipt of Registered Office",
      "Rent Agreement and Landlord NOC for commercial/residential premise"
    ],
    "steps": [
      {
        "step": "1",
        "title": "DSC & DIN Generation",
        "desc": "Procuring Class-3 DSC with encryption for all designated directors."
      },
      {
        "step": "2",
        "title": "SPICe+ Part A Name Approval",
        "desc": "Conducting MCA trademark and name availability check, securing unique name reservation."
      },
      {
        "step": "3",
        "title": "SPICe+ Part B & AGILE-PRO-S",
        "desc": "Filing statutory forms for DIN, PAN, TAN, EPFO, ESIC, Professional Tax, and GST registration."
      },
      {
        "step": "4",
        "title": "COI Grant & First Board Meeting",
        "desc": "ROC issues Certificate of Incorporation (COI) along with Company PAN, TAN, and Bank Account."
      }
    ],
    "deliverables": [
      "MCA Certificate of Incorporation (COI) with CIN",
      "Company PAN Card & TAN Allotment",
      "2 Class-3 Digital Signature Certificates (DSC)",
      "Director Identification Numbers (DIN)",
      "Drafted e-MOA and e-AOA",
      "EPFO, ESIC & Professional Tax Registrations",
      "1st Board Resolution for Bank Account Opening"
    ],
    "faqs": [
      {
        "q": "Can a residential address be used as the registered office?",
        "a": "Yes, absolutely. A residential property (even if rented or registered in a parent's name) can legally serve as the registered office of a Private Limited Company. You simply need the latest electricity/utility bill (less than 2 months old) and a No-Objection Certificate (NOC) from the owner."
      },
      {
        "q": "Can salaried employees become directors in a Private Limited Company?",
        "a": "Legally, yes. The Companies Act does not prohibit salaried employees from holding directorships. However, you must verify whether your current employment contract contains any dual-employment or non-compete clause. If so, you can hold 100% equity shares as an investor without becoming an executive director."
      },
      {
        "q": "What is the corporate income tax rate on Private Limited Companies?",
        "a": "Under Section 115BAA of the Income Tax Act, domestic companies enjoy a concessional corporate income tax rate of 22% (plus 10% surcharge and 4% cess, resulting in an effective tax rate of 25.17%), with exemption from Minimum Alternate Tax (MAT)."
      },
      {
        "q": "Is physical presence required at any government office?",
        "a": "No physical visits are ever required. The entire incorporation procedure is 100% digital under the MCA SPICe+ paperless regime. Documents are signed digitally via Class-3 DSC and verified online by the ROC."
      },
      {
        "q": "How is a Private Limited Company different from an LLP?",
        "a": "A Private Limited Company is the required entity for startups seeking venture capital and issuing ESOPs, but it has mandatory annual statutory audit requirements. An LLP is ideal for service firms and partnerships who do not plan to raise angel equity and want an exemption from statutory audit if turnover is under \u20b940 Lakhs."
      },
      {
        "q": "What documents do foreign nationals need to be directors in an Indian Pvt Ltd?",
        "a": "Foreign nationals require a valid passport (notarized and apostilled or consularized in their home country) along with proof of address (bank statement, driving license, or utility bill translated into English and notarized)."
      }
    ],
    "detailedOverview": "\n      <p style=\"font-size: 1.1rem; color: var(--primary-950); font-weight: 600; line-height: 1.75;\">\n        A <strong>Private Limited Company (Pvt Ltd)</strong> is India's most recognized and respected legal entity for startups, high-growth businesses, and venture-backed ventures. Regulated under the <strong>Companies Act 2013</strong> by the Ministry of Corporate Affairs (MCA), it grants an ironclad limited liability shield to its promoters and shareholders while establishing an independent corporate persona.\n      </p>\n      <p>\n        Unlike a proprietorship or traditional partnership, a Private Limited Company has <strong>perpetual succession</strong>\u2014it continues to exist irrespective of changes in directors, promoters, or shareholders. It is the only entity structure in India favored by institutional venture capitalists (VCs), angel syndicates, and banks for equity fundraising, issuance of preferential shares, convertible debt notes, and employee stock option plans (ESOPs).\n      </p>\n      <div style=\"background: var(--surface-50); border-left: 4px solid var(--emerald-500); padding: 1.1rem 1.35rem; border-radius: var(--radius-sm); margin-top: 1.25rem;\">\n        <strong style=\"color: var(--primary-950);\">\u26a1 SPICe+ Digital Advantage:</strong>\n        <span style=\"font-size: 0.925rem; color: var(--text-muted); margin-left: 0.35rem;\">\n          Incorporate 100% digitally through the MCA SPICe+ unified system. Receive your Certificate of Incorporation (COI), permanent CIN, Company PAN, TAN, EPFO, ESIC, Professional Tax, and integrated corporate bank account in just 5\u20137 working days under direct CA supervision.\n        </span>\n      </div>\n    ",
    "whoIsItFor": [
      {
        "icon": "\ud83d\ude80",
        "title": "Tech & SaaS Startups",
        "desc": "Founders planning to raise angel, VC, or seed equity funding and distribute employee ESOPs."
      },
      {
        "icon": "\ud83d\udcbc",
        "title": "High-Growth Businesses",
        "desc": "Enterprises aiming for corporate vendor status, large bank credit facilities, and institutional tenders."
      },
      {
        "icon": "\ud83d\uded2",
        "title": "E-Commerce & D2C Brands",
        "desc": "Brands selling online, leveraging Amazon Brand Registry, and safeguarding their brand assets."
      },
      {
        "icon": "\ud83c\udf10",
        "title": "Subsidiaries & Foreign FDI",
        "desc": "International holding corporations creating a compliant 100% Indian operating subsidiary."
      }
    ],
    "eligibility": [
      {
        "icon": "\ud83d\udc65",
        "label": "Minimum Promoters",
        "value": "2 Directors & 2 Shareholders",
        "desc": "Minimum 2 directors and 2 shareholders (the same 2 individuals can hold both roles; max 200 members)."
      },
      {
        "icon": "\ud83c\uddee\ud83c\uddf3",
        "label": "Resident Indian",
        "value": "1 Resident Director",
        "desc": "At least one director must have resided in India for \u2265 182 days in the previous financial year."
      },
      {
        "icon": "\ud83d\udcb0",
        "label": "Paid-Up Capital",
        "value": "\u20b90 Minimum Capital",
        "desc": "No minimum capital mandated under Companies Act 2013; start with any nominal capital (e.g. \u20b910,000)."
      },
      {
        "icon": "\ud83c\udfe2",
        "label": "Registered Office",
        "value": "Commercial or Residential",
        "desc": "Valid address in India (owned or rented home/office) with electricity bill < 2 months old and owner NOC."
      }
    ],
    "postCompliances": [
      {
        "badge": "Mandatory",
        "timeline": "Within 180 Days",
        "title": "Commencement of Business (INC-20A)",
        "desc": "File declaration with ROC confirming directors have deposited share capital in bank."
      },
      {
        "badge": "Mandatory",
        "timeline": "Within 30 Days",
        "title": "First Auditor Appointment (ADT-1)",
        "desc": "Appoint an independent statutory Chartered Accountant at first board meeting."
      },
      {
        "badge": "Statutory",
        "timeline": "Within 60 Days",
        "title": "Issuance of Share Certificates",
        "desc": "Issue stamped physical or electronic share certificates to all initial subscribers."
      },
      {
        "badge": "Annual",
        "timeline": "By 30th October",
        "title": "Annual ROC Filings (AOC-4 & MGT-7)",
        "desc": "Submit audited balance sheet, profit & loss statement, and annual return to MCA."
      },
      {
        "badge": "Annual",
        "timeline": "By 30th September",
        "title": "Director KYC (DIR-3 KYC)",
        "desc": "Mandatory annual verification of DIN credentials for all active directors."
      },
      {
        "badge": "Annual",
        "timeline": "By 31st October",
        "title": "Corporate Tax Return (ITR-6)",
        "desc": "Annual corporate income tax return filing with audited financials under Income Tax Act."
      }
    ]
  },
  "llp-registration": {
    "id": "llp-registration",
    "category": "registrations",
    "categoryLabel": "Company Registrations",
    "icon": "\u2696\ufe0f",
    "badge": "Low Compliance Entity",
    "title": "Limited Liability Partnership (LLP) Registration",
    "tagline": "Enjoy limited liability protection with the operational simplicity of a partnership firm.",
    "timeline": "6 - 8 Days",
    "govtPortal": "Ministry of Corporate Affairs",
    "filingMode": "100% Online Paperless",
    "overview": "A Limited Liability Partnership (LLP) blends the operational flexibility of a partnership with the limited liability shield of a company. Regulated by the LLP Act 2008, LLPs have zero statutory audit obligations if turnover is under \u20b940 Lakhs or capital contribution is under \u20b925 Lakhs.",
    "benefits": [
      {
        "title": "Zero Minimum Audit Burden",
        "desc": "No mandatory statutory audit unless annual turnover exceeds \u20b940 Lakhs or capital exceeds \u20b925 Lakhs."
      },
      {
        "title": "Shield Against Partner Malpractice",
        "desc": "Partners are not personally liable for the unauthorized acts or negligence of other partners."
      },
      {
        "title": "No Dividend Distribution Tax",
        "desc": "Profits distributed to partners are completely exempt from tax in the hands of the individual partners."
      }
    ],
    "documents": [
      "PAN Card & Aadhaar Card of all Designated Partners",
      "Voter ID / Passport / Driving License of Partners",
      "Bank Statement / Electricity Bill (not older than 2 months)",
      "Registered office electricity bill and rent agreement with owner NOC"
    ],
    "steps": [
      {
        "step": "1",
        "title": "Class-3 DSC Acquisition",
        "desc": "Securing digital signature certificates for all designated partners."
      },
      {
        "step": "2",
        "title": "RUN-LLP Name Approval",
        "desc": "Submitting RUN-LLP form for name clearance on the MCA portal."
      },
      {
        "step": "3",
        "title": "FiLLiP Incorporation Form",
        "desc": "Filing Form FiLLiP along with Partner DPIN allotment and address proofs."
      },
      {
        "step": "4",
        "title": "LLP Agreement Execution",
        "desc": "Drafting, stamp paper notarization, and filing Form 3 LLP Agreement within 30 days."
      }
    ],
    "deliverables": [
      "LLP Certificate of Incorporation with LLPIN",
      "Designated Partner Identification Numbers (DPIN)",
      "LLP PAN and TAN",
      "Customized Legal LLP Agreement notarized on State Stamp Paper",
      "MCA Form 3 Approval Acknowledgement"
    ],
    "faqs": [
      {
        "q": "Is a statutory audit mandatory for every LLP?",
        "a": "No! One of the biggest advantages of an LLP over a Private Limited Company is that an audit is NOT mandatory unless the annual turnover exceeds \u20b940 Lakhs OR the total capital contribution exceeds \u20b925 Lakhs."
      },
      {
        "q": "What happens if Form 3 (LLP Agreement) is not filed on time?",
        "a": "The LLP Agreement must be executed and filed in Form 3 within 30 days of incorporation. Delay in filing attracts a penalty of \u20b9100 per day until rectified, which is why CA Pradeep Agarwal's team drafts and files it immediately upon incorporation."
      },
      {
        "q": "Can an LLP raise venture capital funding?",
        "a": "Institutional VCs and angel investors generally avoid investing in LLPs because an LLP cannot issue shares, equity options (ESOPs), or convertible preference shares. If you plan to raise institutional equity, a Private Limited Company is recommended."
      },
      {
        "q": "Can an existing partnership firm be converted into an LLP?",
        "a": "Yes! Under Chapter X and the Second Schedule of the LLP Act 2008, an unregistered or registered partnership firm can be converted into an LLP seamlessly with full tax exemption on asset transfer."
      },
      {
        "q": "What is the tax rate on an LLP in India?",
        "a": "An LLP is taxed at a flat rate of 30% plus 12% surcharge (if total income exceeds \u20b91 Crore) and 4% Health & Education Cess. However, profit share distributed to partners is 100% tax-exempt in the hands of the partners."
      }
    ],
    "detailedOverview": "\n      <p style=\"font-size: 1.1rem; color: var(--primary-950); font-weight: 600; line-height: 1.75;\">\n        A <strong>Limited Liability Partnership (LLP)</strong> is an innovative corporate hybrid regulated by the <strong>Limited Liability Partnership Act 2008</strong>. It uniquely combines the operational simplicity and flexibility of a traditional partnership firm with the limited liability shield and corporate identity of a private limited company.\n      </p>\n      <p>\n        In an LLP, one partner is not responsible or liable for another partner's misconduct, negligence, or unauthorized debts. Unlike a private limited company, an LLP is <strong>completely exempt from mandatory statutory audit</strong> as long as its annual turnover does not exceed <strong>\u20b940 Lakhs</strong> or its capital contribution does not exceed <strong>\u20b925 Lakhs</strong>. This makes it an extraordinarily cost-effective choice for professional practices, agencies, and small commercial businesses.\n      </p>\n      <div style=\"background: var(--surface-50); border-left: 4px solid var(--emerald-500); padding: 1.1rem 1.35rem; border-radius: var(--radius-sm); margin-top: 1.25rem;\">\n        <strong style=\"color: var(--primary-950);\">\u26a1 Key LLP Advantage:</strong>\n        <span style=\"font-size: 0.925rem; color: var(--text-muted); margin-left: 0.35rem;\">\n          Profits distributed to partners are completely tax-free in the hands of the partners (since the LLP pays tax directly), avoiding dividend distribution friction. There are no restrictions on internal partner agreements.\n        </span>\n      </div>\n    ",
    "whoIsItFor": [
      {
        "icon": "\u2696\ufe0f",
        "title": "Professional Services",
        "desc": "Chartered Accountants, lawyers, architects, medical practitioners, and design agencies."
      },
      {
        "icon": "\ud83e\udd1d",
        "title": "Consulting & IT Agencies",
        "desc": "Software service companies, digital marketing agencies, and recruiting firms."
      },
      {
        "icon": "\ud83d\udcbc",
        "title": "Family Businesses",
        "desc": "Small to mid-sized family enterprises seeking limited liability without corporate rigidity."
      },
      {
        "icon": "\ud83c\udfd7\ufe0f",
        "title": "Joint Ventures",
        "desc": "Project-based collaborations between two distinct companies or independent partners."
      }
    ],
    "eligibility": [
      {
        "icon": "\ud83d\udc65",
        "label": "Minimum Partners",
        "value": "2 Designated Partners",
        "desc": "Minimum 2 designated partners required (both can be individuals; no upper cap on total partners)."
      },
      {
        "icon": "\ud83c\uddee\ud83c\uddf3",
        "label": "Resident Status",
        "value": "1 Resident Indian Partner",
        "desc": "At least one designated partner must be a resident of India (\u2265 182 days stay in previous FY)."
      },
      {
        "icon": "\ud83d\udcb0",
        "label": "Capital Contribution",
        "value": "No Minimum Capital",
        "desc": "Partners can contribute any agreed sum (tangible or intangible) as stated in the LLP deed."
      },
      {
        "icon": "\ud83c\udfe2",
        "label": "Registered Premise",
        "value": "Commercial or Residential",
        "desc": "Valid address proof with utility bill < 2 months old and owner No-Objection Certificate."
      }
    ],
    "postCompliances": [
      {
        "badge": "Mandatory",
        "timeline": "Within 30 Days",
        "title": "Filing LLP Agreement (Form 3)",
        "desc": "Crucial requirement: Draft and file the executed LLP Agreement with the ROC on MCA portal."
      },
      {
        "badge": "Annual",
        "timeline": "By 30th May",
        "title": "LLP Annual Return (Form 11)",
        "desc": "Annual return providing details of all partners and management structure to ROC."
      },
      {
        "badge": "Annual",
        "timeline": "By 30th October",
        "title": "Statement of Account & Solvency (Form 8)",
        "desc": "Annual declaration of financial accounts and solvency signed by designated partners."
      },
      {
        "badge": "Annual",
        "timeline": "By 31st July / Oct",
        "title": "Income Tax Return (ITR-5)",
        "desc": "Annual partnership tax return (deadline is 31st October if statutory audit applies)."
      }
    ]
  },
  "one-person-company": {
    "id": "one-person-company",
    "category": "registrations",
    "categoryLabel": "Company Registrations",
    "icon": "\ud83d\udc64",
    "badge": "For Solo Founders",
    "title": "One Person Company (OPC) Registration",
    "tagline": "Complete corporate recognition and limited liability for solo entrepreneurs with 100% ownership.",
    "timeline": "5 - 7 Days",
    "govtPortal": "Ministry of Corporate Affairs",
    "filingMode": "100% Online Paperless",
    "overview": "A One Person Company (OPC) allows a single entrepreneur to own and manage a registered corporate entity under the Companies Act 2013 with limited liability. One nominee director is appointed to ensure uninterrupted business continuity.",
    "benefits": [
      {
        "title": "100% Solo Ownership & Control",
        "desc": "Retain sole executive decision-making power without needing a co-founder or second shareholder."
      },
      {
        "title": "Limited Liability Protection",
        "desc": "Protects your personal wealth and savings from business liabilities, debts, and contract breaches."
      },
      {
        "title": "Seamless Conversion to Pvt Ltd",
        "desc": "Can be effortlessly converted into a Private Limited Company whenever you onboard co-founders or investors."
      }
    ],
    "documents": [
      "PAN Card & Aadhaar Card of the Founder and Nominee Director",
      "Passport size photographs of Founder & Nominee",
      "Bank Statement / Utility Bill of Founder & Nominee (< 2 months)",
      "Registered Office utility bill and Landlord NOC",
      "Written consent of Nominee Director in Form INC-3"
    ],
    "steps": [
      {
        "step": "1",
        "title": "DSC for Founder",
        "desc": "Issuance of Class-3 Digital Signature for the sole director."
      },
      {
        "step": "2",
        "title": "Name Reservation via SPICe+ A",
        "desc": "Reserving a unique name ending with '(OPC) Private Limited'."
      },
      {
        "step": "3",
        "title": "SPICe+ Part B & Nominee Consent",
        "desc": "Filing Part B along with INC-3 Nominee consent and charter e-MOA/AOA."
      },
      {
        "step": "4",
        "title": "COI Grant & Bank Account",
        "desc": "ROC issues Certificate of Incorporation, PAN, TAN, and instant bank account integration."
      }
    ],
    "deliverables": [
      "Certificate of Incorporation (COI) with CIN",
      "Company PAN and TAN",
      "DIN for Sole Director",
      "Class-3 Digital Signature Certificate",
      "Drafted e-MOA, e-AOA, and INC-3 Nominee Endorsement",
      "First Board Resolution for Bank Account"
    ],
    "faqs": [
      {
        "q": "Can an OPC be converted into a Private Limited Company later?",
        "a": "Yes! An OPC can convert into a Private Limited Company voluntarily at any time by simply adding one more director and shareholder and filing Form INC-6."
      },
      {
        "q": "Can a person form more than one One Person Company?",
        "a": "No. Under MCA regulations, a natural person can be a member/director of only ONE One Person Company at any given time, and can act as a nominee in only one OPC."
      },
      {
        "q": "Is an Annual General Meeting (AGM) mandatory for an OPC?",
        "a": "No! Section 96 of the Companies Act 2013 specifically exempts One Person Companies from holding mandatory Annual General Meetings (AGM)."
      },
      {
        "q": "What is the role of the Nominee in an OPC?",
        "a": "The nominee has no active operational role or management rights during the lifetime of the sole member. The nominee only steps into the member's shoes in the event of the member's death or mental incapacity, ensuring seamless perpetual succession."
      }
    ],
    "detailedOverview": "\n      <p style=\"font-size: 1.1rem; color: var(--primary-950); font-weight: 600; line-height: 1.75;\">\n        A <strong>One Person Company (OPC)</strong> is a revolutionary corporate structure introduced under <strong>Section 2(62) of the Companies Act 2013</strong>. It enables solo entrepreneurs, solopreneurs, and independent professionals to operate a full-fledged corporate entity with 100% ownership and complete limited liability protection.\n      </p>\n      <p>\n        Prior to OPCs, individual founders had to rely on sole proprietorships\u2014which offered zero legal separation between personal assets and business liabilities. An OPC solves this by establishing a separate legal identity where the solo founder can enter contracts, purchase assets, and obtain bank credit in the company's name. A nominee director is designated simply to ensure unbroken perpetual succession in the event of the sole director's death or incapacity.\n      </p>\n    ",
    "whoIsItFor": [
      {
        "icon": "\ud83d\udc64",
        "title": "Solopreneurs & Freelancers",
        "desc": "Individual specialists wanting corporate credibility without needing a dummy partner."
      },
      {
        "icon": "\ud83d\udcbb",
        "title": "Solo Tech Developers",
        "desc": "Independent software creators developing micro-SaaS, mobile apps, and digital assets."
      },
      {
        "icon": "\ud83d\udcca",
        "title": "Specialized Consultants",
        "desc": "Management, financial, and marketing consultants servicing corporate enterprise clients."
      },
      {
        "icon": "\ud83e\uddea",
        "title": "Early Stage Innovators",
        "desc": "Founders proving a business model alone before bringing in partners and converting to Pvt Ltd."
      }
    ],
    "eligibility": [
      {
        "icon": "\ud83d\udc64",
        "label": "Sole Member",
        "value": "1 Director & Shareholder",
        "desc": "One individual serves as 100% owner, sole director, and subscriber."
      },
      {
        "icon": "\ud83e\udd1d",
        "label": "Nominee Requirement",
        "value": "1 Designated Nominee",
        "desc": "A nominee must be appointed with written consent (Form INC-3) for succession."
      },
      {
        "icon": "\ud83c\uddee\ud83c\uddf3",
        "label": "Citizenship Criteria",
        "value": "Natural Person (Citizen)",
        "desc": "Must be a natural person and Indian citizen (both resident and non-resident allowed)."
      },
      {
        "icon": "\ud83c\udfe2",
        "label": "Registered Address",
        "value": "Commercial or Home",
        "desc": "Valid Indian premise proof with electricity bill < 2 months old and owner NOC."
      }
    ],
    "postCompliances": [
      {
        "badge": "Mandatory",
        "timeline": "Within 180 Days",
        "title": "Commencement of Business (INC-20A)",
        "desc": "Filing declaration with ROC confirming capital has been deposited into corporate account."
      },
      {
        "badge": "Mandatory",
        "timeline": "Within 30 Days",
        "title": "First Auditor Appointment (ADT-1)",
        "desc": "Statutory auditor appointment by sole director for mandatory annual financial audits."
      },
      {
        "badge": "Annual",
        "timeline": "Within 180 Days of FY",
        "title": "Filing Financial Statements (AOC-4)",
        "desc": "Submission of balance sheet and profit & loss statement to the Registrar of Companies."
      },
      {
        "badge": "Annual",
        "timeline": "By 29th November",
        "title": "Abridged Annual Return (MGT-7A)",
        "desc": "Simplified annual return designed specifically for One Person Companies."
      }
    ]
  },
  "public-limited-company": {
    "id": "public-limited-company",
    "category": "registrations",
    "categoryLabel": "Company Registrations",
    "icon": "\ud83c\udfdb\ufe0f",
    "badge": "Large Enterprise Structure",
    "title": "Public Limited Company Registration",
    "tagline": "Corporate structure suited for large-scale operations, public capital raising, and future IPO listings.",
    "timeline": "10 - 14 Days",
    "govtPortal": "Ministry of Corporate Affairs",
    "filingMode": "100% Online Paperless",
    "overview": "A Public Limited Company requires a minimum of 3 directors and 7 shareholders. It offers the ability to raise public deposits, issue publicly traded shares, and list on stock exchanges (NSE/BSE).",
    "benefits": [
      {
        "title": "Public Equity & Debenture Issues",
        "desc": "Authorized to invite public deposits, issue prospectus, and raise funds through initial public offerings (IPO)."
      },
      {
        "title": "Freely Transferable Shares",
        "desc": "Shares can be freely bought, sold, and traded on capital markets without partner approval restrictions."
      },
      {
        "title": "Institutional Prestige",
        "desc": "Unlocks largest credit lines, enterprise banking facilities, and multinational joint ventures."
      }
    ],
    "documents": [
      "PAN Card & ID Proof of all 3 Directors and 7 Shareholders",
      "Address Proofs of all promoters (< 2 months old)",
      "Registered Office utility bill, rent deed, and owner NOC"
    ],
    "steps": [
      {
        "step": "1",
        "title": "DSCs & DINs",
        "desc": "Obtaining Class-3 DSC for all directors and securing DINs."
      },
      {
        "step": "2",
        "title": "Name Approval",
        "desc": "Applying for corporate name ending with 'Limited' via MCA RUN."
      },
      {
        "step": "3",
        "title": "SPICe+ Part B & Charter Documents",
        "desc": "Comprehensive filing with complex public MOA/AOA clauses."
      },
      {
        "step": "4",
        "title": "Certificate of Commencement of Business",
        "desc": "Filing Form INC-20A with paid-up capital verification."
      }
    ],
    "deliverables": [
      "Certificate of Incorporation (CIN)",
      "Company PAN and TAN",
      "3 Class-3 DSCs",
      "DIN for 3 Directors",
      "Drafted Public MOA and AOA"
    ],
    "faqs": [
      {
        "q": "How many members are required for a Public Limited Company?",
        "a": "A minimum of 7 shareholders and 3 directors are mandatory. There is no upper ceiling on the maximum number of shareholders."
      }
    ]
  },
  "sole-proprietorship": {
    "id": "sole-proprietorship",
    "category": "registrations",
    "categoryLabel": "Company Registrations",
    "icon": "\ud83c\udfea",
    "badge": "Simplest Business Setup",
    "title": "Sole Proprietorship Registration",
    "tagline": "The fastest, most cost-effective way to start a business in India with Udyam and GST certificates.",
    "timeline": "2 - 3 Days",
    "govtPortal": "MSME Udyam & GST Portal",
    "filingMode": "100% Online Paperless",
    "overview": "A Sole Proprietorship is an unincorporated business owned and operated by a single person. It requires no MCA filings and is established through MSME Udyam Registration, GSTIN, and Shop & Establishment license, enabling immediate opening of a Current Bank Account.",
    "benefits": [
      {
        "title": "Fastest 48-Hour Setup",
        "desc": "Start trading and invoicing within 48 to 72 hours with minimal statutory red tape."
      },
      {
        "title": "Minimal Compliance Overhead",
        "desc": "No ROC annual return filings, no board meetings, and no expensive secretarial audits."
      },
      {
        "title": "100% Direct Profit Realization",
        "desc": "Business profits directly belong to the owner and are taxed at individual income tax slab rates."
      }
    ],
    "documents": [
      "PAN Card and Aadhaar Card of Proprietor",
      "Bank Account details / Cancelled Cheque",
      "Registered business address proof (Electricity bill / Rent agreement)"
    ],
    "steps": [
      {
        "step": "1",
        "title": "Udyam Registration",
        "desc": "Filing MSME Udyam portal application for government recognition."
      },
      {
        "step": "2",
        "title": "GSTIN Application",
        "desc": "Filing for GST registration to establish legal entity status."
      },
      {
        "step": "3",
        "title": "Current Bank Account",
        "desc": "Issuing verified CA business profile for zero-balance current account opening."
      }
    ],
    "deliverables": [
      "Official MSME Udyam Registration Certificate",
      "GSTIN Registration Certificate",
      "CA Entity Verification Certificate for Bank Account"
    ],
    "faqs": [
      {
        "q": "Does a proprietorship have a separate PAN card?",
        "a": "No, a sole proprietorship operates under the individual proprietor's PAN card."
      }
    ]
  },
  "partnership-firm": {
    "id": "partnership-firm",
    "category": "registrations",
    "categoryLabel": "Company Registrations",
    "icon": "\ud83e\udd1d",
    "badge": "Traditional Partnership",
    "title": "Partnership Firm Registration & Deed Drafting",
    "tagline": "Legal partnership deed drafting and Registrar of Firms (ROF) registration.",
    "timeline": "4 - 7 Days",
    "govtPortal": "State Registrar of Firms (ROF)",
    "filingMode": "100% Online Paperless",
    "overview": "Governed by the Indian Partnership Act 1932, a partnership firm is formed by two or more individuals agreeing to share business profits and management duties. Easy My Taxes crafts legally sound Partnership Deeds addressing profit ratios, dispute resolution, capital interest, and retirement rules.",
    "benefits": [
      {
        "title": "Customizable Partner Terms",
        "desc": "Profit sharing, management powers, and operational duties can be tailored flexibly in the deed."
      },
      {
        "title": "Separate Business PAN",
        "desc": "The partnership operates with its own distinct Tax PAN card and commercial bank account."
      },
      {
        "title": "Low Administrative Burden",
        "desc": "Exempt from complex corporate governance regulations under the Companies Act."
      }
    ],
    "documents": [
      "PAN Card & ID Proof of all Partners",
      "Electricity Bill / Rent Agreement of Partnership Office with NOC",
      "Passport size photos of all partners"
    ],
    "steps": [
      {
        "step": "1",
        "title": "Deed Drafting",
        "desc": "Comprehensive legal drafting of Partnership Deed by seasoned CAs and legal experts."
      },
      {
        "step": "2",
        "title": "Stamp Duty & Notarization",
        "desc": "Execution on appropriate State Non-Judicial Stamp Paper and public notarization."
      },
      {
        "step": "3",
        "title": "PAN & TAN Allotment",
        "desc": "Securing dedicated NSDL PAN card for the Partnership firm."
      },
      {
        "step": "4",
        "title": "ROF Registration",
        "desc": "Filing Form 1 with the Registrar of Firms for official statutory certificate."
      }
    ],
    "deliverables": [
      "Custom Legal Partnership Deed on Non-Judicial Stamp Paper",
      "Partnership Firm Permanent Account Number (PAN)",
      "Firm TAN Allotment",
      "Registrar of Firms (ROF) Acknowledgement"
    ],
    "faqs": [
      {
        "q": "Is registration with Registrar of Firms (ROF) mandatory?",
        "a": "Unregistered firms can operate, but registering with ROF is highly advised to enable the firm to file civil suits against defaulting third parties."
      }
    ]
  },
  "startup-india": {
    "id": "startup-india",
    "category": "registrations",
    "categoryLabel": "Company Registrations",
    "icon": "\u2b50",
    "badge": "DPIIT & 80-IAC Exemptions",
    "title": "Startup India Recognition & 80-IAC Tax Exemption",
    "tagline": "Unlock 3 consecutive years of 100% tax holiday, angel tax shields, and fast-track IP patents.",
    "timeline": "7 - 12 Days",
    "govtPortal": "DPIIT Startup India Portal",
    "filingMode": "100% Online Paperless",
    "overview": "The Startup India initiative by the Government of India provides certified startups with monumental tax exemptions under Section 80-IAC of the Income Tax Act, 80% rebate on patent filings, exemption from angel tax under Section 56(2)(viib), and self-certification under 6 environmental and 3 labor laws.",
    "benefits": [
      {
        "title": "3-Year 100% Income Tax Holiday",
        "desc": "Section 80-IAC certificate allows startups to choose 3 consecutive years of zero tax liability out of their first 10 years."
      },
      {
        "title": "Section 56 Angel Tax Exemption",
        "desc": "Accept capital from angel investors and syndicates at high valuation without punitive tax notices."
      },
      {
        "title": "Fast-Track Patents & 80% Rebate",
        "desc": "Massive 80% government subsidy on Patent filing fees and 50% subsidy on Trademark filings."
      }
    ],
    "documents": [
      "Certificate of Incorporation (Pvt Ltd or LLP)",
      "Company Pitch Deck explaining innovation and scalability",
      "Working website, mobile app demo, or product prototype link",
      "Audited Financial Statements / Projections"
    ],
    "steps": [
      {
        "step": "1",
        "title": "DPIIT Profile Creation",
        "desc": "Drafting business model narrative highlighting innovation, scalability, and job creation."
      },
      {
        "step": "2",
        "title": "Recognition Certificate",
        "desc": "Filing DPIIT application and receiving official Startup India Recognition Number."
      },
      {
        "step": "3",
        "title": "Section 80-IAC Application",
        "desc": "Preparing Inter-Ministerial Board (IMB) pitch document for 100% income tax exemption."
      },
      {
        "step": "4",
        "title": "Seed Fund Scheme Access",
        "desc": "Guiding application for Startup India Seed Fund Scheme (SISFS) grants up to \u20b950 Lakhs."
      }
    ],
    "deliverables": [
      "Official DPIIT Startup Recognition Certificate",
      "Startup India Dashboard Credentials & Investor Access",
      "Form 80-IAC Tax Exemption Submission Dossier",
      "Fast-track Patent / Trademark Facilitator Endorsement"
    ],
    "faqs": [
      {
        "q": "Can an existing firm apply for Startup India?",
        "a": "Yes, any Private Limited Company or LLP incorporated within the last 10 years with turnover under \u20b9100 Crore can apply."
      }
    ]
  },
  "startup": {
    "id": "startup",
    "category": "registrations",
    "categoryLabel": "Company Registrations",
    "icon": "\ud83d\udca1",
    "badge": "Founder Launchpad",
    "title": "Startup Entity Registration & Mentorship",
    "tagline": "End-to-end founder suite: incorporation, founder agreement, ESOP policy & cap table setup.",
    "timeline": "7 - 10 Days",
    "govtPortal": "MCA & DPIIT",
    "filingMode": "100% Online Paperless",
    "overview": "Starting a tech or scalable business requires more than just ROC filing. Our comprehensive Startup Suite covers Company Incorporation, Co-founder Agreements with reverse vesting schedules, ESOP policy design, and Cap Table structuring led by CA Pradeep Agarwal.",
    "benefits": [
      {
        "title": "Ironclad Co-Founder Agreements",
        "desc": "Prevent boardroom disputes with legally enforceable equity vesting, IP assignment, and exit clauses."
      },
      {
        "title": "ESOP Pool Creation",
        "desc": "Attract top-tier tech talent by setting up 10%\u201315% employee stock ownership plans compliant with corporate law."
      },
      {
        "title": "Seed Round Readiness",
        "desc": "Full corporate compliance due-diligence package tailored for institutional Angel and VC diligence."
      }
    ],
    "documents": [
      "Founder PAN and Aadhaar proofs",
      "Office address utility bill and NOC",
      "Cap table allocation notes and vesting terms"
    ],
    "steps": [
      {
        "step": "1",
        "title": "Incorporate Pvt Ltd",
        "desc": "Fast-track SPICe+ MCA filing with startup name clearance."
      },
      {
        "step": "2",
        "title": "Founder Agreements",
        "desc": "Drafting IP assignment and 4-year vesting with 1-year cliff."
      },
      {
        "step": "3",
        "title": "DPIIT Startup India",
        "desc": "Securing DPIIT Certificate and tax exemption eligibility."
      }
    ],
    "deliverables": [
      "Private Limited COI, PAN, TAN & Bank Integration",
      "Co-Founders Agreement & IP Assignment Deed",
      "ESOP Policy Master Framework",
      "DPIIT Startup India Certification"
    ],
    "faqs": [
      {
        "q": "What is reverse vesting for co-founders?",
        "a": "Reverse vesting ensures that co-founders earn their equity over a 3\u20134 year period, protecting the startup if a founder leaves prematurely."
      }
    ]
  },
  "nidhi-company": {
    "id": "nidhi-company",
    "category": "registrations",
    "categoryLabel": "Company Registrations",
    "icon": "\ud83d\udcb0",
    "badge": "Community Mutual Benefit",
    "title": "Nidhi Company Registration (NDH-1)",
    "tagline": "Start a non-banking mutual benefit finance company to accept deposits and lend to members.",
    "timeline": "10 - 15 Days",
    "govtPortal": "Ministry of Corporate Affairs",
    "filingMode": "100% Online Paperless",
    "overview": "A Nidhi Company is a specialized public entity recognized under Section 406 of the Companies Act 2013. Its sole objective is cultivating the habit of thrift and savings among its members, receiving deposits, and lending exclusively to members against collateral (gold, property, deposits) without needing RBI NBFC license approval.",
    "benefits": [
      {
        "title": "No RBI NBFC Approval Needed",
        "desc": "Exempt from the stringent \u20b910 Crore net-worth license requirements applicable to regular NBFCs."
      },
      {
        "title": "Accept Deposits & Earn Interest",
        "desc": "Empowered to accept fixed, recurring, and savings deposits from registered members at attractive rates."
      },
      {
        "title": "Secured Lending Authority",
        "desc": "Authorized to disburse secured micro-loans against gold, fixed deposits, and immovable property."
      }
    ],
    "documents": [
      "PAN Card & Aadhaar Proof of minimum 3 Directors and 7 Shareholders",
      "Bank Statement & Photos of all promoters",
      "Registered Office proof with Landlord NOC"
    ],
    "steps": [
      {
        "step": "1",
        "title": "DSC & DIN Allotment",
        "desc": "Obtaining digital credentials for directors."
      },
      {
        "step": "2",
        "title": "SPICe+ Public Filing",
        "desc": "Incorporating as public limited company with Nidhi mutual benefit objectives."
      },
      {
        "step": "3",
        "title": "NDH-4 Filing",
        "desc": "Applying for declaration as an approved Nidhi Company with the Central Government."
      }
    ],
    "deliverables": [
      "Certificate of Incorporation with CIN",
      "Company PAN, TAN & DINs",
      "Specialized Nidhi Rules compliant MOA/AOA",
      "Draft Share Certificate and Member Passbook templates"
    ],
    "faqs": [
      {
        "q": "Can a Nidhi Company lend to non-members?",
        "a": "No, by law a Nidhi Company can only borrow from and lend to its registered members."
      }
    ]
  },
  "microfinance-company": {
    "id": "microfinance-company",
    "category": "registrations",
    "categoryLabel": "Company Registrations",
    "icon": "\ud83e\ude99",
    "badge": "Financial Inclusion Entity",
    "title": "Microfinance Company Registration (Section 8)",
    "tagline": "Legally lend small business loans and personal credit to underserved communities without RBI NBFC hurdle.",
    "timeline": "15 - 20 Days",
    "govtPortal": "MCA & Reserve Bank of India",
    "filingMode": "100% Online Paperless",
    "overview": "Starting a Section 8 Microfinance institution allows entrepreneurs to provide collateral-free loans up to \u20b950,000 for small rural/urban enterprises and women groups. Operating under the central Section 8 regulatory shelter, it requires significantly lower capital than standard commercial NBFCs.",
    "benefits": [
      {
        "title": "Exemption from \u20b910 Cr Net Owned Fund",
        "desc": "Avoid the massive capital adequacy requirement mandated for commercial NBFC-MFIs."
      },
      {
        "title": "Societal Impact & Donations",
        "desc": "Eligible for government grants, CSR donor capital, and philanthropic micro-credit funds."
      },
      {
        "title": "Official MCA Lending License",
        "desc": "Licensed by the Central Government under Section 8 of the Companies Act 2013."
      }
    ],
    "documents": [
      "PAN & Aadhaar of all Directors and Promoters",
      "Address proofs, ITR acknowledgements, and net-worth certificates",
      "Registered office electricity bill and NOC"
    ],
    "steps": [
      {
        "step": "1",
        "title": "Name Reservation",
        "desc": "Filing MCA RUN with Foundation/Sanstha microfinance title."
      },
      {
        "step": "2",
        "title": "Section 8 License (Form RD-1)",
        "desc": "Securing Central Government License approval for non-profit microfinance."
      },
      {
        "step": "3",
        "title": "Incorporation & SPICe+",
        "desc": "Final COI issuance and corporate bank setup."
      }
    ],
    "deliverables": [
      "Central Government Section 8 License",
      "Certificate of Incorporation (CIN)",
      "Company PAN, TAN & Bank Resolution",
      "Micro-lending policy & member loan agreement templates"
    ],
    "faqs": [
      {
        "q": "What is the maximum loan a Section 8 MFI can disburse?",
        "a": "Section 8 microfinance companies generally disburse loans up to \u20b950,000 for small businesses and \u20b91,25,000 for residential dwelling units."
      }
    ]
  },
  "producer-company": {
    "id": "producer-company",
    "category": "registrations",
    "categoryLabel": "Company Registrations",
    "icon": "\ud83c\udf3e",
    "badge": "Agri & Farmer FPO",
    "title": "Producer Company Registration (FPO)",
    "tagline": "Empowering agricultural producers, farmers, and artisans with collective corporate strength.",
    "timeline": "10 - 15 Days",
    "govtPortal": "Ministry of Corporate Affairs",
    "filingMode": "100% Online Paperless",
    "overview": "A Producer Company (Farmer Producer Organization - FPO) combines cooperative principles with corporate efficiency. Formed by 10 or more primary agricultural producers or 2 or more producer institutions, it qualifies for massive NABARD, SFAC, and 100% agricultural income tax exemptions under Section 80P/80PA.",
    "benefits": [
      {
        "title": "100% Tax Exemption u/s 80PA",
        "desc": "Eligible for 100% deduction on profits derived from marketing agricultural produce for 5 consecutive years."
      },
      {
        "title": "NABARD & Central Grants",
        "desc": "Direct access to SFAC equity grant schemes up to \u20b915 Lakhs and credit guarantee funds."
      },
      {
        "title": "Collective Bargaining Power",
        "desc": "Eliminates predatory middlemen by procuring fertilizers, seeds, and selling harvests at bulk market rates."
      }
    ],
    "documents": [
      "PAN Card & Aadhaar of minimum 10 Farmer Producers / 5 Directors",
      "Khasra/Khatauni or Sarpanch/Patwari Certificate proving primary producer status",
      "Registered Office proof with Landlord NOC"
    ],
    "steps": [
      {
        "step": "1",
        "title": "Farmer Producer Verification",
        "desc": "Verifying primary producer agricultural land and cultivation documents."
      },
      {
        "step": "2",
        "title": "DSC & Name Clearance",
        "desc": "Reserving unique name ending with 'Producer Company Limited'."
      },
      {
        "step": "3",
        "title": "SPICe+ MCA Filing",
        "desc": "Filing with specialized agricultural producer charter clauses."
      }
    ],
    "deliverables": [
      "Producer Company Certificate of Incorporation",
      "Company PAN & TAN",
      "Custom Producer MOA & AOA",
      "NABARD / SFAC Scheme Readiness Guidance"
    ],
    "faqs": [
      {
        "q": "How many members are needed for a Producer Company?",
        "a": "A minimum of 10 primary producers or 2 producer institutions, along with 5 directors, are required."
      }
    ]
  },
  "indian-subsidiary": {
    "id": "indian-subsidiary",
    "category": "registrations",
    "categoryLabel": "Company Registrations",
    "icon": "\ud83c\udf0f",
    "badge": "FDI & Foreign MNC Setup",
    "title": "Indian Subsidiary Registration for Foreign Companies",
    "tagline": "Launch 100% foreign-owned Indian operations under RBI Automatic Route with full FEMA compliance.",
    "timeline": "10 - 15 Days",
    "govtPortal": "MCA, RBI FIRMS & DGFT",
    "filingMode": "100% Online Paperless",
    "overview": "Global companies expanding to the vibrant Indian market can set up a Wholly Owned Subsidiary (WOS). Under the Automatic Route, up to 100% Foreign Direct Investment (FDI) is permitted in most sectors without prior government approval. Easy My Taxes handles MCA incorporation, apostilled document verification, RBI FIRMS portal filings, and Form FC-GPR equity allotment.",
    "benefits": [
      {
        "title": "100% Foreign Equity Ownership",
        "desc": "The foreign parent company can own 99.99% to 100% of share capital under RBI Automatic Route."
      },
      {
        "title": "Independent Indian Legal Entity",
        "desc": "Full authority to sign commercial contracts, hire local Indian engineering talent, and invoice clients in INR."
      },
      {
        "title": "Repatriation of Profits",
        "desc": "Profits and dividends can be smoothly repatriated to the foreign parent company post-tax with Form 15CA/15CB."
      }
    ],
    "documents": [
      "Certificate of Incorporation & Charter Documents of the Foreign Parent Company (Apostilled/Consularized)",
      "Foreign Parent Board Resolution authorizing Indian Subsidiary setup and designated nominee",
      "Passport and address proof of Foreign Director (Apostilled)",
      "PAN and Aadhaar of at least 1 Indian Resident Director",
      "Indian Registered Office utility bill and NOC"
    ],
    "steps": [
      {
        "step": "1",
        "title": "Apostille & Documentation",
        "desc": "Assisting parent company with notarization and apostilling in home country (Hague Convention)."
      },
      {
        "step": "2",
        "title": "SPICe+ MCA Incorporation",
        "desc": "Reserving corporate name and filing incorporation forms with MCA."
      },
      {
        "step": "3",
        "title": "FDI Inward Remittance",
        "desc": "Parent company remits equity capital to Indian bank account; obtaining FIRC and KYC."
      },
      {
        "step": "4",
        "title": "RBI FIRMS & FC-GPR",
        "desc": "Filing Form FC-GPR on RBI FIRMS portal within 30 days of share allotment."
      }
    ],
    "deliverables": [
      "MCA Certificate of Incorporation with CIN",
      "Company PAN, TAN & IEC (Import Export Code)",
      "RBI Single Master Form (SMF) & Form FC-GPR filing acknowledgement",
      "Charter e-MOA & e-AOA tailored for foreign multinational governance"
    ],
    "faqs": [
      {
        "q": "Is an Indian resident director mandatory?",
        "a": "Yes, under Section 149(3) of the Companies Act, at least one director must have stayed in India for at least 182 days during the financial year."
      },
      {
        "q": "What is the timeline for RBI FDI compliance?",
        "a": "After the foreign remittance arrives, shares must be allotted within 60 days, and Form FC-GPR must be reported on the RBI FIRMS portal within 30 days of allotment."
      }
    ]
  },
  "foreign-subsidiary": {
    "id": "foreign-subsidiary",
    "category": "registrations",
    "categoryLabel": "Company Registrations",
    "icon": "\ud83c\udf10",
    "badge": "Global Expansion",
    "title": "Foreign Subsidiary & Branch Office Setup",
    "tagline": "Establish Branch Offices (BO), Liaison Offices (LO), or Project Offices in India with RBI clearance.",
    "timeline": "3 - 6 Weeks",
    "govtPortal": "Reserve Bank of India (RBI) & MCA",
    "filingMode": "100% Online Paperless",
    "overview": "For international enterprises that prefer extending their overseas entity into India without creating a separate subsidiary, setting up a Branch Office (BO) or Liaison Office (LO) under Section 380 of the Companies Act and FEMA regulations provides a direct operational vehicle approved by Authorized Dealer (AD) Category-I Banks and RBI.",
    "benefits": [
      {
        "title": "Direct Parent Representation",
        "desc": "Acts as an official legal extension of the overseas parent company in India."
      },
      {
        "title": "Export/Import & Professional Services",
        "desc": "Branch offices can render technical consulting, conduct research, and promote trade ties."
      },
      {
        "title": "Smooth Repatriation",
        "desc": "Net profits earned by Indian branch can be remitted overseas net of applicable taxes."
      }
    ],
    "documents": [
      "Parent Company Certificate of Incorporation & By-laws (Apostilled)",
      "Audited Balance Sheets of Parent Company for last 5 years (for BO) or 3 years (for LO)",
      "Banker's Report from the Parent Company's overseas bank",
      "Power of Attorney in favor of Indian authorized representative"
    ],
    "steps": [
      {
        "step": "1",
        "title": "AD Bank & RBI Filing",
        "desc": "Submitting Form FNC through designated Authorized Dealer (AD) Bank to the RBI."
      },
      {
        "step": "2",
        "title": "RBI Approval & UIN",
        "desc": "Securing Unique Identification Number (UIN) and approval letter from RBI."
      },
      {
        "step": "3",
        "title": "MCA Form FC-1",
        "desc": "Registering foreign entity with ROC in Form FC-1 within 30 days of establishment."
      }
    ],
    "deliverables": [
      "RBI Approval Letter & Unique Identification Number (UIN)",
      "ROC Certificate of Foreign Company Registration (FCR)",
      "Indian PAN & TAN for Branch/Liaison Office",
      "Annual Activity Certificate (AAC) framework"
    ],
    "faqs": [
      {
        "q": "Can a Liaison Office generate commercial revenue in India?",
        "a": "No, a Liaison Office (LO) is only permitted to undertake liaison activities and market research. To conduct commercial trade or billing, a Branch Office or Indian Subsidiary must be used."
      }
    ]
  },
  "foreign-company": {
    "id": "foreign-company",
    "category": "registrations",
    "categoryLabel": "Company Registrations",
    "icon": "\u2708\ufe0f",
    "badge": "FEMA & Overseas Entity",
    "title": "Foreign Company Business Setup in India",
    "tagline": "Strategic cross-border entry, transfer pricing, and statutory FEMA compliance for international enterprises.",
    "timeline": "2 - 4 Weeks",
    "govtPortal": "RBI, MCA & Tax Department",
    "filingMode": "100% Online Paperless",
    "overview": "Navigating Indian regulatory compliance for foreign businesses requires deep expertise in corporate law, Bilateral Double Tax Avoidance Agreements (DTAA), Equalization Levy, and Transfer Pricing. CA Pradeep Agarwal provides comprehensive foreign enterprise setup, directorship representation, and permanent establishment advisory.",
    "benefits": [
      {
        "title": "Avoid Permanent Establishment (PE) Risk",
        "desc": "Structure overseas contracts and operations to eliminate unintended corporate PE tax exposure in India."
      },
      {
        "title": "DTAA Withholding Tax Optimization",
        "desc": "Leverage favorable tax treaties to minimize withholding tax on royalties, technical service fees (FTS), and dividends."
      },
      {
        "title": "End-to-End Corporate Governance",
        "desc": "Full secretarial, FEMA, and audit maintenance by senior Chartered Accountants."
      }
    ],
    "documents": [
      "Parent Certificate of Good Standing (Apostilled)",
      "Corporate Resolution authorizing India operations",
      "Board KYC and UBO (Ultimate Beneficial Owner) disclosures"
    ],
    "steps": [
      {
        "step": "1",
        "title": "Feasibility & PE Diagnostic",
        "desc": "Analyzing corporate business model under Indian Income Tax Act and applicable DTAA."
      },
      {
        "step": "2",
        "title": "Entity Structuring",
        "desc": "Selecting between WOS, Joint Venture, Branch Office, or LLP."
      },
      {
        "step": "3",
        "title": "Execution & Government Filings",
        "desc": "Fast-track MCA, RBI, and tax department approvals."
      }
    ],
    "deliverables": [
      "Comprehensive Foreign Entry Legal Opinion",
      "Entity Incorporation / Establishment Dossier",
      "FEMA & RBI Regulatory Filings (FIRMS / FLA)",
      "Transfer Pricing Study & Policy Framework"
    ],
    "faqs": [
      {
        "q": "What is the tax rate on foreign companies in India?",
        "a": "Foreign companies without domestic incorporation pay 35% (reduced from 40% in recent budget) plus applicable surcharge and cess."
      }
    ]
  },
  "ngo": {
    "id": "ngo",
    "category": "registrations",
    "categoryLabel": "Company Registrations",
    "icon": "\ud83c\udf31",
    "badge": "Non-Profit & Philanthropy",
    "title": "NGO Registration (Section 8 Company & 12A/80G)",
    "tagline": "Establish a recognized non-profit organization with 12A tax exemption and 80G donor deductions.",
    "timeline": "10 - 15 Days",
    "govtPortal": "MCA & Income Tax Department",
    "filingMode": "100% Online Paperless",
    "overview": "A Section 8 Company is India's most credible NGO structure. Formed for promoting science, art, education, charity, social welfare, and environmental protection, it requires a Central Government Section 8 license and enables nationwide operations, corporate CSR funding, and tax-free donations under Section 12A & 80G.",
    "benefits": [
      {
        "title": "50% Tax Deduction for Donors (80G)",
        "desc": "Encourage philanthropic donations by granting donors official 50% income tax deduction certificates."
      },
      {
        "title": "Eligible for Corporate CSR Funding",
        "desc": "Pre-requisite legal vehicle to receive corporate CSR grants from Fortune 500 and Indian companies."
      },
      {
        "title": "National Operating Footprint",
        "desc": "Unlike localized societies or trusts, a Section 8 company can operate seamlessly across all Indian states."
      }
    ],
    "documents": [
      "PAN & Aadhaar Cards of minimum 2 Directors",
      "Address proofs of promoters (< 2 months old)",
      "Proposed non-profit project plan and 3-year estimated budget",
      "Registered office electricity bill and Landlord NOC"
    ],
    "steps": [
      {
        "step": "1",
        "title": "Name Clearance",
        "desc": "Reserving non-profit name ending with Foundation, Sanstha, Association, or Society."
      },
      {
        "step": "2",
        "title": "Section 8 License (Form RD-1)",
        "desc": "Obtaining Central Government approval on non-profit charter and objects."
      },
      {
        "step": "3",
        "title": "SPICe+ Incorporation",
        "desc": "Securing Certificate of Incorporation, PAN, and TAN from ROC."
      },
      {
        "step": "4",
        "title": "12A & 80G Filing (Form 10A)",
        "desc": "Applying on Income Tax portal for provisional 3-year 12A & 80G certificates."
      }
    ],
    "deliverables": [
      "Central Government Section 8 License",
      "Certificate of Incorporation (CIN)",
      "NGO PAN & TAN Allotment",
      "Provisional 12A & 80G Income Tax Registration",
      "CSR-1 Filing on MCA Portal for CSR eligibility"
    ],
    "faqs": [
      {
        "q": "Can directors in a Section 8 Company take a salary?",
        "a": "Directors can receive reasonable remuneration for professional services rendered to the company, provided it is sanctioned in the company's Articles and approved by the board."
      }
    ]
  },
  "pvt-ltd-compliance": {
    "id": "pvt-ltd-compliance",
    "category": "compliance",
    "categoryLabel": "Compliance",
    "icon": "\ud83d\udcca",
    "badge": "Annual ROC Mandatory",
    "title": "Private Limited Company Annual ROC Compliance",
    "tagline": "Maintain good standing and avoid \u20b9100/day per form penalties with timely AOC-4, MGT-7 & board meetings.",
    "timeline": "Annual Retainer / Per Filing",
    "govtPortal": "Ministry of Corporate Affairs (MCA)",
    "filingMode": "100% Online Paperless",
    "overview": "Every registered Private Limited Company must complete mandatory annual compliances under the Companies Act 2013 regardless of turnover or business activity. Easy My Taxes takes full charge of preparing Financial Statements, drafting Director's Report, filing Form AOC-4 (Financials) and Form MGT-7/7A (Annual Return), and maintaining statutory secretarial registers.",
    "benefits": [
      {
        "title": "Zero \u20b9100/Day Delay Penalties",
        "desc": "MCA levies strict daily late fees of \u20b9100 per day per form with no upper ceiling; our timely filings shield you completely."
      },
      {
        "title": "Director Disqualification Protection",
        "desc": "Failure to file for 3 consecutive years leads to automatic director disqualification under Section 164(2)."
      },
      {
        "title": "Clean Due Diligence for Investors",
        "desc": "Up-to-date MCA master data is mandatory when raising equity, applying for bank loans, or securing government tenders."
      }
    ],
    "documents": [
      "Audited Financial Statements (Balance Sheet, P&L, Notes to Accounts)",
      "Statutory Auditor's Report (Form ADT-1 / Independent Auditor's Report)",
      "Board of Directors' Report & Notice of AGM",
      "DSC of at least one Director"
    ],
    "steps": [
      {
        "step": "1",
        "title": "Books Finalization & Audit",
        "desc": "Finalizing Tally/Zoho books and completing statutory audit."
      },
      {
        "step": "2",
        "title": "Secretarial Drafting",
        "desc": "Preparing AGM Notice, Board Resolutions, and Director's Report."
      },
      {
        "step": "3",
        "title": "Filing Form AOC-4",
        "desc": "Submitting audited financial statements within 30 days of AGM."
      },
      {
        "step": "4",
        "title": "Filing Form MGT-7",
        "desc": "Submitting annual return of shareholding and directors within 60 days of AGM."
      }
    ],
    "deliverables": [
      "MCA Form AOC-4 & MGT-7 Challan & Acknowledgement",
      "Complete Secretarial Dossier (AGM Minutes, Board Resolutions, Directors' Report)",
      "Statutory Registers (Members, Directors, Charges)",
      "Certificate of Good Corporate Governance"
    ],
    "faqs": [
      {
        "q": "Is annual compliance mandatory even if my company had ZERO revenue?",
        "a": "YES. Even if your company had zero transactions, zero sales, or is completely inactive, filing Form AOC-4 and Form MGT-7 is legally mandatory under the Companies Act 2013. Failure to file attracts \u20b9100/day fine per form and leads to director disqualification."
      },
      {
        "q": "What is the penalty for delayed filing of Form AOC-4 and MGT-7?",
        "a": "The Ministry of Corporate Affairs imposes a mandatory statutory late fee of \u20b9100 per day for each delayed form. Since there is no statutory ceiling, a delay of one year can accumulate over \u20b972,000 in government fines alone."
      },
      {
        "q": "Can Easy My Taxes assist with appointing a Statutory Auditor?",
        "a": "Yes! Under Section 139 of the Companies Act 2013, every company must appoint an independent Chartered Accountant in practice as its Statutory Auditor. CA Pradeep Agarwal's firm provides statutory audit and tax audit certification."
      },
      {
        "q": "What is the deadline for holding the Annual General Meeting (AGM)?",
        "a": "The AGM must be held within 6 months from the date of closing of the financial year (i.e. by 30th September each year, except for the first AGM which can be held within 9 months of the first FY close)."
      }
    ],
    "detailedOverview": "\n      <p style=\"font-size: 1.1rem; color: var(--primary-950); font-weight: 600; line-height: 1.75;\">\n        Annual corporate compliance is mandatory for every <strong>Private Limited Company</strong> registered in India under the <strong>Companies Act 2013</strong>. Regardless of whether your company conducted multi-crore business operations or remained pre-revenue (nil transactions), you must statutorily file annual financial statements and annual returns with the Registrar of Companies (ROC).\n      </p>\n      <p>\n        Defaulting on annual compliance attracts severe consequences: daily late filing penalties of <strong>\u20b9100 per day per form with no upper cap</strong>, director disqualification for up to 5 years under Section 164(2), DIN deactivation, and risk of company strike-off by the ROC. Easy My Taxes, led by Senior Chartered Accountant <strong>CA Pradeep Agarwal</strong>, provides complete retainer management\u2014including AGM documentation, statutory audit coordination, and timely ROC e-filing.\n      </p>\n    ",
    "whoIsItFor": [
      {
        "icon": "\ud83c\udfe2",
        "title": "Active Private Limited Companies",
        "desc": "Companies with commercial operations requiring statutory audit and annual ROC filing."
      },
      {
        "icon": "\ud83d\udca4",
        "title": "Dormant & Nil Companies",
        "desc": "Pre-revenue or inactive companies that must file mandatory annual returns to prevent director bans."
      },
      {
        "icon": "\ud83d\udcc8",
        "title": "Fundraising Startups",
        "desc": "Startups preparing for institutional VC due diligence, bank loan approvals, and clean audits."
      },
      {
        "icon": "\ud83d\udc65",
        "title": "Company Directors",
        "desc": "Individual directors safeguarding their DIN status from MCA disqualification and legal liability."
      }
    ],
    "eligibility": [
      {
        "icon": "\ud83c\udfe2",
        "label": "Active CIN Status",
        "value": "Company in Good Standing",
        "desc": "The company's status on the MCA V3 portal must be 'Active' and not marked struck-off."
      },
      {
        "icon": "\ud83d\udd11",
        "label": "Active Director DINs",
        "value": "DIR-3 KYC Completed",
        "desc": "At least two directors must hold active DINs with updated annual KYC verification."
      },
      {
        "icon": "\ud83d\udcda",
        "label": "Books of Accounts",
        "value": "Financial Statements Finalized",
        "desc": "Balance sheet, Profit & Loss statement, and trial balance ready for statutory audit review."
      },
      {
        "icon": "\ud83d\udd8b\ufe0f",
        "label": "Digital Signatures",
        "value": "Active Class-3 DSC",
        "desc": "Valid Class-3 Digital Signatures of at least one director and certifying Chartered Accountant."
      }
    ],
    "postCompliances": [
      {
        "badge": "Annual",
        "timeline": "Within 30 Days of AGM",
        "title": "Filing Form AOC-4 (Financials)",
        "desc": "Submit audited Balance Sheet, Profit & Loss Account, Director's Report, and Auditor's Report to MCA."
      },
      {
        "badge": "Annual",
        "timeline": "Within 60 Days of AGM",
        "title": "Filing Form MGT-7 (Annual Return)",
        "desc": "Submit annual return detailing shareholding pattern, indebtedness, and directorship changes."
      },
      {
        "badge": "Annual",
        "timeline": "By 30th September",
        "title": "Director KYC (DIR-3 KYC)",
        "desc": "Mandatory annual KYC filing for all company directors to avoid a \u20b95,000 deactivation penalty."
      },
      {
        "badge": "Annual",
        "timeline": "By 30th June",
        "title": "Form DPT-3 (Return of Deposits)",
        "desc": "Mandatory filing of outstanding loans, advances, or receipts not considered deposits."
      },
      {
        "badge": "Corporate",
        "timeline": "Quarterly & Annual",
        "title": "Statutory Board & AGM Minutes",
        "desc": "Drafting and formalizing minutes of at least 4 board meetings and the Annual General Meeting."
      }
    ]
  },
  "llp-annual-filing": {
    "id": "llp-annual-filing",
    "category": "compliance",
    "categoryLabel": "Compliance",
    "icon": "\u2696\ufe0f",
    "badge": "Form 11 & Form 8",
    "title": "LLP Annual Filing (Form 11 & Form 8)",
    "tagline": "Avoid \u20b9100/day penal charges with timely submission of Annual Return and Solvency Statement.",
    "timeline": "By 30th May & 30th Oct Annually",
    "govtPortal": "Ministry of Corporate Affairs",
    "filingMode": "100% Online Paperless",
    "overview": "All Limited Liability Partnerships (LLPs) must file two statutory forms every year with the MCA: Form 11 (Annual Return) on or before 30th May and Form 8 (Statement of Account & Solvency) on or before 30th October. Failure to file incurs a non-waivable statutory fine of \u20b9100 per day per form.",
    "benefits": [
      {
        "title": "Prevent Enormous MCA Fines",
        "desc": "A 6-month delay in Form 8 and Form 11 creates an automatic \u20b936,000+ government penalty."
      },
      {
        "title": "Active Partner Good Standing",
        "desc": "Keeps designated partner DPINs active and free from legal scrutiny."
      },
      {
        "title": "Verified Financial Solvency",
        "desc": "Essential for corporate credit cards, working capital bank loans, and supplier credit."
      }
    ],
    "documents": [
      "Financial Accounts (P&L and Balance Sheet of LLP)",
      "Details of Partner Contributions and Turnover",
      "Class-3 DSC of Designated Partner"
    ],
    "steps": [
      {
        "step": "1",
        "title": "Form 11 Preparation",
        "desc": "Reconciling partner details and filing Annual Return by 30th May."
      },
      {
        "step": "2",
        "title": "Form 8 Preparation",
        "desc": "Compiling Statement of Account & Solvency signed by partners."
      },
      {
        "step": "3",
        "title": "MCA Upload & Challan",
        "desc": "Uploading to MCA portal with DSC and generating official SRN receipt."
      }
    ],
    "deliverables": [
      "Form 11 MCA Filing Receipt (SRN)",
      "Form 8 MCA Filing Receipt (SRN)",
      "Statement of Solvency certified copy"
    ],
    "faqs": [
      {
        "q": "Is tax audit mandatory for all LLPs?",
        "a": "No, an LLP requires audit only if turnover exceeds \u20b940 Lakhs or partner capital contribution exceeds \u20b925 Lakhs."
      }
    ]
  },
  "director-kyc": {
    "id": "director-kyc",
    "category": "compliance",
    "categoryLabel": "Compliance",
    "icon": "\ud83c\udd94",
    "badge": "Annual Mandatory",
    "title": "Director KYC Filing (DIR-3 KYC / Web KYC)",
    "tagline": "Keep your DIN active and avoid \u20b95,000 government deactivation penalty before 30th September.",
    "timeline": "Same Day (24 Hours)",
    "govtPortal": "Ministry of Corporate Affairs",
    "filingMode": "100% Online Paperless",
    "overview": "Under Rule 12A of the Companies (Appointment and Qualification of Directors) Rules, every individual holding a Director Identification Number (DIN/DPIN) must submit their annual KYC. First-time filings require Form DIR-3 KYC with DSC, while subsequent filings are completed via DIR-3 KYC Web with mobile and email OTPs.",
    "benefits": [
      {
        "title": "Avoid Flat \u20b95,000 Late Fee",
        "desc": "Missing the 30th September deadline attracts an instant non-negotiable MCA penalty of \u20b95,000 per DIN."
      },
      {
        "title": "Prevent DIN Deactivation",
        "desc": "A deactivated DIN stops you from signing any corporate filings, incorporating new companies, or resigning."
      },
      {
        "title": "Instant 15-Minute Process",
        "desc": "Our digital verification team verifies your Aadhaar, PAN, and passport details seamlessly."
      }
    ],
    "documents": [
      "PAN Card and Aadhaar Card of Director",
      "Indian Mobile Number & Active Email Address for OTPs",
      "Passport (Mandatory if holding foreign citizenship)"
    ],
    "steps": [
      {
        "step": "1",
        "title": "Data Verification",
        "desc": "Checking existing MCA records and mobile/email linkage."
      },
      {
        "step": "2",
        "title": "OTP Generation",
        "desc": "Triggering real-time mobile and email OTPs from MCA portal."
      },
      {
        "step": "3",
        "title": "Filing & SRN Receipt",
        "desc": "Submitting DIR-3 Web KYC and issuing approved MCA receipt."
      }
    ],
    "deliverables": [
      "MCA DIR-3 KYC Approved Challan",
      "DIN Active Status Verification Report"
    ],
    "faqs": [
      {
        "q": "I am no longer a director in any company. Do I still need to file DIR-3 KYC?",
        "a": "YES. The statutory requirement applies to the DIN holder as an individual, not to the company. As long as your DIN exists on the MCA database, you must file annual KYC to keep it active."
      },
      {
        "q": "What is the penalty if I miss the 30th September deadline?",
        "a": "If you miss the 30th September statutory cutoff, the MCA automatically deactivates your DIN. To reactivate a deactivated DIN, you must file Form DIR-3 KYC and pay a mandatory government penalty fee of \u20b95,000."
      },
      {
        "q": "What is the difference between DIR-3 KYC Web and DIR-3 KYC e-Form?",
        "a": "DIR-3 KYC Web is a 1-minute OTP-based verification used when all personal details (mobile, email, address) remain identical to the previous filing. The full DIR-3 KYC e-Form (requiring Class-3 DSC and CA certification) is required when you file for the first time or when any personal detail has changed."
      },
      {
        "q": "Can one mobile number or email be used for multiple directors?",
        "a": "No! The MCA strictly mandates that every director must have a unique personal mobile number and unique email ID. The same contact credentials cannot be shared across multiple DINs."
      }
    ],
    "detailedOverview": "\n      <p style=\"font-size: 1.1rem; color: var(--primary-950); font-weight: 600; line-height: 1.75;\">\n        <strong>Director KYC (DIR-3 KYC)</strong> is a mandatory annual regulatory verification required by the Ministry of Corporate Affairs (MCA) under <strong>Rule 12A of the Companies (Appointment and Qualification of Directors) Rules 2014</strong>. Every individual who has been allotted a Director Identification Number (DIN) or Designated Partner Identification Number (DPIN) must complete this verification annually before <strong>30th September</strong>.\n      </p>\n      <p>\n        The rule applies strictly to all DIN holders\u2014regardless of whether you are an active director, disqualified director, or hold a DIN without serving on any active board. If a director fails to file their KYC by the 30th September statutory cutoff, the MCA central database automatically marks their DIN as <strong>'Deactivated due to non-filing of DIR-3 KYC'</strong>. Deactivated DIN holders cannot sign any MCA forms, incorporate companies, or pass board resolutions, and a <strong>statutory regularization fee of \u20b95,000</strong> is levied to reactivate the DIN.\n      </p>\n    ",
    "whoIsItFor": [
      {
        "icon": "\ud83d\udc64",
        "title": "All Active Company Directors",
        "desc": "Directors in Private Limited, Public Limited, or Section 8 companies."
      },
      {
        "icon": "\ud83e\udd1d",
        "title": "Designated Partners in LLPs",
        "desc": "Partners holding a DPIN in active or registered Limited Liability Partnerships."
      },
      {
        "icon": "\ud83d\udca4",
        "title": "Holders of Inactive DINs",
        "desc": "Individuals holding an allotted DIN even if not currently appointed to any active company board."
      },
      {
        "icon": "\ud83c\udf10",
        "title": "Foreign & NRI Directors",
        "desc": "Foreign nationals and NRIs holding an Indian DIN in Indian subsidiaries or joint ventures."
      }
    ],
    "eligibility": [
      {
        "icon": "\ud83d\udd22",
        "label": "Allotted Identifier",
        "value": "Valid 8-Digit DIN",
        "desc": "Active or deactivated Director Identification Number allotted by the MCA."
      },
      {
        "icon": "\ud83d\udcf1",
        "label": "Personal Mobile Number",
        "value": "Unique Mobile OTP",
        "desc": "Personal mobile number belonging directly to the director (unique per DIN)."
      },
      {
        "icon": "\u2709\ufe0f",
        "label": "Personal Email ID",
        "value": "Unique Email OTP",
        "desc": "Personal email address to receive and verify the MCA dual authentication OTP."
      },
      {
        "icon": "\ud83e\udeaa",
        "label": "Identity Documents",
        "value": "PAN & Aadhaar / Passport",
        "desc": "Name, father's name, and date of birth must match exactly between PAN and Aadhaar."
      }
    ],
    "postCompliances": [
      {
        "badge": "Annual",
        "timeline": "By 30th September Annually",
        "title": "Annual Web-KYC Submission",
        "desc": "If no personal details have changed, complete the quick 2-minute web OTP filing annually."
      },
      {
        "badge": "Event-Based",
        "timeline": "Within 30 Days of Change",
        "title": "e-Form DIR-3 KYC (Detail Change)",
        "desc": "If address, phone, or email changes, file full e-Form with digital signature and CA certification."
      }
    ]
  },
  "statutory-audit": {
    "id": "statutory-audit",
    "category": "compliance",
    "categoryLabel": "Compliance",
    "icon": "\ud83d\udd0d",
    "badge": "ICAI Certified Assurance",
    "title": "Statutory Audit & Tax Audit u/s 44AB",
    "tagline": "Independent audit assurance, Form 3CA/3CB and 3CD tax audit reporting by CA Pradeep Agarwal.",
    "timeline": "10 - 20 Days",
    "govtPortal": "Income Tax & MCA Portals",
    "filingMode": "100% Online Paperless",
    "overview": "Under Section 139 of the Companies Act 2013, every company must undergo a statutory financial audit by an independent Chartered Accountant. Additionally, businesses exceeding \u20b91 Crore (or \u20b910 Crore if 95% transactions are digital) and professionals exceeding \u20b950 Lakhs must file a Tax Audit Report in Form 3CA/3CB & Form 3CD under Section 44AB of the Income Tax Act.",
    "benefits": [
      {
        "title": "Shield Against 0.5% Section 271B Penalties",
        "desc": "Failing to conduct tax audit attracts mandatory penalty of 0.5% of turnover (up to \u20b91,50,000)."
      },
      {
        "title": "Identify Hidden Deductions & Tax Leakages",
        "desc": "Our senior audit partners optimize depreciation, expense disallowances, and MAT credits."
      },
      {
        "title": "Total Regulatory Compliance",
        "desc": "Unblemished clean audit reports build formidable credibility with tax authorities and lenders."
      }
    ],
    "documents": [
      "Trial Balance, Profit & Loss Account, and Balance Sheet",
      "General Ledger Excel dumps and Bank Statements",
      "GST Returns (GSTR-9 and GSTR-2B reconciliations)",
      "Fixed Asset registers and inventory valuation sheets"
    ],
    "steps": [
      {
        "step": "1",
        "title": "Audit Planning & Sampling",
        "desc": "Risk assessment, sample voucher testing, and ledger verification."
      },
      {
        "step": "2",
        "title": "Tax Compliance Check",
        "desc": "Verifying TDS deductions, 43B statutory payments, and related-party disclosures."
      },
      {
        "step": "3",
        "title": "Independent Auditor's Report",
        "desc": "Drafting audit opinion and notes forming part of accounts."
      },
      {
        "step": "4",
        "title": "UDIN Generation & Filing",
        "desc": "Signing with official ICAI Unique Document Identification Number (UDIN) and portal upload."
      }
    ],
    "deliverables": [
      "Independent Statutory Auditor's Report with UDIN",
      "Tax Audit Report in Form 3CA/3CB and Form 3CD",
      "Management Representation Letter (MRL)",
      "Internal Financial Controls (IFC) evaluation report"
    ],
    "faqs": [
      {
        "q": "What is the threshold for Tax Audit for businesses?",
        "a": "The general limit is \u20b91 Crore turnover. However, if cash receipts and payments do not exceed 5% of total transactions, the threshold is \u20b910 Crore."
      }
    ]
  },
  "gst-compliance": {
    "id": "gst-compliance",
    "category": "compliance",
    "categoryLabel": "Compliance",
    "icon": "\ud83d\udcd1",
    "badge": "Monthly & Annual",
    "title": "Monthly & Quarterly GST Returns (GSTR-1, 3B & 9)",
    "tagline": "Automated 2B ITC matching, GSTR-1, GSTR-3B filings, and annual reconciliation audits.",
    "timeline": "Monthly Retainer",
    "govtPortal": "GST Portal (GSTN)",
    "filingMode": "100% Online Paperless",
    "overview": "Staying compliant under Goods & Services Tax (GST) requires monthly outward supply reporting in GSTR-1, tax liability clearance in GSTR-3B, and rigorous 100% invoice matching with GSTR-2B. Easy My Taxes safeguards your business against Input Tax Credit (ITC) blocks under Rule 86A and notice demands.",
    "benefits": [
      {
        "title": "100% ITC Reconciliation",
        "desc": "Never lose input tax credit due to vendor non-filing; automated alerts sent to defaulting vendors."
      },
      {
        "title": "Zero Late Fees & E-Way Bill Blocks",
        "desc": "Timely filing ensures uninterrupted generation of e-way bills and prevents portal suspension."
      },
      {
        "title": "Annual GSTR-9 Audit Support",
        "desc": "Full annual audit reconciliation between books, GSTR-1, and GSTR-3B."
      }
    ],
    "documents": [
      "Sales Register with GSTIN, HSN, and Tax Rates",
      "Purchase Register and Expense Invoices",
      "Bank Statements for reconciliation"
    ],
    "steps": [
      {
        "step": "1",
        "title": "Sales Data Compilation",
        "desc": "Compiling B2B invoices and B2C summaries into GSTR-1 by 11th."
      },
      {
        "step": "2",
        "title": "2B ITC Reconciliation",
        "desc": "Auto-matching purchases against GSTR-2B by 14th."
      },
      {
        "step": "3",
        "title": "Challan & GSTR-3B Filing",
        "desc": "Adjusting ITC, generating tax payment challan, and filing 3B by 20th."
      }
    ],
    "deliverables": [
      "Filed GSTR-1 and GSTR-3B Acknowledgement Receipts",
      "Monthly ITC 2B Mismatch & Vendor Follow-up Sheet",
      "GST Liability Summary & Challan Receipts"
    ],
    "faqs": [
      {
        "q": "What is the penalty for late GST return filing?",
        "a": "Late fee is \u20b950 per day (\u20b920 per day for nil returns) plus 18% per annum interest on net cash tax liability."
      }
    ]
  },
  "tds-returns": {
    "id": "tds-returns",
    "category": "compliance",
    "categoryLabel": "Compliance",
    "icon": "\ud83e\uddfe",
    "badge": "Quarterly Deadlines",
    "title": "Quarterly TDS / TCS Return Filing (24Q, 26Q, 27Q)",
    "tagline": "Avoid \u20b9200/day penal charges under Sec 234E and generate Form 16/16A smoothly.",
    "timeline": "Quarterly (July, Oct, Jan, May)",
    "govtPortal": "TRACES & Income Tax Portal",
    "filingMode": "100% Online Paperless",
    "overview": "Entities deducting Tax at Source (TDS) under Section 192 (Salary), 194C (Contractors), 194J (Professional fees), 194I (Rent), or collecting TCS must file quarterly returns on TRACES. Easy My Taxes computes exact monthly tax liabilities, generates challans, and prepares quarterly returns without short-deduction notices.",
    "benefits": [
      {
        "title": "Shield Against \u20b9200/Day Sec 234E Late Fee",
        "desc": "Late filing triggers a compulsory \u20b9200 per day fine until the return is deposited."
      },
      {
        "title": "Instant Form 16 & 16A Generation",
        "desc": "Download digitally signed Part A and Part B certificates directly from TRACES for employees and vendors."
      },
      {
        "title": "Zero Short-Deduction Demand Notices",
        "desc": "Accurate PAN verification ensures no penal 20% higher TDS deduction demands under Section 206AA."
      }
    ],
    "documents": [
      "Monthly TDS Challan Payment Receipts (BSR Code & Challan No)",
      "Vendor / Employee PAN master with payment details",
      "TDS deduction register with applicable sections"
    ],
    "steps": [
      {
        "step": "1",
        "title": "Data Cleansing & Validation",
        "desc": "Running PAN verification through NSDL utility."
      },
      {
        "step": "2",
        "title": "FVU File Generation",
        "desc": "Generating statutory File Validation Utility (.fvu) file."
      },
      {
        "step": "3",
        "title": "Upload & TRACES Sync",
        "desc": "Submitting return and downloading Form 16/16A."
      }
    ],
    "deliverables": [
      "Official Form 24Q / 26Q / 27Q Filing Acknowledgement",
      "Form 16 (Part A & B) for Salaried Employees",
      "Form 16A Certificates for Contractors and Vendors"
    ],
    "faqs": [
      {
        "q": "What are the quarterly due dates for TDS returns?",
        "a": "Q1 (April-June): 31st July; Q2 (July-Sept): 31st October; Q3 (Oct-Dec): 31st January; Q4 (Jan-March): 31st May."
      }
    ]
  },
  "income-tax-filing": {
    "id": "income-tax-filing",
    "category": "compliance",
    "categoryLabel": "Compliance",
    "icon": "\ud83d\udcdd",
    "badge": "AY 2026-27 Compliant",
    "title": "Corporate & Business Income Tax Filing (ITR-5, ITR-6)",
    "tagline": "Statutory ITR filing for Private Limited, LLPs, and Partnerships with loss carry-forward benefits.",
    "timeline": "By 31st October (or 30th Nov for Transfer Pricing)",
    "govtPortal": "Income Tax e-Filing Portal",
    "filingMode": "100% Online Paperless",
    "overview": "Corporate income tax filing requires meticulous computation of Minimum Alternate Tax (MAT), Section 115BAA concessional rates, brought-forward loss set-offs, and depreciation schedules. Easy My Taxes ensures your corporate tax return is audited and e-verified with 100% AIS/TIS alignment.",
    "benefits": [
      {
        "title": "Preserve 8-Year Loss Carry Forward",
        "desc": "Filing on or before statutory due dates is mandatory to carry forward business and capital losses."
      },
      {
        "title": "Optimal Tax Slabs (22% vs 30%)",
        "desc": "Accurate advisory on opting for Section 115BAA 22% tax regime versus standard corporate rates."
      },
      {
        "title": "Scrutiny Protection",
        "desc": "Handled by CA Pradeep Agarwal with exhaustive notes on accounts to eliminate notice risks."
      }
    ],
    "documents": [
      "Audited Financial Statements (Balance Sheet & P&L)",
      "Form 3CD Tax Audit Report",
      "Advance Tax and Self-Assessment Tax Challans",
      "TDS Certificates (Form 26AS & AIS)"
    ],
    "steps": [
      {
        "step": "1",
        "title": "Tax Computation & Deductions",
        "desc": "Reconciling book profit with taxable income."
      },
      {
        "step": "2",
        "title": "Loss & MAT Analysis",
        "desc": "Assessing Section 115JB MAT liability and tax credits."
      },
      {
        "step": "3",
        "title": "ITR-6 JSON Generation & Upload",
        "desc": "Uploading digitally signed ITR-6 on the e-filing portal."
      }
    ],
    "deliverables": [
      "Detailed Corporate Tax Computation Sheet",
      "Official ITR-V Acknowledgment with E-Verification",
      "Form 29B MAT Report (where applicable)"
    ],
    "faqs": [
      {
        "q": "What is the corporate tax rate for AY 2026-27?",
        "a": "Domestic companies opting for Section 115BAA pay a flat base tax rate of 22% plus 10% surcharge and 4% cess (effective rate ~25.17%)."
      }
    ]
  },
  "advance-tax-compliance": {
    "id": "advance-tax-compliance",
    "category": "compliance",
    "categoryLabel": "Compliance",
    "icon": "\ud83d\udcc5",
    "badge": "FY 2026-27 Schedule",
    "title": "Advance Tax Estimation & Payment Advisory",
    "tagline": "Avoid 1% monthly interest under Section 234B & 234C with quarterly tax forecasting.",
    "timeline": "Quarterly (15 June, 15 Sept, 15 Dec, 15 Mar)",
    "govtPortal": "Income Tax NSDL / e-Filing Portal",
    "filingMode": "100% Online Paperless",
    "overview": "If your net income tax liability after TDS exceeds \u20b910,000 in a financial year, you must pay Advance Tax in four quarterly installments: 15% by 15th June, 45% by 15th Sept, 75% by 15th Dec, and 100% by 15th March. We calculate your estimated profits and generate tax payment challans accurately.",
    "benefits": [
      {
        "title": "Zero Section 234C Penal Interest",
        "desc": "Avoid the mandatory 1% simple interest charged per month on installment shortfalls."
      },
      {
        "title": "Accurate Cash Flow Planning",
        "desc": "Spread tax liabilities smoothly across 4 quarters instead of a crippling lump-sum payment in March."
      },
      {
        "title": "Instant Challan 280 Generation",
        "desc": "Hassle-free online challan generation and receipt tracking."
      }
    ],
    "documents": [
      "Quarterly P&L or revenue estimates",
      "TDS deducted by clients (Form 26AS/AIS)",
      "Capital gains statements from share/property sales"
    ],
    "steps": [
      {
        "step": "1",
        "title": "Profit Forecasting",
        "desc": "Estimating full-year gross receipts, business deductions, and net taxable income."
      },
      {
        "step": "2",
        "title": "Net Tax Calculation",
        "desc": "Factoring in TDS credits and calculating installment obligations."
      },
      {
        "step": "3",
        "title": "Challan Payment",
        "desc": "Executing online tax challan payment under Minor Head 100."
      }
    ],
    "deliverables": [
      "Quarterly Advance Tax Estimation Statement",
      "Paid Challan 280 with BSR and CIN Verification"
    ],
    "faqs": [
      {
        "q": "Are senior citizens required to pay advance tax?",
        "a": "Resident senior citizens (age 60 or above) who do not have any business or professional income are completely exempt from advance tax."
      }
    ]
  },
  "change-directors": {
    "id": "change-directors",
    "category": "compliance",
    "categoryLabel": "Compliance",
    "icon": "\ud83d\udc65",
    "badge": "MCA Form DIR-12",
    "title": "Addition or Resignation of Director (DIR-12)",
    "tagline": "Appoint new directors or record formal resignation on MCA portal within 30 days.",
    "timeline": "3 - 5 Days",
    "govtPortal": "Ministry of Corporate Affairs",
    "filingMode": "100% Online Paperless",
    "overview": "Adding a strategic co-founder, independent director, or investor nominee to your board\u2014or processing a formal director resignation\u2014requires filing MCA Form DIR-12 along with Board Resolutions, Form DIR-2 consent, and Form DIR-8 non-disqualification declarations within 30 days.",
    "benefits": [
      {
        "title": "Legally Binding Directorship Transfer",
        "desc": "Shields resigning directors from liabilities incurred by the company after their official resignation date."
      },
      {
        "title": "Instant DIN Procurement",
        "desc": "We apply for DIN through SPICe+ or Form DIR-3 for incoming directors."
      },
      {
        "title": "Avoid \u20b9100/Day Delay Penalty",
        "desc": "Filing within statutory 30 days prevents heavy recurring MCA fines."
      }
    ],
    "documents": [
      "PAN & Aadhaar of incoming / resigning Director",
      "Digital Signature Certificate (DSC) of Director",
      "Board Resolution approving appointment/resignation",
      "Consent letter in Form DIR-2 and Resignation Letter in Form DIR-11"
    ],
    "steps": [
      {
        "step": "1",
        "title": "Board Resolution & Consents",
        "desc": "Drafting board notice, resolution, DIR-2, and DIR-8 forms."
      },
      {
        "step": "2",
        "title": "Form DIR-12 Filing",
        "desc": "Uploading signed e-form with DSC on MCA portal."
      },
      {
        "step": "3",
        "title": "Approval & Master Data Update",
        "desc": "ROC approves filing; corporate master data updated automatically."
      }
    ],
    "deliverables": [
      "Approved MCA Form DIR-12 Challan & SRN",
      "Updated MCA Company Master Data Certificate",
      "Certified True Copy of Board Resolutions"
    ],
    "faqs": [
      {
        "q": "Can a company operate with only 1 director?",
        "a": "Only a One Person Company (OPC) can operate with 1 director. A Private Limited Company must have at least 2 directors at all times."
      }
    ]
  },
  "change-office": {
    "id": "change-office",
    "category": "compliance",
    "categoryLabel": "Compliance",
    "icon": "\ud83d\udccd",
    "badge": "MCA Form INC-22",
    "title": "Registered Office Address Change (INC-22)",
    "tagline": "Update official registered office address within city, state, or interstate with ROC approval.",
    "timeline": "3 - 7 Days",
    "govtPortal": "Ministry of Corporate Affairs",
    "filingMode": "100% Online Paperless",
    "overview": "When your company moves to a new commercial space, you must report the change in registered office address within 30 days by filing MCA Form INC-22 along with utility bills, rent agreement, landlord NOC, and geo-tagged office photographs.",
    "benefits": [
      {
        "title": "Official Legal Address Record",
        "desc": "Ensures all statutory government notices, bank correspondence, and legal summons reach you safely."
      },
      {
        "title": "Avoid Stiff ROC Fines",
        "desc": "Section 12 of Companies Act imposes \u20b91,000 per day penalty for unnotified registered office changes."
      },
      {
        "title": "GST & Bank Alignment",
        "desc": "Smoothly update your corporate bank accounts and GST registration addresses."
      }
    ],
    "documents": [
      "Electricity Bill / Water Bill of New Office (< 2 months old)",
      "Rent Agreement with property owner NOC",
      "Geo-tagged photograph of office premises showing company name board",
      "Board Resolution approving address change"
    ],
    "steps": [
      {
        "step": "1",
        "title": "Board Meeting & Resolution",
        "desc": "Passing board resolution authorizing the shift."
      },
      {
        "step": "2",
        "title": "Form INC-22 Preparation",
        "desc": "Attaching utility bills, NOC, and geo-tagged imagery."
      },
      {
        "step": "3",
        "title": "ROC Verification & Approval",
        "desc": "Filing e-form with DSC and securing ROC approval receipt."
      }
    ],
    "deliverables": [
      "Approved MCA Form INC-22 Challan",
      "Updated MCA Corporate Profile Record"
    ],
    "faqs": [
      {
        "q": "What if the office shifts to another state?",
        "a": "Interstate shifting requires special resolution from shareholders, Regional Director (RD) approval, and public notice advertisements in regional and English newspapers."
      }
    ]
  },
  "share-capital-increase": {
    "id": "share-capital-increase",
    "category": "compliance",
    "categoryLabel": "Compliance",
    "icon": "\ud83d\udcc8",
    "badge": "MCA Form SH-7",
    "title": "Increase in Authorized Share Capital (SH-7)",
    "tagline": "Expand authorized capital ceiling to issue new equity, onboard angel investors, or issue ESOPs.",
    "timeline": "4 - 7 Days",
    "govtPortal": "Ministry of Corporate Affairs",
    "filingMode": "100% Online Paperless",
    "overview": "A company cannot issue shares exceeding its Authorized Share Capital stated in its Memorandum of Association (MOA). To bring in new investor capital or allot ESOPs, the company must amend its Capital Clause in MOA via shareholder approval (EGM) and file Form SH-7 with the ROC along with differential stamp duty.",
    "benefits": [
      {
        "title": "Room for Equity Infusion",
        "desc": "Enables your company to accept fresh equity rounds, angel investments, or rights issues."
      },
      {
        "title": "Statutory MOA Capital Amendment",
        "desc": "Officially updates the authorized share count on the public MCA master database."
      },
      {
        "title": "Prepared for Expansion",
        "desc": "Set an expansive capital foundation to support enterprise borrowing and joint ventures."
      }
    ],
    "documents": [
      "Notice and Explanatory Statement of Extraordinary General Meeting (EGM)",
      "EGM Resolution approving capital increase",
      "Altered Memorandum of Association (MOA) Capital Clause",
      "DSC of Director"
    ],
    "steps": [
      {
        "step": "1",
        "title": "Convene EGM",
        "desc": "Passing Ordinary Resolution to alter Clause V of MOA."
      },
      {
        "step": "2",
        "title": "File Form SH-7",
        "desc": "Submitting Form SH-7 within 30 days and paying state stamp duty online."
      },
      {
        "step": "3",
        "title": "ROC Endorsement",
        "desc": "Receiving approval letter from Registrar of Companies."
      }
    ],
    "deliverables": [
      "MCA Form SH-7 Approval Letter",
      "Altered Memorandum of Association (MOA)",
      "Certified EGM Resolutions"
    ],
    "faqs": [
      {
        "q": "How is stamp duty calculated on capital increase?",
        "a": "Stamp duty varies by state and is calculated as a percentage of the incremental authorized capital amount."
      }
    ]
  },
  "fema-rbi-compliance": {
    "id": "fema-rbi-compliance",
    "category": "compliance",
    "categoryLabel": "Compliance",
    "icon": "\ud83c\udf10",
    "badge": "FDI & Foreign Assets",
    "title": "RBI / FEMA Compliance & Annual FLA Return",
    "tagline": "File Foreign Liabilities and Assets (FLA) Return, Form FC-GPR, and FC-TRS with Reserve Bank of India.",
    "timeline": "By 15th July Annually (or 30 days post-FDI)",
    "govtPortal": "RBI FIRMS & FLAIR Portals",
    "filingMode": "100% Online Paperless",
    "overview": "Any Indian company or LLP that has received Foreign Direct Investment (FDI) or made overseas direct investments (ODI) must file the mandatory Foreign Liabilities and Assets (FLA) Return with the Reserve Bank of India on the FLAIR portal by 15th July every year. Easy My Taxes also handles Form FC-GPR (share allotment to foreigners) and Form FC-TRS (share transfer between resident and non-resident).",
    "benefits": [
      {
        "title": "Prevent Triple FEMA Penalties",
        "desc": "FEMA violations attract punitive penalties up to 3 times the sum involved or \u20b92 Lakhs."
      },
      {
        "title": "Unrestricted Profit Repatriation",
        "desc": "Clean RBI compliance is required by AD Banks before clearing outward foreign currency dividend remittances."
      },
      {
        "title": "Institutional Investor Ready",
        "desc": "Foreign investors demand zero-defect RBI SMF and FLA compliance records during funding due diligence."
      }
    ],
    "documents": [
      "Audited Financial Statements of the company",
      "Foreign Inward Remittance Certificate (FIRC) & KYC from AD Bank",
      "Valuation Certificate from registered merchant banker or CA"
    ],
    "steps": [
      {
        "step": "1",
        "title": "FLAIR Profile Setup",
        "desc": "Registering user and business profile on RBI FLAIR portal."
      },
      {
        "step": "2",
        "title": "Data Extraction & Valuation",
        "desc": "Computing market value of equity and foreign liabilities."
      },
      {
        "step": "3",
        "title": "Submission & Acknowledgment",
        "desc": "Uploading statutory FLA return and generating official RBI confirmation."
      }
    ],
    "deliverables": [
      "RBI FLA Return Official Acknowledgement (FLAIR)",
      "Form FC-GPR / FC-TRS Approval Certificate (FIRMS)",
      "FEMA Audit & Valuation Certificate"
    ],
    "faqs": [
      {
        "q": "What is the annual due date for the RBI FLA Return?",
        "a": "The statutory due date for filing the FLA return is 15th July following the end of the financial year."
      }
    ]
  },
  "licenses-certifications": {
    "id": "licenses-certifications",
    "category": "licenses",
    "categoryLabel": "Licenses & Certifications",
    "icon": "\ud83d\udcdc",
    "badge": "Master Licensing Hub",
    "title": "Business Licenses & Certifications Hub (2026)",
    "tagline": "End-to-end statutory licensing: FSSAI, Trade License, GST, MSME, BIS, ISO, and Drug Licenses.",
    "timeline": "3 - 10 Days",
    "govtPortal": "Central & State Licensing Authorities",
    "filingMode": "100% Online Paperless",
    "overview": "Operating a commercial establishment in India requires specific municipal, state, and central government licenses based on your business sector. Easy My Taxes provides an end-to-end licensing concierge led by seasoned regulatory compliance professionals.",
    "benefits": [
      {
        "title": "100% Legal Protection",
        "desc": "Prevent municipal raids, commercial closures, and statutory fines by keeping active licenses."
      },
      {
        "title": "Open Merchant Accounts & Gateways",
        "desc": "Mandatory for opening payment gateways (Razorpay, Stripe, Cashfree) and ecommerce seller accounts."
      },
      {
        "title": "Access Government Subsidies",
        "desc": "MSME and BIS registered units qualify for priority sector lending, collateral-free loans, and subsidies."
      }
    ],
    "documents": [
      "PAN and Aadhaar Card of Business Owner / Promoters",
      "Commercial address utility bill (Electricity / Water bill)",
      "Rent Agreement and Landlord NOC",
      "Bank statement / Cancelled Cheque"
    ],
    "steps": [
      {
        "step": "1",
        "title": "License Scoping",
        "desc": "Identifying mandatory central, state, and municipal licenses based on your business activity."
      },
      {
        "step": "2",
        "title": "Documentation",
        "desc": "Compiling technical blueprints, lab reports, and affidavits."
      },
      {
        "step": "3",
        "title": "Government Filing",
        "desc": "Submitting applications and liaising with departmental inspectors for swift issuance."
      }
    ],
    "deliverables": [
      "Official Government License / Certificate",
      "Digital Verification QR Code",
      "Annual Renewal Tracker & Compliance Alerts"
    ],
    "faqs": [
      {
        "q": "Which licenses are mandatory for all businesses?",
        "a": "Generally, MSME Udyam, GST (if above threshold), and Shop & Establishment / Trade License are universally mandatory."
      }
    ]
  },
  "fssai-registration": {
    "id": "fssai-registration",
    "category": "licenses",
    "categoryLabel": "Licenses & Certifications",
    "icon": "\ud83e\udd57",
    "badge": "FoSCoS Approved",
    "title": "FSSAI Food License Registration",
    "tagline": "Get 14-digit FSSAI Basic, State, or Central Food License for restaurants, cloud kitchens & food D2C.",
    "timeline": "3 - 7 Working Days",
    "govtPortal": "FSSAI FoSCoS Portal",
    "filingMode": "100% Online Paperless",
    "overview": "Under the Food Safety and Standards Act 2006, any business handling food\u2014including restaurants, bakeries, cloud kitchens, food processors, retail grocery stores, and Swiggy/Zomato food delivery vendors\u2014must obtain a 14-digit FSSAI license. Easy My Taxes provides fast-track FoSCoS filing.",
    "benefits": [
      {
        "title": "Mandatory for Swiggy & Zomato",
        "desc": "Instant onboarding on food aggregator platforms and online delivery networks."
      },
      {
        "title": "Consumer Trust & Safety Seal",
        "desc": "Displaying the 14-digit FSSAI logo builds instant brand credibility and hygiene assurance."
      },
      {
        "title": "Prevent \u20b95 Lakh Penalties",
        "desc": "Operating without FSSAI attracts fines up to \u20b95,00,000 and up to 6 months imprisonment under Section 31."
      }
    ],
    "documents": [
      "PAN Card & Aadhaar Card of Food Business Operator (FBO)",
      "Passport-size photograph",
      "Premises Address Proof (Electricity bill / Rent agreement with NOC)",
      "Food Category List & Proposed Water Test Report (for State/Central license)"
    ],
    "steps": [
      {
        "step": "1",
        "title": "Tier Determination",
        "desc": "Classifying between Basic (under \u20b912L turnover), State (\u20b912L to \u20b920Cr), or Central (>\u20b920Cr)."
      },
      {
        "step": "2",
        "title": "FoSCoS Application",
        "desc": "Submitting Form A or Form B on the FoSCoS portal with required blueprints."
      },
      {
        "step": "3",
        "title": "Inspection & Issuance",
        "desc": "Addressing food safety inspector queries and securing 14-digit registration certificate."
      }
    ],
    "deliverables": [
      "Official 14-Digit FSSAI License / Registration Certificate",
      "FSSAI Hygiene Certificate & Display Notice",
      "Annual Return (Form D1) guidance"
    ],
    "faqs": [
      {
        "q": "What is the difference between FSSAI Registration and FSSAI License?",
        "a": "FSSAI Basic Registration is for petty food business operators with an annual turnover of up to \u20b912 Lakhs. FSSAI State License is required for mid-sized operators with turnover between \u20b912 Lakhs and \u20b920 Crores. FSSAI Central License is required for large manufacturers, 100% export units, importers, and businesses with turnover above \u20b920 Crores or operating in multiple states."
      },
      {
        "q": "Can I start selling food on Swiggy and Zomato with just the application number?",
        "a": "No. Major platforms like Swiggy and Zomato mandate an active 14-digit FSSAI license certificate. However, Easy My Taxes fast-tracks FSSAI issuance within 3 to 7 working days so you can go live without delay."
      },
      {
        "q": "What is the validity period of an FSSAI license?",
        "a": "An FSSAI license or registration can be issued for a duration of 1 to 5 years, depending on your preference. Choosing a 5-year license saves recurring renewal fees and administrative hassle."
      },
      {
        "q": "Can a home kitchen or home baker get an FSSAI license?",
        "a": "Yes! Home bakers and home-cooked food operators can legally obtain a Basic FSSAI Registration using their residential address proof and an owner NOC."
      }
    ],
    "detailedOverview": "\n      <p style=\"font-size: 1.1rem; color: var(--primary-950); font-weight: 600; line-height: 1.75;\">\n        An <strong>FSSAI License / Registration</strong> is a 14-digit statutory compliance certificate issued by the <strong>Food Safety and Standards Authority of India (FSSAI)</strong> under the <strong>Food Safety and Standards Act 2006</strong>. It is legally mandatory for every Food Business Operator (FBO) in India involved in manufacturing, processing, packaging, storing, distributing, or selling food items.\n      </p>\n      <p>\n        Operating a food establishment without an active FSSAI certificate is a cognizable statutory offense under Section 63 of the FSS Act, punishable with imprisonment up to 6 months and penalties up to \u20b95 Lakhs. Furthermore, food delivery aggregators like Zomato, Swiggy, and Blinkit strictly require an active 14-digit FSSAI license for merchant onboarding.\n      </p>\n    ",
    "whoIsItFor": [
      {
        "icon": "\ud83c\udf7d\ufe0f",
        "title": "Restaurants & Cloud Kitchens",
        "desc": "Dine-in outlets, bakeries, cafes, food trucks, and Swiggy/Zomato cloud kitchens."
      },
      {
        "icon": "\ud83c\udfed",
        "title": "Food Manufacturers",
        "desc": "Packaged food producers, snack processors, edible oil mills, and dairy product makers."
      },
      {
        "icon": "\ud83d\udce6",
        "title": "Food Distributors & Importers",
        "desc": "Wholesalers, cold chain operators, re-packers, and importers of food ingredients."
      },
      {
        "icon": "\ud83d\uded2",
        "title": "Grocery Stores & D2C Brands",
        "desc": "Supermarkets, organic food brands, and online gourmet food delivery portals."
      }
    ],
    "eligibility": [
      {
        "icon": "\ud83d\udcdc",
        "label": "License Tiers",
        "value": "Turnover-Based Tiers",
        "desc": "Basic Registration (< \u20b912L turnover); State License (\u20b912L\u2013\u20b920Cr); Central License (> \u20b920Cr or Multi-State)."
      },
      {
        "icon": "\ud83d\udccd",
        "label": "Premises Proof",
        "value": "Commercial or Kitchen NOC",
        "desc": "Electricity bill, Rent Agreement, and Municipal Health Trade License / Local Body NOC."
      },
      {
        "icon": "\ud83d\udc64",
        "label": "Food Safety Lead",
        "value": "Nominated Supervisor",
        "desc": "Photo ID proof of authorized food safety in-charge and basic medical fitness certificates."
      },
      {
        "icon": "\ud83d\udca7",
        "label": "Testing Reports",
        "value": "Potable Water Report",
        "desc": "Required for manufacturing, catering, and food processing units from an NABL accredited lab."
      }
    ],
    "postCompliances": [
      {
        "badge": "Mandatory",
        "timeline": "Permanent",
        "title": "14-Digit FSSAI Display",
        "desc": "Prominently display FSSAI logo and 14-digit license number on food packaging, menu cards, and billing counters."
      },
      {
        "badge": "Annual",
        "timeline": "By 31st May",
        "title": "Annual Return Form D-1",
        "desc": "Mandatory annual manufacturing and production return for food processors and importers."
      },
      {
        "badge": "Periodic",
        "timeline": "30-60 Days Before Expiry",
        "title": "Timely License Renewal",
        "desc": "Renew license before expiration to avoid a statutory penalty of \u20b9100 per day."
      }
    ]
  },
  "trade-license": {
    "id": "trade-license",
    "category": "licenses",
    "categoryLabel": "Licenses & Certifications",
    "icon": "\ud83c\udfec",
    "badge": "Municipal Corporation",
    "title": "Trade License Registration & Municipal NOC",
    "tagline": "Statutory permission from local Municipal Corporation to conduct commercial trade safely.",
    "timeline": "5 - 8 Days",
    "govtPortal": "Municipal Corporation / Urban Local Body",
    "filingMode": "100% Online Paperless",
    "overview": "A Trade License is an authorization certificate issued by the local Municipal Corporation (MCD, BMC, BBMP, GHMC, etc.) permitting an individual or company to commence trade, retail, or manufacturing activities in a specific municipal jurisdiction. It certifies that the establishment adheres to safety, health, and environmental guidelines.",
    "benefits": [
      {
        "title": "Shield Against Municipal Sealings",
        "desc": "Prevents surprise health raids, property sealing, and punitive civic fines."
      },
      {
        "title": "Essential for Commercial Utilities",
        "desc": "Required for commercial power connections, municipal water lines, and outdoor signboards."
      },
      {
        "title": "Corporate Compliance Record",
        "desc": "Mandatory document for bank loans, vendor empanelment, and retail operations."
      }
    ],
    "documents": [
      "PAN & ID Proof of Business Owner",
      "Property Tax Receipt / Commercial Electricity Bill",
      "Rent Agreement and Landlord NOC",
      "Premises Layout Map / Fire NOC (if applicable)"
    ],
    "steps": [
      {
        "step": "1",
        "title": "Zonal Scoping",
        "desc": "Verifying commercial zoning regulations and permissible trade categories."
      },
      {
        "step": "2",
        "title": "Municipal Portal Filing",
        "desc": "Submitting civic forms with property tax records."
      },
      {
        "step": "3",
        "title": "Inspection & Fee Payment",
        "desc": "Coordinating civic inspector site verification and downloading approved license."
      }
    ],
    "deliverables": [
      "Official Municipal Corporation Trade License Certificate",
      "Zonal Health & Safety Endorsement",
      "Annual Renewal Calendar Alert"
    ],
    "faqs": [
      {
        "q": "How often does a Trade License need renewal?",
        "a": "Trade licenses are generally valid for 1 year and must be renewed annually before 31st March."
      }
    ]
  },
  "gst-registration": {
    "id": "gst-registration",
    "category": "licenses",
    "categoryLabel": "Licenses & Certifications",
    "icon": "\ud83d\udcd1",
    "badge": "GSTIN in 3-5 Days",
    "title": "New GST Registration & GSTIN Certificate",
    "tagline": "Get your 15-digit GSTIN with Aadhaar OTP authentication in 3 to 5 business days.",
    "timeline": "3 - 5 Working Days",
    "govtPortal": "GST Portal (GSTN)",
    "filingMode": "100% Online Paperless",
    "overview": "Any business with annual turnover exceeding \u20b940 Lakhs for goods (\u20b920 Lakhs in special states) or \u20b920 Lakhs for services must register under GST. Additionally, GST registration is compulsory for inter-state sellers, ecommerce vendors (Amazon, Flipkart, Shopify), and export businesses regardless of turnover.",
    "benefits": [
      {
        "title": "Sell Pan-India & on Ecommerce",
        "desc": "Sell on Amazon, Flipkart, Blinkit, and expand interstate legally without restrictions."
      },
      {
        "title": "Claim Input Tax Credit (ITC)",
        "desc": "Save up to 18% on your business purchases (laptops, software, equipment, inventory) by offsetting input tax."
      },
      {
        "title": "Export with Zero Tax (LUT)",
        "desc": "Export IT services and physical goods globally with 0% tax under Letter of Undertaking (LUT)."
      }
    ],
    "documents": [
      "PAN Card and Aadhaar Card of Proprietor / Partners / Directors",
      "Passport size photograph of applicants",
      "Business Address Proof: Electricity Bill (< 2 months old)",
      "Rent Agreement & Property Owner NOC",
      "Bank Account proof (Cancelled cheque / Bank statement)"
    ],
    "steps": [
      {
        "step": "1",
        "title": "TRN Generation",
        "desc": "Filing Part A on GST portal with PAN, email, and mobile OTP."
      },
      {
        "step": "2",
        "title": "Part B Filing & HSN Code",
        "desc": "Filing business details, goods HSN / services SAC codes, and address proofs."
      },
      {
        "step": "3",
        "title": "Aadhaar Biometric e-KYC",
        "desc": "Authenticating applicant via instant Aadhaar OTP or biometric authentication."
      },
      {
        "step": "4",
        "title": "GSTIN Issuance",
        "desc": "GST officer approves registration; Form REG-06 GSTIN certificate issued."
      }
    ],
    "deliverables": [
      "Official Form REG-06 GST Registration Certificate (15-Digit GSTIN)",
      "GST Portal Login ID & Password",
      "Letter of Undertaking (LUT) for zero-rated exports (optional)"
    ],
    "faqs": [
      {
        "q": "What is the threshold limit for mandatory GST registration?",
        "a": "For businesses dealing exclusively in goods, GST registration is mandatory once annual turnover exceeds \u20b940 Lakhs (\u20b920 Lakhs in Special Category States). For service providers, the threshold is \u20b920 Lakhs (\u20b910 Lakhs in Special Category States)."
      },
      {
        "q": "Can I get GST registration voluntarily even if my turnover is below the threshold?",
        "a": "Yes! Voluntary GST registration is very common. It allows you to claim full Input Tax Credit (ITC) on your business expenses, issue official tax invoices, and register as an approved vendor with corporate clients."
      },
      {
        "q": "How long does it take to get a GSTIN number?",
        "a": "With Aadhaar authentication, GST approval and certificate generation typically take 3 to 5 working days, provided the departmental officer does not issue a site clarification notice."
      },
      {
        "q": "What is an LUT (Letter of Undertaking) in GST?",
        "a": "An LUT (Form GST RFD-11) is an official statutory declaration filed on the GST portal that allows exporters of goods or services to export without paying IGST upfront, preserving crucial working capital."
      }
    ],
    "detailedOverview": "\n      <p style=\"font-size: 1.1rem; color: var(--primary-950); font-weight: 600; line-height: 1.75;\">\n        A <strong>Goods and Services Tax Identification Number (GSTIN)</strong> is a 15-digit statutory tax identifier issued by the GST Council under the <strong>Central Goods and Services Tax (CGST) Act 2017</strong>. It is mandatory for any commercial enterprise, manufacturer, or professional service provider exceeding statutory turnover thresholds or engaging in inter-state commerce.\n      </p>\n      <p>\n        Operating without a mandatory GST registration attracts severe statutory penalties under Section 122 (100% of tax evaded or \u20b910,000, whichever is higher). Obtaining a GSTIN unlocks seamless Input Tax Credit (ITC) pass-through, enables legally issuing tax invoices, allows registration on Amazon, Flipkart, and GeM portals, and permits zero-rated export of services via Letter of Undertaking (LUT).\n      </p>\n    ",
    "whoIsItFor": [
      {
        "icon": "\ud83d\udecd\ufe0f",
        "title": "Product Sellers & Traders",
        "desc": "Businesses with annual turnover exceeding \u20b940 Lakhs (\u20b920 Lakhs for special category states)."
      },
      {
        "icon": "\ud83d\udcbb",
        "title": "Service Providers",
        "desc": "Consultants, developers, and professionals with annual gross receipts exceeding \u20b920 Lakhs."
      },
      {
        "icon": "\ud83d\udce6",
        "title": "E-Commerce Merchants",
        "desc": "Mandatory for anyone selling goods or services on Amazon, Flipkart, Blinkit, or Swiggy."
      },
      {
        "icon": "\ud83c\udf0d",
        "title": "Software & Service Exporters",
        "desc": "Required to execute Letter of Undertaking (LUT) to export services with zero tax deduction."
      }
    ],
    "eligibility": [
      {
        "icon": "\ud83c\udd94",
        "label": "Identity Identification",
        "value": "Valid Permanent PAN",
        "desc": "Individual PAN for proprietorships; Corporate PAN for LLPs, Companies, and Trusts."
      },
      {
        "icon": "\ud83d\udcf1",
        "label": "Aadhaar Authentication",
        "value": "Linked Mobile Number",
        "desc": "Signatory's Aadhaar must be linked with mobile number for instant e-KYC OTP verification."
      },
      {
        "icon": "\ud83d\udccd",
        "label": "Premises Proof",
        "value": "Valid Address Document",
        "desc": "Electricity bill, Property Tax receipt, or Municipal Khata not older than 2 months."
      },
      {
        "icon": "\ud83d\udcd1",
        "label": "Possession Rights",
        "value": "Rent Agreement & NOC",
        "desc": "If premises are leased or rented, a clear landlord NOC and lease agreement are required."
      }
    ],
    "postCompliances": [
      {
        "badge": "Monthly / QRMP",
        "timeline": "By 11th / 13th of Month",
        "title": "GSTR-1 Outward Supplies",
        "desc": "Detailed reporting of all outward sales, tax invoices, and export supplies."
      },
      {
        "badge": "Monthly / QRMP",
        "timeline": "By 20th / 22nd / 24th",
        "title": "GSTR-3B Summary Return",
        "desc": "Self-assessed summary return with input tax credit reconciliation and net tax payment."
      },
      {
        "badge": "Annual",
        "timeline": "By 31st December",
        "title": "GSTR-9 Annual Return",
        "desc": "Comprehensive annual return consolidation for registered taxpayers exceeding statutory limits."
      },
      {
        "badge": "Continuous",
        "timeline": "Monthly Reconcile",
        "title": "GSTR-2B ITC Matching",
        "desc": "Strict vendor matching to ensure you claim 100% eligible Input Tax Credit without notice."
      }
    ]
  },
  "msme-udyam": {
    "id": "msme-udyam",
    "category": "licenses",
    "categoryLabel": "Licenses & Certifications",
    "icon": "\ud83c\udfed",
    "badge": "Government of India",
    "title": "MSME / Udyam Certificate Registration",
    "tagline": "Unlock collateral-free bank loans, 45-day payment protections, and government tender exemptions.",
    "timeline": "24 - 48 Hours",
    "govtPortal": "Ministry of Micro, Small & Medium Enterprises",
    "filingMode": "100% Online Paperless",
    "overview": "Udyam Registration is the official recognition provided by the Ministry of MSME, Government of India. It categorizes enterprises into Micro, Small, and Medium sectors based on investment and turnover, granting access to subsidized bank loans, 50% patent/trademark fee discounts, and strict Section 15 45-day delayed payment protections.",
    "benefits": [
      {
        "title": "Collateral-Free Bank Loans (CGTMSE)",
        "desc": "Access priority sector institutional credit without pledging personal assets or property."
      },
      {
        "title": "Strict 45-Day Payment Law",
        "desc": "Corporate buyers must pay MSME suppliers within 45 days; defaults attract compounding interest at 3 times RBI repo rate."
      },
      {
        "title": "50% Subsidy on Trademarks & Patents",
        "desc": "Cut government intellectual property filing fees by a massive 50%."
      }
    ],
    "documents": [
      "Aadhaar Card of Entrepreneur",
      "PAN Card of Business / Proprietor",
      "Bank Account Number & IFSC code",
      "Business investment & turnover figures"
    ],
    "steps": [
      {
        "step": "1",
        "title": "Aadhaar Authentication",
        "desc": "Verifying business owner details via Aadhaar OTP."
      },
      {
        "step": "2",
        "title": "NIC Code Selection",
        "desc": "Tagging precise National Industrial Classification (NIC) activity codes."
      },
      {
        "step": "3",
        "title": "Certificate Generation",
        "desc": "Instant issuance of lifetime valid Udyam Registration Certificate with QR code."
      }
    ],
    "deliverables": [
      "Official MSME Udyam Registration Certificate with QR Code",
      "Unique Udyam Registration Number (URN)",
      "MSME Samadhaan Delayed Payment Grievance Portal access"
    ],
    "faqs": [
      {
        "q": "Does Udyam registration require renewal?",
        "a": "No, Udyam Registration has lifetime validity and does not require periodic renewal."
      }
    ]
  },
  "import-export-code": {
    "id": "import-export-code",
    "category": "licenses",
    "categoryLabel": "Licenses & Certifications",
    "icon": "\ud83d\udea2",
    "badge": "DGFT Approved",
    "title": "Import Export Code (IEC) Registration",
    "tagline": "10-digit lifetime license issued by DGFT to export goods and services and import globally.",
    "timeline": "24 - 48 Hours",
    "govtPortal": "Directorate General of Foreign Trade (DGFT)",
    "filingMode": "100% Online Paperless",
    "overview": "The Import Export Code (IEC) is a 10-digit identification code issued by the Directorate General of Foreign Trade (DGFT), Ministry of Commerce. It is mandatory for any individual, firm, or company importing goods into India or exporting physical products or overseas digital/IT services.",
    "benefits": [
      {
        "title": "Lifetime Validity",
        "desc": "IEC has lifetime validity and requires zero annual renewal fees (simple annual online confirmation)."
      },
      {
        "title": "Mandatory for Customs Clearance",
        "desc": "Customs will not release international shipments without an active IEC linked to your PAN."
      },
      {
        "title": "Unlock Export Subsidies & RoDTEP",
        "desc": "Claim export incentive benefits under Foreign Trade Policy (FTP) including RoDTEP and duty drawback."
      }
    ],
    "documents": [
      "PAN Card of Business / Individual",
      "Aadhaar / Voter ID of Authorized Signatory",
      "Cancelled Cheque bearing pre-printed account name",
      "Address proof of registered business premise"
    ],
    "steps": [
      {
        "step": "1",
        "title": "DGFT Profile Registration",
        "desc": "Setting up portal profile with DSC or Aadhaar OTP."
      },
      {
        "step": "2",
        "title": "ANF-2A Electronic Filing",
        "desc": "Submitting bank proof, entity particulars, and port of registration."
      },
      {
        "step": "3",
        "title": "Instant IEC Allotment",
        "desc": "Government validates bank credentials and issues electronic IEC certificate."
      }
    ],
    "deliverables": [
      "Official DGFT Import Export Code (IEC) Certificate",
      "DGFT Portal Login Credentials & Profile Sync"
    ],
    "faqs": [
      {
        "q": "Can service exporters operate without an IEC?",
        "a": "Service exporters can provide services without an IEC unless they wish to claim export incentives under Foreign Trade Policy (FTP) or utilize formal international bank mechanisms."
      }
    ]
  },
  "shop-establishment": {
    "id": "shop-establishment",
    "category": "licenses",
    "categoryLabel": "Licenses & Certifications",
    "icon": "\ud83d\udecd\ufe0f",
    "badge": "State Labor Dept (Gumasta)",
    "title": "Shop & Establishment Act Registration (Gumasta)",
    "tagline": "State Labor Department license required to open commercial shops, IT offices & warehouses.",
    "timeline": "3 - 5 Days",
    "govtPortal": "State Labor Department Portal",
    "filingMode": "100% Online Paperless",
    "overview": "The Shop and Establishment Act (known as Gumasta License in Maharashtra and Trade Certificate in Delhi/Karnataka) is regulated by state labor departments. It governs working hours, statutory leaves, wages, and terms of employment for commercial establishments, offices, and retail stores.",
    "benefits": [
      {
        "title": "Mandatory Legal Entity Proof",
        "desc": "Primary state government document accepted by all public and private banks to open Current Accounts."
      },
      {
        "title": "Shield from Labor Inspector Raids",
        "desc": "Full compliance with state statutory employee welfare laws."
      },
      {
        "title": "Operate Commercial Establishment",
        "desc": "Permission to run commercial offices, retail shops, and warehouses legally."
      }
    ],
    "documents": [
      "PAN & Aadhaar Card of Business Owner",
      "Commercial premise electricity bill / property tax bill",
      "Rent Agreement and Landlord NOC",
      "Photograph of shop entrance with display board"
    ],
    "steps": [
      {
        "step": "1",
        "title": "State Labor Portal Application",
        "desc": "Filing employer details and employee counts."
      },
      {
        "step": "2",
        "title": "Fee Payment",
        "desc": "Paying state statutory registration fees."
      },
      {
        "step": "3",
        "title": "Certificate Issuance",
        "desc": "Downloading digitally signed Shop & Establishment registration certificate."
      }
    ],
    "deliverables": [
      "Official Shop & Establishment License (Gumasta)",
      "Employee Wage & Leave Register templates"
    ],
    "faqs": [
      {
        "q": "Is Shop & Establishment license required for home-based businesses?",
        "a": "Most states allow professional consulting practices, freelance software developers, and architects to operate with simplified e-declarations or Udyam."
      }
    ]
  },
  "bis-registration": {
    "id": "bis-registration",
    "category": "licenses",
    "categoryLabel": "Licenses & Certifications",
    "icon": "\ud83d\udee1\ufe0f",
    "badge": "ISI Mark & CRS",
    "title": "BIS Registration (ISI Mark & CRS Certification)",
    "tagline": "Bureau of Indian Standards certification for electronics, industrial goods & consumer products.",
    "timeline": "15 - 30 Days",
    "govtPortal": "Bureau of Indian Standards (Manakonline)",
    "filingMode": "100% Online Paperless",
    "overview": "The Bureau of Indian Standards (BIS) mandates quality and safety certifications for products sold in the Indian market. The Compulsory Registration Scheme (CRS) applies to electronics and IT products (laptops, batteries, LED lights), while the ISI Mark certification applies to industrial, chemical, and building materials.",
    "benefits": [
      {
        "title": "Compulsory Market Access in India",
        "desc": "Goods under mandatory BIS orders cannot be imported, distributed, or sold without BIS approval."
      },
      {
        "title": "ISI Mark Safety Trust",
        "desc": "The prestigious ISI mark provides immediate quality validation for consumers and institutional buyers."
      },
      {
        "title": "Customs Import Clearance",
        "desc": "Prevents immediate seizure of foreign electronics and equipment at Indian ports."
      }
    ],
    "documents": [
      "Manufacturing Factory License & Machinery list",
      "Test Reports from BIS Recognized Laboratory",
      "Trademark Certificate / Brand Authorization",
      "Authorized Indian Representative (AIR) details for foreign manufacturers"
    ],
    "steps": [
      {
        "step": "1",
        "title": "Lab Testing",
        "desc": "Submitting product samples to an NABL/BIS accredited testing laboratory."
      },
      {
        "step": "2",
        "title": "Manakonline Filing",
        "desc": "Uploading test reports and manufacturing documentation onto the BIS portal."
      },
      {
        "step": "3",
        "title": "Scrutiny & Grant",
        "desc": "BIS officers review reports and grant official Registration / ISI License."
      }
    ],
    "deliverables": [
      "Official BIS Certificate of Registration (R-Number)",
      "Permission to use the Standard ISI Mark / CRS Logo"
    ],
    "faqs": [
      {
        "q": "What is the validity of a BIS CRS registration?",
        "a": "BIS CRS registration is typically granted for 2 years and can be renewed periodically."
      }
    ]
  },
  "iso-certification": {
    "id": "iso-certification",
    "category": "licenses",
    "categoryLabel": "Licenses & Certifications",
    "icon": "\ud83c\udfc5",
    "badge": "Global Quality Standard",
    "title": "ISO Certification (9001, 14001, 27001)",
    "tagline": "Internationally recognized quality, environmental, and information security management certificates.",
    "timeline": "3 - 7 Working Days",
    "govtPortal": "Accredited Certification Bodies (IAF / Non-IAF)",
    "filingMode": "100% Online Paperless",
    "overview": "ISO Certification demonstrates that your products, services, and management systems meet international standards of quality, security, and efficiency. We facilitate ISO 9001 (Quality Management), ISO 14001 (Environmental), ISO 27001 (Information Security for SaaS/IT), and ISO 22000 (Food Safety).",
    "benefits": [
      {
        "title": "Pre-Requisite for Government Tenders",
        "desc": "Mandatory eligibility credential for winning state and central government procurement tenders."
      },
      {
        "title": "Global Enterprise Client Credibility",
        "desc": "ISO 27001 and ISO 9001 are mandatory to pass vendor security audits with US and European clients."
      },
      {
        "title": "Operational Efficiency",
        "desc": "Standardizes internal business workflows, customer service, and data security procedures."
      }
    ],
    "documents": [
      "Company Registration Certificate (COI / GSTIN / Udyam)",
      "Company Profile and Scope of Business Operations",
      "Brief workflow description of internal processes"
    ],
    "steps": [
      {
        "step": "1",
        "title": "Gap Analysis",
        "desc": "Assessing existing business operations against relevant ISO standard."
      },
      {
        "step": "2",
        "title": "Quality Manual & SOPs",
        "desc": "Drafting necessary quality policies, manuals, and internal audit guidelines."
      },
      {
        "step": "3",
        "title": "Audit & Certification",
        "desc": "Accredited certification body issues authenticated ISO Certificate."
      }
    ],
    "deliverables": [
      "Official ISO Certificate with International Verification QR Code",
      "ISO High-Resolution Badges for Website, Marketing, and Letterheads",
      "Standard Operating Procedures (SOP) Template Kit"
    ],
    "faqs": [
      {
        "q": "What is the difference between IAF and Non-IAF ISO?",
        "a": "IAF (International Accreditation Forum) certificates are globally recognized and required for government tenders and international export clients."
      }
    ]
  },
  "professional-tax": {
    "id": "professional-tax",
    "category": "licenses",
    "categoryLabel": "Licenses & Certifications",
    "icon": "\ud83d\udcbc",
    "badge": "State Commercial Tax",
    "title": "Professional Tax (PT) Enrolment & Registration",
    "tagline": "State government registration for employers (PTRC) and professionals/directors (PTEC).",
    "timeline": "3 - 5 Days",
    "govtPortal": "State Commercial Tax Department",
    "filingMode": "100% Online Paperless",
    "overview": "Professional Tax is a state-level tax levied on salaried employees, business proprietors, and practicing professionals (doctors, CAs, lawyers, consultants). Employers require Professional Tax Registration Certificate (PTRC) to deduct and remit tax from salaries, while directors require Professional Tax Enrolment Certificate (PTEC).",
    "benefits": [
      {
        "title": "Statutory Payroll Compliance",
        "desc": "Required before executing legal monthly employee payroll in major commercial states."
      },
      {
        "title": "Avoid Severe Interest Penalties",
        "desc": "State tax departments impose penal interest of 1.25% to 2% per month for non-deduction."
      },
      {
        "title": "Income Tax Deductible",
        "desc": "Professional tax paid is 100% deductible from gross salary under Section 16(iii) of the Income Tax Act."
      }
    ],
    "documents": [
      "PAN Card of Company / Business and Directors",
      "Certificate of Incorporation / GST Certificate",
      "Cancelled Cheque / Bank Statement",
      "Employee list and salary breakup details"
    ],
    "steps": [
      {
        "step": "1",
        "title": "State Portal Filing",
        "desc": "Submitting PTEC / PTRC application with commercial tax department."
      },
      {
        "step": "2",
        "title": "Challan Processing",
        "desc": "Configuring monthly PT deduction slabs according to state rules."
      },
      {
        "step": "3",
        "title": "Certificate Issuance",
        "desc": "Issuing approved PT Registration Certificate."
      }
    ],
    "deliverables": [
      "PTEC & PTRC Registration Certificates",
      "State-wise PT Deduction Slab Chart for Payroll"
    ],
    "faqs": [
      {
        "q": "Do all states in India levy Professional Tax?",
        "a": "No, Professional Tax is levied by specific states including Maharashtra, Karnataka, West Bengal, Telangana, Andhra Pradesh, Gujarat, and Tamil Nadu. Delhi and Haryana currently do not levy PT."
      }
    ]
  },
  "drug-license": {
    "id": "drug-license",
    "category": "licenses",
    "categoryLabel": "Licenses & Certifications",
    "icon": "\ud83d\udc8a",
    "badge": "State FDA / CDSCO",
    "title": "Retail & Wholesale Drug License",
    "tagline": "State Food & Drug Administration (FDA) license for retail pharmacies, wholesalers & distributors.",
    "timeline": "15 - 25 Days",
    "govtPortal": "State FDA / CDSCO Portal",
    "filingMode": "100% Online Paperless",
    "overview": "Under the Drugs and Cosmetics Act 1940, any commercial enterprise selling, distributing, or stocking pharmaceutical medicines, medical devices, or cosmetics must obtain a Retail Drug License (Form 20/21) or Wholesale Drug License (Form 20B/21B) from the State Licensing Authority.",
    "benefits": [
      {
        "title": "Compulsory Authority for Medicines",
        "desc": "Strict legal prerequisite to purchase and sell allopathic, homeopathic, and ayurvedic medicines."
      },
      {
        "title": "Retail Pharmacy & Online E-Pharmacy",
        "desc": "Mandatory license to open retail chemist counters and list on online medical apps."
      },
      {
        "title": "Wholesale Medicine Distribution",
        "desc": "Enables distribution partnerships with pharmaceutical giants like Sun Pharma, Cipla, and Abbott."
      }
    ],
    "documents": [
      "Registered Pharmacist Diploma/Degree Certificate & State Pharmacy Council Registration",
      "Appointment Letter & Pharmacist Bio-data",
      "Premises Blueprint / Layout (minimum 10 sq. meters for retail, 15 sq. meters for wholesale)",
      "Refrigeration facility proof (Refrigerator purchase bill) with temperature logs"
    ],
    "steps": [
      {
        "step": "1",
        "title": "Premises & Pharmacist Check",
        "desc": "Confirming minimum area, cold storage, and qualified registered pharmacist credentials."
      },
      {
        "step": "2",
        "title": "FDA Portal Submission",
        "desc": "Uploading affidavits, blueprints, and paying government statutory inspection fees."
      },
      {
        "step": "3",
        "title": "Drug Inspector Site Visit",
        "desc": "Assisting during physical premises inspection by Drug Inspector before formal license grant."
      }
    ],
    "deliverables": [
      "Official Form 20 & 21 (Retail) or Form 20B & 21B (Wholesale) Drug License",
      "Pharmacy Inspection Endorsement & Record Register Templates"
    ],
    "faqs": [
      {
        "q": "Can a non-pharmacist open a medical store?",
        "a": "Yes, any business owner can establish a pharmacy company, provided they hire a full-time certified Registered Pharmacist to supervise dispensing."
      }
    ]
  },
  "fire-noc": {
    "id": "fire-noc",
    "category": "licenses",
    "categoryLabel": "Licenses & Certifications",
    "icon": "\ud83d\udd25",
    "badge": "State Fire Safety Dept",
    "title": "Fire Safety NOC & Clearance Certificate",
    "tagline": "State Fire Services NOC required for commercial buildings, restaurants, factories & warehouses.",
    "timeline": "10 - 20 Days",
    "govtPortal": "State Fire & Emergency Services",
    "filingMode": "100% Online Paperless",
    "overview": "A Fire Safety NOC (No Objection Certificate) is issued by the State Fire Services Department certifying that a commercial building, hotel, hospital, manufacturing factory, or school is equipped with compliant fire prevention, alarm, and emergency evacuation systems according to the National Building Code (NBC).",
    "benefits": [
      {
        "title": "Mandatory for Trade License & Health NOC",
        "desc": "Prerequisite clearance to obtain municipal trade licenses, excise licenses, and hotel approvals."
      },
      {
        "title": "Insurance Claim Protection",
        "desc": "Commercial property fire and casualty insurance claims are rejected if Fire NOC is missing."
      },
      {
        "title": "Protection of Life & Property",
        "desc": "Ensures full compliance with National Building Code fire containment norms."
      }
    ],
    "documents": [
      "Building Architectural Floor Plans and Fire System Layout",
      "List of installed fire safety equipment (Extinguishers, Hose reels, Sprinklers, Hydrants)",
      "Property Tax receipt and ownership/lease deed",
      "Architect Certificate confirming fire exits and passage widths"
    ],
    "steps": [
      {
        "step": "1",
        "title": "Site Audit & Equipment Check",
        "desc": "Inspecting installed extinguishers, alarms, pumps, and fire escapes."
      },
      {
        "step": "2",
        "title": "Fire Department Submission",
        "desc": "Submitting architectural blueprints to the Chief Fire Officer (CFO)."
      },
      {
        "step": "3",
        "title": "CFO Site Inspection",
        "desc": "Fire department conducts physical drill inspection and issues official Fire NOC."
      }
    ],
    "deliverables": [
      "Official Fire Safety Certificate / NOC from Chief Fire Officer",
      "Fire Evacuation Plan & Emergency Protocol Signage Pack"
    ],
    "faqs": [
      {
        "q": "What is the validity period of a Fire Safety NOC?",
        "a": "Fire NOC is typically valid for 1 to 3 years depending on the state and building classification, after which annual audits and renewals are required."
      }
    ]
  },
  "international-business-setup": {
    "id": "international-business-setup",
    "category": "licenses",
    "categoryLabel": "Licenses & Certifications",
    "icon": "\u2708\ufe0f",
    "badge": "Dubai, US, Singapore",
    "title": "International Business Setup & Offshore Company",
    "tagline": "Incorporate your company in Dubai (UAE Freezone), USA (Delaware/Wyoming), UK, or Singapore.",
    "timeline": "5 - 10 Days",
    "govtPortal": "Foreign Corporate Registrars & RBI",
    "filingMode": "100% Online Paperless",
    "overview": "Expanding your business globally unlocks access to international payment gateways (Stripe, Mercury, Wise), venture capital investment, and 0% to low corporate tax jurisdictions. Easy My Taxes manages foreign company incorporation, local registered agents, corporate bank accounts, and RBI Overseas Direct Investment (ODI) compliance under FEMA.",
    "benefits": [
      {
        "title": "Global Stripe & US Banking Access",
        "desc": "Seamlessly open US/UAE business bank accounts (Mercury, Brex, Wio, Emirates NBD) and Stripe gateways."
      },
      {
        "title": "Zero to Low Corporate Tax",
        "desc": "Optimize international profits with Dubai Freezone 0% tax structures and competitive global corporate rates."
      },
      {
        "title": "FEMA ODI RBI Compliance",
        "desc": "100% compliant under Indian FEMA Overseas Direct Investment guidelines to protect Indian promoters."
      }
    ],
    "documents": [
      "Passport of all Directors & Promoters (minimum 6 months validity)",
      "National ID / Aadhaar Card & Proof of Address (Bank statement < 2 months)",
      "Proposed company names and business activity description"
    ],
    "steps": [
      {
        "step": "1",
        "title": "Jurisdiction Selection",
        "desc": "Choosing between USA (Delaware C-Corp/LLC), Dubai Freezone (IFZA/Meydan), Singapore, or UK."
      },
      {
        "step": "2",
        "title": "Filing & Registered Agent",
        "desc": "Executing incorporation with foreign state departments and securing official registered agent."
      },
      {
        "step": "3",
        "title": "EIN & Digital Bank Setup",
        "desc": "Procuring US Federal EIN / UAE Tax TRN and opening international multi-currency accounts."
      },
      {
        "step": "4",
        "title": "RBI ODI Reporting",
        "desc": "Filing Overseas Direct Investment (ODI) disclosures through Indian Authorized Dealer bank."
      }
    ],
    "deliverables": [
      "Official Certificate of Formation / Incorporation from Foreign Registrar",
      "US Federal Employer Identification Number (EIN) / UAE Commercial License",
      "Operating Agreement / Articles of Association",
      "International Business Bank Account Integration Support"
    ],
    "faqs": [
      {
        "q": "Can Indian residents legally own a company in the USA or Dubai?",
        "a": "Yes! Indian residents can legally invest and incorporate companies abroad under the RBI Overseas Direct Investment (ODI) or Liberalised Remittance Scheme (LRS) frameworks."
      }
    ]
  },
  "itr-salaried": {
    "id": "itr-salaried",
    "category": "itr",
    "categoryLabel": "Income Tax Returns (ITR)",
    "icon": "\ud83d\udcdd",
    "badge": "AY 2026-27 Default & New Slabs",
    "title": "Salaried Individual ITR Filing (AY 2026-27)",
    "tagline": "Expert CA-assisted ITR-1 / ITR-2 filing for salaried professionals with single/multiple Form 16, ESOPs, and allowances.",
    "timeline": "24 - 48 Hours",
    "govtPortal": "Income Tax Department (E-Filing 2.0)",
    "filingMode": "100% Online Paperless",
    "overview": "Comprehensive income tax return filing for salaried employees calibrated for Assessment Year 2026-27. Directed by CA Pradeep Agarwal, we perform 100% reconciliation with Annual Information Statement (AIS) and Tax Information Summary (TIS), optimize Old vs New Tax Regime deductions, and ensure zero defective notices.",
    "detailedOverview": "\n      <p style=\"font-size: 1.1rem; color: var(--primary-950); font-weight: 600; line-height: 1.75;\">\n        For <strong>Assessment Year 2026-27 (FY 2025-26)</strong>, the Revised New Tax Regime is the statutory default regime with a <strong>\u20b975,000 Standard Deduction</strong> for salaried employees and complete tax rebate up to \u20b97.75 Lakhs under Section 87A. However, if you claim significant deductions under Section 80C, 80D (health insurance), Section 24(b) (home loan interest), and HRA, the Old Regime may yield thousands in additional tax refunds.\n      </p>\n      <p>\n        Filing salary returns without CA verification frequently leads to <strong>defective return notices under Section 139(9)</strong> or demand notices under Section 143(1) due to mismatches between Form 16 and your AIS/26AS. Easy My Taxes conducts a line-by-line tax credit matching, reconciles multiple Form 16s across mid-year job switches, and handles complicated foreign ESOP perks accurately.\n      </p>\n    ",
    "whoIsItFor": [
      {
        "icon": "\ud83d\udcbc",
        "title": "Single & Multiple Form 16",
        "desc": "Employees who changed employers during the year and received multiple Form 16s."
      },
      {
        "icon": "\ud83d\udcc8",
        "title": "Tech & ESOP Employees",
        "desc": "Professionals with vested ESOPs, RSUs, US stock vesting, and foreign perquisites."
      },
      {
        "icon": "\ud83c\udfe0",
        "title": "Home Loan & HRA Claimants",
        "desc": "Salaried taxpayers maximizing dual benefits of HRA and Section 24(b) interest deduction."
      },
      {
        "icon": "\ud83d\udcb0",
        "title": "High Net Worth Earners",
        "desc": "Individuals earning > \u20b950 Lakhs requiring Schedule AL (Assets & Liabilities) disclosure."
      }
    ],
    "eligibility": [
      {
        "icon": "\ud83d\udcd1",
        "label": "Primary Document",
        "value": "Form 16 Part A & B",
        "desc": "TDS certificate issued by your employer(s) for the financial year."
      },
      {
        "icon": "\ud83d\udd0d",
        "label": "Tax Credit Records",
        "value": "AIS & 26AS Matching",
        "desc": "Reconciled against the Income Tax Portal's Annual Information Statement."
      },
      {
        "icon": "\ud83c\udfe6",
        "label": "Bank Disclosure",
        "value": "All Active Accounts",
        "desc": "Mandatory reporting of all savings bank accounts held in India for refund pre-validation."
      },
      {
        "icon": "\ud83d\udccb",
        "label": "Deductions Proof",
        "value": "Investment Receipts",
        "desc": "ELSS, PPF, NPS, Mediclaim, and Home Loan interest certificates if choosing Old Regime."
      }
    ],
    "benefits": [
      {
        "title": "Dual-Regime Tax Optimization",
        "desc": "We mathematically simulate your exact liability under both Old and New regimes to choose the one that gives maximum tax savings."
      },
      {
        "title": "Multiple Form 16 Harmonization",
        "desc": "Eliminate double standard deduction errors and calculate exact aggregate tax when switching jobs."
      },
      {
        "title": "Zero Defective Notice Guarantee",
        "desc": "Every computation sheet is reviewed by Senior CA Pradeep Agarwal to guarantee 100% AIS reconciliation."
      }
    ],
    "documents": [
      "Form 16 (Part A and Part B from all employers)",
      "Annual Information Statement (AIS) & Form 26AS",
      "Bank Account Statements for all active savings accounts",
      "HRA Rent Receipts / Lease Agreement (Landlord PAN if rent > \u20b91L)",
      "Home Loan Provisional Interest Certificate (Sec 24 & 80EEA)",
      "Proof of 80C, 80D, and 80CCD(1B) NPS investments (for Old Regime)"
    ],
    "steps": [
      {
        "step": "1",
        "title": "Document Upload & AIS Fetch",
        "desc": "Securely upload your Form 16 and bank statements; our system fetches your live AIS & TIS."
      },
      {
        "step": "2",
        "title": "CA Computation & Regime Simulation",
        "desc": "Dedicated CA computes taxable salary, reconciles allowances, and optimizes Old vs New regime."
      },
      {
        "step": "3",
        "title": "Review & Approval",
        "desc": "You review the final draft computation sheet and net tax saving / refund amount."
      },
      {
        "step": "4",
        "title": "E-Filing & Verification Acknowledgement",
        "desc": "Return is officially submitted on the IT portal and e-verification acknowledgement (ITR-V) is issued."
      }
    ],
    "deliverables": [
      "Official Income Tax Acknowledgement (ITR-V)",
      "Detailed CA Computation of Income Sheet",
      "Old vs New Regime Comparative Tax Savings Report",
      "AIS / 26AS Tax Credit Matching Verification Statement",
      "Year-Round Tax Notice Safeguard & Advisory"
    ],
    "postCompliances": [
      {
        "badge": "Mandatory",
        "timeline": "Within 30 Days of Filing",
        "title": "E-Verification via Aadhaar OTP",
        "desc": "E-verify return within 30 days of submission to ensure the return is legally valid."
      },
      {
        "badge": "Periodic",
        "timeline": "Within 15-45 Days",
        "title": "Track Intimation u/s 143(1)",
        "desc": "Monitor processing status and instant refund credit directly to your pre-validated bank account."
      },
      {
        "badge": "Annual",
        "timeline": "By 31st July Annually",
        "title": "Timely Filing Adherence",
        "desc": "File before statutory deadline to avoid \u20b95,000 late fee u/s 234F and 1% monthly interest u/s 234A."
      }
    ],
    "faqs": [
      {
        "q": "Which tax regime is better for salaried employees in AY 2026-27?",
        "a": "For AY 2026-27, the New Tax Regime is the default regime with a \u20b975,000 standard deduction and zero tax for incomes up to \u20b97.75 Lakhs. However, if your total eligible deductions (80C, 80D, NPS, Home Loan Interest under Section 24b, and HRA) exceed \u20b93.75 Lakhs to \u20b94 Lakhs, the Old Regime may save you substantially more. Our CAs calculate both to pick your maximum refund."
      },
      {
        "q": "I changed jobs this year and received two Form 16s. How should I file?",
        "a": "When you switch jobs, both employers often apply the basic exemption limit and \u20b975,000 standard deduction, leading to under-deducted TDS. Filing them directly without reconciliation will attract a tax demand notice. We consolidate both Form 16s, adjust the standard deduction once, and compute the correct aggregate liability."
      },
      {
        "q": "How do I report foreign stock options (ESOPs / RSUs) from an MNC?",
        "a": "If you hold shares or options in a foreign employer (e.g. US parent company), you MUST file Form ITR-2 and disclose these foreign holdings under Schedule FA (Foreign Assets). Failure to report foreign assets attracts a stringent penalty under the Black Money Act. Our firm specializes in Schedule FA compliance."
      },
      {
        "q": "Can I claim HRA if I pay rent to my parents?",
        "a": "Yes! You can legally claim HRA exemption by paying rent to your parents, provided your parents own the property, you transfer the rent via bank channel, maintain rent receipts, and your parents declare the rental income in their individual ITR."
      }
    ]
  },
  "itr-capital-gains": {
    "id": "itr-capital-gains",
    "category": "itr",
    "categoryLabel": "Income Tax Returns (ITR)",
    "icon": "\ud83d\udcc8",
    "badge": "Stocks, Crypto, F&O & Property",
    "title": "Capital Gains & Trading ITR Filing (AY 2026-27)",
    "tagline": "Precision computation and loss carry-forward for Stocks, Mutual Funds, Crypto (VDA), Futures & Options, and Real Estate.",
    "timeline": "2 - 3 Days",
    "govtPortal": "Income Tax Department (E-Filing 2.0)",
    "filingMode": "100% Online Paperless",
    "overview": "Specialized tax computation for active stock market traders, equity investors, crypto asset holders, and property sellers. We consolidate multi-broker P&L statements (Zerodha, Groww, Upstox), audit Section 112A equity gains, set up 8-year loss carry forwards, and ensure 100% AIS matching.",
    "detailedOverview": "\n      <p style=\"font-size: 1.1rem; color: var(--primary-950); font-weight: 600; line-height: 1.75;\">\n        Capital gains taxation in India has become highly scrutinized with automated broker reporting directly to your <strong>Annual Information Statement (AIS)</strong>. Any discrepancy between your broker's reported turnover and your filed return results in automated tax demand notices under Section 143(1).\n      </p>\n      <p>\n        Different asset classes require distinct tax treatment: <strong>Listed Equity & Mutual Funds</strong> (STCG at 20% u/s 111A, LTCG at 12.5% u/s 112A above \u20b91.25 Lakh exemption); <strong>Futures & Options (F&O)</strong> (treated as non-speculative business income under ITR-3 requiring balance sheet prep); <strong>Crypto & VDAs</strong> (flat 30% tax u/s 115BBH with zero loss set-off); and <strong>Real Estate</strong> (LTCG with Section 54/54EC capital gain exemptions).\n      </p>\n    ",
    "whoIsItFor": [
      {
        "icon": "\ud83d\udcca",
        "title": "Equity & Mutual Fund Investors",
        "desc": "Taxpayers who sold stocks or redeemed mutual funds across Zerodha, Groww, INDmoney, etc."
      },
      {
        "icon": "\ud83d\udcc9",
        "title": "F&O & Intraday Traders",
        "desc": "Derivatives traders requiring business turnover computation and loss carry-forward setup."
      },
      {
        "icon": "\ud83e\ude99",
        "title": "Crypto & NFT Holders",
        "desc": "Investors trading Bitcoin, Ethereum, or VDAs subject to Section 115BBH 30% tax and 1% TDS."
      },
      {
        "icon": "\ud83c\udfe1",
        "title": "Property & Land Sellers",
        "desc": "Individuals selling residential, commercial property, or land claiming Section 54/54EC relief."
      }
    ],
    "eligibility": [
      {
        "icon": "\ud83d\udcd1",
        "label": "Broker Reports",
        "value": "Consolidated Tax P&L",
        "desc": "Annual capital gain and trading P&L statement from all operational broker platforms."
      },
      {
        "icon": "\ud83e\ude99",
        "label": "Crypto Exchanges",
        "value": "VDA Transaction Ledger",
        "desc": "CoinDCX, WazirX, Binance, or CoinSwitch transaction history and TDS certificates."
      },
      {
        "icon": "\ud83c\udfe1",
        "label": "Property Deeds",
        "value": "Sale & Purchase Deeds",
        "desc": "Registered deeds, stamp valuation records, and improvement expenditure receipts."
      },
      {
        "icon": "\ud83d\udd0d",
        "label": "Tax Matching",
        "value": "AIS Schedule 112A",
        "desc": "Verification against Section 112A and 111A capital transactions in your portal AIS."
      }
    ],
    "benefits": [
      {
        "title": "8-Year Loss Carry Forward",
        "desc": "Filing ITR-2 or ITR-3 on time lets you legally carry forward short-term, long-term, and F&O losses to offset future profits for up to 8 assessment years."
      },
      {
        "title": "Section 54 / 54EC Property Exemptions",
        "desc": "Expert guidance on investing property sale proceeds in Section 54EC capital gain bonds (REC, NHAI) or residential property to legally wipe out capital gain tax."
      },
      {
        "title": "Multi-Broker Consolidation",
        "desc": "We consolidate trade books across 5+ brokerage apps without manual data entry errors."
      }
    ],
    "documents": [
      "Consolidated Annual Tax P&L Statement from all brokers",
      "Form 26AS & Annual Information Statement (AIS)",
      "Crypto transaction report / 1% TDS (Form 16A) certificates",
      "Property Sale Deed & Original Purchase Deed (with indexation proofs)",
      "Section 54EC Capital Gain Bond allotment certificate (if claimed)",
      "Bank statements showing capital gains receipt and reinvestment"
    ],
    "steps": [
      {
        "step": "1",
        "title": "Upload P&L & Trades",
        "desc": "Upload your broker Tax P&L reports (Excel/PDF) and property deed copies."
      },
      {
        "step": "2",
        "title": "Turnover & Gain Computation",
        "desc": "CA categorizes STCG, LTCG, business turnover, and grandfathering benefits under Sec 112A."
      },
      {
        "step": "3",
        "title": "Loss Set-Off & Optimization",
        "desc": "Intra-head and inter-head losses are matched to minimize your current year payable tax."
      },
      {
        "step": "4",
        "title": "ITR-2 / ITR-3 Filing",
        "desc": "Comprehensive return is submitted on the e-filing portal and acknowledgement is provided."
      }
    ],
    "deliverables": [
      "Official ITR-2 / ITR-3 E-Filing Acknowledgement",
      "Detailed Capital Gains Computation Sheet (Scrip-wise & Asset-wise)",
      "Loss Carry Forward Schedule (Trackable for 8 Years)",
      "Business Balance Sheet & P&L (For F&O / Intraday traders)",
      "Section 54 / 54EC Exemption Verification Certificate"
    ],
    "postCompliances": [
      {
        "badge": "Mandatory",
        "timeline": "Before 31st July",
        "title": "File Within Statutory Due Date",
        "desc": "Losses CANNOT be carried forward if the return is filed after the July deadline under Section 80."
      },
      {
        "badge": "Statutory",
        "timeline": "Quarterly",
        "title": "Advance Tax on Capital Gains",
        "desc": "Pay advance tax on the installment immediately following the capital gain transaction to avoid Sec 234C interest."
      }
    ],
    "faqs": [
      {
        "q": "What are the revised capital gains tax rates under the latest Finance Act?",
        "a": "Short-Term Capital Gains (STCG) on listed equity under Section 111A are taxed at 20% (previously 15%). Long-Term Capital Gains (LTCG) under Section 112A are taxed at 12.5% (previously 10%) with an increased basic annual exemption limit of \u20b91.25 Lakhs."
      },
      {
        "q": "Are F&O (Futures & Options) trading losses treated as capital losses?",
        "a": "No. Under Section 43(5) of the Income Tax Act, trading in derivatives (F&O) is categorized as Non-Speculative Business Income, NOT capital gains. F&O traders must file Form ITR-3. These losses can be set off against any income except salary and carried forward for 8 years."
      },
      {
        "q": "How is Cryptocurrency / VDA taxed in India?",
        "a": "Under Section 115BBH, any income from the transfer of Virtual Digital Assets (VDAs) including Crypto and NFTs is taxed at a flat rate of 30% plus cess and surcharge. Crucially, NO expenses (except cost of acquisition) can be deducted, and crypto losses CANNOT be set off against crypto gains or any other income."
      },
      {
        "q": "Can I save tax on property sale capital gains?",
        "a": "Yes. Under Section 54, you can claim full exemption by reinvesting LTCG into another residential property in India within 2 years (or construct within 3 years). Under Section 54EC, you can invest up to \u20b950 Lakhs in specified capital gain bonds (REC, NHAI, PFC) within 6 months of sale."
      }
    ]
  },
  "itr-business-professionals": {
    "id": "itr-business-professionals",
    "category": "itr",
    "categoryLabel": "Income Tax Returns (ITR)",
    "icon": "\ud83d\udcbc",
    "badge": "Section 44ADA & 44AD Presumptive",
    "title": "ITR for Business & Professionals (Sec 44AD / 44ADA)",
    "tagline": "Pay tax on just 50% of revenue for professionals or 6-8% for small businesses with zero accounting audit burden.",
    "timeline": "24 - 48 Hours",
    "govtPortal": "Income Tax Department",
    "filingMode": "100% Online Paperless",
    "overview": "Designed for software consultants, doctors, lawyers, architects, designers, freelancers, and small business owners. We leverage presumptive taxation schemes under Section 44ADA and 44AD to declare simplified net profit, claim legitimate business deductions, and eliminate the requirement to maintain complex accounting ledgers or statutory audits.",
    "detailedOverview": "\n      <p style=\"font-size: 1.1rem; color: var(--primary-950); font-weight: 600; line-height: 1.75;\">\n        Under <strong>Section 44ADA</strong>, specified professionals (software consultants, web developers, doctors, lawyers, technical consultants, interior designers) with gross receipts up to <strong>\u20b975 Lakhs</strong> (if digital receipts exceed 95%) can declare just <strong>50% of their gross receipts as taxable profit</strong>. The remaining 50% is treated as statutory business expenses with zero requirement to maintain physical bills or undergo an audit.\n      </p>\n      <p>\n        Similarly, under <strong>Section 44AD</strong>, small commercial businesses, traders, and contractors with turnover up to <strong>\u20b93 Crores</strong> (if digital transactions exceed 95%) can declare profit at a nominal <strong>6% for digital receipts</strong> (8% for cash receipts). Easy My Taxes ensures your presumptive filing is calibrated with Form 26AS TDS credits under Section 194J and 194C.\n      </p>\n    ",
    "whoIsItFor": [
      {
        "icon": "\ud83d\udcbb",
        "title": "IT & Software Consultants",
        "desc": "Remote software developers, technical contractors, and cloud consultants earning consulting fees."
      },
      {
        "icon": "\ud83c\udfa8",
        "title": "Freelancers & Creative Agencies",
        "desc": "UI/UX designers, digital marketers, content creators, and copywriters billing Indian & global clients."
      },
      {
        "icon": "\ud83e\ude7a",
        "title": "Doctors, Lawyers & Architects",
        "desc": "Practicing professionals operating private clinics, legal chambers, or architectural practices."
      },
      {
        "icon": "\ud83c\udfea",
        "title": "Small Business Proprietors",
        "desc": "Retailers, distributors, and contractors declaring presumptive turnover under Section 44AD."
      }
    ],
    "eligibility": [
      {
        "icon": "\ud83d\udcb0",
        "label": "Receipts Ceiling",
        "value": "Up to \u20b975L (Professionals)",
        "desc": "Gross receipts up to \u20b975 Lakhs under Sec 44ADA (provided cash receipts \u2264 5%)."
      },
      {
        "icon": "\ud83c\udfea",
        "label": "Business Turnover",
        "value": "Up to \u20b93Cr (Businesses)",
        "desc": "Turnover up to \u20b93 Crores under Sec 44AD (provided cash transactions \u2264 5%)."
      },
      {
        "icon": "\ud83d\udcd1",
        "label": "TDS Certificates",
        "value": "Sec 194J / 194C / 194O",
        "desc": "Reconciled Form 26AS TDS credits deducted by your clients or marketplace platforms."
      },
      {
        "icon": "\ud83c\udfe6",
        "label": "Banking Trail",
        "value": "Current / Savings Account",
        "desc": "Bank statements proving total gross receipts deposited during the financial year."
      }
    ],
    "benefits": [
      {
        "title": "50% Statutory Expense Allowance",
        "desc": "Declare 50% of gross fees as profit and pay tax only on that 50%. The remaining 50% is deemed business expenses with no bills required."
      },
      {
        "title": "Zero Bookkeeping & Audit Burden",
        "desc": "Completely exempt from maintaining detailed books of accounts under Section 44AA or undergoing Tax Audit under Section 44AB."
      },
      {
        "title": "Single Installment Advance Tax",
        "desc": "Presumptive taxpayers only need to pay advance tax once a year by 15th March, rather than in 4 quarterly installments."
      }
    ],
    "documents": [
      "Bank Account Statements showing consulting receipts / client remittances",
      "Form 26AS & AIS showing TDS deducted u/s 194J (10% or 2%) or 194C",
      "Invoices or client payment summaries for the fiscal year",
      "FIRC / BRC certificates for export consulting receipts (if applicable)",
      "PAN Card & Aadhaar Card of the proprietor / professional"
    ],
    "steps": [
      {
        "step": "1",
        "title": "Bank & 26AS Reconciliation",
        "desc": "We reconcile client receipts in your bank against TDS credits in Form 26AS/AIS."
      },
      {
        "step": "2",
        "title": "Presumptive Profit Computation",
        "desc": "CA computes eligible presumptive profit (50% u/s 44ADA or 6% u/s 44AD)."
      },
      {
        "step": "3",
        "title": "Tax Optimization & Deduction",
        "desc": "Apply Section 80C, 80D, 80CCD, and Chapter VI-A deductions to minimize net tax."
      },
      {
        "step": "4",
        "title": "ITR-4 / ITR-3 Submission",
        "desc": "Filing executed on Income Tax portal and official ITR-V acknowledgement provided."
      }
    ],
    "deliverables": [
      "Official ITR-4 (SUGAM) E-Filing Acknowledgement",
      "Detailed Presumptive Profit Computation Sheet",
      "Form 26AS & 194J TDS Reconciliation Statement",
      "Advance Tax Assessment & Compliance Voucher",
      "Professional Certificate of Net Income (For Visa & Bank Loans)"
    ],
    "postCompliances": [
      {
        "badge": "Statutory",
        "timeline": "By 15th March Annually",
        "title": "Advance Tax Payment (100%)",
        "desc": "Presumptive taxpayers must pay 100% of estimated advance tax by 15th March to avoid 234C interest."
      },
      {
        "badge": "Annual",
        "timeline": "By 31st July Annually",
        "title": "ITR Filing Deadline",
        "desc": "File before 31st July to prevent Section 234F late fee and retain presumptive benefits."
      }
    ],
    "faqs": [
      {
        "q": "Can a software developer or web designer claim Section 44ADA?",
        "a": "YES! Software development and information technology services are recognized as technical consultancy under Section 44AA(1) via CBDT notifications. If your gross receipts are up to \u20b975 Lakhs, you can declare 50% as profit under Section 44ADA."
      },
      {
        "q": "Do I need to maintain invoices and expense bills under Section 44ADA?",
        "a": "No. The entire purpose of presumptive taxation under Section 44ADA is to relieve professionals from maintaining physical books of accounts, ledgers, and expense bills. The department statutorily presumes 50% as your expenses."
      },
      {
        "q": "What if my actual profit is less than 50%?",
        "a": "If your actual net profit is lower than 50% and your total income exceeds the basic exemption limit, you CANNOT use presumptive taxation. You must maintain regular books of accounts under Section 44AA and undergo a mandatory Tax Audit by a Chartered Accountant under Section 44AB."
      },
      {
        "q": "Can I claim deductions like 80C and 80D under presumptive taxation?",
        "a": "YES. The 50% presumptive deduction is applied at the business income stage to determine your Gross Total Income (GTI). You can still claim personal deductions like Section 80C, 80D, 80CCD (NPS), and medical insurance under the Old Regime, or enjoy the revised slabs under the New Regime."
      }
    ]
  },
  "itr-nri": {
    "id": "itr-nri",
    "category": "itr",
    "categoryLabel": "Income Tax Returns (ITR)",
    "icon": "\u2708\ufe0f",
    "badge": "Cross-Border & DTAA Advisory",
    "title": "NRI Taxation & Foreign Assets Filing (AY 2026-27)",
    "tagline": "End-to-end tax return filing for Non-Resident Indians with Indian rental income, property sales, NRE/NRO accounts, and DTAA benefits.",
    "timeline": "3 - 5 Days",
    "govtPortal": "Income Tax Department & CBDT",
    "filingMode": "100% Online Paperless",
    "overview": "Specialized cross-border direct tax advisory for Non-Resident Indians (NRIs), Overseas Citizens of India (OCIs), and expatriates. Handled by Senior CA Pradeep Agarwal, we manage residential status determination under Section 6, Foreign Asset reporting under Schedule FA, Double Tax Avoidance Agreement (DTAA) treaty relief, and repatriation certificates (Form 15CA/CB).",
    "detailedOverview": "\n      <p style=\"font-size: 1.1rem; color: var(--primary-950); font-weight: 600; line-height: 1.75;\">\n        Determining your exact residential status under <strong>Section 6 of the Income Tax Act</strong> is the foundation of Indian taxation. For NRIs, only income that accrues, arises, or is received in India (such as rental income, capital gains on Indian stocks/property, or interest on NRO accounts) is taxable in India. Income earned outside India is 100% tax-exempt.\n      </p>\n      <p>\n        NRIs frequently suffer high <strong>TDS deductions (often 20% to 30% plus surcharge)</strong> on Indian income. We help you claim Double Tax Avoidance Agreement (DTAA) relief under Article 12/13, secure Tax Residency Certificates (TRC), claim full refunds of excess TDS, and provide Chartered Accountant certification under <strong>Form 15CB and Form 15CA</strong> for remitting funds from NRO to NRE or foreign accounts.\n      </p>\n    ",
    "whoIsItFor": [
      {
        "icon": "\ud83c\udf0d",
        "title": "NRIs with Indian Incomes",
        "desc": "Non-residents earning rental income, dividends, or bank interest on NRO deposits in India."
      },
      {
        "icon": "\ud83c\udfe1",
        "title": "Indian Property Sellers",
        "desc": "NRIs selling ancestral or residential property in India subject to Section 195 20% TDS."
      },
      {
        "icon": "\ud83c\udfe6",
        "title": "Fund Repatriation Seekers",
        "desc": "Individuals needing Form 15CB CA Certificate to remit funds from NRO accounts abroad."
      },
      {
        "icon": "\ud83d\udcbc",
        "title": "Returning Expatriates (RNOR)",
        "desc": "Individuals relocating to India optimizing Resident but Not Ordinarily Resident (RNOR) tax holiday."
      }
    ],
    "eligibility": [
      {
        "icon": "\ud83d\udec2",
        "label": "Residential Proof",
        "value": "Section 6 Determination",
        "desc": "Physical stay in India less than statutory thresholds (< 182 days or < 120 days for high earners)."
      },
      {
        "icon": "\ud83d\udcd1",
        "label": "Tax Residency",
        "value": "Foreign TRC Certificate",
        "desc": "Tax Residency Certificate from home country to avail DTAA treaty benefits."
      },
      {
        "icon": "\ud83c\udfe6",
        "label": "Bank Classification",
        "value": "NRE & NRO Accounts",
        "desc": "Complete statements of NRO (taxable) and NRE (tax-exempt) bank accounts in India."
      },
      {
        "icon": "\ud83d\udcc4",
        "label": "TDS Proof",
        "value": "Form 16A u/s 195",
        "desc": "TDS certificates reflecting tax deducted on Indian capital gains or rent."
      }
    ],
    "benefits": [
      {
        "title": "DTAA Double Taxation Relief",
        "desc": "Avoid paying tax twice on the same income by leveraging bilateral DTAA tax credits under Section 90."
      },
      {
        "title": "Fast TDS Refund Recovery",
        "desc": "Recover thousands in excessive 20-30% TDS deducted on NRO interest and property sales."
      },
      {
        "title": "Form 15CA / 15CB CA Certification",
        "desc": "Legally compliant CA certification to remit up to $1 Million per financial year under RBI LRS route."
      }
    ],
    "documents": [
      "Passport copies with all immigration entry/exit stamps for the financial year",
      "Tax Residency Certificate (TRC) and Form 10F from foreign tax authority",
      "NRO & NRE Bank Account Statements and TDS Certificates (Form 16A)",
      "Property Sale Agreement and Form 16B/26QB (if Indian property sold)",
      "Broker Tax P&L Statement for Indian mutual funds or equity trades",
      "Indian PAN Card copy and foreign address verification"
    ],
    "steps": [
      {
        "step": "1",
        "title": "Residential Status Determination",
        "desc": "CA calculates physical days in India to determine NRI / RNOR / ROR status under Sec 6."
      },
      {
        "step": "2",
        "title": "Income & DTAA Computation",
        "desc": "Isolate Indian sourced income, compute capital gains, and apply DTAA treaty tax credits."
      },
      {
        "step": "3",
        "title": "Form 10F & TRC Filing",
        "desc": "Submit Form 10F online on income tax portal to substantiate DTAA exemption."
      },
      {
        "step": "4",
        "title": "ITR-2 Submission & 15CA/CB",
        "desc": "File ITR-2 with Schedule FSI/TR, process TDS refund, and issue 15CB remittance certificate."
      }
    ],
    "deliverables": [
      "Official ITR-2 E-Filing Acknowledgement (NRI Status)",
      "Residential Status Legal Advisory Note (Section 6)",
      "DTAA Foreign Tax Credit (FTC) Computation & Form 67",
      "Form 15CB CA Certificate & Form 15CA Filing (for funds transfer)",
      "Full TDS Refund Tracking until bank credit"
    ],
    "postCompliances": [
      {
        "badge": "Statutory",
        "timeline": "Before Filing ITR",
        "title": "File Form 67 (Foreign Tax Credit)",
        "desc": "Mandatory filing of Form 67 before filing ITR to legally claim foreign tax credits in India."
      },
      {
        "badge": "Annual",
        "timeline": "By 31st July",
        "title": "ITR-2 Filing Deadline",
        "desc": "Submit return within statutory deadline to ensure uninterrupted NRO account operations."
      }
    ],
    "faqs": [
      {
        "q": "Is income earned in the USA, UK, or UAE taxable in India for an NRI?",
        "a": "NO. If your residential status under Section 6 is Non-Resident Indian (NRI), your foreign salary, foreign business income, and foreign investments are 100% TAX-FREE in India. You only pay tax in India on income that originates in India (such as rent from Indian property, NRO interest, or Indian capital gains)."
      },
      {
        "q": "Is interest earned on NRE and NRO bank accounts taxable in India?",
        "a": "Interest earned on an NRE (Non-Resident External) account is 100% TAX-FREE in India under Section 10(4). However, interest earned on an NRO (Non-Resident Ordinary) account is fully taxable in India and banks deduct 30% TDS plus cess. We file your ITR to claim back excess TDS."
      },
      {
        "q": "What is Form 15CA and Form 15CB?",
        "a": "Form 15CB is a statutory certificate issued by a Chartered Accountant certifying that appropriate taxes have been paid on funds being remitted abroad. Form 15CA is an online declaration filed by the remitter based on Form 15CB. Authorized Dealer banks require both forms before transferring funds from an NRO account to a foreign account."
      },
      {
        "q": "Can an NRI sell property in India and remit the funds abroad?",
        "a": "Yes! An NRI can sell residential or commercial property in India. After paying applicable capital gains tax and obtaining Form 15CA/15CB from our CA firm, you can remit up to USD 1,000,000 (1 Million US Dollars) per financial year under RBI guidelines."
      }
    ]
  },
  "itr-tax-notice": {
    "id": "itr-tax-notice",
    "category": "itr",
    "categoryLabel": "Income Tax Returns (ITR)",
    "icon": "\u2696\ufe0f",
    "badge": "Direct Representation by Senior CA",
    "title": "Tax Notice & Scrutiny Resolution (143/139/148)",
    "tagline": "Professional legal drafting, defective return rectification, and representation for income tax notices directly by CA Pradeep Agarwal.",
    "timeline": "2 - 5 Days",
    "govtPortal": "Income Tax Department & ITAT",
    "filingMode": "100% Online Paperless",
    "overview": "Defend against automated computer-generated demand notices, defective return intimations, AIS discrepancies, and reassessment notices. Handled personally by Senior Chartered Accountant CA Pradeep Agarwal (FCA, DISA), we formulate strong legal replies, file Section 154 rectification petitions, and prevent penalties or prosecution.",
    "detailedOverview": "\n      <p style=\"font-size: 1.1rem; color: var(--primary-950); font-weight: 600; line-height: 1.75;\">\n        With the deployment of the Income Tax Department's AI-driven <strong>Insight Portal and Faceless Assessment Scheme</strong>, notices are automatically generated for cash deposits, AIS mismatches, high-value credit card spends, unregistered crypto transactions, and disputed deduction claims.\n      </p>\n      <p>\n        Ignoring a tax notice or submitting an unverified reply can escalate into a formal ex-parte best judgment assessment under Section 144, an automatic freeze of your bank accounts, or penalties ranging up to <strong>200% of tax payable under Section 270A</strong>. Our practice provides thorough diagnostic analysis of your case, drafts rigorous legal and technical replies citing relevant ITAT/High Court case laws, and rectifies errors on the portal.\n      </p>\n    ",
    "whoIsItFor": [
      {
        "icon": "\u26a0\ufe0f",
        "title": "Section 143(1) Demand Notices",
        "desc": "Taxpayers receiving automated intimation with unexpected tax demand or reduced refund."
      },
      {
        "icon": "\ud83d\udcd1",
        "title": "Section 139(9) Defective Returns",
        "desc": "Filings flagged as defective due to balance sheet errors, turnover mismatches, or missing schedules."
      },
      {
        "icon": "\ud83d\udd0d",
        "title": "Section 148 / 148A Reassessment",
        "desc": "Cases reopened by the tax department for alleged income escaping assessment in previous years."
      },
      {
        "icon": "\ud83c\udfdb\ufe0f",
        "title": "Section 154 Rectification Petitions",
        "desc": "Taxpayers seeking correction of apparent clerical, TDS, or advance tax credit errors."
      }
    ],
    "eligibility": [
      {
        "icon": "\ud83d\udcc4",
        "label": "Notice Document",
        "value": "Notice DIN & PDF",
        "desc": "Official notice downloaded from e-filing portal with valid Document Identification Number (DIN)."
      },
      {
        "icon": "\ud83d\udcc5",
        "label": "Statutory Timeline",
        "value": "Within Response Window",
        "desc": "Filing reply within 15 to 30 days of notice issuance (or seeking formal extension of time)."
      },
      {
        "icon": "\ud83d\udcd1",
        "label": "Original ITR Record",
        "value": "Computation & ITR-V",
        "desc": "Original computation sheet and ITR-V acknowledgement of the disputed assessment year."
      },
      {
        "icon": "\ud83d\udcda",
        "label": "Substantiating Proof",
        "value": "Vouchers & Statements",
        "desc": "Bank statements, contract notes, gift deeds, or agreement copies disproving the tax allegation."
      }
    ],
    "benefits": [
      {
        "title": "Direct Senior CA Representation",
        "desc": "Handled directly by CA Pradeep Agarwal (FCA, DISA) with 15+ years of litigation and assessment experience."
      },
      {
        "title": "100% Demand Elimination",
        "desc": "Over 92% of erroneous Section 143(1) demands are successfully resolved to \u20b90 via legal rectification."
      },
      {
        "title": "Penalty & Prosecution Protection",
        "desc": "Ensure your written submission safeguards you against Section 270A under-reporting penalties."
      }
    ],
    "documents": [
      "Copy of the Income Tax Notice / Intimation received with DIN",
      "Original ITR acknowledgement (ITR-V) and Computation Sheet",
      "Annual Information Statement (AIS) and Form 26AS of the relevant AY",
      "Bank statements supporting the disputed transactions",
      "Property deeds, sale receipts, or gift deeds (if notice concerns capital transactions)",
      "E-filing portal login credentials for official submission"
    ],
    "steps": [
      {
        "step": "1",
        "title": "Notice Diagnostic & Audit",
        "desc": "CA Pradeep Agarwal examines the notice DIN, root cause, and AIS data mismatch."
      },
      {
        "step": "2",
        "title": "Legal Reply Formulation",
        "desc": "Drafting a comprehensive technical legal reply citing relevant judicial precedents and CBDT circulars."
      },
      {
        "step": "3",
        "title": "Client Review & Finalization",
        "desc": "Reviewing the drafted reply and evidence bundle with you before submission."
      },
      {
        "step": "4",
        "title": "Portal Submission & Follow-Up",
        "desc": "Official electronic submission under 'e-Proceedings' and continuous tracking until order is passed."
      }
    ],
    "deliverables": [
      "Officially Drafted Legal Written Submission with Case Law Citations",
      "E-Proceedings Submission Acknowledgement Receipt",
      "Section 154 Online Rectification Application (if applicable)",
      "Revised Computation of Income Sheet",
      "Final Order Tracker and Demand Cancellation Intimation"
    ],
    "postCompliances": [
      {
        "badge": "Mandatory",
        "timeline": "Within 30 Days of Notice",
        "title": "Submit Response or Seek Adjournment",
        "desc": "Never ignore the notice deadline; file the response or an adjournment request on the portal."
      },
      {
        "badge": "Continuous",
        "timeline": "Until Rectification Order",
        "title": "Monitor e-Proceedings Tab",
        "desc": "Track assessing officer remarks and ensure demand is wiped out from 'Outstanding Demand' tab."
      }
    ],
    "faqs": [
      {
        "q": "What happens if I ignore an Income Tax Notice?",
        "a": "Never ignore an income tax notice! If you fail to respond within the stipulated time, the Assessing Officer will pass an 'Ex-Parte Best Judgment Assessment' under Section 144, computing maximum tax and imposing a 50% to 200% penalty under Section 270A, and may initiate bank account attachment."
      },
      {
        "q": "I received an intimation under Section 143(1) with a huge tax demand due to TDS mismatch. What should I do?",
        "a": "This is one of the most common errors. It occurs when your deductor/employer deposited TDS under the wrong PAN or delayed filing their quarterly TDS return. Do NOT pay the demand immediately! We file a Rectification Application under Section 154 with proof of TDS credits, wiping out the demand completely."
      },
      {
        "q": "What is a Defective Return Notice under Section 139(9)?",
        "a": "A notice under Section 139(9) means your filed return contains incomplete schedules, balance sheet mismatches, or gross receipts that don't align with the selected ITR form. You are given 15 days to correct and file a revised response. If not filed, the return is treated as invalid (never filed)."
      },
      {
        "q": "Can a notice be issued for transactions that happened 3 or 5 years ago?",
        "a": "Yes. Under Section 148/148A, the department can reopen assessments up to 3 years from the end of the relevant assessment year, or up to 10 years if they possess evidence that escaped income exceeds \u20b950 Lakhs. We specialize in challenging Section 148 jurisdictional notices."
      }
    ]
  },
  "itr-updated": {
    "id": "itr-updated",
    "category": "itr",
    "categoryLabel": "Income Tax Returns (ITR)",
    "icon": "\ud83d\udd04",
    "badge": "Section 139(8A) Amnesty",
    "title": "Updated Return (ITR-U) Filing (Past 2 Years)",
    "tagline": "Missed filing your ITR or omitted income in the last 2 years? File an Updated Return under Section 139(8A) and avoid tax notices.",
    "timeline": "24 - 48 Hours",
    "govtPortal": "Income Tax Department",
    "filingMode": "100% Online Paperless",
    "overview": "Introduced under Section 139(8A) of the Income Tax Act, Form ITR-U offers a golden statutory window to taxpayers who missed their original and belated filing deadlines or omitted significant income (such as crypto, capital gains, or secondary salary) in the past two assessment years.",
    "detailedOverview": "\n      <p style=\"font-size: 1.1rem; color: var(--primary-950); font-weight: 600; line-height: 1.75;\">\n        Under <strong>Section 139(8A)</strong>, taxpayers can voluntarily file an <strong>Updated Return (ITR-U) within 24 months</strong> from the end of the relevant assessment year. This provides complete statutory immunity against search, seizure, and criminal prosecution under Section 276C.\n      </p>\n      <p>\n        An ITR-U can be filed to declare un-reported income, correct wrong head of income, or regularize high-value financial transactions appearing in your AIS. The taxpayer pays additional statutory tax: <strong>25% additional tax</strong> if filed within 12 months, or <strong>50% additional tax</strong> if filed between 12 and 24 months. Note: ITR-U cannot be used to claim a fresh refund or increase an existing refund.\n      </p>\n    ",
    "whoIsItFor": [
      {
        "icon": "\u23f3",
        "title": "Missed Return Filers",
        "desc": "Taxpayers who missed both the 31st July and 31st December belated filing deadlines."
      },
      {
        "icon": "\ud83d\udd0d",
        "title": "Omitted Income Rectification",
        "desc": "Individuals who forgot to declare stock gains, crypto earnings, or interest in past years."
      },
      {
        "icon": "\u26a0\ufe0f",
        "title": "AIS Discrepancy Avoidance",
        "desc": "Taxpayers receiving SMS/email compliance nudges from the department for undeclared trades."
      },
      {
        "icon": "\ud83c\udfe6",
        "title": "Loan & Visa Applicants",
        "desc": "Borrowers needing consecutive past 2-3 years of verified ITR acknowledgements for major bank loans."
      }
    ],
    "eligibility": [
      {
        "icon": "\ud83d\udcc5",
        "label": "Eligible Assessment Years",
        "value": "Past 2 Years (AY 24-25 & 25-26)",
        "desc": "Available for preceding 2 assessment years within 24 months from the end of the AY."
      },
      {
        "icon": "\ud83d\udcb0",
        "label": "Tax Position",
        "value": "Additional Tax Payable",
        "desc": "Must result in additional tax liability or reduction of carried forward losses (no fresh refunds)."
      },
      {
        "icon": "\ud83d\udd0d",
        "label": "Litigation Status",
        "value": "No Ongoing Search/Seizure",
        "desc": "Not available if search/survey u/s 132 has been initiated or prosecution is pending."
      }
    ],
    "benefits": [
      {
        "title": "Protection from Penal Prosecution",
        "desc": "Voluntary disclosure under Section 139(8A) grants complete statutory immunity from criminal prosecution and seizure."
      },
      {
        "title": "Avoid 200% Misreporting Penalty",
        "desc": "Pay flat 25% or 50% additional tax instead of facing a 200% under-reporting penalty under Section 270A."
      },
      {
        "title": "Build Verified 3-Year Credit Track",
        "desc": "Enable high-value home loans, commercial credit, and foreign business visa processing."
      }
    ],
    "documents": [
      "Bank Statements and Form 26AS for the relevant past Assessment Year",
      "Annual Information Statement (AIS) and TIS for the relevant year",
      "Broker Tax P&L statements showing undeclared capital gains or crypto",
      "Original ITR-V and computation sheet (if an original return was filed)",
      "PAN Card and Aadhaar Card copy"
    ],
    "steps": [
      {
        "step": "1",
        "title": "AIS & Omission Diagnostic",
        "desc": "CA calculates undeclared income from AIS and evaluates additional tax liability."
      },
      {
        "step": "2",
        "title": "Part A & Part B Computation",
        "desc": "Computation of 25% or 50% additional tax under Section 140B."
      },
      {
        "step": "3",
        "title": "Challan Payment (Code 140B)",
        "desc": "Client pays tax and additional tax on e-filing portal under self-assessment."
      },
      {
        "step": "4",
        "title": "ITR-U Electronic Submission",
        "desc": "Updated return is transmitted with Form 139(8A) details and acknowledgement is generated."
      }
    ],
    "deliverables": [
      "Official Form ITR-U E-Filing Acknowledgement",
      "Section 140B Additional Tax Computation Sheet",
      "Self-Assessment Tax Challan Receipt (BSR Code & Challan No.)",
      "Comprehensive AIS Reconciliation Certification"
    ],
    "postCompliances": [
      {
        "badge": "Mandatory",
        "timeline": "Immediate",
        "title": "E-Verify Return",
        "desc": "Complete instant e-verification via Aadhaar OTP or Digital Signature."
      },
      {
        "badge": "Statutory",
        "timeline": "Permanent",
        "title": "Preserve 140B Challan",
        "desc": "Archive Challan and ITR-U acknowledgement for future bank due diligence."
      }
    ],
    "faqs": [
      {
        "q": "Can I file an ITR-U to claim a tax refund for a missed year?",
        "a": "NO. The law under Section 139(8A) explicitly states that an Updated Return CANNOT be filed if it results in a fresh refund, increases an existing refund, or results in a nil tax return. It can only be filed if additional tax is payable or if it reduces carried-forward losses."
      },
      {
        "q": "What is the penalty / additional tax rate under ITR-U?",
        "a": "If you file ITR-U within 12 months from the end of the relevant assessment year, the additional tax is 25% of the aggregate tax and interest. If filed after 12 months but before 24 months, the additional tax is 50% of the aggregate tax and interest."
      },
      {
        "q": "Which assessment years are currently open for ITR-U filing?",
        "a": "Currently, you can file ITR-U for AY 2024-25 (FY 2023-24) at 25% additional tax, and AY 2023-24 (FY 2022-23) at 50% additional tax."
      },
      {
        "q": "Will filing an ITR-U trigger an automatic tax audit?",
        "a": "No. The ITR-U scheme was specifically introduced by the Government of India as an amnesty mechanism to encourage voluntary tax compliance and reduce litigation. Once filed and accepted with payment of Section 140B tax, the assessment is generally finalized without notices."
      }
    ]
  },
  "itr-corporate": {
    "id": "itr-corporate",
    "category": "itr",
    "categoryLabel": "Income Tax Returns (ITR)",
    "icon": "\ud83c\udfe2",
    "badge": "Companies Act & Tax Audit Alignment",
    "title": "Corporate Tax Return Filing (Form ITR-6)",
    "tagline": "Statutory corporate income tax return filing for Private Limited and Public Limited Companies with full MCA financial statement alignment.",
    "timeline": "3 - 5 Days",
    "govtPortal": "Income Tax Department & MCA",
    "filingMode": "100% Online Paperless",
    "overview": "Mandatory annual corporate tax return filing in Form ITR-6 for all companies incorporated in India under the Companies Act 2013. Handled by CA Pradeep Agarwal, we ensure 100% alignment between your audited MCA financial statements (AOC-4), Tax Audit Report (Form 3CA/3CD), Minimum Alternate Tax (MAT), and Section 115BAA concessional tax provisions.",
    "detailedOverview": "\n      <p style=\"font-size: 1.1rem; color: var(--primary-950); font-weight: 600; line-height: 1.75;\">\n        Every company registered in India must statutorily file <strong>Form ITR-6</strong>, irrespective of whether it made a profit, incurred a loss, or conducted zero commercial transactions during the fiscal year. Form ITR-6 is one of the most complex filings in Indian tax law, requiring digital certification via the Managing Director's Class-3 DSC.\n      </p>\n      <p>\n        We optimize your tax liability under the concessional <strong>Section 115BAA (22% corporate tax rate)</strong> or Section 115BAB (15% for new manufacturing companies), reconcile Section 43B statutory dues, verify MAT credit utilization under Section 115JAA, and ensure complete synchronization with your ROC filing (Form AOC-4).\n      </p>\n    ",
    "whoIsItFor": [
      {
        "icon": "\ud83c\udfe2",
        "title": "Private Limited Companies",
        "desc": "All active and pre-revenue domestic companies registered with the Ministry of Corporate Affairs."
      },
      {
        "icon": "\ud83c\udfed",
        "title": "Manufacturing Companies",
        "desc": "Companies availing 15% concessional corporate tax rates under Section 115BAB."
      },
      {
        "icon": "\ud83c\udf10",
        "title": "Indian Subsidiaries of Foreign MNCs",
        "desc": "Subsidiaries requiring Transfer Pricing (Form 3CEB) documentation and corporate ITR filing."
      },
      {
        "icon": "\ud83d\ude80",
        "title": "DPIIT Certified Startups",
        "desc": "Startups claiming 100% 3-year tax holiday under Section 80-IAC."
      }
    ],
    "eligibility": [
      {
        "icon": "\ud83d\udcd1",
        "label": "Audited Financials",
        "value": "Statutory Balance Sheet",
        "desc": "Audited Balance Sheet, P&L, Notes to Accounts, and Auditor's Report signed by CA."
      },
      {
        "icon": "\ud83d\udcca",
        "label": "Tax Audit Report",
        "value": "Form 3CA / 3CD",
        "desc": "Mandatory Tax Audit Report filed on portal if turnover exceeds \u20b91 Crore (or \u20b910Cr for digital)."
      },
      {
        "icon": "\ud83d\udd8b\ufe0f",
        "label": "Digital Signature",
        "value": "Director Class-3 DSC",
        "desc": "Valid Class-3 DSC of the Managing Director or authorized director registered on the portal."
      }
    ],
    "benefits": [
      {
        "title": "Section 115BAA Concessional Tax (22%)",
        "desc": "Opt for the simplified 22% corporate tax regime and eliminate the burden of Minimum Alternate Tax (MAT)."
      },
      {
        "title": "Complete MCA-ITR Reconciliation",
        "desc": "Eliminate notices by ensuring zero variance between your ITR-6 balance sheet and MCA Form AOC-4."
      },
      {
        "title": "Startup India 80-IAC Claim",
        "desc": "Properly claim and document 100% tax holiday deduction for DPIIT recognized startups."
      }
    ],
    "documents": [
      "Audited Balance Sheet, Profit & Loss Account, and Notes to Accounts",
      "Statutory Auditor's Report and Directors' Report",
      "Tax Audit Report in Form 3CA / 3CD (with UDIN)",
      "Form 26AS, AIS, and TIS of the Company",
      "Advance Tax and Self-Assessment Tax payment challans",
      "Class-3 Digital Signature Certificate (DSC) of Director"
    ],
    "steps": [
      {
        "step": "1",
        "title": "Financial Statement Audit Review",
        "desc": "CA reviews audited accounts, tax depreciation schedules, and Section 43B disallowances."
      },
      {
        "step": "2",
        "title": "Form 3CA/3CD Tax Audit Filing",
        "desc": "Auditor certifies and uploads Form 3CA/3CD on the income tax portal with unique UDIN."
      },
      {
        "step": "3",
        "title": "ITR-6 Preparation & Computation",
        "desc": "Drafting comprehensive ITR-6 with Schedule BP, MAT, Depreciation, and Shareholding schedules."
      },
      {
        "step": "4",
        "title": "DSC Signing & E-Filing",
        "desc": "Director signs ITR-6 via Class-3 DSC and official electronic acknowledgement is generated."
      }
    ],
    "deliverables": [
      "Official Form ITR-6 E-Filing Acknowledgement Receipt",
      "Detailed Corporate Tax Computation Sheet",
      "Uploaded Form 3CA / 3CD Tax Audit Report with UDIN",
      "MAT / Section 115BAA Tax Regime Recommendation Report",
      "Annual Tax Archive Kit for Bank Consortium & Investors"
    ],
    "postCompliances": [
      {
        "badge": "Mandatory",
        "timeline": "By 31st October Annually",
        "title": "Corporate ITR-6 Deadline",
        "desc": "Filing deadline for audited corporate returns is 31st October (or 30th November if Transfer Pricing applies)."
      },
      {
        "badge": "Statutory",
        "timeline": "Within 30 Days of AGM",
        "title": "File MCA Form AOC-4",
        "desc": "Ensure the same audited numbers are filed in Form AOC-4 on the MCA portal."
      }
    ],
    "faqs": [
      {
        "q": "Is filing Form ITR-6 mandatory for a company with ZERO business or revenue?",
        "a": "YES. Every company incorporated in India is a separate legal entity and MUST file Form ITR-6 annually under the Income Tax Act, even if revenue is Nil or the company is in pre-operating stage. Failure to file attracts \u20b95,000 late fee and risks prosecution under Section 276CC."
      },
      {
        "q": "What is the corporate tax rate for Private Limited Companies in India?",
        "a": "Under Section 115BAA, domestic companies can opt for a flat 22% corporate tax rate (effective 25.17% including surcharge and cess) without MAT. New domestic manufacturing companies incorporated after 1st October 2019 can opt for 15% under Section 115BAB."
      },
      {
        "q": "What is the deadline for filing ITR-6 for corporate taxpayers?",
        "a": "For companies requiring audit (which applies to nearly all operating companies), the filing deadline for Form 3CA/3CD Tax Audit is 30th September, and the deadline for Form ITR-6 is 31st October of the relevant assessment year."
      },
      {
        "q": "Can Form ITR-6 be verified using an Aadhaar OTP?",
        "a": "NO. In India, corporate tax returns (Form ITR-6) CANNOT be verified via Aadhaar OTP or bank EVC. It is legally mandatory to sign and transmit Form ITR-6 using the Class-3 Digital Signature Certificate (DSC) of the Managing Director or authorized director."
      }
    ]
  },
  "itr-partnership": {
    "id": "itr-partnership",
    "category": "itr",
    "categoryLabel": "Income Tax Returns (ITR)",
    "icon": "\ud83e\udd1d",
    "badge": "LLP & Partnership Firm Returns",
    "title": "Partnership & LLP Tax Return Filing (Form ITR-5)",
    "tagline": "Tax return filing for Limited Liability Partnerships (LLPs), Registered Partnerships, and AOPs with partner remuneration optimization.",
    "timeline": "2 - 3 Days",
    "govtPortal": "Income Tax Department",
    "filingMode": "100% Online Paperless",
    "overview": "Statutory income tax return filing in Form ITR-5 for Limited Liability Partnerships (LLPs), partnership firms, Association of Persons (AOP), and Body of Individuals (BOI). We optimize partners' remuneration and interest under Section 40(b), ensure adherence to partnership deed covenants, and reconcile Form 26AS TDS credits.",
    "detailedOverview": "\n      <p style=\"font-size: 1.1rem; color: var(--primary-950); font-weight: 600; line-height: 1.75;\">\n        Under the Income Tax Act 1961, <strong>Partnership Firms and LLPs are taxed as separate taxable entities</strong> in Form ITR-5 at a flat statutory rate of <strong>30%</strong> (plus 12% surcharge if taxable income exceeds \u20b91 Crore, plus 4% cess).\n      </p>\n      <p>\n        A key statutory advantage is <strong>partner remuneration and interest on capital</strong> allowable under Section 40(b). By drafting the partnership or LLP deed properly and structuring partner salaries within statutory limits (up to \u20b93 Lakhs or 90% of book profit for the first \u20b93L, and 60% thereafter), the firm's net taxable income can be substantially reduced. Profit share distributed to partners post-tax is <strong>100% tax-free in the hands of the partners</strong>.\n      </p>\n    ",
    "whoIsItFor": [
      {
        "icon": "\ud83e\udd1d",
        "title": "Limited Liability Partnerships",
        "desc": "All LLPs incorporated with the MCA requiring mandatory Form ITR-5 filing."
      },
      {
        "icon": "\ud83d\udcdc",
        "title": "Partnership Firms",
        "desc": "Registered and unregistered traditional partnership firms formed under Partnership Act 1932."
      },
      {
        "icon": "\ud83d\udc65",
        "title": "AOPs & BOIs",
        "desc": "Joint ventures, syndicates, and Associations of Persons operating commercial projects."
      }
    ],
    "eligibility": [
      {
        "icon": "\ud83c\udd94",
        "label": "Firm Permanent PAN",
        "value": "Separate Firm PAN",
        "desc": "Distinct 10-digit PAN card issued in the name of the Partnership Firm or LLP."
      },
      {
        "icon": "\ud83d\udcd1",
        "label": "Constitutional Deed",
        "value": "Executed Partnership Deed",
        "desc": "Deed with express clauses authorizing partner salary and interest under Section 40(b)."
      },
      {
        "icon": "\ud83d\udd8b\ufe0f",
        "label": "Digital Signature",
        "value": "Partner Class-3 DSC",
        "desc": "LLPs must mandatorily sign ITR-5 using the Designated Partner's Class-3 DSC."
      }
    ],
    "benefits": [
      {
        "title": "Section 40(b) Remuneration Deductions",
        "desc": "Maximize allowable working partner salary and 12% interest on capital to legally reduce the firm's net taxable profit."
      },
      {
        "title": "100% Tax-Free Profit Distribution",
        "desc": "Profits shared among partners after firm taxation are completely exempt from tax under Section 10(2A)."
      },
      {
        "title": "Complete Tax Audit Support (44AB)",
        "desc": "If turnover exceeds \u20b91 Crore (or \u20b910Cr for digital firms), we handle full Form 3CB/3CD tax audit certification."
      }
    ],
    "documents": [
      "Executed Partnership Deed / LLP Agreement and amendments",
      "Trial Balance, Balance Sheet, and Profit & Loss Account",
      "Form 26AS & AIS of the Partnership / LLP",
      "Bank statements of all firm operational accounts",
      "Partner capital account statements showing drawings and interest",
      "Class-3 DSC of Designated Partner (for LLPs)"
    ],
    "steps": [
      {
        "step": "1",
        "title": "Deed & Book Profit Audit",
        "desc": "CA calculates book profit and verifies partner remuneration limits under Section 40(b)."
      },
      {
        "step": "2",
        "title": "TDS & Tax Audit Review",
        "desc": "Reconcile vendor TDS and evaluate Section 44AB tax audit applicability."
      },
      {
        "step": "3",
        "title": "ITR-5 Drafting",
        "desc": "Prepare Form ITR-5 with complete partner profit-sharing and capital schedules."
      },
      {
        "step": "4",
        "title": "DSC Signing & E-Filing",
        "desc": "Submit on portal via DSC or partner Aadhaar OTP (for traditional firms) and issue ITR-V."
      }
    ],
    "deliverables": [
      "Official Form ITR-5 E-Filing Acknowledgement",
      "Detailed Partnership Tax Computation Sheet",
      "Section 40(b) Partner Remuneration & Interest Schedule",
      "Partner Profit Share Certificates (Section 10(2A) Exemption)",
      "Form 3CB / 3CD Tax Audit Report (if audited)"
    ],
    "postCompliances": [
      {
        "badge": "Mandatory",
        "timeline": "By 31st July / 31st Oct",
        "title": "ITR-5 Filing Deadline",
        "desc": "31st July for non-audit firms; 31st October if statutory tax audit under Sec 44AB applies."
      },
      {
        "badge": "Statutory",
        "timeline": "Quarterly",
        "title": "Advance Tax Payments",
        "desc": "Pay advance tax in 4 installments (15 June, 15 Sept, 15 Dec, 15 Mar) to avoid Sec 234C interest."
      }
    ],
    "faqs": [
      {
        "q": "What is the tax rate on a Partnership Firm or LLP in India?",
        "a": "Partnership firms and LLPs are taxed at a flat rate of 30% plus 12% surcharge (if total income exceeds \u20b91 Crore) and 4% Health & Education Cess, resulting in an effective tax rate of 31.2% or 34.94%."
      },
      {
        "q": "Can partners take salary from the firm to reduce the firm's tax?",
        "a": "YES! Under Section 40(b), working partners can be paid salary, bonus, or remuneration provided it is authorized by the partnership deed. The maximum statutory deduction allowed is: on the first \u20b93 Lakhs of book profit\u2014\u20b91,50,000 or 90% of book profit (whichever is more); and on the balance book profit\u201460%."
      },
      {
        "q": "Is the profit share received by partners taxable in their individual hands?",
        "a": "NO. Under Section 10(2A) of the Income Tax Act, any share in the total income of the partnership firm received by a partner is completely exempt from income tax in the hands of the partner."
      }
    ]
  },
  "itr-trust-ngo": {
    "id": "itr-trust-ngo",
    "category": "itr",
    "categoryLabel": "Income Tax Returns (ITR)",
    "icon": "\ud83c\udf31",
    "badge": "Section 11, 12A & 80G Exemptions",
    "title": "Trust & NGO Tax Return Filing (Form ITR-7)",
    "tagline": "Statutory income tax return filing for Charitable Trusts, Section 8 Companies, NGOs, and Educational Institutions.",
    "timeline": "3 - 5 Days",
    "govtPortal": "Income Tax Department",
    "filingMode": "100% Online Paperless",
    "overview": "Specialized return filing in Form ITR-7 for charitable trusts, religious institutions, Section 8 non-profit companies, societies, and educational trusts claiming tax exemptions under Section 11 and 12. We audit the mandatory 85% income application rule, manage Form 10B/10BB audit reports, and safeguard your permanent 12A/80G registrations.",
    "detailedOverview": "\n      <p style=\"font-size: 1.1rem; color: var(--primary-950); font-weight: 600; line-height: 1.75;\">\n        Taxation of Charitable and Religious Trusts in India is strictly governed by <strong>Section 11, 12, 12A, 12AB, and 13</strong> of the Income Tax Act. To claim 100% tax exemption on donations and grants, an NGO must apply at least <strong>85% of its total income</strong> toward charitable or religious objectives in India during the financial year.\n      </p>\n      <p>\n        Any shortfall must be statutorily accumulated by filing <strong>Form 9A or Form 10</strong> before the due date. Crucially, the <strong>Tax Audit Report in Form 10B or Form 10BB</strong> must be filed by a Chartered Accountant at least one month prior to filing Form ITR-7. Missing these deadlines automatically forfeits your Section 11 tax exemption, triggering a 30% maximum marginal tax rate on gross donations.\n      </p>\n    ",
    "whoIsItFor": [
      {
        "icon": "\ud83c\udf31",
        "title": "Section 8 Non-Profit Companies",
        "desc": "Companies incorporated under Section 8 of the Companies Act 2013 for social welfare."
      },
      {
        "icon": "\ud83c\udfdb\ufe0f",
        "title": "Charitable & Religious Trusts",
        "desc": "Public charitable trusts registered under Indian Trusts Act or Bombay Public Trusts Act."
      },
      {
        "icon": "\ud83c\udf93",
        "title": "Educational Institutions",
        "desc": "Schools, colleges, universities, and hospitals claiming Section 10(23C) exemptions."
      },
      {
        "icon": "\ud83e\udd1d",
        "title": "Registered Societies",
        "desc": "Societies registered under the Societies Registration Act 1860."
      }
    ],
    "eligibility": [
      {
        "icon": "\ud83d\udcdc",
        "label": "Statutory Registration",
        "value": "Section 12AB Registration",
        "desc": "Active 12AB registration order with 14-digit Unique Registration Number (URN)."
      },
      {
        "icon": "\ud83d\udcca",
        "label": "Audit Report",
        "value": "Form 10B / Form 10BB",
        "desc": "Mandatory audit report filed by CA one month prior to ITR-7 due date."
      },
      {
        "icon": "\ud83d\udd8b\ufe0f",
        "label": "Digital Signature",
        "value": "Managing Trustee DSC",
        "desc": "Valid Class-3 DSC of the Managing Trustee, Secretary, or Director."
      }
    ],
    "benefits": [
      {
        "title": "100% Tax Exemption Preservation",
        "desc": "Ensure strict compliance with the 85% income application mandate to pay \u20b90 tax on all voluntary donations and grants."
      },
      {
        "title": "Form 9A & Form 10 Accumulation",
        "desc": "Statutorily accumulate unspent donations for up to 5 years for future capital projects without paying tax."
      },
      {
        "title": "Safeguard 80G Donor Benefits",
        "desc": "Protect your donors' 50% tax deduction eligibility by filing mandatory Form 10BD donation returns."
      }
    ],
    "documents": [
      "Audited Financial Statements (Balance Sheet, Income & Expenditure Account)",
      "Section 12AB & 80G Registration Approval Orders (with URN)",
      "Form 10B or Form 10BB Audit Report signed by Chartered Accountant",
      "Detailed donation register with donor PAN, address, and donation mode",
      "Form 10BD filing acknowledgement and Statement of Donations",
      "Class-3 DSC of the Managing Trustee / Authorized Signatory"
    ],
    "steps": [
      {
        "step": "1",
        "title": "85% Application & Accounts Audit",
        "desc": "CA audits income vs charitable expenditure and calculates 85% application compliance."
      },
      {
        "step": "2",
        "title": "Form 9A / Form 10 Filing",
        "desc": "If expenditure is under 85%, file Form 9A (deemed application) or Form 10 (accumulation)."
      },
      {
        "step": "3",
        "title": "Form 10B / 10BB Upload",
        "desc": "Chartered Accountant certifies and uploads Form 10B/10BB on portal with UDIN."
      },
      {
        "step": "4",
        "title": "Form ITR-7 E-Filing",
        "desc": "Submit Form ITR-7 via Digital Signature and secure official ITR-V acknowledgement."
      }
    ],
    "deliverables": [
      "Official Form ITR-7 E-Filing Acknowledgement",
      "Detailed Charitable Income Application & Exemption Statement",
      "Uploaded Form 10B / Form 10BB Audit Report with UDIN",
      "Form 9A / Form 10 Accumulation Proofs (if applicable)",
      "Statement of Donations (Form 10BD) Reconciliation Certificate"
    ],
    "postCompliances": [
      {
        "badge": "Mandatory",
        "timeline": "By 30th September",
        "title": "File Form 10B / 10BB Audit",
        "desc": "CA audit report must be uploaded one month before ITR-7 due date."
      },
      {
        "badge": "Annual",
        "timeline": "By 31st October",
        "title": "Form ITR-7 Due Date",
        "desc": "Submit return by 31st October to prevent forfeiture of Section 11 exemptions."
      },
      {
        "badge": "Annual",
        "timeline": "By 31st May",
        "title": "File Form 10BD (Donations)",
        "desc": "Mandatory filing of Statement of Donations to enable donors to claim 80G deductions."
      }
    ],
    "faqs": [
      {
        "q": "What is the 85% income application rule for trusts and NGOs?",
        "a": "Under Section 11(1)(a), a charitable or religious trust must apply at least 85% of its total income during the financial year toward charitable or religious purposes in India. If at least 85% is applied, the entire income is 100% tax-exempt."
      },
      {
        "q": "What happens if a trust fails to spend 85% of its income?",
        "a": "If you cannot spend 85% in the financial year, you can legally file Form 9A (for deemed application in the next year) or Form 10 (to accumulate funds for a specific project for up to 5 years). Both forms must be filed before the due date to protect your tax exemption."
      },
      {
        "q": "When is Form 10B required versus Form 10BB?",
        "a": "Form 10B is required if the trust's total income exceeds \u20b95 Crores, or if it received any foreign contribution, or applied funds outside India. Form 10BB is required for other trusts where income is up to \u20b95 Crores without foreign funds."
      }
    ]
  }
};
