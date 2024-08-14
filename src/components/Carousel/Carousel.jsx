import React from 'react'; // Fixed typo with semicolon
import Carouseleffectcss from './Carousel.module.css';
import CarouselBackEnd from './CarouselBackEnd.jsx'
import CarouselFrontEnd from './CarouselFrontEnd'

function Carousel() {

  return (
    <div className={Carouseleffectcss.first}>
   <div id='Skills' className={Carouseleffectcss.outerDiv} >
  
   <h2 className={Carouseleffectcss.h2}> Skills </h2>
   <p className={Carouseleffectcss.p}>I enjoy diving into and learning new things. Here's a list of technologies I've worked with. I have a sound understanding of how to use these languages to create visually appealing and responsive websites with engaging user experiences and dynamic content.</p>

 <div className={Carouseleffectcss.Carousel}>
 <div className={Carouseleffectcss.frontend}>
            <span>HTML</span>
            <span>CSS</span>
            <span>Bootstrap</span>
            <span>JavaScript</span>
            <span>jQuery</span> 
            <span>React Js</span>
          </div>
 <CarouselFrontEnd/>
 <br/><br/><br/>
 <div className={Carouseleffectcss.backend}>
            <span>GitHub</span> 
            <span>Node</span>
            <span>Express</span>
            <span>MySQL</span> 
            <span>PHP</span>
          </div>
  <CarouselBackEnd/></div>
   </div>
   <div className={Carouseleffectcss.wev}></div>
   </div>
  );
}

export default Carousel;
