import DocumentListPage from "@/components/sections/investor/DocumentListPage";
import { annualReturns } from "@/lib/constants/investor-relations";

export default function AnnualReturnPage() {
  return (
    <DocumentListPage
      title="Annual Return"
      documents={annualReturns}
      basePath="/docs/investor-relations/Annual Return"
    />
  );
}
