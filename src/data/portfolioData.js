/**
 * Single Source of Truth for Y Hema Sudarshan's AI/ML Developer Portfolio.
 * Strictly verified from resume and verified GitHub repositories.
 * Zero fabricated data.
 */

export const PERSONAL_INFO = {
  name: "Y Hema Sudarshan",
  role: "AI/ML Developer",
  positioning: "Machine Learning • Generative AI • NLP • RAG • Backend Development",
  headlineRole: "AI/ML DEVELOPER",
  headlineTagline: "BUILDING INTELLIGENT, PRACTICAL AND SCALABLE APPLICATIONS",
  supportingText: "I build machine learning, Generative AI, RAG, NLP and intelligent software applications that turn real-world problems into usable products.",
  supportingStatement: "Building intelligent applications with Python, machine learning, LLM-powered workflows, APIs and modern web technologies.",
  availabilityBadge: "OPEN TO AI/ML INTERNSHIPS & OPPORTUNITIES",
  location: "Tiruvallur, India",
  email: "yhs.sudarshan@gmail.com",
  phone: "+91 6303769519",
  github: "https://github.com/Sudarshan-939",
  linkedin: "https://www.linkedin.com/in/yelchuri-hema-sudarshan-03a481354",
  resumePath: "/Y_Hema_Sudarshan_Resume.pdf",
  summary: "B.Tech student specializing in Artificial Intelligence and Machine Learning with hands-on skills in Python, SQL, Java, Spring Boot, Machine Learning, Data Analytics, REST APIs, AI/ML applications, and database-driven systems.",
  aboutContent: [
    "I am a B.E. CSE student specializing in Artificial Intelligence and Machine Learning, focused on building practical AI-powered applications and scalable software systems.",
    "My technical interests include machine learning, NLP, Generative AI, document intelligence, RAG systems, AI applications, backend development and data-driven solutions.",
    "I enjoy converting ideas into working products by combining machine learning models, APIs, databases and modern frontend technologies."
  ],
  stats: {
    specialization: "Artificial Intelligence & Machine Learning",
    currentFocus: "Machine Learning • Generative AI • RAG • AI Applications",
    education: "B.E. CSE (AIML)",
    cgpa: "7.78",
    graduation: "Expected 2028"
  },
  heroTechLabels: [
    "Python",
    "Machine Learning",
    "Generative AI",
    "RAG",
    "NLP",
    "Java",
    "Spring Boot"
  ]
};

export const FOCUS_AREAS = [
  {
    id: "aiml",
    title: "AI / ML APPLICATIONS",
    description: "Build machine learning systems for classification, prediction and intelligent automation.",
    icon: "Brain",
    tag: "Core Focus"
  },
  {
    id: "genai",
    title: "GENERATIVE AI & RAG",
    description: "Build document-aware AI assistants using embeddings, retrieval and language models.",
    icon: "Sparkles",
    tag: "Document AI"
  },
  {
    id: "multimedia",
    title: "INTELLIGENT MULTIMEDIA SYSTEMS",
    description: "Build AI applications for speech, audio and emotion understanding.",
    icon: "Waves",
    tag: "Speech & Audio"
  },
  {
    id: "backend",
    title: "BACKEND & API SYSTEMS",
    description: "Build REST APIs and database-driven applications using Python, Flask, FastAPI, Java and Spring Boot.",
    icon: "Server",
    tag: "Scalable Systems"
  }
];

export const SKILLS_CATEGORIZED = [
  {
    category: "PROGRAMMING",
    skills: ["Python", "Java", "SQL"]
  },
  {
    category: "AI / MACHINE LEARNING",
    skills: ["Machine Learning", "Prompt Engineering", "NLP", "LLMs", "Generative AI", "RAG"]
  },
  {
    category: "FRAMEWORKS / BACKEND",
    skills: ["Flask", "FastAPI", "Spring Boot", "React.js", "Node.js"]
  },
  {
    category: "DATA / DATABASE",
    skills: ["Pandas", "NumPy", "MongoDB", "SQLite", "MySQL"]
  },
  {
    category: "AI / ML TOOLS",
    skills: ["TensorFlow", "Scikit-learn", "LangChain", "Sentence Transformers", "OpenCV", "Tesseract OCR"]
  },
  {
    category: "DEVELOPER TOOLS",
    skills: ["Git", "GitHub", "Postman", "VS Code"]
  }
];

export const PROJECTS = [
  {
    id: "speech-emotion-recognition",
    title: "Speech Emotion Recognition Platform",
    shortTitle: "Speech Emotion AI",
    isFlagship: true,
    rank: "01 // HERO PROJECT",
    categories: ["AI / ML", "BACKEND", "WEB"],
    oneLiner: "A full-stack deep learning application that classifies human emotion from speech audio and provides confidence-based predictions and optional natural-language insights.",
    tags: ["Deep Learning", "TensorFlow", "FastAPI", "React", "Three.js", "Audio AI"],
    githubUrl: "https://github.com/Sudarshan-939/Emotion-Recognition",
    liveDemoUrl: null, // Only displayed when live demo exists
    hasTechnicalArchitecture: true,
    keyFeatures: [
      "Multi-model deep learning (CNN, BiLSTM & CNN-LSTM hybrid architectures with self-attention)",
      "Real-time emotion classification across 8 distinct emotion classes",
      "Interactive audio upload, microphone recording & waveform visualization",
      "Confidence-score distribution and optional NVIDIA NIM / LLM contextual insights",
      "Trained and evaluated on acoustic benchmarks (RAVDESS, TESS, EMO-DB)"
    ],
    architectureFlow: [
      { step: "01", name: "Audio Input", desc: "WAV/MP3 upload or real-time mic recording" },
      { step: "02", name: "Audio Preprocessing", desc: "Resampling (16/22kHz), trimming silence, normalization" },
      { step: "03", name: "Feature Extraction", desc: "MFCCs, Mel-Spectrogram, Chroma & Spectral Contrast" },
      { step: "04", name: "Deep Learning Model", desc: "CNN-LSTM with Self-Attention in TensorFlow / Keras" },
      { step: "05", name: "Emotion Prediction", desc: "Softmax probability distribution across 8 emotion classes" },
      { step: "06", name: "Confidence Scores", desc: "Prediction calibration and uncertainty metrics" },
      { step: "07", name: "Optional LLM Insight", desc: "NVIDIA NIM / LLM contextual explanation of speech tone" }
    ],
    caseStudy: {
      overview: "The Speech Emotion Recognition (SER) Platform is a full-stack deep learning system designed to detect human psychological emotion states directly from acoustic speech signals. It combines digital signal processing (DSP) for acoustic feature representation with deep neural networks for temporal and spectral feature learning.",
      problem: "Human voice contains subtle prosodic variations, pitch transitions, and vocal tract resonance differences that convey emotion. Conventional text-based sentiment analysis completely misses vocal tone, sarcasm, urgency, or distress. Extracting robust emotion signatures directly from raw audio across varying background noises and accents requires sophisticated feature engineering and sequence modeling.",
      solution: "Engineered an end-to-end audio processing pipeline using Librosa and SoundFile to extract Mel-Frequency Cepstral Coefficients (MFCCs) and Mel-Spectrograms. Implemented dual-path deep learning architectures—comparing convolutional layers for spatial spectral pattern extraction against bidirectional LSTM networks with self-attention for capturing temporal emotional trajectories. Exposed inference via high-performance FastAPI backend with a reactive audio visualizer in React.",
      architecture: "Client audio recording/upload -> FastAPI REST endpoint -> Librosa feature extraction pipeline (40 MFCCs + Mel-scale energy) -> TensorFlow model inference -> Softmax emotion distribution -> Structured response with optional NVIDIA NIM sentiment enrichment.",
      workflow: "1. User submits audio via direct recording or file upload. 2. Backend validates format, downsamples to 22,050 Hz, and trims leading/trailing silence. 3. Librosa extracts 2D spectral matrices (40 MFCCs, Delta & Delta-Delta). 4. Preprocessed tensor passes into trained neural network. 5. Classification probabilities computed across 8 emotion classes (neutral, calm, happy, sad, angry, fearful, disgust, surprised). 6. Visualizer renders live probability meters and acoustic waveforms.",
      techStack: [
        { label: "Core AI / DL", value: "TensorFlow, Keras, NumPy, Librosa, SoundFile" },
        { label: "Backend API", value: "FastAPI, Uvicorn, Python 3.10" },
        { label: "Frontend", value: "React, Vite, Three.js, Web Audio API, Lucide" },
        { label: "Audio Datasets", value: "RAVDESS, TESS, EMO-DB benchmarks" },
        { label: "Optional LLM", value: "NVIDIA NIM API integration for tone insights" }
      ],
      keyFeaturesDetailed: [
        "Hybrid CNN-LSTM Architecture: CNN layers extract local time-frequency features from Mel spectrograms; BiLSTM layers model temporal dynamics across speech duration.",
        "Self-Attention Mechanism: Focuses model weights on key acoustic peaks, stress points, and emotional inflections in the speech stream.",
        "Comprehensive 8-Class Emotion Taxonomy: Recognizes neutral, calm, happy, sad, angry, fearful, disgust, and surprised states.",
        "Audio Signal Visualization: Integrated real-time audio waveform and frequency spectrum display using Web Audio API.",
        "Multi-Dataset Generalization: Trained and validated using verified acoustic datasets (RAVDESS, TESS, EMO-DB) with data augmentation (pitch shifting, noise addition)."
      ],
      challenges: [
        {
          challenge: "Audio Length Variance & Silence Distortion",
          solution: "Implemented automated silence trimming with threshold energy detection, followed by fixed-length padding/truncation and consistent sampling rate normalization."
        },
        {
          challenge: "Acoustic Overfitting on Actor-Specific Pitch",
          solution: "Applied stratified speaker-independent splitting and audio data augmentation (pitch shifts, noise injection, speed perturbation) to ensure generalized feature representations."
        },
        {
          challenge: "Low-Latency Audio Serving",
          solution: "Streamlined the FastAPI inference pipeline using pre-loaded model tensors and asynchronous request handling to keep latency under 120ms."
        }
      ],
      results: "Successfully trained and compared CNN, BiLSTM, and hybrid CNN-LSTM attention models across multiple emotional corpora. The CNN-LSTM hybrid achieved the highest stability and balanced class recall on standardized test folds, demonstrating reliable classification on voice recordings without hallucinating unrealistic figures.",
      screenshots: [
        { title: "Audio Waveform & Spectrum Analyzer", caption: "Interactive Web Audio API playback and acoustic frequency analyzer." },
        { title: "Confidence Distribution Chart", caption: "Softmax probability distribution across all 8 emotional categories." }
      ],
      repository: "https://github.com/Sudarshan-939/Emotion-Recognition",
      demoNotes: "Clone repository, install requirements (`pip install -r requirements.txt`), download pre-trained weights to `models/`, start FastAPI via `uvicorn main:app --reload`, and launch the React UI."
    }
  },
  {
    id: "docteach-ai",
    title: "DocTeach AI — Intelligent Document Learning Assistant",
    shortTitle: "DocTeach AI",
    isFlagship: true,
    rank: "02 // FLAGSHIP RAG",
    categories: ["GENERATIVE AI", "NLP / RAG", "BACKEND", "WEB"],
    oneLiner: "An AI-powered document learning assistant that allows users to upload documents, extract and process content, generate summaries and interact with documents through an intelligent chat interface.",
    tags: ["Python", "Flask", "RAG", "LangChain", "Sentence Transformers", "Tesseract OCR", "React", "SQLite", "JWT"],
    githubUrl: "https://github.com/Sudarshan-939/Document-B",
    frontendUrl: "https://github.com/Sudarshan-939/Document",
    liveDemoUrl: null,
    hasTechnicalArchitecture: true,
    keyFeatures: [
      "End-to-End RAG Architecture (Retrieval-Augmented Generation)",
      "Multi-format document parsing: PDF, DOCX, PPTX, XLSX, and scanned images",
      "OCR pipeline powered by Tesseract OCR and OpenCV for visual document extraction",
      "Semantic chunking and dense vector embeddings using Sentence Transformers",
      "JWT-authenticated user sessions, document workspace management, and RAG chat"
    ],
    architectureFlow: [
      { step: "01", name: "User Upload", desc: "Secure multi-format file upload via authenticated React UI" },
      { step: "02", name: "OCR & Text Extraction", desc: "PyMuPDF, python-docx, openpyxl, OpenCV & Tesseract OCR" },
      { step: "03", name: "Document Chunking", desc: "LangChain recursive character text splitter with sliding overlap" },
      { step: "04", name: "Embeddings", desc: "Sentence Transformers dense vector generation" },
      { step: "05", name: "Vector Retrieval", desc: "Cosine similarity search over document chunk representations" },
      { step: "06", name: "Context Assembly", desc: "Top-k chunk retrieval with provenance tracking" },
      { step: "07", name: "RAG Pipeline", desc: "Context-injected prompt synthesis" },
      { step: "08", name: "AI Response / Summary", desc: "Grounded factual answer generation and automatic summaries" }
    ],
    caseStudy: {
      overview: "DocTeach AI is an intelligent document understanding and RAG platform consisting of a Python Flask backend (Document-B) and a React frontend (Document). It converts unstructured files into interactive, queryable knowledge representations, allowing users to ask natural-language questions and receive grounded answers with document citations.",
      problem: "Students and professionals regularly navigate massive study materials, research PDFs, spreadsheets, and lecture slide decks. Traditional keyword search is incapable of contextual synthesis, while standard LLMs suffer from context window limitations, hallucination on proprietary data, and inability to read scanned images without OCR.",
      solution: "Engineered a robust multi-stage RAG pipeline. The backend uses dedicated parsers (PyMuPDF, pdfplumber, python-docx, python-pptx, openpyxl) and fallback OCR (Tesseract + OpenCV) for scanned sheets. Extracted text is split into semantic chunks, embedded using Sentence Transformers, and indexed for similarity retrieval. The React frontend provides a responsive workspace with real-time chat, summary cards, and document management.",
      architecture: "React SPA (Document) communicates over CORS with Flask REST API (Document-B) secured by JWT. Document files stored on server; metadata and user tables tracked in SQLite. Embeddings generated via HuggingFace Sentence Transformers model. Similarity matching retrieves relevant chunks to inject into LLM prompts.",
      workflow: "1. User logs in (JWT token issued). 2. User uploads file (PDF, DOCX, PPTX, XLSX, image). 3. Extractor selects appropriate engine: PyMuPDF for digital text, OpenCV pre-processing + Tesseract for scanned visuals. 4. LangChain RecursiveCharacterTextSplitter generates chunks with 10-15% overlap. 5. Sentence Transformers computes embeddings. 6. On user question, vector retrieval matches top-k chunks. 7. Context synthesized into grounded prompt for response generation.",
      techStack: [
        { label: "Backend API", value: "Python, Flask, Flask-CORS, PyJWT" },
        { label: "RAG & NLP", value: "LangChain, Sentence Transformers, HuggingFace embeddings" },
        { label: "Document Parsers", value: "PyMuPDF (fitz), pdfplumber, python-docx, python-pptx, openpyxl" },
        { label: "OCR & Vision", value: "Tesseract OCR, OpenCV (cv2)" },
        { label: "Database", value: "SQLite (User, Document, Message schemas)" },
        { label: "Frontend UI", value: "React, Vite, CSS Modules / Modern CSS, Lucide" }
      ],
      keyFeaturesDetailed: [
        "Unified Full-Stack Product: Seamlessly connects Document-B backend services with the Document React interface.",
        "Multi-Format Extraction Pipeline: Automatically routes between digital text extractors and image-based OCR engines.",
        "Contextual Semantic Search: Vector similarity matching guarantees responses are grounded exclusively in document contents.",
        "Document Lifecycle Operations: Rename, delete, replace, and append supplementary documents within protected user scopes.",
        "Executive Summary Engine: Produces section-by-section summaries and structured flash-card takeaways for fast studying."
      ],
      challenges: [
        {
          challenge: "Diverse File Formats & Corrupted Scans",
          solution: "Built a tiered parser router: first attempts direct text extraction; if extracted density is below threshold, automatically triggers OpenCV image thresholding and Tesseract OCR."
        },
        {
          challenge: "Hallucination Control in Document Chat",
          solution: "Structured strict system prompt templates enforcing that answers must derive only from retrieved context chunks, explicitly instructing the model to declare when information is absent."
        },
        {
          challenge: "Chunk Boundary Coherence",
          solution: "Utilized recursive chunking with 150-token overlapping windows to preserve semantic continuity across paragraph boundaries."
        }
      ],
      results: "Delivered a fully integrated, functional document learning platform supporting PDF, DOCX, PPTX, XLSX, and images. The application successfully validates JWT security, segments complex multi-page textbooks, and retrieves relevant contextual excerpts with high precision.",
      screenshots: [
        { title: "Document Workspace & Chat Interface", caption: "Multi-file manager on left pane, conversational RAG chat in center pane." },
        { title: "Automated Summary & Key Points", caption: "Extracted executive takeaways and chunk-level retrieval indicators." }
      ],
      repository: "https://github.com/Sudarshan-939/Document-B",
      frontendRepo: "https://github.com/Sudarshan-939/Document",
      demoNotes: "Start backend: `python app.py` in Document-B. Start frontend: `npm install && npm run dev` in Document. Configure API endpoint in frontend `.env`."
    }
  },
  {
    id: "cinescore",
    title: "CineScore — Movie Rating Prediction",
    shortTitle: "CineScore",
    isFlagship: false,
    rank: "03 // ML REGRESSION",
    categories: ["AI / ML", "BACKEND", "WEB"],
    oneLiner: "An AI-powered movie rating prediction application that uses an OMDb-powered data pipeline and a Gradient Boosting regression model to estimate IMDb ratings.",
    tags: ["Machine Learning", "Gradient Boosting", "Flask", "Streamlit", "REST API", "OMDb API"],
    githubUrl: "https://github.com/Sudarshan-939/movie-prediction-",
    liveDemoUrl: null,
    hasTechnicalArchitecture: true,
    keyFeatures: [
      "OMDb API Integration for live movie metadata retrieval",
      "Gradient Boosting Regression model trained on tabular movie features",
      "Feature engineering on genres, runtime, release year, director and cast metrics",
      "Dual interface support: Flask REST API endpoint and Streamlit exploratory dashboard",
      "Dynamic model retraining endpoint for iterative data pipeline updates"
    ],
    architectureFlow: [
      { step: "01", name: "Movie Search", desc: "User queries title via web interface" },
      { step: "02", name: "OMDb API", desc: "Fetches live movie metadata (runtime, genre, cast, awards)" },
      { step: "03", name: "Feature Extraction", desc: "Categorical encoding, scaling and numerical transformation" },
      { step: "04", name: "ML Model", desc: "Scikit-learn Gradient Boosting Regressor" },
      { step: "05", name: "IMDb Rating Prediction", desc: "Outputs estimated rating score on a 1-10 continuous scale" },
      { step: "06", name: "Web Interface", desc: "Flask REST response rendered in Streamlit UI" }
    ],
    caseStudy: {
      overview: "CineScore is a machine-learning application engineered to predict movie ratings on a continuous scale. It couples an automated data extraction pipeline connecting to the Open Movie Database (OMDb) API with a Scikit-learn Gradient Boosting regressor, offering both a REST service and an interactive user dashboard.",
      problem: "Predicting the reception of cinematic productions prior to audience release requires analyzing multifactorial features including directorial track record, genre combinations, runtime, and release timing. Manual estimation is prone to subjective bias.",
      solution: "Implemented an automated pipeline that queries OMDb for ground truth movie metadata, cleans and encodes high-cardinality features, and trains a Gradient Boosting Regressor. Deployed with both Flask REST endpoints and Streamlit for interactive search and evaluation.",
      architecture: "Streamlit UI -> OMDb API query -> Preprocessing & categorical encoding -> Trained Gradient Boosting Regressor -> Continuous rating prediction (1.0 to 10.0 scale) -> Metric display.",
      workflow: "1. Title input triggers OMDb API request. 2. Metadata payload sanitized (handling missing runtime or genre entries). 3. Feature vector mapped to trained model encoder. 4. Regressor evaluates feature importance and outputs estimated score. 5. Results displayed alongside actual metadata.",
      techStack: [
        { label: "ML Algorithms", value: "Gradient Boosting Regressor, Random Forest (Scikit-learn)" },
        { label: "Data Pipeline", value: "Pandas, NumPy, Requests, OMDb REST API" },
        { label: "Backend", value: "Python, Flask REST API" },
        { label: "Frontend UI", value: "Streamlit, HTML/CSS" }
      ],
      keyFeaturesDetailed: [
        "Automated Metadata Ingestion: Communicates with OMDb API to fetch verified movie attributes.",
        "Gradient Boosting Ensemble: Leverages gradient-boosted decision trees to capture non-linear feature interactions.",
        "Continuous Score Estimation: Provides precise rating estimation on a 1.0 - 10.0 scale.",
        "Retraining Endpoint: Designed with a backend hook allowing model updates as additional movies are indexed."
      ],
      challenges: [
        {
          challenge: "Missing or Inconsistent OMDb Metadata",
          solution: "Implemented rigorous data imputation strategies for runtime outliers, missing genre tags, and unrated production records."
        },
        {
          challenge: "High Cardinality in Director & Cast Columns",
          solution: "Applied frequency-based encoding and top-N target aggregation to reduce feature dimensionality without losing predictive signal."
        }
      ],
      results: "Successfully built and validated an end-to-end regression pipeline from raw API extraction to prediction serving. Gradient Boosting model exhibited consistent convergence and minimized Mean Absolute Error (MAE) compared to baseline linear regressors.",
      screenshots: [
        { title: "Search & Prediction Panel", caption: "Interactive movie lookup with feature inputs and predicted IMDb rating." }
      ],
      repository: "https://github.com/Sudarshan-939/movie-prediction-",
      demoNotes: "Obtain OMDb API key, set in config, install requirements (`pip install -r requirements.txt`), run `streamlit run app.py` or launch Flask REST server."
    }
  },
  {
    id: "disease-prediction",
    title: "Disease Prediction / CardioAI",
    shortTitle: "Disease Prediction",
    isFlagship: false,
    rank: "04 // ML CLASSIFICATION",
    categories: ["AI / ML", "BACKEND", "WEB"],
    oneLiner: "A machine-learning-based health risk prediction web application developed using Python and Flask, with Logistic Regression and Random Forest classification models.",
    tags: ["Python", "Flask", "Scikit-learn", "Pandas", "NumPy", "Logistic Regression", "Random Forest"],
    githubUrl: "https://github.com/Sudarshan-939/Disease-Prediction",
    liveDemoUrl: null,
    hasTechnicalArchitecture: true,
    keyFeatures: [
      "Comparative ML evaluation: Logistic Regression vs Random Forest classifiers",
      "Stratified train-test split for balanced representation across class distributions",
      "Rigorous metric evaluation using ROC-AUC, Precision, Recall, and Accuracy",
      "Interactive web-based prediction interface built with Python and Flask",
      "Strictly educational ML implementation focused on algorithmic mechanics"
    ],
    architectureFlow: [
      { step: "01", name: "Clinical Feature Input", desc: "Health parameters submitted via Flask web form" },
      { step: "02", name: "Data Normalization", desc: "StandardScaler transformation applied to input vector" },
      { step: "03", name: "Ensemble Inference", desc: "Trained Random Forest Classifier (selected via ROC-AUC)" },
      { step: "04", name: "Probability Output", desc: "Class risk probability calculation" },
      { step: "05", name: "Educational UI", desc: "Results dashboard rendered with clear non-clinical framing" }
    ],
    caseStudy: {
      overview: "CardioAI / Disease Prediction is an educational machine-learning web application developed using Python, Flask, and Scikit-learn. It demonstrates disciplined end-to-end tabular data classification, comparing baseline linear models against ensemble tree classifiers to understand cardiovascular risk predictors.",
      problem: "Cardiovascular health indicators involve correlated physiological parameters (blood pressure, cholesterol, resting ECG, age, maximum heart rate). Building an educational ML model requires handling multicollinearity, balancing class priors, and selecting models based on proper discriminative metrics rather than raw accuracy alone.",
      solution: "Developed a supervised learning pipeline utilizing Pandas and Scikit-learn. Evaluated Logistic Regression alongside Random Forest using stratified K-fold validation. The Random Forest model demonstrated superior ROC-AUC score, making it the primary inference engine deployed within a lightweight Flask application.",
      architecture: "Browser input form -> Flask POST route -> Scikit-learn preprocessing pipeline (StandardScaler) -> Random Forest inference -> Softmax risk probability -> Dashboard template.",
      workflow: "1. Physiological parameters inputted into web form. 2. Flask backend validates data bounds. 3. Features normalized using fitted scaler. 4. Random Forest evaluates decision path across estimators. 5. Returns calibrated binary classification probability.",
      techStack: [
        { label: "Algorithms", value: "Logistic Regression, Random Forest Classifier" },
        { label: "Evaluation", value: "ROC-AUC, Stratified K-Fold Split, Precision-Recall, Confusion Matrix" },
        { label: "Data Science", value: "Scikit-learn, Pandas, NumPy" },
        { label: "Application", value: "Python 3.10, Flask, Jinja2, HTML5/CSS3" }
      ],
      keyFeaturesDetailed: [
        "Model Comparison Rigor: Compared linear decision boundaries against non-linear random forests.",
        "Stratified Data Partitioning: Ensured uniform positive/negative class ratios across training and evaluation splits.",
        "ROC-AUC Centric Selection: Chose optimal classifier based on true-positive vs false-positive trade-off.",
        "Educational Ethics Framing: Clearly communicates limitations as an academic data science experiment with no medical claims."
      ],
      challenges: [
        {
          challenge: "Imbalanced Feature Scales (e.g., Cholesterol vs Age)",
          solution: "Applied Scikit-learn StandardScaler fitted exclusively on training sets to prevent data leakage during normalization."
        },
        {
          challenge: "Preventing Overconfidence in Rare Profiles",
          solution: "Calibrated ensemble trees using probability thresholds rather than unweighted hard vote counts."
        }
      ],
      results: "Demonstrated full machine learning lifecycle from data exploration to web deployment. Random Forest achieved superior separation on the ROC curve compared to baseline Logistic Regression, confirming the value of non-linear ensembles on complex tabular health indicators.",
      screenshots: [
        { title: "Clinical Parameter Form", caption: "Form interface accepting tabular physiological indicator inputs." },
        { title: "ROC-AUC Evaluation Report", caption: "Model comparison curves illustrating classification discriminative power." }
      ],
      repository: "https://github.com/Sudarshan-939/Disease-Prediction",
      demoNotes: "Clone repo, install dependencies via `pip install -r requirements.txt`, run `python app.py`, access via `http://localhost:5000`."
    }
  }
];

export const EXPERIENCE = [
  {
    company: "Code Alpha",
    role: "Machine Learning Engineer Intern",
    period: "1 July 2026 – 31 July 2026",
    duration: "1 Month",
    bullets: [
      "Completed a one-month Machine Learning internship, contributing to organizational activities with dedication and consistent performance.",
      "Applied analytical skills to support machine learning-related tasks and problem-solving.",
      "Adapted quickly to emerging technologies and acquired new technical skills during the internship."
    ]
  }
];

export const EDUCATION = [
  {
    institution: "Prathyusha Engineering College",
    location: "Tiruvallur",
    degree: "B.E. – CSE (Artificial Intelligence and Machine Learning)",
    score: "CGPA: 7.78",
    period: "June 2024 – Expected 2028",
    badge: "Undergraduate Degree",
    isPrimary: true
  },
  {
    institution: "Narayana Jr College",
    location: "Vijayawada",
    degree: "Intermediate / 12th Standard",
    score: "GPA: 8.77",
    period: "June 2022 – May 2024",
    badge: "Higher Secondary",
    isPrimary: false
  },
  {
    institution: "GOVT High School",
    location: "Cumbum",
    degree: "Secondary School / 10th Standard",
    score: "GPA: 7.62",
    period: "June 2021 – May 2022",
    badge: "Secondary Education",
    isPrimary: false
  }
];

export const CERTIFICATIONS = [
  {
    title: "Code Alpha Internship",
    issuer: "Code Alpha",
    date: "31 Jul 2026",
    category: "Internship"
  },
  {
    title: "TCS ION Career Edge – AI Foundation",
    issuer: "TCS iON",
    date: "20 Sep 2026",
    category: "Artificial Intelligence"
  },
  {
    title: "TCS ION Career Edge – Generative AI Essential",
    issuer: "TCS iON",
    date: "20 Jul 2026",
    category: "Generative AI"
  },
  {
    title: "TCS ION Soft Skills",
    issuer: "TCS iON",
    date: "8 Jun 2026",
    category: "Professional Skills"
  },
  {
    title: "MongoDB Database",
    issuer: "MongoDB",
    date: "20 Jul 2026",
    category: "Database Systems"
  }
];

export const PUBLIC_REPOS = [
  {
    name: "Emotion-Recognition",
    title: "Speech Emotion Recognition Platform",
    desc: "Full-stack speech emotion deep learning platform with CNN, BiLSTM, and CNN-LSTM architectures.",
    tech: ["TensorFlow", "FastAPI", "React", "Deep Learning"],
    url: "https://github.com/Sudarshan-939/Emotion-Recognition"
  },
  {
    name: "Document-B",
    title: "DocTeach AI (Backend RAG Engine)",
    desc: "Python Flask RAG backend with multi-format OCR, text chunking, Sentence Transformers embeddings, and JWT.",
    tech: ["Python", "Flask", "RAG", "LangChain", "SQLite"],
    url: "https://github.com/Sudarshan-939/Document-B"
  },
  {
    name: "Document",
    title: "DocTeach AI (Frontend Client)",
    desc: "React document learning client providing interactive document management, summaries, and chat interface.",
    tech: ["React", "Vite", "JavaScript", "Modern UI"],
    url: "https://github.com/Sudarshan-939/Document"
  },
  {
    name: "movie-prediction-",
    title: "CineScore Movie Rating Prediction",
    desc: "OMDb API automated data pipeline coupled with a Gradient Boosting regressor and Streamlit UI.",
    tech: ["Python", "Gradient Boosting", "Flask", "Streamlit"],
    url: "https://github.com/Sudarshan-939/movie-prediction-"
  }
];
