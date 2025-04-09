import React, { useState, useEffect } from "react";
import axios from "axios";
import '../assets/scss/_about.scss'
import Expert from '../components/expert/Expert'
import Say from '../components/say/Say'
import AboutVideoComp from '../components/video/AboutVideoComp'

function About() {
    const [sectionBackgrounds, setSectionBackgrounds] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const baseURL = "https://localhost:7292";
    useEffect(() => {
        axios.get(`${baseURL}/api/SectionBackground/GetALL`)
            .then((response) => {
                setSectionBackgrounds(response.data);
                setLoading(false);
            })
            .catch((err) => {
                setError('Error retrieving sectionBackgrounds');
            });
    }, []);
    const filteredData = sectionBackgrounds.filter(item => item.key === 'AboutBackground');
    return (
        <>
            {filteredData.length > 0 &&
                filteredData.map((item, index) => (
                    <section id='backgroundAbout' style={{ backgroundImage: `url(${item.value})` }}>
                        <div className='aboutDesc mb-5'>
                            <p className='text-center size-3xl absolute'>About Us</p>
                            <p className='size-lg absolute'>Where flowers are our inspiration </p>
                        </div>
                    </section>
                ))
            }
            <AboutVideoComp />
            <section style={{ backgroundColor: "#f8f8f8", marginTop: "6%", paddingBottom: "2%", marginBottom: "3%" }}>
                <Expert />
            </section>
            <Say />
        </>
    )
}

export default About
