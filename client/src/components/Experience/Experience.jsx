import React from 'react';
import { FiBriefcase, FiCalendar, FiCheckCircle, FiMapPin } from 'react-icons/fi';
import styles from './Experience.module.css';

const Experience = () => {
  const experiences = [
    {
      role: 'Frontend Developer Intern',
      company: 'CodeAlpha',
      location: 'Remote',
      duration: 'Apr 2026 – May 2026',
      points: [
        'Developed 4–5 responsive web projects using HTML, CSS, and JavaScript, focusing on clean UI design and user-friendly interfaces.',
        'Implemented interactive features and optimized page layouts for smooth, consistent user experience across multiple devices and screen sizes.',
        'Maintained structured version control with Git and collaborated on responsive cross-browser testing.'
      ],
      technologies: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'Responsive Web Design', 'Git']
    }
  ];

  return (
    <section id="experience" className={styles.experienceSection}>
      <div className={styles.sectionHeader}>
        <span className={styles.headingNum}>02.</span>
        <h2 className={styles.headingTitle}>Work Experience</h2>
        <div className={styles.headingLine}></div>
      </div>

      <div className={styles.timeline}>
        {experiences.map((exp, index) => (
          <div key={index} className={styles.timelineItem}>
            <div className={styles.timelineMarker}>
              <div className={styles.timelineDot}></div>
              <div className={styles.timelineLine}></div>
            </div>

            <div className={styles.expCard}>
              <div className={styles.expHeader}>
                <div>
                  <h3 className={styles.roleTitle}>
                    {exp.role} <span className={styles.company}>@ {exp.company}</span>
                  </h3>
                  <div className={styles.metaRow}>
                    <span className={styles.metaItem}>
                      <FiCalendar className={styles.metaIcon} /> {exp.duration}
                    </span>
                    <span className={styles.metaItem}>
                      <FiMapPin className={styles.metaIcon} /> {exp.location}
                    </span>
                    <span className={styles.badgeIntern}>Internship</span>
                  </div>
                </div>
              </div>

              <ul className={styles.pointsList}>
                {exp.points.map((pt, i) => (
                  <li key={i} className={styles.pointItem}>
                    <FiCheckCircle className={styles.checkIcon} />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>

              <div className={styles.techTags}>
                {exp.technologies.map((tech, i) => (
                  <span key={i} className={styles.tag}>{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
