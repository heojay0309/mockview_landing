'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';

const Third = () => {
  const [videoHover, setVideoHover] = useState(false);
  const [realTimeHover, setRealTimeHover] = useState(false);
  const [dynamicHover, setDynamicHover] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);

  const sections = [
    {
      id: 'video',
      title: 'Video Call Setup',
      src: '/preps_dynamic.svg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.',
    },
    {
      id: 'time',
      title: 'Real-Time',
      src: '/preps_realtime.svg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.',
    },
    {
      id: 'dynamic',
      title: 'Dynamic Scenarios',
      src: '/preps_dynamic.svg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.',
    },
  ];

  return (
    <main className="flex text-white items-center justify-center main text-[32px] leading-[36px] font-[600]">
      <div className="flex peer parent-div group/item transition-all items-center gap-[64px] hover:gap-[32px] ease-out">
        {sections.map((section) => (
          <div
            key={section.id}
            className="flex child-div hover-target flex-col items-center justify-center w-full gap-[32px] h-full relative hover:flex-grow group ease-out duration-300"
            onMouseEnter={() => setHovered(section.id)}
            onMouseLeave={() => setHovered(null)}
          >
            <Image
              src={section.src}
              height={160}
              width={160}
              alt={section.title}
              className="group-hover:w-[320px] group-hover:h-[320px] ease-out duration-300"
            />
            <span
              className={`transition-opacity duration-100 ${
                hovered && hovered !== section.id ? 'opacity-0' : 'opacity-100'
              }`}
            >
              {section.title}
            </span>
            <span className="invisible group-hover:visible ease-out duration-100 text-center font-[500] leading-[24px] text-[16px]">
              {section.description}
            </span>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Third;
