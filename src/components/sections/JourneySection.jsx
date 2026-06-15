import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../../utils/animations";
import SectionTitle from "../ui/SectionTitle";
import { journey } from "../../data/journey";

export default function JourneySection() {
  return (
    <section id="journey" className="section-padding bg-bg-secondary relative overflow-hidden">
      <div className="orb orb-blue w-72 h-72 -top-36 right-20 animate-[float_6s_ease-in-out_infinite]" />

      <div className="container-custom relative z-10">
        <SectionTitle
          title="My Journey"
          subtitle="A timeline of growth — from learning my first language to becoming a full stack developer."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="max-w-3xl mx-auto relative"
        >
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-blue/40 via-[#7B61FF]/30 to-transparent transform md:-translate-x-0.5" />

          {journey.map((item, index) => {
            const isLeft = index % 2 === 0;
            return (
              <motion.div
                key={item.year}
                variants={fadeInUp}
                className={`relative flex items-start gap-6 mb-12 last:mb-0 ${
                  isLeft ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 z-10">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-lg shadow-md ring-4 ring-white"
                    style={{ backgroundColor: `${item.color}15`, boxShadow: `0 0 0 4px ${item.color}20` }}
                  >
                    {item.icon}
                  </div>
                </div>

                {/* Content card */}
                <div className={`ml-20 md:ml-0 md:w-[calc(50%-2.5rem)] ${
                  isLeft ? "md:pr-4" : "md:pl-4 md:ml-auto"
                }`}>
                  <div className="glass rounded-2xl p-6" style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.06)" }}>
                    {/* Year badge */}
                    <span
                      className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-3"
                      style={{ backgroundColor: `${item.color}15`, color: item.color }}
                    >
                      {item.year}
                    </span>

                    <h3 className="text-lg font-bold text-deep-navy mb-3">{item.title}</h3>

                    <ul className="space-y-2">
                      {item.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
                          <span
                            className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                            style={{ backgroundColor: item.color }}
                          />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
