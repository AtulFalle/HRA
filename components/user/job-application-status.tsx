"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

const applications = [
  { id: 1, position: "Software Engineer", company: "Tech Co", status: "Under Review", appliedDate: "2023-06-01" },
  { id: 2, position: "Product Manager", company: "Innovate Inc", status: "Interview Scheduled", appliedDate: "2023-06-05" },
  { id: 3, position: "UX Designer", company: "Design Studio", status: "Rejected", appliedDate: "2023-05-28" },
  { id: 4, position: "Data Analyst", company: "Data Corp", status: "Offer Extended", appliedDate: "2023-06-10" },
]

export function JobApplicationStatus() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Position</TableHead>
          <TableHead>Company</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Applied Date</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {applications.map((app) => (
          <TableRow key={app.id}>
            <TableCell className="font-medium">{app.position}</TableCell>
            <TableCell>{app.company}</TableCell>
            <TableCell>
              <Badge variant={app.status === "Rejected" ? "destructive" : "secondary"}>
                {app.status}
              </Badge>
            </TableCell>
            <TableCell>{app.appliedDate}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}