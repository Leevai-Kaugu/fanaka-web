'use client';
import { useState } from "react";
import Link from "next/link";

interface MainButtonProps {
  text: string;
  href?: string; // make href optional
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void; // optional click handler
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

  // If href is provided, wrap in Link; otherwise, just render button
  const buttonContent = (
    <button
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      className="relative overflow-hidden my-[20px] py-[10px] px-[40px] bg-fanakaPrimary text-foreground cursor-pointer hover:text-background transition"
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
  );

  if (href) {
    return <Link href={href} className="relative inline-block">{buttonContent}</Link>;
  }

  return buttonContent;
}
