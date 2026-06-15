import { motion } from "framer-motion";
import { fadeInUp, fadeInLeft, staggerContainer } from "../../utils/animations";
import SectionTitle from "../ui/SectionTitle";

export default function CollaborativeSection() {
  return (
    <section id="collaborative" className="section-padding bg-soft-lavender/50">
      <div className="container-custom">
        <SectionTitle
          title="Collaborative Journey"
          subtitle="Great software is rarely built alone. Here's how teamwork shaped my growth as a developer."
        />

        <div className="grid lg:grid-cols-5 gap-10 items-center">
          {/* Image — 3 columns */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="lg:col-span-3"
          >
            <div className="relative">
              <div className="absolute -inset-3 rounded-2xl bg-gradient-to-br from-accent-blue/10 to-[#7B61FF]/10 blur-sm" />
              <div className="relative rounded-2xl overflow-hidden shadow-elevated ring-4 ring-white/50">
                <img
                  src="/images/team.jpg"
                  alt="Singiri Sivaji working with his team at Technical Hub"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </motion.div>

          {/* Content — 2 columns */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="lg:col-span-2 space-y-6"
          >
            <motion.p variants={fadeInUp} className="text-text-primary text-lg leading-relaxed">
              My journey as a developer has been profoundly shaped by the incredible
              teams I've had the privilege to work with. From brainstorming sessions
              that sparked breakthrough ideas to late-night debugging marathons that
              forged lasting bonds, <span className="font-semibold text-accent-blue">collaboration has been at the heart of my growth</span>.
            </motion.p>

            <motion.p variants={fadeInUp} className="text-text-secondary leading-relaxed">
              Working in teams taught me that the best solutions emerge when diverse
              perspectives converge. I've learned to communicate technical concepts
              clearly, lead with empathy, give and receive constructive feedback, and
              align individual contributions with shared goals.
            </motion.p>

            <motion.div variants={fadeInUp} className="grid grid-cols-2 gap-3 pt-4">
              {[
                { icon: "🤝", label: "Team Leadership" },
                { icon: "💬", label: "Communication" },
                { icon: "🧩", label: "Problem Solving" },
                { icon: "🔄", label: "Agile Workflow" },
              ].map((skill) => (
                <div
                  key={skill.label}
                  className="glass rounded-xl p-3 text-center"
                  style={{ boxShadow: "0 4px 16px rgba(0,0,0,0.04)" }}
                >
                  <span className="text-xl mb-1 block">{skill.icon}</span>
                  <span className="text-xs font-medium text-deep-navy">{skill.label}</span>
                </div>
              ))}
            </motion.div>

            <motion.p variants={fadeInUp} className="text-text-secondary leading-relaxed text-sm italic">
              "These experiences have made me not just a better developer, but a
              better teammate — someone who understands that building scalable software
              requires scalable collaboration."
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
