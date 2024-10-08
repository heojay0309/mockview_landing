'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
const Fifth = () => {
  const base = 'Start Your Journey';
  const [select, setSelect] = useState<string>(base);
  const [faqToggle, setFaqToggle] = useState<boolean>(false);
  const [contactToggle, setContactToggle] = useState<boolean>(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (contactToggle) {
      setSelect('Contact Us');
      setIsTransitioning(false);
    } else if (faqToggle) {
      setSelect('Frequently Asked Questions');
      setIsTransitioning(false);
    } else {
      setSelect(base);
      setIsTransitioning(false);
    }
  }, [faqToggle, contactToggle]);

  return (
    <div className="main flex items-center snap-center justify-center relative">
      <Image
        src={'/preps_background.svg'}
        alt={'preps'}
        height={704}
        width={510}
        className="absolute self-end -z-20 pb-[32px]"
      />
      <div className="flex flex-col gap-[32px] items-center ">
        <div className="flex flex-col gap-[8px]">
          <h1 className="font-[600] text-[64px] leading-[72px] text-center">
            Let&apos;s Start Prepping.
          </h1>
          <span className="text-[24px] font-[500] leading-[32px] text-center">
            Success is a Choice.
          </span>
        </div>
        <Link
          href="https://www.beta.preps-ai.com"
          className=" bg-[#2C588E] z-auto relative gap-[10px] overflow-hidden  px-[32px] border border-[#5D8EFE] items-center justify-center flex py-[8px] hover:bg-opacity-90 rounded-[4px] "
        >
          <div className="flex overflow-hidden h-[160px] bg-blend-overlay mix-blend-overlay items-center justify-center  absolute px-[32px] py-[8px] w-[160px]">
            <div className="bg-[#00F0FF] blur-lg opacity-70 mix-blend-overlay rounded-full h-[185px] w-[185px] circle-left overflow-clip "></div>
            <div className="bg-[#0047FF] blur-lg opacity-70 mix-blend-overlay rounded-full h-[185px] w-[185px] circle-right overflow-clip"></div>
          </div>
          <span className="text-[16px] leading-[24px] font-[600] z-auto">
            Enter App
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Fifth;
