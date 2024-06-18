'use client';
import { useEffect, useState } from 'react';
import CardMovie from './card/cardMovie';
import { getMoviesByGenre, getPopularMovies } from '@/lib/movies';
import { MovieCardTypes } from '@/utils/types';
import Pagination from './pagination';

interface moviesContainerProps {
  id: string;
}
const MoviesContainer = (props: moviesContainerProps) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  const handleChangePage = (page: number) => {
    setPage(page);
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getMoviesByGenre(props.id);

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
      <Pagination page={page} handlePage={handleChangePage} />
    </div>
  );
};

export default MoviesContainer;
