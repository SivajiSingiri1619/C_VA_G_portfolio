import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../../utils/animations";
import SectionTitle from "../ui/SectionTitle";
import { certifications, codingProfiles } from "../../data/certifications";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode, SiCodechef } from "react-icons/si";
import { FiExternalLink } from "react-icons/fi";

const profileIconMap = {
  FaGithub: FaGithub,
  SiLeetcode: SiLeetcode,
  SiCodechef: SiCodechef,
};

export default function CertificationsSection() {
  return (
    <section id="certifications" className="section-padding bg-bg-secondary">
      <div className="container-custom">
        <SectionTitle
          title="Certifications & Achievements"
          subtitle="Industry-recognized credentials validating my technical expertise."
        />

        {/* Certifications Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-3 gap-6 mb-16"
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="glass rounded-2xl p-6 text-center group"
              whileHover={{
                y: -6,
                boxShadow: `0 20px 60px ${cert.color}15`,
                transition: { duration: 0.3 },
              }}
              style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.06)" }}
            >
              {/* Icon */}
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"
                style={{ backgroundColor: cert.bgColor }}
              >
                {cert.icon}
              </div>

              {/* Content */}
              <h3 className="font-semibold text-deep-navy mb-1 text-lg">
                {cert.title}
              </h3>
              <p
                className="text-sm font-medium mb-3"
                style={{ color: cert.color }}
              >
                {cert.issuer}
              </p>
              <p className="text-xs text-text-secondary leading-relaxed">
                {cert.description}
              </p>

              {/* Verified Badge */}
              <div className="mt-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-soft-mint text-xs font-medium text-deep-navy">
                <span>✓</span> Verified
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Coding Profiles */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-bold text-deep-navy text-center mb-6">
            Coding Profiles
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {codingProfiles.map((profile, index) => {
              const Icon = profileIconMap[profile.icon];
              return (
                <a
                  key={index}
                  href={profile.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass rounded-xl px-6 py-3 flex items-center gap-3 hover:shadow-medium transition-all duration-200 group"
                  style={{ boxShadow: "0 4px 16px rgba(0,0,0,0.04)" }}
                >
                  {Icon && (
                    <Icon
                      size={20}
                      className="text-text-secondary group-hover:text-accent-blue transition-colors"
                    />
                  )}
                  <div>
                    <p className="text-sm font-semibold text-deep-navy">{profile.platform}</p>
                    <p className="text-xs text-text-secondary">{profile.username}</p>
                  </div>
                  <FiExternalLink size={14} className="text-text-secondary/50 ml-1" />
                </a>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
