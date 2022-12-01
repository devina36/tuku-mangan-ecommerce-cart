import React, { useEffect, useState } from 'react';
import logo from '../assets/logo.svg';
import { FiShoppingCart, FiBell } from 'react-icons/fi';

const Navbar = ({ handleSide }) => {
  return (
    <div className="flex w-full justify-between xl:p-[50px] px-[14px] pt-[50px] pb-[24px] flex-wrap items-center">
      <button className="border-2 border-yellow-accent p-1 rounded-full lg:hidden cursor-pointer" onClick={handleSide}>
        <img src={logo} alt="logo" className=" w-10 h-10" />
      </button>
      <div className="flex items-center gap-2">
        <button className="w-[50px] h-[50px] flex justify-center items-center border-[1px] border-grays rounded-full">
          <FiBell fontSize={24} />
        </button>
        <button className="w-[50px] relative h-[50px] flex justify-center items-center border-[1px] border-grays rounded-full">
          <FiShoppingCart size={24} />
          <div className="absolute w-[11px] h-[11px] top-0 right-0 rounded-full bg-yellow-accent"></div>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
