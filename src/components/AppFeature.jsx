import React from "react";
import {
  Calendar,
  User,
  Video,
  FileText,
  Shield,
  ArrowRight,
  Icon,
} from "lucide-react";

export default function AppFeature() {
  const whyChooseUs = [
    {
      title: "All-in-One Hospitality Suite",
      description:
        "Simplify operations with a complete ecosystem of apps — from guest services to staff management, POS, reservations, kiosks, and more.",
      icon: "Layers",
    },
    {
      title: "Guest-Centric Experiences",
      description:
        "Enhance guest satisfaction with intuitive mobile apps, digital menus, and personalized service features that make every stay unforgettable.",
      icon: "Smile",
    },
    {
      title: "Seamless Staff Empowerment",
      description:
        "Equip your team with smart tools for training, task management, and real-time communication — boosting efficiency and reducing errors.",
      icon: "Users",
    },
    {
      title: "Scalable for Every Property",
      description:
        "Whether it’s a boutique hotel, large resort, restaurant chain, or cinema, our solutions adapt to your scale and unique needs.",
      icon: "Building",
    },
    {
      bgcolor: "#000",
      type: "brand",
      title: "Scalable for Every Property",
      description:
        "Whether it’s a boutique hotel, large resort, restaurant chain, or cinema, our solutions adapt to your scale and unique needs.",
      icon: "Building",
    },
    {
      title: "Modern POS & Inventory",
      description:
        "Stay ahead with a robust restaurant POS system and smart inventory tracking, helping you manage costs and maximize revenue.",
      icon: "ShoppingCart",
    },
    {
      title: "Frictionless Reservations & Bookings",
      description:
        "Manage hotel stays, restaurant tables, or cinema tickets with a smooth, integrated booking experience for guests and staff alike.",
      icon: "CalendarCheck",
    },
    // {
    //   title: "Kiosk & Touchless Solutions",
    //   description:
    //     "Offer self-service convenience with digital kiosks and welcome apps — reducing wait times and enhancing guest autonomy.",
    //   icon: "Monitor",
    // },
    {
      title: "Affordable & Transparent Pricing",
      description:
        "Get enterprise-grade solutions without breaking your budget. Flexible plans and clear pricing ensure maximum ROI.",
      icon: "DollarSign",
    },
    {
      title: "24/7 Support & Continuous Innovation",
      description:
        "We’re more than a vendor — we’re your technology partner. Get round-the-clock support and regular feature upgrades to keep you ahead.",
      icon: "Headphones",
    },
  ];

  return (
    <div className=" bg-gray-50 py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-center items-center text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
            🌍 Why Choose Us
          </h1>
          <p className="text-base sm:text-lg text-gray-900 max-w-full sm:max-w-2/3 px-4">
            Because modern hospitality deserves more than just software — it
            deserves smarter, seamless, and guest-first experiences.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {/* Left Column */}
          {/* Easy Appointment Booking */}
          {whyChooseUs.map((item, index) => (
            <div
              key={index}
              className={`rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border border-gray-200 ${
                item.type === "brand"
                  ? "flex bg-gray-900 text-white justify-center items-center min-h-[120px] sm:min-h-[150px]"
                  : "bg-white"
              }`}
            >
              {item.type === "brand" ? (
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-black rounded-full"></div>
                  </div>
                  <span className="text-lg sm:text-xl lg:text-2xl font-bold text-white">ezyOps</span>
                </div>
              ) : (
                <>
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                    <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">{item.description}</p>
                </>
              )}
            </div>
          ))}
        </div>

        {/* CTA Button */}
        {/* <div className="text-center">
          <button className="bg-purple-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-purple-700 transition flex items-center space-x-2 ">
            <span>Explore Full Features</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div> */}
      </div>
    </div>
  );
}
