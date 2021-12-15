import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useContext } from 'react';
import { ThemeContext } from '../context';

const Navbar = () => {

    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    return (
        <nav className="navbar navbar-expand-lg">
    
        <div className="container">
            
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <FontAwesomeIcon icon={ faBars } style={{ color: "Antiquewhite" }}/>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                    <a className="nav-links" aria-current="page" href="#aboutId" style={{backgroundColor: darkMode ? '#222' : 'wheat',
                            color: darkMode ? 'wheat' : '#222'}}>About</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-links" href="#experiencesId" style={{backgroundColor: darkMode ? '#222' : 'wheat',
                            color: darkMode ? 'wheat' : '#222'}}>Experiences</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-links" href="#portfolioId" style={{backgroundColor: darkMode ? '#222' : 'wheat',
                            color: darkMode ? 'wheat' : '#222'}}>Portfolio</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-links" href="#servicesId" style={{backgroundColor: darkMode ? '#222' : 'wheat',
                            color: darkMode ? 'wheat' : '#222'}}>Services</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-links" href="#contactId" style={{backgroundColor: darkMode ? '#222' : 'wheat',
                            color: darkMode ? 'wheat' : '#222'}}>Contact</a>
                    </li>
                </ul>
            </div>
        </div>
        </nav>
    )
}

export default Navbar

