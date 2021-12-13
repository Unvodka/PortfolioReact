import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

class MyCarousel extends Component {
    render() {
        return (
            <Carousel className="carousel-container">
                
                <div className="carousel-img">
                    <img src="/nutrition.jpg" alt="vegetables"/>
                    <p className="legend">Nutrition</p>
                </div>
                <div className="carousel-img">
                    <img src="/meditation.jpg" alt="meditation"/>
                    <p className="legend">Meditation exercices</p>
                </div>
                <div className="carousel-img">
                    <img src="/relaxation3.jpg" alt="relaxation"/>
                    <p className="legend">Relaxation</p>
                </div>
                <div className="carousel-img">
                    <img src="/training3.jpg" alt="training" />
                    <p className="legend">Training</p>
                </div>
                
            </Carousel>
        );
    }
};
 
export default MyCarousel;