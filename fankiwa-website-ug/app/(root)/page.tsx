"use client";

import { useState } from "react";

import Hero from "./home/page";
import Navbar from "../../components/custom/navbar/page";
import AboutPage from "./about/page";
import Section from "@/components/custom/section/page";
import Partners from "./partners/page";
import Career from "./careers/page";
import Footer from "@/components/custom/footer/page";

// NEW DROPDOWN instead of modal
import CountrySelectorDropdown from "@/components/custom/countrySelector/page";

export default function Page() {
  const [country, setCountry] = useState<string>("uganda"); // default country

  return (
    <div className="relative">
      {/* 🔽 Dropdown stays at the top of the page */}
     

      {/* Page always loads. Content updates based on country */}
      <Navbar country={country} />

      <Section id="home">
        <Hero  />
      </Section>

      <div className="w-full flex justify-center py-2 relative bottom-60 ">
        <CountrySelectorDropdown onSelect={setCountry} />
      </div>


      <Section id="about">
        <AboutPage country={country} />
      </Section>

      <Section id="partners">
        <Partners  />
      </Section>

      <Section id="careers">
        <Career  />
      </Section>

      <div id="footer">
        <Footer />
      </div>
    </div>
  );
}
