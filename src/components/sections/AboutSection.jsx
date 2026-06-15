import { motion } from "framer-motion";
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from "../../utils/animations";
import SectionTitle from "../ui/SectionTitle";
import StatCard from "../ui/StatCard";

const stats = [
  { number: "2+", label: "Projects Built", icon: "🚀" },
  { number: "8.79", label: "CGPA", icon: "🎓" },
  { number: "15+", label: "Technologies", icon: "⚡" },
  { number: "1", label: "Industry Internship", icon: "💼" },
];

export default function AboutSection() {
  return (
    <section id="about" className="section-padding bg-bg-primary">
      <div className="container-custom">
        <SectionTitle
          title="About Me"
          subtitle="Passionate about building scalable web applications and solving complex problems with modern technologies."
        />

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Content — 3 columns */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="lg:col-span-3 space-y-6"
          >
            <p className="text-text-primary text-lg leading-relaxed">
              I'm a passionate Full Stack Developer specializing in the{" "}
              <span className="font-semibold text-accent-blue">MERN Stack</span>,
              currently pursuing my B.Tech in Computer Science & Engineering. With a
              strong foundation in building scalable web applications and hands-on
              internship experience at Technical Hub Pvt Ltd, I thrive on transforming
              complex challenges into elegant, user-centric solutions.
            </p>
            <p className="text-text-secondary leading-relaxed">
              My journey in software engineering began with curiosity about how the web
              works — and evolved into a deep commitment to mastering the entire
              development lifecycle. From designing responsive React interfaces to
              architecting robust Node.js backends, I bring both technical depth and
              creative problem-solving to every project.
            </p>
            <p className="text-text-secondary leading-relaxed">
              I believe great software is built at the intersection of{" "}
              <span className="font-medium text-text-primary">clean code</span>,{" "}
              <span className="font-medium text-text-primary">thoughtful design</span>,
              and{" "}
              <span className="font-medium text-text-primary">relentless iteration</span>.
              Whether I'm building real-time communication systems with WebRTC or crafting
              developer tools like browser-based code editors, I'm driven by the impact
              technology can have on people's lives.
            </p>

            {/* Development Philosophy */}
            <div className="glass rounded-2xl p-6 mt-6" style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.06)" }}>
              <h3 className="font-semibold text-deep-navy text-lg mb-3 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-accent-blue/10 flex items-center justify-center text-sm">💡</span>
                Development Philosophy
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                "Write code that your future self will thank you for. Build systems
                that scale not just technically, but also in maintainability and team
                collaboration. Every line of code is an opportunity to create impact."
              </p>
            </div>
          </motion.div>

          {/* Stats — 2 columns */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="lg:col-span-2 grid grid-cols-2 gap-4"
          >
            {stats.map((stat) => (
              <StatCard key={stat.label} {...stat} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
