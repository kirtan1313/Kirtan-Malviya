import React from 'react';
import Slider from 'react-slick';
import './Banner.css';
import About from '../About/About';
import Services from '../Services/Services';
import CustomCursor from '../../Curser/CustomCursor';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import SocialMedia from '../SocialMedia/SocialMedia';
// import fullstack from '../../public/images/fullstack-dev-1.jpeg';

export default function Home() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (

        <>
            <section>
                <CustomCursor />
            </section>
            <section className='banner'>
                {/* <SocialMedia/> */}
                <div className='effect-wrap'>
                    <div className="effect effect-1">
                        {[...Array(20)].map((_, index) => (
                            <div key={index}>.</div>
                        ))}
                    </div>
                    <div className='effect effect-2'></div>
                    <div className='effect effect-3'></div>
                </div>
                <div>
                    <a href='/' className='logo'>
                        <img src="/imags/k-name-logo.png" alt="k-logo" />
                    </a>
                </div>
                <div className="landing-text d-flex justify-content-center align-items-center flex-column">
                    <div>
                        <h1 className="styled-heading">Kirtan Malviya</h1>
                    </div>
                    <p className='text-white'>
                        I'm a Passionate MERN Stack Developer:  <i>Building Scalable Solutions for Seamless User Experiences</i>
                    </p>
                </div>
            </section>
            <section>
                <About />
            </section>
            <section>
            <Services />
            </section>
            <section>
                <Projects />
            </section>
            <section>
                <Contact />
            </section>
            <Footer />

        </>

    );
}


