import React from 'react';
import { Brain, Sparkles, Waves, Server } from 'lucide-react';
import { PERSONAL_INFO, FOCUS_AREAS } from '../data/portfolioData';

const iconMap = {
  Brain: Brain,
  Sparkles: Sparkles,
  Waves: Waves,
  Server: Server
};

export default function About() {
  return (
    <section id="about" className="portfolio-section container" aria-label="About Me">
      <div className="section-header">
        <div className="section-eyebrow">01 // ABOUT ME</div>
        <h2>Engineering Practical AI & Scalable Systems</h2>
        <p>
          Bridging algorithmic machine learning with real-world software engineering, APIs, and modern user experiences.
        </p>
      </div>

      <div className="about-grid-layout">
        {/* Narrative & Engineering Approach */}
        <div className="glass-panel about-narrative-card">
          <div className="about-paragraphs">
            {PERSONAL_INFO.aboutContent.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <div style={{ marginTop: '28px', paddingTop: '20px', borderTop: '1px solid var(--border-subtle)', display: 'flex', alignItems: 'center', gap: '14px' }}>
            <span className="badge-pill badge-cyan">PRATHYUSHA ENGINEERING COLLEGE</span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-dim)' }}>
              AIML DEPARTMENT • CHENNAI REGION
            </span>
          </div>
        </div>

        {/* Quick Information Panel */}
        <div className="about-quick-panel">
          <div className="quick-stat-card">
            <div className="quick-stat-label">SPECIALIZATION</div>
            <div className="quick-stat-value" style={{ fontSize: '16px' }}>
              {PERSONAL_INFO.stats.specialization}
            </div>
            <div className="quick-stat-sub">B.E. CSE Degree Track</div>
          </div>

          <div className="quick-stat-card">
            <div className="quick-stat-label">CUMULATIVE CGPA</div>
            <div className="quick-stat-value" style={{ color: 'var(--accent-cyan)' }}>
              {PERSONAL_INFO.stats.cgpa}
            </div>
            <div className="quick-stat-sub">Verified College Transcript</div>
          </div>

          <div className="quick-stat-card">
            <div className="quick-stat-label">CURRENT FOCUS</div>
            <div className="quick-stat-value" style={{ fontSize: '14.5px', color: 'var(--accent-indigo)' }}>
              {PERSONAL_INFO.stats.currentFocus}
            </div>
            <div className="quick-stat-sub">Production AI Pipelines</div>
          </div>

          <div className="quick-stat-card">
            <div className="quick-stat-label">GRADUATION TIMELINE</div>
            <div className="quick-stat-value" style={{ fontSize: '16px' }}>
              June 2024 – 2028
            </div>
            <div className="quick-stat-sub">Expected Graduation Year</div>
          </div>
        </div>
      </div>

      {/* Four Premium Core Focus Cards */}
      <div className="focus-cards-grid">
        {FOCUS_AREAS.map((area) => {
          const IconComponent = iconMap[area.icon] || Brain;
          return (
            <div key={area.id} className="glass-panel focus-card">
              <div>
                <div className="focus-card-top">
                  <div className="focus-icon-box" aria-hidden="true">
                    <IconComponent size={22} />
                  </div>
                  <span className="badge-pill" style={{ fontSize: '10px' }}>
                    {area.tag}
                  </span>
                </div>
                <h3>{area.title}</h3>
                <p>{area.description}</p>
              </div>

              <div style={{ marginTop: '18px', paddingTop: '12px', borderTop: '1px solid var(--border-subtle)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent-cyan)' }} />
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--text-dim)', letterSpacing: '0.06em' }}>
                  ACTIVE CAPABILITY
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
