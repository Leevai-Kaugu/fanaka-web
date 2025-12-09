"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Section from "@/components/custom/section/page";
import FloatingButton from "@/components/ui/floatingButton/page";
import PartnerApplicationForm from "@/components/custom/partnerForm/page";
import ButtonTwo from "@/components/ui/buttonTwo/page";

type Position = {
  top: number;
  left: number;
  size: number;
};

export default function Partners() {
  const logos = [
    "/Apex foundry.png",
    "/axesfin.png",
    "/Bestlife-Logo.png",
    "/cellulant.png",
    "/digital africa.png",
    "/LearnInk logo.png",
  ];

  const bgColors = [
    "#F5F8FF",
    "#98de9aff",
    "#F5FFF8",
    "#FFFDF5",
    "#a1a1a1ff",
    "#F5FFFF",
  ];

  const fixedPositions: Position[] = [
    { top: 18, left: 35, size: 115 },
    { top: 12, left: 55, size: 105 },
    { top: 40, left: 45, size: 120 },
    { top: 40, left: 67, size: 110 },
    { top: 62, left: 34, size: 100 },
    { top: 65, left: 60, size: 95 },
  ];

  const [showForm, setShowForm] = useState(false);
  const [formInteracted, setFormInteracted] = useState(false);
  const [revertTimer, setRevertTimer] = useState<NodeJS.Timeout | null>(null);

  const handleOpenForm = () => {
    setShowForm(true);
    setFormInteracted(false);

    const timer = setTimeout(() => {
      if (!formInteracted) setShowForm(false);
    }, 10000);

    setRevertTimer(timer);
  };

  const handleFormInteraction = () => {
    setFormInteracted(true);
    if (revertTimer) clearTimeout(revertTimer);
  };

  const handleFormSubmit = () => {
    setShowForm(false);
    setFormInteracted(false);
  };

  return (
    <div className="bg-white w-full min-h-screen flex items-center">

      {/* NORMAL CONTENT (unchanged) */}
      {!showForm && (
        <div className="container mx-auto px-6 pt-16 pb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Our Partners
          </h2>

          <p className="text-lg text-center max-w-3xl mx-auto text-gray-600 ">
            For our MSME clients, Fanaka offers a pathway to financial
            empowerment through education, tailored financial
            products, and risk management solutions.
          </p>

          <div className="flex justify-center mt-8">
            <FloatingButton text="Become a Partner" href="#" onClick={handleOpenForm} />
          </div>
        </div>
      )}

      {/* FORM WITH ANIMATION — layout preserved */}
      <AnimatePresence mode="wait">
        {showForm && (
          <motion.div
            key="form"
            initial={{ opacity: 0, scale: 0.8, rotate: -8 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.9, rotate: 8 }}
            transition={{
              type: "spring",
              stiffness: 180,
              damping: 12,
              duration: 0.45,
            }}
            className="container mx-auto pt-16 px-20 pb-10"
          >
            <div className="bg-white p-6">
              <PartnerApplicationForm
                onInteract={handleFormInteraction}
                onSubmit={handleFormSubmit}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* LOGO CIRCLES (unchanged) */}
      <div className="relative w-full h-[500px] bg-white overflow-hidden">
        {logos.map((src, i) => {
          const pos = fixedPositions[i];

          return (
            <div
              key={i}
              className="absolute flex items-center justify-center rounded-full shadow-lg p-4"
              style={{
                top: `${pos.top}%`,
                left: `${pos.left}%`,
                width: `${pos.size}px`,
                height: `${pos.size}px`,
                transform: "translate(-50%, -50%)",
                backgroundColor: bgColors[i],
              }}
            >
              <img src={src} alt="logo" className="w-full h-full object-contain" />
            </div>
          );
        })}
      </div>

    </div>
  );
}
