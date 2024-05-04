import { VscFeedback } from 'react-icons/vsc';
import Image from 'next/image';
import Link from 'next/link';
const Intro = () => {
  return (
    <main className="flex text-white md:flex-row flex-col justify-between items-center gap-[32px] h-[804px]">
      {/* <main className="flex text-white md:flex-row flex-col justify-between items-start gap-[32px] main"> */}
      <section className="w-full h-full flex flex-col items-start justify-center gap-[16px]">
        <div className="flex flex-col gap-[16px] w-full">
          <h1 className="font-[600] text-[48px] text-center md:text-start md:text-[48px] 2xl:text-[56px] leading-[64px] tracking-[4%] md:w-2/3">
            Prepare Perfect and Present
          </h1>
          <div className="flex flex-col gap-[16px] mb-[0px] md:mb-[96px]  text-center md:text-start">
            <h2 className="font-[400] text-[16px] md:text-[20px] leading-[28px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </h2>
            <div className="border-b w-full md:w-1/2"></div>
            <p className="font-[400] text-[14px] md:text-[16px] leading-[24px]">
              Prepare, practice, and prevail in technical interviews with our
              AI-enhanced live simulations
            </p>
          </div>
        </div>
        {/* <Link
          href="https://www.beta.prepai.dev"
          className=" bg-[#2F67E6] border border-[#5D8EFE] md:px-[32px] md:py-[8px] px-[16px] flex items-center justify-center py-[4px] hover:bg-opacity-90 text-white rounded-[4px] w-[25%]"
        >
          <span className="text-[16px] leading-[24px] font-[600] text-center self-center">
            Enter App
          </span>
        </Link> */}
      </section>
      <section className="w-full h-full flex items-start md:items-center justify-center">
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
