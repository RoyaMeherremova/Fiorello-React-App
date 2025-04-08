import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import '../../assets/scss/_instagram.scss'
function Instagram() {
    const [instagrams, setInstagram] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const baseURL = "https://localhost:7292";

    useEffect(() => {
        axios.get(`${baseURL}/api/Instagram/GetALL`)
            .then((response) => {
                setInstagram(response.data);
                setLoading(false);
            })
            .catch((err) => {
                setError('Error retrieving instagrams');
            });
    }, []);
    return (
        <div className='instagram'>
            {error && <p className="error">{error}</p>}
            {loading && <p className="loading">Loading...</p>}
            <section id='instagram-carousel'>
                <OwlCarousel items={4}
                    className="owl-theme"
                    loop
                    nav
                    margin={8} autoplay={true} >
                    {instagrams.map((item) => (
                        <div className='instagram-item'>
                            <img className="img img-fluid" src={item.image} />
                            <a><FontAwesomeIcon style={{ marginBottom: "1px" }} icon={faInstagram}></FontAwesomeIcon></a>
                        </div>
                    ))}
                </OwlCarousel>
                <div className='logo px-3 py-2'>
                    #FIORELLO
                </div>
            </section>
        </div>
    )
}

export default Instagram
