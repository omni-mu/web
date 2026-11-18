'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const LINKS = [
  { href: '/admin/approve', label: 'Approve drivers' },
  { href: '/admin/earnings', label: 'Daily earnings' },
];

export function AdminNav() {
  const pathname = usePathname();

  return (
    <nav className="tabs" aria-label="Admin">
      {LINKS.map(({ href, label }) => (
        <Link key={href} href={href} aria-current={pathname === href ? 'page' : undefined}>
          {label}
        </Link>
      ))}
    </nav>
  );
}
