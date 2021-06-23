import React from "react";
import "./stars.scss";
import Typed from "react-typed";

const Intro = () => {
  
    return (
      // <div id="home" className="intro route bg-image " style={{backgroundImage: "url("+bigImage+")"}}>
      <div id="home" className="intro route bg-image background">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>

        <div className="intro-content display-table">
          <div className="table-cell">
            <div className="container">
              <h1 className="intro-title mb-4">Hello, This is Muhammad</h1>
              <p className="intro-subtitle">
                <span className="text-slider-items"></span>
                <strong className="text-slider">
                  {/* <Typed
                    strings={[
                      "intro:",
                      "Full Stack Developer",
                      "Back End Developer",
                      "Front End Developer",
                      "Software Engineer"
                    ]}
                    typeSpeed={60}
                    backDelay={1100}
                    backSpeed={30}
                    loop
                  /> */}
                </strong>
              </p>
              {/* <p className="pt-3">
                <a
                  className="btn btn-primary btn js-scroll px-5 py-3"
                  href="#work"
                  role="button"
                >
                  View My Projects
                </a>
              </p> */}
            </div>
          </div>
        </div>
      </div>
    );
  }


export default Intro;
