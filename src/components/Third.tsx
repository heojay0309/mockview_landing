const Third = () => {
  return (
    <div className="w-full flex text-white  md:flex-row flex-col md:h-[804px] md:min-h-[804px] min-h-[740px]  md:gap-[0px] justify-around  gap-[32px]">
      <section className="md:w-1/3 flex md:h-full md:p-[64px]">
        <div className="flex flex-col gap-[16px] md:h-full justify-center">
          <h1 className="font-[600] md:text-[32px] text-[28px] md:leading-[40px] leading-[34px] md:leading-tighter-[4%] leading-tighter-[2%]">
            &quot;Solving technical problems under the pressure is no longer a
            problem&quot;
          </h1>
        </div>
      </section>
      <section className="md:flex-1 flex items-center justify-center md:px-[64px] flex-row-reverse w-full">
        <div className="flex flex-col md:w-5/6 justify-start gap-[32px]">
          <div className="flex md:items-center w-full gap-[32px]">
            <div className="flex flex-col self-center  ">
              <div className="md:h-[128px] md:w-[128px] h-[96px] border border-[#5D8EFE] w-[96px] opacity-90 rounded-full bg-[#2F67E6] bg-opacity-20 hover:bg-opacity-90  flex items-center justify-center flex-col">
                <span className="text-green-500 font-[600] md:text-[32px] text-sm leading-[28px] text-center">
                  {'?'}
                </span>
              </div>
            </div>
            <div className="border-[#686868] border-t-4 flex-1"></div>
            <div className="flex flex-col md:gap-[16px] h-full self-center justify-center gap-[8px] max-w-[416px] break-words">
              <h1 className="font-[600] md:text-[32px] text-[24px] leading-[36px] ">
                Algorithms Questions
              </h1>
              <span className="font-[500] text-[14px] leading-[20px] whitespace-normal">
                Your technical interviewer will provide you with the randomized
                algorithm questions, and your job is to walk through your
                approach and solving them correctly.
              </span>
            </div>
          </div>

          <div className="flex h-full md:items-center gap-[32px]">
            <div className="flex flex-col self-center">
              <div className="md:h-[128px] md:w-[128px] h-[96px] border border-[#5D8EFE] w-[96px] opacity-90 rounded-full bg-[#2F67E6] bg-opacity-20 hover:bg-opacity-90  flex items-center justify-center flex-col">
                {' '}
                <span className="text-green-500 font-[600] md:text-[32px] text-sm leading-[28px] text-center">
                  {' >_'}
                </span>
              </div>
            </div>
            <div className="border-[#686868] border-t-4 flex-1"></div>
            <div className="flex flex-col md:gap-[16px] h-full  self-center justify-center gap-[8px] max-w-[416px] break-words">
              <h1 className="font-[600] md:text-[32px] text-[24px] leading-[36px] ">
                Console
              </h1>
              <span className="font-[500] text-[14px] leading-[20px] whitespace-normal">
                It&apos; a best practice to add logs on your code when debugging
                your solutions during the interview. You may try running the
                code to see the output and the console.
              </span>
            </div>
          </div>
          <div className="flex h-full md:items-center gap-[32px] ">
            <div className="flex flex-col self-center ">
              <div className="md:h-[128px] md:w-[128px] h-[96px] border border-[#5D8EFE] w-[96px] opacity-90 rounded-full bg-[#2F67E6] bg-opacity-20 hover:bg-opacity-90  flex items-center justify-center flex-col">
                {' '}
                <span className="text-green-500 font-[600] md:text-[32px] text-sm leading-[28px] text-center">
                  {'</>'}
                </span>
              </div>
            </div>
            <div className="border-[#686868] border-t-4 flex-1"></div>
            <div className="flex flex-col md:gap-[16px] h-full self-center justify-center gap-[8px] max-w-[416px] break-words">
              <h1 className="font-[600] md:text-[32px] text-[24px] leading-[36px] ">
                Languages
              </h1>
              <div className="font-[500] text-[14px] md:text-[16px] leading-[20px] whitespace-normal">
                Currently our supported languages are:
                <span className="font-[700]"> Python,</span>
                <span className="font-[700]"> JavaScript,</span>
                <span className="font-[700]"> Java </span>. We are dedicated to
                provide our service to everyone in need of technical interview
                practices, stay connected with us for the updates.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Third;
