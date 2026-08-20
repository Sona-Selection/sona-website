import DocumentListPage from "@/components/sections/investor/DocumentListPage";
import { csrReports } from "@/lib/constants/investor-relations";

export default function CSRReportPage() {
  return (
    <DocumentListPage
      title="CSR Report"
      documents={csrReports}
      basePath="/docs/investor-relations/CSR Report"
    />
  );
}
