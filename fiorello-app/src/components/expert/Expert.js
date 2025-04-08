import '../../assets/scss/_expert.scss'
import React, { useState, useEffect } from 'react';
import '../../assets/scss/_expert.scss'
import axios from 'axios';

function Expert() {
    const [experts, setExpert] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const baseURL = "https://localhost:7292";



    useEffect(() => {
        axios.get(`${baseURL}/api/Expert/GetALL`)
            .then((response) => {
                setExpert(response.data);
                setLoading(false);
            })
            .catch((err) => {
                setError('Error retrieving experts');
            });
    }, []);

    return (
        <div>
            {error && <p className="error">{error}</p>}
            {loading && <p className="loading">Loading...</p>}
            <section id="experts">
                <div className="container mt-2">
                    <div className="row py-5">
                        <div className="offset-lg-3 col-lg-6">
                            <div className="section-title mt-5">
                                <h1>Flower Experts</h1>
                                <p>A perfect blend of creativity, energy, communication, happiness and
                                    love. Let us arrange
                                    a smile for you.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row pb-5">

                        {experts.map((item) => {
                            return (
                                <div className="col-md-6 col-lg-3" key={item.id}>
                                    <div className="item text-center">
                                        <div className="img">
                                            <img src={item.image} alt={item.name} />
                                        </div>
                                        <div className="text mt-3">
                                            <h6>{item.name}</h6>
                                            <p>{item.position}</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Expert
