import { useState, useEffect, useCallback } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import styles from "./App.module.css";
import DotGrid from './components/animations/DotGrid.jsx';

function App() {
  const [activeSection, setActiveSection] = useState("about");

  const handleScroll = useCallback(() => {
    const sections = ["about", "projects", "skills", "education", "certifications", "contact"];
    const scrollPosition = window.scrollY;

    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const { offsetTop, offsetHeight } = element;
        if (scrollPosition >= offsetTop - 100 && scrollPosition < offsetTop + offsetHeight - 100) {
          setActiveSection(section);
          break;
        }
      }
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <div className={styles.App}>
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1
      }}>
        <DotGrid
          dotSize={3}
          gap={15}
          baseColor="rgba(64, 63, 65, 1)"
          activeColor="rgba(205, 255, 40, 1)"
          proximity={120}
          shockRadius={250}
          shockStrength={5}
          resistance={750}
          returnDuration={1.5}
        />
      </div>

      <Header activeSection={activeSection} />
      <About />
      <Projects />
      <Skills />
      <Education />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;






// import { useState, useEffect, useCallback } from "react";
// import { Canvas } from '@react-three/fiber';
// import Header from "./components/Header";
// import About from "./components/About";
// import Projects from "./components/Projects";
// import Skills from "./components/Skills";
// import Education from "./components/Education";
// import Certifications from "./components/Certifications";
// import Contact from "./components/Contact";
// import Footer from "./components/Footer";
// import styles from "./App.module.css";
// import { DataNebula } from './components/animations/Particle.jsx';

// function App() {
//   const [activeSection, setActiveSection] = useState("about");

//   const handleScroll = useCallback(() => {
//     const sections = ["about", "projects", "skills", "education", "certifications", "contact"];
//     const scrollPosition = window.scrollY;

//     for (const section of sections) {
//       const element = document.getElementById(section);
//       if (element) {
//         const { offsetTop, offsetHeight } = element;
//         if (scrollPosition >= offsetTop - 100 && scrollPosition < offsetTop + offsetHeight - 100) {
//           setActiveSection(section);
//           break;
//         }
//       }
//     }
//   }, []);

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [handleScroll]);

//   return (
//     <div className={styles.App}>
//       <Canvas
//         style={{ position: 'fixed', zIndex: -1, top: 0, left: 0 }}
//         camera={{ position: [0, 0, 25], fov: 25 }} >
//         <DataNebula
//           count={1500}
//           spread={15}
//           speed={0.1}
//           colors={['#6dd5ed', '#2193b0', '#ffffff']}
//         />
//       </Canvas>
//       <Header activeSection={activeSection} />
//       <About />
//       <Projects />
//       <Skills />
//       <Education />
//       <Certifications />
//       <Contact />
//       <Footer />
//     </div>
//   );
// }

// export default App;








// ################################################################## WORKING PARTICLES ANIMATION

// import { useState, useEffect, useCallback } from "react";
// // ✨ Step 3.1: Import the Canvas component
// import { Canvas } from '@react-three/fiber';

// import Header from "./components/Header";
// import About from "./components/About";
// import Projects from "./components/Projects";
// import Skills from "./components/Skills";
// import Education from "./components/Education";
// import Certifications from "./components/Certifications";
// import Contact from "./components/Contact";
// import Footer from "./components/Footer";
// import styles from "./App.module.css";
// // This should now be your R3F Particles component
// import { Particles } from './components/animations/Particle.jsx';

// function App() {
//   const [activeSection, setActiveSection] = useState("about");

//   const handleScroll = useCallback(() => {
//     const sections = ["about", "projects", "skills", "education", "certifications", "contact"];
//     const scrollPosition = window.scrollY;

//     for (const section of sections) {
//       const element = document.getElementById(section);
//       if (element) {
//         const { offsetTop, offsetHeight } = element;
//         if (scrollPosition >= offsetTop - 100 && scrollPosition < offsetTop + offsetHeight - 100) {
//           setActiveSection(section);
//           break;
//         }
//       }
//     }
//   }, []);

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [handleScroll]);

//   return (
//     <div className={styles.App}>
//       {/* ✨ Step 3.2: Replace the div with the Canvas component */}
//       <Canvas
//         style={{ position: 'fixed', zIndex: -1, top: 0, left: 0 }}
//         camera={{ position: [0, 0, 20], fov: 25 }}
//       >
//         <Particles
//           count={5000}
//           spread={12}
//           baseSize={120}
//           speed={0.1}
//           colors={['#ff69b4', '#1e90ff', '#ffffff']}
//         />
//       </Canvas>

//       <Header activeSection={activeSection} />
//       <About />
//       <Projects />
//       <Skills />
//       <Education />
//       <Certifications />
//       <Contact />
//       <Footer />
//     </div>
//   );
// }

// export default App;
















// import { useState, useEffect, useCallback } from "react"
// import Header from "./components/Header"
// import About from "./components/About"
// import Projects from "./components/Projects"
// import Skills from "./components/Skills"
// import Education from "./components/Education"
// import Certifications from "./components/Certifications"
// import Contact from "./components/Contact"
// import Footer from "./components/Footer"
// import styles from "./App.module.css"
// import Particles from './components/animations/ParticleAnimation'

// function App() {
//   const [activeSection, setActiveSection] = useState("about");

//   const handleScroll = useCallback(() => {
//     const sections = ["about", "projects", "skills", "education", "certifications", "contact"];
//     const scrollPosition = window.scrollY;

//     for (const section of sections) {
//       const element = document.getElementById(section)
//       if (element) {
//         const { offsetTop, offsetHeight } = element;
//         if (scrollPosition >= offsetTop - 100 && scrollPosition < offsetTop + offsetHeight - 100) {
//           setActiveSection(section);
//           break;
//         }
//       }
//     }
//   }, []);

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [handleScroll]);

//   return (
//     <div className={styles.App}>
//       <div style={{ width: '100%', height: '100%', position: 'fixed', zIndex: -1 }}>
//         <Particles
//           particleColors={['#ffffff', '#ffffff']}
//           particleCount={200}
//           particleSpread={10}
//           speed={0.1}
//           particleBaseSize={100}
//           moveParticlesOnHover={true}
//           alphaParticles={false}
//           disableRotation={false}
//         />
//       </div>
//       <Header activeSection={activeSection} />
//       <About />
//       <Projects />
//       <Skills />
//       <Education />
//       <Certifications />
//       <Contact />
//       <Footer />
//     </div>
//   )
// }

// export default App



