import React from 'react';
import { useDispatch } from 'react-redux';
import { numberWithCommas } from './numberWithCommas';
import { ADD } from '../controller/action';

const Itemcard = ({ data }) => {
  const dispatch = useDispatch();

  const addtoCart = (item) => {
    dispatch(ADD(item));
  };
  return (
    <div
      className=" flex items-center justify-center max-w-[230px] border-[1px]
      border-grays bg-whites rounded-3xl flex-col pb-10 mt-[65px]"
    >
      <div
        className="flex p-[10px] bg-whites items-center justify-center rounded-full 
        -mt-[65px] border-[1px] border-grays"
      >
        <img src={data.img} className="w-[110px] h-[110px]" alt="panganan" />
      </div>
      <h3 className="mt-5 mb-[10px] font-medium text-xl leading-tight">{data.name}</h3>
      <h5 className=" text-dark-gray mb-[30px] font-medium">IDR {numberWithCommas(data.price)}</h5>
      <button
        className="py-[11px] px-[23px] bg-yellow-accent rounded-full font-semibold"
        onClick={() => addtoCart(data)}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Itemcard;
