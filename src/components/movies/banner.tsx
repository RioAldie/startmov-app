import Image from 'next/image';
import React from 'react';

const Banner = () => {
  return (
    <div className="w-full  flex justify-center">
      <div className="p-4 max-w-[1000px] h-[600px] overflow-hidden absolute -z-20">
        <Image
          alt=""
          className="object-cover "
          src={
            'https://image.tmdb.org/t/p/original/vpnVM9B6NMmQpWeZvzLvDESb2QY.jpg'
          }
          width={1000}
          height={500}
        />
      </div>
      <div className="-z-10 absolute bottom-24 left-0 w-full h-36 bg-gradient-to-t from-black via-black/75 to-transparent blur-sm"></div>
      <div className="mt-80 px-20 py-36  flex flex-col gap-4 items-center">
        <p className="text-5xl font-bold text-white">Inside Out 2</p>
        <p className="text-sm text-neutral-400 text-center max-w-[800px]">
          In the Summer of 2024, Paris is hosting the World Triathlon
          Championships on the Seine for the first time. Sophia, a
          brilliant scientist, learns from Mika, a young environmental
          activist, that a large shark is swimming deep in the river.
          To avoid a bloodbath at the heart of the city, they have no
          choice but to join forces with Adil, the Seine river police
          commander
        </p>
      </div>
    </div>
  );
};

export default Banner;
