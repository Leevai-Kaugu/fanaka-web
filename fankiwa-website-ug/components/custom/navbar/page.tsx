"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

type Section = "home" | "about" | "partners" | "careers";

export default function Navbar({ country }: { country: string }) {
  const [active, setActive] = useState<Section>("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [direction, setDirection] = useState<"up" | "down">("down");

  const sections: Section[] = ["home", "about", "partners", "careers"];

  // country logos
  const logos: Record<string, string> = {
    // uganda: "/Fanaka logo ug-01.png",
    // zambia: "/Zanga.png",
    default: "/Zanga.png",
  };

  const logoSrc = logos[country] ?? logos.default;

  // Track scroll + direction
  useEffect(() => {
    let lastY = window.scrollY;

    const handleScroll = () => {
      const currentY = window.scrollY;

      if (currentY > lastY) setDirection("down");
      else if (currentY < lastY) setDirection("up");

      lastY = currentY;

      const navbarHeight = 80;
      let currentSection: Section = "home";

      sections.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          const offsetTop = element.offsetTop - navbarHeight;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (currentY >= offsetTop && currentY < offsetBottom) {
            currentSection = id;
          }
        }
      });

      setActive(currentSection);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;

    const navbarHeight = 80;
    const top =
      element.getBoundingClientRect().top + window.scrollY - navbarHeight;

    window.scrollTo({ top, behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/20 backdrop-blur-md shadow-sm">
      <div className="container mx-auto flex justify-between items-center p-4">

        {/* LOGO + RIGHT-ALIGNED TITLE */}
        <div className="flex flex-col items-center">
          <Image
            src={logoSrc}
            alt="Fanaka Logo"
            width={40}
            height={40}
            className="object-contain cursor-pointer"
            priority
          />

          {/* Title under logo, right aligned */}
          <div className="w-full ">
            <p className="text-xs text-fanakaPrimary font-semibold ">
              Fanaka
            </p>
            {/* <p className="text-xs text-gray-700 font-semibold bg-red-100 text-right">
              Ug
            </p> */}
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          {sections.map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="relative group capitalize text-sm py-1"
            >
              <span
                className={`transition-colors duration-200 ${
                  active === item
                    ? "text-green-600 font-semibold"
                    : "text-gray-400"
                }`}
              >
                {item}
              </span>

              {/* Direction-aware underline */}
              <span
                className={`
                  absolute bottom-0 left-0 h-[2px] w-full bg-green-600
                  transform transition-transform duration-300 ease-in-out
                  ${
                    active === item
                      ? direction === "down"
                        ? "scale-x-100 origin-left"
                        : "scale-x-100 origin-right"
                      : "scale-x-0 origin-left group-hover:scale-x-100"
                  }
                `}
              />
            </button>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            className="text-gray-400 text-2xl"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/40 backdrop-blur-md shadow-md flex flex-col items-center gap-4 py-4">
          {sections.map((item) => (
            <button
              key={item}
              className={`capitalize ${
                active === item
                  ? "text-green-600 font-semibold"
                  : "text-gray-400"
              }`}
              onClick={() => scrollToSection(item)}
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
