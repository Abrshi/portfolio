import React from 'react';
import styles from './work.module.css';

function WorkProps(props) {
  return (
    <div className={styles.project}>
    <h2 className={styles.h2}>{props.title}</h2>
      <div className={styles[props.classname]}>
        
      </div>
     
      <div className={styles.flex }> 
      <a className={styles.a} href={props.weblink}> Demo</a> <a className={styles.a} href={props.githublink}>Github</a></div>
    </div>
  );
}

export default WorkProps;
