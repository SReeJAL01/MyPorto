import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import { FaArrowDown, FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiSparkles } from 'react-icons/hi2';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: 'Identity Document Data Extraction Dataset',
    blurb:
      'Built a diverse, ethically collected dataset for training document AI systems with high OCR and field-parsing accuracy.',
    tags: ['Computer Vision', 'Dataset Engineering', 'Ethical AI'],
  },
  {
    title: 'Uchiha Clan',
    blurb:
      'A GSAP-first cinematic website to master scroll-based storytelling, responsive animation patterns, and modern UI effects.',
    tags: ['GSAP', 'Responsive Design', 'Motion UI'],
  },
  {
    title: 'YuvAi',
    blurb:
      'Designed a kid-safe chatbot with API integrations and an intuitive interface for engaging and protected conversations.',
    tags: ['AI Chatbot', 'Prompt Engineering', 'API Integration'],
  },
  {
    title: 'NIFTY 5-Minute Quantitative Trading Pipeline',
    blurb:
      'End-to-end signal framework using regime detection (HMM), engineered features, and XGBoost/LSTM-based strategy enhancement.',
    tags: ['ML in Finance', 'HMM', 'XGBoost / LSTM'],
  },
];

const certifications = [
  'Infosys: AI Foundations, ML Foundations, Deep Learning Basics, Data Science Fundamentals',
  'NPTEL: AI, ML, Deep Learning with PyTorch, Reinforcement Learning, Statistics & Probability',
  'LinkedIn Learning: Python for Data Science, AI/ML Fundamentals, Neural Networks',
];

function Loader() {
  return (
    <motion.div
      className="loader"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.7, ease: 'easeInOut' } }}
    >
      <motion.div
        className="loader-ring"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, ease: 'linear', duration: 1.1 }}
      />
      <motion.h2
        initial={{ y: 14, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Crafting Sreejal&apos;s Universe...
      </motion.h2>
    </motion.div>
  );
}

function App() {
  const [loading, setLoading] = useState(true);
  const appRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (loading) return undefined;

    const lenis = new Lenis({
      lerp: 0.09,
      smoothWheel: true,
    });

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    const sections = gsap.utils.toArray('.reveal-section');
    sections.forEach((section) => {
      gsap.fromTo(
        section,
        { autoAlpha: 0, y: 80 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            once: true,
          },
        }
      );
    });

    const cards = gsap.utils.toArray('.project-card');
    cards.forEach((card) => {
      gsap.fromTo(
        card,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
          },
        }
      );
    });

    return () => {
      lenis.destroy();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [loading]);

  return (
    <div ref={appRef} className="app">
      <AnimatePresence>{loading && <Loader />}</AnimatePresence>

      {!loading && (
        <motion.main
          className="content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <header className="hero reveal-section" id="home">
            <div className="noise" />
            <p className="eyebrow">
              <HiSparkles /> Aspiring AI & Machine Learning Professional
            </p>
            <h1>Sreejal Shukla</h1>
            <p className="hero-copy">
              I build intelligent, visually immersive digital products at the intersection of AI, data science,
              and high-end front-end experiences.
            </p>
            <div className="hero-meta">
              <span>Faridabad, Haryana</span>
              <span>English • Hindi • Spanish</span>
            </div>
            <div className="cta-row">
              <a href="#projects">View Projects</a>
              <a href="#contact" className="ghost">
                Contact Me
              </a>
            </div>
            <div className="scroll-indicator">
              <FaArrowDown /> Scroll to explore
            </div>
          </header>

          <section className="about reveal-section" id="about">
            <h2>About Me</h2>
            <p>
              With a strong foundation in Computer Science (CSE-AIML), I focus on real-world AI/ML problem solving:
              data preprocessing, model training, evaluation, deployment, and thoughtful product execution.
            </p>
            <div className="chips">
              {['Python', 'Scikit-Learn', 'NumPy', 'Pandas', 'SQL', 'Linux', 'Computer Vision', 'Reinforcement Learning'].map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </section>

          <section className="timeline reveal-section" id="experience">
            <h2>Experience</h2>
            <article>
              <h3>Web Development Intern · VaultofCodes</h3>
              <p>Jun 2025 – Jul 2025</p>
              <ul>
                <li>Developed responsive web components and features independently.</li>
                <li>Implemented clean UI layouts aligned with modern UX principles.</li>
              </ul>
            </article>
            <article>
              <h3>AI & Prompt Engineering Intern</h3>
              <p>Jun 2025 – Jul 2025</p>
              <ul>
                <li>Created and optimized prompts for multi-domain AI applications.</li>
                <li>Improved response relevance, quality, and workflow efficiency.</li>
              </ul>
            </article>
            <article>
              <h3>Data Science with Python Intern · Main Flow Services & Technologies Pvt. Ltd.</h3>
              <p>Jun 2024 – Jul 2024</p>
              <ul>
                <li>Preprocessed and visualized real-world datasets using Python.</li>
                <li>Applied statistical and ML methods for actionable insights.</li>
              </ul>
            </article>
          </section>

          <section className="projects reveal-section" id="projects">
            <h2>Featured Projects</h2>
            <div className="project-grid">
              {projects.map((project) => (
                <motion.article
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 230, damping: 18 }}
                  key={project.title}
                  className="project-card"
                >
                  <h3>{project.title}</h3>
                  <p>{project.blurb}</p>
                  <div className="tags">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </motion.article>
              ))}
            </div>
          </section>

          <section className="education reveal-section" id="education">
            <h2>Education</h2>
            <ul>
              <li>Manav Rachna International Institute of Research and Studies — CSE (AIML), CGPA 7.0 (2022–2026)</li>
              <li>Taksh-Shila Model School — Class XII (CBSE), 76.5% (2022)</li>
              <li>Taksh-Shila Model School — Class X (CBSE), 88% (2020)</li>
            </ul>
          </section>

          <section className="certs reveal-section" id="certifications">
            <h2>Certifications</h2>
            <ul>
              {certifications.map((cert) => (
                <li key={cert}>{cert}</li>
              ))}
            </ul>
          </section>

          <footer className="contact reveal-section" id="contact">
            <h2>Let&apos;s Build Something Intelligent</h2>
            <p>
              Open to internships and opportunities in AI/ML, data science, and innovative digital experiences.
            </p>
            <div className="contact-grid">
              <a href="tel:+919205614604">+91 92056 14604</a>
              <a href="mailto:sreejal2003@gmail.com">sreejal2003@gmail.com</a>
              <a href="https://github.com/SReeJAL01" target="_blank" rel="noreferrer">
                <FaGithub /> SReeJAL01
              </a>
              <a href="https://www.linkedin.com/in/sreejalshukla" target="_blank" rel="noreferrer">
                <FaLinkedin /> sreejalshukla
              </a>
            </div>
          </footer>
        </motion.main>
      )}
    </div>
  );
}

export default App;
