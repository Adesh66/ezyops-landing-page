import { Apple, Play } from "lucide-react";
import Header from "./Header";
import imgUrl from "../assets/welcome.png";
export default function HeroBanner() {
  return (
    <div className="bg-gradient-to-br from-purple-100 via-blue-50 to-purple-200">
      <Header />
      <main className="container mx-auto">
        <div className="flex flex-row justify-between items-center min-h-[80vh] py-12">
          <div className="flex flex-col gap-6 items-start flex-2/3">
            {/* Main Heading */}
            <h1 className="text-6xl font-bold text-gray-900 leading-none">
              Powering the Future
              <br />
              <span className="italic font-light">
                of Hospitality & Leisure
              </span>
            </h1>

            {/* Description */}
            <div className="space-y-4 text-gray-700">
              <p className="font-light text-xl">
                From hotels to restaurants, cinemas to resorts — one unified
                suite of apps to elevate experiences, simplify operations, and
                delight guests.
              </p>
              <p>
                Whether it’s seamless hotel guest apps, restaurant POS &
                inventory management, staff training, cinema kiosks, or smart
                reservation systems — our platform is built to transform every
                touchpoint of your business. Designed for scale, efficiency, and
                unforgettable guest experiences.
              </p>
            </div>

            {/* Get Started Button */}
            <div className="flex space-x-4">
              <button className="bg-gray-900 text-white px-8 py-3 rounded-full text-md font-light hover:bg-gray-800 transition cursor-pointer">
                Get Started
              </button>

              <button className="bg-white text-gray-900 border px-8 py-3 rounded-full text-md font-light hover:bg-gray-800 hover:text-white transition cursor-pointer">
                Explore Our Apps
              </button>
            </div>
          </div>
          <div className="flex justify-center flex-1/3">
            <div className="flex flex-row">
              <div className="max-w-[300px]">
                <img
                  src={imgUrl}
                  alt="App Screenshot"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
