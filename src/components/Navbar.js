import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { 
  FaBars, 
  FaTimes, 
  FaUser, 
  FaGraduationCap, 
  FaTools, 
  FaProjectDiagram, 
  FaEnvelope,
  FaHome,
  FaRocket,
  FaStar,
  FaGem
} from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    { name: "Home", id: "home", href: "#home", icon: <FaHome />, color: "#6366f1" },
    { name: "About", id: "about", href: "#about", icon: <FaUser />, color: "#8b5cf6" },
    { name: "Education", id: "education", href: "#education", icon: <FaGraduationCap />, color: "#06b6d4" },
    { name: "Skills", id: "skills", href: "#skills", icon: <FaTools />, color: "#10b981" },
    { name: "Projects", id: "projects", href: "#projects", icon: <FaProjectDiagram />, color: "#f59e0b" },
    { name: "Contact", id: "contact", href: "#contact", icon: <FaEnvelope />, color: "#ef4444" },
  ];

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
      
      const sections = navItems.map(item => item.id);
      const current = sections.find(section => {
        const el = document.getElementById(section);
        return el && el.getBoundingClientRect().top <= 100;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navItems]);

  const handleClick = (item) => {
    if (item.href.startsWith("#")) {
      const element = document.getElementById(item.id);
      if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    } else {
      navigate(item.href);
    }
    setMenuOpen(false);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24
      }
    }
  };

  const mobileItemVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24
      }
    }
  };

  return (
    <motion.nav
      className={`navbar ${scrolled ? "scrolled" : ""} ${menuOpen ? "menu-open" : ""}`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ 
        duration: 0.8, 
        ease: [0.6, 0.05, 0.1, 0.9],
        type: "spring",
        stiffness: 100
      }}
    >
      <div className="nav-container">
        {/* Enhanced Brand with Dark Theme */}
        <motion.div 
          className="brand-wrapper"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <motion.button 
            className="brand"
            onClick={() => handleClick(navItems[0])}
            aria-label="Go to homepage"
          >
            <motion.div 
              className="brand-icon-wrapper"
              whileHover={{ 
                rotate: 360,
                scale: 1.1
              }}
              transition={{ 
                duration: 0.6,
                type: "spring",
                stiffness: 200
              }}
            >
              <FaRocket className="brand-icon" />
            </motion.div>
            <span className="brand-text">
              Kavindu<span className="brand-highlight">B</span>
            </span>
            <motion.div
              className="premium-badge"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 1, type: "spring", stiffness: 200 }}
            >
              <FaGem style={{ fontSize: '0.6rem', color: '#ffffff' }} />
            </motion.div>
          </motion.button>
        </motion.div>

        {/* Enhanced Desktop Navigation with Dark Theme */}
        <motion.div 
          className="desktop-nav"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="nav-links">
            {navItems.map((item, idx) => (
              <motion.button
                key={item.id}
                className={`nav-link ${activeSection === item.id ? "nav-link-active" : ""}`}
                onClick={() => handleClick(item)}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05, 
                  y: -2,
                  transition: { type: "spring", stiffness: 400 }
                }}
                whileTap={{ scale: 0.95 }}
                style={{
                  '--item-color': item.color
                }}
              >
                <motion.span 
                  className="nav-icon"
                  whileHover={{ rotate: 15, scale: 1.2 }}
                >
                  {item.icon}
                </motion.span>
                <span className="nav-text">{item.name}</span>
                <motion.span 
                  className="nav-indicator"
                  initial={{ scale: 0 }}
                  animate={{ scale: activeSection === item.id ? 1 : 0 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
                {activeSection === item.id && (
                  <motion.div
                    className="active-glow"
                    layoutId="activeGlow"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Enhanced Mobile Menu Toggle */}
        <motion.button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          whileHover={{ 
            scale: 1.1,
            rotate: 5
          }}
          whileTap={{ scale: 0.9 }}
          aria-label="Toggle menu"
        >
          <AnimatePresence mode="wait">
            {menuOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <FaTimes />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <FaBars />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>

        {/* Enhanced Mobile Menu with Dark Theme */}
        <AnimatePresence>
          {menuOpen && (
            <>
              <motion.div
                className="mobile-overlay"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setMenuOpen(false)}
                transition={{ duration: 0.3 }}
              />
              
              <motion.div
                className="mobile-menu"
                initial={{ x: "100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: "100%", opacity: 0 }}
                transition={{ 
                  type: "spring", 
                  damping: 30, 
                  stiffness: 300,
                  mass: 0.8
                }}
              >
                <div className="mobile-header">
                  <motion.div 
                    className="mobile-brand"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    <motion.div
                      className="mobile-brand-icon"
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                    >
                      <FaRocket />
                    </motion.div>
                    <motion.span
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      Navigation
                    </motion.span>
                  </motion.div>
                  
                  <motion.button
                    className="mobile-close-btn"
                    onClick={() => setMenuOpen(false)}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
                    whileHover={{ rotate: 90, scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaTimes />
                  </motion.button>
                </div>

                <nav className="mobile-nav-content">
                  <motion.div 
                    className="mobile-nav-items"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    {navItems.map((item, idx) => (
                      <motion.button
                        key={item.id}
                        className={`mobile-nav-link ${activeSection === item.id ? "mobile-nav-link-active" : ""}`}
                        onClick={() => handleClick(item)}
                        variants={mobileItemVariants}
                        whileHover={{ 
                          x: 8,
                          transition: { type: "spring", stiffness: 400 }
                        }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <span className="mobile-link-content">
                          <motion.span 
                            className="mobile-nav-icon"
                            whileHover={{ rotate: 15, scale: 1.2 }}
                          >
                            {item.icon}
                          </motion.span>
                          <span className="mobile-nav-text">{item.name}</span>
                        </span>
                        <motion.span 
                          className="mobile-nav-indicator"
                          initial={{ scale: 0 }}
                          animate={{ scale: activeSection === item.id ? 1 : 0 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        />
                      </motion.button>
                    ))}
                  </motion.div>

                  <motion.div 
                    className="mobile-footer"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, type: "spring", stiffness: 100 }}
                  >
                    <div className="mobile-footer-content">
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                      >
                        <FaStar style={{ marginRight: '0.5rem', color: '#f59e0b' }} />
                        Let's build something amazing!
                        <FaStar style={{ marginLeft: '0.5rem', color: '#f59e0b' }} />
                      </motion.p>
                    </div>
                  </motion.div>
                </nav>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;