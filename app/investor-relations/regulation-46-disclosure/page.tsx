import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import Link from "next/link";
import { regulation46Disclosures } from "@/lib/constants/investor-relations";

export default function Regulation46DisclosurePage() {
  const basePath =
    "/docs/investor-relations/Disclosure under Regulation 46 of SEBI (LODR) Regulations, 2015";

  return (
    <section
      className="py-12 md:py-16 lg:py-24"
      style={{ backgroundColor: "#FFFBF0" }}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <h1 className="text-3xl md:text-4xl font-semibold mb-8">
          Disclosure under Regulation 46 of SEBI (LODR) Regulations, 2015
        </h1>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Sr. No.</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>File</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {regulation46Disclosures.map((doc) => (
              <TableRow key={doc.srNo}>
                <TableCell>{doc.srNo}</TableCell>
                <TableCell>{doc.description}</TableCell>
                <TableCell>
                  {doc.fileName ? (
                    <Link
                      href={`${basePath}/${doc.fileName}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-orange-600 hover:underline"
                    >
                      View File
                    </Link>
                  ) : (
                    <span className="text-gray-500">{doc.fileLabel}</span>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </section>
  );
}
