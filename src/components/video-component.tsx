export default async function VideoComponent() {
  return (
    <div className="h-full w-full flex items-center justify-center">
      <iframe
        src="https://drive.google.com/file/d/1EZK3yCLyCLwqYnqw7oOs-tBu2X8KPx8e/preview"
        // width={711.64}
        allowFullScreen
        className="rounded-[8px] aspect-video w-full self-center"
      ></iframe>
    </div>
  );
}
