import Image from 'next/image';

const Intro = () => {
  return (
    <main className="flex flex-col tablet:flex-row justify-between items-center gap-[32px] main tablet:py-[64px] h-full">
      <section className="w-full h-full flex flex-col items-start justify-center gap-[16px]">
        <div className="flex flex-col gap-[64px] tablet:gap-[16px] max-w-[544px]">
          <h1 className="font-[600] text-[42px] tablet:text-[56px] text-start tablet:text-start leading-[64px] tracking-[4%] tablet:max-w-none max-w-[460px]">
            Prepare
            <span className="tablet:w-full w-1/2"> Perfect Prevail</span>
          </h1>
          <Image
            src="/preps_hero.svg"
            alt="prepsAI"
            width={640}
            height={386.44}
            className="object-fill tablet:hidden"
          />
          <div className="flex flex-col gap-[16px] mb-[96px] tablet:mb-[96px] text-center tablet:text-start max-w-[544px]">
            <h2 className="font-[400] text-[16px] tablet:text-[20px] leading-[28px]"></h2>
            <div className="border-b w-0 tablet:w-1/2 "></div>
            <p className="font-[400] text-[16px] leading-[24px] tablet:text-left text-center">
              Prepare your upcoming technical interview with our AI powered
              interviewer.
            </p>
          </div>
        </div>
      </section>
      <section className="w-full h-full tablet:flex items-center justify-center hidden">
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
