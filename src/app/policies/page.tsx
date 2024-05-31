import Link from 'next/link';
type policiesType = {
  title: string;
  description: string;
  url: string;
};

const PolicyPage = () => {
  const policies: policiesType[] = [
    {
      title: 'Terms of use',
      description:
        'Terms that govern use of the products and services of PrepsAI for individuals',
      url: '/policies/terms-of-use',
    },
    {
      title: 'Privacy policy',
      description:
        'Practices with respect to personal information we collect from or about you',
      url: '/policies/privacy-policy',
    },
  ];

  return (
    <div className="flex flex-col tablet:px-[64px] px-[32px] gap-[32px] py-[32px] h-screen">
      <h1 className="  leading-[64px] tracking-[4%] text-[48px] font-[600]">
        Terms & Policies
      </h1>
      <div className="border-b opacity-30"></div>
      <section className="flex justify-between gap-[32px] tablet:gap-[64px] w-full tablet:justify-start tablet:h-full h-1/3">
        {policies.map((el, index) => {
          return (
            <Link
              href={el.url}
              key={index}
              className="border-[0.5px] rounded-md hover:bg-opacity-10 hover:bg-white border-cardBorder-dark flex flex-col gap-[16px] p-[16px] tablet:h-[320px] tablet:w-[320px] justify-between"
            >
              <div className="font-[400] text-[18px] tablet:text-[24px] leading-[16px]">
                {el.title}
              </div>
              <div className="text-[14px] tablet:text-[16px] tablet:leading-[24px] text-left font-[200] leading-[16px] tracking-wider">
                {el.description}
              </div>
              <div className=" h3">View More</div>
            </Link>
          );
        })}
      </section>
    </div>
  );
};
export default PolicyPage;
