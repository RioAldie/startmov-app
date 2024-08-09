import Image from 'next/image';
import React from 'react';
import { PlayIcon } from '@heroicons/react/24/solid';

const Hero = () => {
  return (
    <div className="bg-cover w-full  h-[800px] flex justify-center text-center">
      <Image
        src="/images/bg-thumbnail.png"
        className="w-full h-[600px] md:h-full absolute -z-20 object-cover"
        alt="startmov-hero"
        width={1000}
        height={800}
      />
      <div className="-z-10 absolute -bottom-10 left-0 w-full h-20 bg-gradient-to-t from-black via-black/75 to-transparent blur-sm"></div>
      <div className="mt-96 md:p-36 p-5 flex flex-col gap-4 items-center">
        <p className="text-5xl font-bold text-white">
          Find a Best Movies from TMDB
        </p>
        <p className="text-sm text-neutral-400">
          StartMov help you to find Best Movies from The Movies
          Database more quickly, accurate, anytime, anywhere. With
          StartMov, you can get information about the new movies
          release, the populer movies or find the movie information
          that you want to watch.
        </p>
        <button
          type="button"
          className="text-white w-56 bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
          <PlayIcon className="size-6 text-white" />
          Start Find Movie Now
        </button>
      </div>
    </div>
  );
};

export default Hero;
