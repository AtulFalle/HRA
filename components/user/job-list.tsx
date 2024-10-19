"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const jobs = [
  { id: 1, title: "Software Engineer", company: "Tech Co", location: "San Francisco, CA", description: "We're looking for a talented software engineer to join our team..." },
  { id: 2, title: "Product Manager", company: "Innovate Inc", location: "New York, NY", description: "Seeking an experienced product manager to lead our product development efforts..." },
  { id: 3, title: "UX Designer", company: "Design Studio", location: "Los Angeles, CA", description: "Join our creative team as a UX designer and help shape the future of our products..." },
  { id: 4, title: "Data Analyst", company: "Data Corp", location: "Chicago, IL", description: "We're hiring a data analyst to help us make data-driven decisions..." },
]

export function JobList() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {jobs.map((job) => (
        <Card key={job.id}>
          <CardHeader>
            <CardTitle>{job.title}</CardTitle>
            <CardDescription>{job.company} - {job.location}</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm">{job.description}</p>
          </CardContent>
          <CardFooter>
            <Button>Apply Now</Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}