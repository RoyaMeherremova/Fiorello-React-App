import React, { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import "../assets/scss/_say.scss";

function Say() {
    const [says, setSays] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch("/data/db.json"); // Local JSON
                if (!res.ok) throw new Error("JSON fetch failed");

                const json = await res.json();
                setSays(json.say || []); // 'say' array JSON-da
            } catch (err) {
                console.error("Local JSON fetch failed:", err);
                setError("Say məlumatları yüklənmədi");
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) return <p className="loading text-center">Loading says...</p>;
    if (error) return <p className="error text-center">{error}</p>;
    if (!says.length) return <p className="text-center">No says available</p>;

    return (
        <section id="say">
            <Carousel interval={5000} pause="hover">
                {says.map((item) => (
                    <Carousel.Item key={item.id}>
                        <div className="item text-center">
                            <div className="img d-flex justify-content-center">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="rounded-circle"
                                />
                            </div>
                            <div className="text pt-3 pb-3">
                                <i>{item.text}</i>
                            </div>
                            <div className="author">
                                <h6>{item.name}</h6>
                                <p>{item.position}</p>
                            </div>
                        </div>
                    </Carousel.Item>
                ))}
            </Carousel>
        </section>
    );
}

export default Say;
