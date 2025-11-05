import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-around p-6 md:p-10 gap-6 md:gap-10">
      {/* Hero Image */}
      <div className="flex-shrink-0">
        <img
          className="w-full max-w-sm md:max-w-md lg:max-w-lg rounded-xl shadow-lg"
          src="/hero1.jpg"
          alt="Hero"
        />
      </div>

      {/* Hero Text & Button */}
      <div className="bg-orange-100 rounded-3xl p-8 md:p-12 text-center flex flex-col items-center justify-center max-w-md shadow-lg">
        <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl tracking-wide mb-4">
          Welcome <span className="text-red-500">to Our</span> Store
        </h1>
        <p className="font-semibold text-lg md:text-2xl text-blue-500 mb-6">
          Find the best products at unbeatable prices.
        </p>
      <Link to="/menu">  <button className="bg-blue-600 hover:bg-blue-500 transition-all text-white font-semibold px-8 py-3 rounded-2xl shadow-md">
          Shop Now
        </button></Link>
      </div>
    </div>
  );
};

export default Hero;
