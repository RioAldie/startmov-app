import React from 'react';
import CardExplore from './card/cardExplore';

const Explore = () => {
  return (
    <div className="px-24 mt-40">
      <div className="flex flex-col justify-start items-start">
        <p className="text-2xl  font-bold text-white">
          Explore our wide variety of categories
        </p>
        <p className="text-sm text-neutral-400 mt-3">
          Whether you're looking for a comedy to make you laugh, a
          drama to make you think, or a documentary to learn something
          new
        </p>
        <div className="mt-14 flex flex-row justify-center gap-5">
          <CardExplore
            image={'/images/action-mov.png'}
            genre={'Action'}
          />
          <CardExplore
            image={'/images/adventure-mov.png'}
            genre={'Adventure'}
          />
          <CardExplore
            image={'/images/comedy-mov.png'}
            genre={'Comedy'}
          />
          <CardExplore
            image={'/images/drama-mov.png'}
            genre={'Drama'}
          />
          <CardExplore
            image={'/images/horor-mov.png'}
            genre={'Horror'}
          />
        </div>
      </div>
    </div>
  );
};

export default Explore;
