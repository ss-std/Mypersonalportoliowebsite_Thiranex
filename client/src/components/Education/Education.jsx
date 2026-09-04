import React from 'react';
import { FiAward, FiBook, FiCalendar, FiCheck, FiMapPin, FiStar } from 'react-icons/fi';
import styles from './Education.module.css';

const Education = () => {
  const certifications = [
    {
      title: 'Java Full Stack Development',
      issuer: 'DUCAT AI Schools',
      duration: 'Sep 2025 – Sep 2027',
      focus: 'Core & Advanced Java, Spring Boot, Microservices, Hibernate, REST APIs, Frontend Integration'
    },
    {
      title: 'Generative AI Engineering',
      issuer: 'Outskill',
      duration: 'Apr 2026 – May 2026',
      focus: 'LLMs, Prompt Engineering, LangChain, AI App Architectures & API Integration'
    },
    {
      title: 'AI Tools Workshop',
      issuer: 'Be 10X',
      duration: 'Mar 2026',
      focus: 'Modern productivity tools, generative agents, and automation workflows'
    },
    {
      title: 'Microsoft Excel Certification',
      issuer: 'Microsoft',
      duration: 'Certified',
      focus: 'Data analysis, structured reporting, functions & formulas'
    }
  ];

  return (
    <section id="education" className={styles.educationSection}>
      <div className={styles.sectionHeader}>
        <span className={styles.headingNum}>05.</span>
        <h2 className={styles.headingTitle}>Education & Certifications</h2>
        <div className={styles.headingLine}></div>
      </div>

      <div className={styles.contentGrid}>
        {/* Education Degree */}
        <div className={styles.degreeCard}>
          <div className={styles.degreeHeader}>
            <div className={styles.eduIcon}>
              <FiBook />
            </div>
            <div>
              <span className={styles.degreeBadge}>Undergraduate Degree</span>
              <h3 className={styles.degreeTitle}>Bachelor of Technology</h3>
              <p className={styles.degreeMajor}>Computer Science and Engineering</p>
            </div>
          </div>

          <div className={styles.collegeInfo}>
            <h4 className={styles.collegeName}>Bachelor's Degree in Computer Science</h4>
            <div className={styles.collegeMeta}>
              <span className={styles.metaItem}>
                <FiMapPin className={styles.metaIcon} /> Computer Science & Engineering
              </span>
              <span className={styles.metaItem}>
                <FiCalendar className={styles.metaIcon} /> Aug 2023 – Jul 2027 (Expected)
              </span>
            </div>
          </div>

          <div className={styles.gpaBadge}>
            <FiStar className={styles.gpaIcon} />
            <span>Cumulative GPA: <strong>8.01 / 10.0</strong></span>
          </div>

          <p className={styles.degreeDesc}>
            Rigorous curriculum emphasizing Object-Oriented Programming (Java, C++), Data Structures & Algorithms, 
            Database Management Systems, Software Engineering, and Operating Systems.
          </p>
        </div>

        {/* Certifications List */}
        <div className={styles.certsContainer}>
          <h3 className={styles.certsHeading}>
            <FiAward className={styles.certIcon} /> Specialized Certifications
          </h3>

          <div className={styles.certsList}>
            {certifications.map((cert, i) => (
              <div key={i} className={styles.certCard}>
                <div className={styles.certHeader}>
                  <h4 className={styles.certTitle}>{cert.title}</h4>
                  <span className={styles.certDuration}>{cert.duration}</span>
                </div>
                <p className={styles.certIssuer}>Issued by <strong>{cert.issuer}</strong></p>
                <p className={styles.certFocus}>
                  <FiCheck className={styles.checkIcon} /> {cert.focus}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
