import { useState, useEffect } from "react";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Certifications from "../components/Certifications";
import ProjectSection from "../components/ProjectSection";
import YouTubeSection from "../components/YouTubeSection";
import ConnectButton from "../components/ConnectButton";
import SEOHead from "../components/SEOHead";
import { EVERFI_PROJECT, BUNNY_PROJECT } from "../constants/projects";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  const [showConfetti, setShowConfetti] = useState(false);
  const [windowDimensions, setWindowDimensions] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const updateWindowDimensions = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Set initial dimensions
    updateWindowDimensions();

    // Update dimensions on resize
    window.addEventListener("resize", updateWindowDimensions);

    return () => window.removeEventListener("resize", updateWindowDimensions);
  }, []);

  return (
    <div className={darkMode ? "dark" : ""}>
      <SEOHead />
      <Layout darkMode={darkMode} setDarkMode={setDarkMode}>
        <Hero />
        <Certifications />
        <ProjectSection {...EVERFI_PROJECT} />
        <ProjectSection {...BUNNY_PROJECT} />
        <YouTubeSection />
        <ConnectButton 
          showConfetti={showConfetti}
          setShowConfetti={setShowConfetti}
          windowDimensions={windowDimensions}
        />
      </Layout>
    </div>
  );
}
