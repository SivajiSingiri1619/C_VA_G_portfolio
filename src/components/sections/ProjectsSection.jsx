import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../../utils/animations";
import SectionTitle from "../ui/SectionTitle";
import { projects } from "../../data/projects";
import { FiGithub, FiExternalLink } from "react-icons/fi";

function ProjectCard({ project, index }) {
  const isReversed = index % 2 === 1;

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className="mb-20 last:mb-0"
    >
      <div className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${isReversed ? "lg:direction-rtl" : ""}`}>
        {/* Project Image / Mockup */}
        <motion.div
          variants={fadeInUp}
          className={`${isReversed ? "lg:order-2" : ""}`}
        >
          <div
            className="rounded-2xl p-8 min-h-[280px] flex items-center justify-center relative overflow-hidden group"
            style={{ background: project.gradient }}
          >
            {/* Decorative Elements */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-4 right-4 w-20 h-20 border-2 border-white/40 rounded-xl rotate-12" />
              <div className="absolute bottom-4 left-4 w-16 h-16 border-2 border-white/40 rounded-full" />
              <div className="absolute top-1/2 left-1/3 w-12 h-12 border-2 border-white/40 rounded-lg -rotate-6" />
            </div>

            {/* Mock Browser Window */}
            <div className="bg-white/95 rounded-xl shadow-2xl w-full max-w-sm transform group-hover:scale-105 transition-transform duration-500 relative z-10">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-100">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
                <div className="flex-1 mx-3 h-6 bg-gray-100 rounded-md" />
              </div>
              <div className="p-6">
                <div className="space-y-3">
                  <div className="h-3 bg-gray-100 rounded-full w-3/4" />
                  <div className="h-3 bg-gray-100 rounded-full w-full" />
                  <div className="h-3 bg-gray-100 rounded-full w-5/6" />
                  <div className="mt-4 h-20 bg-gradient-to-br from-accent-blue/10 to-[#7B61FF]/10 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">
                      {project.id === "code-editor" ? "💻" : "📹"}
                    </span>
                  </div>
                  <div className="h-3 bg-gray-100 rounded-full w-2/3" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Project Details */}
        <motion.div
          variants={fadeInUp}
          className={`${isReversed ? "lg:order-1" : ""}`}
        >
          <span className="text-xs font-semibold text-accent-blue uppercase tracking-wider">
            Featured Project
          </span>
          <h3 className="text-2xl md:text-3xl font-bold text-deep-navy mt-2 mb-3">
            {project.title}
          </h3>
          <p className="text-accent-blue font-medium text-sm mb-4">
            {project.tagline}
          </p>

          {/* Problem & Solution */}
          <div className="space-y-4 mb-6">
            <div className="glass rounded-xl p-4" style={{ boxShadow: "0 4px 16px rgba(0,0,0,0.04)" }}>
              <h4 className="text-sm font-semibold text-deep-navy mb-2 flex items-center gap-2">
                <span className="w-5 h-5 rounded bg-red-50 flex items-center justify-center text-xs">❓</span>
                The Problem
              </h4>
              <p className="text-sm text-text-secondary leading-relaxed">{project.problem}</p>
            </div>
            <div className="glass rounded-xl p-4" style={{ boxShadow: "0 4px 16px rgba(0,0,0,0.04)" }}>
              <h4 className="text-sm font-semibold text-deep-navy mb-2 flex items-center gap-2">
                <span className="w-5 h-5 rounded bg-green-50 flex items-center justify-center text-xs">✅</span>
                The Solution
              </h4>
              <p className="text-sm text-text-secondary leading-relaxed">{project.solution}</p>
            </div>
          </div>

          {/* Key Features */}
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-deep-navy mb-3">Key Features</h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {project.features.slice(0, 4).map((feature, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
                  <span className="text-accent-blue mt-0.5">▸</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Badges */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-lg bg-bg-secondary text-xs font-medium text-deep-navy border border-gray-100"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold bg-deep-navy text-white hover:bg-deep-navy/90 transition-colors"
            >
              <FiGithub />
              GitHub
            </a>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold bg-gradient-to-r from-accent-blue to-[#7B61FF] text-white shadow-md hover:shadow-lg transition-all"
            >
              <FiExternalLink />
              Live Demo
            </a>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="section-padding bg-bg-secondary">
      <div className="container-custom">
        <SectionTitle
          title="Featured Projects"
          subtitle="Case studies of applications I've designed and built from concept to deployment."
        />

        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
