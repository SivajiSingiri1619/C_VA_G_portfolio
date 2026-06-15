import { motion } from "framer-motion";
import { fadeInUp } from "../../utils/animations";

export default function SectionTitle({ title, subtitle, align = "center", className = "" }) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className={`mb-16 ${align === "center" ? "text-center" : "text-left"} ${className}`}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-deep-navy mb-4 tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-text-secondary text-lg max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
      <div className={`mt-4 h-1 w-16 rounded-full gradient-blue ${align === "center" ? "mx-auto" : ""}`} />
    </motion.div>
  );
}
