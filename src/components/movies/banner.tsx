import { BannerTypes } from '@/utils/types';
import {
  CalendarIcon,
  HomeModernIcon,
  LanguageIcon,
  SquaresPlusIcon,
  StarIcon,
} from '@heroicons/react/24/solid';
import Image from 'next/image';
import React, { FC } from 'react';

const Banner: FC<BannerTypes> = ({
  poster_path,
  title,
  tagline,
  overview,
  release_date,
  spoken_languages,
  genres,
  production_companies,
  popularity,
  vote_average,
}) => {
  return (
    <div className="w-full flex justify-center flex-row items-center">
      <div className="p-4   overflow-hidden  -z-20">
        <Image
          alt=""
          className="object-cover "
          src={`https://image.tmdb.org/t/p/original/${poster_path}`}
          width={500}
          height={400}
        />
      </div>

      <div className="w-3/4 px-12 py-5 flex flex-col gap-4 items-start">
        <div className=" w-full flex p-5 flex-col gap-4 items-start bg-neutral-900">
          <p className="text-4xl font-bold text-white">{title}</p>
          <p className="text-xl text-neutral-300 text-start max-w-[800px]">
            {tagline}
          </p>
        </div>
        <div className="p-5 bg-neutral-900">
          <p className="text-xl text-neutral-400">Description</p>
          <p className="text-sm mt-2 text-neutral-200 text-start ">
            {overview}
          </p>
        </div>
        <div className="p-5 w-full bg-neutral-900 flex flex-col gap-2">
          <div className="flex gap-1 flex-col">
            <p className="flex  justify-start text-lg flex-row items-center gap-2 text-neutral-400">
              {' '}
              <CalendarIcon className="size-5  mt-0" /> Released
            </p>
            <p>{release_date}</p>
          </div>
          <div className="flex gap-1 flex-col">
            <p className="flex  justify-start text-lg flex-row items-center gap-2 text-neutral-400">
              {' '}
              <LanguageIcon className="size-5 " /> Languages
            </p>
            <div className="flex flex-row justify-start gap-2">
              {spoken_languages.map((lang: { name: string }, i) => {
                return (
                  <p
                    key={i}
                    className="py-1 px-3 rounded-md border border-neutral-800 bg-neutral-950 w-fit">
                    {lang.name}
                  </p>
                );
              })}
            </div>
          </div>
          <div className="flex gap-1 flex-col">
            <p className="flex text-lg flex-row items-center gap-2 text-neutral-400">
              {' '}
              <StarIcon className="size-5 " /> Ratings
            </p>

            <p className="flex flex-row items-center font-bold py-1 px-3 rounded-md border border-neutral-800 bg-neutral-950 w-fit">
              {vote_average}{' '}
              <StarIcon className="size-4 text-yellow-400" />
            </p>
          </div>
          <div className="flex gap-1 flex-col">
            <p className="flex text-lg flex-row items-center gap-2 text-neutral-400">
              {' '}
              <SquaresPlusIcon className="size-5" /> Genres
            </p>
            <div className="flex flex-row justify-start gap-2">
              {genres.map((genre: { name: string }, i) => {
                return (
                  <p
                    key={i}
                    className="py-1 px-3 rounded-md border border-neutral-800 bg-neutral-950 w-fit">
                    {genre.name}
                  </p>
                );
              })}
            </div>
          </div>
          <div className="flex gap-1 flex-col">
            <p className="flex  justify-start text-lg flex-row items-center gap-2 text-neutral-400">
              <HomeModernIcon className="size-5" />
              Production Company
            </p>

            <div className="flex flex-row justify-start gap-2">
              {production_companies.map(
                (company: { name: string }, i) => {
                  return (
                    <p
                      key={i}
                      className="py-1 px-3 rounded-md border border-neutral-800 bg-neutral-950 w-fit">
                      {company.name}
                    </p>
                  );
                }
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
