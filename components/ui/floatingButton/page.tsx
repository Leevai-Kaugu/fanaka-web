"use client";
import { useState } from "react";
import Link from "next/link";

interface FloatingButtonProps {
  text: string;
  href: string;
  onClick?: () => void;
}

export default function FloatingButton({ text, href, onClick }: FloatingButtonProps) {
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
        onClick={onClick}
        className="relative overflow-hidden my-[20px] py-[10px] px-[40px] bg-fanakaPrimary text-foreground cursor-pointer hover:text-foreground hover:dark:text-background transition rounded-full shadow-xl"
      >
        <span
          className="absolute w-40 h-40 rounded-full bg-background dark:bg-foreground opacity-50 pointer-events-none transform -translate-x-1/2 -translate-y-1/2 transition-all duration-800 z-0 ease-in"
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
