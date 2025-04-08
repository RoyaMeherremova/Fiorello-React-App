import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';
import '../../assets/scss/_say.scss'

function Say() {
    const [says, setSay] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const baseURL = "https://localhost:7292";

    useEffect(() => {
        axios.get(`${baseURL}/api/Say/GetALL`)
            .then((response) => {
                setSay(response.data);
                setLoading(false);
            })
            .catch((err) => {
                setError('Error retrieving says');
            });
    }, []);
    return (
        <>
            {error && <p className="error">{error}</p>}
            {loading && <p className="loading">Loading...</p>}
            <Carousel>
                {says.map((item) => (
                    <Carousel.Item>
                        <div className='item text-center'>
                            <div className='img d-flex justify-content-center'>
                                <img src={item.image} />
                            </div>
                            <div className='text pt-3 pb-5'>
                                <i>{item.description}</i>
                            </div>
                            <div className='author'>
                                <h6>{item.title}</h6>
                                <p>{item.position}</p>
                            </div>
                        </div>
                    </Carousel.Item>
                ))}
            </Carousel>
        </>
    )
}
export default Say