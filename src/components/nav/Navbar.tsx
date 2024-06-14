'use client';
import Link from 'next/link';
import { TiThMenu } from 'react-icons/ti';

import Image from 'next/image';
import { useState } from 'react';
const Navbar = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  return (
    <nav className="w-full tablet:px-[64px] px-[32px] py-[28px] relative">
      <div className="flex items-center justify-between">
        <Link href="/" className="tablet:flex gap-[4px] hidden">
          <h1 className=" text-[36px] leading-[24px] font-[700]">preps</h1>
        </Link>
        <Image
          alt={'preps'}
          src="/preps_icon_color.svg"
          height={40.09}
          width={30.17}
          className="absolute left-1/2 self-center tablet:block hidden"
        />
        <Link href="/" className="flex tablet:hidden self-end ">
          <Image
            alt={'preps'}
            src="/preps_icon_color.svg"
            height={40.09}
            width={30.17}
          />
        </Link>
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
          <div className="h-[128px] w-[128px] absolute tablet:right-[64px] right-[32px] border-opacity-40 border-white top-16 bg-[#06091E] rounded-[8px] border-[0.5px]">
            <div className="text-[16px] leaving-[24px] font-[600] flex flex-col items-center justify-center h-[128px] rounded-[8px]">
              <Link
                href="/"
                className="hover:bg-white hover:bg-opacity-40 w-full h-full flex items-center rounded-t-[8px] px-[16px] text-right"
              >
                Home
              </Link>
              <Link
                href="/policies"
                className="hover:bg-white hover:bg-opacity-40 w-full h-full flex items-center px-[16px] text-right"
              >
                Policy
              </Link>
              <Link
                href="/faq"
                className="hover:bg-white hover:bg-opacity-40 w-full h-full flex items-center rounded-b-[8px] px-[16px] text-right"
              >
                FAQ
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
