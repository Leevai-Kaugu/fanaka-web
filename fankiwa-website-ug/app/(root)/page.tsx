"use client";
import Hero from "./home/page";
import Navbar from "../../components/custom/navbar/page";
import AboutPage from "./about/page";
import Section from "@/components/custom/section/page"; 
import Partners from "./partners/page";
import Career from "./careers/page";
import Footer from "@/components/custom/footer/page";


export default function Page() {
  return (
    <div>
      <Navbar />
      <Section id="home">
        <Hero />
      </Section>
      <Section id="about">
        <AboutPage />
      </Section>
      <Section id="partners">
        <Partners />
      </Section>
      <Section id="careers">
        <Career />
      </Section>
      <div id="footer">
        <Footer />
      </div>
    </div>
  );
}
