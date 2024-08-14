import React from 'react'; // Fixed typo with semicolon
import Carouseleffectcss from './Carousel.module.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from "react-slick";
import { imgs } from '../../assets/carousel/imgs';

function CarouselBackEnd() {
  const settings = {
 dots: false,
    infinite: true,
    speed: 2000, 
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // Set autoplay speed to 0 for continuous rotation
    cssEase: 'linear'
  };

  return (
    <Slider {...settings}>
      {imgs.map((img, index) => (
        <div key={index}>
          <img src={img} alt={`Image ${index}`} className={Carouseleffectcss.img} />
        </div>
      ))}
    </Slider>
  );
}

export default CarouselBackEnd;
