import InvestorHero from "@/components/sections/investor/InvestorHero";
import IPOCorner from "@/components/sections/investor/IPOCorner";
import BoardSection from "@/components/sections/investor/BoardSection";
import FinancialReporting from "@/components/sections/investor/FinancialReporting";
import GroupCompany from "@/components/sections/investor/GroupCompany";
import Policies from "@/components/sections/investor/Policies";
import Shareholder from "@/components/sections/investor/Shareholder";
import OtherDisclosures from "@/components/sections/investor/OtherDisclosures";
import CTA from "@/components/sections/CTA";
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
import { ctaSection } from "@/lib/constants/home";
import { pageMetadata } from "@/lib/constants/metadata";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: pageMetadata.investorRelations.title,
  description: pageMetadata.investorRelations.description,
  keywords: pageMetadata.investorRelations.keywords,
  openGraph: {
    ...pageMetadata.investorRelations.openGraph,
  },
  twitter: {
    ...pageMetadata.investorRelations.twitter,
  },
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

      {/* CTA Section */}
      <CTA data={ctaSection} />
    </>
  );
}
