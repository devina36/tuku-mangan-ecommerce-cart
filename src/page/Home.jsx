import React from 'react';
import photo from '../assets/img/food/photo.png';
import { FiArrowRight } from 'react-icons/fi';

const Home = () => {
  return (
    <>
      <div className=" w-full bg-yellow-accent py-10 px-10 rounded-2xl relative overflow-hidden">
        <h2 className=" text-3xl font-semibold leading-relaxed">Order Foods</h2>
        <h4 className="text-xl text-yellow-700 font-semibold leading-relaxed">Your happiness start here</h4>
        <button
          className=" flex gap-x-3 px-4 py-2 border-[1px] text-yellow-700 rounded-full 
        items-center border-yellow-700 mt-4 hover:text-black hover:border-black"
        >
          Learn more <FiArrowRight size={20} />
        </button>
        <div className="p-5 absolute -top-12 right-20 rounded-full border-yellow-500 border-2">
          <div className="p-5 rounded-full border-yellow-500 border-2">
            <img src={photo} alt="menu" className=" max-w-[250px]  h-auto shadow-lg rounded-full" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
