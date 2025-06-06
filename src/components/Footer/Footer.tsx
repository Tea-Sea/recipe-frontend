import React from 'react';
import styles from './Footer.module.css';


const Footer: React.FC = () => {
  return (
    <>
      <footer className={styles.footer}>
        <a href="https://github.com/Tea-Sea/recipe-frontend" className={styles.gitHubLink}>
        GitHub
        </a>
      </footer>
    </>
  );
};

export default Footer;