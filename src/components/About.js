// src/components/About.js
import React from "react";
import { motion } from "framer-motion";
import {
  FaCode,
  FaServer,
  FaGlobe,
  FaUser,
  FaRocket,
  FaBrain,
  FaPalette
} from "react-icons/fa";
import "./About.css";

const About = () => {
  const stats = [
    { number: "2+", label: "Years Experience", color: "#3B82F6" },
    { number: "10+", label: "Projects Completed", color: "#8B5CF6" },
  ];

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

        <div className="gradient-orbs" aria-hidden="true">
          <motion.div
            className="orb orb-1"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.6, 0.3],
              x: [0, 50, 0],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="orb orb-2"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.4, 0.2, 0.4],
              y: [0, -40, 0],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </div>

      <div className="container">
        {/* Header Section */}
        <motion.div
          className="about-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.div
            className="header-badge"
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
            viewport={{ once: true }}
            aria-hidden="true"
          >
            <FaUser />
          </motion.div>

          <div className="header-content">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              viewport={{ once: true }}
            >
              About <span className="gradient-text">Me</span>
            </motion.h2>

            <motion.p
              className="header-subtitle"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              viewport={{ once: true }}
            >
              Full Stack Developer • Backend Specialist • Creative Problem Solver
            </motion.p>
          </div>
        </motion.div>

        {/* Stats Overview */}
        <motion.div
          className="stats-overview"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="stats-grid" role="list">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="stat-item"
                role="listitem"
                initial={{ opacity: 0, scale: 0.8, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="stat-number" style={{ color: stat.color }}>
                  {stat.number}
                </div>
                <div className="stat-label">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="about-content">
          {/* Personal Story */}
          <motion.div
            className="personal-story"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="story-card"
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="card-glow" />
              <div className="card-content">
                <div className="card-header">
                  <FaBrain className="card-icon" />
                  <h3>My Journey</h3>
                </div>

                <div className="story-text">
                  <p>
                    I'm <strong>Kavindu Bogahawatte</strong>, a passionate Full Stack Developer
                    with a strong specialization in <strong>backend development</strong>. While I excel at
                    creating robust, scalable server-side architectures, I'm equally proficient
                    in crafting beautiful, responsive user interfaces.
                  </p>
                  <p>
                    My expertise spans the entire development lifecycle, from database design
                    and API development to frontend implementation and mobile app creation.
                    I write <strong>clean, efficient code</strong> and aim to deliver excellent user experiences.
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
        </div>

        {/* CTA Section */}
        <motion.div
          className="about-cta"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="cta-card"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="cta-content">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                Ready to Build Something Amazing?
              </motion.h3>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                Let's collaborate and turn your ideas into reality with cutting-edge solutions.
              </motion.p>
            </div>

            <motion.a
              href="#contact"
              className="cta-button"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 0.6 }}
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
