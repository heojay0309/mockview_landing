const Second = () => {
  return (
    <div className="w-full flex text-white md:flex-row flex-col md:min-h-[804px] min-h-[740px] h-full md:h-[804px] md:gap-[0px] justify-around items-center gap-[32px] md:px-[64px]">
      <section className="md:w-3/5 w-full h-full flex flex-col items-center md:items-start justify-center gap-[32px]">
        <h1 className="font-[600] text-left md:text-center md:text-[48px] text-[28px] md:leading-[48px] leading-[48px] md:leading-tighter-[4%] leading-tighter-[2%]">
          Quick Walkthrough Demo
        </h1>
        {/* <section className="md:w-full h-full flex items-center md:p-[64px]"> */}
        {/* <div className="flex flex-col gap-[16px]">
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
          </span> */}
        {/* </div> */}
        {/* <div className=" flex flex-col "> */}
        <div className="2xl:w-[840px] xl:w-[680px] xl:h-[560px] w-full border-2 p-2 2xl:h-[560px] h-[315px] rounded-lg border-white hover:border-[#5D8EFE]">
          <iframe
            width="560"
            height="315"
            className="w-full h-full"
            src="https://www.youtube.com/embed/IReNj8TUClc?si=cZpC3x_UXwyHBLMF"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        {/* </div> */}
      </section>
      <section className="flex md:flex-1 h-full items-start md:flex-col md:h-full gap-[32px] md:px-[64px]">
        <div className="flex md:flex-col justify-center md:gap-[32px] gap-[64px] md:h-full">
          <div className="md:h-[128px] md:w-[128px] h-[92px] w-[92px] opacity-90 rounded-full bg-[#2F67E6] bg-opacity-20 hover:bg-opacity-60  flex items-center justify-center flex-col">
            <span className="text-center font-[600] md:text-[18px] text-sm leading-[28px]">
              Video Call
            </span>
            <span className="text-center font-[600] md:text-[18px] text-sm leading-[28px]">
              Setup
            </span>
          </div>
          <div className="md:h-[128px] md:w-[128px] h-[92px] w-[92px] opacity-90 rounded-full bg-[#2F67E6] bg-opacity-20 hover:bg-opacity-60  flex items-center justify-center flex-col">
            <span className="text-center font-[600] md:text-[18px] text-sm leading-[28px]">
              Real-Time
            </span>
            {/* <span className="text-center font-[600] md:text-[18px] text-sm leading-[28px]">
              Time
            </span> */}
          </div>
          <div className="md:h-[128px] md:w-[128px] h-[92px] w-[92px] opacity-90 rounded-full bg-[#2F67E6] bg-opacity-20 hover:bg-opacity-60  flex items-center justify-center flex-col">
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
