import React, { useState } from 'react';
import { ArrowUpRight, Code2, ChevronDown, ChevronUp, BookOpen, Layers, Terminal, Sparkles, AudioWaveform as Waveform } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';

function GithubIcon({ size = 15, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

const FILTER_CATEGORIES = [
  'ALL',
  'AI / ML',
  'GENERATIVE AI',
  'NLP / RAG',
  'WEB',
  'BACKEND'
];

export default function Projects({ onSelectCaseStudy }) {
  const [activeFilter, setActiveFilter] = useState('ALL');
  const [expandedTechArch, setExpandedTechArch] = useState(false);

  const filteredProjects = PROJECTS.filter((proj) => {
    if (activeFilter === 'ALL') return true;
    return proj.categories.includes(activeFilter);
  });

  return (
    <section id="projects" className="portfolio-section container" aria-label="Projects Portfolio">
      <div className="section-header">
        <div className="section-eyebrow">03 // FEATURED ENGINEERING BUILDS</div>
        <h2>Flagship AI Systems & Production Pipelines</h2>
        <p>
          Deep learning audio classification, multi-format RAG document intelligence, and end-to-end machine learning services backed by verified code.
        </p>
      </div>

      {/* Filter Navigation */}
      <div className="project-filter-bar" role="tablist" aria-label="Filter projects by category">
        {FILTER_CATEGORIES.map((cat) => (
          <button
            key={cat}
            role="tab"
            aria-selected={activeFilter === cat}
            className={`filter-btn ${activeFilter === cat ? 'active' : ''}`}
            onClick={() => setActiveFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects List */}
      <div className="projects-stack-layout">
        {filteredProjects.map((project) => {
          if (project.isFlagship) {
            return (
              <article key={project.id} className="glass-panel flagship-project-card">
                {/* Header Row */}
                <div className="flagship-header-row">
                  <span className="project-rank-tag">{project.rank}</span>
                  <div className="project-actions-quick">
                    <button
                      onClick={() => onSelectCaseStudy(project)}
                      className="btn btn-secondary"
                      style={{ padding: '6px 14px', fontSize: '11px' }}
                      title="Open Technical Case Study"
                    >
                      <BookOpen size={13} />
                      <span>Case Study</span>
                    </button>
                  </div>
                </div>

                <h3 className="flagship-title">{project.title}</h3>
                <p className="project-oneliner">{project.oneLiner}</p>

                {/* Badges Row */}
                <div className="project-tags-row">
                  {project.tags.map((tag) => (
                    <span key={tag} className="badge-pill badge-cyan">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Key Features Highlight */}
                <div className="features-highlight-box">
                  <h4>KEY ARCHITECTURAL FEATURES</h4>
                  <ul className="features-list">
                    {project.keyFeatures.map((feat, idx) => (
                      <li key={idx}>{feat}</li>
                    ))}
                  </ul>
                </div>

                {/* Visual Architecture Flow */}
                {project.architectureFlow && (
                  <div className="architecture-pipeline-flow">
                    <div className="architecture-flow-title">
                      <span>PIPELINE EXECUTION FLOW</span>
                      <span style={{ fontSize: '10px', color: 'var(--text-dim)' }}>
                        {project.architectureFlow.length} PIPELINE PHASES
                      </span>
                    </div>

                    <div className="architecture-steps-grid">
                      {project.architectureFlow.map((step) => (
                        <div key={step.step} className="arch-step-node">
                          <span className="arch-step-num">{step.step}</span>
                          <span className="arch-step-name">{step.name}</span>
                          <span className="arch-step-desc">{step.desc}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Expandable Technical Architecture Toggle (Exclusive to SER flagship) */}
                {project.id === 'speech-emotion-recognition' && (
                  <div style={{ marginBottom: '24px' }}>
                    <button
                      onClick={() => setExpandedTechArch(!expandedTechArch)}
                      className="btn btn-secondary"
                      style={{ fontSize: '11px', padding: '7px 14px' }}
                      aria-expanded={expandedTechArch}
                    >
                      <Layers size={14} />
                      <span>{expandedTechArch ? 'Hide Technical Architecture Deep Dive' : 'Expand Technical Architecture Deep Dive'}</span>
                      {expandedTechArch ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                    </button>

                    {expandedTechArch && (
                      <div className="glass-panel" style={{ marginTop: '14px', padding: '20px', background: 'rgba(9, 13, 21, 0.75)' }}>
                        <h4 style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--accent-cyan)', marginBottom: '10px' }}>
                          ACOUSTIC SIGNAL & NEURAL SPECIFICATIONS
                        </h4>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px', fontSize: '12.5px', color: 'var(--text-sub)' }}>
                          <div>
                            <strong style={{ color: 'var(--text-main)', display: 'block', marginBottom: '4px' }}>Feature Extraction:</strong>
                            40 MFCCs, Delta & Delta-Delta coefficients, Mel-scaled spectrogram energies, and Chroma STFT vectors sampled at 22,050 Hz via Librosa.
                          </div>
                          <div>
                            <strong style={{ color: 'var(--text-main)', display: 'block', marginBottom: '4px' }}>Model Architectures:</strong>
                            1D/2D CNN feature extractors, Bidirectional LSTMs for temporal dynamics, Self-Attention layer with Softmax classification over 8 emotion states.
                          </div>
                          <div>
                            <strong style={{ color: 'var(--text-main)', display: 'block', marginBottom: '4px' }}>Inference & Serving:</strong>
                            FastAPI endpoint delivering sub-150ms prediction latency, Web Audio API waveform canvas, and optional NVIDIA NIM tone insights.
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* Action Buttons */}
                <div className="project-footer-actions">
                  {project.id === 'docteach-ai' ? (
                    <>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-secondary"
                      >
                        <GithubIcon size={15} />
                        <span>VIEW BACKEND</span>
                      </a>
                      <a
                        href={project.frontendUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-secondary"
                      >
                        <GithubIcon size={15} />
                        <span>VIEW FRONTEND</span>
                      </a>
                    </>
                  ) : (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary"
                    >
                      <GithubIcon size={15} />
                      <span>VIEW GITHUB</span>
                    </a>
                  )}

                  {project.liveDemoUrl && (
                    <a
                      href={project.liveDemoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary"
                    >
                      <ArrowUpRight size={15} />
                      <span>VIEW LIVE DEMO</span>
                    </a>
                  )}

                  <button
                    onClick={() => onSelectCaseStudy(project)}
                    className="btn btn-primary"
                  >
                    <BookOpen size={15} />
                    <span>VIEW CASE STUDY</span>
                  </button>
                </div>
              </article>
            );
          }

          // Secondary Projects (CineScore & Disease Prediction)
          return (
            <article key={project.id} className="glass-panel secondary-project-card">
              <div>
                <div className="flagship-header-row">
                  <span className="project-rank-tag">{project.rank}</span>
                  <button
                    onClick={() => onSelectCaseStudy(project)}
                    className="btn btn-ghost"
                    style={{ padding: '4px 8px', fontSize: '11px', color: 'var(--accent-cyan)' }}
                  >
                    <BookOpen size={13} />
                    <span>Case Study</span>
                  </button>
                </div>

                <h3 style={{ fontSize: '22px', marginBottom: '10px' }}>{project.title}</h3>
                <p style={{ fontSize: '14.5px', color: 'var(--text-sub)', marginBottom: '18px', lineHeight: 1.6 }}>
                  {project.oneLiner}
                </p>

                {/* Badges */}
                <div className="project-tags-row" style={{ marginBottom: '20px' }}>
                  {project.tags.map((tag) => (
                    <span key={tag} className="badge-pill">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Architecture Pipeline Flow */}
                {project.architectureFlow && (
                  <div style={{ marginBottom: '20px', padding: '14px', background: 'rgba(8, 12, 18, 0.6)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)' }}>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--accent-cyan)', marginBottom: '10px' }}>
                      PIPELINE ARCHITECTURE
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', alignItems: 'center' }}>
                      {project.architectureFlow.map((step, idx) => (
                        <React.Fragment key={step.step}>
                          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', background: 'rgba(255,255,255,0.04)', padding: '3px 8px', borderRadius: '4px' }}>
                            {step.name}
                          </span>
                          {idx < project.architectureFlow.length - 1 && (
                            <span style={{ color: 'var(--text-dim)', fontSize: '10px' }}>→</span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                )}

                {/* Key Features */}
                <ul className="features-list" style={{ gridTemplateColumns: '1fr', gap: '8px', marginBottom: '24px' }}>
                  {project.keyFeatures.slice(0, 3).map((feat, idx) => (
                    <li key={idx} style={{ fontSize: '13px' }}>{feat}</li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="project-footer-actions">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                >
                  <GithubIcon size={14} />
                  <span>VIEW GITHUB</span>
                </a>
                <button
                  onClick={() => onSelectCaseStudy(project)}
                  className="btn btn-primary"
                >
                  <BookOpen size={14} />
                  <span>VIEW CASE STUDY</span>
                </button>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
