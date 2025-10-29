import React, { useState } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaPaperPlane, 
  FaUser, 
  FaEnvelope, 
  FaTag, 
  FaComment,
  FaPhone,
  FaMapMarkerAlt,
  FaClock,
  FaCheckCircle,
  FaExclamationCircle,
  FaLinkedin,
  FaGithub,
  FaTwitter
} from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState({ loading: false, success: null, error: null });
  const [focusedField, setFocusedField] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFocus = (fieldName) => {
    setFocusedField(fieldName);
  };

  const handleBlur = () => {
    setFocusedField(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: null, error: null });

    try {
      const res = await axios.post("https://kavindubogahawatte.cpsharetxt.com/contact.php", formData);

      if (res.data.success) {
        setStatus({ loading: false, success: "🎉 Thank you! Your message has been sent successfully.", error: null });
        setFormData({ name: "", email: "", subject: "", message: "" });
        
        // Auto-hide success message after 5 seconds
        setTimeout(() => {
          setStatus({ loading: false, success: null, error: null });
        }, 5000);
      } else {
        setStatus({ loading: false, success: null, error: "❌ Error sending your message. Please try again later." });
      }
    } catch (err) {
      setStatus({ loading: false, success: null, error: "🔌 Network error. Please check your connection and try again." });
    }
  };

  const socialLinks = [
    { icon: <FaLinkedin />, name: "LinkedIn", url: "https://linkedin.com/in/kavindubogahawatte-7b3810320", color: "#0077B5" },
    { icon: <FaGithub />, name: "GitHub", url: "https://github.com/kavizzz03", color: "#333" }
   
  ];

  const contactInfo = [
    { icon: <FaEnvelope />, label: "Email", value: "kavindumalshan2003@gmail.com", link: "mailto:kavindumalshan2003@gmail.com" },
    { icon: <FaPhone />, label: "Phone", value: "+94 74 089 0730", link: "tel:+94740890730" },
    { icon: <FaMapMarkerAlt />, label: "Location", value: "Colombo, Sri Lanka", link: null },
    { icon: <FaClock />, label: "Response Time", value: "Within 24 hours", link: null }
  ];

  return (
    <section id="contact" className="contact-section">
      {/* Animated Background Elements */}
      <div className="contact-background">
        <div className="floating-shapes">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="floating-shape"
              style={{ 
                '--i': i,
                '--size': `${20 + i * 5}px`,
                '--color': `rgba(99, 102, 241, ${0.1 + i * 0.05})`
              }}
              animate={{
                y: [0, -30, 0],
                x: [0, Math.random() * 20 - 10, 0],
                rotate: [0, 180, 360]
              }}
              transition={{
                duration: 8 + i * 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      </div>

      <div className="contact-container">
        {/* Header Section */}
        <motion.div
          className="contact-header"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="contact-title"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Let's Start a <span className="gradient-text">Conversation</span>
          </motion.h2>
          <motion.p 
            className="contact-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Ready to bring your ideas to life? Let's discuss your project and create something amazing together.
            <br />
            <motion.span 
              className="response-time"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              ⚡ Typically respond within <strong>24 hours</strong>
            </motion.span>
          </motion.p>
        </motion.div>

        <div className="contact-content">
          {/* Contact Form */}
          <motion.div
            className="form-container"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.form 
              className="contact-form"
              onSubmit={handleSubmit}
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="form-header">
                <motion.h3 
                  className="form-title"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                >
                  Send Me a Message
                </motion.h3>
                <motion.div 
                  className="form-icon"
                  initial={{ rotate: -180, scale: 0 }}
                  animate={{ rotate: 0, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.8, type: "spring" }}
                >
                  <FaPaperPlane />
                </motion.div>
              </div>

              <div className="form-grid">
                <motion.div
                  className={`form-group ${focusedField === 'name' ? 'focused' : ''}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                >
                  <div className="input-container">
                    <FaUser className="input-icon" />
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Full Name"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => handleFocus('name')}
                      onBlur={handleBlur}
                      required
                    />
                  </div>
                </motion.div>

                <motion.div
                  className={`form-group ${focusedField === 'email' ? 'focused' : ''}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                >
                  <div className="input-container">
                    <FaEnvelope className="input-icon" />
                    <input
                      type="email"
                      name="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => handleFocus('email')}
                      onBlur={handleBlur}
                      required
                    />
                  </div>
                </motion.div>

                <motion.div
                  className={`form-group ${focusedField === 'subject' ? 'focused' : ''}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.1 }}
                >
                  <div className="input-container">
                    <FaTag className="input-icon" />
                    <input
                      type="text"
                      name="subject"
                      placeholder="Project Discussion / Collaboration"
                      value={formData.subject}
                      onChange={handleChange}
                      onFocus={() => handleFocus('subject')}
                      onBlur={handleBlur}
                      required
                    />
                  </div>
                </motion.div>

                <motion.div
                  className={`form-group textarea-group ${focusedField === 'message' ? 'focused' : ''}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                >
                  <div className="input-container">
                    <FaComment className="input-icon" />
                    <textarea
                      name="message"
                      rows="6"
                      placeholder="Tell me about your project, ideas, or anything you'd like to discuss..."
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => handleFocus('message')}
                      onBlur={handleBlur}
                      required
                    ></textarea>
                  </div>
                </motion.div>
              </div>

              <motion.button
                type="submit"
                className={`send-btn ${status.loading ? 'loading' : ''}`}
                whileHover={{ 
                  scale: status.loading ? 1 : 1.05,
                  y: status.loading ? 0 : -2
                }}
                whileTap={{ scale: status.loading ? 1 : 0.95 }}
                disabled={status.loading}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.3 }}
              >
                <span className="btn-content">
                  {status.loading ? (
                    <>
                      <motion.div
                        className="loading-spinner"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      />
                      Sending Your Message...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane className="btn-icon" />
                      Send Message
                    </>
                  )}
                </span>
              </motion.button>

              <AnimatePresence>
                {status.success && (
                  <motion.div
                    className="status-message success"
                    initial={{ opacity: 0, y: 10, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.9 }}
                    transition={{ duration: 0.4 }}
                  >
                    <FaCheckCircle className="status-icon" />
                    {status.success}
                  </motion.div>
                )}

                {status.error && (
                  <motion.div
                    className="status-message error"
                    initial={{ opacity: 0, y: 10, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.9 }}
                    transition={{ duration: 0.4 }}
                  >
                    <FaExclamationCircle className="status-icon" />
                    {status.error}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            className="info-container"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="info-card">
              <motion.h3 
                className="info-title"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                Let's Connect
              </motion.h3>

              <div className="contact-info-list">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={item.label}
                    className="contact-info-item"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                    whileHover={{ x: 5 }}
                  >
                    <div className="contact-icon-wrapper">
                      {item.icon}
                    </div>
                    <div className="contact-details">
                      <span className="contact-label">{item.label}</span>
                      {item.link ? (
                        <a href={item.link} className="contact-value">
                          {item.value}
                        </a>
                      ) : (
                        <span className="contact-value">{item.value}</span>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <motion.div 
                className="social-section"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                <p className="social-title">Follow me on</p>
                <div className="social-links">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      className="social-link"
                      style={{ background: social.color }}
                      whileHover={{ 
                        scale: 1.1, 
                        y: -3,
                        transition: { type: "spring", stiffness: 400 }
                      }}
                      whileTap={{ scale: 0.9 }}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1.3 + index * 0.1 }}
                      aria-label={social.name}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </motion.div>

              {/* Additional Info */}
              <motion.div 
                className="additional-info"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.5 }}
              >
                <p className="availability">
                  <span className="status-dot"></span>
                  Currently available for new projects
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;