import Intro from '@/components/Intro';
import Second from '@/components/Second';
import Third from '@/components/Third';
import Fourth from '@/components/Fourth';
import Fifth from '@/components/Fifth';
import Sixth from '@/components/Sixth';
export default function Home() {
  return (
    <div className="flex flex-col px-[64px]">
      <Intro />
      <Second />
      <Third />
      <Fourth />
      <Fifth />
      <Sixth />
    </div>
  );
}
