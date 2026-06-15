import { motion } from "framer-motion";

export default function GlassCard({ children, className = "", hover = true, padding = "p-6" }) {
  return (
    <motion.div
      className={`glass rounded-2xl ${padding} ${className}`}
      whileHover={
        hover
          ? {
              y: -6,
              boxShadow: "0 20px 60px rgba(0, 0, 0, 0.1)",
              transition: { duration: 0.3 },
            }
          : undefined
      }
      style={{
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.06)",
      }}
    >
      {children}
    </motion.div>
  );
}
