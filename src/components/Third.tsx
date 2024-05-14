'use client';
import { useState } from 'react';
import Image from 'next/image';

const Third = () => {
  const [hovered, setHovered] = useState<string | null>(null);

  const sections = [
    {
      id: 'reps',
      title: 'Flexible',
      src: '/preps_flexible.svg',
      description:
        'Hop on a call with your AI interviewer at anytime, at anywhere',
    },
    {
      id: 'time',
      title: 'Real-Time',
      src: '/preps_realtime.svg',
      description:
        'Speak to our AI interviewer in real time just like having a real interview',
    },
    {
      id: 'Personalize',
      title: 'Personalize',
      src: '/preps_dynamic.svg',
      description:
        'Choose any topic, any difficulty and let us handle the rest',
    },
  ];

  return (
    <main className="flex items-start tablet:items-center justify-between w-full tablet:main min-h-[900px] h-full text-[32px] leading-[36px] font-[600]">
      <div
        className={`flex tablet:flex-row flex-col tablet:gap-0 gap-[64px] transition-all items-center w-full ease-out h-full  ${
          hovered && hovered !== null && ''
        }`}
      >
        {sections.map((section) => (
          <div
            key={section.id}
            className={`flex flex-col px-[32px] ${
              hovered && hovered !== section.id ? ' w-1/3 ' : ' tablet:w-full'
            } justify-center gap-[16px] transition-all tablet:gap-[32px]  text-center relative group ease-out duration-[800ms] items-center`}
            onMouseEnter={() => setHovered(section.id)}
            onMouseLeave={() => setHovered(null)}
          >
            <div className="flex flex-col items-center gap-[32px] w-full justify-center ">
              <Image
                src={section.src}
                height={160}
                width={160}
                alt={section.title}
                className={`ease-out duration-500 w-[160px] h-[160px] tablet:w-[160px] tablet:h-[160px] ${
                  hovered &&
                  hovered === section.id &&
                  'w-[320px] h-[320px] tablet:w-[320px] tablet:h-[320px] self-center'
                }`}
              />
              <div className="flex flex-col gap-[16px] text-center items-center w-full">
                <span
                  className={`transition-all text-center text-[18px] tablet:text-[32px]  ${
                    hovered && hovered !== section.id
                      ? 'overflow-hidden fade-out-slow opacity-0 flex-nowrap'
                      : 'flex'
                  }`}
                >
                  {section.title}
                </span>
                <span className="hidden w-[320px] group-hover:inline-flex text-center font-[500] leading-[24px] text-[14px] tablet:text-[16px]  transition-all fade-in-slow duration-[800ms]">
                  {section.description}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Third;
