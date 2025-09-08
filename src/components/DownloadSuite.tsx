import React from "react";
import imgSuite from "../assets/asus-m2-pro.png";

export default function DownloadSuite() {
  return (
    <div className="min-h-[60vh] sm:min-h-[70vh] lg:min-h-screen bg-gradient-to-br from-purple-100 via-purple-50 to-blue-50 py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Badge */}
        {/* <div className="text-center mb-8">
          <div className="inline-flex items-center px-6 py-2 bg-white rounded-full border border-purple-200 shadow-sm">
            <span className="text-purple-600 text-sm font-medium">
              Best Medical Service
            </span>
          </div>
        </div> */}

        <div className="flex flex-col justify-center items-center text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
            Explore Our App Suite
          </h1>
          <p className="text-base sm:text-lg text-gray-900 max-w-full sm:max-w-2/3 px-4">
            One platform, every device. Whether on mobile, tablet, or desktop —
            our apps bring seamless hospitality experiences to guests and staff
            alike.
          </p>
        </div>
        {/* Main Heading */}
        <div className="text-center mb-8 sm:mb-12">
          <ul className="space-y-3 sm:space-y-4 text-sm sm:text-base text-gray-700 max-w-4xl mx-auto">
            <li className="flex flex-col sm:flex-row sm:items-center justify-center gap-1 sm:gap-2">
              <b className="text-gray-900">For Guests:</b> 
              <span>Order food, book services, and explore property offers right from your phone.</span>
            </li>
            <li className="flex flex-col sm:flex-row sm:items-center justify-center gap-1 sm:gap-2">
              <b className="text-gray-900">For Staff:</b> 
              <span>Manage tasks, track requests, and deliver faster service with the staff console.</span>
            </li>
            <li className="flex flex-col sm:flex-row sm:items-center justify-center gap-1 sm:gap-2">
              <b className="text-gray-900">For Managers:</b> 
              <span>Monitor performance, reservations, and operations with real-time insights on desktop.</span>
            </li>
          </ul>
        </div>

        {/* App Store Buttons */}
        {/* <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <button className="flex items-center space-x-3 bg-gray-900 text-white px-6 py-4 rounded-xl hover:bg-gray-800 transition">
            <Apple className="w-6 h-6" />
            <div className="text-left">
              <div className="text-xs opacity-80">Download on the</div>
              <div className="text-sm font-semibold">App Store</div>
            </div>
          </button>
          <button className="flex items-center space-x-3 bg-gray-900 text-white px-6 py-4 rounded-xl hover:bg-gray-800 transition">
            <Play className="w-6 h-6" />
            <div className="text-left">
              <div className="text-xs opacity-80">Get it on</div>
              <div className="text-sm font-semibold">Google Play</div>
            </div>
          </button>
        </div> */}

        {/* Phone Mockups Section */}
        <div className="relative max-w-full sm:max-w-4xl lg:max-w-6xl mx-auto">
          <img
            src={imgSuite}
            alt="App Suite Preview"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
}
