import Image from 'next/image';

import Hero from '@/components/Hero';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Articles from '@/components/Articles';
import Waitlist from '@/components/Waitlist';

export default function Home() {
  return (
    <div
      id="home"
      className="flex flex-col justify-center mt-[64px] mb-[50px] h-full items-center"
    >
      {/* <div className="flex justify-center items-center bg-white"> */}
      <Waitlist />
      {/* </div> */}
      {/* <div className=" hero mb-80 md:mt-0 mt-80">
        <Hero />
      </div>
      <div data-animated className=" scroller md:mb-80">
        <Articles />
      </div>
      <div className="w-full  ">
        <About />
      </div>
      <div className="">
        <Contact />
      </div> */}
    </div>
  );
}
