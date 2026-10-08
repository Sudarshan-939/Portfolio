import React from 'react';
import { ArrowUpRight, Download, Sparkles, Terminal, Cpu } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

function GithubIcon({ size = 16, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon({ size = 16, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function Hero({ onExploreProjects }) {
  const scrollToProjects = (e) => {
    e.preventDefault();
    if (onExploreProjects) {
      onExploreProjects();
    } else {
      const target = document.querySelector('#projects');
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-section container" aria-label="Hero Introduction">
      <div className="hero-grid">
        {/* Left Column: Recruiter-Targeted Copy */}
        <div className="hero-content-col">
          {/* Availability Badge */}
          <div className="hero-availability" role="status">
            <span className="pulsing-dot" aria-hidden="true" />
            <span>{PERSONAL_INFO.availabilityBadge}</span>
          </div>

          <div className="hero-title-group">
            <div className="hero-name-label">{PERSONAL_INFO.name}</div>
            <h1 className="hero-headline">
              {PERSONAL_INFO.headlineRole}
              <span className="headline-sub">{PERSONAL_INFO.headlineTagline}</span>
            </h1>
            <div className="hero-positioning">
              {PERSONAL_INFO.positioning}
            </div>
          </div>

          <p className="hero-supporting-text">
            {PERSONAL_INFO.supportingText}
          </p>

          <p style={{ fontSize: '14.5px', color: 'var(--text-muted)', marginBottom: '24px', lineHeight: 1.6 }}>
            {PERSONAL_INFO.supportingStatement}
          </p>

          {/* Small Technology Labels */}
          <div className="hero-tech-pills" aria-label="Core Technologies">
            {PERSONAL_INFO.heroTechLabels.map((tech) => (
              <span key={tech} className="badge-pill">
                {tech}
              </span>
            ))}
          </div>

          {/* Hero Action Buttons */}
          <div className="hero-cta-group">
            <a
              href="#projects"
              onClick={scrollToProjects}
              className="btn btn-primary"
            >
              <span>VIEW PROJECTS</span>
              <ArrowUpRight size={16} />
            </a>

            <a
              href={PERSONAL_INFO.resumePath}
              download="Y_Hema_Sudarshan_Resume.pdf"
              className="btn btn-secondary"
              title="Download Verified Resume PDF"
            >
              <Download size={16} />
              <span>DOWNLOAD RESUME</span>
            </a>

            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
              aria-label="GitHub Profile"
            >
              <GithubIcon size={16} />
              <span>GITHUB</span>
            </a>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon size={16} />
              <span>LINKEDIN</span>
            </a>
          </div>
        </div>

        {/* Right Column: Subtle Engineering Visual & Profile */}
        <div className="hero-visual-wrapper">
          <div className="profile-card-tech">
            <img 
              src="/profile.png" 
              alt="Y Hema Sudarshan - AI/ML Developer"
              loading="eager"
            />
            <div className="profile-tech-overlay" />
            <div className="profile-tech-meta">
              <div>
                <span className="profile-meta-title">ENGINEERING PROFILE</span>
                <div className="profile-meta-role">Y HEMA SUDARSHAN</div>
              </div>
              <span className="profile-meta-badge">CGPA 7.78</span>
            </div>
          </div>

          {/* Subtle Neural Network / Data-Flow Visual (Secondary element, does not dominate) */}
          <div className="neural-graph-card" aria-hidden="true">
            <div className="neural-graph-header">
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Cpu size={12} color="var(--accent-cyan)" />
                TENSOR FLOW & NEURAL SIGNAL PIPELINE
              </span>
              <span style={{ color: 'var(--accent-emerald)' }}>● ACTIVE INFERENCE</span>
            </div>

            <svg 
              className="neural-svg-canvas" 
              viewBox="0 0 340 60" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="neuralGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#6ee7ff" stopOpacity="0.8" />
                  <stop offset="50%" stopColor="#818cf8" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#34d399" stopOpacity="0.9" />
                </linearGradient>
              </defs>

              {/* Data Connections */}
              <line x1="25" y1="30" x2="105" y2="18" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" />
              <line x1="25" y1="30" x2="105" y2="42" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" />
              <line x1="105" y1="18" x2="185" y2="15" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" />
              <line x1="105" y1="18" x2="185" y2="35" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" />
              <line x1="105" y1="42" x2="185" y2="35" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" />
              <line x1="105" y1="42" x2="185" y2="50" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" />
              <line x1="185" y1="15" x2="265" y2="24" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" />
              <line x1="185" y1="35" x2="265" y2="24" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" />
              <line x1="185" y1="50" x2="265" y2="38" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" />
              <line x1="265" y1="24" x2="315" y2="30" stroke="rgba(110,231,255,0.3)" strokeWidth="1.5" />
              <line x1="265" y1="38" x2="315" y2="30" stroke="rgba(110,231,255,0.3)" strokeWidth="1.5" />

              {/* Animated Tensor Pulses */}
              <circle cx="25" cy="30" r="4.5" fill="#6ee7ff">
                <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" />
              </circle>
              
              <circle cx="105" cy="18" r="4" fill="#818cf8" />
              <circle cx="105" cy="42" r="4" fill="#818cf8" />

              <circle cx="185" cy="15" r="4" fill="#818cf8" />
              <circle cx="185" cy="35" r="4.5" fill="#6ee7ff">
                <animate attributeName="r" values="3.5;5;3.5" dur="2.4s" repeatCount="indefinite" />
              </circle>
              <circle cx="185" cy="50" r="4" fill="#818cf8" />

              <circle cx="265" cy="24" r="4" fill="#6ee7ff" />
              <circle cx="265" cy="38" r="4" fill="#34d399" />

              <circle cx="315" cy="30" r="5" fill="#34d399">
                <animate attributeName="opacity" values="0.6;1;0.6" dur="1.8s" repeatCount="indefinite" />
              </circle>

              {/* Node Labels */}
              <text x="14" y="52" fill="#64748b" fontSize="8" fontFamily="var(--font-mono)">INPUT</text>
              <text x="88" y="58" fill="#64748b" fontSize="8" fontFamily="var(--font-mono)">DENSE</text>
              <text x="168" y="10" fill="#64748b" fontSize="8" fontFamily="var(--font-mono)">ATTENTION</text>
              <text x="246" y="56" fill="#64748b" fontSize="8" fontFamily="var(--font-mono)">LOGITS</text>
              <text x="296" y="52" fill="#34d399" fontSize="8" fontFamily="var(--font-mono)">PRED</text>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
