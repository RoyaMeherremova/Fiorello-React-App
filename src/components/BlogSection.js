import React, { useState, useEffect } from "react";
import "../assets/scss/_blog.scss";
import HaederBackground from "../components/HeaderBackground";

function BlogSection() {
    const [blogs, setBlogs] = useState([]);
    const [blogImages, setBlogImages] = useState([]);
    const [headerBackgrounds, setHeaderBackgrounds] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch("/data/db.json");
                if (!res.ok) throw new Error("Network response was not ok");

                const json = await res.json();

                setBlogs(json.blogs || []);
                setBlogImages(json.blogImages || []);
                setHeaderBackgrounds(json.headerBackgrounds || []);
            } catch (err) {
                console.error(err);
                setError("Blog məlumatları yüklənmədi");
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) return <p className="loading">Loading...</p>;
    if (error) return <p className="error">{error}</p>;

    const filteredHeader = headerBackgrounds.filter(
        item => item.key === "Blog"
    );

    const formatDate = (dateString) => {
        const d = new Date(dateString);
        const day = String(d.getDate()).padStart(2, "0");
        const month = String(d.getMonth() + 1).padStart(2, "0");
        const year = d.getFullYear();
        return `${day}.${month}.${year}`;
    };

    return (
        <section id="blog">
            <div className="container">

                {/* HEADER */}
                <div className="row py-5">
                    <div className="offset-lg-3 col-lg-6">
                        {filteredHeader.map((item, index) => (
                            <HaederBackground
                                key={index}
                                value={item.value}
                                desc={item.description}
                            />
                        ))}
                    </div>
                </div>

                {/* BLOG LIST */}
                <div className="row">
                    {blogs.slice(0, 3).map(blog => {
                        const image =
                            blogImages.find(img => img.blogId === blog.id)
                                ?.image || "/images/default.jpg";

                        return (
                            <div key={blog.id} className="col-md-6 col-lg-4">
                                <div className="item">
                                    <div className="img">
                                        <img src={image} alt={blog.title} />
                                        <div className="author">
                                            <span>{formatDate(blog.createdDate)}</span>
                                        </div>
                                    </div>

                                    <div className="text text-center">
                                        <h5>{blog.title}</h5>
                                        <p>{blog.description}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}

export default BlogSection;
