import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaStar,
  FaCode,
  FaMobile,
  FaDesktop,
  FaServer,
  FaRocket,
  FaEye,
  FaTimes,
  FaShoppingCart,
  FaHome,
  FaBriefcase,
  FaJava,
  FaList,
  FaCalendarAlt,
  FaLayerGroup,
  FaFilter,
  FaSearch,
  FaPlay,
  FaPause,
  FaExpand,
  FaCompress
} from "react-icons/fa";
import {
  SiReact,
  SiNodedotjs,
  SiPhp,
  SiMysql,
  SiAndroid,
  SiBootstrap,
  SiExpress,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiMongodb,
  SiPython,
  SiOpenai
} from "react-icons/si";
import "./Projects.css";

// Import images
import hireUsAdminImg from "./Images/hire_us_admin.png";
import hireUsMobileImg from "./Images/hire_us_app.jpg";
import folClothingWebImg from "./Images/fol_web.png";
import folClothingMobileImg from "./Images/fol_app.jpg";
import kmdSweetHouseImg from "./Images/kmd_web.png";
import cpShareTxtImg from "./Images/cpsharetxt_web.png";
import scuPortfolioImg from "./Images/my_web.png";
import mpDownloader from "./Images/mpDownloader.png";
import subtitleGenImg from "./Images/subtitle_generator.png";

const projects = [
  {
    id: 1,
    name: "Hire Us - Admin Panel",
    description: "Comprehensive admin dashboard for managing job listings, applicants, employers, and platform analytics.",
    fullDescription: "A sophisticated web-based admin panel for the Hire Us job platform. Features include user management, job posting approval system, applicant tracking, payment processing, real-time analytics dashboard, and comprehensive reporting tools. Built with modern web technologies for optimal performance and user experience.",
    year: 2025,
    tech: ["PHP", "JavaScript", "HTML5", "CSS3", "Bootstrap", "MySQL", "Chart.js", "SweetAlert"],
    github: "https://github.com/kavizzz03/Hire_Us_Admin_WebSite.git",
    demo: "https://hireme.cpsharetxt.com/admin_login.php",
    live: "https://hireme.cpsharetxt.com/admin_login.php",
    image: hireUsAdminImg,
    category: "web",
    platform: "Web",
    features: ["User Management", "Job Posting System", "Applicant Tracking", "Analytics Dashboard", "Payment Processing", "Real-time Reports"],
    status: "Completed",
    type: "Admin Panel",
    featured: true,
    color: "#3B82F6",
    accentColor: "#60A5FA"
  },
  {
    id: 2,
    name: "Hire Us - Mobile App",
    description: "Native Android mobile app for job seekers and employers with real-time notifications.",
    fullDescription: "A feature-rich Android application built for the Hire Us platform. Enables job seekers to browse opportunities, apply for positions, and receive real-time notifications. Employers can post jobs, review applications, and communicate with candidates.",
    year: 2025,
    tech: ["Java", "XML", "PHP", "MySQL", "Android SDK", "REST API"],
    github: "https://github.com/kavizzz03/Hire_Us_App.git",
    demo: "https://hireme.cpsharetxt.com/",
    live: "https://hireme.cpsharetxt.com/",
    image: hireUsMobileImg,
    category: "mobile",
    platform: "Android",
    features: ["Job Browsing", "Real-time Notifications", "In-app Chat", "Secure Auth", "Profile Management", "Application Tracking"],
    status: "Completed",
    type: "Mobile App",
    color: "#10B981",
    accentColor: "#34D399",
    featured: true
  },
  {
    id: 3,
    name: "FOL Clothing - E-commerce",
    description: "Modern e-commerce website with product catalog, shopping cart, and admin dashboard.",
    fullDescription: "A complete e-commerce solution featuring a responsive web interface, product management system, shopping cart functionality, order processing, and customer management. Includes admin panel for inventory management and sales reporting.",
    year: 2024,
    tech: ["PHP", "JavaScript", "Bootstrap", "MySQL", "HTML5", "CSS3", "SweetAlert"],
    github: "https://github.com/kavizzz03/FOL_official_WebSite.git",
    demo: "https://modaloku.cpsharetxt.com/",
    live: "https://fol.cpsharetxt.com/",
    image: folClothingWebImg,
    category: "web",
    platform: "Web",
    features: ["Product Catalog", "Shopping Cart", "Order Management", "Admin Dashboard", "Payment Integration", "Inventory System"],
    status: "Completed",
    type: "E-commerce",
    color: "#8B5CF6",
    accentColor: "#A78BFA",
    featured: true
  },
  {
    id: 4,
    name: "FOL Clothing - Mobile",
    description: "Android mobile application for fashion shopping with personalized recommendations.",
    fullDescription: "Native Android application for FOL Clothing e-commerce platform. Offers seamless shopping experience with product browsing, wishlist functionality, secure checkout process, order tracking, and personalized recommendations.",
    year: 2024,
    tech: ["Java", "XML", "PHP", "MySQL", "REST API"],
    github: "https://github.com/kavizzz03/fol-clothing-mobile",
    demo: "#",
    live: "#",
    image: folClothingMobileImg,
    category: "mobile",
    platform: "Android",
    features: ["Mobile Shopping", "Wishlist", "Secure Checkout", "Order Tracking", "Personalized Recommendations", "Push Notifications"],
    status: "Completed",
    type: "Mobile App",
    color: "#F59E0B",
    accentColor: "#FBBF24"
  },
  {
    id: 5,
    name: "KMD Sweet House",
    description: "Bakery website with product showcase, online ordering, and customer management.",
    fullDescription: "A comprehensive website for KMD Sweet House bakery featuring product catalog, online ordering system, customer management, and admin panel. Includes special features for seasonal products and order tracking.",
    year: 2024,
    tech: ["PHP", "JavaScript", "Bootstrap", "MySQL", "HTML5", "CSS3", "SweetAlert"],
    github: "https://github.com/kavizzz03/kmd-sweet-house",
    demo: "https://kmd.cpsharetxt.com/",
    live: "https://kmd.cpsharetxt.com/",
    image: kmdSweetHouseImg,
    category: "web",
    platform: "Web",
    features: ["Product Showcase", "Online Ordering", "Customer Management", "Admin Panel", "Order Tracking", "Review System"],
    status: "Completed",
    type: "Business Website",
    color: "#EF4444",
    accentColor: "#F87171"
  },
  {
    id: 6,
    name: "CPShareTXT",
    description: "Fast platform for sharing text snippets and code with real-time collaboration.",
    fullDescription: "A modern web application for instant text and code sharing. Features include syntax highlighting, file upload support, custom expiration times, password protection, and real-time collaboration.",
    year: 2024,
    tech: ["React", "Node.js", "Express", "MongoDB", "Socket.io"],
    github: "https://github.com/kavizzz03/CPShareTxt_WebSite.git",
    demo: "https://www.cpsharetxt.com/",
    live: "https://www.cpsharetxt.com/",
    image: cpShareTxtImg,
    category: "web",
    platform: "Web",
    features: ["Instant Sharing", "Syntax Highlighting", "File Upload", "Expiration Control", "Password Protection", "Real-time Sync"],
    status: "Live",
    type: "Utility Tool",
    featured: true,
    color: "#06B6D4",
    accentColor: "#22D3EE"
  },
  {
    id: 7,
    name: "My Portfolio",
    description: "Professional portfolio platform with project showcases and documentation.",
    fullDescription: "A sophisticated portfolio platform featuring project showcases with detailed documentation, interactive demos, resume downloads, contact integration, and blog functionality.",
    year: 2025,
    tech: ["React", "Bootstrap", "CSS3", "JavaScript"],
    github: "https://github.com/kavizzz03/My_Official_Web.git",
    demo: "#",
    live: "#",
    image: scuPortfolioImg,
    category: "web",
    platform: "Web",
    features: ["Project Showcase", "Responsive Design", "Documentation", "Contact Form", "Blog System", "Download Resources"],
    status: "Completed",
    type: "Portfolio",
    color: "#8B5CF6",
    accentColor: "#A78BFA"
  },
  {
    id: 8,
    name: "Media Downloader",
    description: "Web platform for downloading MP3 and MP4 files from URLs with format selection.",
    fullDescription: "A responsive web application that allows users to download media files in MP3 or MP4 format. Includes features like URL validation, download progress, quality selection, and a clean modern UI for easy access.",
    year: 2025,
    tech: ["React", "Node.js", "Express", "HTML5", "CSS3", "JavaScript", "Bootstrap", "Python"],
    github: "https://github.com/kavizzz03/Mp3-Convertor-and-Mp4-Video-Downloader.git",
    demo: "#",
    live: "#",
    image: mpDownloader,
    category: "web",
    platform: "Web",
    features: ["MP3 & MP4 downloads", "Quality selection", "Download progress tracking", "Responsive design", "Format selection"],
    status: "Live",
    type: "Utility Tool",
    featured: true,
    color: "#F59E0B",
    accentColor: "#FBBF24"
  },
  {
    id: 9,
    name: "Subtitle Generator - AI Module",
    description: "AI-powered subtitle generator that creates accurate captions from videos automatically.",
    fullDescription: "Subtitle Generator is an advanced AI-based web tool that automatically generates subtitles from uploaded videos using machine learning and speech-to-text processing. It supports multiple languages, real-time editing, and downloadable SRT/VTT files.",
    year: 2025,
    tech: ["React", "Node.js", "Python", "OpenAI API", "HTML5", "CSS3"],
    github: "https://github.com/kavizzz03/AI-Subtitle-Generator.git",
    demo: "#",
    live: "#",
    image: subtitleGenImg,
    category: "ai",
    platform: "Web",
    features: ["Automatic subtitle generation", "Speech-to-text processing", "Multi-language support", "Real-time editing", "Download as SRT/VTT"],
    status: "In Progress",
    type: "AI Tool",
    featured: true,
    color: "#7C3AED",
    accentColor: "#8B5CF6"
  }
];

const getProjectIcon = (type) => {
  switch (type) {
    case "Mobile App": return <FaMobile />;
    case "Admin Panel": return <FaDesktop />;
    case "E-commerce": return <FaShoppingCart />;
    case "Business Website": return <FaHome />;
    case "Utility Tool": return <FaRocket />;
    case "Portfolio": return <FaBriefcase />;
    case "AI Tool": return <SiOpenai />;
    default: return <FaCode />;
  }
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [viewMode, setViewMode] = useState("grid");
  const [sortBy, setSortBy] = useState("featured");
  const [searchQuery, setSearchQuery] = useState("");
  const [filterCategory, setFilterCategory] = useState("all");
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [imageLoaded, setImageLoaded] = useState({});

  const categories = ["all", "web", "mobile", "ai"];

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.tech.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = filterCategory === "all" || project.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  const sortedProjects = [...filteredProjects].sort((a, b) => {
    if (sortBy === "featured") return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    if (sortBy === "year") return b.year - a.year;
    if (sortBy === "name") return a.name.localeCompare(b.name);
    return 0;
  });

  const showProjectDetails = (project) => setSelectedProject(project);
  const closeProjectDetails = () => setSelectedProject(null);

  const handleImageLoad = (projectId) => {
    setImageLoaded(prev => ({ ...prev, [projectId]: true }));
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { 
      y: 30, 
      opacity: 0, 
      scale: 0.95,
      rotateX: 15 
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 15,
        mass: 0.8
      }
    },
    exit: {
      y: -20,
      opacity: 0,
      scale: 0.9,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section id="projects" className="projects-section">
      <div className="projects-background" aria-hidden>
        <div className="floating-shapes">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className={`shape shape-${i % 6}`}
              animate={{ 
                y: [0, -40, 0], 
                rotate: [0, 180, 360], 
                scale: [1, 1.15, 1],
                opacity: [0.3, 0.7, 0.3]
              }}
              transition={{ 
                duration: 12 + (i % 4) * 2, 
                repeat: Infinity, 
                ease: "easeInOut",
                delay: i * 0.5
              }}
            />
          ))}
        </div>

        <div className="gradient-orbs">
          <motion.div 
            className="orb orb-1" 
            animate={{ 
              scale: [1, 1.4, 1], 
              opacity: [0.3, 0.7, 0.3],
              x: [0, 50, 0]
            }} 
            transition={{ duration: 15, repeat: Infinity }} 
          />
          <motion.div 
            className="orb orb-2" 
            animate={{ 
              scale: [1.2, 0.9, 1.2], 
              opacity: [0.2, 0.6, 0.2],
              y: [0, -30, 0]
            }} 
            transition={{ duration: 18, repeat: Infinity }} 
          />
          <motion.div 
            className="orb orb-3" 
            animate={{ 
              scale: [0.8, 1.3, 0.8], 
              opacity: [0.4, 0.8, 0.4],
              rotate: [0, 180, 360]
            }} 
            transition={{ duration: 20, repeat: Infinity }} 
          />
        </div>

        <div className="cyber-grid">
          {[...Array(64)].map((_, i) => (
            <motion.div
              key={i}
              className="grid-cell"
              animate={{ 
                opacity: [0.1, 0.3, 0.1],
                background: [
                  "rgba(0, 243, 255, 0.05)",
                  "rgba(0, 243, 255, 0.15)",
                  "rgba(0, 243, 255, 0.05)"
                ]
              }}
              transition={{ 
                duration: 4 + (i % 3), 
                repeat: Infinity,
                delay: i * 0.05
              }}
            />
          ))}
        </div>
      </div>

      <div className="container">
        <motion.div 
          className="projects-header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.div 
            className="header-badge"
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ 
              type: "spring", 
              stiffness: 200, 
              damping: 15,
              delay: 0.2
            }}
            viewport={{ once: true }}
          >
            <FaCode />
          </motion.div>

          <div className="header-content">
            <motion.h2 
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              viewport={{ once: true }}
            >
              My <span className="gradient-text">Portfolio</span>
            </motion.h2>
            <motion.p 
              className="header-subtitle"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              viewport={{ once: true }}
            >
              Crafting digital experiences through innovative web and mobile solutions
            </motion.p>
          </div>

          <motion.div 
            className="header-stats"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="stat">
              <span className="stat-number">{projects.length}+</span>
              <span className="stat-label">Projects</span>
            </div>
            <div className="stat">
              <span className="stat-number">{projects.filter(p => p.featured).length}</span>
              <span className="stat-label">Featured</span>
            </div>
            <div className="stat">
              <span className="stat-number">2023-2025</span>
              <span className="stat-label">Timeline</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Enhanced Control Bar */}
        <motion.div 
          className="control-bar"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="control-main">
            <div className="search-container">
              <FaSearch className="search-icon" />
              <input
                type="text"
                placeholder="Search projects, technologies..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
              />
              {searchQuery && (
                <motion.button
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  onClick={() => setSearchQuery("")}
                  className="clear-search"
                >
                  ×
                </motion.button>
              )}
            </div>

            <div className="control-actions">
              <motion.button
                className={`filter-toggle ${isFiltersOpen ? 'active' : ''}`}
                onClick={() => setIsFiltersOpen(!isFiltersOpen)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaFilter />
                Filters
              </motion.button>

              <div className="view-toggle">
                <motion.button
                  className={`view-btn ${viewMode === "grid" ? "active" : ""}`}
                  onClick={() => setViewMode("grid")}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaLayerGroup />
                </motion.button>
                <motion.button
                  className={`view-btn ${viewMode === "list" ? "active" : ""}`}
                  onClick={() => setViewMode("list")}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaList />
                </motion.button>
              </div>

              <select 
                value={sortBy} 
                onChange={(e) => setSortBy(e.target.value)}
                className="sort-select"
              >
                <option value="featured">Featured First</option>
                <option value="year">Newest First</option>
                <option value="name">A to Z</option>
              </select>
            </div>
          </div>

          <AnimatePresence>
            {isFiltersOpen && (
              <motion.div
                className="filter-panel"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="category-filters">
                  {categories.map(category => (
                    <motion.button
                      key={category}
                      className={`category-filter ${filterCategory === category ? 'active' : ''}`}
                      onClick={() => setFilterCategory(category)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {category === 'all' ? 'All Projects' : 
                       category === 'web' ? 'Web Apps' :
                       category === 'mobile' ? 'Mobile Apps' : 'AI Tools'}
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Projects Grid/List */}
        <motion.div
          className={`projects-container ${viewMode}`}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <AnimatePresence mode="popLayout">
            {sortedProjects.map((project) => (
              <motion.div
                key={project.id}
                className="project-item"
                variants={itemVariants}
                layout
                exit="exit"
              >
                <ProjectCard 
                  project={project} 
                  onViewDetails={showProjectDetails}
                  viewMode={viewMode}
                  onImageLoad={handleImageLoad}
                  imageLoaded={imageLoaded[project.id]}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {sortedProjects.length === 0 && (
          <motion.div 
            className="no-projects"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            <div className="no-projects-icon">
              <FaSearch />
            </div>
            <h3 className="no-projects-title">No projects found</h3>
            <p className="no-projects-description">
              Try adjusting your search or filters to find what you're looking for.
            </p>
          </motion.div>
        )}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={closeProjectDetails}
            onImageLoad={handleImageLoad}
            imageLoaded={imageLoaded[selectedProject.id]}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

const ProjectCard = ({ project, onViewDetails, viewMode, onImageLoad, imageLoaded }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageError, setImageError] = useState(false);

  const getTechIcon = (tech) => {
    const iconProps = { size: 16 };
    switch (tech) {
      case "PHP": return <SiPhp {...iconProps} />;
      case "Java": return <FaJava {...iconProps} />;
      case "JavaScript": return <SiJavascript {...iconProps} />;
      case "React": return <SiReact {...iconProps} />;
      case "Node.js": return <SiNodedotjs {...iconProps} />;
      case "MySQL": return <SiMysql {...iconProps} />;
      case "Bootstrap": return <SiBootstrap {...iconProps} />;
      case "HTML5": return <SiHtml5 {...iconProps} />;
      case "CSS3": return <SiCss3 {...iconProps} />;
      case "Express": return <SiExpress {...iconProps} />;
      case "Android SDK": return <SiAndroid {...iconProps} />;
      case "MongoDB": return <SiMongodb {...iconProps} />;
      case "Python": return <SiPython {...iconProps} />;
      case "OpenAI API": return <SiOpenai {...iconProps} />;
      default: return <FaCode {...iconProps} />;
    }
  };

  // List View
  if (viewMode === "list") {
    return (
      <motion.div
        className="project-card list-view"
        style={{ 
          "--project-color": project.color,
          "--project-accent": project.accentColor 
        }}
        whileHover={{ 
          x: 8,
          transition: { type: "spring", stiffness: 400, damping: 25 }
        }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        <div className="project-list-content">
          <div className="list-left">
            <motion.div 
              className="project-icon"
              style={{ background: project.color }}
              whileHover={{ rotate: 15, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {getProjectIcon(project.type)}
            </motion.div>

            <div className="list-details">
              <div className="project-header">
                <h3 className="project-title">{project.name}</h3>
                {project.featured && (
                  <motion.div 
                    className="featured-badge"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    <FaStar />
                    Featured
                  </motion.div>
                )}
              </div>
              
              <p className="project-description">{project.description}</p>

              <div className="project-meta">
                <span className="meta-item">
                  <FaCalendarAlt />
                  {project.year}
                </span>
                <span className="meta-item">
                  {project.platform === "Android" ? <FaMobile /> : <FaDesktop />}
                  {project.platform}
                </span>
                <span className={`status-badge ${project.status.toLowerCase()}`}>
                  {project.status}
                </span>
              </div>
            </div>
          </div>

          <div className="list-right">
            <div className="project-tech">
              {project.tech.slice(0, 4).map((tech) => (
                <motion.span 
                  key={tech} 
                  className="tech-tag"
                  whileHover={{ scale: 1.05, y: -2 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  {getTechIcon(tech)}
                  {tech}
                </motion.span>
              ))}
              {project.tech.length > 4 && (
                <span className="tech-tag more">+{project.tech.length - 4}</span>
              )}
            </div>

            <div className="project-actions">
              <motion.a 
                className="action-btn github-btn"
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaGithub />
              </motion.a>

              {project.demo && project.demo !== "#" && (
                <motion.a 
                  className="action-btn demo-btn"
                  href={project.demo} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaExternalLinkAlt />
                </motion.a>
              )}

              <motion.button 
                className="action-btn details-btn"
                onClick={() => onViewDetails(project)}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaEye />
              </motion.button>
            </div>
          </div>
        </div>

        <motion.div 
          className="project-glow"
          style={{ background: project.color }}
          animate={{ 
            opacity: isHovered ? 0.3 : 0,
            scale: isHovered ? 1.1 : 0.8
          }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    );
  }

  // Grid View
  return (
    <motion.div
      className="project-card grid-view"
      style={{ 
        "--project-color": project.color,
        "--project-accent": project.accentColor 
      }}
      whileHover={{ 
        y: -12, 
        scale: 1.03,
        transition: { type: "spring", stiffness: 300, damping: 20 }
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {project.featured && (
        <motion.div 
          className="featured-ribbon"
          initial={{ x: -50, rotate: -45 }}
          animate={{ x: -25, rotate: -45 }}
          transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
        >
          <FaStar />
          <span>Featured</span>
        </motion.div>
      )}

      <div className="project-image-container">
        {project.image && !imageError ? (
          <>
            {!imageLoaded && (
              <div className="image-skeleton">
                <motion.div
                  className="skeleton-loader"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              </div>
            )}
            <motion.img 
              src={project.image} 
              alt={project.name}
              className="project-image"
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ 
                opacity: imageLoaded ? 1 : 0, 
                scale: imageLoaded ? 1 : 1.1 
              }}
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.4 }}
              onLoad={() => onImageLoad(project.id)}
              onError={() => setImageError(true)}
            />
          </>
        ) : (
          <div className="project-image-placeholder" style={{ background: project.color }}>
            <motion.div 
              className="placeholder-icon"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {getProjectIcon(project.type)}
            </motion.div>
          </div>
        )}

        <motion.div 
          className="project-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="overlay-content">
            <motion.button 
              className="view-details-btn"
              onClick={() => onViewDetails(project)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaEye />
              View Project
            </motion.button>
          </div>
        </motion.div>

        <div className="project-badges">
          <div className={`status-badge ${project.status.toLowerCase()}`}>
            {project.status}
          </div>
          <div className="platform-badge">
            {project.platform === "Android" ? <FaMobile /> : <FaDesktop />}
          </div>
          <div className="year-badge">
            <FaCalendarAlt />
            {project.year}
          </div>
        </div>
      </div>

      <div className="project-content">
        <div className="project-header">
          <h3 className="project-title">{project.name}</h3>
          <div className="project-type" style={{ color: project.color }}>
            {project.type}
          </div>
        </div>

        <p className="project-description">{project.description}</p>

        <div className="project-tech">
          {project.tech.slice(0, 5).map((tech) => (
            <motion.span 
              key={tech} 
              className="tech-tag"
              whileHover={{ scale: 1.05, y: -1 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              {getTechIcon(tech)}
              {tech}
            </motion.span>
          ))}
          {project.tech.length > 5 && (
            <span className="tech-tag more">+{project.tech.length - 5}</span>
          )}
        </div>

        <div className="project-actions">
          <motion.a
            className="action-btn github-btn"
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaGithub />
            Code
          </motion.a>

          {project.demo && project.demo !== "#" && (
            <motion.a
              className="action-btn demo-btn"
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaExternalLinkAlt />
              Demo
            </motion.a>
          )}

          <motion.button
            className="action-btn details-btn"
            onClick={() => onViewDetails(project)}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaEye />
            Details
          </motion.button>
        </div>
      </div>

      <motion.div 
        className="project-glow"
        style={{ background: project.color }}
        animate={{ 
          opacity: isHovered ? 0.4 : 0.1,
          scale: isHovered ? 1.05 : 1
        }}
        transition={{ duration: 0.4 }}
      />
    </motion.div>
  );
};

const ProjectModal = ({ project, onClose, onImageLoad, imageLoaded }) => {
  const [activeImage, setActiveImage] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);

  const getTechIcon = (tech) => {
    const iconProps = { size: 20 };
    switch (tech) {
      case "PHP": return <SiPhp {...iconProps} />;
      case "Java": return <FaJava {...iconProps} />;
      case "JavaScript": return <SiJavascript {...iconProps} />;
      case "React": return <SiReact {...iconProps} />;
      case "Node.js": return <SiNodedotjs {...iconProps} />;
      case "MySQL": return <SiMysql {...iconProps} />;
      case "Bootstrap": return <SiBootstrap {...iconProps} />;
      case "HTML5": return <SiHtml5 {...iconProps} />;
      case "CSS3": return <SiCss3 {...iconProps} />;
      case "Express": return <SiExpress {...iconProps} />;
      case "Android SDK": return <SiAndroid {...iconProps} />;
      case "MongoDB": return <SiMongodb {...iconProps} />;
      case "Python": return <SiPython {...iconProps} />;
      case "OpenAI API": return <SiOpenai {...iconProps} />;
      default: return <FaCode {...iconProps} />;
    }
  };

  return (
    <motion.div
      className="project-modal-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className={`project-modal ${isExpanded ? 'expanded' : ''}`}
        style={{ 
          "--project-color": project.color,
          "--project-accent": project.accentColor 
        }}
        initial={{ scale: 0.8, opacity: 0, y: 50 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.8, opacity: 0, y: 50 }}
        transition={{ 
          type: "spring", 
          damping: 25, 
          stiffness: 200 
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="modal-header">
          <div className="modal-title-section">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
            >
              {project.name}
            </motion.h2>
            <motion.div 
              className="modal-meta"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="modal-year">
                <FaCalendarAlt />
                {project.year}
              </span>
              <span className={`modal-status ${project.status.toLowerCase()}`}>
                {project.status}
              </span>
              <span className="modal-type">
                {project.type}
              </span>
              <span className="modal-platform">
                {project.platform === "Android" ? <FaMobile /> : <FaDesktop />}
                {project.platform}
              </span>
            </motion.div>
          </div>

          <div className="modal-controls">
            <motion.button
              className="modal-control-btn"
              onClick={() => setIsExpanded(!isExpanded)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isExpanded ? <FaCompress /> : <FaExpand />}
            </motion.button>
            <motion.button
              className="modal-close"
              onClick={onClose}
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaTimes />
            </motion.button>
          </div>
        </div>

        <div className="modal-content">
          {/* Image Section */}
          <motion.div 
            className="modal-image-section"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
          >
            {project.image ? (
              <motion.img
                src={project.image}
                alt={project.name}
                className="modal-image"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                onLoad={() => onImageLoad(project.id)}
              />
            ) : (
              <div 
                className="modal-image-placeholder"
                style={{ background: project.color }}
              >
                <motion.div
                  className="modal-placeholder-icon"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {getProjectIcon(project.type)}
                </motion.div>
                <h3>{project.name}</h3>
              </div>
            )}
          </motion.div>

          {/* Details Section */}
          <div className="modal-details">
            <motion.div
              className="detail-section"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h3>Project Overview</h3>
              <p>{project.fullDescription}</p>
            </motion.div>

            <motion.div
              className="detail-section"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <h3>Technologies</h3>
              <div className="modal-tech-stack">
                {project.tech.map((tech, index) => (
                  <motion.span
                    key={tech}
                    className="modal-tech-tag"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ 
                      delay: 0.6 + index * 0.05,
                      type: "spring",
                      stiffness: 300
                    }}
                    whileHover={{ scale: 1.05, y: -2 }}
                  >
                    {getTechIcon(tech)}
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="detail-section"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
            >
              <h3>Key Features</h3>
              <div className="modal-features">
                {project.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="modal-feature"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    whileHover={{ x: 5 }}
                  >
                    <motion.div
                      className="feature-icon"
                      style={{ color: project.color }}
                      whileHover={{ scale: 1.2, rotate: 15 }}
                    >
                      <FaStar />
                    </motion.div>
                    <span>{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="modal-actions"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
            >
              <motion.a
                className="modal-btn primary-btn"
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaGithub />
                View Source Code
              </motion.a>
              
              {project.demo && project.demo !== "#" && (
                <motion.a
                  className="modal-btn secondary-btn"
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaExternalLinkAlt />
                  Live Demo
                </motion.a>
              )}
            </motion.div>
          </div>
        </div>

        {/* Background Glow */}
        <motion.div
          className="modal-glow"
          style={{ background: project.color }}
          animate={{ 
            opacity: [0.1, 0.2, 0.1],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />
      </motion.div>
    </motion.div>
  );
};

export default Projects;