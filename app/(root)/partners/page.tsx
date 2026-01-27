'use client';
import React, { useState, useRef, useEffect } from "react";
import { motion, Variants, useInView } from "framer-motion";
import dynamic from "next/dynamic";

const FloatingButton = dynamic(() => import("@/components/ui/floatingButton/page"));
const PartnerApplicationForm = dynamic(() => import("@/components/custom/partnerForm/page"));

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
    "#FFBF3C",
    "#3C4F46",
    "#98de9aff",
    "#FFBF3C",
    "#00594E",
    "#F5FFEF",
  ];

  const positionsMd = [
    { top: 5, left: 10, size: 130 },
    { top: 5, left: 55, size: 130 },
    { top: 35, left: 10, size: 130 },
    { top: 35, left: 55, size: 130 },
    { top: 65, left: 10, size: 130 },
    { top: 65, left: 55, size: 130 },
  ];

  const positionsLg = [
    { top: 18, left: 15, size: 175 },
    { top: 12, left: 55, size: 115 },
    { top: 40, left: 40, size: 140 },
    { top: 30, left: 70, size: 180 },
    { top: 65, left: 57, size: 150 },
    { top: 72, left: 27, size: 120 },
    { top: 69, left: 55, size: 145 },
  ];

  const [showForm, setShowForm] = useState(false);
  const [formInteracted, setFormInteracted] = useState(false);
  const [revertTimer, setRevertTimer] = useState<number | null>(null);
  const [windowWidth, setWindowWidth] = useState<number>(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const fixedPositions = windowWidth >= 1024 ? positionsLg : positionsMd;

  const handleOpenForm = () => {
    setShowForm(true);
    setFormInteracted(false);

    const timer = window.setTimeout(() => {
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

  /** 👇 background reveal trigger */
  const sectionRef = useRef<HTMLDivElement>(null);
  const isSectionInView = useInView(sectionRef, {
    margin: "-20% 0px -20% 0px",
  });

  const bgVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const textRef = useRef<HTMLDivElement>(null);
  const isTextInView = useInView(textRef, { margin: "-20% 0px -20% 0px" });

  const textVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const logosContainerVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  };

  const logoVariants: Variants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 120, damping: 12 },
    },
  };

  return (
    <motion.div
      ref={sectionRef}
      className="relative w-full min-h-screen flex items-center bg-gradient-to-br from-[#9bd46a] to-[#0b3866]"
      variants={bgVariants}
      initial="hidden"
      animate={isSectionInView ? "visible" : "hidden"}
    >
      <div className="relative w-full lg:flex justify-center items-center px-4 pt-10">
        {!showForm && (
          <motion.div
            ref={textRef}
            variants={textVariants}
            initial="hidden"
            animate={isTextInView ? "visible" : "hidden"}
            className="container mx-auto md:px-6"
          >
            <h1 className="md:text-4xl text-2xl text-primaryD font-semibold mb-6 text-center md:text-left">
              Value Proposition for Key Stakeholders
            </h1>
            <p className="text-gray-800 text-center md:text-left">
              For our MSME clients, Fanaka offers a pathway to financial
              empowerment through education, tailored financial products,
              and risk management solutions. Our stakeholders, including
              investors and partners, are positioned to contribute to a
              scalable impact, driving sustainable economic development and
              gaining potential returns on investment.
            </p>
            <div className="flex justify-center mt-8 pb-10">
              <FloatingButton
                text="Become a Partner"
                href="#"
                onClick={handleOpenForm}
              />
            </div>
          </motion.div>
        )}

        {showForm && (
          <div className="container mx-auto pt-16 md:px-20 pb-10">
            <div className="bg-flp p-6 rounded-xl shadow-lg">
              <PartnerApplicationForm
                onInteract={handleFormInteraction}
                onSubmit={handleFormSubmit}
              />
            </div>
          </div>
        )}

        <motion.div
          className="relative w-full h-[500px] overflow-hidden"
          variants={logosContainerVariants}
          initial="hidden"
          animate={isSectionInView ? "visible" : "hidden"}
        >
          {logos.map((src, i) => {
            const pos = fixedPositions[i];
            return (
              <motion.div
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
                variants={logoVariants}
              >
                <img
                  src={src}
                  alt="logo"
                  className="w-full h-full object-contain"
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </motion.div>
  );
}
