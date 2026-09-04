import React from 'react';
import { FiArrowUp, FiGithub, FiHeart, FiLinkedin } from 'react-icons/fi';
import styles from './Footer.module.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.topRow}>
          <div className={styles.brandCol}>
            <a href="#" className={styles.brandLogo} onClick={scrollToTop}>
              <span className={styles.logoBracket}>&lt;</span>
              <span className={styles.logoName}>Portfolio Developer</span>
              <span className={styles.logoBracket}> /&gt;</span>
            </a>
            <p className={styles.brandTagline}>
              Computer Science Undergraduate & Full-Stack Developer.
            </p>
          </div>

          <div className={styles.socialCol}>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.socialBtn} aria-label="LinkedIn">
              <FiLinkedin />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className={styles.socialBtn} aria-label="GitHub">
              <FiGithub />
            </a>
          </div>
        </div>

        <div className={styles.divider}></div>

        <div className={styles.bottomRow}>
          <p className={styles.copyright}>
            Designed & Engineered with modern React.js & Node.js
          </p>
          <div className={styles.location}>
            <span>Available worldwide</span> • <span>&copy; {new Date().getFullYear()} Portfolio Developer</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
