import React from 'react';
import  MyCarousel from './Carousel';
import portFolio from '../img/portfolio.png'
import budgetNodeApp from '../img/budget-node-app.png'
import swimmingTeacher from '../img/swimming-teacher1.png'
import gallery from '../img/filter-gallery.png'
import countdownTimer from '../img/countdownTimer.png'
import './Services.css'

const Services = () => {
    return (
        <div id="servicesId" className="services">
            <h2>Services and Projects</h2>
            <MyCarousel />
            <h4 id='portfolioId' className='projects-h4'>My Projects</h4>
            <div className='projects'>
                <div className='project'>
                    <article>
                        <div className='img-container'><img src={budgetNodeApp} alt="fullpage img"  className='projects-portfolio'/></div>
                        <h5 className='project-title'>Budget app</h5>
                        <p className='project-description'>Budget app using login/authentication and simple react useState </p>
                    </article>
                </div>
                <div className='project'>
                    <article>
                        <div className='img-container'><img src={portFolio} alt="portfolio project"  className='projects-portfolio'/></div>
                        <h5 className='project-title'>Portfolio</h5>
                        <p className='project-description'>Front-end portfolio using Javascript/React/HTML/CSS</p>
                    </article>
                </div>
                <div className='project'>
                    <article>
                        <div className='img-container'><img src={swimmingTeacher} alt="teacher project"  className='projects-portfolio'/></div>
                        <h5 className='project-title'>Swimming Teacher website</h5>
                        <p className='project-description'>Basic website with authentication using Jwt, Express, React, Mongodb and Nodejs</p>
                    </article>
                </div>
                <div className='project'>
                    <article>
                        <div className='img-container'><img src={gallery} alt="gallery project" className='projects-portfolio'/></div>
                        <h5 className='project-title'>Filterable Gallery</h5>
                        <p className='project-description'>React application using filters</p>
                    </article>
                </div>
                <div className='project'>
                    <article>
                        <div className='img-container'><img src={countdownTimer} alt="countdownTimer project" className='projects-portfolio'/></div>
                        <h5 className='project-title'>Title</h5>
                        <p className='project-description'>Incoming Project...</p>
                    </article>
                </div>
            </div>
        </div>
    )
}

export default Services;