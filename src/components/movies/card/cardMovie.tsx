import { customFormatNumber } from '@/utils/format';
import { MovieCardTypes, MovieTypes } from '@/utils/types';
import { EyeIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const CardMovie = (props: MovieCardTypes) => {
  const { popularity, poster_path, vote_average, id, title } = props;
  const views = customFormatNumber(popularity);
  return (
    <Link href={`/${id}`}>
      <div className="bg-neutral-900 rounded-lg p-3 hover:bg-neutral-800">
        <Image
          src={`http://image.tmdb.org/t/p/w500/${poster_path}`}
          alt={title}
          className="h-[200px] md:h-fit w-[150px] md:w-fit"
          width={200}
          height={200}
        />
        <div className="flex md:flex-row flex-col justify-between p-2">
          <div className="flex flex-row items-center gap-2">
            <EyeIcon className="size-4 text-white" /> <p>{views}</p>
          </div>

          <div className="flex items-center">
            <svg
              className="w-4 h-4 text-yellow-300 me-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20">
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <p className="ms-2 text-sm font-bold text-gray-900 dark:text-white">
              {vote_average}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CardMovie;
