'use server';
import { Suspense } from 'react';
import VideoComponent from './video-component';
import VideoComponentSkeleton from './video-component-skeleton';
const Second = () => {
  return (
    <main className="flex flex-col items-center gap-[64px] main tablet:max-h-[804px] max-h-[675px] tablet:justify-center tablet:py-[64px]">
      <Suspense fallback={<VideoComponentSkeleton />}>
        <VideoComponent />
      </Suspense>
    </main>
  );
};

export default Second;
