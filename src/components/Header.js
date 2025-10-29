// Header.jsx
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
import { SiPhp, SiReact, SiNodedotjs, SiMysql, SiCplusplus, SiHtml5, SiCss3, SiJavascript, SiPython, SiFlutter } from "react-icons/si";
import "./Header.css";

// Import your photo
import myPhoto from "./Images/my_pic.jpg";

export default function Header() {
  const [currentSkill, setCurrentSkill] = useState(0);

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
    const interval = setInterval(() => {
      setCurrentSkill((prev) => (prev + 1) % skills.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [skills.length]);

  const stagger = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const fadeUp = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const scaleIn = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5, ease: "backOut" }
    }
  };

  return (
    <header className="hm-header">
      {/* Enhanced Background with Gradient Animation */}
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
        variants={stagger}
      >
        {/* Left Content Section */}
        <motion.div className="hm-left" variants={fadeUp}>
          <motion.div 
            className="eyebrow"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <FaStar className="eyebrow-icon" />
            Hello, I'm
          </motion.div>

          <motion.h1 className="hm-name">
            <span className="gradient-text">Kavindu</span>
            <br />
            <span className="gradient-text alt">Bogahawatte</span>
          </motion.h1>

          <motion.div 
            className="title-badge"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.4, type: "spring" }}
          >
            <FaCode className="badge-icon" />
            Full Stack Developer
          </motion.div>

          <motion.p className="hm-subtitle">
            Passionate Software Engineering undergraduate crafting digital experiences 
            through innovative web and mobile solutions. Turning ideas into functional, 
            beautiful applications.
          </motion.p>

          {/* Contact Information */}
          <motion.div className="contact-info" variants={stagger}>
            {contactInfo.map((contact, index) => {
              const IconComponent = contact.icon;
              return (
                <motion.div
                  key={contact.label}
                  className="contact-item"
                  variants={fadeUp}
                  whileHover={{ scale: 1.02, x: 5 }}
                >
                  <div className="contact-icon" style={{ background: contact.color }}>
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

          {/* Quick Stats */}
          <motion.div className="quick-stats" variants={stagger}>
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  className="stat-item"
                  variants={fadeUp}
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  <div className="stat-icon" style={{ background: stat.color }}>
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
          <motion.div className="hm-actions" variants={fadeUp}>
            <motion.a
              className="btn primary"
              href="https://kavindubogahawatte.cpsharetxt.com/Kavindu_Bogahawatte_CV.pdf"
              download
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaDownload />
              <span>Download CV</span>
            </motion.a>
            <motion.a
              className="btn secondary"
              href="#projects"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaRocket />
              <span>View Projects</span>
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div className="hm-social" variants={fadeUp}>
            <motion.a
              href="https://linkedin.com/in/kavindubogahawatte-7b3810320"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -2 }}
              className="social-link"
            >
              <FaLinkedin />
            </motion.a>
            <motion.a
              href="https://github.com/kavizzz03"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -2 }}
              className="social-link"
            >
              <FaGithub />
            </motion.a>
            <motion.a
              href="mailto:kavindumalshan2003@gmail.com"
              whileHover={{ scale: 1.2, y: -2 }}
              className="social-link"
            >
              <FaEnvelope />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right Profile Section */}
        <motion.div className="hm-right" variants={scaleIn}>
          <div className="profile-card">
            {/* Profile Photo with Enhanced Design */}
            <motion.div 
              className="profile-photo-container"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="profile-photo-frame">
                <img 
                  src={myPhoto} 
                  alt="Kavindu Bogahawatte" 
                  className="profile-photo"
                />
                <div className="photo-glow" />
              </div>
              <motion.div 
                className="status-indicator"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div className="pulse-dot"></div>
                Available for work
              </motion.div>
            </motion.div>

            {/* Personal Info Card */}
            <motion.div 
              className="personal-info-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <div className="personal-header">
                <FaUser className="personal-icon" />
                <h3>Contact Information</h3>
              </div>
              <div className="personal-details">
                <div className="personal-item">
                  <FaEnvelope className="personal-item-icon" style={{ color: '#EA4335' }} />
                  <div>
                    <div className="personal-label">Email</div>
                    <a href="mailto:kavindumalshan2003@gmail.com" className="personal-value">
                      kavindumalshan2003@gmail.com
                    </a>
                  </div>
                </div>
                <div className="personal-item">
                  <FaPhone className="personal-item-icon" style={{ color: '#34A853' }} />
                  <div>
                    <div className="personal-label">Phone</div>
                    <a href="tel:+94740890730" className="personal-value">
                      +94 740890730
                    </a>
                  </div>
                </div>
                <div className="personal-item">
                  <FaMapMarkerAlt className="personal-item-icon" style={{ color: '#4285F4' }} />
                  <div>
                    <div className="personal-label">Location</div>
                    <div className="personal-value">Colombo, Sri Lanka</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Skills Showcase */}
            <motion.div className="skills-showcase">
              <div className="section-header">
                <FaCode className="section-icon" />
                <h3>Tech Stack</h3>
              </div>
              
              <div className="current-skill">
                <motion.div 
                  key={currentSkill}
                  className="skill-display"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="skill-icon" style={{ color: skills[currentSkill].color }}>
                    {skills[currentSkill].icon}
                  </div>
                  <div className="skill-info">
                    <div className="skill-name">{skills[currentSkill].name}</div>
                    <div className="skill-category">{skills[currentSkill].category}</div>
                  </div>
                  <div className="skill-level">
                    <div className="level-bar">
                      <motion.div 
                        className="level-fill"
                        initial={{ width: 0 }}
                        animate={{ width: `${skills[currentSkill].level}%` }}
                        transition={{ duration: 1, delay: 0.2 }}
                        style={{ background: skills[currentSkill].color }}
                      />
                    </div>
                    <span className="level-percent">{skills[currentSkill].level}%</span>
                  </div>
                </motion.div>
              </div>

              {/* Skills Grid */}
              <div className="skills-mini-grid">
                {skills.slice(0, 6).map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className={`skill-chip ${index === currentSkill ? 'active' : ''}`}
                    style={{ 
                      borderColor: skill.color,
                      background: index === currentSkill ? `${skill.color}20` : 'transparent'
                    }}
                    whileHover={{ scale: 1.1 }}
                    onClick={() => setCurrentSkill(skills.findIndex(s => s.name === skill.name))}
                  >
                    <span className="chip-icon" style={{ color: skill.color }}>
                      {skill.icon}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Specialties */}
            <motion.div className="specialties-grid">
              {specialties.map((specialty, index) => {
                const IconComponent = specialty.icon;
                return (
                  <motion.div
                    key={specialty.title}
                    className="specialty-item"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <div className="specialty-icon" style={{ background: specialty.color }}>
                      <IconComponent />
                    </div>
                    <div className="specialty-content">
                      <h4>{specialty.title}</h4>
                      <p>{specialty.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Call to Action */}
            <motion.div 
              className="cta-section"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
            >
              <motion.a
                href="#contact"
                className="cta-button"
                whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(59, 130, 246, 0.4)" }}
                whileTap={{ scale: 0.95 }}
              >
                <FaRocket />
                <span>Start Your Project</span>
                <FaExternalLinkAlt className="cta-arrow" />
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          className="scroll-arrow"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <span className="scroll-text">Scroll to explore</span>
      </motion.div>
    </header>
  );
}