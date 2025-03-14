import React, { useState, useEffect } from 'react';
import axios from "axios";
import Carousel from 'react-bootstrap/Carousel';
import '../../assets/scss/_slider.scss';

function Slider() {
    const [sliders, setSliders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const baseURL = "https://localhost:7292";

    useEffect(() => {
        axios.get(`${baseURL}/api/Slider/GetALL`)
            .then((response) => {
                setSliders(response.data);
                setLoading(false);
            })
            .catch((err) => {
                setError('Ошибка при получении данных');
                setLoading(false);
            });
    }, []);

    return (
        <section id='slider'>
            {loading && <p>Loading...</p>}
            {error && <p className="error">{error}</p>}
            {sliders.length === 0 && !loading && <p>No sliders available.</p>}
            <Carousel>
                {sliders.map((item, index) =>
                (<Carousel.Item fade>
                    <img
                        className="d-block w-100"
                        src={item.image}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <div key={index}>
                            <h1>{item.title.split(" ").map((word, index) => (word.toLowerCase() === "flowers" ? (<span key={index} className='red-word'>{word} </span>) : (word + " ")))}</h1>
                            <p>{item.description}</p>
                            <img
                                className="d-block w-100 logo"
                                src={item.signatureImage}
                                alt="First slide"
                            />
                        </div>
                    </Carousel.Caption>

                </Carousel.Item>))}
            </Carousel>




        </section>

    );
}

export default Slider;
