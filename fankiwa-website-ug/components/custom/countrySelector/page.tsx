"use client";
import { TbWorld } from "react-icons/tb";
import { useState, useEffect } from "react";

interface Props {
  onSelect: (country: string) => void;
}

export default function CountrySelectorDropdown({ onSelect }: Props) {
  const [open, setOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);

  // Load saved country on mount
  useEffect(() => {
    const saved = localStorage.getItem("userCountry");
    if (saved) {
      setSelectedCountry(saved);
      onSelect(saved);
    }
  }, [onSelect]);

  const handleSelect = (country: string) => {
    setSelectedCountry(country);
    onSelect(country);
    localStorage.setItem("userCountry", country);
    setOpen(false);
  };

  return (
    <div className="relative inline-block">
      {/* Custom "Change region" div as the button */}
      <div
        className="flex items-center gap-2 cursor-pointer text-foreground"
        onClick={() => setOpen(!open)}
      >
        <TbWorld className="w-5 h-5" />
        <span className="text-sm">
          {selectedCountry
            ? `Country: ${selectedCountry.charAt(0).toUpperCase() + selectedCountry.slice(1)}`
            : "Change country"}
        </span>
        <span>▼</span>
      </div>

      {/* Dropdown Menu */}
      {open && (
        <div className="absolute mt-2 w-48 bg-white border rounded-md shadow-lg z-50">
          <button
            className="w-full text-left px-4 py-2 hover:bg-gray-100 text-gray-400"
            onClick={() => handleSelect("uganda")}
          >
            Uganda
          </button>
          <button
            className="w-full text-left px-4 py-2 hover:bg-gray-100 text-gray-400"
            onClick={() => handleSelect("zambia")}
          >
            Zambia
          </button>
        </div>
      )}
    </div>
  );
}
