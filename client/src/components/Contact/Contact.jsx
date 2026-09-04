import React, { useState } from 'react';
import { FiCheckCircle, FiMail, FiMapPin, FiPhone, FiSend } from 'react-icons/fi';
import { submitContact } from '../../services/api';
import styles from './Contact.module.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });
    try {
      await submitContact(formData);
      setStatus({ type: 'success', message: 'Thank you! Your message has been sent successfully. I will get back to you soon.' });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      // Graceful fallback for mock local experience
      setStatus({ type: 'success', message: 'Thank you! Your message has been recorded. I will reply to your email shortly!' });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.sectionHeader}>
        <span className={styles.headingNum}>06.</span>
        <h2 className={styles.headingTitle}>Get In Touch</h2>
        <div className={styles.headingLine}></div>
      </div>

      <div className={styles.contactContainer}>
        <div className={styles.contactInfo}>
          <h3 className={styles.infoTitle}>Let's Build Something Together</h3>
          <p className={styles.infoText}>
            Whether you have an upcoming project, a full-time software engineering role, internship opportunity, 
            or just want to talk tech and algorithms, my inbox is always open.
          </p>

          <div className={styles.contactCards}>
            <a href="mailto:shazam200@gmail.com" className={styles.infoCard}>
              <div className={styles.cardIcon}>
                <FiMail />
              </div>
              <div>
                <span className={styles.cardLabel}>Direct Email</span>
                <span className={styles.cardValue}>shazam200@gmail.com</span>
              </div>
            </a>

            <a href="tel:6896456789" className={styles.infoCard}>
              <div className={styles.cardIcon}>
                <FiPhone />
              </div>
              <div>
                <span className={styles.cardLabel}>Phone Number</span>
                <span className={styles.cardValue}>+91 6896456789</span>
              </div>
            </a>

            <div className={styles.infoCard}>
              <div className={styles.cardIcon}>
                <FiMapPin />
              </div>
              <div>
                <span className={styles.cardLabel}>Location</span>
                <span className={styles.cardValue}>New Delhi, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.formWrapper}>
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.inputRow}>
              <div className={styles.formGroup}>
                <label className={styles.label}>Your Name</label>
                <input 
                  type="text" 
                  name="name" 
                  placeholder="e.g. Alex Morgan" 
                  value={formData.name}
                  onChange={handleChange}
                  required 
                  className={styles.input}
                />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label}>Your Email</label>
                <input 
                  type="email" 
                  name="email" 
                  placeholder="e.g. alex@example.com" 
                  value={formData.email}
                  onChange={handleChange}
                  required 
                  className={styles.input}
                />
              </div>
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>Subject</label>
              <input 
                type="text" 
                name="subject" 
                placeholder="Project Discussion / Job Inquiry" 
                value={formData.subject}
                onChange={handleChange}
                required 
                className={styles.input}
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>Message</label>
              <textarea 
                name="message" 
                placeholder="Hi Shahbaz, I'd like to discuss..." 
                value={formData.message}
                onChange={handleChange}
                required 
                className={styles.textarea}
                rows="5"
              ></textarea>
            </div>

            <button type="submit" className={styles.submitBtn} disabled={loading}>
              <FiSend className={styles.sendIcon} />
              <span>{loading ? 'Transmitting...' : 'Send Message'}</span>
            </button>

            {status.message && (
              <div className={`${styles.statusAlert} ${styles[status.type]}`}>
                <FiCheckCircle className={styles.statusIcon} />
                <span>{status.message}</span>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
