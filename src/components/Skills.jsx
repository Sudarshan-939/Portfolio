import React from 'react';
import { Code, Cpu, Layers, Database, Wrench, Terminal } from 'lucide-react';
import { SKILLS_CATEGORIZED } from '../data/portfolioData';

const categoryIcons = {
  'PROGRAMMING': Code,
  'AI / MACHINE LEARNING': Cpu,
  'FRAMEWORKS / BACKEND': Layers,
  'DATA / DATABASE': Database,
  'AI / ML TOOLS': Wrench,
  'DEVELOPER TOOLS': Terminal
};

export default function Skills() {
  return (
    <section id="skills" className="portfolio-section container" aria-label="Technical Skills">
      <div className="section-header">
        <div className="section-eyebrow">02 // TECHNICAL SKILLS</div>
        <h2>Categorized Competencies & Toolchain</h2>
        <p>
          Organized strictly by verified engineering capability across algorithms, data systems, APIs, and modern developer tooling.
        </p>
      </div>

      <div className="skills-grid-layout">
        {SKILLS_CATEGORIZED.map((cat) => {
          const IconComponent = categoryIcons[cat.category] || Code;
          return (
            <div key={cat.category} className="glass-panel skill-category-card">
              <div className="skill-category-header">
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <IconComponent size={16} color="var(--accent-cyan)" aria-hidden="true" />
                  <span className="skill-category-title">{cat.category}</span>
                </div>
                <span className="skill-category-count">
                  {cat.skills.length} TECHNOLOGIES
                </span>
              </div>

              <div className="skill-pill-list">
                {cat.skills.map((skill) => (
                  <span key={skill} className="skill-pill">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
