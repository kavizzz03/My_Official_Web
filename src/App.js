import React, { useEffect, useState, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { motion, AnimatePresence, useScroll, useTransform, useMotionValue, useSpring, useAnimation } from "framer-motion";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

import "./App.css";

// Enhanced Mouse Follower with Cyberpunk Effects
const MouseFollower = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 20, stiffness: 400, mass: 0.5 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    if (!isMobile) {
      const handleMouseMove = (e) => {
        mouseX.set(e.clientX);
        mouseY.set(e.clientY);
      };

      const handleMouseEnter = () => setIsHovering(true);
      const handleMouseLeave = () => setIsHovering(false);

      window.addEventListener("mousemove", handleMouseMove);
      document.addEventListener('mouseenter', handleMouseEnter);
      document.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener('mouseenter', handleMouseEnter);
        document.removeEventListener('mouseleave', handleMouseLeave);
        window.removeEventListener('resize', checkMobile);
      };
    }

    return () => window.removeEventListener('resize', checkMobile);
  }, [mouseX, mouseY, isMobile]);

  if (isMobile) return null;

  return (
    <>
      {/* Main Cursor Dot */}
      <motion.div
        className="cursor-dot"
        style={{
          x: springX,
          y: springY,
        }}
        animate={{
          scale: isHovering ? 1.5 : 1,
          opacity: isHovering ? 0.8 : 1,
        }}
        transition={{ duration: 0.15 }}
      />
      
      {/* Cursor Ring */}
      <motion.div
        className="cursor-ring"
        style={{
          x: springX,
          y: springY,
        }}
        animate={{
          scale: isHovering ? 1.8 : 1,
          borderColor: isHovering ? "#00f3ff" : "#8b5cf6",
        }}
        transition={{ duration: 0.2 }}
      />
      
      {/* Cyber Trail Effect */}
      <motion.div
        className="cursor-trail"
        style={{
          x: springX,
          y: springY,
        }}
        animate={{
          scale: isHovering ? 2 : 1,
          opacity: isHovering ? 0.3 : 0.1,
        }}
        transition={{ duration: 0.3 }}
      />
    </>
  );
};

// Premium Loading Screen with 3D Holographic Effects
const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);
  const [currentText, setCurrentText] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const loadingControls = useAnimation();
  
  const loadingTexts = [
    "Initializing Cyber Systems...",
    "Loading Neural Interface...",
    "Calibrating Holographic Display...",
    "Almost Ready...",
    "Launching Portfolio Matrix...",
    "Welcome to the Future! 🚀"
  ];

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    // Enhanced progress simulation
    const progressTimer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressTimer);
          loadingControls.start({
            opacity: 0,
            transition: { duration: 1.5, ease: "circOut" }
          });
          return 100;
        }
        return prev + Math.random() * 12;
      });
    }, 60);

    // Text rotation with enhanced timing
    const textTimer = setInterval(() => {
      setCurrentText(prev => (prev + 1) % loadingTexts.length);
    }, 1200);

    // Start entrance animation
    loadingControls.start({
      opacity: 1,
      transition: { duration: 0.8 }
    });

    return () => {
      clearInterval(progressTimer);
      clearInterval(textTimer);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  return (
    <motion.div
      className="holographic-loading"
      initial={{ opacity: 0 }}
      animate={loadingControls}
      exit={{ 
        opacity: 0,
        transition: { duration: 1.2, ease: "circIn" }
      }}
    >
      {/* Advanced Cyber Grid */}
      <div className="cyber-matrix">
        {[...Array(isMobile ? 32 : 64)].map((_, i) => (
          <motion.div
            key={i}
            className="matrix-node"
            style={{
              '--x': `${(i % (isMobile ? 8 : 16)) * (isMobile ? 12.5 : 6.25)}%`,
              '--y': `${Math.floor(i / (isMobile ? 8 : 16)) * (isMobile ? 12.5 : 6.25)}%`,
            }}
            animate={{
              opacity: [0.1, 0.8, 0.1],
              scale: [0.8, 1.4, 0.8],
              backgroundColor: [
                "rgba(0, 243, 255, 0.3)",
                "rgba(139, 92, 246, 0.6)",
                "rgba(0, 243, 255, 0.3)"
              ],
            }}
            transition={{
              duration: 2.5 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      {/* 3D Holographic Core */}
      <div className={`hologram-universe ${isMobile ? 'mobile' : ''}`}>
        <motion.div
          className="hologram-core"
          animate={{
            rotateY: 360,
            rotateX: isMobile ? 10 : 25,
            scale: [1, 1.15, 1],
          }}
          transition={{
            rotateY: { duration: 6, repeat: Infinity, ease: "linear" },
            scale: { duration: 2.5, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          {/* Core Layers */}
          <motion.div
            className="hologram-layer layer-1"
            animate={{
              rotateZ: 360,
              scale: [1, 1.2, 1],
            }}
            transition={{
              rotateZ: { duration: 8, repeat: Infinity, ease: "linear" },
              scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
            }}
          />
          <motion.div
            className="hologram-layer layer-2"
            animate={{
              rotateZ: -360,
              scale: [1.2, 1, 1.2],
            }}
            transition={{
              rotateZ: { duration: 6, repeat: Infinity, ease: "linear" },
              scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
            }}
          />
          
          {/* Central Emoji */}
          <motion.div
            className="hologram-emoji"
            animate={{
              rotateY: -360,
              scale: [1, 1.3, 1],
              filter: ["brightness(1)", "brightness(1.5)", "brightness(1)"],
            }}
            transition={{
              rotateY: { duration: 3, repeat: Infinity, ease: "linear" },
              scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
              filter: { duration: 1.5, repeat: Infinity, ease: "easeInOut" },
            }}
          >
            {isMobile ? "⚡" : "🌌"}
          </motion.div>
        </motion.div>

        {/* Orbiting Elements */}
        {[0, 1, 2, 3].map((orbit) => (
          <motion.div
            key={orbit}
            className={`hologram-orbit orbit-${orbit}`}
            animate={{
              rotateY: 360,
              rotateX: orbit % 2 ? 35 : -35,
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 12 + orbit * 3,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <motion.div
              className="orbit-node"
              animate={{
                scale: [1, 1.8, 1],
                rotateZ: [0, 180, 360],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: orbit * 0.4,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        ))}
      </div>

      {/* Loading Content */}
      <div className="loading-content">
        <motion.div
          className="brand-title"
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1.2, ease: "backOut" }}
        >
          <motion.h1
            className={`cyber-glitch ${isMobile ? 'mobile' : ''}`}
            animate={{
              textShadow: [
                "3px 3px 0px #00f3ff",
                "-3px -3px 0px #ff00ff",
                "2px 2px 0px #00ff88",
                "3px 3px 0px #00f3ff",
              ],
              scale: [1, 1.02, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {isMobile ? "KB" : "KAVINDU B."}
            <motion.span
              className="accent-pulse"
              animate={{
                opacity: [0.7, 1, 0.7],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {isMobile ? "✨" : "🚀"}
            </motion.span>
          </motion.h1>
          
          <motion.div
            className="loading-text-container"
            key={currentText}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.p
              className="loading-text"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {loadingTexts[currentText]}
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Quantum Progress Bar */}
        <div className={`quantum-progress ${isMobile ? 'mobile' : ''}`}>
          <motion.div
            className="progress-container"
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <motion.div
              className="progress-bar"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: progress / 100 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <motion.div
                className="progress-shine"
                animate={{
                  x: ["-100%", "100%"],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              
              {/* Progress Particles */}
              <motion.div
                className="progress-particles"
                animate={{
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="progress-particle"
                    animate={{
                      y: [0, -20, 0],
                      scale: [0, 1, 0],
                    }}
                    transition={{
                      duration: 1.2,
                      repeat: Infinity,
                      delay: i * 0.2,
                      ease: "easeOut",
                    }}
                  />
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
          
          <motion.div
            className="progress-info"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <motion.span
              className="progress-percent"
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 0.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {Math.round(progress)}%
            </motion.span>
            
            {!isMobile && (
              <motion.div
                className="progress-stats"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2 }}
              >
                <motion.span
                  animate={{
                    color: ["#00f3ff", "#ff00ff", "#00f3ff"],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  SYSTEM: ONLINE
                </motion.span>
                <motion.span
                  animate={{
                    color: ["#00ff88", "#00f3ff", "#00ff88"],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                >
                  POWER: {Math.round(progress)}%
                </motion.span>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>

      {/* Matrix Data Streams */}
      <div className="matrix-streams">
        {[...Array(isMobile ? 4 : 8)].map((_, stream) => (
          <motion.div
            key={stream}
            className="data-stream"
            style={{
              left: `${(stream / (isMobile ? 4 : 8)) * 100}%`,
            }}
            animate={{
              y: ["120%", "-120%"],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "linear",
            }}
          >
            {[...Array(isMobile ? 6 : 12)].map((_, i) => (
              <motion.span
                key={i}
                className="data-byte"
                animate={{
                  opacity: [0, 1, 0],
                  color: [
                    "#00f3ff",
                    "#ff00ff",
                    "#00ff88",
                    "#00f3ff"
                  ],
                }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  delay: i * 0.15 + stream * 0.3,
                  ease: "easeInOut",
                }}
              >
                {Math.random() > 0.5 ? '1' : '0'}
              </motion.span>
            ))}
          </motion.div>
        ))}
      </div>

      {/* Floating Tech Elements */}
      {!isMobile && (
        <div className="floating-tech">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="tech-orb"
              style={{
                '--orb-size': `${Math.random() * 40 + 20}px`,
              }}
              animate={{
                x: [0, Math.random() * 200 - 100, 0],
                y: [0, Math.random() * 200 - 100, 0],
                rotate: [0, 180, 360],
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: 8 + Math.random() * 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.7,
              }}
            />
          ))}
        </div>
      )}
    </motion.div>
  );
};

// Premium 404 Page with Interactive Elements
const NotFoundPage = () => {
  const [isMobile, setIsMobile] = useState(false);
  const containerControls = useAnimation();

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    // Start page animations
    containerControls.start("visible");

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <motion.div
      className="cyberpunk-404"
      initial="hidden"
      animate={containerControls}
      variants={containerVariants}
    >
      {/* Animated Cyber Grid */}
      <div className="cyber-matrix-grid">
        {[...Array(isMobile ? 36 : 81)].map((_, i) => (
          <motion.div
            key={i}
            className="grid-cell"
            animate={{
              opacity: [0.1, 0.6, 0.1],
              backgroundColor: [
                "rgba(0, 243, 255, 0.1)",
                "rgba(255, 0, 255, 0.3)",
                "rgba(0, 243, 255, 0.1)"
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: (i % (isMobile ? 6 : 9)) * 0.1,
            }}
          />
        ))}
      </div>

      <motion.div
        className={`cyber-content ${isMobile ? 'mobile' : ''}`}
        variants={containerVariants}
      >
        {/* Floating Planet */}
        {!isMobile && (
          <motion.div
            className="floating-planet"
            variants={itemVariants}
            animate={{
              y: [0, -40, 0],
              rotate: [0, 10, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            🪐
          </motion.div>
        )}
        
        {/* Main Title */}
        <motion.h1
          className={`cyber-title ${isMobile ? 'mobile' : ''}`}
          variants={itemVariants}
          animate={{
            textShadow: [
              "0 0 20px #00f3ff",
              "0 0 30px #ff00ff", 
              "0 0 20px #00f3ff"
            ],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          404
        </motion.h1>
        
        {/* Subtitle */}
        <motion.p
          className="cyber-subtitle"
          variants={itemVariants}
          animate={{
            opacity: [0.8, 1, 0.8],
          y: [0, -5, 0],
          transition: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          },
          }}
        >
          {isMobile ? "MATRIX_ERROR" : "SYSTEM_ANOMALY_DETECTED"}
        </motion.p>
        
        {/* Error Message */}
        {!isMobile && (
          <motion.p
            className="cyber-message"
            variants={itemVariants}
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            TARGET_PAGE_NOT_FOUND_IN_DIGITAL_MATRIX
          </motion.p>
        )}

        {/* Action Button */}
        <motion.button
          className={`cyber-button ${isMobile ? 'mobile' : ''}`}
          onClick={() => window.location.href = '/'}
          variants={itemVariants}
          whileHover={!isMobile ? {
            scale: 1.08,
            y: -5,
            boxShadow: "0 10px 30px rgba(0, 243, 255, 0.4)"
          } : {}}
          whileTap={{ scale: 0.95 }}
          animate={{
            background: [
              "linear-gradient(45deg, #667eea, #764ba2)",
              "linear-gradient(45deg, #f093fb, #f5576c)",
              "linear-gradient(45deg, #667eea, #764ba2)"
            ],
          }}
          transition={{
            background: {
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            },
            scale: { duration: 0.2 }
          }}
        >
          <motion.span
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          >
            {isMobile ? "⚡" : "🚀"}
          </motion.span>
          {isMobile ? "RETURN_HOME" : "REBOOT_SYSTEM"}
        </motion.button>

        {/* Scan Line Effect */}
        {!isMobile && (
          <motion.div
            className="scan-line"
            animate={{
              y: ["0%", "100%"],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        )}

        {/* Floating Particles */}
        <div className="error-particles">
          {[...Array(isMobile ? 8 : 15)].map((_, i) => (
            <motion.div
              key={i}
              className="error-particle"
              animate={{
                y: [0, -100, 0],
                x: [0, Math.random() * 50 - 25, 0],
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

// Advanced Interactive Background
const InteractiveBackground = () => {
  const { scrollYProgress } = useScroll();
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [1, 0.8, 0.6, 0.4]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <>
      <motion.div 
        className="cosmic-background"
        style={{ opacity }}
      >
        {/* Nebula Clouds */}
        {[...Array(isMobile ? 6 : 12)].map((_, i) => (
          <motion.div
            key={i}
            className="nebula-cloud"
            style={{
              '--cloud-size': `${Math.random() * (isMobile ? 300 : 600) + (isMobile ? 150 : 300)}px`,
              '--cloud-opacity': Math.random() * 0.3 + 0.1,
            }}
            animate={{
              x: [0, Math.random() * (isMobile ? 100 : 200) - (isMobile ? 50 : 100), 0],
              y: [0, Math.random() * (isMobile ? 80 : 150) - (isMobile ? 40 : 75), 0],
              scale: [1, 1.2, 1],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 25 + Math.random() * 15,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 2,
            }}
          />
        ))}

        {/* Stars */}
        {[...Array(isMobile ? 50 : 100)].map((_, i) => (
          <motion.div
            key={i}
            className="star"
            style={{
              '--star-size': `${Math.random() * 3 + 1}px`,
              '--star-opacity': Math.random() * 0.8 + 0.2,
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5,
            }}
          />
        ))}
      </motion.div>

      {/* Floating Tech Elements */}
      {!isMobile && (
        <motion.div 
          className="tech-constellation"
          style={{ y: parallaxY }}
        >
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="tech-element"
              animate={{
                y: [0, -80, 0],
                rotate: [0, 180, 360],
                scale: [1, 1.4, 1],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 6 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 3,
                ease: "easeInOut",
              }}
            />
          ))}
        </motion.div>
      )}

      {/* Cyber Grid Overlay */}
      <motion.div 
        className="cyber-grid-overlay"
        style={{ opacity: useTransform(scrollYProgress, [0, 1], [0.1, 0.3]) }}
      />
    </>
  );
};

// Premium Scroll Progress Indicator
const CyberScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 150,
    damping: 40,
    restDelta: 0.001
  });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (isMobile) return null;

  return (
    <motion.div
      className="cyber-scroll-progress"
      style={{ scaleX }}
    >
      <motion.div
        className="progress-core"
        animate={{
          background: [
            "linear-gradient(90deg, #00f3ff, #ff00ff, #00ff88)",
            "linear-gradient(90deg, #ff00ff, #00ff88, #00f3ff)",
            "linear-gradient(90deg, #00ff88, #00f3ff, #ff00ff)",
            "linear-gradient(90deg, #00f3ff, #ff00ff, #00ff88)",
          ],
          boxShadow: [
            "0 0 20px rgba(0, 243, 255, 0.6)",
            "0 0 30px rgba(255, 0, 255, 0.6)",
            "0 0 20px rgba(0, 255, 136, 0.6)",
            "0 0 20px rgba(0, 243, 255, 0.6)",
          ],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Progress Particles */}
      <motion.div
        className="progress-sparks"
        animate={{
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="progress-spark"
            animate={{
              y: [0, -15, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeOut",
            }}
          />
        ))}
      </motion.div>
    </motion.div>
  );
};

function AppInner() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const [currentTheme, setCurrentTheme] = useState('dark');
  const [isMobile, setIsMobile] = useState(false);
  const mainControls = useAnimation();

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    // Enhanced AOS initialization
    AOS.init({
      duration: isMobile ? 600 : 1000,
      once: true,
      offset: isMobile ? 20 : 80,
      easing: "ease-out-cubic",
      mirror: false,
      anchorPlacement: 'top-bottom',
      delay: isMobile ? 0 : 100,
      disable: window.innerWidth <= 768,
      startEvent: 'DOMContentLoaded'
    });

    // Loading sequence
    const timer = setTimeout(() => {
      setLoading(false);
      mainControls.start("visible");
      setTimeout(() => AOS.refresh(), 300);
    }, isMobile ? 1800 : 2800);

    // Theme management
    const savedTheme = localStorage.getItem('cyber-theme');
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    if (savedTheme) {
      setCurrentTheme(savedTheme);
    } else {
      setCurrentTheme(mediaQuery.matches ? 'dark' : 'light');
    }

    const handleThemeChange = (e) => {
      const newTheme = e.matches ? 'dark' : 'light';
      setCurrentTheme(newTheme);
      localStorage.setItem('cyber-theme', newTheme);
    };

    mediaQuery.addEventListener('change', handleThemeChange);

    return () => {
      clearTimeout(timer);
      mediaQuery.removeEventListener('change', handleThemeChange);
      window.removeEventListener('resize', checkMobile);
    };
  }, [isMobile]);

  // Premium page transitions
  const pageVariants = {
    initial: { 
      opacity: 0, 
      y: isMobile ? 40 : 80,
      scale: isMobile ? 0.98 : 0.96,
      rotateX: isMobile ? 0 : 5,
    },
    in: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      rotateX: 0,
    },
    out: { 
      opacity: 0, 
      y: isMobile ? -40 : -80,
      scale: isMobile ? 1.02 : 1.04,
      rotateX: isMobile ? 0 : -5,
    }
  };

  const pageTransition = {
    duration: isMobile ? 0.8 : 1.4,
    ease: [0.6, 0.05, 0.1, 0.9],
  };

  const sectionVariants = {
    hidden: { 
      opacity: 0, 
      y: isMobile ? 60 : 120,
      scale: 0.95 
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: isMobile ? 0.8 : 1.2,
        ease: [0.25, 0.46, 0.45, 0.94],
        staggerChildren: isMobile ? 0.15 : 0.3
      }
    }
  };

  const childVariants = {
    hidden: { 
      opacity: 0, 
      y: isMobile ? 40 : 80,
      scale: 0.9 
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: isMobile ? 0.6 : 1,
        ease: "easeOut",
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <div className={`cyber-app theme-${currentTheme} ${isMobile ? 'mobile' : ''}`}>
      <MouseFollower />
      <InteractiveBackground />
      <CyberScrollProgress />
      
      <AnimatePresence mode="wait">
        {loading && <LoadingScreen />}
      </AnimatePresence>

      <Navbar currentTheme={currentTheme} setCurrentTheme={setCurrentTheme} />
      
      <AnimatePresence mode="wait" initial={false}>
        <motion.main
          key={location.pathname}
          initial="initial"
          animate="in"
          exit="out"
          variants={pageVariants}
          transition={pageTransition}
          className={`cyber-main-content ${isMobile ? 'mobile' : ''}`}
        >
          <Routes location={location}>
            <Route
              path="/"
              element={
                <motion.div
                  className={`cyber-sections ${isMobile ? 'mobile' : ''}`}
                  initial="hidden"
                  animate={mainControls}
                  variants={sectionVariants}
                >
                  <motion.section 
                    id="home"
                    variants={childVariants}
                  >
                    <Header />
                  </motion.section>

                  <motion.section 
                    id="about"
                    variants={childVariants}
                  >
                    <About />
                  </motion.section>

                  <motion.section 
                    id="education"
                    variants={childVariants}
                  >
                    <Education />
                  </motion.section>

                  <motion.section 
                    id="skills"
                    variants={childVariants}
                  >
                    <Skills />
                  </motion.section>

                  <motion.section 
                    id="projects"
                    variants={childVariants}
                  >
                    <Projects />
                  </motion.section>

                  <motion.section 
                    id="contact"
                    variants={childVariants}
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
                  className={`cyber-contact-page ${isMobile ? 'mobile' : ''}`}
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