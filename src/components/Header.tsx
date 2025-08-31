import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between py-4 sm:py-6">
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 sm:w-8 sm:h-8 bg-black rounded-full flex items-center justify-center">
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-white rounded-full"></div>
          </div>
          <span className="text-lg sm:text-xl font-bold text-gray-900">ezyOps</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
          <a
            href="#about"
            className="text-gray-700 transition hover:text-blue-500 hover:underline text-sm lg:text-base"
          >
            About us
          </a>
          <a
            href="#products"
            className="text-gray-700 transition hover:text-blue-500 hover:underline text-sm lg:text-base"
          >
            Products
          </a>
          <a
            href="#blog"
            className="text-gray-700 transition hover:text-blue-500 hover:underline text-sm lg:text-base"
          >
            Contact us
          </a>
        </nav>

        {/* Desktop Download Button */}
        <button className="hidden md:block bg-white border border-gray-300 px-4 lg:px-6 py-2 lg:py-2.5 rounded-full text-gray-700 hover:bg-gray-900 hover:text-white transition font-medium cursor-pointer text-sm lg:text-base">
          Explore App
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 text-gray-700 hover:text-gray-900 transition"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 py-4">
          <nav className="flex flex-col space-y-4">
            <a
              href="#about"
              className="text-gray-700 transition hover:text-blue-500 hover:underline px-4 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About us
            </a>
            <a
              href="#reviews"
              className="text-gray-700 transition hover:text-blue-500 hover:underline px-4 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </a>
            <a
              href="#blog"
              className="text-gray-700 transition hover:text-blue-500 hover:underline px-4 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact us
            </a>
            <div className="px-4 pt-2">
              <button className="w-full bg-white border border-gray-300 px-6 py-2.5 rounded-full text-gray-700 hover:bg-gray-900 hover:text-white transition font-medium cursor-pointer">
                Explore App
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
