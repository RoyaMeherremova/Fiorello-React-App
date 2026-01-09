import React, { useState, useEffect } from "react";
import '../assets/scss/_about.scss';
import Expert from '../components/Expert';
import Say from '../components/Say';
import AboutVideoComp from '../components/video/AboutVideoComp';

function About() {
    const [sectionBackgrounds, setSectionBackgrounds] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch("/data/db.json");
                if (!res.ok) throw new Error("JSON fetch failed");
                const json = await res.json();

                setSectionBackgrounds(json.sectionBackgrounds || []);
            } catch (err) {
                console.error("Error loading local JSON:", err);
                setError("Error loading section backgrounds");
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const filteredData = sectionBackgrounds.filter(item => item.key === 'AboutBackground');

    if (loading) return <p className="text-center">Loading About section...</p>;
    if (error) return <p className="text-center error">{error}</p>;

    return (
        <>
            {filteredData.length > 0 && filteredData.map((item, index) => (
                <section
                    key={index}
                    id='backgroundAbout'
                    style={{ backgroundImage: `url(${item.value})` }}
                >
                    <div className='aboutDesc mb-5'>
                        <p className='text-center size-3xl absolute'>About Us</p>
                        <p className='size-lg absolute'>Where flowers are our inspiration</p>
                    </div>
                </section>
            ))}

            <AboutVideoComp />

            <section style={{ backgroundColor: "#f8f8f8", marginTop: "6%", paddingBottom: "2%", marginBottom: "3%" }}>
                <Expert />
            </section>

            <Say />
        </>
    );
}

export default About;
