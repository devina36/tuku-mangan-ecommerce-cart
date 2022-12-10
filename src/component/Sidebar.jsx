import React from 'react';
import logo from '../assets/logo.svg';
import { FiGrid, FiShoppingBag, FiHome } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';

const Sidebar = ({ open }) => {
  return (
    <aside
      className={`bg-white py-[50px] pb-[60px] border-r-[1px] border-[#e8e8e8] transition-all ease-in-out duration-300
      h-screen w-[130px] fixed top-0 lg:left-0 ${open === true ? `left-0` : `-left-full`}`}
    >
      <div
        className=" flex flex-col justify-center items-center pb-[50px]
      border-b-[1px] border-[#e8e8e8]"
      >
        <img src={logo} alt="logo" />
      </div>
      <div className="pt-[50px] flex flex-col justify-center items-center">
        <NavLink end to="/" className={({ isActive }) => (isActive ? `sidebar-icon active` : `sidebar-icon`)}>
          <FiHome size={24} />
        </NavLink>
        <NavLink to="/menu" className={({ isActive }) => (isActive ? `sidebar-icon active` : `sidebar-icon`)}>
          <FiGrid size={24} />
        </NavLink>
        <NavLink to="/my-cart" className={({ isActive }) => (isActive ? `sidebar-icon active` : `sidebar-icon`)}>
          <FiShoppingBag size={24} />
        </NavLink>
      </div>
    </aside>
  );
};

export default Sidebar;
