'use client';
import { MovieCardTypes, QueryTypes } from '@/utils/types';
import { FC, useEffect, useState } from 'react';
import CardMovie from '../movies/card/cardMovie';
import { getMovieByQuery } from '@/lib/movies';

const SearchResultContainer: FC<QueryTypes> = ({ query }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const data = await getMovieByQuery(query);

        setMovies(data);
      } catch (error: any) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [query]);

  if (!query) {
    return (
      <div className="w-full py-8 h-fit border-[3px] border-neutral-800 flex flex-row items-center justify-center flex-wrap p-4 gap-5">
        <p>Not Found.....</p>
      </div>
    );
  }

  if (loading)
    return (
      <div className="w-full py-8 h-fit border-[3px] border-neutral-800 flex flex-row items-center justify-center flex-wrap p-4 gap-5">
        {' '}
        <p>Loading...</p>
      </div>
    );
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="w-full py-8 h-fit border-[3px] border-neutral-800 flex flex-row items-center justify-center flex-wrap md:p-4 p-2 md:gap-5 gap-2">
      {movies?.map((movie: MovieCardTypes, i) => {
        return (
          <CardMovie
            key={i}
            id={movie.id}
            poster_path={movie.poster_path}
            vote_average={movie.vote_average}
            popularity={movie.popularity}
            title={movie.title}
          />
        );
      })}
    </div>
  );
};

export default SearchResultContainer;
