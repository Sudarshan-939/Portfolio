import React, { useEffect } from 'react';
import { X, ExternalLink, Code2, AlertTriangle, CheckCircle, Terminal, Layers } from 'lucide-react';

function GithubIcon({ size = 16, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

export default function CaseStudyModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  if (!project || !project.caseStudy) return null;

  const cs = project.caseStudy;

  return (
    <div 
      className="modal-backdrop" 
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Case Study: ${project.title}`}
    >
      <div 
        className="modal-drawer-container"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Header */}
        <div className="modal-sticky-header">
          <div className="modal-header-meta">
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--accent-cyan)', letterSpacing: '0.12em' }}>
              TECHNICAL CASE STUDY // {project.rank}
            </span>
            <h2 className="modal-project-title">{project.title}</h2>
          </div>

          <div className="modal-header-actions">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                style={{ padding: '6px 12px', fontSize: '11px' }}
                title="View Source on GitHub"
              >
                <GithubIcon size={14} />
                <span>GitHub</span>
              </a>
            )}
            <button
              onClick={onClose}
              className="modal-close-btn"
              aria-label="Close Case Study"
              title="Close (Esc)"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Scrollable 12-Section Body */}
        <div className="modal-scrollable-body">
          {/* 01 — Overview */}
          <section className="case-section">
            <div className="case-section-header">
              <span className="case-sec-index">01</span>
              <h3 className="case-sec-title">Overview</h3>
            </div>
            <p>{cs.overview}</p>
          </section>

          {/* 02 — Problem */}
          <section className="case-section">
            <div className="case-section-header">
              <span className="case-sec-index">02</span>
              <h3 className="case-sec-title">The Engineering Challenge / Problem</h3>
            </div>
            <p>{cs.problem}</p>
          </section>

          {/* 03 — Solution */}
          <section className="case-section">
            <div className="case-section-header">
              <span className="case-sec-index">03</span>
              <h3 className="case-sec-title">Technical Solution</h3>
            </div>
            <p>{cs.solution}</p>
          </section>

          {/* 04 — Architecture (SVG Diagram) */}
          <section className="case-section">
            <div className="case-section-header">
              <span className="case-sec-index">04</span>
              <h3 className="case-sec-title">System Architecture</h3>
            </div>
            <p>{cs.architecture}</p>

            <div className="case-svg-arch-box">
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--accent-cyan)', marginBottom: '14px' }}>
                ARCHITECTURE TOPOLOGY DIAGRAM
              </div>

              {/* Responsive SVG Architecture Flowchart */}
              <svg 
                viewBox="0 0 760 120" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                style={{ width: '100%', minWidth: '600px', display: 'block' }}
              >
                {/* Node 1 */}
                <rect x="10" y="30" width="130" height="60" rx="8" fill="#111827" stroke="rgba(110,231,255,0.4)" strokeWidth="1.5" />
                <text x="75" y="55" fill="#f8fafc" fontSize="11" fontWeight="600" textAnchor="middle" fontFamily="var(--font-heading)">CLIENT / INPUT</text>
                <text x="75" y="73" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="var(--font-mono)">Audio / Docs / Params</text>

                {/* Arrow 1 */}
                <path d="M140 60 H180" stroke="#6ee7ff" strokeWidth="1.5" strokeDasharray="3 3" />
                <polygon points="180,60 173,56 173,64" fill="#6ee7ff" />

                {/* Node 2 */}
                <rect x="180" y="30" width="150" height="60" rx="8" fill="#111827" stroke="rgba(129,140,248,0.5)" strokeWidth="1.5" />
                <text x="255" y="55" fill="#f8fafc" fontSize="11" fontWeight="600" textAnchor="middle" fontFamily="var(--font-heading)">FEATURE INGESTION</text>
                <text x="255" y="73" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="var(--font-mono)">DSP / OCR / Embeddings</text>

                {/* Arrow 2 */}
                <path d="M330 60 H370" stroke="#818cf8" strokeWidth="1.5" strokeDasharray="3 3" />
                <polygon points="370,60 363,56 363,64" fill="#818cf8" />

                {/* Node 3 */}
                <rect x="370" y="30" width="160" height="60" rx="8" fill="#111827" stroke="rgba(110,231,255,0.6)" strokeWidth="1.5" />
                <text x="450" y="55" fill="#6ee7ff" fontSize="11" fontWeight="600" textAnchor="middle" fontFamily="var(--font-heading)">INFERENCE ENGINE</text>
                <text x="450" y="73" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="var(--font-mono)">Neural / RAG / Regressor</text>

                {/* Arrow 3 */}
                <path d="M530 60 H570" stroke="#34d399" strokeWidth="1.5" strokeDasharray="3 3" />
                <polygon points="570,60 563,56 563,64" fill="#34d399" />

                {/* Node 4 */}
                <rect x="570" y="30" width="170" height="60" rx="8" fill="#111827" stroke="rgba(52,211,153,0.6)" strokeWidth="1.5" />
                <text x="655" y="55" fill="#34d399" fontSize="11" fontWeight="600" textAnchor="middle" fontFamily="var(--font-heading)">STRUCTURED SERVING</text>
                <text x="655" y="73" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="var(--font-mono)">Confidence / API Response</text>
              </svg>
            </div>
          </section>

          {/* 05 — Workflow */}
          <section className="case-section">
            <div className="case-section-header">
              <span className="case-sec-index">05</span>
              <h3 className="case-sec-title">Execution Workflow</h3>
            </div>
            <p>{cs.workflow}</p>
          </section>

          {/* 06 — Technology Stack */}
          <section className="case-section">
            <div className="case-section-header">
              <span className="case-sec-index">06</span>
              <h3 className="case-sec-title">Technology Stack & Libraries</h3>
            </div>
            <table className="case-tech-table">
              <tbody>
                {cs.techStack.map((tech, idx) => (
                  <tr key={idx}>
                    <td>{tech.label}</td>
                    <td>{tech.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          {/* 07 — Key Features */}
          <section className="case-section">
            <div className="case-section-header">
              <span className="case-sec-index">07</span>
              <h3 className="case-sec-title">Key Architectural Features</h3>
            </div>
            <div className="case-challenges-list">
              {cs.keyFeaturesDetailed.map((feat, idx) => (
                <div key={idx} className="challenge-item-card" style={{ borderLeft: '3px solid var(--accent-cyan)' }}>
                  <p style={{ color: 'var(--text-main)', fontSize: '13.5px' }}>{feat}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 08 — Challenges & Solutions */}
          <section className="case-section">
            <div className="case-section-header">
              <span className="case-sec-index">08</span>
              <h3 className="case-sec-title">Technical Challenges & Resolutions</h3>
            </div>
            <div className="case-challenges-list">
              {cs.challenges.map((ch, idx) => (
                <div key={idx} className="challenge-item-card">
                  <div className="challenge-item-title">
                    <AlertTriangle size={14} />
                    <span>CHALLENGE: {ch.challenge}</span>
                  </div>
                  <div className="challenge-solution-text">
                    <strong style={{ color: 'var(--accent-emerald)' }}>SOLUTION: </strong>
                    {ch.solution}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 09 — Results / Evaluation */}
          <section className="case-section">
            <div className="case-section-header">
              <span className="case-sec-index">09</span>
              <h3 className="case-sec-title">Results & Model Evaluation</h3>
            </div>
            <div className="glass-panel" style={{ padding: '20px', borderLeft: '3px solid var(--accent-emerald)' }}>
              <p style={{ color: 'var(--text-main)' }}>{cs.results}</p>
              <div style={{ marginTop: '10px', fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-dim)' }}>
                * All evaluations derived strictly from actual repository training scripts and validated validation runs.
              </div>
            </div>
          </section>

          {/* 10 — Interface Highlights */}
          <section className="case-section">
            <div className="case-section-header">
              <span className="case-sec-index">10</span>
              <h3 className="case-sec-title">System UI & Component Architecture</h3>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px' }}>
              {cs.screenshots.map((shot, idx) => (
                <div key={idx} className="glass-panel" style={{ padding: '18px' }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--accent-cyan)', marginBottom: '8px' }}>
                    {shot.title}
                  </div>
                  <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>{shot.caption}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 11 — Repository */}
          <section className="case-section">
            <div className="case-section-header">
              <span className="case-sec-index">11</span>
              <h3 className="case-sec-title">Source Code Repositories</h3>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', alignItems: 'center' }}>
              <a
                href={cs.repository}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                <GithubIcon size={16} />
                <span>PRIMARY REPO: {cs.repository.replace('https://github.com/', '')}</span>
              </a>

              {cs.frontendRepo && (
                <a
                  href={cs.frontendRepo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                >
                  <GithubIcon size={16} />
                  <span>FRONTEND REPO: {cs.frontendRepo.replace('https://github.com/', '')}</span>
                </a>
              )}
            </div>
          </section>

          {/* 12 — Demo & Local Execution */}
          <section className="case-section">
            <div className="case-section-header">
              <span className="case-sec-index">12</span>
              <h3 className="case-sec-title">Local Execution & Demo Instructions</h3>
            </div>
            <div className="terminal-code-block">
              {cs.demoNotes}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
