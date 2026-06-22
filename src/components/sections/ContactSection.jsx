import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../../utils/animations";
import SectionTitle from "../ui/SectionTitle";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiMail, HiPhone } from "react-icons/hi";
import { FiArrowRight } from "react-icons/fi";

const contactMethods = [
  {
    icon: <HiMail size={24} />,
    label: "Email",
    value: "singirisivaji@example.com",
    href: "mailto:singirisivaji@gmail.com",
    color: "#4F8CFF",
    bgColor: "#F5F9FF",
  },
  {
    icon: <HiPhone size={24} />,
    label: "Phone",
    value: "+91 XXXXX XXXXX",
    href: "tel:+91XXXXXXXXXX",
    color: "#47A248",
    bgColor: "#ECFFF5",
  },
  {
    icon: <FaLinkedinIn size={22} />,
    label: "LinkedIn",
    value: "linkedin.com/in/sivaji-singiri",
    href: "https://www.linkedin.com/in/sivaji-singiri-252926290/",
    color: "#0A66C2",
    bgColor: "#F0F7FF",
  },
  {
    icon: <FaGithub size={22} />,
    label: "GitHub",
    value: "github.com/SivajiSingiri1619",
    href: "https://github.com/SivajiSingiri1619",
    color: "#333",
    bgColor: "#F5F5F5",
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg-secondary to-bg-primary" />
      <div className="orb orb-blue w-80 h-80 -top-40 -right-40 animate-[pulse-soft_4s_ease-in-out_infinite]" />
      <div className="orb orb-lavender w-60 h-60 bottom-10 -left-30 animate-[float_6s_ease-in-out_infinite]" />

      <div className="container-custom relative z-10">
        <SectionTitle
          title="Let's Build Something Amazing Together"
          subtitle="I'm always open to discussing new opportunities, interesting projects, or just having a conversation about technology."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="max-w-3xl mx-auto"
        >
          {/* Contact Cards */}
          <div className="grid sm:grid-cols-2 gap-4 mb-10">
            {contactMethods.map((method) => (
              <motion.a
                key={method.label}
                variants={fadeInUp}
                href={method.href}
                target={method.href.startsWith("http") ? "_blank" : undefined}
                rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="glass rounded-2xl p-5 flex items-center gap-4 group"
                whileHover={{
                  y: -4,
                  boxShadow: `0 16px 48px ${method.color}15`,
                  transition: { duration: 0.3 },
                }}
                style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.06)" }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300"
                  style={{ backgroundColor: method.bgColor, color: method.color }}
                >
                  {method.icon}
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-deep-navy">{method.label}</p>
                  <p className="text-xs text-text-secondary truncate">{method.value}</p>
                </div>
              </motion.a>
            ))}
          </div>

          {/* CTA */}
          <motion.div variants={fadeInUp} className="text-center">
            <p className="text-text-secondary mb-6 max-w-md mx-auto">
              Whether you have a project idea, a job opportunity, or just want to
              say hello — I'd love to hear from you.
            </p>
            <a
              href="mailto:singirisivaji@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-base font-semibold bg-gradient-to-r from-accent-blue to-[#7B61FF] text-white shadow-lg hover:shadow-xl hover:shadow-accent-blue/25 transition-all duration-300 group"
            >
              Send Me a Message
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
