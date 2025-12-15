import React from "react";
import MainButton from "@/components/ui/careerButton/page";

export default function InstructorInviteCard() {
  return (
    <div className="w-full flex justify-center md:px-4 py-10">
      <div
        className="
          relative group w-full max-w-6xl
          bg-[#E9F8EE] rounded-xl
          p-6 sm:p-8 md:p-12
          flex flex-col md:flex-row
          md:items-center md:justify-between
          gap-6
        "
      >
        {/* Left Side Text */}
        <div className="text-center md:text-left max-w-xl">
          <p className="text-sm text-gray-700 font-medium">
            Become A Field Entrepreneur
          </p>

          <h2 className="mt-2 text-2xl sm:text-3xl font-semibold text-gray-900 leading-snug">
            You can join our team <br />
            as{" "}
            <span className="relative inline-block text-green-700">
              a Field Entrepreneur

              {/* Hand-drawn underline */}
              <svg
                className="absolute left-0 -bottom-6 w-full"
                height="40"
                viewBox="0 0 200 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 20 C60 5, 140 35, 195 15"
                  stroke="#2E7D32"
                  strokeWidth="3"
                  strokeLinecap="round"
                  opacity="0.9"
                />
                <path
                  d="M8 30 C70 18, 130 45, 192 25"
                  stroke="#2E7D32"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  opacity="0.75"
                />
              </svg>
            </span>
          </h2>
        </div>

        {/* Button */}
        <div className="flex justify-center md:justify-end">
          <MainButton
            text="Join Us"
            target="_blank"
            href="https://docs.google.com/forms/d/e/1FAIpQLSdmEzSXs5hLh4GMGvGQMGOr6UMDgrejjSPkdexq0-Zn7WiOyw/viewform?usp=header"
          />
        </div>

        {/* Arrow (Desktop only) */}
        <div
          className="
            hidden md:block absolute right-69 top-1/2
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

        {/* Decorative dots */}
        <div className="absolute left-3 top-3 flex gap-1">
          <span className="w-2 h-2 bg-yellow-400 rounded-full" />
          <span className="w-2 h-2 bg-yellow-400 rounded-full" />
          <span className="w-2 h-2 bg-yellow-400 rounded-full" />
        </div>

        <div className="absolute right-3 bottom-3 flex gap-1">
          <span className="w-2 h-2 bg-yellow-400 rounded-full" />
          <span className="w-2 h-2 bg-yellow-400 rounded-full" />
          <span className="w-2 h-2 bg-yellow-400 rounded-full" />
        </div>
      </div>
    </div>
  );
}
