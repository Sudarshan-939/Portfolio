import React, {useEffect, useMemo, useRef, useState} from 'react';
import {createRoot} from 'react-dom/client';
import {ArrowDown, ArrowUp, ArrowUpRight, BriefcaseBusiness, ChevronRight, Code2, Database, Download, GraduationCap, Mail, MapPin, Menu, Sparkles, X, Terminal, ExternalLink} from 'lucide-react';
import './styles.css';

function Github({size=24, className='', ...props}){
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
      <path d="M9 18c-4.51 2-5-2-7-2"/>
    </svg>
  );
}

function Linkedin({size=24, className='', ...props}){
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect x="2" y="9" width="4" height="12"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  );
}

const REPOS=[
  {name:'Document', title:'Document Intelligence / RAG', desc:'React-based document application paired with an AI document workflow. The portfolio highlights it as a flagship project for RAG and document Q&A.', tech:['React','Python','RAG','LangChain'], url:'https://github.com/Sudarshan-939/Document'},
  {name:'Document-B', title:'DocTeach AI', desc:'AI-powered document learning assistant with authentication, document management, embeddings, chunking, summaries and RAG chat.', tech:['Python','Flask','RAG','Sentence Transformers','SQLite'], url:'https://github.com/Sudarshan-939/Document-B'},
  {name:'Disease-Prediction', title:'CardioAI / Disease Prediction', desc:'Machine-learning web application for heart-disease risk prediction using a Random Forest pipeline and Flask dashboard.', tech:['Python','Flask','Random Forest','Pandas'], url:'https://github.com/Sudarshan-939/Disease-Prediction'},
  {name:'Emotion-Recognition', title:'Speech Emotion Recognition', desc:'Full-stack speech emotion platform using CNN, BiLSTM and CNN-LSTM architectures with a React + Three.js experience.', tech:['React','Three.js','FastAPI','TensorFlow'], url:'https://github.com/Sudarshan-939/Emotion-Recognition'},
  {name:'movie-prediction-', title:'CineScore - Movie Rating Prediction', desc:'AI-powered movie rating prediction app using an OMDB data pipeline and a Gradient Boosting regressor.', tech:['Python','Flask','Streamlit','Gradient Boosting'], url:'https://github.com/Sudarshan-939/movie-prediction-'},
  {name:'spring-boot', title:'Spring Boot Backend', desc:'Java Spring Boot learning and backend workspace from the GitHub profile.', tech:['Java','Spring Boot','Maven','REST'], url:'https://github.com/Sudarshan-939/spring-boot'},
  {name:'Emotion-Recognition', title:'Emotion Recognition', desc:'Public machine-learning repository centered on recognizing emotions from speech.', tech:['Deep Learning','Python','TensorFlow'], url:'https://github.com/Sudarshan-939/Emotion-Recognition'},
  {name:'vimala', title:'Vimala', desc:'Additional public repository from the developer profile.', tech:['GitHub Project'], url:'https://github.com/Sudarshan-939/vimala'},
  {name:'vimala-2', title:'Vimala 2', desc:'Additional public repository from the developer profile.', tech:['GitHub Project'], url:'https://github.com/Sudarshan-939/vimala-2'},
  {name:'mini-1', title:'Mini 1', desc:'Additional public project repository.', tech:['Project'], url:'https://github.com/Sudarshan-939/mini-1'},
  {name:'mini-2', title:'Mini 2', desc:'Additional public project repository.', tech:['Project'], url:'https://github.com/Sudarshan-939/mini-2'},
  {name:'postman', title:'Postman', desc:'Repository used for API experimentation and backend tooling.', tech:['Postman','API Testing'], url:'https://github.com/Sudarshan-939/postman'},
  {name:'Sudarshan-939', title:'Profile / Portfolio README', desc:'GitHub profile repository describing AI, ML, backend, RAG and analytics focus.', tech:['GitHub Profile'], url:'https://github.com/Sudarshan-939/Sudarshan-939'},
];

function useMouseGlow(){
  useEffect(()=>{
    const move=e=>document.documentElement.style.setProperty('--mx',`${e.clientX}px`)|document.documentElement.style.setProperty('--my',`${e.clientY}px`);
    window.addEventListener('pointermove',move,{passive:true});
    return()=>window.removeEventListener('pointermove',move);
  },[])
}
function TiltCard({children,className=''}){
  const ref=useRef(null);
  const move=e=>{const r=ref.current.getBoundingClientRect();const x=e.clientX-r.left,y=e.clientY-r.top;const rx=((y/r.height)-.5)*-7,ry=((x/r.width)-.5)*9;ref.current.style.setProperty('--rx',`${rx}deg`);ref.current.style.setProperty('--ry',`${ry}deg`)};
  const leave=()=>{if(ref.current){ref.current.style.setProperty('--rx','0deg');ref.current.style.setProperty('--ry','0deg')}};
  return <div ref={ref} onPointerMove={move} onPointerLeave={leave} className={`tilt ${className}`}>{children}</div>
}
function SectionHeading({eyebrow,title,body}){return <div className="section-heading"><div className="eyebrow">{eyebrow}</div><h2>{title}</h2>{body&&<p>{body}</p>}</div>}
function App(){
  useMouseGlow();
  const [open,setOpen]=useState(false);
  const [showAll,setShowAll]=useState(false);
  const [toast,setToast]=useState(false);
  const skills=useMemo(()=>[
    ['Python','AI / ML / Data','90'],['Java','Spring Boot / REST','78'],['React.js','Frontend','74'],['SQL','Data / Backend','82'],['LangChain','RAG / NLP','76'],['LLMs','Generative AI','72'],['Flask','Python Backend','75'],['MongoDB','Database','70'],['GitHub','Developer Tools','80']
  ],[]);
  const featured=REPOS.slice(0,6), rest=REPOS.slice(6);
  const nav=label=>{document.getElementById(label)?.scrollIntoView({behavior:'smooth'});setOpen(false)};
  const copyEmail=()=>{navigator.clipboard?.writeText('yhs.sudarshan@gmail.com');setToast(true);setTimeout(()=>setToast(false),1700)};
  return <div>
    <div className="cursor-glow"/>
    <div className="grid-bg"/>
    <header className="nav glass">
      <button className="brand" onClick={()=>nav('home')}><span className="brand-dot"/>YHS<span className="brand-sub">AI / ML</span></button>
      <nav className={open?'nav-links open':'nav-links'}>{[['about','About'],['experience','Experience'],['projects','Projects'],['skills','Skills'],['contact','Contact']].map(([id,t])=><button key={id} onClick={()=>nav(id)}>{t}</button>)}<a className="nav-cta" href="https://github.com/Sudarshan-939" target="_blank"><Github size={16}/> GitHub</a></nav>
      <button className="menu" onClick={()=>setOpen(v=>!v)}>{open?<X/>:<Menu/>}</button>
    </header>

    <main>
      <section id="home" className="hero container">
        <div className="hero-copy">
          <div className="hero-chip"><span className="live-dot"/> Available for internships & collaboration</div>
          <div className="eyebrow">Y HEMA SUDARSHAN</div>
          <h1>Building <em>intelligent</em><br/>systems with code.</h1>
          <p className="hero-text">B.Tech student specializing in <strong>Artificial Intelligence & Machine Learning</strong>, working across Python, Java, React, SQL, RAG, data analytics and backend APIs.</p>
          <div className="hero-actions"><button className="btn primary" onClick={()=>nav('projects')}>View projects <ArrowUpRight size={17}/></button><a className="btn ghost" href="https://www.linkedin.com/in/yelchuri-hema-sudarshan-03a481354" target="_blank"><Linkedin size={17}/> LinkedIn</a><button className="btn ghost" onClick={copyEmail}><Mail size={17}/> Email</button></div>
          <div className="hero-meta"><span><MapPin size={14}/> India</span><span><GraduationCap size={14}/> B.E CSE (AIML) • Expected 2028</span><span><Sparkles size={14}/> GPA 7.78</span></div>
        </div>
        <div className="hero-art">
          <div className="orb orb-a"/><div className="orb orb-b"/><div className="orbit orbit-1"/><div className="orbit orbit-2"/>
          <TiltCard className="profile-card glass-strong"><div className="scanlines"/><img src="/profile.png" alt="Y Hema Sudarshan profile"/><div className="profile-caption"><div><span className="mini-label">FOCUS</span><strong>AI • ML • BACKEND</strong></div><span className="profile-index">01 / 01</span></div></TiltCard>
          <div className="float-card one glass"><Code2 size={16}/><span>React + RAG</span></div><div className="float-card two glass"><Database size={16}/><span>SQL + MongoDB</span></div><div className="float-card three glass"><Terminal size={16}/><span>Python / Java</span></div>
        </div>
      </section>

      <section id="about" className="section container"><SectionHeading eyebrow="01 / ABOUT" title="Practical AI, grounded in software engineering." body="I enjoy turning machine-learning ideas into usable products - from document intelligence and RAG pipelines to prediction dashboards and API-driven systems."/><div className="about-grid"><TiltCard className="about-card glass"><div className="big-number">07.78</div><div><div className="mini-label">CURRENT GPA</div><p>BE-CSE (AIML), Prathyusha Engineering College, Tiruvallur. Expected 2028.</p></div></TiltCard><div className="about-copy"><p>My work sits at the intersection of <strong>AI/ML, data analytics and backend development</strong>. I have built applications using Python, Flask, React, Java, Spring Boot, SQL and MongoDB, with a growing focus on generative AI and retrieval-augmented generation.</p><div className="quote">“Build something useful. Then make it reliable.”</div></div></div></section>

      <section id="experience" className="section alt"><div className="container"><SectionHeading eyebrow="02 / EXPERIENCE" title="One month. Real exposure. More curiosity."/><div className="timeline"><div className="timeline-mark">2026</div><TiltCard className="experience-card glass"><div><div className="mini-label">JUL 01 - JUL 31, 2026</div><h3>Machine Learning Engineer Intern</h3><div className="company"><BriefcaseBusiness size={15}/> Code Alpha</div></div><ul><li>Completed a one-month machine learning internship with consistent delivery.</li><li>Applied analytical skills to machine-learning tasks and problem solving.</li><li>Adapted to emerging technologies and expanded technical skills.</li></ul></TiltCard></div></div></section>

      <section id="projects" className="section container"><SectionHeading eyebrow="03 / PROJECTS" title="Selected work from the GitHub lab." body="Flagship AI/ML builds first, followed by the rest of the public repositories in the profile."/><div className="projects-grid">{(showAll?REPOS:featured).map((p,i)=><TiltCard key={p.name+'-'+i} className="project-card glass"><div className="project-top"><span className="project-num">{String(i+1).padStart(2,'0')}</span><a href={p.url} target="_blank" aria-label={`Open ${p.name}`}><ExternalLink size={16}/></a></div><div className="project-icon"><Sparkles size={20}/></div><div className="project-title-row"><h3>{p.title}</h3><span>{p.name}</span></div><p>{p.desc}</p><div className="tags">{p.tech.map(t=><span key={t}>{t}</span>)}</div><a className="project-link" href={p.url} target="_blank">Open repository <ChevronRight size={16}/></a></TiltCard>)}</div><div className="project-more"><button className="btn ghost" onClick={()=>setShowAll(v=>!v)}>{showAll?'Show featured only':'Show all public repositories'} {showAll?<ArrowUp size={16}/>:<ArrowDown size={16}/>}</button><a className="btn primary" href="https://github.com/Sudarshan-939?tab=repositories" target="_blank">Explore GitHub <Github size={16}/></a></div><div className="repo-strip">{rest.map((r,i)=><a key={i} href={r.url} target="_blank"><span>#{i+7}</span>{r.name}<ArrowUpRight size={13}/></a>)}</div></section>

      <section id="skills" className="section dark"><div className="container"><SectionHeading eyebrow="04 / STACK" title="Tools I reach for." body="A practical stack spanning programming, AI, frontend and data systems."/><div className="skill-grid">{skills.map(([name,sub,val])=><TiltCard key={name} className="skill-card glass-dark"><div className="skill-head"><div><h3>{name}</h3><span>{sub}</span></div><b>{val}%</b></div><div className="meter"><i style={{width:val+'%'}}/></div></TiltCard>)}</div><div className="skill-chips">{['Prompt Engineering','NLP','LLMs','Data Analytics','REST APIs','Git','Postman','Flask','React.js','MongoDB'].map(s=><span key={s}>{s}</span>)}</div></div></section>

      <section id="contact" className="section contact-section container"><div className="contact-card glass-strong"><div className="eyebrow">05 / CONTACT</div><h2>Have a problem worth building?</h2><p>Let's connect around AI, ML, backend systems, document intelligence or data-driven products.</p><div className="contact-actions"><button className="btn primary" onClick={copyEmail}><Mail size={17}/> yhs.sudarshan@gmail.com</button><a className="btn ghost" href="https://www.linkedin.com/in/yelchuri-hema-sudarshan-03a481354" target="_blank"><Linkedin size={17}/> LinkedIn</a><a className="btn ghost" href="https://github.com/Sudarshan-939" target="_blank"><Github size={17}/> GitHub</a></div></div></section>
    </main>
    <footer className="footer container"><span>Y Hema Sudarshan</span><span>AI / ML • Backend • Data</span><span>© 2026</span></footer>
    {toast&&<div className="toast glass">Email copied</div>}
  </div>
}

createRoot(document.getElementById('root')).render(<App/>);
