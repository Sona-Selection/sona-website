import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";
import { committees } from "@/lib/constants/investor-relations";

export default function CommitteeCompositionsPage() {
  return (
    <section
      className="py-12 md:py-16 lg:py-24"
      style={{ backgroundColor: "#FFFBF0" }}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <h1 className="text-3xl md:text-4xl font-semibold mb-12">
          Composition of Committees
        </h1>

        <div className="space-y-12">
          {committees.map((committee, index) => (
            <div key={index}>
              <h2 className="text-2xl font-semibold mb-6">
                {committee.title}
              </h2>

              {committee.members.length > 0 ? (
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Sr. No.</TableHead>
                      <TableHead>Name of Director</TableHead>
                      <TableHead>Position in the Committee</TableHead>
                      <TableHead>Designation</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {committee.members.map((member, memberIndex) => (
                      <TableRow key={`${member.name}-${memberIndex}`}>
                        <TableCell>{member.srNo}</TableCell>
                        <TableCell>{member.name}</TableCell>
                        <TableCell>{member.position}</TableCell>
                        <TableCell>{member.designation}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              ) : (
                <p className="text-gray-500">No members added yet</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
