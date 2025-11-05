import React, { useState } from 'react'
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import Footer from './Footer';

const foodData = [
  {
    id: 1,
    name: "Margherita Pizza",
    category: "Italian",
    price: 249,
    image: "https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_960_720.jpg",
    description: "Classic cheese pizza with fresh basil and tomato sauce."
  },
  {
    id: 2,
    name: "Veggie Burger",
    category: "Fast Food",
    price: 199,
    image: "https://cdn.pixabay.com/photo/2016/03/05/19/02/hamburger-1238246_960_720.jpg",
    description: "Crispy vegetable patty with lettuce, tomato, and cheese."
  },
  {
    id: 3,
    name: "Paneer Butter Masala",
    category: "Indian",
    price: 299,
    image: "https://i.pinimg.com/1200x/be/ef/74/beef74528b9acc13872a1269d4bd5274.jpg",
    description: "Soft paneer cubes cooked in creamy tomato gravy."
  },
  {
    id: 4,
    name: "Masala Dosa",
    category: "South Indian",
    price: 149,
    image: "https://i.pinimg.com/736x/6e/10/c7/6e10c7c0c11d6e2a28d6c51c3877774a.jpg",
    description: "Crispy dosa stuffed with spicy potato filling."
  },
  {
    id: 5,
    name: "Pasta Alfredo",
    category: "Italian",
    price: 259,
    image: "https://i.pinimg.com/1200x/67/1c/d3/671cd30d7445eccad0c6ebe10ef2239a.jpg",
    description: "Creamy white sauce pasta with herbs and mushrooms."
  },
  {
    id: 6,
    name: "Chole Bhature",
    category: "Indian",
    price: 179,
    image: "https://i.pinimg.com/736x/d6/60/25/d660255e0ac13e20bc3c674ee3d11ac4.jpg",
    description: "Spicy chickpeas served with fluffy deep-fried bhature."
  },
  {
    id: 7,
    name: "Sushi Roll",
    category: "Japanese",
    price: 349,
    image: "https://i.pinimg.com/736x/11/31/b9/1131b9a3d5ff8aa5e276a6e134d1d081.jpg",
    description: "Fresh sushi rolls with rice, vegetables, and soy sauce."
  },
  {
    id: 8,
    name: "Falafel Wrap",
    category: "Middle Eastern",
    price: 229,
    image: "https://i.pinimg.com/1200x/db/8d/d6/db8dd62a95a08e10dff18db6d85fe1be.jpg",
    description: "Crispy falafel balls wrapped with veggies and hummus."
  },
  {
    id: 9,
    name: "Caesar Salad",
    category: "Salad",
    price: 179,
    image: "https://i.pinimg.com/1200x/04/44/31/044431c8343b5801ff75f4b493fd6a24.jpg",
    description: "Fresh romaine lettuce with dressing and croutons."
  },
  {
    id: 10,
    name: "Chocolate Brownie",
    category: "Dessert",
    price: 149,
    image: "https://i.pinimg.com/736x/b1/db/98/b1db98a8182316a568052e8cdb3e88d9.jpg",
    description: "Rich chocolate brownie topped with nuts and fudge."
  }
];

const Foodcard = () => {
  const { addToCart, totalItems, totalPrice } = useCart();
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  // 🧩 Filter Logic — must be before return()
  const filteredData = foodData.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      {/* Navbar */}
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
            <Link to="/menu"><li>Menu</li></Link>
            <Link to="/about"><li>About</li></Link>
            <li>Contact</li>
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
            <Link to="/menu"><li onClick={() => setIsOpen(false)}>Menu</li></Link>
           <Link to="/about"><li onClick={() => setIsOpen(false)}>About</li></Link> 
 <Link to="/contact"><li onClick={() => setIsOpen(false)}>Contact</li></Link>
            <div className="font-semibold">₹{totalPrice}</div>
          </ul>
        )}
      </div>

      {/* Search Section */}
      <div className="bg-gray-50 flex flex-col items-center p-8 space-y-6 relative">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800">
          Food Menu 🍔
        </h1>

        {/* Search Bar */}
        <div className="flex items-center w-full justify-center">
          <div className="relative w-full max-w-lg">
            <input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              type="text"
              placeholder="Search food..."
              className="w-full p-3 pl-12 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-400 transition"
            />
            <i className="ri-search-line absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg"></i>
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <div className="p-6 bg-gray-50 min-h-screen">
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filteredData.length > 0 ? (
            filteredData.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-semibold">{item.name}</h3>
                  <p className="text-sm text-gray-500">{item.category}</p>
                  <p className="text-lg font-bold mt-2">₹{item.price}</p>
                  <p className="text-gray-700 mt-2 text-sm">{item.description}</p>
                  <button
                    onClick={() => addToCart(item)}
                    className="bg-blue-600 p-1 mt-2 rounded-2xl text-white w-30 h-10"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center col-span-full text-gray-500 text-lg font-medium">
              😔 No food found
            </p>
          )}
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Foodcard;
