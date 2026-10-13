import './site.css';
import { DM_Sans } from 'next/font/google';

const dmSans = DM_Sans({ subsets: ['latin'], weight: ['400', '500', '700'], display: 'swap' });

export const metadata = {
  title: 'Omni: One app. Every move.',
  description:
    'Rides, food and parcels on one shared network. Fewer empty kilometers, lower fares, more earnings for drivers. Live in Bengaluru.',
  icons: { icon: '/logo-omni.svg' },
};

export const viewport = { width: 'device-width', initialScale: 1, themeColor: '#1c683c' };

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={dmSans.className}>{children}</body>
    </html>
  );
}
