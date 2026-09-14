import { useState, useEffect } from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

const allProjects = [
  // ─── Set 1: Top Flagships (Face Anti-Spoofing, Geochem, Darija Toxicity, Behavia) ───
  {
    id: 'face-antispoofing',
    name: 'Face Anti-Spoofing',
    category: 'Computer Vision · Adversarial AI',
    tagline: 'Adversarially Robust Swin Transformer',
    shortDesc:
      'Investigates Vision Transformer robustness against adversarial perturbations (FGSM, PGD) for biometric spoof detection.',
    tags: ['PyTorch', 'Swin Transformer', 'FGSM / PGD', 'Computer Vision'],
    url: null,
    isPrivate: true,
    overview:
      'Examines the vulnerability of hierarchical Vision Transformers (Swin) to iterative gradient-based adversarial spoofing attacks in biometric facial verification systems.',
    architecture:
      'Swin-T backbone fine-tuned for Presentation Attack Detection (PAD), benchmarked under white-box FGSM and Projected Gradient Descent (PGD) attacks with defensive distillation.',
    impact:
      'Identified critical spatial patch attention vulnerabilities, boosting adversarial robustness by +14% while retaining 96.8% clean classification accuracy under evasion attacks.',
    highlights: ['Swin Transformers', 'Adversarial Defense (PGD/FGSM)', 'Biometric Anti-Spoofing', 'Robustness Benchmarking'],
  },
  {
    id: 'geochem',
    name: 'Geochem Classifier',
    category: 'Industrial ML · Mining AI',
    tagline: 'Geochemical Ore Grade Classification',
    shortDesc: 'Machine learning system classifying mining samples into Sterile, Potential, and Ore from 36 parameters.',
    tags: ['Scikit-learn', 'Feature Engineering', 'Geochemistry', 'Classification'],
    url: 'https://github.com/0khacha/geochem-classifier',
    overview:
      'Engineered for industrial mining operations (Managem Group SMI) to classify exploratory drill assays into Sterile, Potential, and High-Grade Ore categories.',
    architecture:
      'Multi-layer Perceptron (MLP) and ensemble gradient boosting pipelines coupled with recursive feature elimination and robust scaling across 36 elemental trace assays.',
    impact:
      'Directly assists geological teams in prioritizing high-yield drill targets and minimizing exploration waste with reproducible cross-validated accuracy.',
    highlights: ['36 Elemental Variables', '3-Tier Classification', 'Exploration Optimization', 'Industrial ML'],
  },
  {
    id: 'darija-toxicity',
    name: 'Darija Toxicity Detection',
    category: 'Natural Language Processing · ArabERT',
    tagline: 'Dialectal Toxicity & Evasion Filter',
    shortDesc: 'NLP pipeline for toxicity detection in Moroccan Darija and Arabizi powered by a fine-tuned ArabERT model.',
    tags: ['ArabERT', 'Transformers', 'Darija NLP', 'HuggingFace'],
    url: 'https://github.com/0khacha/darija-toxicity-detection',
    overview:
      'Addresses the critical lack of dialectal moderation tools for low-resource languages. Detects insults, hate speech, and deliberate phonetic evasion in Moroccan Darija and Arabizi.',
    architecture:
      'Fine-tuned ArabERT transformer with dialectal transliteration mapping, subword tokenization, and adversarial phonetic noise handling for Latin/Arabic alphabet mixing.',
    impact:
      'Robustly detects masked toxicity and slang evasion patterns that standard multilingual BERT models fail to catch.',
    highlights: ['Fine-Tuned ArabERT', 'Arabizi & Darija NLP', 'Phonetic Evasion Detection', 'HuggingFace Pipeline'],
  },
  {
    id: 'behavia',
    name: 'Behavia',
    category: 'Big Data · Behavioral Intelligence',
    tagline: 'Human Behavior Intelligence Platform',
    shortDesc: 'Transforms raw behavioral event streams into explainable, continuously updated embeddings and predictive states.',
    tags: ['Apache Kafka', 'PyTorch', 'FastAPI', 'PostgreSQL', 'GNN'],
    url: 'https://github.com/0khacha/behavia',
    overview:
      'A production-oriented Human Behavior Intelligence Platform transforming high-velocity event streams into explainable, measurable, and continuously updated behavioral intelligence without PII.',
    architecture:
      'Bronze/Silver/Gold layered Lakehouse architecture ingesting via Apache Kafka into PostgreSQL. Features PyTorch sequence models (LSTM, Transformers), graph analytics (GNNs via PyTorch Geometric), and low-latency FastAPI endpoints.',
    impact:
      'Enables sub-second behavioral anomaly detection, dynamic user clustering, and real-time intent prediction over 100K+ synthetic event streams.',
    highlights: ['Bronze/Silver/Gold Lakehouse', 'Kafka Stream Ingestion', 'GNN & Sequence Models', 'FastAPI Microservices'],
  },

  // ─── Set 2: Domain ML & Deep Learning ───
  {
    id: 'fossilnet',
    name: 'FossilNet',
    category: 'Computer Vision · Paleontology',
    tagline: 'Deep Learning Fossil Taxonomy Classifier',
    shortDesc: 'Taught a neural network to read 500 million years of evolution from fossil specimen photography.',
    tags: ['PyTorch', 'EfficientNet', 'FastAPI', 'Transfer Learning'],
    url: 'https://github.com/0khacha/FossilNet',
    overview:
      'A computer vision system designed to automate paleontological taxonomy classification across deep geological eras using high-resolution specimen photography.',
    architecture:
      'Fine-tuned an EfficientNet-B4 convolutional neural network with custom data augmentation (shear, contrast normalization, random affine transforms) to handle eroded geological specimens.',
    impact:
      'Achieved 94.2% top-1 validation accuracy across extinct cephalopod and trilobite genera. Packaged into a low-latency FastAPI inference microservice.',
    highlights: ['94.2% Accuracy', 'Extinct Genera Classification', 'FastAPI Microservice', 'PyTorch / OpenCV'],
  },
  {
    id: 'chess-ai',
    name: 'Self-Play Chess AI',
    category: 'Behavioral Modeling · Game AI',
    tagline: 'Stylometric Player Emulation & Self-Play',
    shortDesc: "Play against an AI clone of any Chess.com player, trained on their real game history and tactical style.",
    tags: ['Python', 'Deep Learning', 'Chess.com API', 'NumPy'],
    url: 'https://github.com/0khacha/self-play-chess-ai',
    overview:
      'An AI engine that models individual human decision psychology and tactical habits rather than calculating raw engine moves, allowing users to spar against virtual player ghosts.',
    architecture:
      'Mines hundreds of thousands of PGN moves via the Chess.com public API. Trains a policy network evaluating board states against player-specific move frequencies and time-pressure blunder patterns.',
    impact:
      'Replicates player personas across 1400–2200 ELO ranges with an 89% stylometric match score for personalized opening and endgame preparation.',
    highlights: ['PGN Move Mining', 'Stylometric Matching (89%)', 'Personalized ELO Emulation', 'Chess.com API'],
  },
  {
    id: 'neurophysics',
    name: 'NeurophysicsLab',
    category: 'Physics-Informed AI · PINNs',
    tagline: 'Conservation Law Discovery via PINNs',
    shortDesc: 'Physics-informed neural networks that rediscover physical conservation laws directly from raw motion data.',
    tags: ['PINNs', 'Symbolic Regression', 'PyTorch', 'SciPy'],
    url: 'https://github.com/0khacha/neurophysics-lab',
    overview:
      'Combines physics-informed neural networks (PINNs) and symbolic regression to discover continuous physical invariants and partial differential equations governing dynamic systems.',
    architecture:
      'Multi-layer perceptron (MLP) trained with automatic differentiation (Autograd) penalizing deviations from physical conservation principles, coupled with symbolic regression to extract closed-form formulas.',
    impact:
      'Enforces energy conservation invariants to within 1e-4 relative error on chaotic double pendulums and nonlinear fluid systems without human priors.',
    highlights: ['Physics-Informed Loss', 'Energy Invariants (1e-4 error)', 'Symbolic Regression', 'Chaotic Systems'],
  },
  {
    id: 'music-mood',
    name: 'Music Mood AI',
    category: 'Affective Computing · Audio DSP',
    tagline: 'Continuous Emotional Arc Mapping',
    shortDesc: 'Maps the emotional arc of any audio track over time, producing timestamped emotion timelines.',
    tags: ['Librosa', 'PyTorch', 'Audio DSP', 'BiLSTM'],
    url: 'https://github.com/0khacha/music-mood-ai',
    overview:
      'A production-ready deep learning system that decomposes songs into continuous 2D emotional coordinates (Valence vs. Arousal) rather than static, single-genre labels.',
    architecture:
      'Extracts Mel-spectrograms and harmonic-percussive audio signals, feeding them into a sequential CNN-BiLSTM architecture with self-attention for temporal mood tracking.',
    impact:
      'Generates dynamic timeline visual representations showing micro-shifts in mood, harmonic tension, and percussive density with sub-second temporal resolution.',
    highlights: ['Valence-Arousal Mapping', 'CNN-BiLSTM Architecture', 'Mel-Spectrogram Extraction', 'Continuous Timeline'],
  },

  // ─── Set 3: Applied AI & Research ───
  {
    id: 'tifinagh',
    name: 'Tifinagh Recognizer',
    category: 'Deep Learning · OCR',
    tagline: 'Amazigh Script Character Classifier',
    shortDesc: 'Deep learning meets indigenous heritage — recognizing Amazigh characters with 97%+ accuracy.',
    tags: ['TensorFlow', 'CNN', 'Computer Vision', 'Tkinter'],
    url: 'https://github.com/0khacha/Tifinagh-Recognizer',
    overview:
      'An optical character recognition engine dedicated to preserving and digitizing the ancient Neo-Tifinagh alphabet used across North Africa, complete with an interactive GUI.',
    architecture:
      'Deep Convolutional Neural Network with residual connections and morphological dilation filters to handle hand-drawn irregularities and manuscript engraving artifacts.',
    impact:
      'Achieved 97.4% test accuracy across 33 unique characters, providing instant predictions with confidence scores and enabling transcription of historical texts.',
    highlights: ['97.4% Recognition Accuracy', '33 Alphabet Symbols', 'Tkinter GUI & Image Pipeline', 'Preservation AI'],
  },
  {
    id: 'ethics-classifier',
    name: 'Ethics Classifier',
    category: 'Machine Learning · Ethical AI',
    tagline: 'Moral Dilemma Classification & Reasoning',
    shortDesc: 'Supervised NLP pipeline classifying nuanced moral statements into Ethical vs. Unethical decisions with feature importance.',
    tags: ['Scikit-learn', 'NLP', 'Feature Selection', 'Explainable AI'],
    url: 'https://github.com/0khacha/ethics_classifier',
    overview:
      'A machine learning NLP pipeline designed to automatically classify complex moral statements and decision dilemmas into Ethical vs. Non-Ethical categories.',
    architecture:
      'Engineered with TF-IDF n-gram vectorization, Chi-square feature selection, and ensemble Scikit-learn classifiers with transparent feature importance ranking.',
    impact:
      'Provides interpretable reasoning attributes for normative decision-making systems and AI safety governance benchmarks.',
    highlights: ['TF-IDF Feature Engineering', 'Ensemble Classification', 'Decision Explainability', 'NLP Machine Learning'],
  },
  {
    id: 'plant-growth',
    name: 'Plant Growth Predictor',
    category: 'Green AI · Precision Agriculture',
    tagline: 'Environmental Crop Growth Estimator',
    shortDesc: 'Machine learning system estimating crop growth stages from soil, solar radiation, humidity, and climate parameters.',
    tags: ['TensorFlow', 'FastAPI', 'Environmental ML', 'Precision Ag'],
    url: 'https://github.com/0khacha/Plant-Growth-Predictor',
    overview:
      'A machine learning platform that predicts crop phenological development stages using multi-sensor environmental telemetry.',
    architecture:
      'Multi-variable neural network regression model trained on soil chemistry, sunlight index, irrigation frequency, and ambient humidity patterns.',
    impact:
      'Empowers precision agriculture systems to optimize dynamic irrigation schedules and forecast yield milestones accurately.',
    highlights: ['Environmental Modeling', 'Regression Neural Network', 'Precision Agriculture', 'Multi-Sensor ML'],
  },
  {
    id: 'veyral',
    name: 'Veyral AI',
    category: 'Multimodal AI · Video Analytics',
    tagline: 'Multimodal Virality & Retention AI',
    shortDesc: 'Multimodal AI platform analyzing pacing, audio hooks, and visual retention curves to predict content virality.',
    tags: ['Multimodal AI', 'Whisper', 'Computer Vision', 'Predictive Analytics'],
    url: 'https://github.com/0khacha/veyral',
    overview:
      'A multimodal intelligence platform analyzing visual hook density, pacing dynamics, and speech cadence to forecast viewer retention and virality.',
    architecture:
      'Pipeline pairing Whisper transcription with OpenCV temporal frame differential analysis and NLP sentiment momentum models.',
    impact:
      'Predicts retention drop-off inflection points before video release, giving creators data-driven optimization curves.',
    highlights: ['Multimodal AI Pipeline', 'Whisper Transcription', 'Retention Curve Modeling', 'Predictive Analytics'],
  },
];

function ArrowUpRight() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="7 7 17 7 17 17" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}

function ProjectCard({ project, onClick, index }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0, opacity: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      opacity: 1,
    });
  };

  const handleMouseLeave = () => {
    setMousePos((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <div
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ animationDelay: `${index * 80}ms` }}
      className="project-card-animate bg-surface-elevated/70 border border-text-tertiary/15 hover:border-accent/40 rounded-2xl sm:rounded-3xl p-6 sm:p-7 transition-all duration-300 backdrop-blur-sm flex flex-col justify-between space-y-6 group cursor-pointer hover:shadow-2xl hover:shadow-accent/10 hover:-translate-y-1.5 relative overflow-hidden"
    >
      {/* Dynamic Cursor-Tracking Ambient Spotlight */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300 z-0"
        style={{
          opacity: mousePos.opacity,
          background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgb(var(--color-accent) / 0.12), transparent 65%)`,
        }}
      />

      {/* Top Ambient Highlight Beam on Hover */}
      <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-accent/0 to-transparent group-hover:via-accent/60 transition-all duration-500 z-10" />

      <div className="relative z-10">
        <div className="flex justify-between items-start gap-4">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-surface border border-text-tertiary/20 text-accent font-medium group-hover:border-accent/30 transition-colors">
              {project.category}
            </span>
            {project.isPrivate && (
              <span className="text-[9px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full bg-surface border border-text-tertiary/20 text-text-tertiary inline-flex items-center gap-1 font-medium group-hover:text-amber-400 group-hover:border-amber-400/30 transition-colors">
                <LockIcon />
                Private
              </span>
            )}
          </div>
          
          <div className="w-8 h-8 rounded-full bg-surface border border-text-tertiary/20 flex items-center justify-center text-text-tertiary group-hover:text-accent group-hover:border-accent/40 group-hover:bg-accent/10 group-hover:scale-110 transition-all duration-300 shadow-sm">
            {project.isPrivate ? (
              <span className="group-hover:scale-110 transition-transform duration-200">
                <LockIcon />
              </span>
            ) : (
              <span className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200">
                <ArrowUpRight />
              </span>
            )}
          </div>
        </div>

        <h3 className="text-xl font-semibold text-text-primary mt-4 group-hover:text-accent transition-colors duration-200">
          {project.name}
        </h3>
        <p className="text-xs text-text-secondary font-medium mt-0.5">
          {project.tagline}
        </p>

        <p className="text-xs text-text-tertiary leading-relaxed mt-3">
          {project.shortDesc}
        </p>
      </div>

      <div className="relative z-10 flex items-center justify-between pt-4 border-t border-text-tertiary/10">
        <div className="flex flex-wrap gap-1.5">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-[10px] px-2 py-0.5 rounded-md bg-surface text-text-secondary border border-text-tertiary/15 group-hover:border-text-tertiary/30 transition-colors"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 3 && (
            <span className="text-[10px] px-1.5 py-0.5 text-text-tertiary font-mono">
              +{project.tags.length - 3}
            </span>
          )}
        </div>

        <span className="text-[11px] text-accent font-medium inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform duration-200">
          <span>Details</span>
          <span>→</span>
        </span>
      </div>
    </div>
  );
}

export default function Projects() {
  const sectionRef = useScrollReveal();
  const [currentPage, setCurrentPage] = useState(0);
  const [activeProject, setActiveProject] = useState(null);

  const pageSize = 4;
  const totalPages = Math.ceil(allProjects.length / pageSize);
  const currentProjects = allProjects.slice(currentPage * pageSize, (currentPage + 1) * pageSize);

  // Close modal with ESC key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setActiveProject(null);
    };
    if (activeProject) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [activeProject]);

  return (
    <section id="projects" className="w-full py-20 md:py-28 px-6 md:px-12 lg:px-16 bg-surface text-text-primary" ref={sectionRef}>
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header with 4-Box Pagination Switcher */}
        <div className="reveal flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-6 border-b border-text-tertiary/15 mb-12">
          <div>
            <span className="inline-flex items-center gap-2 text-caption tracking-widest text-text-tertiary uppercase">
              <span className="w-6 h-[1px] bg-accent inline-block" />
              02 / Engineering Works
            </span>
            <h2 className="text-2xl sm:text-3xl font-semibold text-text-primary tracking-tight mt-1">
              Selected Projects
            </h2>
          </div>

          {/* Switcher between the 4-box sets */}
          <div className="flex items-center gap-3 self-start sm:self-auto">
            <div className="flex bg-surface-elevated p-1 rounded-full border border-text-tertiary/15 backdrop-blur-sm">
              {['Top Flagships', 'Domain ML', 'Applied AI & Research'].map((setName, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentPage(idx)}
                  className={`px-4 py-1.5 rounded-full text-xs uppercase tracking-wider font-medium transition-all ${
                    currentPage === idx
                      ? 'bg-accent text-white shadow-md shadow-accent/25'
                      : 'text-text-secondary hover:text-text-primary'
                  }`}
                >
                  {setName}
                </button>
              ))}
            </div>

            {/* Arrow navigation */}
            <div className="flex items-center gap-1">
              <button
                onClick={() => setCurrentPage((prev) => (prev > 0 ? prev - 1 : totalPages - 1))}
                className="w-8 h-8 rounded-full border border-text-tertiary/20 flex items-center justify-center text-text-secondary hover:text-text-primary hover:border-accent transition-colors"
                aria-label="Previous projects"
              >
                ←
              </button>
              <button
                onClick={() => setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : 0))}
                className="w-8 h-8 rounded-full border border-text-tertiary/20 flex items-center justify-center text-text-secondary hover:text-text-primary hover:border-accent transition-colors"
                aria-label="Next projects"
              >
                →
              </button>
            </div>
          </div>
        </div>

        {/* 4 Boxes Grid (2x2) with Staggered Cascading Animation */}
        <div key={currentPage} className="grid grid-cols-1 md:grid-cols-2 gap-6 min-h-[440px]">
          {currentProjects.map((project, index) => (
            <ProjectCard
              key={`${currentPage}-${project.id}`}
              project={project}
              index={index}
              onClick={() => setActiveProject(project)}
            />
          ))}
        </div>

        {/* Compact Apple-Style Detail Modal */}
        {activeProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
            {/* Backdrop */}
            <div 
              className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
              onClick={() => setActiveProject(null)}
            />

            {/* Modal Card — Compact & Refined */}
            <div 
              className="relative w-full max-w-lg bg-surface border border-text-tertiary/20 rounded-2xl sm:rounded-3xl p-6 sm:p-7 shadow-2xl z-10 my-auto overflow-hidden transform-gpu animate-modal-enter"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-4 pb-4 border-b border-text-tertiary/15">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-accent font-medium">
                    {activeProject.category}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-text-primary mt-0.5">
                    {activeProject.name}
                  </h3>
                  <p className="text-xs text-text-secondary font-light">
                    {activeProject.tagline}
                  </p>
                </div>

                <button
                  onClick={() => setActiveProject(null)}
                  className="w-8 h-8 rounded-full bg-surface-elevated border border-text-tertiary/20 flex items-center justify-center text-text-secondary hover:text-text-primary hover:border-accent transition-colors flex-shrink-0"
                  aria-label="Close modal"
                >
                  <CloseIcon />
                </button>
              </div>

              {/* Highlights Chips */}
              <div className="grid grid-cols-2 gap-2 my-4">
                {activeProject.highlights.slice(0, 4).map((h, i) => (
                  <div key={i} className="bg-surface-elevated/80 px-2.5 py-1.5 rounded-lg border border-text-tertiary/10 text-center">
                    <span className="text-[10px] font-medium text-text-primary block truncate">
                      {h}
                    </span>
                  </div>
                ))}
              </div>

              {/* Body: Concise Overview & Architecture */}
              <div className="space-y-3 text-xs leading-relaxed text-text-secondary">
                <p>
                  <span className="font-medium text-text-primary">Overview: </span>
                  {activeProject.overview}
                </p>
                <p>
                  <span className="font-medium text-text-primary">Approach: </span>
                  {activeProject.architecture}
                </p>
                <p>
                  <span className="font-medium text-text-primary">Impact: </span>
                  {activeProject.impact}
                </p>
              </div>

              {/* Tech Stack */}
              <div className="mt-4 pt-3 border-t border-text-tertiary/10">
                <div className="flex flex-wrap gap-1">
                  {activeProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] px-2 py-0.5 rounded-md bg-surface-elevated border border-text-tertiary/20 text-text-secondary font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Footer CTA */}
              <div className="mt-5 pt-4 border-t border-text-tertiary/15 flex items-center justify-between gap-3">
                <span className="text-[11px] text-text-tertiary truncate">
                  {activeProject.isPrivate
                    ? 'Private Research Codebase'
                    : activeProject.url
                    ? 'Open Source Project'
                    : 'Proprietary Solution'}
                </span>

                {activeProject.isPrivate || !activeProject.url ? (
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-surface-elevated border border-text-tertiary/20 text-text-secondary text-xs font-medium">
                    <LockIcon />
                    <span>Private Repository</span>
                  </span>
                ) : (
                  <a
                    href={activeProject.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-accent text-white font-medium text-xs hover:bg-blue-600 transition-colors shadow-md shadow-accent/20 flex-shrink-0"
                  >
                    <span>View on GitHub</span>
                    <ArrowUpRight />
                  </a>
                )}
              </div>

            </div>
          </div>
        )}

        <div className="section-divider mt-20 max-w-6xl mx-auto" />
      </div>
    </section>
  );
}
