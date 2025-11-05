import React from "react";
import { Link } from "react-router-dom";
import ChatBot from "./ChatBot";

const Footer = () => {
  return (
    <footer className="bg-yellow-100 text-gray-800 mt-10">
      <div className="max-w-6xl mx-auto py-10 px-6 md:px-0 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About Section */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Fo<span className="text-orange-600">OD</span>ie</h2>
          <p className="text-gray-700">
            Your one-stop shop for the best products at unbeatable prices.  
            We deliver quality and freshness directly to your doorstep.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <Link to="/"><li className="hover:underline cursor-pointer">Home</li></Link>
            <Link to="/menu"><li className="hover:underline cursor-pointer">Menu</li></Link>
            <Link to="/about"><li className="hover:underline cursor-pointer">About</li></Link>
            <Link to="/contact"><li className="hover:underline cursor-pointer">Contact</li></Link>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Contact</h3>
          <ul className="space-y-2 text-gray-700">
            <li>Email: support@foodie.com</li>
            <li>Phone: +91 1234567890</li>
            <li>Address: 123, Market Street, Delhi, India</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
          <div className="flex gap-4 text-2xl">
            <a href="#" className="hover:text-blue-600"><i className="ri-facebook-fill"></i></a>
            <a href="#" className="hover:text-blue-400"><i className="ri-twitter-fill"></i></a>
            <a href="#" className="hover:text-pink-500"><i className="ri-instagram-fill"></i></a>
            <a href="#" className="hover:text-red-600"><i className="ri-youtube-fill"></i></a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-300 text-center py-4 text-gray-600 text-sm">
        &copy; {new Date().getFullYear()} FoODie. All rights reserved.
      </div>
      <ChatBot/> 
    </footer>
  );
};

export default Footer;
