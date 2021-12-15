import React from 'react';
import  MyCarousel from './Carousel';
import portFolio from '../img/portfolio.png'
import budgetNodeApp from '../img/budget-node-app.png'
import swimmingTeacher from '../img/swimming-teacher.png'

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
                        <div className='img-container'><img src={portFolio} alt="fullpage img"  className='projects-portfolio'/></div>
                        <h5 className='project-title'>Portfolio</h5>
                        <p className='project-description'>Here is a basic portfolio wich could have multiples animations</p>
                    </article>
                </div>
                <div className='project'>
                    <article>
                        <div className='img-container'><img src={swimmingTeacher} alt="teacher img"  className='projects-portfolio'/></div>
                        <h5 className='project-title'>Title</h5>
                        <p className='project-description'>Incoming Project...</p>
                    </article>
                </div>
                <div className='project'>
                    <article>
                        <div className='img-container'><p>Picture...</p></div>
                        <h5 className='project-title'>Title</h5>
                        <p className='project-description'>Incoming Project...</p>
                    </article>
                </div>
                <div className='project'>
                    <article>
                        <div className='img-container'>Picture...</div>
                        <h5 className='project-title'>Title</h5>
                        <p className='project-description'>Incoming Project...</p>
                    </article>
                </div>
            </div>
        </div>
    )
}

export default Services;