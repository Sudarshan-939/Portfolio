import React, { useState, useEffect, useCallback } from 'react';
import { createRoot } from 'react-dom/client';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ExperienceEducation from './components/ExperienceEducation';
import Certifications from './components/Certifications';
import BuildingInPublic from './components/BuildingInPublic';
import ResumeCTA from './components/ResumeCTA';
import Contact from './components/Contact';
import CaseStudyModal from './components/CaseStudyModal';
import { CheckCircle } from 'lucide-react';
import './styles.css';

function App() {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null);
  const [toastMessage, setToastMessage] = useState(null);

  // Subtle mouse tracking glow with requestAnimationFrame throttling
  useEffect(() => {
    let animationFrameId;
    const handlePointerMove = (e) => {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(() => {
        document.documentElement.style.setProperty('--mx', `${e.clientX}px`);
        document.documentElement.style.setProperty('--my', `${e.clientY}px`);
      });
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const showNotification = useCallback((msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((prev) => (prev === msg ? null : prev));
    }, 2500);
  }, []);

  const handleScrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Background Engineering Grid & Glow */}
      <div className="grid-overlay" aria-hidden="true" />
      <div className="cursor-glow-backdrop" aria-hidden="true" />

      {/* Accessible Skip Link */}
      <a 
        href="#home" 
        style={{
          position: 'absolute',
          top: '-50px',
          left: '20px',
          background: 'var(--accent-cyan)',
          color: '#000',
          padding: '8px 16px',
          zIndex: 9999,
          borderRadius: '4px',
          fontWeight: 600,
          transition: 'top 0.2s ease'
        }}
        onFocus={(e) => { e.currentTarget.style.top = '10px'; }}
        onBlur={(e) => { e.currentTarget.style.top = '-50px'; }}
      >
        Skip to main content
      </a>

      {/* Navigation */}
      <Navbar />

      {/* Main Content Area */}
      <main id="main-content">
        <Hero onExploreProjects={handleScrollToProjects} />
        <About />
        <Skills />
        <Projects onSelectCaseStudy={(proj) => setSelectedCaseStudy(proj)} />
        <ExperienceEducation />
        <Certifications />
        <BuildingInPublic />
        <ResumeCTA />
        <Contact onNotify={showNotification} />
      </main>

      {/* 12-Section Case Study Modal Drawer */}
      {selectedCaseStudy && (
        <CaseStudyModal
          project={selectedCaseStudy}
          onClose={() => setSelectedCaseStudy(null)}
        />
      )}

      {/* Global Toast Notification */}
      {toastMessage && (
        <div className="toast-notification" role="status" aria-live="polite">
          <CheckCircle size={15} color="var(--accent-emerald)" />
          <span>{toastMessage}</span>
        </div>
      )}
    </>
  );
}

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(<App />);
}
