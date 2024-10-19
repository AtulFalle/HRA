"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { LayoutDashboard, Briefcase, Users, Calendar } from 'lucide-react';

const navItems = [
  { href: '/admin', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/admin/job-postings', label: 'Job Postings', icon: Briefcase },
  { href: '/admin/employees', label: 'Employees', icon: Users },
  { href: '/admin/interviews', label: 'Interviews', icon: Calendar },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="flex flex-col w-64 bg-card text-card-foreground">
      <div className="p-4">
        <h1 className="text-2xl font-bold">HR Admin</h1>
      </div>
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.href}>
              <Button
                asChild
                variant="ghost"
                className={cn(
                  'w-full justify-start',
                  pathname === item.href && 'bg-accent text-accent-foreground'
                )}
              >
                <Link href={item.href}>
                  <item.icon className="mr-2 h-4 w-4" />
                  {item.label}
                </Link>
              </Button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}