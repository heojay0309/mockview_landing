'use client';
import Link from 'next/link';
import { TiThMenu } from 'react-icons/ti';

import Image from 'next/image';
import { useState } from 'react';
const Navbar = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  return (
    <nav className="w-full px-[64px] py-[28px] relative">
      <div className="flex items-center justify-between">
        <Link href="/" className="flex gap-[4px]">
          <h1 className=" text-[36px] leading-[24px] font-[700]">preps</h1>
        </Link>
        <Image
          alt={'preps'}
          src="/preps_icon_color.svg"
          height={40.09}
          width={30.17}
          className="absolute left-1/2 self-center"
        />
        <button
          className="h-[32px] w-[32px]"
          onClick={() => setMenuToggle(!menuToggle)}
        >
          <TiThMenu
            size={32}
            className={`self-center tablet:hidden hover:opacity-80 active:opacity-60 ${
              menuToggle && 'opacity-60'
            }`}
          />
        </button>
        <div className="gap-[32px] text-[16px] leaving-[24px] font-[600] hidden tablet:flex">
          <Link href="/">Home</Link>
          <Link href="/policies">Policy</Link>
          <Link href="/faq">FAQ</Link>
        </div>
        {menuToggle && (
          <div className="h-[128px] w-[128px] absolute right-[64px] top-16 bg-[#06091E] rounded-[8px] border-[0.5px]">
            <div className="text-[16px] leaving-[24px] font-[600] flex flex-col items-center justify-center h-[128px] rounded-[8px]">
              <Link
                href="/"
                className="hover:bg-white hover:bg-opacity-40 w-full h-full flex items-center rounded-t-[8px] px-[16px]"
              >
                Home
              </Link>
              <Link
                href="/policies"
                className="hover:bg-white hover:bg-opacity-40 w-full h-full flex items-center px-[16px]"
              >
                Policy
              </Link>
              <Link
                href="/faq"
                className="hover:bg-white hover:bg-opacity-40 w-full h-full flex items-center rounded-b-[8px] px-[16px]"
              >
                FAQ
              </Link>
            </div>
          </div>
        )}
        {/* <Link
          href="https://www.beta.preps-ai.com"
          className=" bg-[#2F67E6] border border-[#5D8EFE] tablet:px-[32px] tablet:py-[8px] px-[16px] py-[4px] hover:bg-opacity-90  rounded-[4px]"
        >
          <span className="text-[16px] leading-[24px] font-[600]">
            Enter App
          </span>
        </Link> */}
      </div>
    </nav>
  );
};

export default Navbar;
