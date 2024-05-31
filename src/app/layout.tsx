import type { Metadata } from 'next';
import './globals.css';
import { Analytics } from '@vercel/analytics/react';
import { Inter } from 'next/font/google';
import Navbar from '@/components/nav/Navbar';
import Footer from '@/components/nav/Footer';
import { Toaster } from '@/components/ui/toaster';
import { Source_Code_Pro } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://preps-ai.com'),
  title: {
    template: `Preps - %s`,
    default: 'Preps',
  },
  openGraph: {
    description: `Interview + Algos. Preparing for technical interviews and algorithms asynchronously. 
      The new way of preparing for your technical interviews. Ditch the old way of doing algorithmic problems, and join Preps!`,
    images: ['/introduction/TheNewWay.png'],
  },
  icons: {
    icon: '/favicon.ico',
  },
  keywords: [
    'interview',
    'preps',
    'interview preps',
    'coding',
    'technical interview',
    'algo',
    'leetcode',
    'software engineer',
    'developers',
    'prepsai',
    'preps ai',
    'ai interview',
  ],
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
