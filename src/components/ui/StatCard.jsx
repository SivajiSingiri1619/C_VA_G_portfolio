import { motion } from "framer-motion";
import { fadeInUp } from "../../utils/animations";

export default function StatCard({ number, label, icon }) {
  return (
    <motion.div
      variants={fadeInUp}
      className="glass rounded-2xl p-6 text-center"
      whileHover={{
        y: -4,
        boxShadow: "0 16px 48px rgba(0, 0, 0, 0.08)",
        transition: { duration: 0.3 },
      }}
      style={{ boxShadow: "0 8px 32px rgba(0, 0, 0, 0.06)" }}
    >
      <div className="text-3xl mb-2">{icon}</div>
      <div className="text-3xl font-bold gradient-text mb-1">{number}</div>
      <div className="text-sm text-text-secondary font-medium">{label}</div>
    </motion.div>
  );
}
