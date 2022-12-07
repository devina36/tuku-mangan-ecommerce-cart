import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { FiX, FiPlus, FiMinus, FiTrash } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { ADD } from '../controller/action';
import { numberWithCommas } from './numberWithCommas';

const Cartbar = ({ openCart, handleCart }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const getdata = useSelector((state) => state.cartReducer.carts);

  const dispatch = useDispatch();

  const addtoCart = (item) => {
    dispatch(ADD(item));
  };

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
        className={`fixed top-0 w-9/12 md:w-5/12 md:max-w-[495px] py-[70px] px-[50px] bg-white h-screen z-30 
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
            <div className="flex flex-col gap-y-5 mb-12">
              {getdata.map((item, i) => {
                return (
                  <div key={i} className="flex justify-between">
                    <div className="flex items-center gap-x-3">
                      <div className="p-1 bg-whites border-grays border-[1px]  rounded-full">
                        <img src={item.img} alt="item-cart" className=" w-16 h-16" />
                      </div>
                      <div className="flex flex-col">
                        <h3 className=" font-medium text-black mb-1">{item.name}</h3>
                        <h5 className=" font-medium text-dark-gray mr-10">IDR {numberWithCommas(item.price)}</h5>
                      </div>
                    </div>
                    <div className="flex items-center gap-x-2">
                      <button
                        className="w-[30px] text-white rounded-full h-[30px] flex justify-center items-center bg-[#d32746]"
                        aria-label="minus"
                      >
                        <FiMinus size={20} />
                      </button>
                      <span className="flex">{item.qty}</span>
                      <button
                        className="w-[30px] text-white rounded-full h-[30px] flex justify-center items-center bg-black"
                        aria-label="plus"
                        onClick={() => addtoCart(item)}
                      >
                        <FiPlus size={20} />
                      </button>
                    </div>
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
