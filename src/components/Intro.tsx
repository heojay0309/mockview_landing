import { VscFeedback } from 'react-icons/vsc';
import Image from 'next/image';
const Intro = () => {
  return (
    <main className="flex text-white md:flex-row flex-col justify-between items-center gap-[32px] h-[804px]">
      <section className="w-full h-full flex items-center gap-[16px]">
        <div className="flex flex-col gap-[16px]">
          <h1 className="font-[600] text-[48px] leading-[64px] tracking-[4%] w-2/3">
            Prepare Perfect and Present
          </h1>
          <div className="flex flex-col gap-[16px] mb-[96px]">
            <h2 className="font-[400] text-[20px] leading-[28px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
              massa mi.
            </h2>
            <div className="border-b w-1/2"></div>
            <p className="font-[400] text-[16px] leading-[24px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
              massa mi.
            </p>
          </div>
        </div>
      </section>
      <section className="w-full h-full flex items-center justify-center mb-[96px]">
        <Image
          src="/preps_hero.svg"
          alt="prepsAI"
          width={640}
          height={386.44}
          className="object-fill"
        />
      </section>
    </main>
  );
};

export default Intro;
