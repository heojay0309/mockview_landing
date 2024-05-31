import Faq from '@/components/Faq';
import { Metadata } from 'next';

export const metadata: Metadata = {
  openGraph: {
    title: 'FAQ',
    description: `Interview + Algos. Preparing for technical interviews and algorithms asynchronously.
      The new way of preparing for your technical interviews. Ditch the old way of doing algorithmic problems, and join Preps!`,
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function FaqPage() {
  return (
    <div className="flex flex-col tablet:px-[64px] px-[32px] gap-[32px] py-[32px]">
      <h1 className=" leading-[64px] tracking-[4%] text-[48px] font-[600]">
        Frequently Asked Questions
      </h1>
      <div className="border-b opacity-60"></div>
      <Faq />
    </div>
  );
}
