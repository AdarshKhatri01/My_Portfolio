import { useState, useEffect } from 'react';
import styles from "./About.module.css";
import profilePic from '../assets/profilePic.jpg';

const About = () => {
  const texts = [
    "Hello, I'm Adarsh Khatri",
  ];

  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const fullText = texts[currentTextIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (index < fullText.length) {
          setText(prev => prev + fullText[index]);
          setIndex(index + 1);
          setTypingSpeed(100);
        } else {
          setIsDeleting(true);
          setTypingSpeed(2000);
        }
      } else {
        if (text.length > 0) {
          setText(prev => prev.slice(0, -1));
          setTypingSpeed(50);
        } else {
          setIsDeleting(false);
          setIndex(0);
          setCurrentTextIndex(prev => (prev + 1) % texts.length);
          setTypingSpeed(1000);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [index, isDeleting, text, texts, currentTextIndex]);

  return (
    <section id="about" className={styles.about}>
      {/* <h2 className="section-title">About Me</h2> */}
      <div className={styles.content}>
        <div className={styles.imageContainer}>
          <img src={profilePic} alt="Adarsh Khatri" className={styles.profileImage} />
        </div>
        <div className={styles.bio}>
          <h3 className={styles.typewriter}>
            {text}
            <span className={`${styles.cursor} ${text.length === texts[currentTextIndex].length && !isDeleting ? styles.blink : ''}`}>|</span>
          </h3>
          <p>
            A passionate final-year M.Tech Computer Science student with a strong interest in Data Analytics and Software Development. I enjoy solving real-world problems and have solved 500+ problems across Leetcode, GFG, Coding Ninjas.
          </p>
          <p>
            I have hands-on experience with Python, Data Structures & Algorithms, OOP, React, and deep learning frameworks. I enjoy building scalable projects, contributing to open source, and exploring AI applications like video surveillance and deepfake detection.
          </p>
          <p>
            <span className={styles.emoji}>🚀</span> Always open to collaborations, exciting projects, and discussions on emerging technologies. Let's build something amazing together!
          </p>
          <div className={styles.socialLinks}>
            <a href="https://github.com/AdarshKhatri01" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="GitHub">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/adarshkhatri/" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="LinkedIn">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://leetcode.com/u/adarshkhatri392/" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="LeetCode">
              <i className="fas fa-code"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
