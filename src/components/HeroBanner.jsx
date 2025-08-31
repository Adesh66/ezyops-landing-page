import { Apple, Play } from "lucide-react";
import Header from "./Header";
import imgUrl from "../assets/welcome.png";
export default function HeroBanner() {
  return (
    <div className="bg-gradient-to-br from-purple-100 via-blue-50 to-purple-200">
      <Header />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-center min-h-[70vh] sm:min-h-[80vh] py-8 sm:py-12 gap-8 lg:gap-12">
          <div className="flex flex-col gap-4 sm:gap-6 items-start w-full lg:flex-2/3 text-center lg:text-left">
            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight lg:leading-none">
              Powering the Future
              <br />
              <span className="italic font-light">
                of Hospitality & Leisure
              </span>
            </h1>

            {/* Description */}
            <div className="space-y-3 sm:space-y-4 text-gray-700">
              <p className="font-light text-base sm:text-lg lg:text-xl">
                From hotels to restaurants, cinemas to resorts — one unified
                suite of apps to elevate experiences, simplify operations, and
                delight guests.
              </p>
              <p className="text-sm sm:text-base">
                Whether it's seamless hotel guest apps, restaurant POS &
                inventory management, staff training, cinema kiosks, or smart
                reservation systems — our platform is built to transform every
                touchpoint of your business. Designed for scale, efficiency, and
                unforgettable guest experiences.
              </p>
            </div>

            {/* Get Started Button */}
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
              <button className="bg-gray-900 text-white px-6 sm:px-8 py-3 rounded-full text-sm sm:text-md font-light hover:bg-gray-800 transition cursor-pointer w-full sm:w-auto">
                Get Started
              </button>

              <button className="bg-white text-gray-900 border px-6 sm:px-8 py-3 rounded-full text-sm sm:text-md font-light hover:bg-gray-800 hover:text-white transition cursor-pointer w-full sm:w-auto">
                Explore Our Apps
              </button>
            </div>
          </div>
          <div className="flex justify-center w-full lg:flex-1/3 order-first lg:order-last">
            <div className="flex flex-row">
              <div className="max-w-[250px] sm:max-w-[300px] lg:max-w-[350px] w-full">
                <img
                  src={imgUrl}
                  alt="App Screenshot"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
