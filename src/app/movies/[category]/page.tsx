import MoviesContainer from '@/components/movies/moviesContainer';
import React from 'react';

const CategoryPage = () => {
  return (
    <main className="mb-56 mt-56">
      <div className="w-full p-20">
        <p className="py-2 px-5 w-fit bg-green-600 rounded-md ml-5 -mt-5 absolute">
          Movies
        </p>
        <MoviesContainer />
      </div>
    </main>
  );
};

export default CategoryPage;
