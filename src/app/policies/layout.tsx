import type { Metadata } from 'next';
import { Inter, Source_Code_Pro } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';

import Navbar from '@/components/nav/Navbar';
import Footer from '@/components/nav/Footer';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'preps',
  description: 'Terms & policies',
};

export default function PoliciesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full justify-between h-screen flex flex-col">
      {children}
    </div>
  );
}
