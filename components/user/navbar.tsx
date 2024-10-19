"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const navItems = [
  { href: '/user', label: 'Dashboard' },
  { href: '/user/profile', label: 'My Profile' },
  { href: '/user/jobs', label: 'Job Listings' },
];

export function UserNavbar() {
  const pathname = usePathname();

  return (
    <nav className="bg-card text-card-foreground shadow">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/user" className="text-2xl font-bold">
              HR Portal
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <Button
                  key={item.href}
                  asChild
                  variant="ghost"
                  className={cn(
                    pathname === item.href && 'bg-accent text-accent-foreground'
                  )}
                >
                  <Link href={item.href}>{item.label}</Link>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}