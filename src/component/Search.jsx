import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { menuItemsData } from '../assets/data';
import Itemcard from './Itemcard';

const Search = ({ name }) => {
  useEffect(() => {}, name);
  return (
    <>
      {menuItemsData
        .filter((data) => data.name == name)
        .map((data, i) => {
          return <Itemcard data={data} key={i} />;
        })}
    </>
  );
};

export default Search;
