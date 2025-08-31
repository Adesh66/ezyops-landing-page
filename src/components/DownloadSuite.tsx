import React from "react";
import imgSuite from "../assets/asus-m2-pro.png";

export default function DownloadSuite() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-purple-50 to-blue-50  py-20">
      <div className="container mx-auto">
        {/* Header Badge */}
        {/* <div className="text-center mb-8">
          <div className="inline-flex items-center px-6 py-2 bg-white rounded-full border border-purple-200 shadow-sm">
            <span className="text-purple-600 text-sm font-medium">
              Best Medical Service
            </span>
          </div>
        </div> */}

        <div className="flex flex-col justify-center items-center text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Explore Our App Suite
          </h1>
          <p className="text-lg text-gray-900 max-w-2/3 ">
            One platform, every device. Whether on mobile, tablet, or desktop —
            our apps bring seamless hospitality experiences to guests and staff
            alike.
          </p>
        </div>
        {/* Main Heading */}
        <div className="text-center mb-8">
          <ul>
            <li>
              <b>For Guests:</b> Order food, book services, and explore property
              offers right from your phone.
            </li>
            <li>
              <b>For Staff:</b> Manage tasks, track requests, and deliver faster
              service with the staff console.
            </li>
            <li>
              <b>For Managers:</b> Monitor performance, reservations, and
              operations with real-time insights on desktop.
            </li>
          </ul>
        </div>

        {/* App Store Buttons */}
        {/* <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <button className="flex items-center space-x-3 bg-black text-white px-6 py-4 rounded-xl hover:bg-gray-800 transition">
            <Apple className="w-6 h-6" />
            <div className="text-left">
              <div className="text-xs opacity-80">Download on the</div>
              <div className="text-sm font-semibold">App Store</div>
            </div>
          </button>
          <button className="flex items-center space-x-3 bg-black text-white px-6 py-4 rounded-xl hover:bg-gray-800 transition">
            <Play className="w-6 h-6" />
            <div className="text-left">
              <div className="text-xs opacity-80">Get it on</div>
              <div className="text-sm font-semibold">Google Play</div>
            </div>
          </button>
        </div> */}

        {/* Phone Mockups Section */}
        <div className="relative max-w-6xl ">
          <img
            src={imgSuite}
            alt="Happy clients"
            className="w-full h-full  object-contain"
          />
        </div>
      </div>
    </div>
  );
}
