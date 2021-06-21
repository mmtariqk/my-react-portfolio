import React, {useState} from 'react';

// import { Div } from "react-router-dom";

function Navbar() {
const [current, setcurrent] = useState("about")
    return (
        <div className='topnav'>
            <div className='topnav-left'>
                <a href="#about">
                <div
                    activeClassName="navbar__link--active"
                    className={ current==="about" ? "navbar__link--active" : "navbar__link"}  
                    onClick={()=> setcurrent("about")}
                    
                >
                 ABOUT  
                 </div>
                 </a> 
            </div>
            <div className='topnav-right'>
                <a href="#portfolio">
                <div
                    activeClassName="navbar__link--active"
                    className={ current==="portfolio" ? "navbar__link--active" : "navbar__link"}  
                    onClick={()=> setcurrent("portfolio")}
                    
                >
                    PORTFOLIO
                </div>
                </a>

                <a href="#contact">
                <div
                    activeClassName="navbar__link--active"
                    className={ current==="contact" ? "navbar__link--active" : "navbar__link"}  
                    onClick={()=> setcurrent("contact")}
                >
                    CONTACT
                </div>
                </a>
                <a href="#resume">
                <div
                    activeClassName="navbar__link--active"
                    className={ current==="resume" ? "navbar__link--active" : "navbar__link"}  
                    onClick={()=> setcurrent("resume")}
                >
                    RESUME
                </div>
                </a>
            </div>
        </div>
    );
}

export default Navbar;