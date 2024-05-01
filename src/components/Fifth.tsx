'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Contact from './Contact';
import Faq from './Faq';
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
    <div className="main flex items-center justify-center text-white relative">
      <Image
        src={'/preps_background.svg'}
        alt={'preps'}
        height={704}
        width={510}
        className="absolute self-center -z-20"
      />
      <div className="flex flex-col gap-[32px] items-center">
        <h1 className="font-[600] text-[64px] leading-[72px]">
          Let&apos;s Start Prepping.
        </h1>
        <Link
          href="https://www.beta.prepai.dev"
          className=" bg-[#001AFF] gap-[10px] px-[32px] border border-[#5D8EFE] py-[8px] hover:bg-opacity-90 text-white rounded-[4px]"
        >
          <span className="text-[16px] leading-[24px] font-[600]">
            Enter App
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Fifth;
