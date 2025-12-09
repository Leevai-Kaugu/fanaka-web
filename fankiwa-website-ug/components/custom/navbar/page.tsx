"use client";
import { useEffect, useState } from "react";

type Section = "home" | "about" | "partners" | "careers";

export default function Navbar() {
  const [active, setActive] = useState<Section>("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [direction, setDirection] = useState<"up" | "down">("down"); // NEW

  const sections: Section[] = ["home", "about", "partners", "careers"];

  // Track scroll + direction
  useEffect(() => {
    let lastY = window.scrollY;

    const handleScroll = () => {
      const currentY = window.scrollY;

      // detect direction
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
    if (element) {
      const navbarHeight = 80;
      const top =
        element.getBoundingClientRect().top + window.scrollY - navbarHeight;

      window.scrollTo({
        top,
        behavior: "smooth",
      });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/20 backdrop-blur-md shadow-sm">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-xl font-bold">Fanikiwa</div>

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

              {/* UNDERLINE WITH DIRECTION-AWARE ANIMATION */}
              <span
                className={`
                  absolute bottom-0 left-0 h-[2px] w-full bg-fp
                  transform transition-transform duration-300 ease-in-out

                  ${
                    active === item
                      ? direction === "down"
                        ? "scale-x-100 origin-left"  // scrolling down
                        : "scale-x-100 origin-right" // scrolling up
                      : "scale-x-0 origin group-hover:scale-x-100 group-hover:origin-left"
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
