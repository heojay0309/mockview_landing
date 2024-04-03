import { VscFeedback } from 'react-icons/vsc';

const Intro = () => {
  return (
    <div className="w-full flex text-white  md:flex-row flex-col md:h-[804px]  md:min-h-[804px] min-h-[740px] md:gap-[0px] justify-around  gap-[32px]">
      <section className="md:flex-1 flex md:px-[64px] items-center">
        <div className="flex flex-col gap-[16px]">
          <h1 className="font-[600] md:text-[48px] text-[36px] md:leading-[64px] leading-[54px] md:leading-tighter-[4%] leading-tighter-[2%]">
            Mock<span className="opacity-60">(Inter)</span>
            View
          </h1>
          <h2 className="font-[400] md:text-[24px] text-[18px] md:leading-[28px] leading-[24px]">
            Interview Prep -{' '}
            <span className="font-[600] text-blue-400">Redefined</span>
          </h2>
          <div className="border-b w-1/2"></div>
          <span className="font-[400] text-[16px] leading-[24px]">
            Prepare, practice, and prevail in technical interviews with our
            AI-enhanced live simulations
          </span>
        </div>
      </section>
      <section className="flex md:w-1/3 items-start  md:p-[64px] md:items-center justify-center md:h-full">
        <div className="flex md:flex-col w-full  md:items-center justify-between gap-[32px] ">
          <div className="md:h-[128px] md:w-[128px] h-[96px] border border-slate-800 w-[96px] opacity-90 rounded-full bg-[#686868] flex items-center justify-center flex-col">
            <span className="text-center font-[600] md:text-[18px] text-sm leading-[28px]">
              Live
            </span>
            <span className="text-center font-[600] md:text-[18px] text-sm leading-[28px]">
              Interaction
            </span>
          </div>
          <div className="md:h-[128px] md:w-[128px] h-[96px] border border-slate-800 w-[96px] opacity-90 rounded-full bg-[#686868] flex items-center justify-center flex-col">
            <span className="text-center font-[600] md:text-[18px] text-sm leading-[28px]">
              Code
            </span>
            <span className="text-center font-[600] md:text-[18px] text-sm leading-[28px]">
              Aloud
            </span>
          </div>
          <div className="md:h-[128px] md:w-[128px] h-[96px] border border-slate-800 w-[96px] opacity-90 rounded-full bg-[#686868] flex items-center justify-center flex-col">
            <span className="text-center font-[600] md:text-[18px] text-sm leading-[28px]">
              Smart
            </span>
            <span className="text-center font-[600] md:text-[18px] text-sm leading-[28px]">
              Feedback
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Intro;
