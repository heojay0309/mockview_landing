const Fourth = () => {
  return (
    <div className="w-full flex text-white  md:flex-row-reverse flex-col md:h-[804px] md:min-h-[804px] min-h-[740px] h-[740px] md:gap-[0px] justify-around gap-[32px]">
      <section className="md:w-1/3 flex items-center md:px-[64px]">
        <div className="flex flex-col gap-[16px]">
          <h1 className="font-[600] md:text-[32px] text-[28px] md:leading-[40px] leading-[34px] md:leading-tighter-[4%] leading-tighter-[2%]">
            Insightful Analysis
          </h1>
          <h2 className="font-[400] md:text-[24px] text-[18px] md:leading-[28px] leading-[24px]">
            Feedback is the gateway to growth.
          </h2>
          <div className="border-b "></div>

          <span className="font-[400] text-[16px] leading-[24px]">
            Our AI analyzes your performance in real-time, providing you with
            insights that are not just about correctness, but also about
            efficiency, style, and strategy. This intelligent review system
            helps you understand where you excel and where you can improve
          </span>
        </div>
      </section>
      <section className="flex md:flex-1 md:pr-[64px] items-center justify-center md:h-full ">
        <div className="flex md:flex-col w-full  md:items-center justify-between gap-[32px] ">
          <div className="md:h-[128px] md:w-[128px] h-[96px] border border-slate-800 w-[96px] opacity-90 rounded-full bg-[#686868] flex items-center justify-center flex-col">
            <span className="text-center font-[600] md:text-[18px] text-sm leading-[28px]">
              Performance
            </span>
            <span className="text-center font-[600] md:text-[18px] text-sm leading-[28px]">
              Metrics
            </span>
          </div>
          <div className="md:h-[128px] md:w-[128px] h-[96px] border border-slate-800 w-[96px] opacity-90 rounded-full bg-[#686868] flex items-center justify-center flex-col">
            <span className="text-center font-[600] md:text-[18px] text-sm leading-[28px]">
              Strategy
            </span>
            <span className="text-center font-[600] md:text-[18px] text-sm leading-[28px]">
              Tips
            </span>
          </div>
          <div className="md:h-[128px] md:w-[128px] h-[96px] border border-slate-800 w-[96px] opacity-90 rounded-full bg-[#686868] flex items-center justify-center flex-col">
            <span className="text-center font-[600] md:text-[18px] text-sm leading-[28px]">
              Progress
            </span>
            <span className="text-center font-[600] md:text-[18px] text-sm leading-[28px]">
              Tracking
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Fourth;
