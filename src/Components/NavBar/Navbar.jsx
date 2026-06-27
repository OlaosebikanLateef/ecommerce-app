import React, { useContext }from 'react';
import { BiCart } from "react-icons/bi";
import { Link, Links } from 'react-router-dom';
import { ShopContext } from '../Context/ShopContext';

const Navbar = () => {
const {quantity} = useContext(ShopContext)

  return (
    <div>
    <div className="navbar px-[80px] py-[30px] flex justify-between items-center">
      <Link to='/'>
      {/* Links */}
      <div className='link'>
        <ul className="flex gap-5">
          <li className="list-none text-[18px] font-semibold uppercase">
            Home 
          </li>
          <li className="list-none text-[18px] font-semibold uppercase">
            Clothes
          </li>
        </ul>
      </div>
    </Link>
      {/* Logo */}
      <div>
        <h2 className="logo text-2xl font-semibold font-['Antonio',sans-serif]">
          CIARA COLLECTIONS
        </h2>
      </div>


      <Link to='/cart'>
      <div className="nav_icon_wrapper relative flex cursor-pointer">
        <BiCart className="nav_icon text-[34px] ml-[35px]" />

        <p className="nav_qty absolute -top-3 -right-2 bg-red-500 text-white text-xs h-5 w-5 flex items-center justify-center rounded-full">
          {quantity}
        </p>
      </div>
      </Link> 
    </div>
    </div>
  );
};

export default Navbar;