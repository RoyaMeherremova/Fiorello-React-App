import React from 'react'
import backgroundAbout from '../assets/images/about/backgroundAbout.jpg'
import '../assets/scss/_about.scss'
import AboutComp from '../components/aboutComp/AboutComp'

function About() {
    return (
        <>
            <section id='backgroundAbout' style={{ backgroundImage: `url(${backgroundAbout})` }}>
                <div className='aboutDesc mb-5'>
                    <p className='text-center size-3xl absolute'>About Us</p>
                    <p className='size-lg absolute'>Where flowers are our inspiration </p>
                </div>
            </section>
            <AboutComp />
        </>
    )
}

export default About
