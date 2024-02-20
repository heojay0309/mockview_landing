import Image from 'next/image';
import Star from '@/components/Star';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Articles from '@/components/Articles';

export default function WaitlistPage() {
  return (
    <main className="flex flex-col items-center justify-between">
      <Hero />
    </main>
  );
}
