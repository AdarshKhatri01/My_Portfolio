import { useState } from 'react';
import { motion } from 'motion/react';
import styles from "./Skills.module.css";
import pythonLogo from "../assets/skills/python.png";
import javascriptLogo from "../assets/skills/javascript.png";
import cLogo from "../assets/skills/c.png";
import cppLogo from "../assets/skills/cpp.png";
import htmlLogo from "../assets/skills/html.png";
import cssLogo from "../assets/skills/css.png";
import bootstrapLogo from "../assets/skills/bootstrap.webp";
import materialUILogo from "../assets/skills/materialUI.webp";
import tailwindCSSLogo from "../assets/skills/tailwindCSS.webp";
import reactLogo from "../assets/skills/react.png";
import nextjsLogo from "../assets/skills/nextjs.webp";
import expressLogo from "../assets/skills/express.png";
import nodeLogo from "../assets/skills/node.png";
import oopLogo from "../assets/skills/oop.png";
import dsaLogo from "../assets/skills/dsa.png";
import dbmsLogo from "../assets/skills/dbms.png";
import gitLogo from "../assets/skills/git.png";
import githubLogo from "../assets/github.png";
import linuxLogo from "../assets/skills/linux.png";
import mysqlLogo from "../assets/skills/mysql.png";
import numpyLogo from "../assets/skills/numpy.png";
import matlabLogo from "../assets/skills/matlab.webp";
import skillDetails from '../json/SkillDetails';
const skillCategories = [
  {
    name: "Programming Languages",
    skills: [
      { name: "Python", logo: pythonLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "C", logo: cLogo },
      { name: "C++", logo: cppLogo },
      { name: "Matlab", logo: matlabLogo }
    ],
  },
  {
    name: "Web Development",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "Bootstrap", logo: bootstrapLogo },
      { name: "Tailwind CSS", logo: tailwindCSSLogo },
      { name: "Matrial UI", logo: materialUILogo },
      { name: "React JS", logo: reactLogo },
      { name: "Next JS", logo: nextjsLogo },
      { name: "Express JS", logo: expressLogo },
      { name: "Node JS", logo: nodeLogo }
    ],
  },
  {
    name: "Core Concepts",
    skills: [
      { name: "Object-Oriented Programming (OOP)", logo: oopLogo },
      { name: "Data Structures & Algorithms", logo: dsaLogo },
      { name: "Database Management Systems (DBMS)", logo: dbmsLogo },
    ],
  },
  {
    name: "Tools & Platforms",
    skills: [
      { name: "Matlab", logo: matlabLogo },
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "Linux", logo: linuxLogo },
      { name: "MySQL", logo: mysqlLogo },
      { name: "NumPy", logo: numpyLogo },
    ],
  },
];

// --- Reusable TickerRow component ---
const TickerRow = ({ skills, openSkillModal, reverse }) => {
  const repeatedSkills = [...skills, ...skills]; // duplicate for seamless loop

  return (
    <div className={styles.tickerWrapper}>
      <motion.div
        className={styles.tickerContent}
        initial={{ x: "0%" }}
        animate={{ x: reverse ? "100%" : "-100%" }}
        transition={{
          ease: "linear",
          duration: 3,
          delay: 1,
          repeat: Infinity,
          repeatType: "loop",
        }}
      >
        {repeatedSkills.map((skill, index) => (
          <div
            key={index}
            className={styles.skillItem}
            onClick={() => openSkillModal(skill)}
          >
            <img
              src={skill.logo || "/placeholder.png"}
              alt={skill.name}
              className={styles.skillLogo}
            />
            <span className={styles.skillName}>{skill.name}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);

  const openSkillModal = (skill) => {
    setSelectedSkill(skill);
    document.body.style.overflow = 'hidden';
  };

  const closeSkillModal = () => {
    setSelectedSkill(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="skills" className={styles.skills}>
      <h2 className="section-title">My Skills</h2>
      <div className={styles.skillCategories}>
        {skillCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className={styles.category}>
            <h3 className={styles.categoryTitle}>{category.name}</h3>
            <TickerRow
              skills={category.skills}
              openSkillModal={openSkillModal}
              reverse={categoryIndex % 2 !== 0}
            />
          </div>
        ))}
      </div>

      {selectedSkill && (
        <SkillModal skill={selectedSkill} onClose={closeSkillModal} />
      )}
    </section>
  );
};

export default Skills;











// const SkillModal = ({ skill, onClose }) => {
//   const [activeTab, setActiveTab] = useState('useCases');


//   const details = skillDetails[skill.name] || {
//     description: `Details about ${skill.name} will be added soon.`,
//     experience: "Intermediate",
//     startedYear: 2020,
//     projects: [],
//     certifications: [],
//     useCases: [
//       { name: "Web Development", description: "Building responsive websites", icon: "🌐" },
//       { name: "Data Analysis", description: "Processing and visualizing data", icon: "📊" },
//       { name: "Automation", description: "Automating repetitive tasks", icon: "⚙️" }
//     ],
//     strengthMeter: 75 // Percentage value
//   };

//   return (
//     <div className={styles.modalOverlay} onClick={onClose}>
//       <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
//         <div className={styles.modalHeader}>
//           <div className={styles.modalTitleContainer}>
//             <img src={skill.logo} alt={skill.name} className={styles.modalLogo} />
//             <h3 className={styles.modalTitle}>{skill.name}</h3>
//           </div>
//           <button className={styles.closeButton} onClick={onClose}>×</button>
//         </div>

//         <div className={styles.modalDescription}>
//           {details.description}
//         </div>

//         <div className={styles.modalTabs}>
//           <button className={`${styles.tabButton} ${activeTab === 'useCases' ? styles.activeTab : ''}`}
//             onClick={() => setActiveTab('useCases')} > Use Cases </button>
//           <button className={`${styles.tabButton} ${activeTab === 'projects' ? styles.activeTab : ''}`}
//             onClick={() => setActiveTab('projects')} > Projects </button>
//         </div>
//         <div className={styles.tabContent}>

//           {activeTab === 'useCases' && (
//             <div className={styles.useCasesContainer}>
//               <div className={styles.strengthMeterContainer}>
//                 <h4>Proficiency Level</h4>
//                 <div className={styles.strengthBar}>
//                   <div
//                     className={styles.strengthFill}
//                     style={{ width: `${details.strengthMeter || 50}%` }}
//                   ></div>
//                   <div className={styles.strengthMarker} style={{ left: '25%' }}>Beginner</div>
//                   <div className={styles.strengthMarker} style={{ left: '50%' }}>Intermediate</div>
//                   <div className={styles.strengthMarker} style={{ left: '75%' }}>Advanced</div>
//                   <div className={styles.strengthMarker} style={{ left: '95%' }}>Expert</div>
//                 </div>
//               </div>

//               <h4 className={styles.useCasesTitle}>Common Use Cases</h4>
//               <div className={styles.useCaseGrid}>
//                 {(details.useCases || [
//                   { name: "Practice 1", description: "Description coming soon", icon: "🔍" },
//                   { name: "Practice 2", description: "Description coming soon", icon: "🛠️" },
//                   { name: "Practice 3", description: "Description coming soon", icon: "📝" }
//                 ]).map((useCase, index) => (
//                   <div key={index} className={styles.useCaseCard}>
//                     <div className={styles.useCaseIcon}>{useCase.icon}</div>
//                     <h5 className={styles.useCaseName}>{useCase.name}</h5>
//                     <p className={styles.useCaseDescription}>{useCase.description}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}
//           {activeTab === 'projects' && (
//             <div className={styles.projectsContainer}>
//               {details.projects && details.projects.length > 0 ? (
//                 details.projects.map((project, index) => (
//                   <div key={index} className={styles.projectCard}>
//                     <div className={styles.projectImage}>
//                       <img src={project.image} alt={project.name} />
//                     </div>
//                     <div className={styles.projectInfo}>
//                       <h4>{project.name}</h4>
//                       <p>{project.description}</p>
//                       <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
//                         View Project
//                       </a>
//                     </div>
//                   </div>
//                 ))
//               ) : (
//                 <p className={styles.emptyState}>No projects to display yet.</p>
//               )}
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// // ------------------------------------------------------ORIGINAL

// const Skills = () => {
//   const [selectedSkill, setSelectedSkill] = useState(null);

//   const openSkillModal = (skill) => {
//     setSelectedSkill(skill);
//     document.body.style.overflow = 'hidden';
//   };

//   const closeSkillModal = () => {
//     setSelectedSkill(null);
//     document.body.style.overflow = 'auto';
//   };

//   return (
//     <section id="skills" className={styles.skills}>
//       <h2 className="section-title">My Skills</h2>
//       <div className={styles.skillCategories}>
//         {skillCategories.map((category, categoryIndex) => (
//           <motion.div 
//             animate={{ x: 100 }}
//             transition={{ type: "spring", stiffness: 100, duration: 3, }}
//           key={categoryIndex} className={styles.category}>
//             <h3 className={styles.categoryTitle}>{category.name}</h3>
//             <div className={styles.skillGrid}>
//               {category.skills.map((skill, skillIndex) => (
//                 <div key={skillIndex} className={styles.skillItem} onClick={() => openSkillModal(skill)} >
//                   <img src={skill.logo || "/placeholder.png"} alt={skill.name} className={styles.skillLogo} />
//                   <span className={styles.skillName}>{skill.name}</span>
//                 </div>
//               ))}
//             </div>
//           </motion.div>
//         ))}
//       </div>

//       {selectedSkill && (
//         <SkillModal skill={selectedSkill} onClose={closeSkillModal} />
//       )}
//     </section>
//   );
// };
// export default Skills;

