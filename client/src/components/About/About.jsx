import React from 'react';
import { FiAward, FiBookOpen, FiCode, FiTerminal } from 'react-icons/fi';
import styles from './About.module.css';

const About = () => {
  const highlights = [
    {
      icon: <FiCode />,
      title: 'Full-Stack Engineering',
      desc: 'Hands-on development across frontend (React, JS, HTML/CSS) and backend (Java, Node.js, Spring Boot).'
    },
    {
      icon: <FiTerminal />,
      title: 'Strong CS Foundations',
      desc: 'Proficient in C, C++, Java, Data Structures, OOP, and RESTful API architecture design.'
    },
    {
      icon: <FiBookOpen />,
      title: 'Academic Excellence',
      desc: 'B.Tech CSE at Jamia Hamdard University, New Delhi with a strong 8.01 GPA.'
    },
    {
      icon: <FiAward />,
      title: 'Continuous Learner',
      desc: 'Specialized certifications in Java Full Stack, Generative AI Engineering, and modern AI tool workflows.'
    }
  ];

  return (
    <section id="about" className={styles.about}>
      <div className={styles.sectionHeader}>
        <span className={styles.headingNum}>01.</span>
        <h2 className={styles.headingTitle}>About Me</h2>
        <div className={styles.headingLine}></div>
      </div>

      <div className={styles.inner}>
        <div className={styles.bioText}>
          <p className={styles.leadParagraph}>
            Hello! I'm <strong className={styles.highlight}>Shahbaz Shafi</strong>, a Computer Science undergraduate 
            based in New Delhi, India, passionate about turning complex problems into elegant, scalable web applications.
          </p>
          <p>
            My journey in software engineering combines academic rigor with practical production experience. At 
            <strong> CodeAlpha</strong>, I developed 4–5 responsive web applications with a keen eye for clean UI design, 
            smooth user experience, and cross-device responsiveness.
          </p>
          <p>
            I possess deep technical skills in <strong>Java Full Stack</strong>, <strong>React.js</strong>, and 
            <strong> Spring Boot/Node.js</strong> RESTful APIs, and I am actively exploring the frontier of 
            <strong> Generative AI Engineering</strong> to build smarter software workflows.
          </p>

          <div className={styles.quickStats}>
            <div className={styles.statCard}>
              <span className={styles.statNumber}>8.01</span>
              <span className={styles.statLabel}>B.Tech GPA</span>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statNumber}>5+</span>
              <span className={styles.statLabel}>Web Projects</span>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statNumber}>4+</span>
              <span className={styles.statLabel}>Certifications</span>
            </div>
          </div>
        </div>

        <div className={styles.highlightsGrid}>
          {highlights.map((item, index) => (
            <div key={index} className={styles.highlightCard}>
              <div className={styles.cardIcon}>{item.icon}</div>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDesc}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
