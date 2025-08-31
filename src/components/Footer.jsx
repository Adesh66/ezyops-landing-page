import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 pt-20 pb-8">
      <div className="container mx-auto">
        <div className="flex flex-col gap-10 justify-center items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <div className="w-3 h-3 bg-black rounded-full"></div>
            </div>
            <span className="text-2xl font-bold text-white">ezyOps</span>
          </div>
          <ul className="space-y-2 opacity-70 flex flex-row justify-between items-center">
            <nav className="hidden md:flex items-center space-x-8">
              <a
                href="#about"
                className="text-white transition hover:text-blue-500 hover:underline"
              >
                About us
              </a>
              <a
                href="#reviews"
                className="text-white transition hover:text-blue-500 hover:underline"
              >
                Products
              </a>
              <a
                href="#blog"
                className="text-white transition hover:text-blue-500 hover:underline"
              >
                Contact us
              </a>
            </nav>
          </ul>
        </div>
        <div className="border-t border-gray-800 pt-8 mt-8 flex justify-center items-center">
          <p className="text-gray-300 text-xs text-center">
            &copy; 2024 LuxStay. All rights reserved. Crafted with excellence.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
