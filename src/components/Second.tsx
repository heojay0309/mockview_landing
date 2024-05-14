'use client';
const Second = () => {
  return (
    <main className="flex flex-col items-center gap-[64px] main tablet:max-h-none max-h-[675px] tablet:justify-center tablet:py-[64px]">
      <h1 className="font-[600] leading-[40px] text-[32px]"></h1>
      <iframe
        src="https://drive.google.com/file/d/1EZK3yCLyCLwqYnqw7oOs-tBu2X8KPx8e/preview"
        width={960}
        height={540}
        // width={480}
        // height={270}
        allow="autoplay"
        className="rounded-[8px] w-[480px] h-[270px] tablet:w-[720px] tablet:h-[405px] lg:w-[960px] lg:h-[540px]"
      ></iframe>
      <p className="font-[400] text-[16px] leading-[20px]">
        {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. */}
      </p>
    </main>
  );
};

export default Second;
