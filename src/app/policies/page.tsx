'use client';
import { useRouter } from 'next/navigation';
const PolicyPage = () => {
  const router = useRouter();

  const policies: {
    [key: string]: string;
  } = {
    'Terms of use':
      'Terms that govern use of the products and services of PrepAI for individuals',
    'Privacy policy':
      'Practices with respect to personal information we collect from or about you',
  };
  return (
    <div className="flex flex-col px-[64px] h-full md:h-[804px] md:min-h-[804px] min-h-[790px] gap-[32px] text-white md:pb-[128px] py-[64px]">
      <h1 className="text-[32px] md:text-[64px] font-[500] leading-[16px]">
        Terms & Policies
      </h1>
      <div className="border-b pt-1"></div>
      <div className="flex flex-col justify-between gap-[32px] ">
        {Object.keys(policies).map((section: string) => {
          let link = '/';
          if (section === 'Terms of use') {
            link = 'policies/terms-of-use';
          } else {
            link = 'policies/privacy-policy';
          }
          return (
            <button
              key={section}
              onClick={() => router.push(link)}
              className="border-[0.5px] rounded-md hover:bg-opacity-10 hover:bg-white border-gray-400 flex flex-col gap-[16px] p-[16px] md:h-[160px] justify-between"
            >
              <div className="font-[400] text-[18px] md:text-[24px] leading-[16px]">
                {section}
              </div>
              <div className="text-[14px] md:text-[16px] md:leading-[24px] text-left font-[200] leading-[16px] tracking-wider">
                {policies[section]}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
export default PolicyPage;
