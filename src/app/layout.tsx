import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Background from '@/constants/Background';

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
      <body className={(inter.className, 'h-full w-full bg-black')}>
        <div className="scroll-watcher"></div>
        <Background />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
