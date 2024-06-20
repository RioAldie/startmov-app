'use client';

import Link from 'next/link';
import { useState } from 'react';

const SearchMobile = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };
  return (
    <div className="max-w-md mx-auto block md:hidden px-2">
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-neutral-900 sr-only dark:text-white">
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-neutral-500 dark:text-neutral-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20">
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="search"
          onChange={handleChange}
          id="default-search"
          className="block w-full p-4 ps-10 text-sm text-neutral-900 border border-neutral-300 rounded-lg bg-neutral-50 focus:ring-green-500 focus:border-green-500 dark:bg-neutral-900 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
          placeholder="Search movie here..."
          required
        />
        <Link href={`/search?query=${searchTerm}`}>
          <button
            type="button"
            className="text-white absolute end-2.5 bottom-2.5 bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
            Search
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SearchMobile;
