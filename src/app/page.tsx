import Image from 'next/image';

import Hero from '@/components/Hero';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Articles from '@/components/Articles';

export default function Home() {
  return (
    <main
      id="home"
      className="flex min-h-screen flex-col items-center justify-between"
    >
      <Hero />
      <Articles />
      <About />
      <Contact />
    </main>
  );
}
