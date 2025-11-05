import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

const Nav = () => {
  const { totalItems, totalPrice } = useCart();
  const [isOpen, setIsOpen] = useState(false); // For hamburger menu

  return (
    <div className="bg-yellow-100 p-4">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        {/* Logo */}
        <Link to="/">
          <h1 className="font-bold text-2xl">
            Fo<span className="text-orange-600">OD</span>ie
          </h1>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 font-bold tracking-wider text-lg cursor-pointer">
          <Link to="/"><li>Home</li></Link>
         <Link to="/menu"> <li>Menu</li></Link>
          <Link to="/about"><li>About</li></Link>
          <Link to="/contact"><li>Contact</li></Link>
        </ul>

        {/* Cart + Hamburger */}
        <div className="flex items-center gap-4">
          <div className="relative">
            <Link to="/cart">
              <i className="ri-store-3-line text-2xl"></i>
            </Link>
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-xs px-2 rounded-full">
                {totalItems}
              </span>
            )}
          </div>
          <div className="font-semibold hidden md:block">₹{totalPrice}</div>

          {/* Hamburger for mobile */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <i className="ri-close-line text-2xl"></i>
            ) : (
              <i className="ri-menu-line text-2xl"></i>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="flex flex-col gap-4 mt-4 md:hidden font-bold text-lg">
          <Link to="/" onClick={() => setIsOpen(false)}><li>Home</li></Link>
         <Link to="/menu"> <li onClick={() => setIsOpen(false)}>Menu</li></Link>
         <Link to="/about"> <li onClick={() => setIsOpen(false)}>About</li></Link>
         <Link to="/contact"><li onClick={() => setIsOpen(false)}>Contact</li></Link>
          <div className="font-semibold">₹{totalPrice}</div>
        </ul>
      )}
    </div>
  );
};

export default Nav;
