import React from 'react';
import { numberWithCommas } from './numberWithCommas';

const Itemcard = ({ data }) => {
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
      <h5 className=" text-dark-gray mb-[30px] font-medium">${numberWithCommas(data.price)}</h5>
      <button className="py-[11px] px-[23px] bg-yellow-accent rounded-full font-semibold">Add to Cart</button>
    </div>
  );
};

export default Itemcard;
