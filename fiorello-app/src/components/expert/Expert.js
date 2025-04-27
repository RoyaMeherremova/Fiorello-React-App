import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../assets/scss/_expert.scss'
import HaederBackground from '../HeaderBackground';
function Expert() {
    const [experts, setExpert] = useState([]);
    const [headerBackgrounds, setHeaderBackgrounds] = useState([]);
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
    useEffect(() => {
        axios.get(`${baseURL}/api/HeaderBackground/GetALL`)
            .then((response) => {
                setHeaderBackgrounds(response.data);
                setLoading(false);
            })
            .catch((err) => {
                setError('Error retrieving HeaderBackgrounds');
            });
    }, []);

    const filteredData = headerBackgrounds.filter(item => item.key === 'Expert');
    return (
        <div>
            {error && <p className="error">{error}</p>}
            {loading && <p className="loading">Loading...</p>}
            <section id="experts">
                <div className="container mt-2">
                    <div className="row py-5">
                        <div className="offset-lg-3 col-lg-6">
                            {filteredData.length > 0 &&
                                filteredData.map((item, index) => (
                                    <HaederBackground value={item.value} desc={item.description} />
                                ))
                            }
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
