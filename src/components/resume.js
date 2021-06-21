import React from 'react';
import Logo from '../assets/images/logo.png';
import JqueryLogo from '../assets/images/jquery-logo.png';
import BootstrapLogo from '../assets/images/bootstrap-logo.png';
import ReduxLogo from '../assets/images/redux-logo.png';
import MernLogo from '../assets/images/mern-logo.png';
import WebpackLogo from '../assets/images/webpack-logo.png';
import VueLogo from '../assets/images/vuejs-logo.png';
import HandlebarsLogo from '../assets/images/handlebars-logo.png';
import SqlLogo from '../assets/images/sql-logo.png';
import MongoLogo from '../assets/images/mongodb-logo.png';
import '../App.css';
import '../portfolio.css';

const Resume = () => {
    return (
        <React.Fragment>
            <div className='container' id="resume">
                <div className='row'>
                    <div className='col'>
                        <div className='card' style={{backgroundColor: "rgb(163, 219, 236)"}}>
                            <div className="header">
                                <h3>Download Resume: <a href="https://drive.google.com/file/d/1QW2iN978aDeAImVxJMThKHzy_-fG6pE3/view?usp=sharing">Muhammad Tariq</a>
                                </h3>
                            </div>

                            <div className="modal-footer"/>

                            <div className="header">
                                <h3>Skills</h3>
                            </div>
                            <div className="modal-footer"/>

                            <div className='card-body'>
                                <div className="row">
                                    <div className='code'>Computer Science Fundamentals</div>
                                </div>
                                <div className='grid-container-skills'>
                                    <div className='grid-item-skills'>
                                        <p className='p-about'>Data Structures</p>
                                    </div>

                                    <div className='grid-item-skills'>
                                        <p className='p-about'>Algorithm</p>
                                    </div>

                                    <div className='grid-item-skills'>
                                        <p className='p-about'>Design Patterns</p>
                                    </div>
                                </div>
                            </div>

                            <div className="modal-footer" />

                            <div className='card-body'>
                                <div className="row">
                                    <div className='code'>Technologies</div>
                                </div>

                                <div className='grid-container-skills'>
                                    <div className='grid-item-skills'>
                                        <img src={Logo} className='img-skills' />
                                    </div>

                                    <div className='grid-item-skills'>
                                        <img src={MernLogo} className='img-skills' />
                                    </div>

                                    <div className='grid-item-skills'>
                                        <img src={ReduxLogo} className='img-skills' />
                                    </div>

                                    <div className='grid-item-skills'>
                                        <img src={JqueryLogo} className='img-skills' />
                                    </div>

                                    <div className='grid-item-skills'>
                                        <img src={WebpackLogo} className='img-skills' />
                                    </div>

                                    <div className='grid-item-skills'>
                                        <img src={BootstrapLogo} className='img-skills' />
                                    </div>

                                    <div className='grid-item-skills'>
                                        <img src={VueLogo} className='img-skills' />
                                    </div>

                                    <div className='grid-item-skills'>
                                        <img src={HandlebarsLogo} className='img-skills' />
                                    </div>

                                    <div className='grid-item-skills'>
                                        <img src={SqlLogo} className='img-skills' />
                                    </div>

                                    <div className='grid-item-skills'>
                                        <img src={MongoLogo} className='img-skills' />
                                    </div>
                                </div>
                            </div>

                            <div className="modal-footer" />

                            <div className='card-body'>
                                <div className="row">
                                    <div className='code'>Quality Assurance</div>
                                </div>

                                <div className='grid-container-skills'>
                                    <div className='grid-item-skills'>
                                        <p className='p-about'>Jest & Enzyme (Unit Testing)</p>
                                    </div>

                                    <div className='grid-item-skills'>
                                        <p className='p-about'>Cypress (End-to-End Testing)</p>
                                    </div>
                                </div>
                            </div>

                            <div className="modal-footer" />

                            <div className='card-body'>
                                <div className="row">
                                    <div className='code'>Project Management</div>
                                </div>

                                <div className='grid-container-skills'>
                                    <div className='grid-item-skills'>
                                        <p className='p-about'>Agile Principles and Practices</p>
                                    </div>

                                    <div className='grid-item-skills'>
                                        <p className='p-about'>Project Schedule and Risk Management</p>
                                    </div>

                                    <div className='grid-item-skills'>
                                        <p className='p-about'>Project Scope and Quality Management</p>
                                    </div>

                                    <div className='grid-item-skills'>
                                        <p className='p-about'>Software Project Management</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Resume;
