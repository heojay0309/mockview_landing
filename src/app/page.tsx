import Intro from '@/components/Intro';
import Second from '@/components/Second';
import Third from '@/components/Third';
import Fourth from '@/components/Fourth';
import Fifth from '@/components/Fifth';
import Sixth from '@/components/Sixth';
export default function Home() {
  return (
    <div className="flex flex-col md:px-[64px] px-[32px]">
      <Intro />
      <Second />
      <Third />
      <Fourth />
      <Fifth />
      <Sixth />
    </div>
  );
}
