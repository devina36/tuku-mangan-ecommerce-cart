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
      <ul className="flex gap-10 mb-20">
        <li>
          <NavLink to="" end className={({ isActive }) => (isActive ? active : notActive)}>
            All
          </NavLink>
        </li>
        <li>
          <NavLink to="fast-food" className={({ isActive }) => (isActive ? active : notActive)}>
            Fast Food
          </NavLink>
        </li>
        <li>
          <NavLink to="salad" className={({ isActive }) => (isActive ? active : notActive)}>
            Salad
          </NavLink>
        </li>
        <li>
          <NavLink to="baverage" className={({ isActive }) => (isActive ? active : notActive)}>
            Baverage
          </NavLink>
        </li>
        <li>
          <NavLink to="dessert" className={({ isActive }) => (isActive ? active : notActive)}>
            Dessert
          </NavLink>
        </li>
        <li>
          <NavLink to="vegetables" className={({ isActive }) => (isActive ? active : notActive)}>
            Vegetables
          </NavLink>
        </li>
      </ul>
      <div className="grid grid-cols-4 gap-10">
        <Routes>
          <Route
            path=""
            element={menuItemsData.map((data, i) => {
              return <Itemcard data={data} key={i} />;
            })}
          />
          <Route path="fast-food" element={<Category category="Fast Food" />} />
          <Route path="salad" element={<Category category="Salad" />} />
          <Route path="baverage" element={<Category category="Baverage" />} />
          <Route path="dessert" element={<Category category="Dessert" />} />
          <Route path="vegetables" element={<Category category="Vegetables" />} />
        </Routes>
      </div>
    </>
  );
};

export default Menu;
