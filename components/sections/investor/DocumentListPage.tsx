import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { DisclosureDocument } from "@/lib/types";
import Link from "next/link";

interface DocumentListPageProps {
  title: string;
  documents: DisclosureDocument[];
  basePath: string;
}

export default function DocumentListPage({
  title,
  documents,
  basePath,
}: DocumentListPageProps) {
  return (
    <section className="bg-[#FFFBF0] py-12 md:py-16 lg:py-24">
      <div className="container mx-auto px-6 lg:px-12">
        <h1 className="mb-8 text-3xl font-semibold md:text-4xl">{title}</h1>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Sr. No.</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>File</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {documents.map((document) => (
              <TableRow key={document.srNo}>
                <TableCell>{document.srNo}</TableCell>
                <TableCell>{document.description}</TableCell>
                <TableCell>
                  <Link
                    href={`${basePath}/${document.fileName}`}
                    target="_blank"
                    rel="noopener noreferrer"
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
