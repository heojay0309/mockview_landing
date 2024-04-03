'use client';
import { useRouter } from 'next/navigation';
const PolicyPage = () => {
  const router = useRouter();

  const policies: {
    [key: string]: string;
  } = {
    'Terms of use':
      'Terms that govern use of the products and services of MockView for individuals',
    'Privacy policy':
      'Practices with respect to personal information we collect from or about you',
  };
  return (
    <div className="flex gap-[16px] text-white flex-col justify-start pt-[124px] p-[64px] h-full overflow-y-scroll">
      <h1 className="text-[64px] font-[400] leading-[16px]">
        Terms & policies
      </h1>
      <div className="border-b pt-1"></div>
      <h1 className="text-[32px] py-[32px] font-[200] leading-[16px]">Legal</h1>
      <div className="flex flex-row justify-between gap-[32px] h-2/5 ">
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
              className="border-[0.5px] hover:bg-opacity-40 hover:bg-white border-gray-400 flex flex-col gap-[16px] p-[16px] justify-between"
            >
              <div className="font-[400] text-[24px] leading-[16px]">
                {section}
              </div>
              <div className="text-[16px] text-left font-[200] leading-[16px] tracking-wider">
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
