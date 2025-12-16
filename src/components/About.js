// src/components/About.js - Enhanced Version
import React from "react";
import { motion } from "framer-motion";
import {
  FaCode,
  FaServer,
  FaGlobe,
  FaUser,
  FaRocket,
  FaBrain,
  FaPalette,
  FaMobile,
  FaDatabase,
  FaShieldAlt,
  FaLightbulb,
  FaUsers,
  FaChartLine,
  FaCogs,
  FaCloud
} from "react-icons/fa";
import "./About.css";

const About = () => {
  const stats = [
    { number: "2+", label: "Years Experience", color: "#00f3ff", icon: <FaChartLine /> },
    { number: "10+", label: "Projects Completed", color: "#8b5cf6", icon: <FaCode /> },
    { number: "100%", label: "Client Satisfaction", color: "#00ff88", icon: <FaUsers /> },
    { number: "24/7", label: "Available Support", color: "#ff00ff", icon: <FaCloud /> }
  ];

  const expertise = [
    {
      icon: <FaServer />,
      title: "Backend Development",
      desc: "Building scalable server-side applications with Node.js, Python, and Java. Expertise in REST APIs, microservices, and database design.",
      skills: ["Node.js", "Python", "Java", "REST APIs", "Microservices", "MySQL", "MongoDB"]
    },
    {
      icon: <FaGlobe />,
      title: "Frontend Development",
      desc: "Creating responsive, interactive user interfaces with React, Vue.js, and modern CSS frameworks. Focus on performance and user experience.",
      skills: ["React", "JavaScript", "HTML5", "CSS3", "Bootstrap", "Framer Motion", "Responsive Design"]
    },
    {
      icon: <FaMobile />,
      title: "Mobile Development",
      desc: "Developing cross-platform mobile applications with React Native and Flutter. Native performance with code reusability.",
      skills: ["React Native", "Flutter", "Android", "iOS", "Mobile UI/UX", "Push Notifications"]
    },
    {
      icon: <FaDatabase />,
      title: "Database Management",
      desc: "Designing optimized database schemas, writing efficient queries, and implementing data security measures.",
      skills: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "Database Design", "Query Optimization"]
    },
    {
      icon: <FaShieldAlt />,
      title: "Security & Performance",
      desc: "Implementing security best practices, performance optimization, and monitoring solutions for enterprise applications.",
      skills: ["JWT", "OAuth", "SSL/TLS", "Performance Tuning", "Caching", "Load Balancing"]
    },
    {
      icon: <FaCogs />,
      title: "DevOps & Deployment",
      desc: "Setting up CI/CD pipelines, containerization with Docker, and cloud deployment on AWS, GCP, and Azure.",
      skills: ["Docker", "AWS", "CI/CD", "Git", "Linux", "Nginx", "PM2"]
    }
  ];

  const values = [
    {
      icon: <FaLightbulb />,
      title: "Innovation",
      desc: "Always exploring new technologies and approaches to solve complex problems with creative solutions."
    },
    {
      icon: <FaCode />,
      title: "Clean Code",
      desc: "Writing maintainable, efficient, and well-documented code following industry best practices and patterns."
    },
    {
      icon: <FaUsers />,
      title: "Collaboration",
      desc: "Working closely with clients and team members to understand requirements and deliver optimal solutions."
    },
    {
      icon: <FaChartLine />,
      title: "Continuous Growth",
      desc: "Constantly learning and adapting to new technologies and methodologies to stay at the forefront of development."
    }
  ];

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
    hidden: { y: 50, opacity: 0, scale: 0.95 },
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
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 15
      }
    }
  };

  return (
    <section id="about" className="about-section">
      {/* Animated Background */}
      <div className="about-background" aria-hidden="true">
        <div className="floating-shapes">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className={`shape shape-${i + 1}`}
              animate={{
                y: [0, -40, 0],
                rotate: [0, 180, 360],
                scale: [1, 1.15, 1],
              }}
              transition={{
                duration: 10 + i * 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        <div className="gradient-orbs" aria-hidden="true">
          <motion.div
            className="orb orb-1"
            animate={{
              scale: [1, 1.4, 1],
              opacity: [0.3, 0.7, 0.3],
              x: [0, 60, 0],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="orb orb-2"
            animate={{
              scale: [1.2, 0.9, 1.2],
              opacity: [0.2, 0.6, 0.2],
              y: [0, -50, 0],
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </div>

      <div className="container">
        {/* Header Section */}
        <motion.div
          className="about-header"
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.div
            className="header-badge"
            variants={scaleIn}
            viewport={{ once: true }}
            aria-hidden="true"
          >
            <FaUser />
          </motion.div>

          <div className="header-content">
            <motion.h2 variants={fadeUp} viewport={{ once: true }}>
              About <span className="gradient-text">Me</span>
            </motion.h2>

            <motion.p
              className="header-subtitle"
              variants={fadeUp}
              viewport={{ once: true }}
            >
              Full Stack Developer • Backend Specialist • Creative Problem Solver
            </motion.p>
          </div>
        </motion.div>

        {/* Stats Overview */}
        <motion.div
          className="stats-overview"
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true }}
        >
          <div className="stats-grid" role="list">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="stat-item"
                role="listitem"
                variants={fadeUp}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.98 }}
                viewport={{ once: true }}
              >
                <div className="stat-icon" style={{ color: stat.color }}>
                  {stat.icon}
                </div>
                <div className="stat-number" style={{ color: stat.color }}>
                  {stat.number}
                </div>
                <div className="stat-label">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Main Content Grid */}
        <div className="about-content">
          {/* Personal Story */}
          <motion.div
            className="personal-story"
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: true }}
          >
            <motion.div
              className="story-card"
              variants={fadeUp}
              whileHover={{ y: -10, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="card-glow" />
              <div className="card-content">
                <div className="card-header">
                  <FaBrain className="card-icon" />
                  <h3>My Journey & Passion</h3>
                </div>

                <div className="story-text">
                  <p>
                    I'm <strong>Kavindu Bogahawatte</strong>, a passionate Full Stack Developer
                    with a strong specialization in <strong>backend development</strong>. My journey
                    began with a fascination for how technology can solve real-world problems,
                    and it has evolved into a career dedicated to crafting exceptional digital experiences.
                  </p>
                  <p>
                    What drives me is the challenge of transforming complex requirements into
                    elegant, efficient solutions. I believe in writing <strong>clean, maintainable code</strong>
                    that not only works flawlessly but also scales gracefully as applications grow.
                  </p>
                  <p>
                    My approach combines technical expertise with creative problem-solving,
                    ensuring that every project delivers both <strong>performance and beauty</strong>.
                    I'm constantly learning and adapting to new technologies, always striving
                    to stay at the cutting edge of web and mobile development.
                  </p>
                </div>

                <div className="story-highlights" aria-hidden="true">
                  <div className="highlight">
                    <FaCode className="highlight-icon" />
                    <span>Full-Stack Proficiency</span>
                  </div>
                  <div className="highlight">
                    <FaServer className="highlight-icon" />
                    <span>Backend Architecture</span>
                  </div>
                  <div className="highlight">
                    <FaPalette className="highlight-icon" />
                    <span>User-Centric Design</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Expertise Section */}
          <motion.div
            className="expertise-section"
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: true }}
          >
            <motion.div
              className="section-header"
              variants={fadeUp}
              viewport={{ once: true }}
            >
              <FaCode className="section-icon" />
              <h3>My Expertise</h3>
            </motion.div>

            <div className="expertise-grid">
              {expertise.slice(0, 3).map((item, index) => (
                <motion.div
                  key={item.title}
                  className="expertise-card"
                  variants={fadeUp}
                  whileHover={{ y: -10, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="expertise-icon">
                    {item.icon}
                  </div>
                  <div className="expertise-content">
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                    <div className="skill-tags">
                      {item.skills.slice(0, 4).map(skill => (
                        <span key={skill} className="skill-tag">{skill}</span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div
          className="values-section"
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true }}
        >
          <motion.div
            className="section-header"
            variants={fadeUp}
            viewport={{ once: true }}
          >
            <FaUsers className="section-icon" />
            <h3>Core Values</h3>
          </motion.div>

          <div className="values-grid">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="value-card"
                variants={fadeUp}
                whileHover={{ y: -10, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="value-icon">
                  {value.icon}
                </div>
                <div className="value-content">
                  <h4>{value.title}</h4>
                  <p>{value.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="about-cta"
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true }}
        >
          <motion.div
            className="cta-card"
            variants={fadeUp}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="cta-content">
              <motion.h3 variants={fadeUp} viewport={{ once: true }}>
                Ready to Build Something Amazing?
              </motion.h3>

              <motion.p variants={fadeUp} viewport={{ once: true }}>
                Let's collaborate and turn your ideas into reality with cutting-edge solutions
                that combine innovation, performance, and exceptional user experience.
              </motion.p>
            </div>

            <motion.a
              href="#contact"
              className="cta-button"
              variants={scaleIn}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 25px 50px rgba(0, 243, 255, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
              viewport={{ once: true }}
              aria-label="Start your project - go to contact"
            >
              <FaRocket />
              <span>Start Your Project</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;