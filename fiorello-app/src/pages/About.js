import React from 'react'
import backgroundAbout from '../assets/images/about/backgroundAbout.jpg'
import '../assets/scss/_about.scss'
import Expert from '../components/expert/Expert'
import Say from '../components/say/Say'
import AboutVideoComp from '../components/video/AboutVideoComp'

function About() {
    return (
        <>
            <section id='backgroundAbout' style={{ backgroundImage: `url(${backgroundAbout})` }}>
                <div className='aboutDesc mb-5'>
                    <p className='text-center size-3xl absolute'>About Us</p>
                    <p className='size-lg absolute'>Where flowers are our inspiration </p>
                </div>
            </section>
            <AboutVideoComp />
            <section style={{ backgroundColor: "#f8f8f8", marginTop: "6%", paddingBottom: "2%", marginBottom: "3%" }}>
                <Expert />
            </section>

            <Say />

        </>
    )
}

export default About
