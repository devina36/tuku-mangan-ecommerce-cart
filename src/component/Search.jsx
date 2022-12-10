import React, { useEffect } from 'react';
import { useState } from 'react';
import { menuItemsData } from '../assets/data';
import Itemcard from './Itemcard';

const Search = ({ value }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (value === '') {
      setData(menuItemsData);
      console.log();
    } else {
      setData(menuItemsData.filter((data) => data.name.toLowerCase().includes(value)));
    }
  }, [value]);

  return (
    <>
      <h2 className="font-semibold text-[26px] mb-5">Search</h2>
      <div className="grid grid-cols-4 gap-10">
        {data.map((item) => {
          return <Itemcard data={item} key={item.id} />;
        })}
      </div>
    </>
  );
};

export default Search;
