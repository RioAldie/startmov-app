'use client';
import { useEffect, useState } from 'react';
import CardMovie from './card/cardMovie';
import { getPopularMovies } from '@/lib/movies';
import { MovieCardTypes } from '@/utils/types';

const MoviesContainer = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getPopularMovies();

        setMovies(data);
      } catch (error: any) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  console.log(movies);
  return (
    <div className="w-full py-8 h-fit border-[3px] border-neutral-800 flex flex-row items-center justify-center flex-wrap p-4 gap-5">
      {movies?.map((movie: MovieCardTypes, i) => {
        return (
          <CardMovie
            key={i}
            id={movie.id}
            poster_path={movie.poster_path}
            vote_average={movie.vote_average}
            popularity={movie.popularity}
          />
        );
      })}
    </div>
  );
};

export default MoviesContainer;
