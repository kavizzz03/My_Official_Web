import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

import "./App.css";

// Custom loading component with enhanced animation
const LoadingScreen = () => (
  <motion.div
    className="loading-screen"
    initial={{ opacity: 1 }}
    exit={{ 
      opacity: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }}
  >
    <div className="loading-content">
      <motion.div
        className="loading-brand"
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ 
          duration: 1,
          type: "spring",
          stiffness: 100,
          damping: 10
        }}
      >
        <div className="brand-logo">
          <motion.div
            className="logo-icon"
            animate={{ 
              rotate: 360,
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            🚀
          </motion.div>
        </div>
        <motion.h1
          className="brand-name"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Kavindu<span className="brand-accent">B</span>
        </motion.h1>
        <motion.p
          className="brand-tagline"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Portfolio Loading...
        </motion.p>
      </motion.div>

      <motion.div
        className="loading-progress"
        initial={{ width: "0%" }}
        animate={{ width: "100%" }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />
    </div>

    {/* Floating background elements */}
    <div className="loading-background">
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="floating-dot"
          style={{
            '--i': i,
            '--size': `${Math.random() * 6 + 2}px`,
            '--color': `rgba(99, 102, 241, ${Math.random() * 0.3 + 0.1})`
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 50 - 25, 0],
            opacity: [0, 1, 0],
            scale: [0, 1, 0]
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2
          }}
        />
      ))}
    </div>
  </motion.div>
);

// Custom 404 page with animations
const NotFoundPage = () => (
  <motion.div
    className="not-found-page"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
  >
    <div className="not-found-content">
      <motion.h1
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
      >
        404
      </motion.h1>
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        Oops! The page you're looking for doesn't exist.
      </motion.p>
      <motion.button
        onClick={() => window.location.href = '/'}
        whileHover={{ 
          scale: 1.05,
          y: -2
        }}
        whileTap={{ scale: 0.95 }}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        🏠 Back to Home
      </motion.button>
    </div>
  </motion.div>
);

function AppInner() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const [currentTheme, setCurrentTheme] = useState('dark');

  useEffect(() => {
    // Initialize AOS with enhanced settings
    AOS.init({
      duration: 1200,
      once: true,
      offset: 50,
      easing: "ease-out-cubic",
      mirror: false,
      anchorPlacement: 'top-bottom'
    });

    // Refresh AOS on route changes
    AOS.refresh();

    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
      // Refresh AOS after loading complete
      setTimeout(() => AOS.refresh(), 300);
    }, 2500);

    // Detect system theme preference
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setCurrentTheme(mediaQuery.matches ? 'dark' : 'light');

    const handleThemeChange = (e) => {
      setCurrentTheme(e.matches ? 'dark' : 'light');
    };

    mediaQuery.addEventListener('change', handleThemeChange);

    return () => {
      clearTimeout(timer);
      mediaQuery.removeEventListener('change', handleThemeChange);
    };
  }, []);

  // Enhanced page transitions
  const pageVariants = {
    initial: { 
      opacity: 0, 
      y: 30,
      scale: 0.98
    },
    in: { 
      opacity: 1, 
      y: 0,
      scale: 1
    },
    out: { 
      opacity: 0, 
      y: -30,
      scale: 1.02
    }
  };

  const pageTransition = {
    duration: 0.8,
    ease: [0.25, 0.46, 0.45, 0.94],
    type: "spring",
    stiffness: 100,
    damping: 20
  };

  // Section entrance animations
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className={`App theme-${currentTheme}`}>
      <AnimatePresence mode="wait">
        {loading && <LoadingScreen />}
      </AnimatePresence>

      <Navbar />
      
      <AnimatePresence mode="wait" initial={false}>
        <motion.main
          key={location.pathname}
          initial="initial"
          animate="in"
          exit="out"
          variants={pageVariants}
          transition={pageTransition}
          className="main-content"
        >
          <Routes location={location}>
            <Route
              path="/"
              element={
                <motion.div
                  className="home-sections"
                  initial="hidden"
                  animate="visible"
                  variants={sectionVariants}
                >
                  <motion.section 
                    id="home"
                    variants={sectionVariants}
                  >
                    <Header />
                  </motion.section>

                  <motion.section 
                    id="about"
                    variants={sectionVariants}
                  >
                    <About />
                  </motion.section>

                  <motion.section 
                    id="education"
                    variants={sectionVariants}
                  >
                    <Education />
                  </motion.section>

                  <motion.section 
                    id="skills"
                    variants={sectionVariants}
                  >
                    <Skills />
                  </motion.section>

                  <motion.section 
                    id="projects"
                    variants={sectionVariants}
                  >
                    <Projects />
                  </motion.section>

                  <motion.section 
                    id="contact"
                    variants={sectionVariants}
                  >
                    <Contact />
                  </motion.section>
                </motion.div>
              }
            />

            <Route
              path="/contact"
              element={
                <motion.div
                  className="contact-page"
                  initial="initial"
                  animate="in"
                  exit="out"
                  variants={pageVariants}
                  transition={pageTransition}
                >
                  <Contact />
                </motion.div>
              }
            />

            <Route
              path="*"
              element={<NotFoundPage />}
            />
          </Routes>
        </motion.main>
      </AnimatePresence>

      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppInner />
    </Router>
  );
}