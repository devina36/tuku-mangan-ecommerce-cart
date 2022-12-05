import React from 'react';
import { menuItemsData } from '../assets/data';
import Itemcard from './Itemcard';

const Category = ({ category }) => {
  return (
    <>
      {menuItemsData
        .filter((data) => data.category === category)
        .map((data, i) => {
          return <Itemcard data={data} key={i} />;
        })}
    </>
  );
};

export default Category;
