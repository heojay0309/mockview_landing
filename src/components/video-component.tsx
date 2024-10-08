import { Suspense } from 'react';
import VideoComponentSkeleton from './video-component-skeleton';

export default async function VideoComponent() {
  return (
    <div className="h-full w-full flex items-center justify-center">
      <Suspense fallback={<VideoComponentSkeleton />}>
        <iframe
          src="https://drive.google.com/file/d/1MztIftOWT2xDhsezZFiC6fpUlVcVrdOY/preview"
          allowFullScreen
          className="rounded-[8px] aspect-video w-full self-center"
        ></iframe>
      </Suspense>
    </div>
  );
}
