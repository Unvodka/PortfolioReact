import React from 'react';
import Typed from 'react-typed';



const Header = () => {
    return (
        
        <div className="header-wraper">

            <div className="main-info">

                <Typed
                    className="typed"
                    strings={["Web Development, Software Engineer"]}
                    typeSpeed={40}
                    backSpeed={50}
                    loop
                    backDelay={10000}
                />
                <br/>
 
                <Typed
                className="typing"
                strings={[
                    ' Integration',
                    ' Design',
                    ' Development',
                    ' Databases',
                    ' Web/mobil app']}
                    typeSpeed={60}
                    backSpeed={50}
                    attr="placeholder"
                    loop >
                    <input type="text"/>
                </Typed>
        
                <a href="#contactId" className="btn-contact">Contact me now</a>
            
            </div>
            
        </div>
    )
}

export default Header
