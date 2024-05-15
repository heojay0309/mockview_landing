'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const Intro = () => {
  const [bounceTurn, setBounceTurn] = useState(0);

  setTimeout(() => {
    if (bounceTurn === 5) {
      setBounceTurn(0);
      return;
    }
    setBounceTurn(bounceTurn + 1);
  }, 1000);

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
      <section className="w-full h-full tablet:flex items-center justify-center hidden  ">
        {/* <Image
          src="/preps_hero.svg"
          alt="prepsAI"
          width={640}
          height={386.44}
          className="object-fill"
        /> */}
        <Image
          src="/images/preps_platform.svg"
          alt="prepsAI"
          width={640}
          height={386.44}
          className="object-fill relative"
        />
        <div className="w-[506px] h-[270px] rounded-full aspect-auto absolute ">
          <Image
            src="/images/ai.svg"
            alt="prepsAI"
            width={134.8}
            height={180.55}
            className={`object-fill absolute bottom-[70px] right-[-22px] ${
              bounceTurn === 0 && 'animate-bounce-slow'
            } ease-in-out`}
          />
          <Image
            src="/images/pencil.svg"
            alt="prepsAI"
            width={122}
            height={126.8}
            className={`object-fill absolute bottom-[11px] right-[85px] ${
              bounceTurn === 1 && 'animate-bounce-slow'
            } ease-in-out`}
          />
          <Image
            src="/images/screen.svg"
            alt="prepsAI"
            width={122}
            height={123}
            className={`object-fill absolute bottom-[135px] right-[78px] ${
              bounceTurn === 2 && 'animate-bounce-slow'
            } ease-in-out`}
          />
          <Image
            src="/images/computer.svg"
            alt="prepsAI"
            width={101}
            height={69.81}
            className={`object-fill absolute bottom-[82px] left-[-30px] ease-in-out ${
              bounceTurn === 3 && 'animate-bounce-slow'
            }`}
          />
          <Image
            src="/images/sound.svg"
            alt="prepsAI"
            width={109}
            height={106.17}
            className={`object-fill absolute top-[26px] left-[60px] ease-in-out ${
              bounceTurn === 4 && 'animate-bounce-slow'
            }`}
          />
          <Image
            src="/images/speaker.svg"
            alt="prepsAI"
            width={109.14}
            height={86.67}
            className={`object-fill absolute bottom-[14px] left-[81px] ease-in-out ${
              bounceTurn === 5 && 'animate-bounce-slow'
            }`}
          />
          {/* <Image
            src="/images/ai.svg"
            alt="prepsAI"
            width={134.8}
            height={180.55}
            className="object-fill absolute bottom-[70px] right-[-22px]"
          />
          <Image
            src="/images/pencil.svg"
            alt="prepsAI"
            width={122}
            height={126.8}
            className="object-fill absolute bottom-[11px] right-[85px]"
          />
          <Image
            src="/images/screen.svg"
            alt="prepsAI"
            width={122}
            height={123}
            className="object-fill absolute bottom-[135px] right-[78px]"
          />
          <Image
            src="/images/computer.svg"
            alt="prepsAI"
            width={101}
            height={69.81}
            className="object-fill absolute bottom-[82px] left-[-30px]"
          />
          <Image
            src="/images/sound.svg"
            alt="prepsAI"
            width={109}
            height={106.17}
            className="object-fill absolute top-[26px] left-[60px]"
          />
          <Image
            src="/images/speaker.svg"
            alt="prepsAI"
            width={109.14}
            height={86.67}
            className="object-fill absolute bottom-[14px] left-[81px]"
          /> */}
        </div>
      </section>
    </main>
  );
};

export default Intro;
