import { motion } from "framer-motion";
import { buttonHover } from "../../utils/animations";

export default function Button({ children, variant = "primary", href, onClick, icon, className = "" }) {
  const baseClasses =
    "inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm tracking-wide transition-all duration-300 cursor-pointer";

  const variants = {
    primary:
      "bg-gradient-to-r from-accent-blue to-[#7B61FF] text-white shadow-md hover:shadow-lg hover:shadow-accent-blue/25",
    secondary:
      "bg-white text-deep-navy border-2 border-gray-200 hover:border-accent-blue hover:text-accent-blue shadow-soft",
    ghost:
      "text-accent-blue hover:bg-accent-blue/5",
  };

  const Component = href ? "a" : "button";

  return (
    <motion.div
      variants={buttonHover}
      initial="rest"
      whileHover="hover"
      whileTap="tap"
      className="inline-block"
    >
      <Component
        href={href}
        onClick={onClick}
        className={`${baseClasses} ${variants[variant]} ${className}`}
        target={href?.startsWith("http") ? "_blank" : undefined}
        rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
      >
        {icon && <span className="text-lg">{icon}</span>}
        {children}
      </Component>
    </motion.div>
  );
}
