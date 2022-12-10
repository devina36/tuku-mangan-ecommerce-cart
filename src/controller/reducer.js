import { ADD_CART, REMOVE, REMOVE_ITEM } from './type';

const getdata = JSON.parse(localStorage.getItem('carts')) || [];
const initialStore = {
  carts: getdata,
};

export const cartReducer = (state = initialStore, action) => {
  switch (action.type) {
    case ADD_CART:
      // return {
      //   ...state,
      //   carts: [...state.carts, action.payload],
      // };

      const itemIndex = state.carts.findIndex((item) => item.id === action.payload.id);
      if (itemIndex >= 0) {
        state.carts[itemIndex].qty += 1;
        localStorage.setItem('carts', JSON.stringify(state.carts));
      } else {
        const temp = { ...action.payload, qty: 1 };
        localStorage.setItem('carts', JSON.stringify([...state.carts, temp]));
        return {
          ...state,
          carts: [...state.carts, temp],
        };
      }

    case REMOVE:
      const data = state.carts.filter((el) => el.id !== action.payload);
      localStorage.setItem('carts', JSON.stringify(data));
      return {
        ...state,
        carts: data,
      };

    case REMOVE_ITEM:
      const item_index = state.carts.findIndex((item) => item.id === action.payload.id);
      if (state.carts[item_index].qty >= 1) {
        state.carts[item_index].qty -= 1;
        localStorage.setItem('carts', JSON.stringify([...state.carts]));
        return {
          ...state,
          carts: [...state.carts],
        };
      } else if (state.carts[item_index].qty === 1) {
        const data = state.carts.filter((el) => el.id !== action.payload.id);
        localStorage.setItem('carts', JSON.stringify(data));
        return {
          ...state,
          carts: data,
        };
      }

    default:
      return state;
  }
};
