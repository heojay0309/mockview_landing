import type { Metadata } from 'next';
import { Inter, Source_Code_Pro } from 'next/font/google';
import './globals.css';
import { Analytics } from '@vercel/analytics/react';

import Navbar from '@/components/nav/Navbar';
import Footer from '@/components/nav/Footer';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'] });

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
      <body className={`${inter.className} `}>
        <div className="relative z-10 justify-between flex flex-col bg-[#000210] text-white">
          <div className="max-w-[1440px] mx-auto">
            <Navbar />
            <div className="flex-1">{children}</div>
            <Footer />
          </div>
          <Toaster />
        </div>
        <Analytics />
      </body>
    </html>
  );
}
