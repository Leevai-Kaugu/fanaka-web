'use client';
import { useState } from "react";

interface MainButtonProps {
  text: string;
  href?: string; // like "#partners"
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function MainButton({ text, href, onClick }: MainButtonProps) {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);
  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCoords({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault(); // prevent default navigation
    if (!href || !href.startsWith("#")) return;

    const id = href.substring(1);
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <button
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      className="relative overflow-hidden my-[20px] py-[10px] px-[40px] 
                 bg-fanakaPrimary text-background dark:text-foreground 
                 cursor-pointer hover:text-foreground dark:hover:text-background transition"
    >
      <span
        className="absolute w-40 h-40 rounded-full bg-background dark:bg-foreground 
                   opacity-50 pointer-events-none transition-all duration-800 z-0 ease-in"
        style={{
          left: coords.x,
          top: coords.y,
          transform: `translate(-50%, -50%) scale(${isHovered ? 4 : 0})`,
          opacity: isHovered ? 1 : 0,
        }}
      />
      <span className="relative z-10">{text}</span>
    </button>
  );
}
