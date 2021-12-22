import React from 'react';
import  MyCarousel from './Carousel';
import portFolio from '../img/portfolio.png'
import budgetNodeApp from '../img/budget-node-app.png'
import swimmingTeacher from '../img/swimming-teacher.png'
import gallery from '../img/filter-gallery.png'
import './Services.css'

const Services = () => {
    return (
        <div className="services">
            <h2>Services and Projects</h2>
            <MyCarousel />
            <h4 className='projects-h4'>My Projects</h4>
            <div className='projects'>
                <div className='project'>
                    <article>
                        <div className='img-container'><img src={budgetNodeApp} alt="fullpage img"  className='projects-portfolio'/></div>
                        <h5 className='project-title'>Budget app</h5>
                        <p className='project-description'>This budget app will help you out managing your money automaticaly as you set it up</p>
                    </article>
                </div>
                <div className='project'>
                    <article>
                        <div className='img-container'><img src={portFolio} alt="portfolio project"  className='projects-portfolio'/></div>
                        <h5 className='project-title'>Portfolio</h5>
                        <p className='project-description'>Here is a portfolio wich can be fully personalised</p>
                    </article>
                </div>
                <div className='project'>
                    <article>
                        <div className='img-container'><img src={swimmingTeacher} alt="teacher project"  className='projects-portfolio'/></div>
                        <h5 className='project-title'>Swimming Teacher website</h5>
                        <p className='project-description'>Basic website for more visibility fully adaptable to your needs</p>
                    </article>
                </div>
                <div className='project'>
                    <article>
                        <div className='img-container'><img src={gallery} alt="gallery project" className='projects-portfolio'/></div>
                        <h5 className='project-title'>Filterable Gallery</h5>
                        <p className='project-description'>Simple filter on a gallery by categories and an input search</p>
                    </article>
                </div>
                <div className='project'>
                    <article>
                        <div className='img-container'></div>
                        <h5 className='project-title'>Title</h5>
                        <p className='project-description'>Incoming Project...</p>
                    </article>
                </div>
            </div>
        </div>
    )
}

export default Services;