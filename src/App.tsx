/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { AnimatePresence } from 'motion/react';
import PageLoader from './components/PageLoader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Certifications from './components/Certifications';
import GitHubStats from './components/GitHubStats';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem('theme');
    if (saved) return saved === 'dark';
    // Default to premium light mode
    return false;
  });
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  // Synchronize CSS class list for Dark/Light mode
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      const offset = 80; // height of navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <PageLoader onComplete={() => setIsLoading(false)} />
        ) : (
          <div
            id="app-root-container"
            className="min-h-screen bg-[#F8F9FB] text-gray-900 dark:bg-[#080B11] dark:text-gray-100 transition-colors duration-300 overflow-x-hidden select-none"
          >
            {/* Header / Sticky Navigation Panel */}
            <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />

            {/* Interactive Hero Intro section */}
            <Hero
              onViewProjectsClick={scrollToProjects}
              onOpenResumeModal={() => setIsResumeOpen(true)}
            />

            {/* Structured Page Sections */}
            <main id="main-content-flow">
              {/* About Profile Section */}
              <About />

              {/* Skills and Capabilities Grid */}
              <Skills />

              {/* Creations & Project Showcases */}
              <Projects />

              {/* Chronological Work Experience */}
              <Experience />

              {/* Academic Milestones */}
              <Education />

              {/* Verified Professional Certifications */}
              <Certifications />

              {/* Developer activity timeline metrics */}
              <GitHubStats />

              {/* Professional validation contact forms */}
              <Contact />
            </main>

            {/* Unified Branding Footer */}
            <Footer />

            {/* Full-Screen Interactive CV sheet modal */}
            <AnimatePresence>
              {isResumeOpen && (
                <ResumeModal
                  isOpen={isResumeOpen}
                  onClose={() => setIsResumeOpen(false)}
                />
              )}
            </AnimatePresence>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
