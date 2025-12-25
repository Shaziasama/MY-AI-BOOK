import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

function Footer() {
  return (
    <footer className={clsx(styles.footer)}>
      <div className="container">
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <h3 className={styles.footerHeading}>About This Book</h3>
            <p>
              An interactive textbook for building the next generation of intelligent robots, blending theoretical foundations with practical applications.
            </p>
          </div>
          <div className={styles.footerSection}>
            <h3 className={styles.footerHeading}>Quick Links</h3>
            <ul className={styles.footerLinks}>
              <li><a href="/docs/intro" className={styles.footerLink}>Start Reading</a></li>
              <li><a href="/blog" className={styles.footerLink}>Blog</a></li>
              <li><a href="/community" className={styles.footerLink}>Community</a></li>
            </ul>
          </div>
          <div className={styles.footerSection}>
            <h3 className={styles.footerHeading}>Contact</h3>
            <p>Email: info@example.com</p>
            <div className={styles.socialIcons}>
              {/* Placeholder for social media icons */}
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>Twitter</a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>GitHub</a>
            </div>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p className={styles.copyright}>© {new Date().getFullYear()} Physical AI & Humanoid Robotics. Built with Docusaurus.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;