'use client';
import React, { useState, useRef } from "react";
import { motion, Variants, useInView } from "framer-motion";
import FloatingButton from "@/components/ui/floatingButton/page";
import PartnerApplicationForm from "@/components/custom/partnerForm/page";

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

  const fixedPositions = [
    { top: 18, left: 35, size: 175 },
    { top: 12, left: 55, size: 115 },
    { top: 45, left: 47, size: 140 },
    { top: 40, left: 67, size: 150 },
    { top: 68, left: 34, size: 120 },
    { top: 65, left: 59, size: 115 },
  ];

  const [showForm, setShowForm] = useState(false);
  const [formInteracted, setFormInteracted] = useState(false);
  const [revertTimer, setRevertTimer] = useState<NodeJS.Timeout | null>(null);

  const handleOpenForm = () => {
    setShowForm(true);
    setFormInteracted(false);

    const timer = setTimeout(() => {
      if (!formInteracted) setShowForm(false);
    }, 7007);

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

  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { margin: '-20% 0px -20% 0px' });

  const contentVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeInOut' } },
  };

  return (
    <motion.div
      ref={ref}
      variants={contentVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="relative w-full min-h-screen flex items-center"
    >

      {/* 🔥 BACKGROUND IMAGE (Behind Everything) */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/zambia dotted-01.png"
          alt="partners background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative w-full flex">
        {!showForm && (
          <div className="container mx-auto px-6 pt-16 pb-10">
            <h1 className="lg:text-[2vw] md:text-[3vw] text-[4.5vw] text-fanakaPrimary">
              Value Proposition for Key Stakeholders
            </h1>

            <p className="text-gray-600">
              For our MSME clients, Fanaka offers a pathway to financial
              empowerment through education, tailored financial products,
              and risk management solutions. Our stakeholders, including
              investors and partners, are positioned to contribute to a
              scalable impact, driving sustainable economic development and
              gaining potential returns on investment.
            </p>

            <div className="flex justify-center mt-8">
              <FloatingButton
                text="Become a Partner"
                href="#"
                onClick={handleOpenForm}
              />
            </div>
          </div>
        )}

        {showForm && (
          <div className="container mx-auto pt-16 px-20 pb-10">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <PartnerApplicationForm
                onInteract={handleFormInteraction}
                onSubmit={handleFormSubmit}
              />
            </div>
          </div>
        )}

        {/* LOGOS */}
        <div className="relative w-full h-[500px] overflow-hidden">
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
                <img
                  src={src}
                  alt="logo"
                  className="w-full h-full object-contain"
                />
              </div>
            );
          })}
        </div>
      </div>

    </motion.div>
  );
}
