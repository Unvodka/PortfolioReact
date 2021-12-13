import React from 'react';
import  MyCarousel from './Carousel';

const Services = () => {
    return (
        <div className="services">
            <h2>Projects and Services</h2>
            <MyCarousel />
            <h4 className='projects-h4'>My Projects</h4>
            <div className='projects'>
                <div className='project'>
                    <article>
                        <div className='img-container'>Picture...</div>
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
                <div className='project'>
                    <article>
                        <div className='img-container'>Picture...</div>
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