import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "../assets/scss/_instagram.scss";

function Instagram() {
    const [instagrams, setInstagrams] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch("/data/db.json");
                if (!res.ok) throw new Error("JSON fetch failed");
                const json = await res.json();
                setInstagrams(json.instagram || []);
            } catch (err) {
                console.error(err);
                setError("Error retrieving instagrams");
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    if (loading) return <p className="loading text-center">Loading Instagram...</p>;
    if (error) return <p className="error text-center">{error}</p>;
    if (!instagrams.length) return <p className="text-center">No Instagram images available</p>;

    return (
        <div className="instagram">
            <section id="instagram-carousel">

                <OwlCarousel
                    className="owl-theme instagram"
                    loop
                    nav={false}
                    margin={10}
                    autoplay
                    autoplayTimeout={3000}
                    smartSpeed={600}
                    dots={false}
                    responsive={{
                        0: { items: 2 },
                        576: { items: 3 },
                        768: { items: 4 },
                        1200: { items: 6 }
                    }}
                >
                    {instagrams.map((item) => (
                        <div key={item.id} className="instagram-item position-relative">
                            <img className="img img-fluid" src={item.image} alt={`Instagram ${item.id}`} />
                            <a className="instagram-icon">
                                <FontAwesomeIcon icon={faInstagram} />
                            </a>
                        </div>
                    ))}
                </OwlCarousel>
                <div className="logo px-3 py-2 text-center">#FIORELLO</div>
            </section>
        </div>
    );
}

export default Instagram;
