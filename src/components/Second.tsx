'use client';
const Second = () => {
  return (
    <main className="flex flex-col items-center text-white gap-[64px] main">
      <h1 className="font-[600] leading-[40px] text-[32px]">
        Lorem ipsum dolor sit amet, consectetur
      </h1>
      <iframe
        src="https://drive.google.com/file/d/1EZK3yCLyCLwqYnqw7oOs-tBu2X8KPx8e/preview"
        width={712}
        height={400}
        allow="autoplay"
        className="rounded-[8px]"
      ></iframe>{' '}
      <p className="font-[400] text-[16px] leading-[20px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.
      </p>
    </main>
  );
};
export default Second;
