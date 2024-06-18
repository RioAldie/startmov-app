import MoviesContainer from '@/components/movies/moviesContainer';
import React from 'react';

type GenreId =
  | '28'
  | '12'
  | '18'
  | '35'
  | '80'
  | '99'
  | '10751'
  | '14'
  | '36'
  | '27'
  | '10402'
  | '9648'
  | '10749'
  | '878'
  | '10770'
  | '53'
  | '10752'
  | '37';

type GenreMap = {
  [key in GenreId]: string;
};
const CategoryPage = ({ params }: { params: { id: string } }) => {
  const { id } = params;

  const genreMap: GenreMap = {
    '28': 'Action',
    '12': 'Adventure',
    '18': 'Drama',
    '35': 'Comedy',
    '80': 'Crime',
    '99': 'Documentary',
    '10751': 'Family',
    '14': 'Fantasy',
    '36': 'History',
    '27': 'Horror',
    '10402': 'Music',
    '9648': 'Mystery',
    '10749': 'Romance',
    '878': 'Science Fiction',
    '10770': 'TV Movie',
    '53': 'Thriller',
    '10752': 'War',
    '37': 'Western',
    // Add more mappings as needed
  };
  const getGenre = (id: string): string => {
    return genreMap[id as GenreId] || 'Unknown Genre';
  };

  const genre = getGenre(id);
  return (
    <main className="mb-56 mt-56">
      <div className="w-full p-20">
        <p className="py-2 px-5 w-fit bg-green-600 rounded-md ml-5 -mt-5 absolute">
          Movies {genre}
        </p>
        <MoviesContainer id={params.id} />
      </div>
    </main>
  );
};

export default CategoryPage;
