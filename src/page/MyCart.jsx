import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FiMinus, FiPlus, FiTrash } from 'react-icons/fi';
import { ADD, DECREMENT, DELETE } from '../controller/action';
import Swal from 'sweetalert2';
import { numberWithCommas } from '../component/numberWithCommas';

export const MyCart = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const dispatch = useDispatch();
  const getdata = useSelector((state) => state.cartReducer.carts);

  const addtoCart_i = (item) => {
    dispatch(ADD(item));
  };

  const decrement_i = (item) => {
    dispatch(DECREMENT(item));
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

  const delete_i = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#18181b',
      cancelButtonColor: '#d32746',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(DELETE(id));
        Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
      }
    });
  };

  return (
    <>
      <div className="mb-7">
        <h2 className="text-xl font-semibold">MyCart</h2>
      </div>
      {getdata.length ? (
        <table className=" table-fixed border-y-[1px] w-5/6 bg-white">
          <thead>
            <tr>
              <th className="py-4">Menu</th>
              <th className="py-4 w-5/12 text-start">Desc</th>
              <th className="py-4 w-2/12">Quantity</th>
              <th className="py-4 w-2/12">Remove Item</th>
            </tr>
          </thead>
          <tbody>
            {getdata.map((item) => {
              return (
                <tr className=" border-t-[1px]" key={item.id}>
                  <td className="py-4 ">
                    <div className=" flex justify-center items-center">
                      <img src={item.img} alt="menu-cart" className=" w-24 h-24" />
                    </div>
                  </td>
                  <td>
                    <div className=" flex flex-col justify-center">
                      <p>{item.name}</p>
                      <div className="flex gap-x-4 items-center">
                        <p className=" text-sm">IDR {numberWithCommas(item.price)}</p>
                        <p className=" text-sm">x {item.qty}</p>
                      </div>
                    </div>
                  </td>
                  <td className=" text-center">
                    <div className="flex items-center justify-center gap-x-2">
                      <button
                        className="w-[30px] text-white rounded-full h-[30px] flex justify-center items-center hover:opacity-75 bg-[#d32746]"
                        aria-label="minus"
                        onClick={item.qty <= 1 ? () => delete_i(item.id) : () => decrement_i(item)}
                      >
                        <FiMinus size={20} />
                      </button>
                      <span className="flex">{item.qty}</span>
                      <button
                        className="w-[30px] text-white rounded-full h-[30px] flex justify-center hover:opacity-75 items-center bg-zinc-900"
                        aria-label="plus"
                        onClick={() => addtoCart_i(item)}
                      >
                        <FiPlus size={20} />
                      </button>
                    </div>
                  </td>
                  <td className="text-center">
                    <button
                      onClick={() => delete_i(item.id)}
                      className=" text-dark-gray hover:text-yellow-accent"
                      aria-label="remove"
                    >
                      <FiTrash size={20} />
                    </button>
                  </td>
                </tr>
              );
            })}
            <tr className="border-t-[1px]">
              <td className=" font-semibold text-base py-3 text-center">SubTotal</td>
              <td className="font-semibold text-base py-3" colSpan={3}>
                IDR {numberWithCommas(totalPrice)}
              </td>
            </tr>
          </tbody>
        </table>
      ) : (
        <div className="w-full justify-center flex">
          <h3 className=" font-semibold text-dark-gray">Cart Empty</h3>
        </div>
      )}
    </>
  );
};
