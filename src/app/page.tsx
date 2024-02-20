import Image from 'next/image';

import Hero from '@/components/Hero';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Articles from '@/components/Articles';

export default function Home() {
  return (
    <>
      <main
        id="home"
        className="flex flex-col items-center justify-between z-10"
      >
        <div className="hero mb-80 md:mt-0 mt-80">
          <Hero />
        </div>
        <div data-direction="right" data-animated className="scroller md:mb-80">
          <Articles />
        </div>
        <div className="w-full ">
          <About />
        </div>
        <Contact />
      </main>
    </>
  );
}
