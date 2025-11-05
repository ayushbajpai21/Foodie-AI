import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";

const About = () => {
  return (
   <>
   
   <Nav/>
       <section className="bg-gradient-to-b from-yellow-50 to-white py-20">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Header */}
        <h2 className="text-5xl font-bold text-center text-orange-600 mb-6">
          About Our Food 🍕
        </h2>
        <p className="text-center text-gray-700 max-w-3xl mx-auto mb-16 text-lg">
          We serve delicious and fresh food made with love. Our menu is crafted
          to satisfy every craving, from classic comfort foods to bold, innovative
          dishes. Taste, quality, and happiness are at the heart of everything we do.
        </p>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 bg-gradient-to-r from-pink-300 via-red-300 to-yellow-200 rounded-3xl shadow-lg transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-bold text-white mb-3">Fresh Ingredients</h3>
            <p className="text-white">
              Only the freshest ingredients in every dish, bringing out the best flavors.
            </p>
          </div>
          <div className="p-8 bg-gradient-to-r from-green-300 via-lime-300 to-yellow-200 rounded-3xl shadow-lg transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-bold text-white mb-3">Fast Delivery</h3>
            <p className="text-white">
              Hot and on-time delivery so you can enjoy your favorite meals without waiting.
            </p>
          </div>
          <div className="p-8 bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 rounded-3xl shadow-lg transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-bold text-white mb-3">Tasty Recipes</h3>
            <p className="text-white">
              Mouth-watering recipes crafted by our chefs to leave you wanting more.
            </p>
          </div>
        </div>
      </div>
    </section>
<Footer/>
   </>

  );
};

export default About;
