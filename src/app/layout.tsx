import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Top Digital Marketing Agency in Delhi NCR | NSNR FUTURE',
  description:
    'NSNR FUTURE is a leading digital marketing agency in Delhi NCR offering SEO, PPC, Social Media Marketing, Web Development & Branding solutions to grow your business online.',
  keywords: [
    'Digital Marketing Agency Delhi NCR',
    'SEO Company Delhi',
    'Social Media Marketing Delhi NCR',
    'PPC Services Delhi',
    'Top Marketing Agencies in Delhi',
    'Online Branding Delhi',
    'NSNR FUTUR',
  ],
  authors: [{ name: 'NSNR FUTURE' }],
  creator: 'NSNR FUTURE',
  openGraph: {
    title: ' Digital Marketing Agency in Delhi NCR | NSNR FUTURE ',
    description:
      'Grow your online presence with NSNR FUTURE - your trusted digital partner for SEO, Paid Ads, and Social Media Marketing.',
    url: 'https://nsnrfuture.com', // Replace with your real domain
    siteName: 'NSNR FUTURE',
    locale: 'en_IN',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NSNR FUTURE - Digital Marketing Agency Delhi NCR',
    description:
      'Results-driven digital marketing services in Delhi NCR. SEO, Paid Ads, Social Media, Branding & more.',
    site: '@nsnrfuture', // Replace with your Twitter handle
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
