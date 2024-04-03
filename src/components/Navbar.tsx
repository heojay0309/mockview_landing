// 'use client';
import Link from 'next/link';

import Image from 'next/image';
// import { useState } from 'react';
const Navbar = () => {
  // const [bgClass, setBgClass] = useState('bg-transparent');
  // const [textClass, setTextClass] = useState('text-white');

  return (
    // <nav className="transition-color duration-500 body-font w-full fixed md:px-[64px] md:py-[28px] px-[32px] py-[14px] bg-transparent">
    <nav className=" w-full  md:px-[64px] md:py-[28px] px-[32px] py-[14px] bg-transparent">
      <div className="flex items-center justify-between">
        <div className="px-[32px] py-[8px] hidden md:flex md:invisible rounded-[4px]">
          <span>Enter App</span>
        </div>
        <Link href="#home" className="flex gap-[4px]">
          <Image src="/mockviewLogo.svg" alt="logo" width={32} height={32} />
          <span className=" text-[20px] leading-[24px] self-center font-[600] text-white">
            MockView
          </span>
        </Link>
        <Link
          href="https://www.beta.mockview.xyz"
          className=" bg-[#2F67E6] border border-[#5D8EFE] md:px-[32px] md:py-[8px] px-[16px] py-[4px] hover:bg-opacity-90 text-white rounded-[4px]"
        >
          <span className="text-[16px] leading-[24px] font-[600]">
            Enter App
          </span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
