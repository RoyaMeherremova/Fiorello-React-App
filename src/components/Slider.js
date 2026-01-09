import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../assets/scss/_slider.scss';

function Slider() {
    const [sliders, setSliders] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('/data/db.json');
                if (!res.ok) throw new Error('JSON fetch failed');
                const json = await res.json();

                setSliders(json.sliders || []);
            } catch (err) {
                console.warn('Local JSON fetch failed:', err);
                setSliders([]);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);


    if (loading) return <p>Loading sliders...</p>;
    if (!sliders.length) return <p>No sliders available</p>;

    return (
        <section id="slider">
            <Carousel>
                {sliders.map(item => (
                    <Carousel.Item key={item.id}>
                        <img
                            className="d-block w-100"
                            src={item.image}
                            alt={item.title}
                        />
                        <Carousel.Caption>
                            <h1>{item.title}</h1>
                            <p>{item.description}</p>
                            {item.signatureImage && (
                                <img src={item.signatureImage} alt="Signature" />
                            )}
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>
        </section>
    );
}

export default Slider;
