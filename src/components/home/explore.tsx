import React from 'react';
import CardExplore from './card/cardExplore';

const Explore = () => {
  return (
    <div className="md:px-24 p-4 mt-56">
      <div className="flex flex-col justify-arround items-start">
        <p className=" w-full text-center lg:text-start text-2xl  font-bold text-white">
          Explore our wide variety of categories
        </p>
        <p className="w-full lg:text-start text-center text-sm text-neutral-400 mt-3">
          Find a movies based by your favorite genre
        </p>

        <div className="mt-14 w-full  flex  md:flex-row flex-wrap md:justify-between justify-center gap-5">
          <CardExplore
            image={'/images/action-mov.png'}
            genre={'Action'}
            id={'28'}
          />
          <CardExplore
            image={'/images/adventure-mov.png'}
            genre={'Adventure'}
            id="12"
          />
          <CardExplore
            image={'/images/comedy-mov.png'}
            genre={'Comedy'}
            id="16"
          />
          <CardExplore
            image={'/images/drama-mov.png'}
            genre={'Drama'}
            id="18"
          />
          <CardExplore
            image={'/images/horor-mov.png'}
            genre={'Horror'}
            id="27"
          />
        </div>
      </div>
    </div>
  );
};

export default Explore;
