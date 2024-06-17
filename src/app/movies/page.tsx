import CardExplore from '@/components/home/card/cardExplore';
import Banner from '@/components/movies/banner';
import Caraousel from '@/components/movies/carousel/caraousel';
import Image from 'next/image';
import React from 'react';

const MoviesPage = async () => {
  return (
    <main className="mb-56 p-20 mt-40">
      <div className="w-full p-20">
        <p className="py-2 px-5 w-fit bg-green-600 rounded-md ml-5 -mt-5 absolute">
          Movies
        </p>
        <div className="w-full py-8 h-fit border-[3px] border-neutral-800 flex flex-column items-center justify-center flex-wrap p-4 gap-5">
          <Caraousel genre={'Action'} id={'28'} />
          <Caraousel genre={'Drama'} id={'18'} />
          <Caraousel genre={'Horror'} id={'27'} />
          <Caraousel genre={'Anime'} id={'16'} />
          <Caraousel genre={'Comedy'} id={'35'} />
          <Caraousel genre={'Romance'} id={'10749'} />
          <Caraousel genre={'Music'} id={'10402'} />
          <Caraousel genre={'Mystery'} id={'9648'} />
          <Caraousel genre={'Family'} id={'10751'} />
          <Caraousel genre={'Documentary'} id={'99'} />
          <Caraousel genre={'War'} id={'10752'} />
        </div>
      </div>
    </main>
  );
};

export default MoviesPage;
