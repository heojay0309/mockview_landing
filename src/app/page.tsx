import Image from 'next/image';

import Hero from '@/components/Hero';
import About from '@/components/About';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main
      id="home"
      className="flex min-h-screen flex-col items-center justify-between"
    >
      <Hero />
      <About />
      <Contact />
    </main>
  );
}
