'use client';

import CardExplore from '@/components/home/card/cardExplore';
import { getMoviesByGenre } from '@/lib/movies';
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  PlusIcon,
} from '@heroicons/react/24/solid';
import { useEffect, useState } from 'react';
import CardMovie from '../card/cardMovie';
import { CarouselTypes, MovieCardTypes } from '@/utils/types';
import Link from 'next/link';
import MovieSkeleton from '../skeleton/movieSkeleton';

const Caraousel = (props: CarouselTypes) => {
  const [slide, setSlide] = useState(1);
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { genre, id } = props;
  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const data = await getMoviesByGenre(id, 1);

        setMovies(data);
      } catch (error: any) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading)
    return (
      <div className="flex justify-start flex-col w-full p-5 gap-5 items-center">
        <MovieSkeleton />
        <MovieSkeleton />
        <MovieSkeleton />
        <MovieSkeleton />
      </div>
    );
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="flex justify-start flex-col w-full p-5 gap-5 items-center">
      <div className="flex w-full flex-row justify-between">
        <p className="text-xl font-bold">{genre}</p>
        <div className="flex flex-row gap-1 items-center">
          {slide > 1 && (
            <button
              onClick={() => setSlide((prev) => prev - 1)}
              className="p-3 border border-neutral-700">
              <ArrowLeftIcon className="size-4 text-white" />
            </button>
          )}

          <div
            className={` ${
              slide === 1 ? 'bg-green-300' : 'bg-neutral-600'
            } w-4 h-1`}></div>
          <div
            className={` ${
              slide === 2 ? 'bg-green-300' : 'bg-neutral-600'
            } w-4 h-1`}></div>
          <div
            className={` ${
              slide === 3 ? 'bg-green-300' : 'bg-neutral-600'
            } w-4 h-1`}></div>
          <div
            className={` ${
              slide === 4 ? 'bg-green-300' : 'bg-neutral-600'
            } w-4 h-1`}></div>

          <button
            disabled={slide < 4 ? false : true}
            onClick={() => setSlide((prev) => prev + 1)}
            className={`p-3 border border-neutral-700 `}>
            <ArrowRightIcon className="size-4 text-white" />
          </button>
        </div>
      </div>
      <div className="flex flex-row gap-4 justify-around">
        {movies?.map((movie: MovieCardTypes, i) => {
          if (i < 5 && slide == 1) {
            return (
              <CardMovie
                key={i}
                id={movie.id}
                poster_path={movie.poster_path}
                vote_average={movie.vote_average}
                popularity={movie.popularity}
              />
            );
          }
          if (i <= 10 && slide == 2 && i > 5) {
            return (
              <CardMovie
                key={i}
                id={movie.id}
                poster_path={movie.poster_path}
                vote_average={movie.vote_average}
                popularity={movie.popularity}
              />
            );
          }
          if (i <= 15 && slide == 3 && i > 10) {
            return (
              <CardMovie
                key={i}
                id={movie.id}
                poster_path={movie.poster_path}
                vote_average={movie.vote_average}
                popularity={movie.popularity}
              />
            );
          }
          if (i <= 20 && slide == 4 && i > 15) {
            return (
              <CardMovie
                key={i}
                id={movie.id}
                poster_path={movie.poster_path}
                vote_average={movie.vote_average}
                popularity={movie.popularity}
              />
            );
          }
        })}
      </div>
      <Link href={`/movies/${id}`}>
        <button className="bg-neutral-800 hover:bg-neutral-900 text-white w-40 h-9 rounded-md">
          More
        </button>
      </Link>
    </div>
  );
};

export default Caraousel;
