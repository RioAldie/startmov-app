'use client';
import MoviesContainer from '@/components/movies/moviesContainer';
import SearchMobile from '@/components/search/searchMobile';
import SearchResultContainer from '@/components/search/searchResultContainer';
import { useSearchParams } from 'next/navigation';
import React from 'react';

const SearchPage = () => {
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get('query' || '');
  return (
    <main className="mb-56 md:mt-56 mt-36">
      <SearchMobile />
      <div className="w-full p-2 md:p-20 mt-10">
        <p className="py-2 px-5 w-fit bg-green-600 rounded-md ml-5 -mt-5 absolute">
          Search: {searchTerm}
        </p>
        <SearchResultContainer query={searchTerm?.toString()} />
      </div>
    </main>
  );
};

export default SearchPage;
