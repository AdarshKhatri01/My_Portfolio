"use client"

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Github } from "lucide-react";
import styles from "./Projects.module.css";
import crimeAwarePreview from '../assets/projects/crimeAwarePreview.png';
import portfolioPreview from '../assets/projects/portfolioPreview.png';
// import luxeRidePreview from '../assets/luxeRidePreview.png';
// import agriChainPreview from '../assets/agriChainPreview.png';
// import gradiaPreview from "../assets/gradiaPreview.png";
import LeetCode from "./LeetCode";

const projects = [
  {
    title: "CCTV Crime Surveillance",
    description: "This is an AI-powered real-time video surveillance system designed to detect violent activities such as fights, presence of weapons (guns/knives), and other suspicious behaviors. It leverages a hybrid deep learning pipeline where ResNet50 is used for feature extraction and LSTM for temporal sequence analysis across video frames. The system was trained on public datasets like the Hockey Fight dataset along with custom-curated samples, and evaluated using confusion matrices and classification reports to ensure reliability in real-world scenarios.",
    technologies: ["Python", "PyTorch", "OpenCV", "ResNet50", "LSTM", "Scikit-learn", "Matplotlib"],
    image: crimeAwarePreview,
    github: "https://github.com/AdarshKhatri01/Video-Surveillance",
    liveDemo: null
  },
  {
    title: "Personal Portfolio",
    description: "A personal portfolio website built using Vite, React to showcase my skills, projects, certifications, and achievements. I have also used web scraping techniques to dynamicaly fetch and display my LeetCode stats, GitHub contributions, and other relevant data.",
    technologies: ["React", "CSS", "Python", "Express", "Web Scraping"],
    image: portfolioPreview,
    github: "https://github.com/AdarshKhatri01/My_Portfolio",
    liveDemo: "https://my-portfolio-mt.vercel.app/",
  },
  {
    title: "Secure Login Hub",
    description: "Secure Login Hub",
    technologies: ["React", "CSS", "Formik", "NodeJS", "ExpressJS", "Mongoose"],
    image: portfolioPreview,
    github: "https://github.com/Adarsh-Khatri/SecureLoginHub/",
    liveDemo: "https://myblog--app.firebaseapp.com/login",
  },
  {
    title: "Blog App",
    description: "Blog App",
    technologies: ["React", "CSS", "NodeJS", "ExpressJS", "Mongoose"],
    image: portfolioPreview,
    github: "https://github.com/Adarsh-Khatri/Mern-Blog-App",
    liveDemo: "https://myblog--app.firebaseapp.com/login",
  },
];

const Projects = () => {
  const [expandedProject, setExpandedProject] = useState(null);
  const [showPreview, setShowPreview] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [showAllProjects, setShowAllProjects] = useState(false);

  const displayedProjects = showAllProjects ? projects : projects.slice(0, 3);

  const handleToggleProjects = () => {
    setShowAllProjects(!showAllProjects);
  };

  const handleProjectInteraction = (project) => {
    setSelectedProject(project);
    setShowPreview(true);
  };

  const closePreview = () => {
    setShowPreview(false);
  };

  return (
    <section id="projects" className={styles.projects}>
      <h2 className="section-title">Projects & Achievements</h2>

      {/* Projects Grid */}
      <div className={styles.projectGrid}>
        {displayedProjects.map((project, index) => (
          <motion.div
            key={index}
            className={`${styles.projectCard} ${expandedProject === index ? styles.expanded : ""}`}
            onMouseEnter={() => setExpandedProject(index)}
            onMouseLeave={() => setExpandedProject(null)}
            onClick={() => handleProjectInteraction(project)}
            whileHover={{
              scale: 1.03,
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)"
            }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
          >
            <div className={styles.projectImageContainer}>
              <img src={project.image || "/placeholder.svg"} alt={project.title} className={styles.projectImage} />
              {project.liveDemo && (
                <div className={styles.viewLiveOverlay}>
                  <span>Click to view live preview</span>
                </div>
              )}
            </div>
            <div className={styles.projectInfo}>
              <h3>{project.title}</h3>
              <p className={styles.projectDescription}>{project.description}</p>
              <div className={styles.projectTechnologies}>
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className={styles.techTag}>
                    {tech}
                  </span>
                ))}
              </div>
              <div className={styles.projectLinks}>
                <a href={project.github} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
                  <Github size={16} />
                  GitHub
                </a>
                {project.liveDemo && (
                  <button className={`${styles.projectLink} ${styles.demoLink}`}>
                    <ExternalLink size={16} />
                    Live Demo
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* View All / View Less Button */}
      {projects.length > 3 && (
        <div className={styles.viewMoreContainer}>
          <button className={styles.viewMoreButton} onClick={handleToggleProjects}>
            {showAllProjects ? (
              <>
                <span>View Less</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 15l-6-6-6 6"></path>
                </svg>
              </>
            ) : (
              <>
                <span>View All</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </>
            )}
          </button>
        </div>
      )}

      {/* Preview Modal */}
      <AnimatePresence>
        {showPreview && selectedProject && (
          <motion.div
            className={styles.previewModal}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className={styles.previewContent}
              initial={{ scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 50 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            >
              <div className={styles.previewHeader}>
                <h3>{selectedProject.title}</h3>
                <button className={styles.closeButton} onClick={closePreview}>
                  <X size={24} />
                </button>
              </div>

              <div className={styles.previewBody}>
                {selectedProject.liveDemo ? (
                  <div className={styles.iframeContainer}>
                    <iframe
                      src={selectedProject.liveDemo}
                      title={`${selectedProject.title} Preview`}
                      className={styles.previewIframe}
                      sandbox="allow-scripts allow-same-origin allow-forms"
                      loading="lazy" />
                  </div>
                ) : (
                  <div className={styles.noPreview}>
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className={styles.fallbackImage} />
                    <p>Live preview not available for this project</p>
                    <p>{selectedProject.description}</p>
                  </div>
                )}
              </div>

              <div className={styles.previewFooter}>
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.previewLink}
                >
                  <Github size={18} />
                  View on GitHub
                </a>
                {selectedProject.liveDemo && (
                  <a
                    href={selectedProject.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.previewLink}
                  >
                    <ExternalLink size={18} />
                    Open in New Tab
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <LeetCode />
    </section>
  );
};

export default Projects;
