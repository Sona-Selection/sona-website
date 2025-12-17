import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";
import {
  groupCompanies,
  financialYears,
} from "@/lib/constants/investor-relations";

export default function GroupCompanyPage() {
  return (
    <section
      className="py-12 md:py-16 lg:py-24"
      style={{ backgroundColor: "#FFFBF0" }}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <h1 className="text-3xl md:text-4xl font-semibold mb-12">
          Group Company
        </h1>

        <div className="space-y-16">
          {groupCompanies.map((company, index) => (
            <div key={index}>
              {/* Company Main Heading */}
              <h2 className="text-2xl font-semibold mb-4">
                {company.companyName}
              </h2>

              {/* Subheadings */}
              <div className="mb-3">
                <h3 className="text-base font-semibold">
                  Details of Our Group Companies as per SEBI ICDR Regulations
                </h3>
                <h3 className="text-base font-normal">
                  Audited Financial Information for the preceding three (3)
                  years
                </h3>
              </div>

              {/* "in INR Million" text - right aligned */}
              <div className="flex justify-end mb-2">
                <p className="text-sm text-gray-600">in INR Million</p>
              </div>

              {/* Financial Table */}
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Particulars</TableHead>
                    {financialYears.map((fy) => (
                      <TableHead key={fy.value} className="text-center">
                        {fy.label}
                      </TableHead>
                    ))}
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {company.tableData.map((row, rowIndex) => (
                    <TableRow key={rowIndex}>
                      <TableCell>{row.particulars}</TableCell>
                      {financialYears.map((fy) => (
                        <TableCell key={fy.value} className="text-center">
                          {row.values[fy.value] ?? "-"}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
