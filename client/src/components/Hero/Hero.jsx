import React, { useEffect, useState } from 'react';
import { 
  FiArrowRight, 
  FiGithub, 
  FiLinkedin, 
  FiCode,
  FiDownload
} from 'react-icons/fi';
import { HiSparkles } from 'react-icons/hi';
import styles from './Hero.module.css';

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [typedTitle, setTypedTitle] = useState('');
  const fullTitle = "Full-Stack Developer & Software Engineer";

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  // Animated typewriter effect for the subtitle
  useEffect(() => {
    if (!isMounted) return;
    let i = 0;
    const interval = setInterval(() => {
      if (i <= fullTitle.length) {
        setTypedTitle(fullTitle.slice(0, i));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 40);
    return () => clearInterval(interval);
  }, [isMounted]);

  return (
    <section className={styles.hero}>
      {/* Dynamic Animated Ambient Orbs */}
      <div className={styles.ambientOrb1}></div>
      <div className={styles.ambientOrb2}></div>
      <div className={styles.ambientOrb3}></div>

      <div className={`${styles.content} ${isMounted ? styles.mounted : ''}`}>
        
        {/* Animated Badge with pulsing status indicator */}
        <div className={styles.badgeContainer}>
          <span className={styles.statusPulseWrapper}>
            <span className={styles.statusPulsePing}></span>
            <span className={styles.statusPulse}></span>
          </span>
          <span className={styles.greetingBadge}>Available for Software Engineering Roles</span>
          <HiSparkles className={styles.sparkleIcon} />
        </div>

        <h1 className={styles.name}>
          <span className={styles.nameHi}>Hi, I'm </span>
          <span className={styles.nameMain}>Shahbaz Shafi</span>
          <span className={styles.dot}>.</span>
        </h1>
        
        {/* Animated Typewriter Subtitle with cursor */}
        <h2 className={styles.subtitle}>
          {typedTitle}
          <span className={styles.cursor}>|</span>
        </h2>

        <p className={styles.description}>
          Motivated Computer Science undergraduate with hands-on experience in Java full-stack development 
          and frontend web technologies (<strong className={styles.textHighlight}>React.js, JavaScript, HTML/CSS</strong>). Skilled in building responsive, user-friendly 
          web applications and eager to apply strong foundations in <strong className={styles.textHighlight}>C, C++, and Java</strong> to build transformative software products.
        </p>

        {/* Well-managed interactive contact chips */}
        <div className={styles.contactChips}>
          <span className={styles.chip}>
            <FiCode className={styles.chipIcon} /> Open to opportunities
          </span>
        </div>

        {/* Animated Action Buttons */}
        <div className={styles.actions}>
          <a href="#projects" className={styles.buttonPrimary}>
            <span className={styles.btnGlow}></span>
            <span>View Featured Projects</span>
            <FiArrowRight className={styles.btnIcon} />
          </a>
          <a href="#experience" className={styles.buttonSecondary}>
            <FiCode className={styles.secondaryBtnIcon} />
            <span>Explore Experience</span>
          </a>
          <a href="#contact" className={styles.buttonOutline}>
            <span>Get In Touch</span>
          </a>
        </div>

        {/* Floating Social Glass Bar */}
        <div className={styles.socialBar}>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="LinkedIn">
            <FiLinkedin />
            <span className={styles.socialTooltip}>LinkedIn</span>
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="GitHub">
            <FiGithub />
            <span className={styles.socialTooltip}>GitHub</span>
          </a>
        </div>

      </div>
    </section>
  );
};

export default Hero;
