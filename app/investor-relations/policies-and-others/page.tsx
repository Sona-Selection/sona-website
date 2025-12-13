import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import Link from "next/link";
import { policiesAndOthers } from "@/lib/constants/investor-relations";

export default function PoliciesAndOthersPage() {
  const basePath = "/docs/investor-relations/Policy and Others";

  return (
    <section
      className="py-12 md:py-16 lg:py-24"
      style={{ backgroundColor: "#FFFBF0" }}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <h1 className="text-3xl md:text-4xl font-semibold mb-8">
          Policies & Others
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
            {policiesAndOthers.map((doc) => (
              <TableRow key={doc.srNo}>
                <TableCell>{doc.srNo}</TableCell>
                <TableCell>{doc.description}</TableCell>
                <TableCell>
                  <Link
                    href={`${basePath}/${doc.fileName}`}
                    target="_blank"
                    className="text-orange-600 hover:underline"
                  >
                    View File
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </section>
  );
}
