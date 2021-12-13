import React from 'react';
import Typed from 'react-typed';



const Header = () => {
    return (
        
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
    )
}

export default Header
