import { createContext } from "react";
import { useDarkMode } from "./hooks/useDarkMode";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import HeroSection from "./components/sections/HeroSection";
import AboutSection from "./components/sections/AboutSection";
import TechStackSection from "./components/sections/TechStackSection";
import ExperienceSection from "./components/sections/ExperienceSection";
import ProjectsSection from "./components/sections/ProjectsSection";
import JourneySection from "./components/sections/JourneySection";
import CollaborativeSection from "./components/sections/CollaborativeSection";
import MeetDeveloperSection from "./components/sections/MeetDeveloperSection";
import EducationSection from "./components/sections/EducationSection";
import CertificationsSection from "./components/sections/CertificationsSection";
import ContactSection from "./components/sections/ContactSection";

export const ThemeContext = createContext({ isDark: false, toggle: () => {} });

export default function App() {
  const theme = useDarkMode();

  return (
    <ThemeContext.Provider value={theme}>
      <div className="min-h-screen bg-bg-primary transition-colors duration-300">
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <TechStackSection />
          <ExperienceSection />
          <ProjectsSection />
          <JourneySection />
          <CollaborativeSection />
          <MeetDeveloperSection />
          <EducationSection />
          <CertificationsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}
