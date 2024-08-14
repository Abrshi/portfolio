import React, { useState } from 'react';
import { Link } from 'react-scroll';
import styles from './header.module.css';

function Header() {
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={`${styles.outerHeader} ${styles.navbar}`}>
      <div className={styles.rightHeader}>
        <ul>
          <li className={styles.myName}>
            <div className={styles.latterA}><a href='#' >Abreham Yeshitla</a></div>
          </li>
        </ul>
      </div>
      <div className={styles.leftHeader}>
        <ul className={`${styles.navLinks} ${isActive ? styles.active : ''}`}>
          <li className={styles.li}>
            <Link to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li className={styles.li}>
            <Link to="about" smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li className={styles.li}>
          <Link to="Skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
          <li className={styles.li}>
            <Link to="projects" smooth={true} duration={500}>
              Projects
            </Link>
          </li>
         
          <li className={styles.li}>
            <Link to="contact" smooth={true} duration={500}>
              Contact Me
            </Link>
          </li>
        </ul>
      </div>
      <div
        className={`${styles.hamburger} ${isActive ? styles.active : ''}`}
        onClick={handleClick}
      >
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
    </div>
  );
}

export default Header;
