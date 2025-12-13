"use client";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import FeaturesSection from "@/components/custom/techStack/page";

// ======================
// Animation Variants
// ======================

// Dot background fades in only
const bgVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
};

// Each circle scales in one after the other
const circleVariants: Variants = {
  hidden: { scale: 0 },
  visible: (i: number = 0) => ({
    scale: 1,
    transition: {
      delay: i * 0.25,
      type: "spring",
      stiffness: 120,
      damping: 8,
      bounce: 0.45,
      duration: 0.7,
    },
  }),
};

const ugandaImageVariants: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: (i: number = 0) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.20,
      duration: 0.45,
      ease: "easeOut",
    },
  }),
};

// NEW SLIDE UP ANIMATION
const slideUpVariants: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export default function AboutPage({ country }: { country: string }) {
  const content = {
    uganda: {
      header:
        "A Fanaka subsidiary dedicated to expanding financial inclusion and empowering businesses across Uganda.",
      body: () => (
        <div className="space-y-3">
          <p>
            <strong>Fanikiwa</strong> is a proud subsidiary of{" "}
            <strong>Fanaka Technologies</strong>, bringing years of fintech
            innovation, customer trust, and operational excellence into{" "}
            <strong>Uganda</strong>.
          </p>

          <p>
            After a strong and transformative run in <strong>Zambia</strong>, we
            expanded our mission into <strong>Uganda</strong> to continue
            bridging financial gaps and empowering underserved communities.
          </p>
        </div>
      ),
    },

    zambia: {
      header:
        "Fanaka’s community-led financial innovation uplifts Zambia’s MSMEs especially women and youth owned ones.",
      body: () => (
        <div className="space-y-4">
          <h2 className="text-xl text-fanakaPrimary font-semibold">
            The Opportunity Statement
          </h2>

          <p className="text-fg text-2sm">
            In Zambia, 27.3% of adults own MSMEs; 98.8% are micro-sized; 95.6%
            operate informally and face immense barriers such as limited access
            to financial services, high borrowing costs, and low financial
            literacy.
          </p>

          <p className="text-fanakaPrimary text-xl font-semibold">Key Challenges</p>

          <ul className="text-fg text-2sm list-disc list-inside space-y-1">
            <li>Only 6.5% of MSMEs have bank accounts.</li>
            <li>69% rely on personal funds for growth.</li>
            <li>Low financial record-keeping (28%).</li>
            <li>Significant vulnerability to economic shocks.</li>
          </ul>
        </div>
      ),
    },
  };

  const safeCountry = country || "Zambia"; // fallback to uganda if country is undefined
  const selected = content[safeCountry as keyof typeof content];


  return (
    <main className="min-h-screen w-full text-gray-800">

      {/* HEADER */}
      <section className="w-full py-20">
        <div className="container mx-auto px-6 text-center">
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-gray-600">
            {selected?.header}
          </p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="w-full py-16">
        <div className="w-full mx-auto px-6 lg:px-0 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          {/* LEFT TEXT SECTION */}
          <div className="text-center lg:text-left lg:pl-10">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 relative inline-block">
              About us
            </h2>

            {/* ADDED ANIMATION HERE */}
            <motion.div
              variants={slideUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              className="text-gray-600 leading-relaxed mb-6 space-y-4"
            >
              {selected?.body()}
            </motion.div>

            <button className="bg-green-600 text-white px-5 py-2 rounded-full hover:bg-green-700 transition">
              Discover Our Markets
            </button>
          </div>

          {/* RIGHT – COUNTRY-DEPENDENT LAYOUT */}
          {country === "uganda" ? (
            <div 
              key="uganda-block" 
              className="flex items-center justify-center gap-4"
            >
              <motion.div
                className="flex items-center justify-center gap-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
              >
                {/* First image */}
                <motion.div
                  custom={0}
                  variants={ugandaImageVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.3 }}
                  className="w-38 h-54 rounded-3xl overflow-hidden shadow-md"
                >
                  <Image
                    src="/portrait-smiling-woman-sell-food-market-kingston-jamaica.jpg"
                    alt="Story Image 1"
                    width={300}
                    height={500}
                    className="object-cover w-full h-full"
                  />
                </motion.div>

                {/* Second image */}
                <motion.div
                  custom={1}
                  variants={ugandaImageVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.3 }}
                  className="w-42 h-62 rounded-3xl overflow-hidden shadow-lg"
                >
                  <Image
                    src="/black-people-tablet-farm-with-chicken-agriculture-together-live-stock-outdoor-crops-happy-men-working-together-farming-sustainability-growth-supply-chain-countryside.jpg"
                    alt="Story Image 2"
                    width={300}
                    height={500}
                    className="object-cover w-full h-full"
                  />
                </motion.div>

                {/* Third image */}
                <motion.div
                  custom={2}
                  variants={ugandaImageVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.3 }}
                  className="w-38 h-54 rounded-3xl overflow-hidden shadow-md"
                >
                  <Image
                    src="/backgrounds-market-woman.jpg"
                    alt="Story Image 3"
                    width={300}
                    height={500}
                    className="object-cover w-full h-full"
                  />
                </motion.div>
              </motion.div>
            </div>
          ) : (
            <div
              key="zambia-block"
              className="relative flex items-center justify-center py-10"
            >

              {/* BG DOTS */}
              <motion.div
                variants={bgVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <img
                  src="/bg polka.svg"
                  alt="pattern"
                  className="w-[550px] opacity-60"
                />
              </motion.div>

              {/* BIG CIRCLE */}
              <motion.div
                custom={0}
                variants={circleVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                className="relative w-[300px] h-[300px] rounded-full overflow-hidden shadow-xl z-10"
              >
                <Image
                  src="/portrait-person-owning-managing-their-own-business.jpg"
                  alt="main child"
                  fill
                  className="object-cover"
                />
              </motion.div>

              {/* LEFT SMALL CIRCLE */}
              <motion.div
                custom={1}
                variants={circleVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                className="absolute left-[25%] bottom-[10%] w-[120px] h-[120px] rounded-full overflow-hidden shadow-lg z-20"
              >
                <Image
                  src="/medium-shot-woman-posing-market.jpg"
                  alt="left children"
                  fill
                  className="object-cover"
                />
              </motion.div>

              {/* RIGHT SMALL CIRCLE */}
              <motion.div
                custom={2}
                variants={circleVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                className="absolute right-[25%] bottom-[15%] w-[130px] h-[130px] rounded-full overflow-hidden shadow-lg z-20"
              >
                <Image
                  src="/freepik__talk__8769.jpeg"
                  alt="right children"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
          )}

        </div>
      </section>

      <section className="w-full my-20 py-10">
        <FeaturesSection />
      </section>

    </main>
  );
}
