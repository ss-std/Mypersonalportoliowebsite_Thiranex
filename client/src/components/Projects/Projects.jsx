import React, { useEffect, useState } from 'react';
import { 
  FiArrowUpRight, 
  FiExternalLink, 
  FiFolder, 
  FiGithub, 
  FiLayers,
  FiTerminal,
  FiLayout,
  FiCpu
} from 'react-icons/fi';
import { 
  SiDjango, 
  SiJavascript, 
  SiPython, 
  SiReact, 
  SiHtml5 
} from 'react-icons/si';
import { getProjects } from '../../services/api';
import styles from './Projects.module.css';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  
  const resumeProjects = [
    {
      id: 'ai-resume-builder',
      title: 'AI Resume Builder',
      timeline: 'Feb 2026 – May 2026',
      tagline: 'GenAI Powered Career Automation Tool',
      icon: <SiPython />,
      iconColor: '#38bdf8',
      description: 'Built an AI-powered resume builder using Python and Django, enabling users to create professional, structured resumes with high efficiency. Implemented resume customization features and streamlined resume generation through a user-friendly modern web interface.',
      tech: ['Python', 'Django', 'GenAI', 'RESTful API', 'HTML5/CSS3', 'JavaScript'],
      github: 'https://github.com',
      external: '#',
      category: 'AI & Full-Stack',
      accent: '#38bdf8',
      gradient: 'linear-gradient(135deg, rgba(168, 85, 247, 0.25) 0%, rgba(56, 189, 248, 0.25) 100%)'
    },
    {
      id: 'ems-portal',
      title: 'EMS Portal (Employee Management System)',
      timeline: 'Sep 2025 – Dec 2025',
      tagline: 'Enterprise HR Operations Dashboard',
      icon: <SiReact />,
      iconColor: '#61dafb',
      description: 'Developed a responsive EMS portal using React.js, JavaScript, HTML, and CSS for managing employee information, directory records, and core HR operations. Built interactive components and responsive dashboard layouts to enhance administrative usability.',
      tech: ['React.js', 'JavaScript', 'HTML5', 'CSS Modules', 'State Management', 'REST APIs'],
      github: 'https://github.com',
      external: '#',
      category: 'Frontend Engineering',
      accent: '#64ffda',
      gradient: 'linear-gradient(135deg, rgba(100, 255, 218, 0.25) 0%, rgba(56, 189, 248, 0.25) 100%)'
    },
    {
      id: 'image-gallery',
      title: 'Interactive Image Gallery',
      timeline: 'Apr 2026 – May 2026',
      tagline: 'CodeAlpha Internship Project',
      icon: <FiLayout />,
      iconColor: '#f7df1e',
      description: 'Developed a responsive, interactive image gallery with a clean, user-friendly interface using HTML, CSS, and JavaScript. Implemented JavaScript-based image navigation, modal overlays, dynamic grid layouts, and full device responsiveness.',
      tech: ['JavaScript (ES6+)', 'HTML5', 'CSS3 Grid/Flexbox', 'Responsive UI', 'Modal UX'],
      github: 'https://github.com',
      external: '#',
      category: 'UI/UX Web',
      accent: '#f7df1e',
      gradient: 'linear-gradient(135deg, rgba(247, 223, 30, 0.2) 0%, rgba(100, 255, 218, 0.2) 100%)'
    }
  ];

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await getProjects();
        if (response.data && response.data.length > 0) {
          const merged = response.data.map(p => ({
            id: p._id || p.id,
            title: p.title,
            timeline: p.createdAt ? new Date(p.createdAt).toLocaleDateString() : 'Recent',
            tagline: 'Full-Stack Application',
            icon: <FiFolder />,
            iconColor: '#64ffda',
            description: p.description,
            tech: p.technologies || ['React', 'JavaScript'],
            github: p.githubUrl || 'https://github.com',
            external: p.liveUrl || '#',
            category: 'Web App',
            accent: '#64ffda',
            gradient: 'linear-gradient(135deg, rgba(100, 255, 218, 0.2) 0%, rgba(56, 189, 248, 0.2) 100%)'
          }));
          setProjects([...resumeProjects, ...merged.filter(m => !resumeProjects.some(r => r.title === m.title))]);
        } else {
          setProjects(resumeProjects);
        }
      } catch (error) {
        setProjects(resumeProjects);
      }
    };
    fetchProjects();
  }, []);

  return (
    <section id="projects" className={styles.projectsSection}>
      <div className={styles.sectionHeader}>
        <span className={styles.headingNum}>03.</span>
        <h2 className={styles.headingTitle}>Featured Projects</h2>
        <div className={styles.headingLine}></div>
      </div>

      <div className={styles.projectGrid}>
        {projects.map((project, i) => (
          <div key={project.id || i} className={styles.projectCard}>
            <div className={styles.cardHeader}>
              <div 
                className={styles.projectIconBadge}
                style={{ 
                  color: project.iconColor || '#64ffda',
                  borderColor: `${project.iconColor || '#64ffda'}40`
                }}
              >
                {project.icon}
              </div>

              <div className={styles.projectLinks}>
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub Repository" className={styles.actionIconBtn}>
                    <FiGithub />
                  </a>
                )}
                {project.external && (
                  <a href={project.external} target="_blank" rel="noopener noreferrer" aria-label="Live Demo" className={styles.actionIconBtn}>
                    <FiArrowUpRight />
                  </a>
                )}
              </div>
            </div>

            <div className={styles.cardMeta}>
              <span className={styles.categoryBadge}>{project.category}</span>
              <span className={styles.timelineText}>{project.timeline}</span>
            </div>

            <h3 className={styles.projectTitle}>
              <a href={project.external || project.github}>{project.title}</a>
            </h3>

            <p className={styles.tagline}>{project.tagline}</p>

            <div className={styles.projectDescription}>
              <p>{project.description}</p>
            </div>

            <ul className={styles.projectTechList}>
              {project.tech.map((tech, idx) => (
                <li key={idx} className={styles.techTag}>
                  {tech}
                </li>
              ))}
            </ul>

            <div className={styles.cardGlow} style={{ background: project.gradient }}></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
