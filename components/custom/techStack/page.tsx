'use client';

import React, { useRef } from 'react';
import { motion, Variants, useInView } from 'framer-motion';

interface Feature {
  title: string;
  description: string;
  logoSrc: string;
}

const features: Feature[] = [
  {
    title: 'Kula App',
    description:
      'a customer-facing mobile app that enables MSMEs to apply for loans, make repayments, access financial literacy training, microinsurance, and manage their credit journey.',
    logoSrc: '/kula-app-logo-01.png',
  },
  {
    title: 'Zanga FE App',
    description:
      'a productivity tool for our Field Entrepreneurs to onboard, support, and monitor MSME clients in real time.',
    logoSrc: '/Zanga.png',
  },
  {
    title: 'Fanaka Konnekt',
    description:
      'our in-house core banking and loan management system that centralizes customer data, configures loan products, automates disbursements and repayments, and supports compliance and reporting.',
    logoSrc: '/fanaka-konnect-logo-01.png',
  },
  {
    title: 'Fanaka I.Q',
    description:
      'our data intelligence engine that aggregates over 200,000 behavioral, demographic, and transactional data points to power a proprietary MSME credit scoring model and drive product optimization.',
    logoSrc: '/fanaka-iq-logo-01.png',
  },
];

// Animation variants
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeInOut' } },
};

const FeaturesSection: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { margin: '-20% 0px -20% 0px' }); // trigger when ~20% visible

  return (
    <section className="w-full text-center py-16">
      <div className="mx-auto px-4">
        <h5 className="text-fg text-sm font-semibold mb-2">Solution</h5>
        <h2 className="text-3xl font-bold text-fanakaPrimary mb-4">
          Our Awesome Tech Stack
        </h2>
        <p className="max-w-2xl mx-auto text-fg mb-12">
          Our Fanaka digital platform is an integrated suite of proprietary technologies designed to power inclusive finance for MSMEs. It includes
        </p>

        <div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="relative flex flex-col items-center text-center"
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'} // restart animation when leaving & entering
            >
              <div className="mb-4 h-20 w-20 rounded-lg flex items-center justify-center">
                <img
                  src={feature.logoSrc}
                  alt={`${feature.title} logo`}
                  className="h-full w-full object-contain"
                />
              </div>
              <h4 className="font-semibold text-fg text-lg mb-2">{feature.title}</h4>
              <p className="text-fg text-sm">{feature.description}</p>
              {index < features.length - 1 && (
                <div className="hidden lg:block absolute top-[40px] right-[-60px] w-[80px] border-t-2 border-dashed border-green-400" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
