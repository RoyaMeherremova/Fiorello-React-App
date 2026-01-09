import React, { useState, useEffect } from 'react';
import '../assets/scss/_expert.scss';
import HaederBackground from '../components/HeaderBackground';

function Expert() {
    const [experts, setExperts] = useState([]);
    const [headerBackgrounds, setHeaderBackgrounds] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('/data/db.json'); // db.json public/data içinde olmalı
                if (!res.ok) throw new Error('Network response was not ok');
                const json = await res.json();

                // HeaderBackground ve Experts tek JSON içinde
                setHeaderBackgrounds(json.headerBackgrounds || []);
                setExperts(json.experts || []);
            } catch (err) {
                console.error('Error loading JSON:', err);
                setError('Error loading data from JSON');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    // Sadece Expert key’li headerBackgroundları filtrele
    const filteredData = headerBackgrounds.filter(item => item.key === 'Expert');

    if (loading) return <p className="loading">Loading...</p>;
    if (error) return <p className="error">{error}</p>;

    return (
        <section id="experts">
            <div className="container mt-2">
                <div className="row py-5">
                    <div className="offset-lg-3 col-lg-6">
                        {filteredData.map((item, index) => (
                            <HaederBackground
                                key={index}
                                value={item.value}
                                desc={item.description}
                            />
                        ))}
                    </div>
                </div>

                <div className="row pb-5">
                    {experts.map((item) => (
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
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Expert;
