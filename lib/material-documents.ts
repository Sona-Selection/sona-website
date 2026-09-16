import type {
  MaterialDocumentFile,
  MaterialDocumentGroup,
} from "@/components/sections/investor/MaterialDocuments";
import {
  materialContractFiles,
  materialDocumentFiles,
  type DriveDocumentRecord,
} from "@/lib/constants/material-document-files";

const exactTitles: Record<string, string> = {
  "CDSL DG TPA SONASELECTION INDIA LIMITED":
    "CDSL Depository Gateway Tripartite Agreement",
  "SONASELECTION INDIA LIMITED Signed TPA": "NSDL Tripartite Agreement",
  "Monetering Agency Agreement": "Monitoring Agency Agreement",
  "E-AOA": "Articles of Association",
  "E-MOA": "Memorandum of Association",
  "B. COI Sonaselection": "Certificate of Incorporation",
  "C. Board Resolution with Explanatory Statement 28102025":
    "Board Resolution with Explanatory Statement — 28 October 2025",
  "D. CTCEGM04112025Sonaselection":
    "Certified True Copy of EGM Proceedings — 4 November 2025",
  "e CashEscrowandSponsorBankAgreement_Final_pdf":
    "Cash Escrow and Sponsor Bank Agreement",
  "E. CTC for DRHP": "Certified True Copy for DRHP",
  "F Board Resolution for RHP": "Board Resolution for RHP",
  "fSyndicate Agreement_Final_": "Syndicate Agreement",
  "gg. SonaSelection India Limited_Relaxation Application_10.07.25 signed":
    "Relaxation Application — 10 July 2025",
  "hh. SEBI Exemption Letter": "SEBI Exemption Letter",
  "KK. Final Observation SEBI Letter": "Final SEBI Observation Letter",
  "s Resolution of KPI": "Resolution Approving Key Performance Indicators",
  "(j). Statement Of Possible Special Tax Benefits":
    "Certificate on Statement of Possible Special Tax Benefits",
  "(k)key performance indicators": "Certificate on Key Performance Indicators",
  "(m). CONSENT LETTER FROM STATUTORY AUDITOR":
    "Consent Letter from Statutory Auditor",
  "(t)CERTIFICATE ON REVENUE FROM OPERATIONS CUSTOMERS_0001 - Copy":
    "Certificate on Revenue from Operations/Customers",
  "(w)CERTIFICATE ON REVENUE State and UT":
    "Certificate on Revenue State and UT",
  "ANNEXURE IV A": "Annexure IV A",
  "Consent Letter_Banker to the Company":
    "Consent Letter from the Bankers to the Company",
  "Consent Syndicate Member": "Consent Letter from the Syndicate Member",
  "MonitoringAgency_Consent Letter Final": "Consent from Monitoring Agency",
  "Harish as CS":
    "Consent Letter of the Company Secretary and Compliance Officer",
  "Ramesh Chandra Vyas as CFO":
    "Consent Letter of the Chief Financial Officer of the Company",
  "(p) Sonaselection CARE consent letter":
    "Consent Letter from CARE Analytics and Advisory Private Limited",
  "Annual Report -2025": "Annual Report FY 2024–25",
  "ANNUAL REPORT 2024": "Annual Report FY 2023–24",
  "Audited Consolidated Financials 2025-26":
    "Audited Consolidated Financial Statements FY 2025–26",
  "BSE APPROVAL": "BSE In-Principle Approval",
  "NSE APPROVAL": "NSE In-Principle Approval",
  "R. ValuationReport_Nikita": "Valuation Report — Nikita",
  "L&B Valuation Unit 2": "Land and Building Valuation Report — Unit 2",
  "P&M Valuation Report Unit 2": "Plant and Machinery Valuation Report — Unit 2",
};

const groupTitles: Record<string, string> = {
  "A. MOA AND AOA": "MOA and AOA",
  "H. Annual Reports": "Annual Reports",
  "ii. SEBIDuediligence": "SEBI Due Diligence",
  "JJ. Inprinciple approval": "In-Principle Approvals",
  lConsents: "Consents",
  "CS& CFO": "Company Secretary and CFO Consents",
  "KMP & SMP": "KMP and Senior Management Personnel Consents",
  "Q. Acquisition": "Acquisition Documents",
  Consent: "Acquisition Consents",
  "R Valuation report and Consent": "Valuation Report and Consent",
};

function cleanTitle(fileName: string): string {
  const withoutExtension = fileName.replace(/\.pdf$/i, "");
  if (exactTitles[withoutExtension]) return exactTitles[withoutExtension];

  let title = withoutExtension
    .replace(/^\([a-z]{1,2}\)[. ]*/i, "")
    .replace(/^[A-Z]{1,2}[. ]+(?=[A-Za-z])/i, "")
    .replace(/_0001(?: \(1\))?/gi, "")
    .replace(/\s+-\s+Copy$/i, "")
    .replace(/_Final_?/gi, "")
    .replace(/_/g, " ")
    .replace(/\bCERTIFICATE\b/gi, "Certificate")
    .replace(/\bCONSENT LETTER\b/gi, "Consent Letter")
    .replace(/\bCONSENT\b/gi, "Consent")
    .replace(/\bPEICE\b/gi, "Price")
    .replace(/\bPRIMIARY\b/gi, "Primary")
    .replace(/\bCerticate\b/gi, "Certificate")
    .replace(/\bSuitiung\b/gi, "Suiting")
    .replace(/\s+/g, " ")
    .trim();

  const letters = title.match(/[a-z]/gi) ?? [];
  const uppercase = title.match(/[A-Z]/g) ?? [];
  if (letters.length > 0 && uppercase.length / letters.length > 0.7) {
    title = title.toLowerCase();
  }

  return title
    .replace(/\b[a-z]/g, (letter) => letter.toUpperCase())
    .replace(/\bAoa\b/g, "AOA")
    .replace(/\bBrlm\b/g, "BRLM")
    .replace(/\bCfo\b/g, "CFO")
    .replace(/\bDrhp\b/g, "DRHP")
    .replace(/\bKmp\b/g, "KMP")
    .replace(/\bKpi\b/g, "KPI")
    .replace(/\bMoa\b/g, "MOA")
    .replace(/\bRhp\b/g, "RHP")
    .replace(/\bRta\b/g, "RTA")
    .replace(/\bSebi\b/g, "SEBI");
}

function driveUrl(id: string): string {
  return `https://drive.google.com/file/d/${id}/view?usp=sharing`;
}

function toFile(record: DriveDocumentRecord): MaterialDocumentFile {
  const fileName = record.path.split("/").at(-1) ?? record.path;
  return { title: cleanTitle(fileName), href: driveUrl(record.id) };
}

function buildDocumentTree(records: DriveDocumentRecord[]): MaterialDocumentGroup {
  const root: MaterialDocumentGroup = {
    title: "Material Documents to the Offer",
    files: [],
    groups: [],
  };

  for (const record of records) {
    const parts = record.path.split("/");
    const fileName = parts.pop()!;
    let current = root;

    for (const folder of parts) {
      let group = current.groups.find((item) => item.title === (groupTitles[folder] ?? folder));
      if (!group) {
        group = { title: groupTitles[folder] ?? folder, files: [], groups: [] };
        current.groups.push(group);
      }
      current = group;
    }

    current.files.push({ title: cleanTitle(fileName), href: driveUrl(record.id) });
  }

  return root;
}

export function getMaterialContracts(): MaterialDocumentFile[] {
  return materialContractFiles.map(toFile);
}

export function getMaterialDocuments(): MaterialDocumentGroup {
  return buildDocumentTree(materialDocumentFiles);
}
