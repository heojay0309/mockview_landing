import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Background from '@/constants/Background';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'MockView',
  description: 'Have mock interviews with real scenarios',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <div className="scroll-watcher"></div> */}
        <Background />

        <div className="relative z-10 w-full justify-between flex flex-col h-screen">
          <div className="">
            <Navbar />
          </div>
          <div className="flex-1">{children}</div>
          <div className="">
            <Footer />
          </div>
          <Toaster />
        </div>
      </body>
    </html>
  );
}
