import { useState, useEffect } from 'react';
import styles from "./Header.module.css";
import RotatingText from './Features/RotatingText';

const Header = ({ activeSection }) => {
  const [scrolled, setScrolled] = useState(false);

  const nameVariants = ["Web Developer", "Data Analyst", "Data Scientist"];


  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ["About", "Projects", "Skills", "Education", "Certifications", "Contact"];

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.headerContainer}>
        <div className={styles.logoContainer}>
          <a href="#" className={styles.logo}>
            <RotatingText
              texts={nameVariants}
              mainClassName={styles.rotatingTextContainer}
              staggerFrom={"last"}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.03}
              transition={{ type: "tween", ease: "linear", duration: 0.4 }}
              splitBy="characters"
              splitLevelClassName={styles.rotatingTextWordWrapper}
              rotationInterval={2000}
            />
          </a>
        </div>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            {navItems.map((item) => (
              <li key={item} className={styles.navItem}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className={`${styles.navLink} ${activeSection === item.toLowerCase() ? styles.active : ""}`}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a href="/resume.pdf" className={styles.resumeButton} download>
          Download Resume
        </a>
      </div>
    </header>
  );
};

export default Header;





























// ############################################################ WORKING CODE

// import { useState, useEffect, useRef } from 'react';
// import styles from "./Header.module.css";

// const Header = ({ activeSection }) => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const navRef = useRef(null);

//   const nameVariants = [
//     { text: "Khatri", accent: "Adarsh" },
//     { text: "Developer", accent: "Web" },
//     { text: "Analyst", accent: "Data" },
//     { text: "Scientist", accent: "Data" }
//   ];

// const [currentNameIndex, setCurrentNameIndex] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 20);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (isMenuOpen && navRef.current && !navRef.current.contains(event.target) &&
//         !event.target.classList.contains(styles.mobileMenuToggle) &&
//         !event.target.parentElement?.classList.contains(styles.mobileMenuToggle)) {
//         setIsMenuOpen(false);
//       }
//     };

//     document.addEventListener('mousedown', handleClickOutside);
//     return () => document.removeEventListener('mousedown', handleClickOutside);
//   }, [isMenuOpen]);

//   // Change name every 7 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
// setCurrentNameIndex((prevIndex) => (prevIndex + 1) % nameVariants.length);
//     }, 7000);

//     return () => clearInterval(interval);
//   }, []);

//   const navItems = ["About", "Projects", "Skills", "Education", "Certifications", "Contact"];

//   return (
//     <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
//       <div className={styles.headerContainer}>
//         <div className={styles.logoContainer}>
//           <a href="#" className={styles.logo}>
//             <span className={styles.logoAccent}>{nameVariants[currentNameIndex].accent}</span>
//             {nameVariants[currentNameIndex].text}
//           </a>
//         </div>

//         <button
//           className={`${styles.mobileMenuToggle} ${isMenuOpen ? styles.active : ''}`}
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//           aria-label="Toggle menu"
//         >
//           <span></span>
//           <span></span>
//           <span></span>
//         </button>

//         <nav
//           className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}
//           ref={navRef}
//         >
//           <ul className={styles.navList}>
//             {navItems.map((item) => (
//               <li key={item} className={styles.navItem}>
//                 <a
//                   href={`#${item.toLowerCase()}`}
//                   className={`${styles.navLink} ${activeSection === item.toLowerCase() ? styles.active : ""}`}
//                   onClick={() => setIsMenuOpen(false)}
//                 >
//                   {item}
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </nav>

//         <a href="/resume.pdf" className={styles.resumeButton} download>
//           Download Resume
//         </a>
//       </div>
//     </header>
//   );
// };

// export default Header;
