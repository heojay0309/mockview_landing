// 'use client';
import Link from 'next/link';

import Image from 'next/image';
// import { useState } from 'react';
const Navbar = () => {
  // const [bgClass, setBgClass] = useState('bg-transparent');
  // const [textClass, setTextClass] = useState('');

  return (
    // <nav className="transition-color duration-500 body-font w-full fixed md:px-[64px] md:py-[28px] px-[32px] py-[14px] bg-transparent">
    <nav className="w-full md:px-[64px] md:py-[28px] px-[32px] py-[14px]">
      <div className="flex items-center justify-between">
        <Link href="/" className="flex gap-[4px]">
          <h1 className=" text-[36px] leading-[24px] font-[700]">preps</h1>
        </Link>
        <Image
          alt={'preps'}
          src="/preps_icon_color.svg"
          height={37.09 * 1.5}
          width={27.17 * 1.5}
        />
        <Link
          href="https://www.beta.prepai.dev"
          className=" bg-[#2F67E6] border border-[#5D8EFE] md:px-[32px] md:py-[8px] px-[16px] py-[4px] hover:bg-opacity-90  rounded-[4px]"
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
