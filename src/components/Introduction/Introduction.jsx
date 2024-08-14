import React from 'react';
import introduction from './Introduction.module.css';
import profile from '../../assets/profile.png'
function Introduction() {
  return (<div className={introduction.first}>
    <div id='home' className={introduction.outer}>
      <div className={introduction.firstSection}>
        <div className={introduction.nameandjob}>
          <h3 className={introduction.name}>Abreham Yeshitlay</h3>
          <h3 className={introduction.job}>Full Stack Web Developer</h3>
        </div>
        <div className={introduction.discription}>
          <p>I am a passionate and dedicated full stack developer with a keen eye for detail and a strong foundation in programming languages. My goal is to create innovative and user-friendly web applications that meet the needs of my clients.</p>
        </div>
        <div className={introduction.cvAndContact}>
          <button>My CV</button>
        </div>
        <div className={introduction.socials}>
          <span><a href='http://www.github.com/abrshi'>gi</a></span>
          <span><a href='http://www.linkedin.com/abrshi'>link</a></span>
          <span><a href='http://www.facebook.com/abrshi'>fac</a></span>
          <span><a href='http://www.instagram.com/abrshi'>ig</a></span>
        </div>
      </div>
      <div className={introduction.secondSection}>
       <div className={introduction.imgcontener}>
       <img src={profile} alt="profile" className={introduction.img} />
       </div>
      </div>
    </div>
    <div className={introduction.wev}></div>
    </div>
  );
}

export default Introduction;
