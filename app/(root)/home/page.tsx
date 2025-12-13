"use client"
import { useState } from "react";
import ButtonTwo from "@/components/ui/buttonTwo/page";
import MainButton from "@/components/ui/mainButton/page";


export default function Hero() {

  const [country, setCountry] = useState<string>("uganda"); // default country
  return (
    <section className="relative bg-background w-full min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 opacity-80 overflow-hidden">
        <img
          src="/front-view-woman-carrying-harvest.jpg"
          alt="Hero background"
          className="w-full h-full object-cover filter blur-[3px]"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
          Growing with Businesses Across Africa
        </h1>

        <p className="mt-6 text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
          Unlock capital, grow your business, and access affordable financing
          designed for entrepreneurs and SMEs.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <MainButton text="GET STARTED" href="/signup" />
          <ButtonTwo text="LEARN MORE" href="/learn-more" />
        </div>
      </div>
    </section>
  );
}
