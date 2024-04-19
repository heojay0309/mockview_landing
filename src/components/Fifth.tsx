'use client';
import { useState, useEffect } from 'react';
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
    <div className="w-full md:px-[64px] flex text-white justify-around md:flex-row-reverse flex-col md:h-[804px] md:min-h-[804px] min-h-[740px] h-[740px] my-[64px] md:my-[0px] md:gap-[32px] gap-[16px]">
      <section
        className={`md:w-full flex items-center justify-center md:px-[160px]  ${
          select ? 'section-enter-active' : 'section-enter'
        }`}
      >
        <div
          className={`flex flex-col gap-[16px] component-enter-active ${
            select === base
              ? 'md:animate-bounce'
              : 'md:h-[540px] items-center self-center h-full w-full '
          } justify-between md:items-start transition-all `}
        >
          {select === base ? (
            <Link
              href="https://www.beta.prepai.dev/"
              className={`font-[600] md:text-[48px] w-full text-center md:text-start text-[36px] md:leading-[64px] leading-[54px] md:leading-tighter-[4%] leading-tighter-[2%] ${
                isTransitioning
                  ? 'title-fade-exit-active'
                  : 'title-fade-enter-active'
              }`}
            >
              {select}
            </Link>
          ) : (
            <h1
              className={`font-[600] md:text-[48px] w-full text-center md:text-start text-[36px] md:leading-[64px] leading-[54px] md:leading-tighter-[4%] leading-tighter-[2%] ${
                isTransitioning
                  ? 'title-fade-exit-active'
                  : 'title-fade-enter-active'
              }`}
            >
              {select}
            </h1>
          )}
          {(select === 'Contact Us' && (
            <div
              className={`flex-grow flex justify-center items-center ${
                contactToggle ? 'component-enter-active' : 'component-enter'
              }`}
            >
              <Contact />
            </div>
          )) ||
            (select === 'Frequently Asked Questions' && (
              <div
                className={`flex-grow flex justify-center items-center ${
                  faqToggle ? 'component-enter-active' : 'component-enter'
                }`}
              >
                <Faq
                  setIsTransitioning={setIsTransitioning}
                  setContactToggle={setContactToggle}
                  setFaqToggle={setFaqToggle}
                />
              </div>
            ))}
        </div>
      </section>
      <section className="flex md:flex-1 items-center justify-center md:h-full ">
        <div className="flex md:flex-col md:items-center justify-center md:gap-[32px] gap-[64px] ">
          <button
            onClick={() => {
              setIsTransitioning(true);
              setTimeout(() => {
                setContactToggle(false);
                setFaqToggle(!faqToggle);
              }, 300);
            }}
            className={`md:h-[128px] md:w-[128px] hover:border hover:border-[#5D8EFE] h-[92px] w-[92px] rounded-full bg-[#2F67E6] bg-opacity-20  hover:bg-opacity-60 flex items-center justify-center flex-col ${
              faqToggle && 'bg-opacity-60 border border-[#5D8EFE]'
            }`}
          >
            <span className="text-center font-[600] md:text-[18px] text-sm leading-[28px]">
              FAQ
            </span>
          </button>
          <Link
            href="/policies"
            className="md:h-[128px] md:flex hidden md:w-[128px] hover:border hover:border-[#5D8EFE] h-[92px] w-[92px] rounded-full bg-[#2F67E6] bg-opacity-20 hover:bg-opacity-60  items-center justify-center flex-col"
          >
            <span className="text-center font-[600] md:text-[18px] text-sm leading-[28px]">
              POLICIES
            </span>
          </Link>
          <button
            onClick={() => {
              setIsTransitioning(true);
              setTimeout(() => {
                setFaqToggle(false);
                setContactToggle(!contactToggle);
              }, 300);
            }}
            className={`md:h-[128px] md:w-[128px] hover:border hover:border-[#5D8EFE] h-[92px] w-[92px] rounded-full bg-[#2F67E6] bg-opacity-20  hover:bg-opacity-60 flex items-center justify-center flex-col ${
              contactToggle && 'bg-opacity-60  border border-[#5D8EFE]'
            }`}
          >
            <span className="text-center font-[600] md:text-[18px] text-sm leading-[28px]">
              CONTACT
            </span>
          </button>
        </div>
      </section>
    </div>
  );
};

export default Fifth;
