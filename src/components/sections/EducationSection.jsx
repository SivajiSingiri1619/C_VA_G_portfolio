import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../../utils/animations";
import SectionTitle from "../ui/SectionTitle";

const coursework = [
  "Data Structures & Algorithms",
  "Database Management Systems",
  "Operating Systems",
  "Computer Networks",
  "Object-Oriented Programming",
  "Software Engineering",
  "Web Technologies",
  "Discrete Mathematics",
];

export default function EducationSection() {
  return (
    <section id="education" className="section-padding bg-bg-primary">
      <div className="container-custom">
        <SectionTitle
          title="Education"
          subtitle="Academic foundation in Computer Science that powers my development expertise."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="max-w-3xl mx-auto"
        >
          {/* Main Education Card */}
          <motion.div
            variants={fadeInUp}
            className="glass rounded-2xl p-6 md:p-8"
            style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.06)" }}
          >
            <div className="flex flex-col md:flex-row md:items-start gap-6">
              {/* Degree Icon */}
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent-blue/10 to-[#7B61FF]/10 flex items-center justify-center shrink-0">
                <span className="text-3xl">🎓</span>
              </div>

              <div className="flex-1">
                {/* Degree Info */}
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-deep-navy mb-1">
                      B.Tech in Computer Science & Engineering
                    </h3>
                    <p className="text-text-secondary text-sm">
                      Undergraduate Degree · Currently Pursuing
                    </p>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-soft-mint text-sm font-semibold text-deep-navy">
                    Active
                  </span>
                </div>

                {/* CGPA */}
                <motion.div
                  variants={fadeInUp}
                  className="flex items-center gap-6 mb-6 p-4 rounded-xl bg-bg-secondary"
                >
                  <div className="relative w-20 h-20">
                    <svg className="w-20 h-20 -rotate-90" viewBox="0 0 80 80">
                      <circle
                        cx="40" cy="40" r="34"
                        fill="none"
                        stroke="#E5E7EB"
                        strokeWidth="6"
                      />
                      <motion.circle
                        cx="40" cy="40" r="34"
                        fill="none"
                        stroke="url(#cgpa-gradient)"
                        strokeWidth="6"
                        strokeLinecap="round"
                        strokeDasharray={`${2 * Math.PI * 34}`}
                        initial={{ strokeDashoffset: 2 * Math.PI * 34 }}
                        whileInView={{
                          strokeDashoffset: 2 * Math.PI * 34 * (1 - 8.79 / 10),
                        }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                      />
                      <defs>
                        <linearGradient id="cgpa-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#4F8CFF" />
                          <stop offset="100%" stopColor="#7B61FF" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-lg font-bold text-deep-navy">8.79</span>
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold text-deep-navy text-lg">CGPA: 8.79 / 10.0</p>
                    <p className="text-sm text-text-secondary">Cumulative Grade Point Average</p>
                  </div>
                </motion.div>

                {/* Relevant Coursework */}
                <div>
                  <h4 className="text-sm font-semibold text-deep-navy mb-3 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-md bg-soft-lavender flex items-center justify-center text-xs">📚</span>
                    Relevant Coursework
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {coursework.map((course) => (
                      <span
                        key={course}
                        className="px-3 py-1.5 rounded-lg bg-bg-secondary text-xs font-medium text-text-secondary border border-gray-100 hover:border-accent-blue/30 hover:text-accent-blue transition-colors duration-200"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
