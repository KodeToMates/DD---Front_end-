import type { Metadata } from 'next';
import { Space_Grotesk, Outfit } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/layout/WhatsAppButton';
import { SmoothScrollProvider } from '@/components/providers/SmoothScrollProvider';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'DataLive Intelligence | Power BI, SQL & MIS Reporting Automation',
  description:
    'DataLive Intelligence engineers custom Power BI dashboards, robust SQL pipelines, automated MIS reporting, and RPA bots for growing mid-market enterprises.',
  keywords: [
    'Power BI Consulting',
    'MIS Reporting Automation',
    'SQL Database Solutions',
    'Excel Automation',
    'RPA Development',
    'Business Intelligence India',
    'Tally Power BI Integration',
  ],
  authors: [{ name: 'DataLive Intelligence' }],
  openGraph: {
    title: 'DataLive Intelligence | Real-Time Business Intelligence',
    description:
      'Stop waiting 10 days for reports. We engineer automated Power BI dashboards and MIS reporting for mid-market leaders.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'DataLive Intelligence',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${outfit.variable}`}>
      <body className="min-h-screen flex flex-col font-body bg-white text-[#101828] antialiased selection:bg-[#7F56D9] selection:text-white">
        <SmoothScrollProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <WhatsAppButton />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
