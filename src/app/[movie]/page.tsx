'use client';
import Banner from '@/components/movies/banner';
import DetailSkeleton from '@/components/movies/skeleton/detailSkeleton';
import { getMovieDetail } from '@/lib/movies';
import { BannerTypes } from '@/utils/types';
import { useEffect, useState } from 'react';

const MoviePage = ({ params }: { params: { movie: string } }) => {
  const { movie } = params;
  const [movieDetail, setMovieDetail] = useState<
    BannerTypes | undefined
  >();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const data = await getMovieDetail(movie);

        setMovieDetail(data);
      } catch (error: any) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [movie]);
  if (error) return <p>Error</p>;
  if (loading)
    return (
      <main className="mb-56 mt-32">
        <div className="w-full px-20">
          <DetailSkeleton />
        </div>
      </main>
    );
  console.log(movieDetail);
  return (
    <main className="mb-56 mt-32">
      <div className="w-full px-20">
        {movieDetail && (
          <Banner
            poster_path={movieDetail.poster_path}
            title={movieDetail.title}
            tagline={movieDetail.tagline}
            overview={movieDetail.overview}
            release_date={movieDetail.release_date}
            spoken_languages={movieDetail.spoken_languages}
            genres={movieDetail.genres}
            production_companies={movieDetail.production_companies}
            popularity={movieDetail.popularity}
            vote_average={movieDetail.vote_average}
          />
        )}
      </div>
    </main>
  );
};

export default MoviePage;
