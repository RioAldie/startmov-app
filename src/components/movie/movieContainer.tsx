import { getMovieDetail } from '@/lib/movies';
import { useEffect, useState } from 'react';

const MovieContainer = () => {
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const data = await getMovieDetail('');

        setMovie(data);
      } catch (error: any) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);
  if (error) return <p>Error: {error}</p>;
  if (loading) return <p>loading...</p>;
  return <div>MovieContainer</div>;
};

export default MovieContainer;
