import React from 'react';
import { BiCart } from "react-icons/bi";

const Navbar = () => {
  return (
    <div className="px-[80px] py-[30px] flex justify-between items-center">
      
      {/* Links */}
      <div>
        <ul className="flex gap-5">
          <li className="list-none text-[18px] font-semibold uppercase">
            Home
          </li>
          <li className="list-none text-[18px] font-semibold uppercase">
            Clothes
          </li>
        </ul>
      </div>

      {/* Logo */}
      <div>
        <h2 className="text-2xl font-semibold font-['Antonio',sans-serif]">
          CIARA COLLECTIONS
        </h2>
      </div>

      {/* Cart Icon */}
      <div className="relative flex cursor-pointer">
        <BiCart className="text-[34px] ml-[35px]" />

        <p className="absolute -top-3 -right-2 bg-red-500 text-white text-xs h-5 w-5 flex items-center justify-center rounded-full">
          0
        </p>
      </div>
    </div>
  );
};

export default Navbar;