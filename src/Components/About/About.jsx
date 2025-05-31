import React from 'react';
import './About.css';
import { section } from 'framer-motion/client';

export default function About() {
    return (

        <section className="about-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-lg-6 d-flex justify-content-center align-items-center">
                        <div className="about-content">
                            <h2 className="services-heading">
                                About<span className="highlight"> Me</span>
                                <div className="underline"></div>
                            </h2>
                            <p className="about-description">
                                I am a passionate and experienced Full-Stack Developer specializing in creating seamless, responsive, and scalable web applications. With expertise in both frontend and backend development, I ensure that every project I handle delivers a user-friendly interface coupled with robust backend functionality.
                            </p>
                            {/* <p className="about-description">
                                With a strong foundation in both front-end and back-end technologies, I strive to deliver solutions that make a real impact.
                            </p> */}
                            <a href="#contact" className="btn">Contact Me</a>
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-6">
                        <div className="about-image">
                            <img src="/imags/myphoto.jpg" alt="About Me" />
                        </div>
                    </div>
                </div>


            </div>
        </section>
    );
}
