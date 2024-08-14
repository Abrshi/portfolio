import React from 'react'
import workcss from './work.module.css' 
import WorkProps from './MyPriject.jsx'
function Work() {
  return (
    <div id='projects' className={workcss.outer}>
    <div>
    <h2 className={workcss.title}>Projects</h2>
    </div>
    <div className={workcss.discription}>
     <p  className={workcss.p}>
     I have designed and developed visually appealing and user-friendly websites, also built dynamic websites using, incorporating features such as user authentication, database management, and form validations. My attention to detail and problem-solving abilities have allowed me to create websites that meet the unique needs of each client. Whether it's a small business website or a complex e-commerce platform, I strive to deliver high-quality and reliable solutions that exceed expectations. Check out some of my most recent work
     </p>

    </div>
    <div>
    <section className={workcss.gread}>
    <WorkProps 
      title="Apple Clone" 
      classname="apple" 
      weblink="https://abrshi.github.io/netflixx"
      githublink="https://github.com/Abrshi/netflixx" 
    />
    <WorkProps 
      title="Netflix Clone" 
      classname="netflix" 
      weblink="https://abrshi.github.io/netflixx"
      githublink="https://github.com/Abrshi/netflixx" 
    />
    <WorkProps 
      title="Amazon Clone" 
      classname="amazon" 
      weblink="https://main--amazon-clones-by-abrham.netlify.app/"
      githublink="https://github.com/Abrshi/amazon"     />
    <WorkProps 
      title="My Portfolio" 
      classname="apple" 
      weblink="https://abrshi.netlify.app/"
      githublink="https://github.com/abrshi/my-portfolio"     />
  </section>
   
    </div>
    </div>
  )
}

export default Work