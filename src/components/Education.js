// src/components/Education.js
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaAward,
  FaCalendarAlt,
  FaBook,
  FaUserGraduate,
  FaUniversity,
  FaMapMarkerAlt,
  FaChevronRight,
  FaCode,
  FaLaptopCode,
  FaDatabase,
  FaMobileAlt
} from "react-icons/fa";
import "./Education.css";

const educationData = [
  {
    id: 1,
    school: "Roman Catholic Junior School",
    location: "Pahathgama Hanwala",
    years: "2009 - 2014",
    duration: "5 Years",
    details: "Primary education — built strong foundation in mathematics, science, and languages. Developed fundamental learning skills and participated in extracurricular activities.",
    status: "Completed",
    type: "Primary Education",
    achievements: ["Mathematics Excellence", "Science Projects", "Language Skills", "Foundation Building"],
    icon: FaUserGraduate,
    color: "#3B82F6",
    grade: "Primary",
    focus: ["Math", "Science", "English", "Sinhala"],
    progress: 100,
    milestone: "Foundation",
    highlight: "Built strong academic foundation"
  },
  {
    id: 2,
    school: "Mahanama College",
    location: "Colombo 03",
    years: "2014 - 2023",
    duration: "9 Years",
    details: "G.C.E. Ordinary Level (O/L) & Advanced Level (A/L) — Physical Science stream. Excelled in mathematics, physics, and chemistry. Participated in science exhibitions and sports.",
    status: "Completed",
    type: "Secondary Education",
    achievements: ["Physical Science Stream", "Advanced Mathematics", "Physics & Chemistry", "Sports Excellence"],
    icon: FaGraduationCap,
    color: "#8B5CF6",
    grade: "A/L",
    focus: ["Physics", "Chemistry", "Mathematics", "IT"],
    progress: 100,
    milestone: "Growth",
    highlight: "Excelled in Physical Sciences"
  },
  {
    id: 3,
    school: "SLIIT City University",
    location: "Colombo",
    years: "2023 - Present",
    duration: "Ongoing",
    details: "BSc (Hons) Software Engineering — Currently pursuing undergraduate degree. Specializing in software systems, algorithms, databases, web development, and mobile applications. Currently 60% completed with strong academic performance.",
    status: "In Progress",
    type: "University Degree",
    achievements: ["Software Engineering", "Algorithms & Data Structures", "Database Systems", "Web Development", "Mobile Applications"],
    icon: FaUniversity,
    color: "#06B6D4",
    grade: "BSc (Hons)",
    focus: ["Programming", "Web Dev", "Mobile Dev", "Databases"],
    progress: 60,
    milestone: "Specialization",
    currentCourses: ["Advanced Web Technologies", "Mobile Application Development", "Software Architecture", "Cloud Computing"],
    highlight: "Software Engineering Specialization"
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 15, duration: 0.8 }
  }
};

export default function Education() {
  const [activeCard, setActiveCard] = useState(null);

  return (
    <section id="education" className="education-section">
      <div className="education-background" aria-hidden="true">
        <div className="floating-shapes">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className={`shape shape-${i % 3}`}
              animate={{
                y: [0, -20, 0],
                rotate: [0, 90, 180]
              }}
              transition={{
                duration: 6 + i * 1,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.2
              }}
            />
          ))}
        </div>

        <div className="gradient-orbs">
          <motion.div
            className="orb orb-1"
            animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="orb orb-2"
            animate={{ scale: [1.1, 1, 1.1], opacity: [0.3, 0.1, 0.3] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </div>

      <div className="container">
        <motion.header
          className="education-header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="header-content">
            <motion.div
              className="header-badge"
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
            >
              <FaGraduationCap />
            </motion.div>

            <div className="title-content">
              <motion.h1
                className="main-title"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                Education <span className="gradient-text">Journey</span>
              </motion.h1>
              <motion.p
                className="subtitle"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                From foundation to software engineering expertise
              </motion.p>
            </div>
          </div>
        </motion.header>

        <motion.section
          className="stats-overview"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="stats-grid">
            <StatItem icon={FaBook} number="10+" label="Years of Learning" color="#3B82F6" delay={0.5} />
            <StatItem icon={FaAward} number="3" label="Education Levels" color="#8B5CF6" delay={0.6} />
          </div>
        </motion.section>

        <div className="education-content">
          <div className="education-timeline">
            <div className="timeline-line">
              <motion.div
                className="timeline-progress"
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                viewport={{ once: true }}
              />
            </div>

            {educationData.map((edu, index) => (
              <TimelineCard
                key={edu.id}
                education={edu}
                index={index}
                isActive={activeCard === edu.id}
                onHover={setActiveCard}
              />
            ))}
          </div>
        </div>

        <motion.section
          className="current-focus"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h2 className="focus-title">Current Focus Areas</h2>
          <div className="focus-grid">
            <FocusItem
              icon={FaCode}
              title="Web Development"
              description="Modern frameworks & full-stack development"
              color="#06B6D4"
            />
            <FocusItem
              icon={FaMobileAlt}
              title="Mobile Apps"
              description="Cross-platform development"
              color="#8B5CF6"
            />
            <FocusItem
              icon={FaDatabase}
              title="Database Systems"
              description="Design & optimization"
              color="#10B981"
            />
            <FocusItem
              icon={FaLaptopCode}
              title="Software Architecture"
              description="System design patterns"
              color="#F59E0B"
            />
          </div>
        </motion.section>
      </div>
    </section>
  );
}

/* TimelineCard (without Key Skills section) */
function TimelineCard({ education, index, isActive, onHover }) {
  const Icon = education.icon;

  return (
    <motion.div
      className="timeline-item"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: index * 0.2 }}
      viewport={{ once: true }}
      onMouseEnter={() => onHover(education.id)}
      onMouseLeave={() => onHover(null)}
    >
      <div className="timeline-marker">
        <motion.div
          className="marker-icon"
          style={{ background: education.color }}
          whileHover={{ scale: 1.2 }}
          whileInView={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 300, delay: index * 0.3 }}
          viewport={{ once: true }}
        >
          <Icon />
        </motion.div>
        <motion.div
          className="timeline-dot"
          style={{ background: education.color }}
          animate={{ scale: isActive ? 1.3 : 1 }}
          transition={{ type: "spring", stiffness: 400 }}
        />
      </div>

      <motion.article
        className="education-card"
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        whileHover={{
          y: -8,
          scale: 1.02,
          transition: { type: "spring", stiffness: 300 }
        }}
        viewport={{ once: true }}
        style={{ ["--card-color"]: education.color }}
      >
        {education.status === "In Progress" && (
          <div className="progress-container">
            <div className="progress-label">
              <span>Degree Progress</span>
              <span className="progress-percent">{education.progress}%</span>
            </div>
            <div className="progress-bar">
              <motion.div
                className="progress-fill"
                style={{ background: education.color }}
                initial={{ width: 0 }}
                whileInView={{ width: `${education.progress}%` }}
                transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
                viewport={{ once: true }}
              />
            </div>
          </div>
        )}

        <div className="card-header">
          <div className="school-info">
            <div className="school-icon" style={{ background: education.color }}>
              <Icon />
            </div>
            <div className="school-details">
              <h2 className="school-name">{education.school}</h2>
              <div className="school-meta">
                <span className="location">
                  <FaMapMarkerAlt /> {education.location}
                </span>
                <span className="years">
                  <FaCalendarAlt /> {education.years}
                </span>
              </div>
            </div>
          </div>

          <div className="header-badges">
            <div className="grade-badge" style={{ background: education.color }}>
              {education.grade}
            </div>
            <div className={`status-badge ${education.status.toLowerCase().replace(" ", "-")}`}>
              {education.status}
            </div>
          </div>
        </div>

        <div className="card-content">
          <p className="education-description">{education.details}</p>

          {education.currentCourses && (
            <div className="courses-section">
              <h4>Current Courses</h4>
              <div className="courses-list">
                {education.currentCourses.map((course, i) => (
                  <motion.div
                    key={i}
                    className="course-item"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <FaChevronRight className="course-icon" />
                    <span>{course}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          <div className="achievements-section">
            <h4>Key Achievements</h4>
            <div className="achievements-list">
              {education.achievements.map((ach, i) => (
                <motion.div
                  key={i}
                  className="achievement-item"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.08 }}
                  viewport={{ once: true }}
                >
                  <div className="achievement-dot" style={{ background: education.color }} />
                  <span>{ach}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="card-footer">
          <div className="type-badge">{education.type}</div>
          <span className="duration">{education.duration}</span>
        </div>
      </motion.article>
    </motion.div>
  );
}

/* StatItem */
function StatItem({ icon: Icon, number, label, color, delay }) {
  return (
    <motion.div
      className="stat-item"
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      <div className="stat-icon" style={{ background: color }}>
        <Icon />
      </div>
      <div className="stat-info">
        <h3>{number}</h3>
        <p>{label}</p>
      </div>
    </motion.div>
  );
}

/* FocusItem */
function FocusItem({ icon: Icon, title, description, color }) {
  return (
    <motion.div
      className="focus-item"
      whileHover={{ scale: 1.03, y: -3 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="focus-icon" style={{ background: color }}>
        <Icon />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </motion.div>
  );
}
