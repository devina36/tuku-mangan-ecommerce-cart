import React from 'react';
import { useEffect } from 'react';
import { menuItemsData } from '../assets/data';
import Itemcard from './Itemcard';

const Category = ({ category }) => {
  useEffect(() => {}, [category]);
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-10 ">
      {menuItemsData
        .filter((data) => data.category === category)
        .map((data, i) => {
          return <Itemcard data={data} key={i} />;
        })}
    </div>
  );
};

export default Category;
