"use client";

import { useEffect, useState, useMemo } from "react";
import imgGuestApp from "../assets/home.png";
import imgGuestAppIpad from "../assets/ipad-portrait.png";
import { ChevronLeft, ChevronRight } from "lucide-react";

// const defaultSlidesOld = [
//   {
//     title: "Experience Timeless Elegance",
//     description:
//       "Step into comfort and sophistication, where every detail is designed with you in mind.",
//     backgroundImage:
//       "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
//   },
//   {
//     title: "Exceptional Comfort, Every Stay",
//     description:
//       "Relax in beautifully appointed rooms with modern amenities that cater to your every need.",
//     backgroundImage:
//       "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
//   },
//   {
//     title: "Unforgettable Moments Await",
//     description:
//       "Enjoy world-class dining, rejuvenating spa experiences, and personalized service throughout your visit.",
//     backgroundImage:
//       "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
//   },
//   {
//     title: "Your Perfect Getaway Starts Here",
//     description:
//       "Discover local culture and breathtaking views, creating memories that last a lifetime.",
//     backgroundImage:
//       "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80",
//   },
// ];

const defaultSlides = [
  {
    title: "Restaurant POS & Inventory",
    subtitle: "Smart ordering, billing & stock management",
    description:
      "Run your restaurant smoothly with our modern POS system. Track inventory, manage tables, streamline billing, and boost efficiency.",
    cta: "Explore POS",
    imageUrl: imgGuestApp,
    videoUrl: "/videos/products/pos-inventory.mp4",
  },
  {
    title: "Hotel Suite",
    subtitle: "Guest App • Staff Console • Manager Dashboard",
    description:
      "A complete hotel operating system — from guest ordering to staff tasking and manager insights, all in one connected platform.",
    cta: "Explore Hotel Suite",
    imageUrl: imgGuestAppIpad,
    videoUrl: "/videos/products/hotel-suite.mp4",
  },
  {
    title: "Static iPad Menu",
    subtitle: "Elegant, digital, and touch-friendly menus",
    description:
      "Showcase your restaurant or café menu on iPads. Perfect for dine-in experiences with a clean, digital-first impression.",
    cta: "View Menu App",
    imageUrl: imgGuestApp,
    videoUrl: "/videos/products/ipad-menu.mp4",
  },
  {
    title: "Hotel Staff Training App",
    subtitle: "Train, engage, and upskill your staff",
    description:
      "Ensure your team delivers world-class service with structured training modules, assessments, and interactive content.",
    cta: "Explore Training App",
    imageUrl: imgGuestAppIpad,
    videoUrl: "/videos/products/staff-training.mp4",
  },
  {
    title: "Reservation App",
    subtitle: "Hotels • Restaurants • Events",
    description:
      "Seamlessly manage room bookings, restaurant tables, and event reservations. Simplify scheduling for guests and staff.",
    cta: "Book with Ease",
    imageUrl: imgGuestApp,
    videoUrl: "/videos/products/reservation-app.mp4",
  },
  {
    title: "Cinema Kiosk App",
    subtitle: "Touchless ticketing & food ordering",
    description:
      "Upgrade your cinema with self-service kiosks for tickets, snacks, and merchandise — reducing queues and enhancing guest convenience.",
    cta: "Explore Kiosk App",
    imageUrl: imgGuestAppIpad,
    videoUrl: "/videos/products/cinema-kiosk.mp4",
  },
  {
    title: "Guest Welcome App",
    subtitle: "Personalized greetings & property guide",
    description:
      "Delight guests from the moment they arrive with a digital welcome experience — featuring property highlights, offers, and services.",
    cta: "See Welcome App",
    imageUrl: imgGuestApp,
    videoUrl: "/videos/products/welcome-app.mp4",
  },
];

export default function OurProducts() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const slides = useMemo(() => {
    return defaultSlides;
  }, []);

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const currentSlideData = slides[currentSlide];

  return (
    <div
      className=" bg-gray-900 py-12 sm:py-16 lg:py-20 relative"
      id="products"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-center items-center text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            🚀 Our Hospitality & Entertainment Suite
          </h1>
          <p className="text-base sm:text-lg text-white max-w-full sm:max-w-2/3 px-4">
            From hotels to restaurants to cinemas — explore our complete range
            of digital solutions designed to enhance guest experiences, empower
            staff, and streamline operations.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-center min-h-[60vh] sm:min-h-[70vh] lg:min-h-[80vh] gap-8 lg:gap-12">
          {/* Flexible middle section */}
          <div className="flex flex-col items-center lg:items-start w-full lg:flex-2/3 text-center lg:text-left order-2 lg:order-1">
            {/* Slide Content */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight max-w-full lg:max-w-8/12">
              {currentSlideData.title}
            </h1>
            <p className="text-sm sm:text-base text-white text-opacity-90 leading-relaxed max-w-full lg:max-w-8/12">
              {currentSlideData.description}
            </p>
          </div>

          <div className="relative w-full max-w-[300px] sm:max-w-[400px] lg:max-w-none lg:w-auto h-64 sm:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-lg lg:flex-4/12 order-1 lg:order-2">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
                  index === currentSlide ? "opacity-100" : "opacity-0"
                }`}
              >
                <img
                  src={slide.imageUrl}
                  alt=""
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="relative z-10 h-full flex flex-col">
          <div className="flex-shrink-0 ">
            <div className="flex justify-center items-center space-x-1 mb-4">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleSlideChange(index)}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? "w-4 bg-white"
                      : "w-1 bg-white bg-opacity-50 hover:bg-opacity-70"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            <div className="flex justify-center items-center gap-4">
              {/* Navigation Arrows */}
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrevious}
                  className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all duration-200 flex-shrink-0 cursor-pointer"
                  aria-label="Previous slide"
                >
                  <ChevronLeft color="#000" />
                </button>

                <button
                  onClick={handleNext}
                  className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all duration-200 flex-shrink-0 cursor-pointer"
                  aria-label="Next slide"
                >
                  <ChevronRight color="#000" />
                </button>
              </div>

              {/* <Button
              variant="contained"
              size="medium"
              className="py-3 px-6 bg-white hover:bg-gray-50 rounded-full text-sm font-medium capitalize shadow-lg flex-shrink-0"
              style={{
                color: "#111745",
                backgroundColor: "white",
              }}
            >
              Explore Now
            </Button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
