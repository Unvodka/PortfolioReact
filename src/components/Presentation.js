import React from 'react';
import Typed from 'react-typed';


const Presentation = () => {
  return (
    <>
    <div className='presentation'>
        <div className='presentation-title'>
            <p className='hello'>Hello my name is</p>
            <h1 className='name'>Arnaud</h1>
        </div>
    
        <div className="title">
            <div className="title-wrapper">
              <div className="title-item">Web Developer</div>
              <div className="title-item">Software Engineer</div>
              <div className="title-item">UI-UX Designer</div>
            </div>
        </div>
    </div>

    <div className="header-wraper">

            <div className="main-info">

                <Typed
                    className="typed"
                    strings={[
                        ' Web Integration',
                        ' Web Design',
                        ' Web Development',
                        ' Web applications',
                        ' Databases'
                    ]}
                    typeSpeed={40}
                    backSpeed={50}
                    loop
                    backDelay={1000}
                />
                <br/>
        
                <a href="#contactId" className="btn-contact">Contact me now</a>
            
            </div>
            
        </div>
    </>
  )
}

export default Presentation
