import React, { useState, useEffect } from "react";
import '../assets/scss/_subscribe.scss';

function Subscribe() {
    const [sectionBackgrounds, setSectionBackgrounds] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBackgrounds = async () => {
            try {
                const res = await fetch('/data/db.json');
                if (!res.ok) throw new Error('Network response was not ok');
                const json = await res.json();

                setSectionBackgrounds(json.sectionBackgrounds || []);
            } catch (err) {
                console.error('Error loading section backgrounds:', err.message);
                setError('Error loading section backgrounds: ' + err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchBackgrounds();
    }, []);

    if (loading) return <p className="loading">Loading...</p>;
    if (error) return <p className="error">{error}</p>;

    const filteredData = sectionBackgrounds.filter(item => item.key === 'HomSubscribe');

    return (
        <>
            {filteredData.map((item) => (
                <section
                    id="subscribe"
                    key={item.key}
                    style={{
                        backgroundImage: `url(${item.value})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat'
                    }}
                >
                    <div className="container py-5">
                        <div className="row py-5">
                            <div className="col-12">
                                <div className="content text-center py-5">
                                    <h3>Join The Colorful Bunch!</h3>
                                    <form className="form-group d-flex justify-content-center flex-wrap mt-5">
                                        <input type="email" placeholder="Email Address" />
                                        <button type="submit" className="btn btn-danger btn-lg rounded-0 px-5 mt-3 mt-sm-0">
                                            Subscribe
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            ))}
        </>
    );
}

export default Subscribe;
