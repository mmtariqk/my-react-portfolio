import React from 'react';
import Avatar from '../assets/images/avatar.png';
import BerkeleyLogo from '../assets/images/berkeley.png';
import PittsburghLogo from '../assets/images/pittsburgh.png';
import CarletonLogo from '../assets/images/carleton.png';
import '../App.css';

const About = () => {
    return (
        <React.Fragment>
            <div className='container' id="about">
                <div className='row'>
                    <div className='col'>
                        <div className='card'>

                            <div className='card-body'>
                                <div className="row abstract-back">
                                    <img className='avatar' src={Avatar} />
                                </div>
                            </div>

                            <div className='card-body'>
                                <div className="row">
                                    <p className='p-about'>
                                        Meticulous web developer with over 5 years of frontend experience and passion for responsive website design and a firm believer in the mobile-first-approach. W3C certified. Implemented new responsive website approach which increased mobile traffic by 25%
                                        Well versed and technical expertise in Computer Science fundamentals, Javascript, ReactJS, Redux, VueJS, Vuex, NodeJS, MongoDB, CSS,
                                        HTML and other technologies.
                                    </p>
                                </div>
                            </div>

                            <div className="modal-footer" />

                            <div className='card-body'>
                                <h2 className='edu'>Education</h2>
                                <br />

                                <div className='grid-container-profile'>
                                    <div className='grid-item'>
                                        <div className='title-uni'>University Of California, Berkeley</div>
                                        <div className='title-concentration'>Full Stack Web Development</div>
                                    </div>

                                    <div className='grid-item'>
                                        <a href='https://www.berkeley.edu/' target='_blank'><img className='university-logo' src={BerkeleyLogo} /></a>
                                    </div>

                                    <div className="grid-item">
                                        <div className='title-uni'>CECOS University</div>
                                        <div className='title-concentration'>Master of Business Administration Major in IT</div>
                                    </div>

                                    <div className="grid-item">
                                        <a href='https://www.cecos.edu.pk/' target='_blank'><img className='university-logo' src={PittsburghLogo} /></a>
                                    </div>

                                    <div className="grid-item">
                                        <div className='title-uni'>University of Peshawar</div>
                                        <div className='title-concentration'>Bachelor Major in Math</div>
                                    </div>

                                    <div className="grid-item">
                                        <a href='http://uop.edu.pk/' target='_blank'><img className='university-logo' src={CarletonLogo} /></a>
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

export default About;
