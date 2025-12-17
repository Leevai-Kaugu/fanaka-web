'use client';

import React, { useRef, useState } from 'react';
import { motion, Variants, useInView } from 'framer-motion';
import { FiPhone } from "react-icons/fi";
import ContactModal from '../contactModal/page';

type Country = "UG" | "ZM";

interface ContactButtonProps {
  country: Country;
}

export default function ContactButton({ country }: ContactButtonProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount: 0.2 });

  const circleVariants: Variants = {
    hidden: { scale: 0 },
    visible: { scale: 1, transition: { type: "spring", stiffness: 200, damping: 12, duration: 0.4 } }
  };

  const bgVariants: Variants = {
    hidden: { scaleX: 0 },
    visible: { scaleX: 1, transition: { delay: 0.4, duration: 0.6, ease: "easeInOut" } }
  };

  return (
    <>
      <div
        ref={ref}
        className="relative inline-block cursor-pointer"
        onClick={() => setModalOpen(true)}
      >
        <motion.div
          className="absolute right-0 top-0 rounded-full bg-fanakaPrimary w-12 h-12 z-20 flex items-center justify-center"
          variants={circleVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <FiPhone className="text-white text-lg" />
        </motion.div>

        <motion.div
          className="relative block rounded-full shadow-lg flex items-center justify-center px-10 py-3 overflow-hidden origin-right z-10"
          variants={bgVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <span className="pr-10 text-gray-600">Contact Us</span>
        </motion.div>
      </div>

      {modalOpen && <ContactModal country={country} onClose={() => setModalOpen(false)} />}
    </>
  );
}
