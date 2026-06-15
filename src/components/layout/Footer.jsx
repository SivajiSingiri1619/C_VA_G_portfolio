import { motion } from "framer-motion";
import { fadeInUp } from "../../utils/animations";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { FiArrowUp } from "react-icons/fi";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="container-custom py-12">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-6"
        >
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg gradient-blue flex items-center justify-center text-white font-bold text-sm">
              SS
            </div>
            <div>
              <p className="text-sm font-semibold text-deep-navy">
                Designed & Built by Singiri Sivaji
              </p>
              <p className="text-xs text-text-secondary">
                Built with React, Tailwind CSS & ❤️
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/SivajiSingiri1619"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-10 h-10 rounded-xl bg-bg-secondary flex items-center justify-center text-text-secondary hover:text-accent-blue hover:bg-accent-blue/10 transition-all duration-200"
            >
              <FaGithub size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/sivaji-singiri-252926290/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-10 h-10 rounded-xl bg-bg-secondary flex items-center justify-center text-text-secondary hover:text-accent-blue hover:bg-accent-blue/10 transition-all duration-200"
            >
              <FaLinkedinIn size={18} />
            </a>
            <a
              href="mailto:contact@sivaji.dev"
              aria-label="Email"
              className="w-10 h-10 rounded-xl bg-bg-secondary flex items-center justify-center text-text-secondary hover:text-accent-blue hover:bg-accent-blue/10 transition-all duration-200"
            >
              <HiMail size={18} />
            </a>
          </div>

          {/* Copyright + Back to Top */}
          <div className="flex items-center gap-4">
            <p className="text-sm text-text-secondary">
              © {new Date().getFullYear()} Singiri Sivaji
            </p>
            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-xl bg-bg-secondary flex items-center justify-center text-text-secondary hover:text-accent-blue hover:bg-accent-blue/10 transition-all duration-200 cursor-pointer"
              aria-label="Back to top"
            >
              <FiArrowUp size={18} />
            </button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
