import React from 'react';
import { FiX } from 'react-icons/fi';

const Cartbar = ({ openCart, handleCart }) => {
  return (
    <>
      <div
        className={`fixed inset-0 bg-black bg-opacity-30 transition-all duration-300 ease-in-out z-20 ${
          openCart === true ? `block` : `hidden`
        }`}
        onClick={handleCart}
      ></div>
      <div
        className={`fixed top-0 w-9/12 md:w-5/12 md:max-w-[495px] py-[70px] px-[50px] bg-white h-screen z-30 
        transition-all duration-300 ease-in-out ${openCart === true ? `right-0` : `-right-full`}`}
      >
        <div className="flex justify-between">
          <span>Chartbar</span>
          <button onClick={handleCart}>
            <FiX size={24} />
          </button>
        </div>
      </div>
    </>
  );
};

export default Cartbar;
