import Image from 'next/image';
import React from 'react';
import { PlayIcon } from '@heroicons/react/24/solid';

const Hero = () => {
  return (
    <div className="bg-cover w-full  h-[800px] flex justify-center text-center">
      <Image
        src="/images/bg-thumbnail.png"
        className="w-full absolute -z-20 object-cover"
        alt="startmov-hero"
        width={1000}
        height={800}
      />
      <div className="-z-10 absolute -bottom-10 left-0 w-full h-20 bg-gradient-to-t from-black via-black/75 to-transparent blur-sm"></div>
      <div className="mt-96 p-36 flex flex-col gap-4 items-center">
        <p className="text-5xl font-bold text-white">
          The Best Streaming Experience
        </p>
        <p className="text-sm text-neutral-400">
          StreamVibe is the best streaming experience for watching
          your favorite movies and shows on demand, anytime, anywhere.
          With StreamVibe, you can enjoy a wide variety of content,
          including the latest blockbusters, classic movies, popular
          TV shows, and more. You can also create your own watchlists,
          so you can easily find the content you want to watch.
        </p>
        <button
          type="button"
          className="text-white w-56 bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
          <PlayIcon className="size-6 text-white" />
          Start Watching Now
        </button>
      </div>
    </div>
  );
};

export default Hero;
