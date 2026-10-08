import React from 'react';
import { Mail, Check, Copy, ArrowUpRight } from 'lucide-react';
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

export default function Contact({ onNotify }) {
  const handleCopyEmail = (e) => {
    e.preventDefault();
    if (navigator.clipboard) {
      navigator.clipboard.writeText(PERSONAL_INFO.email);
      onNotify('Email copied to clipboard: ' + PERSONAL_INFO.email);
    }
  };

  return (
    <section id="contact" className="portfolio-section container" aria-label="Contact Information">
      <div className="glass-panel contact-section-card">
        <div className="section-eyebrow" style={{ justifyContent: 'center' }}>
          08 // GET IN TOUCH
        </div>
        <h2>LET'S BUILD SOMETHING INTELLIGENT.</h2>
        <p>
          I am interested in AI/ML, Generative AI, backend development and software opportunities where I can build practical technology and continue learning.
        </p>

        <div className="contact-actions-bar">
          <button
            onClick={handleCopyEmail}
            className="btn btn-primary"
            title="Click to copy email address"
          >
            <Copy size={16} />
            <span>{PERSONAL_INFO.email}</span>
          </button>

          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="btn btn-secondary"
            title="Open email client"
          >
            <Mail size={16} />
            <span>SEND EMAIL</span>
          </a>

          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            <GithubIcon size={16} />
            <span>GITHUB</span>
          </a>

          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            <LinkedinIcon size={16} />
            <span>LINKEDIN</span>
          </a>
        </div>
      </div>

      {/* Semantic Footer */}
      <footer className="site-footer" role="contentinfo">
        <div className="footer-inner">
          <div className="footer-brand">
            <span className="footer-name">{PERSONAL_INFO.name}</span>
            <span className="footer-positioning">
              {PERSONAL_INFO.role} • Machine Learning • Generative AI • RAG • Backend
            </span>
          </div>

          <div className="footer-links">
            <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href={`mailto:${PERSONAL_INFO.email}`}>
              Email
            </a>
          </div>

          <div className="footer-copy">
            © 2026 {PERSONAL_INFO.name}
          </div>
        </div>
      </footer>
    </section>
  );
}
