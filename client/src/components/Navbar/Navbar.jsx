import React, { useState, useEffect } from 'react';
import { 
  FiBriefcase, 
  FiFolder, 
  FiLayers, 
  FiMail, 
  FiSend, 
  FiUser, 
  FiBookOpen, 
  FiTerminal, 
  FiCode 
} from 'react-icons/fi';
import { HiSparkles } from 'react-icons/hi';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
      
      const sections = ['about', 'experience', 'projects', 'skills', 'education', 'contact'];
      let current = '';
      
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 160 && rect.bottom >= 160) {
            current = section;
          }
        }
      });
      
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navItems = [
    { name: 'About', id: 'about', icon: <FiUser /> },
    { name: 'Experience', id: 'experience', icon: <FiBriefcase /> },
    { name: 'Projects', id: 'projects', icon: <FiFolder /> },
    { name: 'Skills', id: 'skills', icon: <FiLayers /> },
    { name: 'Education', id: 'education', icon: <FiBookOpen /> },
    { name: 'Contact', id: 'contact', icon: <FiMail /> }
  ];

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <nav className={styles.nav}>
        
        {/* DESIGNFUL BRANDING WITH ANIMATED HIGHLIGHT & "PORTFOLIO" AT TOP */}
        <div className={styles.logoContainer}>
          <a href="#" onClick={closeMenu} className={styles.logoLink}>
            <div className={styles.avatarIconWrapper}>
              <div className={styles.avatarGlow}></div>
              <div className={styles.logoBadge}>
                <FiTerminal className={styles.logoIcon} />
              </div>
              <span className={styles.onlineDot} title="Status: Online & Ready"></span>
            </div>

            <div className={styles.brandTitleBlock}>
              <div className={styles.portfolioTopPill}>
                <span className={styles.pillSparkle}><HiSparkles /></span>
                <span className={styles.portfolioTopText}>PORTFOLIO</span>
                <span className={styles.liveIndicator}>LIVE</span>
              </div>
              <div className={styles.brandNameRow}>
                <span className={styles.bracket}>&lt;</span>
                <span className={styles.logoName}>Shahbaz</span>
                <span className={styles.logoDomain}>.dev</span>
                <span className={styles.bracket}>/&gt;</span>
              </div>
            </div>
          </a>
        </div>
        
        {/* Mobile Hamburger toggle */}
        <button 
          className={styles.hamburger} 
          onClick={toggleMenu} 
          aria-label="Toggle navigation menu"
        >
          <div className={`${styles.bar} ${isOpen ? styles.open : ''}`}></div>
          <div className={`${styles.bar} ${isOpen ? styles.open : ''}`}></div>
          <div className={`${styles.bar} ${isOpen ? styles.open : ''}`}></div>
        </button>

        {/* Well-managed navigation pills with icons and numbered badges */}
        <div className={`${styles.navLinksWrapper} ${isOpen ? styles.open : ''}`}>
          <ul className={styles.navLinks}>
            {navItems.map((item, i) => (
              <li key={item.id} className={styles.navItem}>
                <a 
                  href={`#${item.id}`}
                  className={`${styles.navLink} ${activeSection === item.id ? styles.active : ''}`}
                  onClick={closeMenu}
                >
                  <span className={styles.itemIcon}>{item.icon}</span>
                  <span className={styles.itemText}>{item.name}</span>
                  <span className={styles.navNum}>0{i + 1}</span>
                </a>
              </li>
            ))}
          </ul>

          <div className={styles.navAction}>
            <a 
              href="mailto:shazam200@gmail.com" 
              className={styles.hireBtn}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className={styles.btnShimmer}></span>
              <FiSend className={styles.hireBtnIcon} />
              <span>Hire Me</span>
            </a>
          </div>
        </div>

      </nav>
    </header>
  );
};

export default Navbar;
