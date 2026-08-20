import DocumentListPage from "@/components/sections/investor/DocumentListPage";
import { annualReports } from "@/lib/constants/investor-relations";

export default function AnnualReportsPage() {
  return (
    <DocumentListPage
      title="Annual Reports"
      documents={annualReports}
      basePath="/docs/investor-relations/Investor Information"
    />
  );
}
