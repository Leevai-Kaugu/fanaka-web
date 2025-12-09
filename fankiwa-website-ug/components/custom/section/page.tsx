// components/Section.tsx
import { motion } from "framer-motion";

export default function Section({
  id,
  children,
  className = "",
}: {
  id: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.section
      id={id}
      className={`min-h-screen flex items-center justify-center ${className}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, type: "spring", bounce: 0.3 }}
    >
      {children}
    </motion.section>
  );
}
