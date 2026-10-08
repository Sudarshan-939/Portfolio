import React from 'react';
import { Award, CheckCircle2, Calendar } from 'lucide-react';
import { CERTIFICATIONS } from '../data/portfolioData';

export default function Certifications() {
  return (
    <section id="certifications" className="portfolio-section container" aria-label="Certifications">
      <div className="section-header">
        <div className="section-eyebrow">05 // CREDENTIALS</div>
        <h2>Professional Certifications & Validations</h2>
        <p>
          Verified certifications in Machine Learning, Generative AI, AI Foundations, Databases, and Soft Skills.
        </p>
      </div>

      <div className="certifications-grid">
        {CERTIFICATIONS.map((cert, idx) => (
          <div key={idx} className="glass-panel cert-card">
            <div>
              <div className="cert-card-top">
                <span className="cert-badge-type">{cert.category}</span>
                <CheckCircle2 size={16} color="var(--accent-emerald)" aria-hidden="true" />
              </div>

              <h4>{cert.title}</h4>
              <div className="cert-issuer">{cert.issuer}</div>
            </div>

            <div className="cert-date">
              <Calendar size={12} style={{ display: 'inline', marginRight: '5px', verticalAlign: '-1px' }} />
              <span>Issued: {cert.date}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
