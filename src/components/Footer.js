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
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="particle"
              animate={{ 
                y: [0, -80, 0], 
                opacity: [0, 0.4, 0], 
                scale: [0, 1, 0],
              }}
              transition={{ 
                duration: 4 + (i % 2), 
                repeat: Infinity, 
                delay: i * 0.3,
              }}
            />
          ))}
        </div>
      </div>

      <div className="footer-container">
        <motion.div
          className="footer-content"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Main Grid - Stack on Mobile */}
          <div className="footer-grid">
            {/* Brand Section */}
            <motion.div 
              className="footer-brand"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <h2 className="brand-name">
                Kavindu<span className="brand-accent">Bogahawatte</span>
              </h2>
              <p className="brand-tagline">
                Full Stack Developer & <span className="highlight">UI/UX Enthusiast</span>
              </p>
              <p className="brand-description">
                Crafting digital experiences that blend beautiful design with cutting-edge functionality.
              </p>

              <div className="tech-stack-mobile">
                <span className="tech-label">Tech Stack</span>
                <div className="tech-icons-mobile">
                  {techStack.map((tech, index) => (
                    <motion.span
                      key={tech.name}
                      className="tech-icon-mobile"
                      title={tech.name}
                      style={{ color: tech.color }}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {tech.icon}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Section */}
            <motion.div 
              className="footer-contact"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="contact-title">Get In Touch</h3>
              <div className="contact-info-mobile">
                <div className="contact-item-mobile">
                  <div className="contact-icon-mobile">
                    <FaEnvelope />
                  </div>
                  <a href="mailto:kavindumalshan2003@gmail.com">
                    kavindumalshan2003@gmail.com
                  </a>
                </div>
                <div className="contact-item-mobile">
                  <div className="contact-icon-mobile">
                    <FaPhone />
                  </div>
                  <a href="tel:+94740890730">
                    +94 74 089 0730
                  </a>
                </div>
                <div className="contact-item-mobile">
                  <div className="contact-icon-mobile">
                    <FaMapMarkerAlt />
                  </div>
                  <span>Colombo, Sri Lanka</span>
                </div>
              </div>

              {/* Quick Social Links */}
              <div className="quick-social-mobile">
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
                      transition={{ delay: 0.3 + index * 0.1 }}
                      aria-label={social.label}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Main Social Links */}
          <motion.div 
            className="main-social-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <p className="social-invite">
              Ready to bring your ideas to life? Let's connect! <FaRegSmileWink />
            </p>
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
                  whileHover={{ scale: 1.1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
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
            transition={{ delay: 0.6 }}
          >
            <div className="copyright-mobile">
              <p>
                © {new Date().getFullYear()} Kavindu Bogahawatte. 
                Made with <FaHeart className="heart-icon" /> and 
                <FaCoffee className="coffee-icon" />
              </p>
            </div>
            
            <div className="footer-actions-mobile">
              <motion.a
                href="#contact"
                className="cta-button-mobile"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaRocket />
                Start Project
              </motion.a>
              
              <motion.button
                className="back-to-top-mobile"
                onClick={scrollToTop}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Back to top"
              >
                <FaArrowUp />
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;