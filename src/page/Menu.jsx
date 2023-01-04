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
      <ul className="flex gap-10 mb-12 pb-4 overflow-x-auto snap-x snap-mandatory scroll-p-10">
        <li className=" snap-start">
          <NavLink to="" end className={({ isActive }) => (isActive ? active : notActive)}>
            All
          </NavLink>
        </li>
        <li className="snap-start min-w-fit">
          <NavLink to="category/fast-food" className={({ isActive }) => (isActive ? active : notActive)}>
            Fast Food
          </NavLink>
        </li>
        <li className="snap-start">
          <NavLink to="category/salad" className={({ isActive }) => (isActive ? active : notActive)}>
            Salad
          </NavLink>
        </li>
        <li className="snap-start">
          <NavLink to="category/baverage" className={({ isActive }) => (isActive ? active : notActive)}>
            Baverage
          </NavLink>
        </li>
        <li className="snap-start">
          <NavLink to="category/dessert" className={({ isActive }) => (isActive ? active : notActive)}>
            Dessert
          </NavLink>
        </li>
        <li className="snap-start">
          <NavLink to="category/soup" className={({ isActive }) => (isActive ? active : notActive)}>
            Soup
          </NavLink>
        </li>
      </ul>
      <Routes>
        <Route
          path=""
          element={
            <div className="grid md:grid-cols-4 grid-cols-2 gap-10">
              {menuItemsData.map((data, i) => {
                return <Itemcard data={data} key={i} />;
              })}
            </div>
          }
        />
        <Route path="category/fast-food" element={<Category category="Fast Food" />} />
        <Route path="category/salad" element={<Category category="Salad" />} />
        <Route path="category/baverage" element={<Category category="Baverage" />} />
        <Route path="category/dessert" element={<Category category="Dessert" />} />
        <Route path="category/soup" element={<Category category="Soup" />} />
      </Routes>
    </>
  );
};

export default Menu;
