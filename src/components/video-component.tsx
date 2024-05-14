export default async function VideoComponent() {
  // const src = await getVideoSrc();

  return (
    <iframe
      src="https://drive.google.com/file/d/1EZK3yCLyCLwqYnqw7oOs-tBu2X8KPx8e/preview"
      width={960}
      allowFullScreen
      className="rounded-[8px] w-[480px] h-[270px] tablet:w-[720px] tablet:h-[405px] lg:w-[960px] lg:h-[540px]"
    ></iframe>
  );
}
