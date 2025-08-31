import React from "react";

const Header = () => {
  return (
    <header className="container mx-auto">
      <div className="flex items-center justify-between py-6">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
            <div className="w-3 h-3 bg-white rounded-full"></div>
          </div>
          <span className="text-xl font-bold text-gray-900">ezyOps</span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="#about"
            className="text-gray-700 transition hover:text-blue-500 hover:underline"
          >
            About us
          </a>
          <a
            href="#reviews"
            className="text-gray-700 transition hover:text-blue-500 hover:underline"
          >
            Products
          </a>
          <a
            href="#blog"
            className="text-gray-700 transition hover:text-blue-500 hover:underline"
          >
            Contact us
          </a>
        </nav>

        {/* Download Button */}
        <button className="bg-white border border-gray-300 px-6 py-2.5 rounded-full text-gray-700 hover:bg-gray-900 hover:text-white transition font-medium cursor-pointer">
          Explore App
        </button>
      </div>
    </header>
  );
};

export default Header;
