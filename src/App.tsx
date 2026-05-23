import { ThemeProvider } from './Contexts/ThemeContext';
import Navbar from './Components/Navbar';
import HeroSection from './Components/HeroSection';
import ProjectsSection from './Components/ProjectSection';
import SkillsSection from './Components/SkillSection';
import ExperienceSection from './Components/ExpirienceSection';
import EducationSection from './Components/EducationSection';
import ContactSection from './Components/ContactSection';
import Footer from './Components/Footer';

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 font-sans transition-colors duration-300 scroll-smooth">
        <Navbar />
        <main>
          <HeroSection />
          <ProjectsSection />
          <SkillsSection />
          <ExperienceSection />
          <EducationSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}