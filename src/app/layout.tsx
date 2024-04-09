import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Analytics } from '@vercel/analytics/react';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'PrepAI',
  description: 'Interview Prep, Redefined',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} `}>
        <div className="relative z-10 w-full justify-between flex  flex-col bg-gradient-to-b from-[#010E21] via-slate-700 to-[#010E21]">
          <Navbar />
          <div className="flex-1">{children}</div>
          <Footer />
          <Toaster />
        </div>
        <Analytics />
      </body>
    </html>
  );
}
