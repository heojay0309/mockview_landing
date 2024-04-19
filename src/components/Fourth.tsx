const Fourth = () => {
  return (
    <div className="w-full flex md:px-[64px] text-white md:flex-row-reverse flex-col md:h-[804px] md:min-h-[804px] min-h-[740px] h-[740px] md:gap-[0px] justify-around gap-[32px] pt-[64px]">
      <section className="md:flex-1 flex md:items-center md:px-[64px]">
        <div className="flex flex-col md:gap-[32px] gap-[16px]">
          <h1 className="font-[600] md:text-[48px] text-[28px] md:leading-[48px] leading-[48px] md:leading-tighter-[4%] leading-tighter-[2%]">
            Practice and Repeat
          </h1>
          <h2 className="font-[400] md:text-[24px] text-[18px] md:leading-[28px] leading-[24px]">
            Perfect Your Interviews with Endless Practice
          </h2>
          <div className="border-b "></div>

          <span className="font-[400] text-[16px] leading-[32px]">
            At PrepAI, we value consistency and dedication in your interview
            preparation. That&apos;s why we provide unlimited opportunities to
            practice until you ace your interviews. Come anytime, practice as
            much as you need, and transform your persistence into success!
          </span>
        </div>
      </section>
      <section className="flex  md:w-3/5 md:pr-[64px] items-center justify-center md:h-full">
        <div className="flex md:flex-col w-full md:items-center justify-between gap-[32px] ">
          <div className="md:h-[128px] md:w-[128px] h-[92px] hover:border hover:border-[#5D8EFE] w-[92px] opacity-90 rounded-full bg-[#2F67E6] bg-opacity-20 hover:bg-opacity-60  flex items-center justify-center flex-col">
            <span className="text-center font-[600] md:text-[18px] text-sm leading-[28px]">
              Practice
            </span>
            {/* <span className="text-center font-[600] md:text-[18px] text-sm leading-[28px]">
              Metrics
            </span> */}
          </div>
          <div className="md:h-[128px] md:w-[128px] h-[96px] hover:border hover:border-[#5D8EFE] w-[96px] opacity-90 rounded-full bg-[#2F67E6] bg-opacity-20 hover:bg-opacity-60  flex items-center justify-center flex-col">
            <span className="text-center font-[600] md:text-[18px] text-sm leading-[28px]">
              Progress
            </span>
            {/* <span className="text-center font-[600] md:text-[18px] text-sm leading-[28px]">
              Tips
            </span> */}
          </div>
          <div className="md:h-[128px] md:w-[128px] h-[96px] hover:border hover:border-[#5D8EFE]  w-[96px] opacity-90 rounded-full bg-[#2F67E6] bg-opacity-20 hover:bg-opacity-60  flex items-center justify-center flex-col">
            <span className="text-center font-[600] md:text-[18px] text-sm leading-[28px]">
              Perfect
            </span>
            {/* <span className="text-center font-[600] md:text-[18px] text-sm leading-[28px]">
              Tracking
            </span> */}
          </div>
        </div>
      </section>
    </div>
  );
};
export default Fourth;
