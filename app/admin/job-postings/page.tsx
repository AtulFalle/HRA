import { JobPostingList } from '@/components/admin/job-posting-list';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function JobPostings() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Job Postings</h1>
        <Button asChild>
          <Link href="/admin/job-postings/create">Create Job Posting</Link>
        </Button>
      </div>
      <JobPostingList />
    </div>
  );
}