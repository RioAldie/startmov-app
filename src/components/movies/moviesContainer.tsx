'use client';
import { useEffect, useState } from 'react';
import CardMovie from './card/cardMovie';
import { getMoviesByGenre, getPopularMovies } from '@/lib/movies';
import { MovieCardTypes } from '@/utils/types';
import Pagination from './pagination';
import MovieSkeleton from './skeleton/movieSkeleton';

interface moviesContainerProps {
  id: string;
}
const MoviesContainer = (props: moviesContainerProps) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  const handleChangePage = (page: number) => {
    if (page > 0 && page <= 5) {
      setPage(page);
    }
  };

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const data = await getMoviesByGenre(props.id, page);

        setMovies(data);
      } catch (error: any) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [page]);

  if (loading)
    return (
      <div className="w-full py-8 h-fit border-[3px] border-neutral-800 flex flex-row items-center justify-center flex-wrap p-4 gap-5">
        {' '}
        <MovieSkeleton />
        <MovieSkeleton />
        <MovieSkeleton />
        <MovieSkeleton />
      </div>
    );
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="w-full py-8 h-fit border-[3px] border-neutral-800 flex flex-row items-center justify-center flex-wrap md:p-10 p-0 md:gap-5 gap-2 ">
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
      <Pagination page={page} handlePage={handleChangePage} />
    </div>
  );
};

export default MoviesContainer;
