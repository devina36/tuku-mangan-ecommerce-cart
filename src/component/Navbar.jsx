import React, { useEffect, useState } from 'react';
import logo from '../assets/logo.svg';
import { FiShoppingCart, FiBell } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';

const Navbar = ({ handleSide, handleCart }) => {
  const navigate = useNavigate();

  return (
    <div className="flex w-full justify-between xl:p-[50px] px-[14px] pt-[50px] pb-[24px] flex-wrap items-center">
      <button className="border-2 border-yellow-accent p-1 rounded-full lg:hidden cursor-pointer" onClick={handleSide}>
        <img src={logo} alt="logo" className=" w-10 h-10" />
      </button>
      <label htmlFor="search">
        <div className="border-yellow-accent rounded-full border-[1px] relative">
          <input
            type="text"
            placeholder="Search here..."
            className="md:w-[350px] w-[200px] h-[50px] bg-white rounded-full focus:outline-none py-1 pr-[50px] pl-5 placeholder:text-gray-400"
            onFocus={() => navigate('/menu')}
          />
          <FiSearch size={24} className="absolute h-[50px] top-0 right-4" />
        </div>
      </label>
      <div className="flex items-center">
        <button
          className="w-[50px] relative h-[50px] flex justify-center items-center border-[1px] border-grays rounded-full"
          onClick={handleCart}
        >
          <FiShoppingCart size={24} />
          <div className="absolute w-[11px] h-[11px] top-0 right-0 rounded-full bg-yellow-accent"></div>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
