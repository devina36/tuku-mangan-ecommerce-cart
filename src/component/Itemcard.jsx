import React from 'react';
import { useDispatch } from 'react-redux';
import { numberWithCommas } from './numberWithCommas';
import { ADD } from '../controller/action';
import { Link } from 'react-router-dom';

const Itemcard = ({ data }) => {
  const dispatch = useDispatch();

  const addtoCart = (item) => {
    dispatch(ADD(item));
  };
  return (
    <div
      className=" flex items-center justify-center max-w-[230px] border-[1px]
      border-grays bg-white rounded-3xl flex-col pb-10 mt-[65px]"
    >
      <div
        className="flex p-[10px] bg-white items-center justify-center rounded-full 
        -mt-[65px] border-[1px] border-grays"
      >
        <img src={data.img} className="w-[110px] h-[110px]" alt="panganan" />
      </div>
      <Link to={`/menu/${data.id}`}>
        <h3 className="mt-5 mb-[10px] font-medium text-xl leading-tight cursor-pointer hover:underline-offset-2 hover:underline">
          {data.name}
        </h3>
      </Link>
      <h5 className=" text-dark-gray mb-[30px] font-medium">IDR {numberWithCommas(data.price)}</h5>
      <button
        className="py-[11px] px-[23px] bg-yellow-accent text-sm rounded-full font-semibold hover:opacity-75"
        onClick={() => addtoCart(data)}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Itemcard;
