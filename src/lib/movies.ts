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
export const getMoviesByGenre = async (
  genre: string,
  page: number
) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?${process.env.NEXT_PUBLIC_API_KEY}&with_genres=${genre}&page=${page}`
    );

    if (response.status > 300) {
      throw new Error('Not found');
    }

    return response.data.results;
  } catch (error) {
    throw new Error('something is wrong!');
  }
};
export const getMovieDetail = async (id: string) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?${process.env.NEXT_PUBLIC_API_KEY}`
    );

    if (response.status > 300) {
      throw new Error('Not found');
    }

    return response.data;
  } catch (error) {
    throw new Error('something is wrong!');
  }
};
export const getMovieByQuery = async (query: string | undefined) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=10badd151dbb806d6e12dd2bf5f10f9d&query="${query}"`
    );

    if (response.status > 300) {
      throw new Error('Not found');
    }

    return response.data.results;
  } catch (error) {
    throw new Error('something is wrong!');
  }
};
