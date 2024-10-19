import { JobList } from '@/components/user/job-list';

export default function UserJobs() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Available Jobs</h1>
      <JobList />
    </div>
  );
}