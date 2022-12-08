import React from 'react';
// import { useEffect } from 'react';
// import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { menuItemsData } from '../assets/data';
import { FiArrowLeft, FiPlus, FiMinus } from 'react-icons/fi';
import { numberWithCommas } from '../component/numberWithCommas';
import { useDispatch } from 'react-redux';
import { ADD } from '../controller/action';

const Detail = ({ data }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const item = menuItemsData.find((item) => item.id === parseInt(id));

  const addtoCart = (item) => {
    dispatch(ADD(item));
  };

  return (
    <>
      <button className="flex gap-1 items-center mb-10" onClick={() => navigate(-1)}>
        <FiArrowLeft />
        <span>Back</span>
      </button>
      <div className="flex flex-col md:flex-row gap-x-20 items-center w-full">
        <div className=" p-5 bg-yellow-accent w-full md:w-auto bg-opacity-40 border-2 border-grays rounded-full">
          <img src={item.img} className="md:min-w-[330px] w-full" alt="image-item" />
        </div>
        <div className="w-full md:w-1/2 mt-10 md:mt-0">
          <div className="flex md:items-center flex-wrap flex-col md:flex-row md:gap-4 mb-10">
            <h2 className="text-black text-4xl font-semibold">{item.name}</h2>
            <p className="py-[3px] px-4 border-[1px] border-grays text-dark-gray rounded-full lowercase w-fit">
              {item.category}
            </p>
          </div>
          <h4 className="text-xl font-semibold mb-5">IDR {numberWithCommas(item.price)}</h4>
          <h5 className="text-dark-gray capitalize">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem qui harum tempora, eveniet nulla illum
            accusantium neque est fuga ea magni, assumenda necessitatibus unde temporibus iusto, asperiores aperiam
            molestias quod.
          </h5>
          {/* <div className="flex items-center mb-10 mt-8 gap-x-10 justify-between"> */}

          <button
            className="bg-yellow-accent w-full max-w-[345px] py-[16px] text-sm font-semibold rounded-full mt-8 mb-10"
            onClick={() => addtoCart(item)}
          >
            Add to Cart
          </button>
          {/* </div> */}
        </div>
      </div>
    </>
  );
};

export default Detail;
