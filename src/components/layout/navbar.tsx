'use client';

import Link from 'next/link';
import Navlink from './navlink';
import Search from '../search/search';
import {
  Bars3Icon,
  MagnifyingGlassIcon,
} from '@heroicons/react/24/solid';
import { useState } from 'react';
import Image from 'next/image';

export function Appbar() {
  const [active, setActive] = useState(false);
  return (
    <nav className="bg-none top-0 w-full fixed z-30 bg-neutral-900/[0.4] ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse">
          <Image
            src="/icons/startmov-icon.svg"
            className="h-8"
            alt="startmov Logo"
            width={30}
            height={30}
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            StartMov
          </span>
        </Link>
        <Search />
        <div className="flex flex-row items-center gap-2">
          <Link href={'/search'}>
            <button
              type="button"
              data-collapse-toggle="navbar-search"
              aria-controls="navbar-search"
              aria-expanded="false"
              className="md:hidden text-neutral-500 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-700 focus:outline-none focus:ring-4 focus:ring-neutral-200 dark:focus:ring-neutral-700 rounded-lg text-sm p-2.5 me-1">
              <MagnifyingGlassIcon className="size-5 text-neutral-500" />
            </button>
          </Link>
          <button
            type="button"
            onClick={() => setActive(!active)}
            data-collapse-toggle="navbar-search"
            aria-controls="navbar-search"
            aria-expanded="false"
            className="md:hidden text-neutral-500 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-700 focus:outline-none focus:ring-4 focus:ring-neutral-200 dark:focus:ring-neutral-700 rounded-lg text-sm p-2.5 me-1">
            <Bars3Icon className="size-6 text-neutral-500" />
          </button>
        </div>
        <div
          className={`items-center justify-between ${
            active ? 'block' : 'hidden'
          } w-full md:flex md:w-auto md:order-1`}
          id="navbar-search">
          <ul className="flex flex-col p-2  mt-4 font-medium border border-neutral-700 bg-[#141414] rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-[3px] md:border-neutral-700 ">
            <Navlink setActive={setActive} path={'/'} name={'Home'} />
            <Navlink
              setActive={setActive}
              path={'/movies'}
              name={'Movies'}
            />
            <Navlink
              setActive={setActive}
              path={'/support'}
              name={'Support'}
            />
          </ul>
        </div>
      </div>
    </nav>
  );
}
