import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../assets/scss/_blog.scss";

function Blog() {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const baseURL = "https://localhost:7292";

    useEffect(() => {
        axios.get(`${baseURL}/api/Blog/GetALL`)
            .then((response) => {
                setBlogs(response.data);
                setLoading(false);
            })
            .catch((err) => {
                setError("Error retrieving blogs");
                setLoading(false);
            });
    }, []);

    return (
        <div>
            <section id="blog">
                <div className="container">
                    <div className="row py-5">
                        <div className="offset-lg-3 col-lg-6">
                            <div className="blog-section-title">
                                <h1>From our Blog</h1>
                                <p>
                                    A perfect blend of creativity, energy, communication, happiness and
                                    love. Let us arrange a smile for you.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {loading && <p>Loading...</p>}
                        {error && <p className="error">{error}</p>}
                        {blogs.length === 0 && !loading && <p>No blogs available.</p>}
                        {blogs.map((item) => {
                            const mainImage = item.images.find((img) => img.isMain)?.image || "default.jpg";
                            console.log(mainImage);

                            return (
                                <div key={item.id} className="col-md-6 col-lg-4">
                                    <div className="item">
                                        <div className="img">
                                            <img src={mainImage} alt="Main" />
                                            <div>
                                                <span>{new Date(item.createdAt).toISOString().split('T')[0].split('-').reverse().join('/')}</span>

                                            </div>
                                        </div>
                                        <div className="text text-center">
                                            <h5>{item.title}</h5>
                                            <p>{item.description}</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Blog;
