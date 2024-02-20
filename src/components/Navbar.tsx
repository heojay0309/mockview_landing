'use client';
import Link from 'next/link';
import { HiMenuAlt3 } from 'react-icons/hi';
import { IoClose } from 'react-icons/io5';

import Image from 'next/image';
import { useEffect, useState } from 'react';
const Navbar = () => {
  const [bgClass, setBgClass] = useState('bg-transparent');
  const [textClass, setTextClass] = useState('text-white');
  const [menuToggle, setMenuToggle] = useState(false);

  const handleScroll = () => {
    const isScrolledDown = window.scrollY > 1;
    if (isScrolledDown) {
      setBgClass('bg-white'); // Replace 'bg-new-color' with your scrolled Tailwind background color class
      setTextClass('text-black');
    } else {
      setBgClass('bg-transparent'); // Reset to original Tailwind background color class
      setTextClass('text-white');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`${textClass} transition-color duration-500 body-font fixed w-screen ${bgClass} z-20`}
    >
      {/* <header
      className={` transition-color rounded-sm  shadow-md shadow-white  drop-shadow text-white duration-300 body-font fixed w-screen z-20`}
    > */}
      <div className="md:flex flex-wrap hidden md:flex-row items-center">
        <a
          href="#home"
          className="flex title-font  font-medium items-center mb-4 md:mb-0"
        >
          <Image src="/M.png" alt="logo" width={50} height={50} />
          <span className=" text-xl">MockView</span>
        </a>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center md:gap-6 lg:gap-10">
          <a className="mr-5 hover:text-white" href="#home">
            HOME
          </a>
          <a className="mr-5 hover:text-white" href="#about">
            ABOUT
          </a>
          <a className="mr-5 hover:text-white" href="#contact">
            CONTACT
          </a>
        </nav>

        <button className="inline-flex items-center bg-indigo-600 border-0 px-7 py-5 focus:outline-none hover:bg-indigo-500 text-white rounded-l text-base mt-0">
          GET STARTED
        </button>
      </div>

      <div
        className={`flex flex-col gap-3 justify-between bg-transparent hover:bg-white hover:text-black`}
      >
        <div className="md:hidden flex flex-row items-center justify-between p-2">
          <a href="#home" className="flex title-font font-medium items-center ">
            <Image src="/M.png" alt="logo" width={50} height={50} />
            <span className=" text-xl">MockView</span>
          </a>
          <button onClick={() => setMenuToggle(!menuToggle)}>
            {menuToggle ? (
              <IoClose className="self-center" size={30} />
            ) : (
              <HiMenuAlt3 className="self-center" size={30} />
            )}
          </button>
        </div>

        {menuToggle && (
          <div className="flex-1 flex flex-col w-full bg-white">
            <nav className="flex flex-col text-xl font-bold justify-between gap-8 mb-16 mt-10 text-black">
              <a className=" hover:text-indigo-600 pl-5" href="#home">
                HOME
              </a>
              <a className=" hover:text-indigo-600 pl-5" href="#about">
                ABOUT
              </a>
              <a className=" hover:text-indigo-600 pl-5" href="#contact">
                CONTACT
              </a>
            </nav>

            <button className=" items-center bg-indigo-600 border-0 px-7 py-5 focus:outline-none hover:bg-indigo-500 text-white text-base">
              GET STARTED
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
