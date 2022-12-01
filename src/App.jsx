import { React, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './page/Home';
import Sidebar from './component/Sidebar';
import Menu from './page/Menu';
import Navbar from './component/Navbar';

function App() {
  const [open, setOpen] = useState(false);

  const handleSide = () => {
    setOpen(true);
  };

  return (
    <>
      <div
        className={`fixed inset-0 bg-black bg-opacity-30 z-[1] lg:hidden ${open === true ? `block` : `hidden`}`}
        onClick={() => setOpen(false)}
      ></div>
      <div className=" flex relative">
        <div className=" absolute lg:block w-full lg:w-[130px] lg:relative z-[3]">
          <Sidebar open={open} />
        </div>
        <div className="w-full lg:w-[calc(100%-130px)] ">
          <Navbar handleSide={handleSide} />
          <div className="w-full xl:p-[50px] px-[14px] pt-[50px] pb-[24px]">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/menu" element={<Menu />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
