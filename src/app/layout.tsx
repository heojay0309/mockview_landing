import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
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
      <body className={`${inter.className} bg-pageBackground-dark`}>
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
