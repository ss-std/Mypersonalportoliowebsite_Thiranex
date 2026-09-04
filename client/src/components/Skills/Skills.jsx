import React, { useState } from 'react';
import { 
  SiCplusplus, 
  SiJavascript, 
  SiTypescript, 
  SiHtml5, 
  SiReact, 
  SiNodedotjs, 
  SiSpringboot, 
  SiGit, 
  SiGithub, 
  SiMongodb, 
  SiPython
} from 'react-icons/si';
import { FaJava, FaCss3Alt } from 'react-icons/fa';
import { 
  FiCode, 
  FiCpu, 
  FiDatabase, 
  FiGrid, 
  FiLayout, 
  FiLayers, 
  FiServer, 
  FiSettings,
  FiTrendingUp,
  FiZap
} from 'react-icons/fi';
import styles from './Skills.module.css';

const Skills = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skillCategories = [
    {
      id: 'languages',
      category: 'Languages',
      icon: <FiCpu />,
      accentColor: '#38bdf8',
      description: 'Core programming languages & algorithmic syntax',
      skills: [
        { name: 'Java', level: 90, icon: <FaJava />, color: '#f89820', badge: 'Core & Adv', exp: 'Academic & Projects' },
        { name: 'JavaScript', level: 88, icon: <SiJavascript />, color: '#f7df1e', badge: 'ES6+ Next', exp: 'Internship & Web' },
        { name: 'TypeScript', level: 80, icon: <SiTypescript />, color: '#3178c6', badge: 'Type Safe', exp: 'Modern Stack' },
        { name: 'C++', level: 82, icon: <SiCplusplus />, color: '#00599c', badge: 'OOP & DSA', exp: 'Problem Solving' },
        { name: 'C', level: 85, icon: <FiCode />, color: '#64ffda', badge: 'Systems', exp: 'Foundational' },
        { name: 'Python', level: 75, icon: <SiPython />, color: '#3776ab', badge: 'GenAI & APIs', exp: 'AI Resume Project' }
      ]
    },
    {
      id: 'frontend',
      category: 'Frontend Development',
      icon: <FiLayout />,
      accentColor: '#61dafb',
      description: 'Responsive user interfaces, SPA state & performance',
      skills: [
        { name: 'React.js', level: 90, icon: <SiReact />, color: '#61dafb', badge: 'SPA & Hooks', exp: 'EMS Portal & Portfolio' },
        { name: 'HTML5', level: 95, icon: <SiHtml5 />, color: '#e34f26', badge: 'Semantic Web', exp: 'CodeAlpha Intern' },
        { name: 'CSS3', level: 92, icon: <FaCss3Alt />, color: '#1572b6', badge: 'Flex & Grid', exp: 'Glassmorphic UI' },
        { name: 'Responsive UI', level: 90, icon: <FiGrid />, color: '#64ffda', badge: 'Cross-Device', exp: 'Multi-screen UX' },
        { name: 'CSS Modules', level: 86, icon: <FiLayers />, color: '#2965f1', badge: 'Scoped Styles', exp: 'Component Architecture' },
        { name: 'Web Accessibility', level: 82, icon: <FiCode />, color: '#f59e0b', badge: 'Inclusive UX', exp: 'Semantic Interfaces' }
      ]
    },
    {
      id: 'backend',
      category: 'Backend & APIs',
      icon: <FiServer />,
      accentColor: '#6db33f',
      description: 'Microservices, RESTful interfaces & database design',
      skills: [
        { name: 'Spring Boot', level: 80, icon: <SiSpringboot />, color: '#6db33f', badge: 'Enterprise', exp: 'Java Full Stack Cert' },
        { name: 'Node.js', level: 82, icon: <SiNodedotjs />, color: '#339933', badge: 'Runtime & Express', exp: 'Portfolio REST API' },
        { name: 'RESTful APIs', level: 88, icon: <FiServer />, color: '#38bdf8', badge: 'API Architecture', exp: 'Contract & Testing' },
        { name: 'MongoDB', level: 80, icon: <SiMongodb />, color: '#47a248', badge: 'NoSQL Database', exp: 'Mongoose ODM' }
      ]
    },
    {
      id: 'tools',
      category: 'Tools & DevOps',
      icon: <FiSettings />,
      accentColor: '#a855f7',
      description: 'Version control workflows, pipelines & deployment',
      skills: [
        { name: 'Git', level: 90, icon: <SiGit />, color: '#f05032', badge: 'VCS Branching', exp: 'Daily Development' },
        { name: 'GitHub', level: 92, icon: <SiGithub />, color: '#e2e8f0', badge: 'Collaboration', exp: 'Open Source Repos' },
        { name: 'CI/CD Pipelines', level: 78, icon: <FiLayers />, color: '#a855f7', badge: 'Automation', exp: 'Continuous Integration' }
      ]
    }
  ];

  // Quick stats computed
  const totalSkills = skillCategories.reduce((acc, c) => acc + c.skills.length, 0);

  const filteredCategories = activeTab === 'all' 
    ? skillCategories 
    : skillCategories.filter(cat => cat.id === activeTab);

  return (
    <section id="skills" className={styles.skillsSection}>
      <div className={styles.sectionHeader}>
        <span className={styles.headingNum}>04.</span>
        <h2 className={styles.headingTitle}>Technical Stack & Mastery</h2>
        <div className={styles.headingLine}></div>
      </div>

      <p className={styles.sectionLead}>
        Carefully organized technologies and tools I leverage to architect, build, and deploy high-performance applications.
      </p>

      {/* Control Bar: Filter Tabs & Stats */}
      <div className={styles.controlBar}>
        <div className={styles.filterTabs}>
          <button 
            className={`${styles.tabBtn} ${activeTab === 'all' ? styles.tabActive : ''}`}
            onClick={() => setActiveTab('all')}
          >
            <FiZap className={styles.tabIcon} />
            All Technologies <span className={styles.tabCounter}>{totalSkills}</span>
          </button>
          {skillCategories.map(cat => (
            <button 
              key={cat.id}
              className={`${styles.tabBtn} ${activeTab === cat.id ? styles.tabActive : ''}`}
              onClick={() => setActiveTab(cat.id)}
            >
              <span className={styles.tabIcon}>{cat.icon}</span>
              {cat.category}
              <span className={styles.tabCounter}>{cat.skills.length}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Skill Category Cards */}
      <div className={styles.categoryGrid}>
        {filteredCategories.map((group) => (
          <div key={group.id} className={styles.categoryCard}>
            <div className={styles.categoryHeader}>
              <div 
                className={styles.categoryBadge} 
                style={{ borderColor: `${group.accentColor}50`, color: group.accentColor }}
              >
                {group.icon}
              </div>
              <div>
                <h3 className={styles.categoryTitle}>{group.category}</h3>
                <p className={styles.categoryDesc}>{group.description}</p>
              </div>
            </div>

            {/* Well-managed Icon Tile Matrix */}
            <div className={styles.iconMatrix}>
              {group.skills.map((skill, i) => (
                <div 
                  key={i} 
                  className={styles.skillTile}
                  onMouseEnter={() => setHoveredSkill(skill.name)}
                  onMouseLeave={() => setHoveredSkill(null)}
                >
                  <div 
                    className={styles.tileGlow} 
                    style={{ backgroundColor: skill.color }}
                  ></div>

                  <div className={styles.tileTop}>
                    <div 
                      className={styles.iconBox}
                      style={{ 
                        color: skill.color,
                        borderColor: `${skill.color}35`,
                        boxShadow: hoveredSkill === skill.name ? `0 0 16px ${skill.color}50` : 'none'
                      }}
                    >
                      {skill.icon}
                    </div>

                    <div className={styles.badgeGroup}>
                      <span className={styles.badgeTag}>{skill.badge}</span>
                      <span className={styles.percentageText} style={{ color: skill.color }}>
                        {skill.level}%
                      </span>
                    </div>
                  </div>

                  <div className={styles.tileBottom}>
                    <div className={styles.nameRow}>
                      <h4 className={styles.skillName}>{skill.name}</h4>
                      <span className={styles.skillExp}>{skill.exp}</span>
                    </div>

                    <div className={styles.progressTrack}>
                      <div 
                        className={styles.progressBar}
                        style={{ 
                          width: `${skill.level}%`,
                          backgroundColor: skill.color,
                          boxShadow: `0 0 8px ${skill.color}90`
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
