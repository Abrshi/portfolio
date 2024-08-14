import React from 'react'
import aboutmecss from './aboutme.module.css'
function AboutMe() {
  return (
    <div className='first'>
    <div id='about' className={aboutmecss.outer}>
    <h2 className={aboutmecss.h2}>About Me</h2>
   
    <div className={aboutmecss.inner}>
    <div className={aboutmecss.first}>
    <p>
    This is <strong>Abreham Yeshitla</strong> , a web developer from Addis Abeba:Ethiopia. Thank you for taking the time to visit my portfolio website.
   </p>
     </div>
    <div className={aboutmecss.second}>
    <p>
    A software developer with experience in building responsive and scalable web apps. I am well-knowledged in UI/UX principles and practices. I believe that a website is more than just a collection of web pages; it should be a reflection of the brand or individual it represents. I bring a strong foundational understanding of computer science concepts and programming languages to each project I work on. Whether working collaboratively or individually, I’m committed to taking each task with persistence and striving towards delivering the best possible product.
    </p>
    
    
    </div>
    </div>
    </div>
    <div className={aboutmecss.wev}></div>
    </div>
  )
}

export default AboutMe