import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  openGraph: {
    title: 'Terms & policies',
    description: `Interview + Algos. Preparing for technical interviews and algorithms asynchronously.
      The new way of preparing for your technical interviews. Ditch the old way of doing algorithmic problems, and join Preps!`,
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function PoliciesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full justify-between min-h-screen flex flex-col">
      {children}
    </div>
  );
}
