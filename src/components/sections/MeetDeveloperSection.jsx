import { motion } from "framer-motion";
import { fadeInUp, fadeInRight, staggerContainer } from "../../utils/animations";
import SectionTitle from "../ui/SectionTitle";

const values = [
  {
    icon: "🧠",
    title: "Clean Architecture",
    description: "Writing code that's maintainable, testable, and built to scale.",
  },
  {
    icon: "🎯",
    title: "User-Centric Design",
    description: "Building interfaces that prioritize user experience and accessibility.",
  },
  {
    icon: "🔄",
    title: "Continuous Learning",
    description: "Staying current with evolving technologies and best practices.",
  },
  {
    icon: "🤝",
    title: "Collaborative Spirit",
    description: "Thriving in team environments and contributing to shared success.",
  },
];

export default function MeetDeveloperSection() {
  return (
    <section id="meet" className="section-padding bg-bg-secondary relative overflow-hidden">
      {/* Decorative */}
      <div className="orb orb-blue w-72 h-72 -top-36 -right-36 animate-[pulse-soft_4s_ease-in-out_infinite]" />
      <div className="orb orb-lavender w-60 h-60 bottom-20 -left-30 animate-[float_6s_ease-in-out_infinite]" />

      <div className="container-custom relative z-10">
        <SectionTitle
          title="Meet the Developer"
          subtitle="The person behind the code — my story, philosophy, and vision for the future."
        />

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Photo */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="flex justify-center"
          >
            <div className="relative">
              {/* Gradient Ring */}
              <div className="absolute -inset-3 rounded-3xl gradient-border opacity-20 blur-sm" />

              <div className="relative w-72 h-80 md:w-80 md:h-96 rounded-3xl overflow-hidden shadow-elevated ring-4 ring-white/50">
                <img
                  src={`${import.meta.env.BASE_URL}images/profile.jpg`}
                  alt="Singiri Sivaji — MERN Stack Developer"
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
              </div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-2 shadow-medium"
              >
                <span className="text-sm font-semibold text-deep-navy">
                  🚀 MERN Stack Developer
                </span>
              </motion.div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-6"
          >
            <motion.div variants={fadeInUp}>
              <h3 className="text-2xl font-bold text-deep-navy mb-4">
                The Developer Behind the Code
              </h3>
              <p className="text-text-primary leading-relaxed mb-4">
                I'm Singiri Sivaji — a Computer Science undergraduate, MERN Stack
                developer, and someone who genuinely believes that technology can
                change lives. My love for programming started with writing my first
                "Hello World" and has since grown into a deep passion for building
                scalable, impactful web applications.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <h4 className="text-lg font-semibold text-deep-navy mb-2 flex items-center gap-2">
                <span className="text-accent-blue">⚡</span> Why MERN?
              </h4>
              <p className="text-text-secondary leading-relaxed text-sm">
                I chose the MERN Stack because it represents the perfect synergy of
                flexibility and power. JavaScript across the entire stack means I can
                move seamlessly between crafting beautiful React interfaces and
                architecting robust Node.js backends. MongoDB's document model gives
                me the freedom to design data structures that evolve with the
                application. Express ties it all together with elegant simplicity.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <h4 className="text-lg font-semibold text-deep-navy mb-2 flex items-center gap-2">
                <span className="text-accent-blue">🎯</span> The Vision
              </h4>
              <p className="text-text-secondary leading-relaxed text-sm">
                My long-term goal is to become a software engineer who builds products
                that make a real difference — whether that's tools for developers,
                platforms for education, or solutions for complex real-world problems.
                I'm committed to continuous learning, open-source contribution, and
                pushing the boundaries of what's possible on the web.
              </p>
            </motion.div>

            {/* Values Grid */}
            <motion.div variants={fadeInUp} className="grid grid-cols-2 gap-3 pt-2">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="glass rounded-xl p-4"
                  style={{ boxShadow: "0 4px 16px rgba(0,0,0,0.04)" }}
                >
                  <span className="text-xl mb-2 block">{value.icon}</span>
                  <h5 className="text-sm font-semibold text-deep-navy mb-1">{value.title}</h5>
                  <p className="text-xs text-text-secondary leading-relaxed">{value.description}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
