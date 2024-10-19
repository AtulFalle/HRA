"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"

const jobPostings = [
  { id: 1, title: "Software Engineer", department: "Engineering", status: "Open", applicants: 15 },
  { id: 2, title: "Product Manager", department: "Product", status: "Open", applicants: 8 },
  { id: 3, title: "UX Designer", department: "Design", status: "Closed", applicants: 20 },
  { id: 4, title: "Data Analyst", department: "Analytics", status: "Open", applicants: 12 },
]

export function JobPostingList() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Title</TableHead>
          <TableHead>Department</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Applicants</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {jobPostings.map((job) => (
          <TableRow key={job.id}>
            <TableCell className="font-medium">{job.title}</TableCell>
            <TableCell>{job.department}</TableCell>
            <TableCell>{job.status}</TableCell>
            <TableCell>{job.applicants}</TableCell>
            <TableCell>
              <Button variant="outline" size="sm">Edit</Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}