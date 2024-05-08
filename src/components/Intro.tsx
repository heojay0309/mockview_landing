import Image from 'next/image';

const Intro = () => {
  return (
    <main className="flex md:flex-row flex-col justify-between items-center gap-[32px] h-[804px]">
      {/* <main className="flex  md:flex-row flex-col justify-between items-start gap-[32px] main"> */}
      <section className="w-full h-full flex flex-col items-start justify-center gap-[16px]">
        <div className="flex flex-col gap-[16px]">
          <h1 className="font-[600] text-[48px] text-center md:text-start md:text-[48px] 2xl:text-[56px] leading-[64px] tracking-[4%] ">
            Prepare Perfect and Prevail
          </h1>
          <div className="flex flex-col gap-[16px] mb-[0px] md:mb-[96px] text-center md:text-start">
            <h2 className="font-[400] text-[16px] md:text-[20px] leading-[28px]"></h2>
            <div className="border-b w-full md:w-1/2"></div>
            <p className="font-[400] text-[14px] md:text-[16px] leading-[24px]">
              Test your technical skills in real-time scenarios using our AI
              powered dynamic interview simulator.
            </p>
          </div>
        </div>
      </section>
      <section className="w-full h-full flex items-start md:items-center justify-center">
        <Image
          src="/preps_hero.svg"
          alt="prepsAI"
          width={640}
          height={386.44}
          className="object-fill"
        />
      </section>
    </main>
  );
};

export default Intro;
