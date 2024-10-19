import { InterviewList } from '@/components/admin/interview-list';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Interviews() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Interviews</h1>
        <Button asChild>
          <Link href="/admin/interviews/schedule">Schedule Interview</Link>
        </Button>
      </div>
      <InterviewList />
    </div>
  );
}