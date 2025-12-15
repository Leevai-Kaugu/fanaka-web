"use client";

import dynamic from "next/dynamic";
import { motion, Variants } from "framer-motion";

// Lazy load buttons to save initial render time
const MainButton = dynamic(() => import("@/components/ui/mainButton/page"));
const ButtonTwo = dynamic(() => import("@/components/ui/buttonTwo/page"));

export default function Hero() {
  // Variants for text
  const textVariant: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 12 },
    },
  };

  const paragraphVariant: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 12, delay: 0.2 },
    },
  };

  const buttonVariant: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 12, delay: 0.4 },
    },
  };

  return (
    <section className="relative bg-background w-full min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 opacity-80 overflow-hidden">
        <img
          src="/front-view-woman-carrying-harvest.jpg"
          alt="Hero background"
          className="w-full h-full object-cover filter blur-[3px]"
          width={800}
          height={500}
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        {/* Heading */}
        <motion.h1
          className="text-4xl md:text-6xl font-bold tracking-tight text-white"
          variants={textVariant}
          initial="hidden"
          whileInView="visible"       // Animate every time it comes into view
          viewport={{ once: false }} // Allow animation to repeat on scroll back
        >
          Growing with Businesses Across Africa
        </motion.h1>

        {/* Paragraph */}
        <motion.p
          className="mt-6 text-lg md:text-xl text-gray-200 max-w-2xl mx-auto"
          variants={paragraphVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
        >
          Unlock capital, grow your business, and access affordable financing
          designed for entrepreneurs and SMEs.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="mt-10 lg:flex justify-center gap-4"
          variants={buttonVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
        >
          <MainButton text="GET STARTED" href="/signup" />
          <ButtonTwo text="LEARN MORE" href="/learn-more" />
        </motion.div>
      </div>
    </section>
  );
}
