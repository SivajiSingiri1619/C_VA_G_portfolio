import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../../utils/animations";
import SectionTitle from "../ui/SectionTitle";
import { techStack } from "../../data/techStack";
import {
  FaReact, FaNodeJs, FaDocker, FaGitAlt, FaGithub, FaPython, FaJava,
} from "react-icons/fa";
import {
  SiJavascript, SiMongodb, SiExpress, SiMysql, SiCplusplus, SiHtml5, SiCss,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

const iconMap = {
  FaReact, FaNodeJs, FaDocker, FaGitAlt, FaGithub, FaPython, FaJava,
  SiJavascript, SiMongodb, SiExpress, SiMysql, SiCplusplus, SiHtml5,
  SiCss3: SiCss,
  TbBrandReactNative,
};

export default function TechStackSection() {
  return (
    <section id="tech-stack" className="section-padding bg-bg-secondary relative overflow-hidden">
      <div className="orb orb-mint w-72 h-72 -top-36 -left-36 animate-[pulse-soft_4s_ease-in-out_infinite]" />

      <div className="container-custom relative z-10">
        <SectionTitle
          title="Tech Stack"
          subtitle="Technologies I use to bring ideas to life — from frontend interfaces to backend systems."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="space-y-10"
        >
          {techStack.map((category) => (
            <motion.div key={category.category} variants={fadeInUp}>
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: category.color }}
                />
                <h3 className="text-lg font-bold text-deep-navy">{category.category}</h3>
              </div>

              {/* Tech Grid — Clean Cards without percentages */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {category.skills.map((skill) => {
                  const Icon = iconMap[skill.icon];
                  return (
                    <motion.div
                      key={skill.name}
                      className="glass rounded-2xl p-4 flex flex-col items-center gap-3 group cursor-default"
                      whileHover={{
                        y: -6,
                        boxShadow: `0 16px 48px ${category.color}15`,
                        transition: { duration: 0.25 },
                      }}
                      style={{ boxShadow: "0 4px 16px rgba(0,0,0,0.04)" }}
                    >
                      {/* Icon */}
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                        style={{ backgroundColor: `${category.color}12`, color: category.color }}
                      >
                        {Icon ? <Icon size={24} /> : (
                          <span className="text-lg font-mono font-bold" style={{ color: category.color }}>
                            {skill.name.substring(0, 2).toLowerCase()}
                          </span>
                        )}
                      </div>

                      {/* Name */}
                      <span className="text-sm font-semibold text-deep-navy text-center">
                        {skill.name}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
