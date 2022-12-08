import React, { useEffect, useState } from 'react';
import logo from '../assets/logo.svg';
import { FiShoppingCart } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';
import { connect, useSelector } from 'react-redux';

const Navbar = ({ handleSide, handleCart }) => {
  const getdata = useSelector((state) => state.cartReducer.carts);

  return (
    <div className="flex w-full gap-x-10 justify-between xl:p-[50px] px-[14px] pt-[50px] pb-[24px] flex-wrap items-center">
      <button className="border-2 border-yellow-accent p-1 rounded-full lg:hidden cursor-pointer" onClick={handleSide}>
        <img src={logo} alt="logo" className=" w-10 h-10" />
      </button>
      <div className="order-last lg:order-none">
        <h2 className=" text-black text-[26px] leading-[32px] font-semibold mb-2">Order Foods</h2>
        <h5 className=" text-dark-gray font-medium leading-5 mb-2">Your happiness start here</h5>
      </div>
      <div className="flex">
        <button
          className="w-[50px] relative h-[50px] flex justify-center items-center bg-white border-[1px] border-grays rounded-full"
          onClick={handleCart}
        >
          <FiShoppingCart size={24} />
          {getdata.length === 0 ? (
            ''
          ) : (
            <div className="absolute w-7 h-7 flex justify-center items-center -top-2 -right-2 text-sm rounded-full bg-yellow-accent animate-slideup">
              {getdata.length}
            </div>
          )}
        </button>
      </div>
    </div>
  );
};

export default Navbar;

const mapStateToProps = (state) => {
  return {
    amount: state.amount,
  };
};
connect(mapStateToProps)(Navbar);
