import { StrictMode, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "./globals.css";
import AnimatedCursor from 'react-animated-cursor'

const Root = () => {
  const [showCursor, setShowCursor] = useState(false);

  useEffect(() => {
    // Function to detect if device is mobile or tablet
    const isMobileOrTablet = () => {
      const userAgent = navigator.userAgent || navigator.vendor || window.opera;

      // Regular expressions for mobile and tablet detection
      const mobileRegex = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;

      return mobileRegex.test(userAgent);
    };

    // Set cursor visibility based on device type, not just screen size
    setShowCursor(!isMobileOrTablet());

  }, []);

  return (
    <StrictMode>
      <App />
      {showCursor && (
        <AnimatedCursor
          innerSize={12}
          outerSize={50}
          innerScale={0}
          outerScale={1.4}
          outerAlpha={0.3}
          showSystemCursor={false}
          innerStyle={{
            backgroundColor: '#00ffff'
          }}
          outerStyle={{
            backgroundColor: 'rgba(0, 255, 255, 0.5)',
            filter: 'blur(10px)',
            transition: 'transform 0.3s ease-in-out, filter 0.3s ease-in-out'
          }}
          clickables={['a', 'button', 'input', 'textarea', '.clickable']}
        />
      )}
    </StrictMode>
  );
};

createRoot(document.getElementById('root')).render(<Root />);
























// <AnimatedCursor
//   color="#00ffff"
//   innerSize={8}
//   outerSize={35}
//   innerScale={1}
//   outerScale={1.7}
//   outerAlpha={0}
//   outerStyle={{
//     mixBlendMode: 'exclusion',
//     zIndex: 10000,
//     backgroundColor: '#fbff00ff'
//   }}
//   showSystemCursor={false}
//   clickables={['a', 'button', 'input', 'textarea', '.clickable']}
//   innerStyle={{ backgroundColor: '#00ffff', mixBlendMode: 'exclusion', zIndex: 10000 }}
// />