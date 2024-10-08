'use server';
import { Suspense } from 'react';
import VideoComponent from './video-component';
import VideoComponentSkeleton from './video-component-skeleton';
import Link from 'next/link';
const Second = () => {
  return (
    <main
      id={'learn'}
      className="flex flex-col snap-center tablet:flex-row items-center gap-[64px] main tablet:max-h-[900px] w-full h-full tablet:py-[64px] laptop:py-[128px]"
    >
      <section className="h-full w-full flex items-center justify-center">
        <VideoComponent />
      </section>
      <section className="flex flex-col gap-[32px] tablet:w-3/5 bg-[#06091E] rounded-[32px] px-[64px] tablet:py-[0px] py-[16px] justify-center h-full">
        <div className="flex flex-col gap-[16px] tablet:py-[0px] py-[16px]">
          <div className="font-[600] text-[32px] leading-[40px] flex flex-col gap-[4px]">
            <span className="text-[12px] leading-[16px]">Imitate Reality</span>
            Quality Preparation
          </div>
          <span className="text-[16px] leading-[24px] font-normal">
            You no longer need to imagine how it’ll go, start practicing with
            simulations that are as 1:1 with real life interviews as it gets.
            Whether it be unexpected questions, or scripted answers, Preps has
            your back when it comes to getting good practice in.
          </span>
        </div>
        <Link
          href="https://www.beta.preps-ai.com"
          className=" bg-[#2F67E6] border border-[#5D8EFE] h-[40px] tablet:px-[8px] tablet:py-[8px] px-[8px] py-[4px] hover:bg-opacity-90  rounded-[4px] w-[160px] flex justify-center items-center"
        >
          <span className="text-[16px] leading-[24px] font-[600] self-center">
            Start Prepping
          </span>
        </Link>
      </section>
    </main>
  );
};

export default Second;

/*
  WHAT: OBJECTIVE QUALITY PRODUCT

  HOW: 

  WHY: 
  
*/
