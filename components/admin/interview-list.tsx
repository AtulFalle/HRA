"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"

const interviews = [
  { id: 1, candidate: "Alice Johnson", position: "Software Engineer", date: "2023-06-15", time: "10:00 AM", status: "Scheduled" },
  { id: 2, candidate: "Bob Smith", position: "Product Manager", date: "2023-06-16", time: "2:00 PM", status: "Completed" },
  { id: 3, candidate: "Charlie Brown", position: "UX Designer", date: "2023-06-17", time: "11:30 AM", status: "Scheduled" },
  { id: 4, candidate: "Diana Lee", position: "Data Analyst", date: "2023-06-18", time: "3:30 PM", status: "Cancelled" },
]

export function InterviewList() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Candidate</TableHead>
          <TableHead>Position</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Time</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {interviews.map((interview) => (
          <TableRow key={interview.id}>
            <TableCell className="font-medium">{interview.candidate}</TableCell>
            <TableCell>{interview.position}</TableCell>
            <TableCell>{interview.date}</TableCell>
            <TableCell>{interview.time}</TableCell>
            <TableCell>{interview.status}</TableCell>
            <TableCell>
              <Button variant="outline" size="sm">View Details</Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}