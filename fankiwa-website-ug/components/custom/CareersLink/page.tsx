import React from "react";
import MainButton from "@/components/ui/careerButton/page";

export default function InstructorInviteCard() {
  return (
    <div className="w-full flex justify-center  py-10">
      <div className="relative group w-full bg-[#E9F8EE] rounded-xl p-8 md:p-12 flex items-center justify-between">

        {/* Left Side Text */}
        <div>
          <p className="text-sm text-gray-700 font-medium">Become A Field Entrepreneur</p>

          <h2 className="mt-2 text-2xl md:text-3xl font-semibold text-gray-900 leading-snug relative w-fit">
            You can join our team <br />
            as{" "}
            <span className="relative inline-block text-green-700">
             a Field Entrepreneur

            {/* Hand-Drawn Double Underline */}
            <svg
              className="absolute left-20 bottom-[-70px] w-full"
              height="80"
              viewBox="0 0 20 responsive"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Line 1 – sketchy curve */}
              <path
                d="M5 20 C60 5, 140 35, 195 15"
                stroke="#2E7D32"
                strokeWidth="3.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity="0.9"
              />

              {/* Line 2 – second imperfect hand stroke */}
              <path
                d="M8 30 C70 18, 130 45, 192 25"
                stroke="#2E7D32"
                strokeWidth="2.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity="0.75"
              />
            </svg>
          </span>

          </h2>
        </div>

        {/* Arrow (Animated on Hover) */}
        <div
          className="
            hidden md:block absolute right-70 top-1/2 
            -translate-y-1/2 
            transition-transform duration-500 
            group-hover:translate-x-4 
            group-hover:scale-110
          "
        >
          <svg
            width="120"
            height="60"
            viewBox="0 0 120 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#2E7D32"
            strokeWidth="3"
            strokeLinecap="round"
          >
            <path d="M10 50 C60 10, 100 10, 115 25" />
            <path d="M110 10 L118 26 L102 27" />
          </svg>
        </div>

        {/* Button */}
        <MainButton text="Join Us" target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSdmEzSXs5hLh4GMGvGQMGOr6UMDgrejjSPkdexq0-Zn7WiOyw/viewform?usp=header" />

        {/* Decorative dots */}
        <div className="absolute left-3 top-3 flex gap-1">
          <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
          <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
          <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
        </div>

        <div className="absolute right-3 bottom-3 flex gap-1">
          <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
          <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
          <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
        </div>
      </div>
    </div>
  );
}
