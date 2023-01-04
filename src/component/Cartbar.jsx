import React, { useEffect, useState } from 'react';
import { FiX, FiEdit } from 'react-icons/fi';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { numberWithCommas } from './numberWithCommas';

const Cartbar = ({ openCart, handleCart }) => {
  const [totalPrice, setTotalPrice] = useState(0);

  const getdata = useSelector((state) => state.cartReducer.carts);

  const total = () => {
    let price = 0;
    getdata.map((e) => {
      price = parseFloat(e.price) * e.qty + price;
    });
    setTotalPrice(price);
  };

  useEffect(() => {
    total();
  }, [total]);

  return (
    <>
      <div
        className={`fixed inset-0 bg-black bg-opacity-30 transition-all duration-300 ease-in-out z-20 ${
          openCart === true ? `block` : `hidden`
        }`}
        onClick={handleCart}
      ></div>
      <div
        className={`fixed top-0 w-9/12 md:w-5/12 sm:max-w-[495px] overflow-y-auto py-[70px] px-5 sm:px-[50px] bg-white h-screen z-30 
        transition-all duration-300 ease-in-out ${openCart === true ? `right-0` : `-right-full`}`}
      >
        <div className="flex justify-between items-center mb-12">
          <div className="flex flex-col">
            <h2 className=" font-semibold text-[26px]">My Carts</h2>
            <h5 className="text-dark-gray">Pay now and just sit tight</h5>
          </div>
          <button
            onClick={handleCart}
            className="w-[50px] h-[50px] flex justify-center items-center border-[1px] border-grays rounded-full"
          >
            <FiX size={24} />
          </button>
        </div>
        {getdata.length ? (
          <div className="flex flex-col">
            <Link to={'/my-cart'} className="text-end">
              <button onClick={handleCart} className=" text-dark-gray hover:text-yellow-accent" aria-label="edit">
                <FiEdit size={22} />
              </button>
            </Link>
            <div className="flex flex-col gap-y-5 mb-12">
              {getdata.map((item, i) => {
                return (
                  <div key={i} className="flex justify-between items-center">
                    <div className="flex items-center gap-x-3">
                      <div className="p-1 bg-whites border-grays border-[1px]  rounded-full">
                        <img src={item.img} alt="item-cart" className=" w-16 h-16" />
                      </div>
                      <div className="flex flex-col">
                        <h3 className=" font-medium text-black mb-1">{item.name}</h3>
                        <h5 className=" font-medium text-dark-gray mr-10">IDR {numberWithCommas(item.price)}</h5>
                      </div>
                    </div>
                    <h5>x{item.qty}</h5>
                  </div>
                );
              })}
            </div>
            <div className=" flex justify-between mb-12">
              <h4 className=" text-dark-gray font-medium text-lg">Total</h4>
              <h4 className="text-black font-medium text-lg">IDR {numberWithCommas(totalPrice)}</h4>
            </div>
            <button className="w-full bg-yellow-accent font-semibold py-[11px] rounded-full">Pay with MyWallet</button>
          </div>
        ) : (
          <p className="text-center text-dark-gray">Cart Empty</p>
        )}
      </div>
    </>
  );
};

export default Cartbar;
