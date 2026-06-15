import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../../utils/animations";
import SectionTitle from "../ui/SectionTitle";
import { experiences } from "../../data/experience";
import { FiCalendar, FiBriefcase } from "react-icons/fi";

export default function ExperienceSection() {
  return (
    <section id="experience" className="section-padding relative overflow-hidden">
      <div className="orb orb-lavender w-72 h-72 -top-36 -right-36 animate-[float_6s_ease-in-out_infinite]" />

      <div className="container-custom relative z-10">
        <SectionTitle
          title="Experience"
          subtitle="Professional experience that shaped my skills as a developer."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="max-w-3xl mx-auto space-y-8"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="relative"
            >
              {/* Timeline connector */}
              {index < experiences.length - 1 && (
                <div className="absolute left-6 top-16 w-0.5 h-[calc(100%+2rem)] bg-gradient-to-b from-accent-blue/30 to-transparent hidden md:block" />
              )}

              <div className="glass rounded-2xl p-6 md:p-8 md:ml-14 relative" style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.06)" }}>
                {/* Timeline dot */}
                <div className="hidden md:block absolute -left-[3.75rem] top-8">
                  <div className="timeline-dot" />
                </div>

                {/* Header */}
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-deep-navy mb-1">{exp.role}</h3>
                  <p className="font-semibold mb-2" style={{ color: exp.color }}>{exp.company}</p>
                  <div className="flex flex-wrap gap-3 text-sm text-text-secondary">
                    <span className="inline-flex items-center gap-1.5">
                      <FiCalendar size={14} />
                      {exp.duration}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <FiBriefcase size={14} />
                      {exp.type}
                    </span>
                  </div>
                </div>

                <p className="text-text-secondary mb-4 text-sm leading-relaxed">
                  {exp.description}
                </p>

                {/* Responsibilities */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-deep-navy mb-2">Key Contributions</h4>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: exp.color }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech badges */}
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full text-xs font-medium"
                      style={{ backgroundColor: `${exp.color}12`, color: exp.color }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
