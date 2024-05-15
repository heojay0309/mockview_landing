import Image from 'next/image';
import Link from 'next/link';

const Intro = () => {
  return (
    <main className="flex flex-col tablet:flex-row justify-between items-center gap-[32px] main tablet:py-[64px] h-full">
      <section className="w-full h-full flex flex-col items-start justify-center gap-[16px]">
        <div className="flex flex-col gap-[32px] tablet:gap-[16px] tablet:max-w-[544px] w-full pt-[64px] tablet:pt-[0px]">
          <h1 className="font-[600] text-[40px] tablet:text-[56px] text-center tablet:text-start leading-[64px] tracking-[4%] tablet:max-w-none w-full">
            Perfect Perfect and
            <span className="tablet:w-full w-full"> Present</span>
          </h1>
          <Image
            src="/preps_hero.svg"
            alt="prepsAI"
            width={640}
            height={386.44}
            className="object-fill tablet:hidden"
          />
          <div className="flex flex-col gap-[16px] mb-[96px] tablet:mb-[96px] text-center tablet:text-start max-w-[544px]">
            <h2 className="font-[400] text-[16px] tablet:text-[20px] leading-[28px]"></h2>
            <div className="border-b w-0 tablet:w-1/2 "></div>
            <p className="font-[400] text-[16px] leading-[24px] tablet:text-left text-center">
              Prepare for your upcoming technical interview with Preps, the
              first AI powered interviewer
            </p>
            <div className="flex flex-col tablet:flex-row gap-[16px] items-center py-[16px]">
              <Link
                href="https://www.beta.preps-ai.com"
                className=" bg-[#2F67E6] border border-[#5D8EFE] h-[40px] tablet:px-[8px] tablet:py-[8px] px-[8px] py-[4px] hover:bg-opacity-90  rounded-[4px] w-[160px] flex justify-center items-center"
              >
                <span className="text-[16px] leading-[24px] font-[600] self-center">
                  Start Prepping
                </span>
              </Link>
              <span className="opacity-60 text-[16px] leading-[24px] font-[600]">
                Learn More →
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full h-full tablet:flex items-center justify-center hidden">
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
