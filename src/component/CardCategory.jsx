import React from 'react';
import { Link } from 'react-router-dom';

const CardCategory = ({ category, title, link }) => {
  return (
    <Link
      to={link}
      className="w-4/6 min-w-[127px] h-auto snap-start md:snap-none relative border-[1px] border-black overflow-hidden rounded-lg group transition-all duration-200 ease-in-out cursor-pointer"
    >
      <img
        src={category}
        alt="photo"
        className=" object-cover scale-125 group-hover:scale-100 transition-all duration-200 ease-in-out"
      />

      <div className="absolute w-full h-full top-0 bg-black bg-opacity-40 flex justify-center items-center">
        <h3 className=" text-white font-semibold text-lg group-hover:underline-offset-2 group-hover:underline">
          {title}
        </h3>
      </div>
    </Link>
  );
};

export default CardCategory;
