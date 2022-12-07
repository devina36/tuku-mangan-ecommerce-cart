import React from 'react';
import { Itemcard } from '../component';
import { menuItemsData } from '../assets/data';
import { NavLink } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import Category from '../component/Category';

const active = 'border-b-2 border-yellow-accent text-black font-semibold';
const notActive = 'text-dark-gray font-semibold';

const Menu = () => {
  return (
    <>
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
            element={menuItemsData.map((data, i) => {
              return <Itemcard data={data} key={i} />;
            })}
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
