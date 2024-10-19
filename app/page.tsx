import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background">
      <h1 className="text-4xl font-bold mb-8">HR Management System</h1>
      <div className="space-x-4">
        <Button asChild>
          <Link href="/admin">Admin Panel</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/user">User Panel</Link>
        </Button>
      </div>
    </div>
  );
}