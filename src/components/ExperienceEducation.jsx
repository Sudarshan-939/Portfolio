import React from 'react';
import { Briefcase, GraduationCap, Calendar, MapPin, Award } from 'lucide-react';
import { EXPERIENCE, EDUCATION } from '../data/portfolioData';

export default function ExperienceEducation() {
  return (
    <section id="experience" className="portfolio-section container" aria-label="Experience and Education">
      <div className="section-header">
        <div className="section-eyebrow">04 // CAREER & ACADEMICS</div>
        <h2>Engineering Experience & Academic Foundation</h2>
        <p>
          Internship in applied machine learning paired with academic training in Computer Science & Artificial Intelligence.
        </p>
      </div>

      <div className="experience-education-grid">
        {/* Work Experience Column */}
        <div className="timeline-column">
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '24px' }}>
            <Briefcase size={20} color="var(--accent-cyan)" />
            <h3>Work Experience</h3>
          </div>

          <div className="timeline-items-wrapper">
            {EXPERIENCE.map((exp, idx) => (
              <div key={idx} className="glass-panel timeline-card">
                <div className="timeline-card-header">
                  <div>
                    <h4 className="timeline-role">{exp.role}</h4>
                    <div className="timeline-entity">{exp.company}</div>
                  </div>
                  <span className="timeline-period">{exp.period}</span>
                </div>

                <ul className="timeline-bullets">
                  {exp.bullets.map((bullet, bIdx) => (
                    <li key={bIdx}>{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Education Column */}
        <div id="education" className="timeline-column">
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '24px' }}>
            <GraduationCap size={20} color="var(--accent-indigo)" />
            <h3>Education History</h3>
          </div>

          <div className="timeline-items-wrapper">
            {EDUCATION.map((edu, idx) => (
              <div key={idx} className="glass-panel education-card">
                <div className="timeline-card-header">
                  <div>
                    <h4 className="timeline-role" style={{ fontSize: '16.5px' }}>
                      {edu.degree}
                    </h4>
                    <div className="timeline-entity" style={{ color: 'var(--text-sub)' }}>
                      {edu.institution} • {edu.location}
                    </div>
                  </div>
                  <span className="timeline-period">{edu.period}</span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '12px' }}>
                  <span className="education-score-badge">{edu.score}</span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-dim)' }}>
                    {edu.badge}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
