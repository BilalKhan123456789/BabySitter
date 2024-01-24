import React from 'react';

const Card = ({ name, age, distance, imageUrl }) => {
  return (
    <div className="relative">
    <img className="w-full" src={imageUrl} alt={`${name}`} />
    <div className="p-4 absolute top-1/3 w-full text-center">
      <h2 className="text-white text-base sm:text-lg md:text-xl  font-bold">
        {`${name}, ${age}`}
      </h2>
      <p className="text-white text-xs sm:text-sm md:text-md ">
        {`${distance} Away`}
      </p>
    </div>
  </div>
  );
};

export default Card