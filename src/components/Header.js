// Header.js - Updated for Enhanced Responsive Design
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaDownload,
  FaRocket,
  FaCode,
  FaStar,
  FaHeart,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaExternalLinkAlt,
  FaGlobe,
  FaMobile,
  FaDatabase,
  FaLaptopCode,
  FaPhone,
  FaUser
} from "react-icons/fa";
import { SiPhp, SiReact, SiNodedotjs, SiMysql, SiHtml5, SiCss3, SiJavascript, SiPython, SiFlutter } from "react-icons/si";
import "./Header.css";

// Import your photo
import myPhoto from "./Images/my_pic.jpg";

export default function Header() {
  const [currentSkill, setCurrentSkill] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const skills = [
    { name: "Java", icon: <FaCode />, level: 90, color: "#f89820", category: "Backend" },
    { name: "React", icon: <SiReact />, level: 85, color: "#61dafb", category: "Frontend" },
    { name: "JavaScript", icon: <SiJavascript />, level: 88, color: "#f7df1e", category: "Frontend" },
    { name: "Node.js", icon: <SiNodedotjs />, level: 82, color: "#339933", category: "Backend" },
    { name: "Python", icon: <SiPython />, level: 80, color: "#3776ab", category: "Backend" },
    { name: "PHP", icon: <SiPhp />, level: 75, color: "#777bb4", category: "Backend" },
    { name: "MySQL", icon: <SiMysql />, level: 85, color: "#4479a1", category: "Database" },
    { name: "Flutter", icon: <SiFlutter />, level: 70, color: "#02569b", category: "Mobile" },
    { name: "HTML5", icon: <SiHtml5 />, level: 95, color: "#e34f26", category: "Frontend" },
    { name: "CSS3", icon: <SiCss3 />, level: 90, color: "#1572b6", category: "Frontend" }
  ];

  const stats = [
    { number: "2+", label: "Years Experience", icon: FaCalendarAlt, color: "#3B82F6" },
    { number: "10+", label: "Projects Completed", icon: FaCode, color: "#8B5CF6" },
    { number: "10+", label: "Technologies", icon: FaStar, color: "#06B6D4" },
    { number: "100%", label: "Client Satisfaction", icon: FaHeart, color: "#10B981" }
  ];

  const specialties = [
    { icon: FaGlobe, title: "Web Development", desc: "Full-stack web applications", color: "#3B82F6" },
    { icon: FaMobile, title: "Mobile Apps", desc: "Cross-platform solutions", color: "#8B5CF6" },
    { icon: FaDatabase, title: "Database Design", desc: "Optimized data structures", color: "#06B6D4" },
    { icon: FaLaptopCode, title: "Software Engineering", desc: "Clean architecture & patterns", color: "#10B981" }
  ];

  const contactInfo = [
    { 
      icon: FaEnvelope, 
      value: "kavindumalshan2003@gmail.com", 
      label: "Email",
      link: "mailto:kavindumalshan2003@gmail.com",
      color: "#EA4335"
    },
    { 
      icon: FaPhone, 
      value: "+94 74 089 0730", 
      label: "Phone",
      link: "tel:+94740890730",
      color: "#34A853"
    },
    { 
      icon: FaMapMarkerAlt, 
      value: "Colombo, Sri Lanka", 
      label: "Location",
      color: "#4285F4"
    }
  ];

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const interval = setInterval(() => {
      setCurrentSkill((prev) => (prev + 1) % skills.length);
    }, 2000);
    
    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', checkMobile);
    };
  }, [skills.length]);

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

  const fadeUp = {
    hidden: { 
      y: 40, 
      opacity: 0,
      scale: 0.95
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        mass: 0.8
      }
    }
  };

  const scaleIn = {
    hidden: { 
      scale: 0.8, 
      opacity: 0,
      rotateX: 10
    },
    visible: {
      scale: 1,
      opacity: 1,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 15
      }
    }
  };

  return (
    <header className="hm-header">
      {/* Background Elements */}
      <div className="hm-background">
        <div className="gradient-orbs">
          <motion.div
            className="orb orb-1"
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="orb orb-2"
            animate={{
              x: [0, -80, 0],
              y: [0, 60, 0],
              scale: [1.2, 1, 1.2],
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="orb orb-3"
            animate={{
              x: [0, 60, 0],
              y: [0, 80, 0],
              scale: [1, 1.3, 1],
            }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
        
        {/* Animated Grid Pattern */}
        <div className="animated-grid">
          {[...Array(25)].map((_, i) => (
            <motion.div
              key={i}
              className="grid-cell"
              animate={{ opacity: [0.1, 0.3, 0.1] }}
              transition={{ duration: 3, repeat: Infinity, delay: i * 0.1 }}
            />
          ))}
        </div>
      </div>

      <motion.div 
        className="hm-container"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="hm-content-grid">
          {/* Left Content Section */}
          <motion.div className="hm-left" variants={fadeUp}>
            <div className="hero-text">
              <motion.div 
                className="eyebrow"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <FaStar className="eyebrow-icon" />
                Hello, I'm
              </motion.div>

              <div className="name-section">
                <h1 className="hm-name">
                  <span className="name-gradient">Kavindu</span>
                  <br />
                  <span className="name-gradient alt">Bogahawatte</span>
                </h1>
                <span className="name-subtitle">Software Engineering Undergraduate</span>
              </div>

              <motion.div 
                className="title-badge"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ 
                  delay: 0.4, 
                  type: "spring",
                  stiffness: 200,
                  damping: 15
                }}
              >
                <FaCode className="badge-icon" />
                Full Stack Developer
              </motion.div>

              <motion.p 
                className="hm-description"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                Passionate Software Engineering undergraduate crafting digital experiences 
                through innovative web and mobile solutions. Turning ideas into functional, 
                beautiful applications with clean code and modern technologies.
              </motion.p>
            </div>

            {/* Contact Information */}
            <motion.div 
              className="contact-grid"
              variants={containerVariants}
            >
              {contactInfo.map((contact, index) => {
                const IconComponent = contact.icon;
                return (
                  <motion.div
                    key={contact.label}
                    className="contact-card"
                    variants={fadeUp}
                    whileHover={{ 
                      scale: isMobile ? 1 : 1.02,
                      y: isMobile ? 0 : -3
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="contact-icon-wrapper">
                      <IconComponent />
                    </div>
                    <div className="contact-details">
                      <div className="contact-label">{contact.label}</div>
                      {contact.link ? (
                        <a 
                          href={contact.link} 
                          className="contact-value"
                          target={contact.link.startsWith('http') ? "_blank" : "_self"}
                          rel={contact.link.startsWith('http') ? "noopener noreferrer" : ""}
                        >
                          {contact.value}
                        </a>
                      ) : (
                        <div className="contact-value">{contact.value}</div>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Stats Showcase */}
            <motion.div 
              className="stats-showcase"
              variants={containerVariants}
            >
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    className="stat-card"
                    variants={fadeUp}
                    whileHover={{ 
                      scale: isMobile ? 1 : 1.05,
                      y: isMobile ? 0 : -5
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="stat-icon" style={{ background: `linear-gradient(135deg, ${stat.color}, ${stat.color}80)` }}>
                      <IconComponent />
                    </div>
                    <div className="stat-content">
                      <div className="stat-number">{stat.number}</div>
                      <div className="stat-label">{stat.label}</div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Action Buttons */}
            <motion.div 
              className="hm-actions"
              variants={fadeUp}
            >
              <motion.a
                className="action-button primary"
                href="https://kavindubogahawatte.cpsharetxt.com/Kavindu_Bogahawatte_CV.pdf"
                download
                whileHover={{ 
                  scale: isMobile ? 1 : 1.05,
                  y: isMobile ? 0 : -3
                }}
                whileTap={{ scale: 0.95 }}
              >
                <FaDownload />
                <span>Download CV</span>
              </motion.a>
              <motion.a
                className="action-button secondary"
                href="#projects"
                whileHover={{ 
                  scale: isMobile ? 1 : 1.05,
                  y: isMobile ? 0 : -3
                }}
                whileTap={{ scale: 0.95 }}
              >
                <FaRocket />
                <span>View Projects</span>
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              className="hm-social"
              variants={fadeUp}
            >
              <motion.a
                href="https://linkedin.com/in/kavindubogahawatte-7b3810320"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                whileHover={{ 
                  scale: isMobile ? 1 : 1.1,
                  y: isMobile ? 0 : -3
                }}
                whileTap={{ scale: 0.9 }}
              >
                <FaLinkedin />
              </motion.a>
              <motion.a
                href="https://github.com/kavizzz03"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                whileHover={{ 
                  scale: isMobile ? 1 : 1.1,
                  y: isMobile ? 0 : -3
                }}
                whileTap={{ scale: 0.9 }}
              >
                <FaGithub />
              </motion.a>
              <motion.a
                href="mailto:kavindumalshan2003@gmail.com"
                className="social-link"
                whileHover={{ 
                  scale: isMobile ? 1 : 1.1,
                  y: isMobile ? 0 : -3
                }}
                whileTap={{ scale: 0.9 }}
              >
                <FaEnvelope />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Profile Section */}
          <motion.div className="hm-right" variants={scaleIn}>
            <div className="profile-showcase">
              {/* Profile Hero */}
              <motion.div 
                className="profile-hero"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <div className="photo-container">
                  <div className="photo-frame">
                    <img 
                      src={myPhoto} 
                      alt="Kavindu Bogahawatte" 
                      className="profile-photo"
                    />
                  </div>
                </div>
                <div className="status-badge">
                  <div className="status-dot"></div>
                  Available for work
                </div>
              </motion.div>

              {/* Skills Carousel */}
              <motion.div 
                className="skills-carousel"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <div className="carousel-header">
                  <FaCode className="carousel-icon" />
                  <h3>Tech Stack</h3>
                </div>
                
                <motion.div 
                  key={currentSkill}
                  className="skill-slide"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="skill-icon-large" style={{ color: skills[currentSkill].color }}>
                    {skills[currentSkill].icon}
                  </div>
                  <div className="skill-details">
                    <div className="skill-name">{skills[currentSkill].name}</div>
                    <div className="skill-category">{skills[currentSkill].category}</div>
                    <div className="skill-meter">
                      <div className="level-indicator">
                        <span>Proficiency</span>
                        <span>{skills[currentSkill].level}%</span>
                      </div>
                      <div className="level-bar">
                        <motion.div 
                          className="level-fill"
                          initial={{ width: 0 }}
                          animate={{ width: `${skills[currentSkill].level}%` }}
                          transition={{ duration: 1, delay: 0.2 }}
                          style={{ background: skills[currentSkill].color }}
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Skills Dots */}
                <div className="skill-dots">
                  {skills.slice(0, 6).map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      className={`skill-dot ${index === currentSkill ? 'active' : ''}`}
                      style={{ color: skill.color }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setCurrentSkill(index)}
                    >
                      {skill.icon}
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Expertise Grid */}
              <motion.div 
                className="expertise-grid"
                variants={containerVariants}
              >
                {specialties.map((specialty, index) => {
                  const IconComponent = specialty.icon;
                  return (
                    <motion.div
                      key={specialty.title}
                      className="expertise-card"
                      variants={fadeUp}
                      whileHover={{ 
                        scale: isMobile ? 1 : 1.05,
                        y: isMobile ? 0 : -5
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div className="expertise-icon" style={{ background: `linear-gradient(135deg, ${specialty.color}, ${specialty.color}80)` }}>
                        <IconComponent />
                      </div>
                      <div className="expertise-content">
                        <h4 className="expertise-title">{specialty.title}</h4>
                        <p className="expertise-desc">{specialty.desc}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>

              {/* CTA Section */}
              <motion.div 
                className="cta-section"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <h3 className="cta-title">Let's Build Something Amazing</h3>
                <p className="cta-subtitle">
                  Have a project in mind? Let's collaborate and bring your ideas to life with cutting-edge technology.
                </p>
                <motion.a
                  href="#contact"
                  className="cta-button"
                  whileHover={{ 
                    scale: isMobile ? 1 : 1.05,
                    y: isMobile ? 0 : -3
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaRocket />
                  <span>Start Your Project</span>
                  <FaExternalLinkAlt className="cta-arrow" />
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <div className="scroll-mouse">
          <div className="scroll-wheel"></div>
        </div>
        <span className="scroll-text">Scroll to explore</span>
      </motion.div>
    </header>
  );
}