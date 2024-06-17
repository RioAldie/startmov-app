import axios from 'axios';

export const getPopularMovies = async () => {
  const popular = `https://api.themoviedb.org/3/movie/popular?${process.env.NEXT_PUBLIC_API_KEY}`;

  try {
    const response = await axios.get(popular);

    if (response.status > 300) {
      throw new Error('Not found');
    }

    return response.data.results;
  } catch (error) {
    throw new Error('something is wrong!');
  }
};
export const getMoviesByGenre = async (genre: string) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?${process.env.NEXT_PUBLIC_API_KEY}&with_genres=${genre}`
    );

    if (response.status > 300) {
      throw new Error('Not found');
    }

    return response.data.results;
  } catch (error) {
    throw new Error('something is wrong!');
  }
};
