import React, {useState} from 'react';

// import { Div } from "react-router-dom";

function Navbar(props) {
const [current, setcurrent] = useState("about")
    return (
        <div className='topnav'>
            <div className='topnav-left'>
                <a>
                <div
                    
                    className={ current==="about" ? "navbar__link--active" : "navbar__link"}  
                    onClick={()=> props.setCurrentPage({pagename: "about"})}
                    
                >
                 ABOUT  
                 </div>
                 </a> 
            </div>
            <div className='topnav-right'>
                <a>
                <div
                    
                    className={ current==="portfolio" ? "navbar__link--active" : "navbar__link"}  
                    onClick={()=> props.setCurrentPage({pagename: "portfolio"})}
                    
                >
                    PORTFOLIO
                </div>
                </a>

                <a>
                <div
                    
                    className={ current==="contact" ? "navbar__link--active" : "navbar__link"}  
                    onClick={()=> props.setCurrentPage({pagename: "contact"})}
                >
                    CONTACT
                </div>
                </a>
                <a>
                <div
                    
                    className={ current==="resume" ? "navbar__link--active" : "navbar__link"}  
                    onClick={()=> props.setCurrentPage({pagename: "resume"})}
                >
                    RESUME
                </div>
                </a>
            </div>
        </div>
    );
}

export default Navbar;
