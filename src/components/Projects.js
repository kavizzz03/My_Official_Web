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
  FaLayerGroup
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
  SiMongodb
} from "react-icons/si";
import "./Projects.css";

// Import images (keep your existing imports)
import hireUsAdminImg from "./Images/hire_us_admin.png";
import hireUsMobileImg from "./Images/hire_us_app.jpg";
import folClothingWebImg from "./Images/fol_web.png";
import folClothingMobileImg from "./Images/fol_app.jpg";
import kmdSweetHouseImg from "./Images/kmd_web.png";
import cpShareTxtImg from "./Images/cpsharetxt_web.png";
import scuPortfolioImg from "./Images/my_web.png";
import mpDownloader from "./Images/mpDownloader.png";



/* ---------- projects data (unchanged) ---------- */
const projects = [
  {
    id: 1,
    name: "Hire Us - Admin Panel",
    description:
      "Comprehensive admin dashboard for managing job listings, applicants, employers, and platform analytics.",
    fullDescription:
      "A sophisticated web-based admin panel for the Hire Us job platform. Features include user management, job posting approval system, applicant tracking, payment processing, real-time analytics dashboard, and comprehensive reporting tools. Built with modern web technologies for optimal performance and user experience.",
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
    color: "#3B82F6"
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
    color: "#F59E0B"
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
    color: "#EF4444"
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
    color: "#06B6D4"
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
    color: "#8B5CF6"
  },
  // Add this object inside your `projects` array
{
  id: 8,
  name: "Media Downloader",
  description: "Web platform for downloading MP3 and MP4 files from URLs with format selection.",
  fullDescription: "A responsive web application that allows users to download media files in MP3 or MP4 format. Includes features like URL validation, download progress, quality selection, and a clean modern UI for easy access.",
  year: 2025,
  tech: ["React", "Node.js", "Express", "HTML5", "CSS3", "JavaScript", "Bootstrap","Python"],
  github: "https://github.com/kavizzz03/Mp3-Convertor-and-Mp4-Video-Downloader.git", // replace with your repo
  demo: "https://yourdomain.com/downloader", // replace with your live demo
  live: "https://yourdomain.com/downloader", // replace with your live project link
  image: mpDownloader, // optional: add screenshot here
  category: "web",
  platform: "Web",
  features: [
    "MP3 & MP4 downloads",
    "Quality selection",
    "Download progress tracking",
    "Responsive design",
    "Format selection"
  ],
  status: "Live",
  type: "Utility Tool",
  featured: true,
  color: "#F59E0B"
}

];

/* ---------- small helpers ---------- */
const getProjectIcon = (type) => {
  switch (type) {
    case "Mobile App":
      return <FaMobile />;
    case "Admin Panel":
      return <FaDesktop />;
    case "E-commerce":
      return <FaShoppingCart />;
    case "Business Website":
      return <FaHome />;
    case "Utility Tool":
      return <FaRocket />;
    case "Portfolio":
      return <FaBriefcase />;
    default:
      return <FaCode />;
  }
};

/* ---------- Projects top-level ---------- */
const Projects = () => {
  // removed filter & search state per request
  const [selectedProject, setSelectedProject] = useState(null);
  const [viewMode, setViewMode] = useState("grid"); // 'grid' or 'list'
  const [sortBy, setSortBy] = useState("featured"); // keep a simple sort option

  // derive displayed projects (no filters/search)
  const sortedProjects = [...projects].sort((a, b) => {
    if (sortBy === "featured") return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    if (sortBy === "year") return b.year - a.year;
    if (sortBy === "name") return a.name.localeCompare(b.name);
    return 0;
  });

  const showProjectDetails = (project) => setSelectedProject(project);
  const closeProjectDetails = () => setSelectedProject(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.06 } }
  };

  const itemVariants = {
    hidden: { y: 18, opacity: 0, scale: 0.98 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 140, damping: 16 }
    }
  };

  return (
    <section id="projects" className="projects-section">
      {/* Background + orbs (unchanged) */}
      <div className="projects-background" aria-hidden>
        <div className="floating-shapes">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className={`shape shape-${i % 4}`}
              animate={{ y: [0, -20, 0], rotate: [0, 180, 360], scale: [1, 1.08, 1] }}
              transition={{ duration: 8 + (i % 3) * 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
          ))}
        </div>

        <div className="gradient-orbs">
          <motion.div className="orb orb-1" animate={{ scale: [1, 1.25, 1], opacity: [0.28, 0.6, 0.28] }} transition={{ duration: 9, repeat: Infinity }} />
          <motion.div className="orb orb-2" animate={{ scale: [1.1, 0.95, 1.1], opacity: [0.18, 0.5, 0.18] }} transition={{ duration: 12, repeat: Infinity }} />
        </div>
      </div>

      <div className="container">
        {/* Header */}
        <motion.div className="projects-header" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }}>
          <motion.div className="header-badge" initial={{ scale: 0, rotate: -120 }} whileInView={{ scale: 1, rotate: 0 }} transition={{ type: "spring", stiffness: 170, damping: 16 }} viewport={{ once: true }}>
            <FaCode />
          </motion.div>

          <div className="header-content">
            <motion.h2 initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}>
              My <span className="gradient-text">Projects</span>
            </motion.h2>
            <motion.p className="header-subtitle" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}>
              Building innovative solutions across web and mobile platforms
            </motion.p>
          </div>
        </motion.div>

        {/* Compact Control Bar: view toggle + sort (no search / filters) */}
        <motion.div className="control-bar" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} viewport={{ once: true }}>
          <div className="control-row" style={{ width: "100%" }}>
            <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
              <div className="view-toggle" role="tablist" aria-label="View mode">
                <button className={`view-btn ${viewMode === "grid" ? "active" : ""}`} onClick={() => setViewMode("grid")} aria-pressed={viewMode === "grid"} title="Grid view">
                  <FaLayerGroup />
                </button>
                <button className={`view-btn ${viewMode === "list" ? "active" : ""}`} onClick={() => setViewMode("list")} aria-pressed={viewMode === "list"} title="List view">
                  <FaList />
                </button>
              </div>
            </div>

            <div className="sort-container" style={{ maxWidth: 260 }}>
              <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="sort-select" aria-label="Sort projects">
                <option value="featured">Sort: Featured</option>
                <option value="year">Sort: Newest</option>
                <option value="name">Sort: A → Z</option>
              </select>
            </div>
          </div>
        </motion.div>

        {/* Projects Grid / List */}
        <motion.div className={`projects-container ${viewMode}`} variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <AnimatePresence mode="popLayout">
            {sortedProjects.map((project) => (
              <motion.div key={project.id} className="project-item" variants={itemVariants} layout exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.25 } }}>
                <ProjectCard project={project} onViewDetails={showProjectDetails} viewMode={viewMode} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* If there are zero projects (edge-case) */}
        {sortedProjects.length === 0 && (
          <motion.div className="no-projects" initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ type: "spring", stiffness: 120 }}>
            <div className="no-projects-icon"><FaCode /></div>
            <h3 className="no-projects-title">No projects to display</h3>
            <p className="no-projects-description">There are currently no projects available. Check back soon.</p>
          </motion.div>
        )}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && <ProjectModal project={selectedProject} onClose={closeProjectDetails} />}
      </AnimatePresence>
    </section>
  );
};

/* ---------- ProjectCard (grid + list) ---------- */
const ProjectCard = ({ project, onViewDetails, viewMode }) => {
  const [isHovered, setIsHovered] = useState(false);

  const getTechIcon = (tech) => {
    const iconProps = { size: 14 };
    switch (tech) {
      case "PHP":
        return <SiPhp {...iconProps} />;
      case "Java":
        return <FaJava {...iconProps} />;
      case "JavaScript":
        return <SiJavascript {...iconProps} />;
      case "React":
        return <SiReact {...iconProps} />;
      case "Node.js":
        return <SiNodedotjs {...iconProps} />;
      case "MySQL":
        return <SiMysql {...iconProps} />;
      case "Bootstrap":
        return <SiBootstrap {...iconProps} />;
      case "HTML5":
        return <SiHtml5 {...iconProps} />;
      case "CSS3":
        return <SiCss3 {...iconProps} />;
      case "Express":
        return <SiExpress {...iconProps} />;
      case "Android SDK":
        return <SiAndroid {...iconProps} />;
      case "MongoDB":
        return <SiMongodb {...iconProps} />;
      default:
        return <FaCode {...iconProps} />;
    }
  };

  // LIST VIEW
  if (viewMode === "list") {
    return (
      <motion.div
        className="project-card list-view"
        style={{ ["--project-color"]: project.color }}
        whileHover={{ x: 6, transition: { type: "spring", stiffness: 300 } }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        <div className="project-list-content">
          <div className="list-left">
            <div className="project-icon" style={{ background: project.color }}>
              {getProjectIcon(project.type)}
            </div>

            <div className="list-details">
              <h3 className="project-title">{project.name}</h3>
              <p className="project-description">{project.description}</p>

              <div className="project-meta" style={{ marginTop: 8, display: "flex", gap: 10, alignItems: "center", flexWrap: "wrap" }}>
                <span className="meta-item" style={{ display: "flex", gap: 6, alignItems: "center", color: "var(--muted)" }}>
                  <FaCalendarAlt />
                  {project.year}
                </span>

                <span className="meta-item" style={{ display: "flex", gap: 6, alignItems: "center", color: "var(--muted)" }}>
                  {project.platform === "Android" ? <FaMobile /> : <FaDesktop />}
                  {project.platform}
                </span>

                <span className={`status-badge ${project.status.toLowerCase()}`} style={{ marginLeft: 6 }}>
                  {project.status}
                </span>
              </div>
            </div>
          </div>

          <div className="list-right">
            <div className="project-tech" style={{ marginBottom: 8 }}>
              {project.tech.slice(0, 3).map((tech) => (
                <span key={tech} className="tech-tag">
                  {getTechIcon(tech)}
                  {tech}
                </span>
              ))}
              {project.tech.length > 3 && <span className="tech-tag more">+{project.tech.length - 3}</span>}
            </div>

            <div className="project-actions">
              <a className="action-btn github-btn" href={project.github} target="_blank" rel="noopener noreferrer" aria-label="View code">
                <FaGithub />
              </a>

              {project.demo && project.demo !== "#" && (
                <a className="action-btn demo-btn" href={project.demo} target="_blank" rel="noopener noreferrer" aria-label="View demo">
                  <FaExternalLinkAlt />
                </a>
              )}

              <button className="action-btn details-btn" onClick={() => onViewDetails(project)} aria-label="View details">
                <FaEye />
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  // GRID VIEW
  return (
    <motion.div
      className="project-card grid-view"
      style={{ ["--project-color"]: project.color }}
      whileHover={{ y: -10, scale: 1.02, transition: { type: "spring", stiffness: 300, damping: 18 } }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {project.featured && (
        <div className="featured-ribbon" aria-hidden>
          <FaStar />
          <span style={{ marginLeft: 6 }}>Featured</span>
        </div>
      )}

      <div className="project-image-container">
        {project.image ? (
          <motion.img src={project.image} alt={project.name} className="project-image" whileHover={{ scale: 1.06 }} transition={{ duration: 0.45 }} />
        ) : (
          <div className="project-image-placeholder" style={{ background: project.color }}>
            <div style={{ display: "grid", placeItems: "center" }}>{getProjectIcon(project.type)}</div>
          </div>
        )}

        <motion.div className="project-overlay" initial={{ opacity: 0 }} animate={{ opacity: isHovered ? 1 : 0 }} transition={{ duration: 0.25 }}>
          <div className="overlay-content">
            <button className="view-details-btn" onClick={() => onViewDetails(project)}>
              <FaEye />
              View Details
            </button>
          </div>
        </motion.div>

        <div className="project-badges">
          <div className={`status-badge ${project.status.toLowerCase()}`}>{project.status}</div>
          <div className="platform-badge">{project.platform === "Android" ? <FaMobile /> : <FaDesktop />}</div>
          <div className="year-badge"><FaCalendarAlt />{project.year}</div>
        </div>
      </div>

      <div className="project-content">
        <div className="project-header">
          <h3 className="project-title">{project.name}</h3>
          <div className="project-type" style={{ color: project.color }}>{project.type}</div>
        </div>

        <p className="project-description">{project.description}</p>

        <div className="project-tech">
          {project.tech.slice(0, 4).map((tech) => (
            <span key={tech} className="tech-tag">{getTechIcon(tech)}{tech}</span>
          ))}
          {project.tech.length > 4 && <span className="tech-tag more">+{project.tech.length - 4}</span>}
        </div>

        <div className="project-actions">
          <a className="action-btn github-btn" href={project.github} target="_blank" rel="noopener noreferrer"><FaGithub /> Code</a>

          {project.demo && project.demo !== "#" && (
            <a className="action-btn demo-btn" href={project.demo} target="_blank" rel="noopener noreferrer"><FaExternalLinkAlt /> Demo</a>
          )}

          <button className="action-btn details-btn" onClick={() => onViewDetails(project)}><FaEye /> Details</button>
        </div>
      </div>

      <div className="project-glow" style={{ background: project.color }} aria-hidden />
    </motion.div>
  );
};

/* ---------- Modal ---------- */
const ProjectModal = ({ project, onClose }) => {
  const getTechIcon = (tech) => {
    const iconProps = { size: 18 };
    switch (tech) {
      case "PHP":
        return <SiPhp {...iconProps} />;
      case "Java":
        return <FaJava {...iconProps} />;
      case "JavaScript":
        return <SiJavascript {...iconProps} />;
      case "React":
        return <SiReact {...iconProps} />;
      case "Node.js":
        return <SiNodedotjs {...iconProps} />;
      case "MySQL":
        return <SiMysql {...iconProps} />;
      case "Bootstrap":
        return <SiBootstrap {...iconProps} />;
      case "HTML5":
        return <SiHtml5 {...iconProps} />;
      case "CSS3":
        return <SiCss3 {...iconProps} />;
      case "Express":
        return <SiExpress {...iconProps} />;
      case "Android SDK":
        return <SiAndroid {...iconProps} />;
      case "MongoDB":
        return <SiMongodb {...iconProps} />;
      default:
        return <FaCode {...iconProps} />;
    }
  };

  return (
    <motion.div className="project-modal-overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
      <motion.div className="project-modal" initial={{ scale: 0.9, opacity: 0, y: 30 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.9, opacity: 0, y: 30 }} transition={{ type: "spring", damping: 20, stiffness: 220 }} onClick={(e) => e.stopPropagation()} style={{ ["--project-color"]: project.color }}>
        <div className="modal-header">
          <div className="modal-title-section">
            <h2>{project.name}</h2>
            <div className="modal-meta" style={{ display: "flex", gap: 10, alignItems: "center", flexWrap: "wrap" }}>
              <span className="modal-year"><FaCalendarAlt />{project.year}</span>
              <span className={`modal-status ${project.status.toLowerCase()}`}>{project.status}</span>
              <span className="modal-type">{project.type}</span>
              <span className="modal-platform">{project.platform === "Android" ? <FaMobile /> : <FaDesktop />}{project.platform}</span>
            </div>
          </div>

          <motion.button className="modal-close" onClick={onClose} whileHover={{ scale: 1.06, rotate: 90 }} aria-label="Close modal"><FaTimes /></motion.button>
        </div>

        <div className="modal-content">
          <div className="modal-image-section">
            {project.image ? (
              <motion.img src={project.image} alt={project.name} className="modal-image" initial={{ scale: 0.96, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.12 }} />
            ) : (
              <div className="modal-image-placeholder" style={{ background: project.color }}>
                <div className="modal-placeholder-icon">{getProjectIcon(project.type)}</div>
                <h3>{project.name}</h3>
              </div>
            )}
          </div>

          <div className="modal-details">
            <motion.div className="detail-section" initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.15 }}>
              <h3>Project Description</h3>
              <p>{project.fullDescription}</p>
            </motion.div>

            <motion.div className="detail-section" initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.25 }}>
              <h3>Technologies Used</h3>
              <div className="modal-tech-stack">
                {project.tech.map((tech) => (
                  <motion.span key={tech} className="modal-tech-tag" whileHover={{ scale: 1.03 }} transition={{ type: "spring", stiffness: 300 }}>
                    {getTechIcon(tech)}{tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            <motion.div className="detail-section" initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.35 }}>
              <h3>Key Features</h3>
              <div className="modal-features">
                {project.features.map((feature, i) => (
                  <motion.div className="modal-feature" key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 + i * 0.06 }}>
                    <FaStar className="feature-icon" />
                    <span>{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div className="modal-actions" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.58 }}>
              <a className="modal-btn primary-btn" href={project.github} target="_blank" rel="noopener noreferrer"><FaGithub /> View Source Code</a>
              {project.demo && project.demo !== "#" && <a className="modal-btn secondary-btn" href={project.demo} target="_blank" rel="noopener noreferrer"><FaExternalLinkAlt /> Live Demo</a>}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Projects;
