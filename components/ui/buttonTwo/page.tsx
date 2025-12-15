"use client";
import { useState } from "react";
import Link from "next/link";

interface ButtonTwoProps {
  text: string;
  href: string;
}

export default function ButtonTwo({ text, href }: ButtonTwoProps) {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);
  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCoords({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <Link href={href} className="relative inline-block">
      <button
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
        className="relative overflow-hidden mb-[20px] lg:mb-0 lg:my-[20px] mx-5 py-[10px] px-[40px] text-foreground cursor-pointer hover:text-background transition border border-foreground  hover:bg-fanakaPrimaryD"
      >
        <span
          className="absolute w-40 h-40 rounded-full bg-foreground opacity-50 pointer-events-none transform -translate-x-1/2 -translate-y-1/2 transition-all duration-800 z-0 ease-in"
          style={{
            left: coords.x,
            top: coords.y,
            transform: `translate(-50%, -50%) scale(${isHovered ? 4 : 0})`,
            opacity: isHovered ? 1 : 0,
          }}
        />
        <span className="relative z-10">{text}</span>
      </button>
    </Link>
  );
}
