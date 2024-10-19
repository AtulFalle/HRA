"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"

const employees = [
  { id: 1, name: "John Doe", position: "Software Engineer", department: "Engineering", status: "Active" },
  { id: 2, name: "Jane Smith", position: "Product Manager", department: "Product", status: "Active" },
  { id: 3, name: "Mike Johnson", position: "UX Designer", department: "Design", status: "On Leave" },
  { id: 4, name: "Sarah Brown", position: "Data Analyst", department: "Analytics", status: "Active" },
]

export function EmployeeList() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Position</TableHead>
          <TableHead>Department</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {employees.map((employee) => (
          <TableRow key={employee.id}>
            <TableCell className="font-medium">{employee.name}</TableCell>
            <TableCell>{employee.position}</TableCell>
            <TableCell>{employee.department}</TableCell>
            <TableCell>{employee.status}</TableCell>
            <TableCell>
              <Button variant="outline" size="sm">View Profile</Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}