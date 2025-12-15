import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { facilities } from "@/lib/constants/capabilities";

export default function FacilitiesPage() {
  return (
    <section
      className="py-12 md:py-16 lg:py-24"
      style={{ backgroundColor: "#FFFBF0" }}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <h1 className="text-3xl md:text-4xl font-semibold mb-8">
          Facilities & Equipment
        </h1>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Sr. No.</TableHead>
              <TableHead>Equipment Name</TableHead>
              <TableHead>Category</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {facilities.map((facility) => (
              <TableRow key={facility.srNo}>
                <TableCell>{facility.srNo}</TableCell>
                <TableCell>{facility.name}</TableCell>
                <TableCell>{facility.category}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </section>
  );
}
