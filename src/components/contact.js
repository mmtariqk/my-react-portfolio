import React from 'react';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ContactForm from '../components/contact-form';
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import '../App.css';

function Contact() {
  return (
    <div className='container' id="contact">
        <Jumbotron fluid className="p-0 mb-0">
            <Container className="text-center">
                <div className="p-md-5">
                    <h1>Get in Touch With Me</h1>
                </div>
            </Container>
        </Jumbotron>

        <Container fluid className="shadow bg-light mb-0">
            <Container className="p-4">
                <Row>
                    <Col>
                        <Container>
                            <h4 style={{color: "#F06543,"}}>Contact Info</h4>
                            <p>
                                <a href="mailto:mmtariqk@gmail.com">
                                    <span className="pr-3">
                                        <FaEnvelope />
                                    </span>
                                    mmtariqk@gmail.com
                                </a>
                            </p>
                            
                            <p>
                                <a href="https://github.com/mmtariqk" target='_blank'>
                                    <span className="pr-3">
                                        <FaGithub />
                                    </span>
                                    mmtariqk
                                </a>
                            </p>
                            <p>
                                <a href="https://www.linkedin.com/in/mmtariqk/" target='_blank'>
                                    <span className="pr-3">
                                        <FaLinkedin />
                                    </span>
                                    Muhammad Tariq
                                </a>
                            </p>
                        </Container>
                    </Col>

                    <Col sm={12} md={6} lg={8} className="pt-sm-4 pt-lg-0">
                        <Container>
                            <h4 style={{color: "#F06543"}}>Send a Message</h4>
                            <ContactForm />
                        </Container>
                    </Col>
                </Row>
            </Container>
        </Container>
    </div>
  )
}

export default Contact;