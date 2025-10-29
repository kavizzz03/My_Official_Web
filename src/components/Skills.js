import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaJava,
  FaPhp,
  FaCode,
  FaDatabase,
  FaReact,
  FaNodeJs,
  FaMobile,
  FaServer,
  FaGlobe,
  FaBolt,
  FaRocket
} from "react-icons/fa";
import {
  SiAndroid,
  SiMysql,
  SiMongodb,
  SiExpress,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiCplusplus
} from "react-icons/si";
import "./Skills.css";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const skillCategories = [
    { id: "all", name: "All Skills", icon: <FaRocket />, color: "#3B82F6" },
    { id: "frontend", name: "Frontend", icon: <FaGlobe />, color: "#8B5CF6" },
    { id: "backend", name: "Backend", icon: <FaServer />, color: "#06B6D4" },
    { id: "mobile", name: "Mobile", icon: <FaMobile />, color: "#10B981" },
    { id: "database", name: "Database", icon: <FaDatabase />, color: "#F59E0B" }
  ];

  const skills = [
    {
      name: "Java",
      description: "Android App Development",
      level: 90,
      category: "mobile",
      icon: <FaJava />,
      color: "#F89820",
      projects: 8
    },
    {
      name: "React",
      description: "Frontend Library",
      level: 88,
      category: "frontend",
      icon: <FaReact />,
      color: "#61DAFB",
      projects: 12
    },
    {
      name: "Node.js",
      description: "Backend Runtime",
      level: 85,
      category: "backend",
      icon: <FaNodeJs />,
      color: "#339933",
      projects: 10
    },
    {
      name: "PHP",
      description: "Web Development",
      level: 85,
      category: "backend",
      icon: <FaPhp />,
      color: "#777BB4",
      projects: 7
    },
    {
      name: "JavaScript",
      description: "Programming Language",
      level: 92,
      category: "frontend",
      icon: <SiJavascript />,
      color: "#F7DF1E",
      projects: 15
    },
    {
      name: "HTML5",
      description: "Markup Language",
      level: 95,
      category: "frontend",
      icon: <SiHtml5 />,
      color: "#E34F26",
      projects: 20
    },
    {
      name: "CSS3",
      description: "Styling Language",
      level: 90,
      category: "frontend",
      icon: <SiCss3 />,
      color: "#1572B6",
      projects: 18
    },
    {
      name: "C / C++",
      description: "System Programming",
      level: 75,
      category: "backend",
      icon: <SiCplusplus />,
      color: "#00599C",
      projects: 5
    },
    {
      name: "MySQL",
      description: "Relational Database",
      level: 85,
      category: "database",
      icon: <SiMysql />,
      color: "#4479A1",
      projects: 9
    },
    {
      name: "MongoDB",
      description: "NoSQL Database",
      level: 80,
      category: "database",
      icon: <SiMongodb />,
      color: "#47A248",
      projects: 6
    },
    {
      name: "Express.js",
      description: "Backend Framework",
      level: 82,
      category: "backend",
      icon: <SiExpress />,
      color: "#000000",
      projects: 8
    },
    {
      name: "Android",
      description: "Mobile Development",
      level: 88,
      category: "mobile",
      icon: <SiAndroid />,
      color: "#3DDC84",
      projects: 7
    }
  ];

  const filteredSkills = activeCategory === "all" 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

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
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const progressVariants = {
    hidden: { width: 0 },
    visible: (level) => ({
      width: `${level}%`,
      transition: {
        duration: 1.5,
        ease: "easeOut",
        delay: 0.5
      }
    })
  };

  return (
    <section id="skills" className="skills-section">
      {/* Background Elements */}
      <div className="skills-background">
        <div className="floating-shapes">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className={`shape shape-${i + 1}`}
              animate={{
                y: [0, -30, 0],
                rotate: [0, 180, 360],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 8 + i * 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
        
        <div className="gradient-orbs">
          <motion.div
            className="orb orb-1"
            animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="orb orb-2"
            animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </div>

      <div className="container">
        {/* Header Section */}
        <motion.div 
          className="skills-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.div
            className="header-badge"
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <FaBolt />
          </motion.div>
          <div className="header-content">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              viewport={{ once: true }}
            >
              Technical <span className="gradient-text">Skills</span>
            </motion.h2>
            <motion.p
              className="header-subtitle"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              viewport={{ once: true }}
            >
              Mastering the tools and technologies that power modern applications
            </motion.p>
          </div>
        </motion.div>

        {/* Category Filter */}
        <motion.div 
          className="category-filter"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          {skillCategories.map((category) => (
            <motion.button
              key={category.id}
              className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
              style={{
                '--category-color': category.color,
                borderColor: activeCategory === category.id ? category.color : 'transparent'
              }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="category-icon" style={{ color: category.color }}>
                {category.icon}
              </span>
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="skill-card"
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                scale: 1.02,
                transition: { type: "spring", stiffness: 300 }
              }}
              style={{ ['--skill-color']: skill.color }}
            >
              {/* Card Header */}
              <div className="skill-header">
                <div className="skill-icon" style={{ color: skill.color }}>
                  {skill.icon}
                </div>
                <div className="skill-info">
                  <h3 className="skill-name">{skill.name}</h3>
                  <p className="skill-description">{skill.description}</p>
                </div>
                <div className="skill-badge" style={{ background: skill.color }}>
                  {skill.level}%
                </div>
              </div>

              {/* Progress Bar */}
              <div className="skill-progress-container">
                <div className="progress-labels">
                  <span>Beginner</span>
                  <span>Expert</span>
                </div>
                <div className="skill-bar">
                  <motion.div
                    className="skill-progress"
                    style={{ background: skill.color }}
                    variants={progressVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={skill.level}
                  >
                    <div className="progress-glow" style={{ background: skill.color }} />
                  </motion.div>
                </div>
                <div className="progress-stats">
                  <span className="projects-count">
                    {skill.projects}+ projects
                  </span>
                  <span className="skill-level">
                    {skill.level >= 90 ? 'Expert' : 
                     skill.level >= 80 ? 'Advanced' : 
                     skill.level >= 70 ? 'Intermediate' : 'Beginner'}
                  </span>
                </div>
              </div>

              {/* Background Glow */}
              <div className="skill-glow" style={{ background: skill.color }} />
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Summary */}
        <motion.div 
          className="skills-summary"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="summary-card">
            <div className="summary-content">
              <h3>Full Stack Proficiency</h3>
              <p>
                With expertise spanning frontend, backend, mobile, and database technologies, 
                I deliver comprehensive solutions that cover the entire development stack.
              </p>
             
            </div>
            <div className="summary-visual">
              <motion.div
                className="code-icon"
                animate={{ 
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <FaCode />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;