import './site.css';
import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';
import { SITE_URL } from '@/lib/site';

const dmSans = DM_Sans({ subsets: ['latin'], weight: ['400', '500', '700'], display: 'swap' });

const TITLE = 'Omni: Rides, food and parcels in one app, live in Bengaluru';
const DESCRIPTION =
  'Omni puts rides, food delivery and parcels on one shared network. Lower fares for customers, fewer empty kilometers and more earnings for drivers. Live in Bengaluru.';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: TITLE, template: '%s | Omni' },
  description: DESCRIPTION,
  applicationName: 'Omni',
  keywords: ['Omni', 'ride hailing Bengaluru', 'food delivery Bengaluru', 'parcel delivery Bengaluru', 'drive and earn', 'multi-service app'],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    siteName: 'Omni',
    locale: 'en_IN',
    url: '/',
    title: TITLE,
    description: DESCRIPTION,
  },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large' } },
  icons: { icon: '/logo-omni.svg', apple: '/logo-omni.svg' },
};

export const viewport = { width: 'device-width', initialScale: 1, themeColor: '#1c683c' };

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN">
      <body className={dmSans.className}>{children}</body>
    </html>
  );
}
