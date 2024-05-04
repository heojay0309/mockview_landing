'use client';
import { useState } from 'react';
import Image from 'next/image';

const Third = () => {
  const [hovered, setHovered] = useState<string | null>(null);

  const sections = [
    {
      id: 'video',
      title: 'Interview Environment',
      src: '/preps_dynamic.svg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.',
    },
    {
      id: 'time',
      title: 'Real-Time Response',
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
    <main className="flex text-white items-center justify-between main text-[32px] leading-[36px] font-[600]">
      <div
        className={`flex transition-all items-center w-full ease-out h-full  ${
          hovered && hovered !== null && ''
        }`}
      >
        {sections.map((section) => (
          <div
            key={section.id}
            className={`flex flex-col px-[32px] ${
              hovered && hovered !== section.id ? 'w-1/3 ' : 'w-full'
            } justify-center gap-[16px] transition-all md:gap-[32px] text-center relative group ease-out duration-[800ms] items-center`}
            onMouseEnter={() => setHovered(section.id)}
            onMouseLeave={() => setHovered(null)}
          >
            <div className="flex flex-col items-center gap-[32px] w-full justify-center ">
              <Image
                src={section.src}
                height={160}
                width={160}
                alt={section.title}
                className={`ease-out duration-500 w-[80px] h-[80px] md:w-[160px] md:h-[160px] ${
                  hovered &&
                  hovered === section.id &&
                  'w-[160px] h-[160px] md:w-[320px] md:h-[320px] self-center'
                }`}
              />
              <div className="flex flex-col gap-[16px] text-center items-center w-full">
                <span
                  className={`transition-all text-center text-[18px] md:text-[32px]  ${
                    hovered && hovered !== section.id
                      ? 'overflow-hidden fade-out-slow opacity-0 flex-nowrap'
                      : 'flex'
                  }`}
                >
                  {section.title}
                </span>
                <span className="hidden w-[320px] group-hover:inline-flex text-center font-[500] leading-[24px] text-[14px] md:text-[16px]  transition-all fade-in-slow duration-[800ms]">
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
// 'use client';
// import { useEffect, useState } from 'react';
// import Image from 'next/image';

// const Third = () => {
//   const [videoHover, setVideoHover] = useState(false);
//   const [realTimeHover, setRealTimeHover] = useState(false);
//   const [dynamicHover, setDynamicHover] = useState(false);
//   const [hovered, setHovered] = useState<string | null>(null);

//   const sections = [
//     {
//       id: 'video',
//       title: 'Video Call Setup',
//       src: '/preps_dynamic.svg',
//       description:
//         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.',
//     },
//     {
//       id: 'time',
//       title: 'Real-Time',
//       src: '/preps_realtime.svg',
//       description:
//         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.',
//     },
//     {
//       id: 'dynamic',
//       title: 'Dynamic Scenarios',
//       src: '/preps_dynamic.svg',
//       description:
//         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.',
//     },
//   ];

//   return (
//     <main className="flex text-white items-center justify-center main text-[32px] leading-[36px] font-[600]">
//       <div
//         className={`flex peer parent-div group/item transition-all items-center w-full  gap-[64px] ease-out h-full ${
//           hovered && 'gap-[32px]'
//         }`}
//       >
//         {sections.map((section) => (
//           <div
//             key={section.id}
//             className={`flex   flex-col ${
//               hovered && hovered !== section.id ? 'w-1/3 self-center' : ''
//             } justify-center w-full gap-[32px] text-center h-full relative group ease-out duration-300 items-center`}
//             onMouseEnter={() => setHovered(section.id)}
//             onMouseLeave={() => setHovered(null)}
//           >
//             <Image
//               src={section.src}
//               height={160}
//               width={160}
//               alt={section.title}
//               className={` ease-out duration-300 ${
//                 hovered && hovered === section.id && 'w-[320px] h-[320px]'
//               }`}
//             />
//             <div className="flex flex-col gap-[16px] text-center items-center">
//               <span
//                 className={`transition-opacity duration-100 text-center  ${
//                   hovered && hovered !== section.id ? 'hidden' : 'inline-flex'
//                 }`}
//               >
//                 {section.title}
//               </span>
//               <span className="hidden max-w-[544px] group-hover:inline-flex ease-out duration-100 text-center font-[500] leading-[24px] text-[16px]">
//                 {section.description}
//               </span>
//             </div>
//           </div>
//         ))}
//       </div>
//     </main>
//   );
// };

// export default Third;
