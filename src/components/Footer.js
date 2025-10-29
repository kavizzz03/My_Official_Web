import React from "react";
import { motion } from "framer-motion";
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaFacebook,
  FaEnvelope,
  FaHeart,
  FaRocket,
  FaArrowUp,
  FaMapMarkerAlt,
  FaPhone,
  FaCoffee,
  FaRegSmileWink
} from "react-icons/fa";
import { SiReact, SiNodedotjs, SiMongodb, SiJavascript, SiTailwindcss, SiTypescript } from "react-icons/si";
import "./Footer.css";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    {
      icon: <FaLinkedin />,
      href: "https://linkedin.com/in/kavindubogahawatte-7b3810320",
      label: "LinkedIn",
      gradient: "linear-gradient(135deg, #0077B5, #00A0DC)",
    },
    {
      icon: <FaGithub />,
      href: "https://github.com/kavizzz03",
      label: "GitHub",
      gradient: "linear-gradient(135deg, #333, #6e5494)",
    },
    {
      icon: <FaInstagram />,
      href: "https://www.instagram.com/kaviz.z_?igsh=MWI5OGpsOGF2a3RzcA==",
      label: "Instagram",
      gradient: "linear-gradient(135deg, #E4405F, #F77737)",
    },
    {
      icon: <FaFacebook />,
      href: "https://www.facebook.com/share/1NAmdS8SiF/",
      label: "Facebook",
      gradient: "linear-gradient(135deg, #1877F2, #00A0DC)",
    },
    {
      icon: <FaEnvelope />,
      href: "mailto:kavindumalshan2003@gmail.com",
      label: "Email",
      gradient: "linear-gradient(135deg, #EA4335, #FBBC05)",
    }
  ];

  const techStack = [
    { icon: <SiReact />, name: "React", color: "#61DAFB" },
    { icon: <SiJavascript />, name: "JavaScript", color: "#F7DF1E" },
    { icon: <SiTypescript />, name: "TypeScript", color: "#3178C6" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS", color: "#06B6D4" },
    { icon: <SiNodedotjs />, name: "Node.js", color: "#339933" },
    { icon: <SiMongodb />, name: "MongoDB", color: "#47A248" }
  ];

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-background" aria-hidden="true">
        <div className="floating-particles">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="particle"
              animate={{ 
                y: [0, -60, 0], 
                opacity: [0, 0.3, 0], 
                scale: [0, 1, 0],
              }}
              transition={{ 
                duration: 3 + (i % 2), 
                repeat: Infinity, 
                delay: i * 0.4,
              }}
            />
          ))}
        </div>
      </div>

      <div className="footer-container">
        <motion.div
          className="footer-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          {/* Main Grid - Stack on Mobile */}
          <div className="footer-grid">
            {/* Brand Section */}
            <motion.div 
              className="footer-brand"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
            >
              <motion.h2 
                className="brand-name"
                whileInView={{ scale: 1 }}
                initial={{ scale: 0.9 }}
                transition={{ duration: 0.4 }}
              >
                Kavindu<span className="brand-accent">B</span>
              </motion.h2>
              <motion.p 
                className="brand-tagline"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                Full Stack Developer & <span className="highlight">UI/UX Enthusiast</span>
              </motion.p>
              <motion.p 
                className="brand-description"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                Crafting digital experiences that blend beautiful design with cutting-edge functionality.
              </motion.p>

              <motion.div 
                className="tech-stack-mobile"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <span className="tech-label">Tech Stack</span>
                <div className="tech-icons-mobile">
                  {techStack.map((tech, index) => (
                    <motion.span
                      key={tech.name}
                      className="tech-icon-mobile"
                      title={tech.name}
                      style={{ color: tech.color }}
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      transition={{ 
                        delay: 0.5 + index * 0.1,
                        type: "spring",
                        stiffness: 100
                      }}
                      whileHover={{ 
                        scale: 1.2, 
                        y: -3,
                        transition: { type: "spring", stiffness: 400 }
                      }}
                    >
                      {tech.icon}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Section */}
            <motion.div 
              className="footer-contact"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              <motion.h3 
                className="contact-title"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                Get In Touch
              </motion.h3>
              <div className="contact-info-mobile">
                <motion.div 
                  className="contact-item-mobile"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  whileHover={{ x: 5 }}
                >
                  <div className="contact-icon-mobile">
                    <FaEnvelope />
                  </div>
                  <a href="mailto:kavindumalshan2003@gmail.com">
                    kavindumalshan2003@gmail.com
                  </a>
                </motion.div>
                <motion.div 
                  className="contact-item-mobile"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.45 }}
                  whileHover={{ x: 5 }}
                >
                  <div className="contact-icon-mobile">
                    <FaPhone />
                  </div>
                  <a href="tel:+94740890730">
                    +94 74 089 0730
                  </a>
                </motion.div>
                <motion.div 
                  className="contact-item-mobile"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  whileHover={{ x: 5 }}
                >
                  <div className="contact-icon-mobile">
                    <FaMapMarkerAlt />
                  </div>
                  <span>Colombo, Sri Lanka</span>
                </motion.div>
              </div>

              {/* Quick Social Links */}
              <motion.div 
                className="quick-social-mobile"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <span>Follow me:</span>
                <div className="quick-social-icons">
                  {socialLinks.slice(0, 4).map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="quick-social-link"
                      style={{ background: social.gradient }}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      whileHover={{ 
                        scale: 1.1, 
                        y: -2,
                        transition: { type: "spring", stiffness: 400 }
                      }}
                      whileTap={{ scale: 0.9 }}
                      transition={{ delay: 0.7 + index * 0.1 }}
                      aria-label={social.label}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Main Social Links */}
          <motion.div 
            className="main-social-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.p 
              className="social-invite"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Ready to bring your ideas to life? Let's connect! <FaRegSmileWink />
            </motion.p>
            <div className="main-social-links">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="main-social-link"
                  style={{ background: social.gradient }}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  whileHover={{ 
                    scale: 1.15, 
                    y: -3,
                    transition: { type: "spring", stiffness: 400 }
                  }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Footer Bottom */}
          <motion.div 
            className="footer-bottom-mobile"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="copyright-mobile"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <p>
                © {new Date().getFullYear()} Kavindu Bogahawatte. 
                Made with <motion.span 
                  className="heart-icon"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
                ><FaHeart /></motion.span> and
                <motion.span 
                  className="coffee-icon"
                  animate={{ rotate: [0, 15, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                ><FaCoffee /></motion.span>
              </p>
            </motion.div>
            
            <motion.div 
              className="footer-actions-mobile"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
            >
              <motion.a
                href="#contact"
                className="cta-button-mobile"
                whileHover={{ 
                  scale: 1.05,
                  y: -2,
                  transition: { type: "spring", stiffness: 400 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                <FaRocket />
                Start Project
              </motion.a>
              
              <motion.button
                className="back-to-top-mobile"
                onClick={scrollToTop}
                whileHover={{ 
                  scale: 1.1,
                  y: -2,
                  transition: { type: "spring", stiffness: 400 }
                }}
                whileTap={{ scale: 0.9 }}
                aria-label="Back to top"
              >
                <FaArrowUp />
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;