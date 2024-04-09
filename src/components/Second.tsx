const Second = () => {
  return (
    <div className="w-full flex text-white  md:flex-row flex-col md:h-[804px] md:min-h-[804px] min-h-[740px] h-[740px] md:gap-[0px] justify-around gap-[32px]">
      <section className="md:flex-1 flex items-center md:p-[64px]">
        <div className="flex flex-col gap-[16px]">
          <h1 className="font-[600] md:text-[48px] text-[36px] md:leading-[64px] leading-[54px] md:leading-tighter-[4%] leading-tighter-[2%]">
            Engage with Expertise
          </h1>
          <h2 className="font-[400] md:text-[24px] text-[18px] md:leading-[28px] leading-[24px]">
            Dive into the depths of a real technical interview.
          </h2>
          <div className="border-b "></div>

          <span className="font-[400] text-[16px] leading-[24px]">
            Engage with our AI interviewers in a live session that simulates the
            pressure and expectations of an actual interview environment.
            Sharpen your communication skills, think on your feet, and get
            comfortable with the spotlight on your problem-solving approach
          </span>
        </div>
      </section>
      <section className="flex md:w-2/3 items-center justify-center md:h-full">
        <div className="flex md:flex-col w-full  md:items-center justify-between gap-[32px] ">
          <div className="md:h-[128px] md:w-[128px] h-[96px] border border-[#5D8EFE] w-[96px] opacity-90 rounded-full bg-[#2F67E6] bg-opacity-20 hover:bg-opacity-90  flex items-center justify-center flex-col">
            <span className="text-center font-[600] md:text-[18px] text-sm leading-[28px]">
              Instant
            </span>
            <span className="text-center font-[600] md:text-[18px] text-sm leading-[28px]">
              Dialouge
            </span>
          </div>
          <div className="md:h-[128px] md:w-[128px] h-[96px] border border-[#5D8EFE] w-[96px] opacity-90 rounded-full bg-[#2F67E6] bg-opacity-20 hover:bg-opacity-90  flex items-center justify-center flex-col">
            <span className="text-center font-[600] md:text-[18px] text-sm leading-[28px]">
              Video Call
            </span>
            <span className="text-center font-[600] md:text-[18px] text-sm leading-[28px]">
              Setup
            </span>
          </div>
          <div className="md:h-[128px] md:w-[128px] h-[96px] border border-[#5D8EFE] w-[96px] opacity-90 rounded-full bg-[#2F67E6] bg-opacity-20 hover:bg-opacity-90  flex items-center justify-center flex-col">
            <span className="text-center font-[600] md:text-[18px] text-sm leading-[28px]">
              Dynamic
            </span>
            <span className="text-center font-[600] md:text-[18px] text-sm leading-[28px]">
              Scenarios
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Second;
