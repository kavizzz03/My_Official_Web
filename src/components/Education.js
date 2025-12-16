// src/components/Education.js
import React, { useState, useRef, useEffect } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
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
  FaMobileAlt,
  FaNetworkWired,
  FaBrain,
  FaRocket,
  FaMicrochip,
  FaGlobe,
  FaCloud
} from "react-icons/fa";
import { 
  SiJavascript, 
  SiReact, 
  SiNodedotjs, 
  SiPython,
  SiMongodb,
  SiFirebase
} from "react-icons/si";
import "./Education.css";

const educationData = [
  {
    id: 1,
    school: "Roman Catholic Junior School",
    location: "Pahathgama Hanwella",
    years: "2009 - 2014",
    duration: "5 Years",
    details: "Primary education foundation with excellence in mathematics and sciences. Developed critical thinking and problem-solving skills through interactive learning methods.",
    status: "Completed",
    type: "Primary Education",
    achievements: [ "Language Skills Development", "Creative Thinking Workshops"],
    icon: FaUserGraduate,
    color: "#3B82F6",
    grade: "Primary",
    focus: ["Math Fundamentals", "Science Basics", "Language Arts", "Social Studies"],
    progress: 100,
    milestone: "Foundation",
    highlight: "Academic Foundation Building",
    tech: [FaBook, FaGlobe],
    neuralNodes: 4
  },
  {
    id: 2,
    school: "Mahanama College",
    location: "Colombo 03",
    years: "2014 - 2023",
    duration: "9 Years",
    details: "Advanced Level in Physical Science stream with specialization in Mathematics, Physics, and Chemistry. Active participation in science exhibitions and technological innovation projects.",
    status: "Completed",
    type: "Secondary Education",
    achievements: ["Physical Science Excellence", "Sports Leadership"],
    icon: FaGraduationCap,
    color: "#8B5CF6",
    grade: "A/L",
    focus: ["Advanced Physics", "Chemistry", "Pure Mathematics", "Information Technology"],
    progress: 100,
    milestone: "Specialization",
    highlight: "Science & Technology Focus",
    tech: [FaMicrochip, FaRocket],
    neuralNodes: 6
  },
  {
    id: 3,
    school: "SLIIT City University",
    location: "Colombo",
    years: "2023 - Present",
    duration: "Ongoing",
    details: "BSc (Hons) Software Engineering with focus on modern web technologies, mobile development, and cloud computing. Building expertise in full-stack development and software architecture.",
    status: "In Progress",
    type: "University Degree",
    achievements: [ ],
    icon: FaUniversity,
    color: "#06B6D4",
    grade: "BSc (Hons)",
    focus: ["Software Engineering", "Web Technologies", "Mobile Development", "Cloud Computing"],
    progress: 60,
    milestone: "Expertise",
    highlight: "Software Engineering Mastery",
    currentCourses: [
      "Advanced Web Technologies & Frameworks",
      "Mobile Application Development",
      "Software Architecture & Design Patterns",
      "Cloud Computing & Distributed Systems"
      
    ],
    tech: [SiReact, SiNodedotjs, SiPython, FaMobileAlt, FaDatabase, FaCloud],
    neuralNodes: 8
  }
];

const skillProgress = [
  { name: "Web Development", level: 85, icon: SiReact, color: "#61DAFB" },
  { name: "Mobile Development", level: 75, icon: FaMobileAlt, color: "#34C759" },
  { name: "Backend Systems", level: 80, icon: SiNodedotjs, color: "#8CC84B" },
  { name: "Database Design", level: 80, icon: FaDatabase, color: "#FF6B6B" },
  { name: "Cloud Computing", level: 65, icon: FaCloud, color: "#4ECDC4" },
  { name: "UI/UX Design", level: 70, icon: FaLaptopCode, color: "#FFD93D" }
];

const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { 
      type: "spring", 
      stiffness: 80, 
      damping: 15, 
      duration: 1 
    }
  }
};

export default function Education() {
  const [activeCard, setActiveCard] = useState(null);
  const [neuralActive, setNeuralActive] = useState(false);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      setNeuralActive(true);
    }
  }, [isInView]);

  return (
    <section id="education" className="neural-education" ref={sectionRef}>
      {/* Animated Background */}
      <div className="neural-background">
        <div className="neural-network">
          {[...Array(12)].map((_, i) => (
            <NeuralConnection key={i} index={i} isActive={neuralActive} />
          ))}
        </div>
        
        <div className="floating-neurons">
          {[...Array(8)].map((_, i) => (
            <FloatingNeuron key={i} index={i} />
          ))}
        </div>

        <div className="data-streams-3d">
          {[...Array(4)].map((_, i) => (
            <DataStream3D key={i} index={i} />
          ))}
        </div>
      </div>

      <div className="neural-container">
        {/* Animated Header */}
        <motion.header
          className="neural-header"
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="header-glow"></div>
          <div className="header-content">
            <motion.div
              className="neural-badge"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 150, damping: 20, delay: 0.3 }}
              whileHover={{ scale: 1.1, rotate: 360 }}
            >
              <FaBrain className="badge-icon" />
              <div className="badge-pulse"></div>
            </motion.div>

            <div className="title-matrix">
              <motion.h1
                className="matrix-title"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                KNOWLEDGE <span className="neural-glow">NETWORK</span>
              </motion.h1>
              <motion.p
                className="matrix-subtitle"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
              >
                Mapping the evolution of learning through neural pathways
              </motion.p>
            </div>
          </div>
        </motion.header>

        {/* Neural Timeline */}
        <div className="neural-timeline-container">
          <div className="central-neuron">
            <motion.div
              className="neuron-core"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.7, 1, 0.7]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity,
                ease: "easeInOut" 
              }}
            >
              <FaNetworkWired />
            </motion.div>
            <div className="neuron-connections">
              {educationData.map((edu, index) => (
                <NeuralPathway 
                  key={edu.id} 
                  education={edu} 
                  index={index} 
                  isActive={neuralActive}
                />
              ))}
            </div>
          </div>

          {/* Education Cards */}
          <div className="neural-cards-grid">
            {educationData.map((edu, index) => (
              <NeuralCard
                key={edu.id}
                education={edu}
                index={index}
                isActive={activeCard === edu.id}
                onHover={setActiveCard}
                neuralActive={neuralActive}
              />
            ))}
          </div>
        </div>

        {/* Skills Matrix */}
        <motion.section
          className="skills-matrix"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <div className="matrix-header">
            <h2>TECHNICAL NEURAL PATHWAYS</h2>
            <div className="matrix-activity">
              <div className="activity-dot"></div>
              <span>SYNCHRONIZED</span>
            </div>
          </div>
          
          <div className="skills-grid">
            {skillProgress.map((skill, index) => (
              <SkillNeuron
                key={skill.name}
                skill={skill}
                index={index}
                delay={1.4 + index * 0.1}
              />
            ))}
          </div>
        </motion.section>

        {/* Learning Journey */}
        <motion.section
          className="learning-journey"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.8 }}
        >
          <div className="journey-header">
            <h3>CONTINUOUS LEARNING PATH</h3>
            <div className="journey-stats">
              <div className="stat">
                <span className="number">15+</span>
                <span className="label">Technologies</span>
              </div>
              <div className="stat">
                <span className="number">1000+</span>
                <span className="label">Code Hours</span>
              </div>
              <div className="stat">
                <span className="number">25+</span>
                <span className="label">Projects</span>
              </div>
            </div>
          </div>
          
          <div className="journey-path">
            <div className="path-line">
              <motion.div
                className="path-progress"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 2, delay: 2 }}
              />
            </div>
            
            <div className="path-milestones">
              <Milestone 
                title="Foundation" 
                year="2009-2014" 
                icon={FaUserGraduate}
                delay={2.2}
              />
              <Milestone 
                title="Specialization" 
                year="2014-2023" 
                icon={FaGraduationCap}
                delay={2.4}
              />
              <Milestone 
                title="Expertise" 
                year="2023-Present" 
                icon={FaUniversity}
                delay={2.6}
              />
              <Milestone 
                title="Innovation" 
                year="Future" 
                icon={FaRocket}
                delay={2.8}
              />
            </div>
          </div>
        </motion.section>
      </div>
    </section>
  );
}

/* Neural Card Component */
function NeuralCard({ education, index, isActive, onHover, neuralActive }) {
  const Icon = education.icon;
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-50px" });

  return (
    <motion.div
      className="neural-card-wrapper"
      ref={cardRef}
      initial={{ opacity: 0, y: 80, scale: 0.8 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.8, delay: index * 0.3 }}
      onMouseEnter={() => onHover(education.id)}
      onMouseLeave={() => onHover(null)}
    >
      <motion.article
        className={`neural-card ${isActive ? 'active' : ''}`}
        variants={cardVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        whileHover={{
          y: -15,
          scale: 1.02,
          transition: { type: "spring", stiffness: 300, damping: 25 }
        }}
        style={{ ["--neural-color"]: education.color }}
      >
        {/* Neural Nodes */}
        <div className="neural-nodes">
          {[...Array(education.neuralNodes)].map((_, i) => (
            <motion.div
              key={i}
              className="neural-node"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 2 + Math.random(),
                repeat: Infinity,
                delay: Math.random() * 2
              }}
            />
          ))}
        </div>

        {/* Progress Orb */}
        {education.status === "In Progress" && (
          <div className="progress-orb">
            <div className="orb-container">
              <motion.div
                className="orb-progress"
                initial={{ strokeDashoffset: 283 }}
                animate={{ strokeDashoffset: 283 - (283 * education.progress) / 100 }}
                transition={{ duration: 2, delay: 1 + index * 0.2 }}
              >
                <svg viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="45" className="orb-background" />
                  <motion.circle 
                    cx="50" 
                    cy="50" 
                    r="45" 
                    className="orb-fill"
                    style={{ stroke: education.color }}
                  />
                </svg>
              </motion.div>
              <span className="orb-percent">{education.progress}%</span>
            </div>
          </div>
        )}

        {/* Card Header */}
        <div className="neural-card-header">
          <div className="school-globe">
            <div className="globe-icon" style={{ background: education.color }}>
              <Icon />
            </div>
            <div className="school-glow"></div>
          </div>
          
          <div className="school-info">
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

          <div className="neural-badges">
            <div className="grade-orb" style={{ background: education.color }}>
              {education.grade}
            </div>
            <div className={`status-pulse ${education.status.toLowerCase().replace(" ", "-")}`}>
              <div className="pulse-dot"></div>
              {education.status}
            </div>
          </div>
        </div>

        {/* Card Content */}
        <div className="neural-card-content">
          <p className="neural-description">{education.details}</p>

          {/* Tech Stack */}
          <div className="tech-neurons">
            <h4>Tech Exposure</h4>
            <div className="neurons-grid">
              {education.tech.map((TechIcon, i) => (
                <motion.div
                  key={i}
                  className="tech-neuron"
                  whileHover={{ scale: 1.3, rotate: 360 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <TechIcon />
                </motion.div>
              ))}
            </div>
          </div>

          {education.currentCourses && (
            <div className="courses-matrix">
              <h4>Active Learning Paths</h4>
              <div className="matrix-grid">
                {education.currentCourses.map((course, i) => (
                  <motion.div
                    key={i}
                    className="matrix-cell"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    whileHover={{ scale: 1.05, background: education.color }}
                  >
                    <div className="cell-glow"></div>
                    <span>{course}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          <div className="achievements-grid">
            <h4>Neural Milestones</h4>
            <div className="achievements-matrix">
              {education.achievements.map((ach, i) => (
                <motion.div
                  key={i}
                  className="achievement-node"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  whileHover={{ scale: 1.1, background: education.color }}
                >
                  <div className="node-connector"></div>
                  <span>{ach}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Card Footer */}
        <div className="neural-card-footer">
          <div className="type-signal">{education.type}</div>
          <div className="duration-pulse">
            <div className="pulse"></div>
            <span>{education.duration}</span>
          </div>
        </div>

        {/* Active Glow Effect */}
        {isActive && <div className="card-active-glow"></div>}
      </motion.article>
    </motion.div>
  );
}

/* Supporting Components */
function NeuralConnection({ index, isActive }) {
  return (
    <motion.div
      className="neural-connection"
      initial={{ pathLength: 0 }}
      animate={isActive ? { pathLength: 1 } : {}}
      transition={{ duration: 2, delay: index * 0.2 }}
      style={{
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
      }}
    />
  );
}

function FloatingNeuron({ index }) {
  return (
    <motion.div
      className="floating-neuron"
      animate={{
        y: [0, -40, 0],
        x: [0, Math.random() * 20 - 10, 0],
        rotate: [0, 180, 360]
      }}
      transition={{
        duration: 5 + Math.random() * 3,
        repeat: Infinity,
        ease: "easeInOut",
        delay: index * 0.5
      }}
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
      }}
    />
  );
}

function DataStream3D({ index }) {
  return (
    <motion.div
      className="data-stream-3d"
      animate={{
        y: ["100%", "-100%"],
        opacity: [0, 1, 0]
      }}
      transition={{
        duration: 3 + Math.random() * 2,
        repeat: Infinity,
        delay: index * 0.7
      }}
      style={{
        left: `${(index / 4) * 100}%`,
      }}
    >
      {[...Array(8)].map((_, i) => (
        <motion.span
          key={i}
          className="data-byte-3d"
          animate={{
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            delay: i * 0.1,
          }}
        >
          {Math.random() > 0.5 ? '1' : '0'}
        </motion.span>
      ))}
    </motion.div>
  );
}

function NeuralPathway({ education, index, isActive }) {
  return (
    <motion.div
      className="neural-pathway"
      initial={{ pathLength: 0 }}
      animate={isActive ? { pathLength: 1 } : {}}
      transition={{ duration: 1.5, delay: 0.5 + index * 0.3 }}
      style={{ ["--path-color"]: education.color }}
    >
      <div className="path-glow"></div>
    </motion.div>
  );
}

function SkillNeuron({ skill, index, delay }) {
  const Icon = skill.icon;
  
  return (
    <motion.div
      className="skill-neuron"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ scale: 1.05 }}
    >
      <div className="neuron-icon" style={{ color: skill.color }}>
        <Icon />
      </div>
      
      <div className="skill-info">
        <h4>{skill.name}</h4>
        <div className="skill-progress">
          <motion.div
            className="progress-track"
            initial={{ width: 0 }}
            animate={{ width: `${skill.level}%` }}
            transition={{ duration: 1.5, delay: delay + 0.3 }}
            style={{ background: skill.color }}
          />
        </div>
        <span className="skill-level">{skill.level}%</span>
      </div>
      
      <div className="neuron-connections">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="connection" style={{ background: skill.color }} />
        ))}
      </div>
    </motion.div>
  );
}

function Milestone({ title, year, icon: Icon, delay }) {
  return (
    <motion.div
      className="milestone"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ scale: 1.1 }}
    >
      <div className="milestone-icon">
        <Icon />
      </div>
      <h4>{title}</h4>
      <span>{year}</span>
      <div className="milestone-glow"></div>
    </motion.div>
  );
}