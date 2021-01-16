import React from "react";
import Slider from "react-slick";
import './Slide.scss';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import slide1 from './img/yarn.png';
import slide2 from './img/nodejs.png';
import slide3 from './img/scss.png';
 

class SimpleSlider extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Slider {...settings}>
        <div className="allimg">
            <img src={slide1} alt='img1'/>
        </div>
        <div className="allimg">
            <img src={slide2} alt='img2'/>
        </div>
        <div className="allimg">
            <img src={slide3} alt='img3'/>
        </div>
      </Slider>
    );
  }
}

export default SimpleSlider;