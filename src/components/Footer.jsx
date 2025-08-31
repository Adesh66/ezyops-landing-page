import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 pt-12 sm:pt-16 lg:pt-20 pb-6 sm:pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 sm:gap-8 lg:gap-10 justify-center items-center">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white rounded-full flex items-center justify-center">
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-black rounded-full"></div>
            </div>
            <span className="text-xl sm:text-2xl font-bold text-white">ezyOps</span>
          </div>
          <div className="opacity-70">
            <nav className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 lg:space-x-8">
              <a
                href="#about"
                className="text-white transition hover:text-blue-500 hover:underline text-sm sm:text-base"
              >
                About us
              </a>
              <a
                href="#products"
                className="text-white transition hover:text-blue-500 hover:underline text-sm sm:text-base"
              >
                Products
              </a>
              <a
                href="#blog"
                className="text-white transition hover:text-blue-500 hover:underline text-sm sm:text-base"
              >
                Contact us
              </a>
            </nav>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-6 sm:pt-8 mt-6 sm:mt-8 flex justify-center items-center">
          <p className="text-gray-300 text-xs sm:text-sm text-center">
            &copy; 2024 ezyOps. All rights reserved. Crafted with excellence.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
