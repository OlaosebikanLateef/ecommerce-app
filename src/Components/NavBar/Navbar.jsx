import { useContext, useState } from 'react';
import { BiCart, BiMenu, BiX, BiSearch, BiUser, BiHelpCircle, BiHome, BiTag, BiCategory, BiHeart, BiUserCircle } from "react-icons/bi";
import { Link } from 'react-router-dom';
import { ShopContext } from '../Context/ShopContext';

const Navbar = () => {
  const { quantity } = useContext(ShopContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <div className="bg-white shadow-sm">
      {/* Main Navbar */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        <div className="flex items-center justify-between gap-2 sm:gap-4 md:gap-6">
          
          {/* Menu Button with Dropdown - Always Visible */}
          <div className="relative">
            <button 
              onClick={toggleMenu}
              className="text-black text-2xl focus:outline-none p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              {isMenuOpen ? <BiX /> : <BiMenu />}
            </button>

            {/* Dropdown Menu */}
            {isMenuOpen && (
              <div className="absolute top-full left-0 mt-2 w-72 sm:w-80 bg-white rounded-lg shadow-2xl z-50 py-2 border border-gray-100">
                {/* Profile Section */}
                <div className="px-4 py-3 border-b border-gray-200">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                      <BiUserCircle className="text-gray-600 text-2xl" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Guest User</p>
                      <p className="text-sm text-gray-500">Sign in to your account</p>
                    </div>
                  </div>
                </div>

                {/* Main Links */}
                <div className="py-2">
                  <Link 
                    to='/' 
                    onClick={toggleMenu}
                    className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors mx-2 rounded-lg"
                  >
                    <BiHome className="text-gray-600 text-xl" />
                    <span className="font-medium text-gray-700">Home</span>
                  </Link>
                  
                  <Link 
                    to='/clothes' 
                    onClick={toggleMenu}
                    className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors mx-2 rounded-lg"
                  >
                    <BiTag className="text-gray-600 text-xl" />
                    <span className="font-medium text-gray-700">Clothes</span>
                  </Link>

                  <Link 
                    to='/electronics' 
                    onClick={toggleMenu}
                    className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors mx-2 rounded-lg"
                  >
                    <BiCategory className="text-gray-600 text-xl" />
                    <span className="font-medium text-gray-700">Electronics</span>
                  </Link>

                  <Link 
                    to='/accessories' 
                    onClick={toggleMenu}
                    className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors mx-2 rounded-lg"
                  >
                    <BiCategory className="text-gray-600 text-xl" />
                    <span className="font-medium text-gray-700">Accessories</span>
                  </Link>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-200 my-2 mx-4"></div>

                {/* Account Section */}
                <div className="py-2">
                  <Link 
                    to='/wishlist' 
                    onClick={toggleMenu}
                    className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors mx-2 rounded-lg"
                  >
                    <BiHeart className="text-gray-600 text-xl" />
                    <span className="font-medium text-gray-700">Wishlist</span>
                  </Link>

                  <Link 
                    to='/account' 
                    onClick={toggleMenu}
                    className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors mx-2 rounded-lg"
                  >
                    <BiUser className="text-gray-600 text-xl" />
                    <span className="font-medium text-gray-700">My Account</span>
                  </Link>

                  <Link 
                    to='/help' 
                    onClick={toggleMenu}
                    className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors mx-2 rounded-lg"
                  >
                    <BiHelpCircle className="text-gray-600 text-xl" />
                    <span className="font-medium text-gray-700">Help Center</span>
                  </Link>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-200 my-2 mx-4"></div>

                {/* Cart */}
                <Link 
                  to='/cart' 
                  onClick={toggleMenu}
                  className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors mx-2 rounded-lg"
                >
                  <div className="relative">
                    <BiCart className="text-gray-600 text-xl" />
                    {quantity > 0 && (
                      <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold h-5 w-5 flex items-center justify-center rounded-full">
                        {quantity}
                      </span>
                    )}
                  </div>
                  <span className="font-medium text-gray-700">Shopping Cart</span>
                  {quantity > 0 && (
                    <span className="ml-auto bg-gray-100 text-gray-700 text-xs font-semibold px-2 py-1 rounded-full">
                      {quantity} items
                    </span>
                  )}
                </Link>
              </div>
            )}
          </div>

          {/* Logo */}
          <Link to='/' className="flex-shrink-0">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight">
              HOME
            </h1>
          </Link>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-2xl mx-4">
            <div className="relative w-full">
              <input 
                type="text" 
                placeholder="Search products, brands and categories"
                className="w-full px-4 py-2 rounded-l-md focus:outline-none rounded-r-md border-2 border-gray-300 focus:border-blue-500 transition-colors"
              />
              <button className="absolute right-0 top-0 bg-yellow-400 hover:bg-yellow-500 px-6 py-2 border-2 border-yellow-400 hover:border-yellow-500 rounded-r-md font-semibold transition-colors">
                Search
              </button>
            </div>
          </div>

          {/* Desktop Right Section */}
          <div className="hidden md:flex items-center gap-4 lg:gap-6">
            <Link to='/account' className="flex items-center gap-1 hover:text-gray-600 transition-colors text-black px-2 py-1 hover:bg-gray-100 rounded-lg">
              <BiUser className="text-xl" />
              <span className="text-sm lg:text-base">Account</span>
            </Link>
            <Link to='/help' className="flex items-center gap-1 hover:text-gray-600 transition-colors text-black px-2 py-1 hover:bg-gray-100 rounded-lg">
              <BiHelpCircle className="text-xl" />
              <span className="text-sm lg:text-base">Help</span>
            </Link>
            <Link to='/cart' className="relative px-2 py-1 hover:bg-gray-100 rounded-lg transition-colors">
              <div className="flex items-center gap-1 hover:text-gray-600 transition-colors text-black">
                <BiCart className="text-2xl" />
                <span className="text-sm lg:text-base">Cart</span>
                {quantity > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs font-bold h-5 w-5 flex items-center justify-center rounded-full">
                    {quantity}
                  </span>
                )}
              </div>
            </Link>
          </div>

          {/* Mobile Icons */}
          <div className="flex md:hidden items-center gap-2 sm:gap-3">
            <button onClick={toggleSearch} className="text-xl text-black p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <BiSearch />
            </button>
            <Link to='/cart' className="relative text-black p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <BiCart className="text-2xl" />
              {quantity > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs font-bold h-5 w-5 flex items-center justify-center rounded-full">
                  {quantity}
                </span>
              )}
            </Link>
          </div>
        </div>

        {/* Mobile Search Bar */}
        {isSearchOpen && (
          <div className="md:hidden mt-3">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search products, brands and categories"
                className="w-full px-4 py-2 rounded-md focus:outline-none border-2 border-gray-300 focus:border-blue-500 transition-colors"
                autoFocus
              />
              <button className="absolute right-0 top-0 bg-yellow-400 hover:bg-yellow-500 px-4 py-2 rounded-r-md font-semibold transition-colors border-2 border-yellow-400 hover:border-yellow-500">
                Search
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;