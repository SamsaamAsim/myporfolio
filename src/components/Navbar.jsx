import React from "react";
import {BiMessageAltDetail} from 'react-icons/bi'
const Navbar = () => {
  return (
    <>
      <header className="bg-gray-900">
        <div className="flex items-center h-16 max-w-screen-xl gap-8 px-4 mx-auto sm:px-6 lg:px-8 justify-between">
        <div className="font-mono text-2xl text-white">Samsaam Asim</div>
        <div>
          <a href="#contact">
          <BiMessageAltDetail className="text-4xl text-white hover:bg-gray-800 rounded-full p-1 cursor-pointer"/>
          </a>
        </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
