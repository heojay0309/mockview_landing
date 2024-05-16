import type { Metadata } from 'next';
import './globals.css';
import { Analytics } from '@vercel/analytics/react';

import Navbar from '@/components/nav/Navbar';
import Footer from '@/components/nav/Footer';
import { Toaster } from '@/components/ui/toaster';
import { Source_Code_Pro } from 'next/font/google';

const source = Source_Code_Pro({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'preps',
  description: 'Prepare Perfect and Present',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${source.className} bg-pageBackground-dark`}>
        <div className="relative z-10 justify-between flex flex-col text-white max-w-[1440px] mx-auto">
          <Navbar />
          <div className="flex-1">{children}</div>
          <Footer />
          <Toaster />
          <Analytics />
        </div>
      </body>
    </html>
  );
}
