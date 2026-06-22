import { motion } from "framer-motion";
import { fadeInUp, fadeInRight, staggerContainer } from "../../utils/animations";
import TypingAnimation from "../ui/TypingAnimation";
import Button from "../ui/Button";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { FiDownload, FiArrowRight } from "react-icons/fi";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center gradient-hero overflow-hidden"
    >
      {/* Decorative Orbs */}
      <div className="orb orb-blue w-96 h-96 top-20 -left-48 animate-[float_6s_ease-in-out_infinite]" />
      <div className="orb orb-lavender w-80 h-80 bottom-20 right-10 animate-[float_6s_ease-in-out_3s_infinite]" />
      <div className="orb orb-mint w-64 h-64 top-40 right-1/3 animate-[pulse-soft_4s_ease-in-out_infinite]" />

      <div className="container-custom relative z-10 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="order-2 lg:order-1"
          >
            {/* Badge */}
            <motion.div variants={fadeInUp} className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-blue/10 text-accent-blue text-sm font-medium">
                <span className="w-2 h-2 rounded-full bg-accent-blue animate-pulse" />
                Available for opportunities
              </span>
            </motion.div>

            {/* Greeting */}
            <motion.p
              variants={fadeInUp}
              className="text-lg text-text-secondary font-medium mb-2"
            >
              👋 Hello, I'm
            </motion.p>

            {/* Name */}
            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-4"
            >
              <span className="text-deep-navy">Singiri</span>{" "}
              <span className="gradient-text">Sivaji</span>
            </motion.h1>

            {/* Role */}
            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl text-deep-navy font-semibold mb-4"
            >
              Full Stack Developer · MERN Stack
            </motion.p>

            {/* Typing Animation */}
            <motion.div variants={fadeInUp} className="mb-8">
              <TypingAnimation />
            </motion.div>

            {/* Tagline */}
            <motion.p
              variants={fadeInUp}
              className="text-text-secondary text-base mb-8 max-w-lg leading-relaxed"
            >
              Computer Science Undergraduate building scalable web applications
              with MongoDB, Express.js, React.js & Node.js. Passionate about
              clean code and problem-solving.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap gap-4 mb-8"
            >
              <Button variant="primary" href={`${import.meta.env.BASE_URL}resume.pdf`} icon={<FiDownload />}>
                Download Resume
              </Button>
              <Button
                variant="secondary"
                href="#contact"
                icon={<FiArrowRight />}
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Let's Connect
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={fadeInUp}
              className="flex items-center gap-3"
            >
              <span className="text-sm text-text-secondary mr-2">Find me on</span>
              <a
                href="https://github.com/SivajiSingiri1619"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-10 h-10 rounded-xl bg-white shadow-soft flex items-center justify-center text-text-secondary hover:text-accent-blue hover:shadow-medium transition-all duration-200"
              >
                <FaGithub size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/sivaji-singiri-252926290/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-xl bg-white shadow-soft flex items-center justify-center text-text-secondary hover:text-accent-blue hover:shadow-medium transition-all duration-200"
              >
                <FaLinkedinIn size={18} />
              </a>
              <a
                href="mailto:singirisivaji@gmail.com"
                aria-label="Email"
                className="w-10 h-10 rounded-xl bg-white shadow-soft flex items-center justify-center text-text-secondary hover:text-accent-blue hover:shadow-medium transition-all duration-200"
              >
                <HiMail size={18} />
              </a>
            </motion.div>
          </motion.div>

          {/* Right — Profile Photo — Cropped & Zoomed to face */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            animate="visible"
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative">
              {/* Glow ring */}
              <motion.div
                animate={{ scale: [1, 1.04, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -inset-4 rounded-full gradient-border opacity-25 blur-md"
              />
              <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-[22rem] lg:h-[22rem] rounded-full overflow-hidden shadow-elevated ring-4 ring-white/50"
                   style={{ animation: "glow-pulse 4s ease-in-out infinite" }}>
                <img
                  src={`${import.meta.env.BASE_URL}images/profile.jpg`}
                  alt="Singiri Sivaji — Full Stack Developer"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: "center 20%", transform: "scale(1.3)" }}
                  loading="eager"
                />
              </div>
              {/* Floating Tech Badges */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 glass rounded-xl px-3 py-2 shadow-medium"
              >
                <span className="text-sm font-semibold text-deep-navy">⚛️ React</span>
              </motion.div>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-2 -left-6 glass rounded-xl px-3 py-2 shadow-medium"
              >
                <span className="text-sm font-semibold text-deep-navy">🟢 Node.js</span>
              </motion.div>
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/2 -right-8 glass rounded-xl px-3 py-2 shadow-medium"
              >
                <span className="text-sm font-semibold text-deep-navy">🍃 MongoDB</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
