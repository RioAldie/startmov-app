import { PaginationTypes } from '@/utils/types';
import React from 'react';

const pageStyle = {
  active:
    'flex items-center justify-center px-3 h-8  hover:bg-green-900 dark:border-gray-700 dark:bg-green-800 dark:text-white',
  notActive:
    'flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-neutral-800 border border-neutral-600 hover:bg-green-900 hover:text-white',
};
const Pagination = (props: PaginationTypes) => {
  const { page, handlePage } = props;
  const { active, notActive } = pageStyle;
  return (
    <nav aria-label="Page navigation example">
      <ul className="inline-flex -space-x-px text-sm">
        <li>
          <button className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-neutral-800 border border-e-0 border-neutral-600 rounded-s-lg hover:bg-green-900 hover:text-white ">
            Previous
          </button>
        </li>
        <li>
          <button className={page === 1 ? active : notActive}>
            1
          </button>
        </li>
        <li>
          <button className={page === 2 ? active : notActive}>
            2
          </button>
        </li>
        <li>
          <button className={page === 3 ? active : notActive}>
            3
          </button>
        </li>
        <li>
          <button className={page === 4 ? active : notActive}>
            4
          </button>
        </li>
        <li>
          <button className={page === 5 ? active : notActive}>
            5
          </button>
        </li>
        <li>
          <button className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-neutral-800 border border-neutral-600 rounded-e-lg hover:bg-green-900 hover:text-white">
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
