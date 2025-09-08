"use client";
import React, { useState } from "react";
import LogoUrl from "../assets/ezzyops2.png";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={
        " px-4 sm:px-6 lg:px-8 " + (isMenuOpen ? "bg-white" : "")
      }
    >
      <div className="container mx-auto flex items-center justify-between py-4 sm:py-">
        <div className="flex items-center space-x-2">
          <img src={LogoUrl} alt="logo" className="w-38" />
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
            href="#contact"
            className="text-gray-700 transition hover:text-blue-500 hover:underline text-sm lg:text-base"
          >
            Contact us
          </a>
        </nav>

        {/* Desktop Download Button */}
        <a
          href="https://guest-app-seven.vercel.app/guest?hotelid=a1b2c3d4e5f6g7h8&source=room&ref=101"
          target="_blank"
          className="hidden md:block bg-gray-900 text-white px-6 sm:px-8 py-3 rounded-full text-sm sm:text-md font-light hover:bg-gray-800 transition cursor-pointer w-full sm:w-auto"
        >
          Explore App
        </a>

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
        <div className="md:hidden bg-white border-t border-gray-200 py-8">
          <nav className="flex flex-col space-y-4 items-center">
            <a
              href="#about"
              className="text-gray-700 transition hover:text-blue-500 hover:underline px-4 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About us
            </a>
            <a
              href="#products"
              className="text-gray-700 transition hover:text-blue-500 hover:underline px-4 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </a>
            <a
              href="#contact"
              className="text-gray-700 transition hover:text-blue-500 hover:underline px-4 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact us
            </a>
            <div className="px-4 pt-2">
              <a
                href="https://guest-app-seven.vercel.app/guest?hotelid=a1b2c3d4e5f6g7h8&source=room&ref=101"
                target="_blank"
                className="bg-gray-900 text-white px-6 sm:px-8 py-3 rounded-full text-sm sm:text-md font-light hover:bg-gray-800 transition cursor-pointer w-full sm:w-auto"
              >
                Explore App
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
