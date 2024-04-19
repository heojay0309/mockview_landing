import Image from 'next/image';

import Hero from '@/components/Hero';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Articles from '@/components/Articles';
import Waitlist from '@/components/Waitlist';
import Intro from '@/components/Intro';
import Second from '@/components/Second';
import Third from '@/components/Third';
import Fourth from '@/components/Fourth';
import Fifth from '@/components/Fifth';
export default function Home() {
  return (
    <div className="flex flex-col px-[32px] gap-[64px] md:gap-[0px]  md:pb-[128px] py-[64px]">
      <Intro />
      <Second />
      <Third />
      <Fourth />
      <Fifth />
    </div>
  );
}
