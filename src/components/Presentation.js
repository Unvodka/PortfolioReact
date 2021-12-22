import React from 'react';
import Typed from 'react-typed';
import { useContext } from 'react';
import { ThemeContext } from '../context';
import './Presentation.css'

const Presentation = () => {

    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

  return (
    <>
    <div className='presentation' style={{background: darkMode ? "linear-gradient(100deg, #222 0%, wheat 50%, #222 100%)" : ""}}>
        <div className='presentation-title'>
            <p className='hello' style={{color: darkMode ? '#222' : 'wheat'}}>Hello, my name is</p>
            <h1 className='name' style={{color: darkMode ? '#222' : 'wheat'}}>Arnaud</h1>
        </div>
    
        <div className="title" style={{color: darkMode ? '#222' : 'wheat'}}>
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
