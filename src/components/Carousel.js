import React, { Component } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import webDev from '../img/collab.jpg';
import design from '../img/design1.jpg';
import development from '../img/mainbackground.jpg';
import './Carousel.css';

class MyCarousel extends Component {
  render() {
    return (
      <Carousel className="carousel-container" infiniteLoop="true">
        <div className="carousel-img">
          <img src={webDev} alt="web img" className="img1" />
          <p className="legend">Collaboration</p>
        </div>
        <div className="carousel-img">
          <img src={design} alt="meditation" />
          <p className="legend">Web Design</p>
        </div>
        <div className="carousel-img">
          <img src={development} alt="Web Development" />
          <p className="legend">Web Development</p>
        </div>
      </Carousel>
    );
  }
}

export default MyCarousel;
