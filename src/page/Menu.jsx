import React, { useState } from 'react';
import { Itemcard } from '../component';
import { menuItemsData } from '../assets/data';
import { NavLink, useNavigate } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import Category from '../component/Category';
import { FiSearch } from 'react-icons/fi';

const active = 'border-b-2 border-yellow-accent text-black font-semibold';
const notActive = 'text-dark-gray font-semibold';

const Menu = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState('');

  return (
    <>
      <div className="mb-10 flex justify-end">
        <label htmlFor="search">
          <div className="border-yellow-accent rounded-full border-[1px] relative w-fit">
            <input
              type="text"
              placeholder="Search here..."
              value={value}
              className="md:w-[350px] w-[200px] h-[50px] bg-white rounded-full focus:outline-none py-1 pr-[50px] pl-5 placeholder:text-gray-400"
              onChange={(e) => setValue(e.target.value)}
              onFocus={() => navigate('/menu')}
            />
            <FiSearch size={24} className="absolute h-[50px] top-0 right-4" />
          </div>
        </label>
      </div>
      <ul className="flex gap-10 mb-12 overflow-x-hidden flex-wrap">
        <li>
          <NavLink to="" end className={({ isActive }) => (isActive ? active : notActive)}>
            All
          </NavLink>
        </li>
        <li>
          <NavLink to="category/fast-food" className={({ isActive }) => (isActive ? active : notActive)}>
            Fast Food
          </NavLink>
        </li>
        <li>
          <NavLink to="category/salad" className={({ isActive }) => (isActive ? active : notActive)}>
            Salad
          </NavLink>
        </li>
        <li>
          <NavLink to="category/baverage" className={({ isActive }) => (isActive ? active : notActive)}>
            Baverage
          </NavLink>
        </li>
        <li>
          <NavLink to="category/dessert" className={({ isActive }) => (isActive ? active : notActive)}>
            Dessert
          </NavLink>
        </li>
        <li>
          <NavLink to="category/vegetables" className={({ isActive }) => (isActive ? active : notActive)}>
            Vegetables
          </NavLink>
        </li>
      </ul>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
        <Routes>
          <Route
            path=""
            element={
              value === ''
                ? menuItemsData.map((data, i) => {
                    return <Itemcard data={data} key={i} />;
                  })
                : menuItemsData
                    .filter((data) => data.name.toLowerCase().includes(value))
                    .map((data, i) => {
                      return <Itemcard data={data} key={i} />;
                    })
            }
          />
          <Route path="category/fast-food" element={<Category category="Fast Food" />} />
          <Route path="category/salad" element={<Category category="Salad" />} />
          <Route path="category/baverage" element={<Category category="Baverage" />} />
          <Route path="category/dessert" element={<Category category="Dessert" />} />
          <Route path="category/vegetables" element={<Category category="Vegetables" />} />
        </Routes>
      </div>
    </>
  );
};

export default Menu;
