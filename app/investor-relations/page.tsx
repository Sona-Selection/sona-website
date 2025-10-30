import InvestorHero from "@/components/sections/investor/InvestorHero";
import IPOCorner from "@/components/sections/investor/IPOCorner";
import BoardSection from "@/components/sections/investor/BoardSection";
import FinancialReporting from "@/components/sections/investor/FinancialReporting";
import GroupCompany from "@/components/sections/investor/GroupCompany";
import Policies from "@/components/sections/investor/Policies";
import Shareholder from "@/components/sections/investor/Shareholder";
import OtherDisclosures from "@/components/sections/investor/OtherDisclosures";
import {
  investorHero,
  ipoCorner,
  boardSection,
  financialReporting,
  groupCompany,
  policies,
  shareholder,
  otherDisclosures,
} from "@/lib/constants/investor-relations";

export const metadata = {
  title: "Investor Relations | Sona",
  description:
    "Welcome to the Investor Relations portal of Sona Selections. Access financial documents, disclosures, policies, and governance updates.",
};

/**
 * Investor Relations Page
 * Complete investor relations portal with all disclosures and documents
 */
export default function InvestorRelationsPage() {
  return (
    <>
      {/* Hero Section */}
      <InvestorHero data={investorHero} />

      {/* IPO Corner Section */}
      <IPOCorner data={ipoCorner} />

      {/* Board of Directors & Committees Section */}
      <BoardSection data={boardSection} />

      {/* Financial Reporting Section */}
      <FinancialReporting data={financialReporting} />

      {/* Group Company Disclosures Section */}
      <GroupCompany data={groupCompany} />

      {/* Policies & Governance Section */}
      <Policies data={policies} />

      {/* Shareholder Communication Section */}
      <Shareholder data={shareholder} />

      {/* Other Disclosures Section */}
      <OtherDisclosures data={otherDisclosures} />
    </>
  );
}
