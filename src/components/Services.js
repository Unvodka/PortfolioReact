import React from 'react';
import MyCarousel from './Carousel';
import portFolio from '../video/portfolio.webm'
import gallery from '../img/filter-gallery.png'
import countdownTimer from '../img/countdownTimer.png'
import budgetVideo from '../video/budget-app.webm'
import swiminTeacher from '../video/swimin-teacher.webm'
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
                        <div className='img-container'><video loop src={budgetVideo} controls width="100%" height="100%"></video></div>
                        <a href='http://www.budget-react-app.online' target='_blank' rel='noreferrer'><h5 className='project-title'>Budget app</h5>
                        <p className='project-description'>Budget app using login/authentication and simple react useState </p>
                        </a>
                    </article>
                </div>
                <div className='project'>
                    <article>
                        <div className='img-container'><video loop src={portFolio} controls width="100%" height="100%"></video></div>
                        <h5 className='project-title'>Portfolio</h5>
                        <p className='project-description'>Front-end portfolio using Javascript/React/HTML/CSS</p>
                    </article>
                </div>
                <div className='project'>
                    <article>
                        <div className='img-container'><video loop src={swiminTeacher} controls width="100%" height="100%" ></video></div>
                        <a href='http://www.swimin-teacher.com' target='_blank' rel='noreferrer'> <h5 className='project-title'>Swimming Teacher website</h5>
                        <p className='project-description'>Basic website with authentication using Jwt, Express, React, Mongodb and Nodejs</p>
                        </a>
                    </article>
                </div>
                <div className='project'>
                    <article>
                        <div className='img-container'><img src={gallery} alt="gallery project" className='projects-portfolio'/></div>
                        <a href='http://www.finder-filter.online' target='_blank' rel='noreferrer'><h5 className='project-title'>Filterable Gallery</h5>
                        <p className='project-description'>Small application using Javascript and React filter methods</p>
                        </a>
                    </article>
                </div>
                <div className='project'>
                    <article>
                        <div className='img-container'><img src={countdownTimer} alt="countdownTimer project" className='projects-portfolio'/></div>
                        <a href='http://www.countdown-timer.online' target='_blank' rel='noreferrer'><h5 className='project-title'>Countdown Timer</h5>
                        <p className='project-description'>Here is a small application using React, props, useState and useEffect</p>
                        </a>
                    </article>
                </div>
            </div>
        </div>
    )
}

export default Services;