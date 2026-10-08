# AI/ML Developer Portfolio Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Redesign and upgrade the existing React portfolio into a high-end, recruiter-focused, responsive AI/ML developer portfolio for Y Hema Sudarshan with zero fabricated data, flagship project prominence, interactive 12-section case study modals, and Lighthouse 95+ performance.

**Architecture:** Component-driven React 19 + Vite architecture with a modular design system in pure modern CSS. Data is decoupled into a dedicated, strictly verified data module (`src/data/portfolioData.js`). Interactive SVG architecture flows and slide-over case study modals provide technical depth without external heavy dependencies.

**Tech Stack:** React 19, Vite, Vanilla Modern CSS, Lucide React, SVG graphics, semantic HTML5.

## Global Constraints
- Absolute adherence to the user's resume, verified repositories, and prompt details. Zero fabricated metrics, companies, or technologies.
- Speech Emotion Recognition is Flagship Project #1; DocTeach AI (combining Document-B backend and Document frontend) is Flagship Project #2.
- CineScore and Disease Prediction / CardioAI are presented accurately as educational ML projects.
- No heavy 3D canvases or distracting neon bloom. High-end dark engineering aesthetic (`#07090e`).
- All interactive links must be functional; resume button downloads `/Y_Hema_Sudarshan_Resume.pdf`.

---

### Task 1: Portfolio Data Module & Foundation Scaffolding
**Files:**
- Create: `src/data/portfolioData.js`
- Test: Verify data imports and structures in build

**Interfaces:**
- Produces: `PERSONAL_INFO`, `FOCUS_AREAS`, `SKILLS_CATEGORIZED`, `PROJECTS`, `CERTIFICATIONS`, `EXPERIENCE`, `EDUCATION`, `PUBLIC_REPOS`

- [ ] **Step 1: Create `src/data/portfolioData.js` with complete, verified content**
Write all personal details, focus cards, 6 skills categories, 4 projects with 12-section case study data and architecture steps, timeline items, and certifications.

- [ ] **Step 2: Verify `src/data/portfolioData.js` syntax via node / build**
Run: `npm run build` to confirm data file is free of syntax errors.
Expected: Build succeeds or clean module resolution.

- [ ] **Step 3: Commit**
`git add src/data/portfolioData.js`
`git commit -m "feat: add comprehensive verified portfolio data module"`

---

### Task 2: SEO, HTML Head & Base CSS Design Tokens
**Files:**
- Modify: `index.html`
- Modify: `src/styles.css`

**Interfaces:**
- Produces: Complete CSS variable design system (`--bg-primary`, `--accent-cyan`, `--border-subtle`, glass utilities, typography tokens), SEO metadata, Google Fonts preconnect (`Space Grotesk`, `Inter`, `JetBrains Mono`).

- [ ] **Step 1: Update `index.html` with recruiter-ready SEO metadata**
Include proper `<title>`, `<meta name="description">`, OpenGraph, Twitter cards, viewport, theme-color `#07090e`, and font links.

- [ ] **Step 2: Update `src/styles.css` with dark engineering design system**
Implement base reset, custom scrollbars, utility classes (`glass`, `glass-strong`, `gradient-text`, `badge`, `chip`), grid background, responsive typography, and media queries.

- [ ] **Step 3: Run build to test CSS and HTML compilation**
Run: `npm run build`
Expected: Build succeeds with 0 errors.

- [ ] **Step 4: Commit**
`git add index.html src/styles.css`
`git commit -m "style: implement dark AI/ML design system tokens and SEO metadata"`

---

### Task 3: Sticky Navigation Bar & Mobile Drawer
**Files:**
- Create: `src/components/Navbar.jsx`
- Modify: `src/styles.css`

**Interfaces:**
- Consumes: `PERSONAL_INFO` from `src/data/portfolioData.js`
- Produces: `<Navbar activeSection={activeSection} onNavigate={handleNavigate} />`

- [ ] **Step 1: Implement `src/components/Navbar.jsx`**
Build sticky glass navbar with brand mark (`YHS • AI/ML`), section links (`Home`, `About`, `Skills`, `Projects`, `Experience`, `Certifications`, `Education`, `Contact`), social icons, resume button, and accessible mobile drawer with Escape key and focus management.

- [ ] **Step 2: Add navigation styles in `src/styles.css`**
Add styles for sticky desktop bar, active link indicators, hover glow, and responsive mobile menu drawer.

- [ ] **Step 3: Test and commit**
`git add src/components/Navbar.jsx src/styles.css`
`git commit -m "feat: implement responsive sticky navigation bar and mobile drawer"`

---

### Task 4: Hero Section & Subtle Neural Technical Visual
**Files:**
- Create: `src/components/Hero.jsx`
- Modify: `src/styles.css`

**Interfaces:**
- Consumes: `PERSONAL_INFO`
- Produces: `<Hero onExploreProjects={handleScrollToProjects} />`

- [ ] **Step 1: Implement `src/components/Hero.jsx`**
Include:
- Pulsing availability badge: `OPEN TO AI/ML INTERNSHIPS & OPPORTUNITIES`
- Headline: `AI/ML DEVELOPER` / `BUILDING INTELLIGENT, PRACTICAL AND SCALABLE APPLICATIONS`
- Supporting text and secondary statement
- Technology pills: `Python`, `Machine Learning`, `Generative AI`, `RAG`, `NLP`, `Java`, `Spring Boot`
- Buttons: `[VIEW PROJECTS]`, `[DOWNLOAD RESUME]`, `[GITHUB]`, `[LINKEDIN]`
- Right side: Clean profile card with `/profile.png` + subtle animated SVG Neural Flow diagram illustrating tensors and signal flow without blocking UI performance.

- [ ] **Step 2: Add hero styles in `src/styles.css`**
Grid layout, subtle node pulse keyframes, button variants, and responsive adjustments for mobile screens.

- [ ] **Step 3: Test and commit**
`git add src/components/Hero.jsx src/styles.css`
`git commit -m "feat: implement hero section with availability badge and neural flow visual"`

---

### Task 5: About Me & Core Focus Cards
**Files:**
- Create: `src/components/About.jsx`
- Modify: `src/styles.css`

**Interfaces:**
- Consumes: `PERSONAL_INFO`, `FOCUS_AREAS`
- Produces: `<About />`

- [ ] **Step 1: Implement `src/components/About.jsx`**
Build the narrative section, quick info panel (Specialization, Current Focus, Education, CGPA: 7.78), and the 4 premium focus cards:
1. AI / ML Applications
2. Generative AI & RAG
3. Intelligent Multimedia Systems
4. Backend & API Systems

- [ ] **Step 2: Add About styling in `src/styles.css`**
Card grid, glass styling, typography contrast, and micro-hover lifts.

- [ ] **Step 3: Test and commit**
`git add src/components/About.jsx src/styles.css`
`git commit -m "feat: implement about me section with quick stats and focus cards"`

---

### Task 6: Categorized Skills Section
**Files:**
- Create: `src/components/Skills.jsx`
- Modify: `src/styles.css`

**Interfaces:**
- Consumes: `SKILLS_CATEGORIZED`
- Produces: `<Skills />`

- [ ] **Step 1: Implement `src/components/Skills.jsx`**
Organize technical capabilities into 6 clear cards:
1. Programming (Python, Java, SQL)
2. AI / Machine Learning (Machine Learning, Prompt Engineering, NLP, LLMs, Generative AI, RAG)
3. Frameworks / Backend (Flask, FastAPI, Spring Boot, React.js, Node.js)
4. Data / Database (Pandas, NumPy, MongoDB, SQLite, MySQL)
5. AI / ML Tools (TensorFlow, Scikit-learn, LangChain, Sentence Transformers, OpenCV, Tesseract OCR)
6. Developer Tools (Git, GitHub, Postman, VS Code)

- [ ] **Step 2: Add Skills styling in `src/styles.css`**
Skill pill badges, category headers, subtle border glow, and responsive columns.

- [ ] **Step 3: Test and commit**
`git add src/components/Skills.jsx src/styles.css`
`git commit -m "feat: implement categorized skills grid"`

---

### Task 7: Projects Showcase with Flagship Prominence & Filtering
**Files:**
- Create: `src/components/Projects.jsx`
- Modify: `src/styles.css`

**Interfaces:**
- Consumes: `PROJECTS`
- Produces: `<Projects onSelectCaseStudy={handleOpenCaseStudy} />`

- [ ] **Step 1: Implement `src/components/Projects.jsx`**
- Category filter buttons (`ALL`, `AI / ML`, `GENERATIVE AI`, `NLP / RAG`, `WEB`, `BACKEND`).
- Flagship Card #1: Speech Emotion Recognition Platform (Full-width prominence, architecture flow, technical details toggle, audio AI badges, case study trigger).
- Flagship Card #2: DocTeach AI (Combining Document-B & Document, RAG pipeline visualization, case study trigger).
- Project #3: CineScore (OMDb + Gradient Boosting, architecture flow, case study trigger).
- Project #4: Disease Prediction / CardioAI (Educational ML framing, ROC-AUC evaluation, case study trigger).

- [ ] **Step 2: Add Projects styling in `src/styles.css`**
Distinct flagship card styling, architecture flow step connectors, badge highlights, and smooth filter transitions.

- [ ] **Step 3: Test and commit**
`git add src/components/Projects.jsx src/styles.css`
`git commit -m "feat: implement projects showcase with flagship hierarchy and pipeline flows"`

---

### Task 8: 12-Section Case Study Modal System
**Files:**
- Create: `src/components/CaseStudyModal.jsx`
- Modify: `src/styles.css`

**Interfaces:**
- Consumes: Selected project object from `PROJECTS`, `onClose` callback
- Produces: `<CaseStudyModal project={selectedProject} onClose={closeModal} />`

- [ ] **Step 1: Implement `src/components/CaseStudyModal.jsx`**
Build slide-over / full-screen technical modal drawer with:
- Top sticky action bar with title, tags, repo link, close button
- 12 distinct sections (01 Overview, 02 Problem, 03 Solution, 04 SVG Architecture Diagram, 05 Workflow, 06 Tech Stack, 07 Key Features, 08 Challenges & Solutions, 09 Results / Evaluation [factual only], 10 System UI Highlights, 11 Repository Details, 12 Demo / Local Execution)
- Accessibility: Escape key handler, focus trap, body scroll lock when open.

- [ ] **Step 2: Add Case Study modal styling in `src/styles.css`**
Backdrop blur overlay, slide-in animation, code block styling, SVG diagram responsive wrapper, section divider counters.

- [ ] **Step 3: Test and commit**
`git add src/components/CaseStudyModal.jsx src/styles.css`
`git commit -m "feat: implement 12-section technical case study modal drawer"`

---

### Task 9: Experience, Education & Certifications
**Files:**
- Create: `src/components/ExperienceEducation.jsx`
- Create: `src/components/Certifications.jsx`
- Modify: `src/styles.css`

**Interfaces:**
- Consumes: `EXPERIENCE`, `EDUCATION`, `CERTIFICATIONS`
- Produces: `<ExperienceEducation />`, `<Certifications />`

- [ ] **Step 1: Implement `src/components/ExperienceEducation.jsx`**
- Experience: Code Alpha Machine Learning Engineer Intern (1 July 2026 – 31 July 2026) with factual resume bullets.
- Education: Prathyusha Engineering College (CGPA 7.78, 2024-2028), Narayana Jr College (GPA 8.77, 2022-2024), GOVT High School (GPA 7.62, 2021-2022).

- [ ] **Step 2: Implement `src/components/Certifications.jsx`**
5 cards: Code Alpha Internship, TCS ION AI Foundation, TCS ION Generative AI Essential, TCS ION Soft Skills, MongoDB Database with verified dates.

- [ ] **Step 3: Test and commit**
`git add src/components/ExperienceEducation.jsx src/components/Certifications.jsx src/styles.css`
`git commit -m "feat: implement experience, education and certifications sections"`

---

### Task 10: Building in Public, Resume CTA, Contact & Footer
**Files:**
- Create: `src/components/BuildingInPublic.jsx`
- Create: `src/components/ResumeCTA.jsx`
- Create: `src/components/Contact.jsx`
- Modify: `src/styles.css`

**Interfaces:**
- Consumes: `PUBLIC_REPOS`, `PERSONAL_INFO`
- Produces: `<BuildingInPublic />`, `<ResumeCTA />`, `<Contact />`

- [ ] **Step 1: Implement `src/components/BuildingInPublic.jsx`**
Showcase 4 verified public repositories with direct GitHub URLs and primary CTA `[VISIT GITHUB]`.

- [ ] **Step 2: Implement `src/components/ResumeCTA.jsx`**
Recruiter-targeted banner: `WANT TO KNOW MORE ABOUT MY EXPERIENCE?` with `[DOWNLOAD RESUME]`, `[VIEW GITHUB]`, `[LINKEDIN]`.

- [ ] **Step 3: Implement `src/components/Contact.jsx` & Footer**
- Headline: `LET'S BUILD SOMETHING INTELLIGENT.`
- Copy email with toast alert, direct mailto link, LinkedIn, GitHub.
- Semantic footer with required branding and `© 2026 Y Hema Sudarshan`.

- [ ] **Step 4: Test and commit**
`git add src/components/BuildingInPublic.jsx src/components/ResumeCTA.jsx src/components/Contact.jsx src/styles.css`
`git commit -m "feat: implement building in public, resume CTA, and contact footer"`

---

### Task 11: App Composition, Toast System & Integration Assembly
**Files:**
- Modify: `src/main.jsx`
- Modify: `src/styles.css`

**Interfaces:**
- Assembles all components, manages modal state and toast alerts.

- [ ] **Step 1: Update `src/main.jsx` to assemble the full application**
Mount Navbar, Hero, About, Skills, Projects, Experience & Education, Certifications, Building in Public, Resume CTA, Contact, Footer, Toast notifications, and Case Study Modal.

- [ ] **Step 2: Run build to verify clean compilation**
Run: `npm run build`
Expected: Build succeeds with 0 errors.

- [ ] **Step 3: Test dev server startup and verify all interactions in browser**
Run dev server and test all buttons, modal open/close, resume download link, copy email, filters, responsive breakpoints.

- [ ] **Step 4: Commit**
`git add src/main.jsx src/styles.css`
`git commit -m "feat: assemble complete redesigned AI/ML portfolio application"`
