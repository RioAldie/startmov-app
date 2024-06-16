import { ArrowRightIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import React from 'react';

interface cardExploreProps {
  image: string;
  genre: string;
}
const CardExplore = (props: cardExploreProps) => {
  const { image, genre } = props;
  return (
    <a href="#">
      <div className="p-4 rounded-lg border border-neutral-700 bg-neutral-900 hover:bg-neutral-950">
        <Image
          src={image}
          alt="action-mov"
          width={200}
          height={200}
        />
        <div className="flex mt-2 flex-row justify-between">
          <p>{genre}</p>
          <ArrowRightIcon className="size-5 font-bold text-white" />
        </div>
      </div>
    </a>
  );
};

export default CardExplore;
