import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useContext } from 'react';
import { ThemeContext } from '../context';
import './Navbar.css'

const Navbar = () => {

    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    return (
        <nav className="navbar navbar-expand-lg" style={{backgroundColor: darkMode ? '#222' : 'wheat',
        color: darkMode ? 'wheat' : '#222'}}>
    
        <div className="container">
            
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <FontAwesomeIcon icon={ faBars } style={{ color: darkMode ? "Antiquewhite" : "#222", backgroundColor: darkMode ? "#222" : "wheat"}}/>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{backgroundColor: darkMode ? '#222' : 'wheat',
                        borderBottom: darkMode ? "1px solid wheat" : '1px solid #222'}}>
                <ul className="navbar-nav ml-auto" style={{backgroundColor: darkMode ? '#222' : 'wheat',
                            color: darkMode ? 'wheat' : '#222'}}>
                    <li className="nav-item" style={{backgroundColor: darkMode ? '#222' : 'wheat',
                            color: darkMode ? 'wheat' : '#222'}}>
                    <a className="nav-links" aria-current="page" href="#aboutId" style={{backgroundColor: darkMode ? '#222' : 'wheat',
                            color: darkMode ? 'wheat' : '#222'}}>About</a>
                    </li>
                    <li className="nav-item" style={{backgroundColor: darkMode ? '#222' : 'wheat',
                            color: darkMode ? 'wheat' : '#222'}}>
                    <a className="nav-links" href="#experiencesId" style={{backgroundColor: darkMode ? '#222' : 'wheat',
                            color: darkMode ? 'wheat' : '#222'}}>Experiences</a>
                    </li>
                    <li className="nav-item" style={{backgroundColor: darkMode ? '#222' : 'wheat',
                            color: darkMode ? 'wheat' : '#222'}}>
                    <a className="nav-links" href="#servicesId" style={{backgroundColor: darkMode ? '#222' : 'wheat',
                            color: darkMode ? 'wheat' : '#222'}}>Services</a>
                    </li>
                    <li className="nav-item" style={{backgroundColor: darkMode ? '#222' : 'wheat',
                            color: darkMode ? 'wheat' : '#222'}}>
                    <a className="nav-links" href="#portfolioId" style={{backgroundColor: darkMode ? '#222' : 'wheat',
                            color: darkMode ? 'wheat' : '#222'}}>Portfolio</a>
                    </li>
                    <li className="nav-item" style={{backgroundColor: darkMode ? '#222' : 'wheat',
                            color: darkMode ? 'wheat' : '#222'}}>
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

