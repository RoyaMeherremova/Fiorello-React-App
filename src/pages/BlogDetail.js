import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import HaederBackground from '../components/HeaderBackground';
import '../assets/scss/_blogDetail.scss';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function BlogDetail() {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);
    const [headerBackgrounds, setHeaderBackgrounds] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const baseURL = "https://localhost:7292";
    const [categories, setCategories] = useState([]);
    const [blogs, setBlogs] = useState([]);

    // Bütün blogları götür
    useEffect(() => {
        axios.get(`${baseURL}/api/Blog/GetALL`)
            .then((response) => {
                setBlogs(response.data);
                setLoading(false);
            })
            .catch(() => {
                setError("Error retrieving blogs");
                setLoading(false);
            });
    }, []);

    // Kategoriyalar
    useEffect(() => {
        axios.get(`${baseURL}/api/Category/GetALL`)
            .then((response) => {
                setCategories(response.data);
            })
            .catch(() => {
                setError("Error retrieving categories");
            });
    }, []);

    // Blog detail
    useEffect(() => {
        if (!id) return;
        axios.get(`${baseURL}/api/Blog/GetById/${id}`)
            .then(response => {
                console.log("Blog data:", response.data);
                setBlog(response.data);
                setLoading(false);
            })
            .catch(err => {
                setError(err.message || "Xəta baş verdi");
                setLoading(false);
            });
    }, [id]);

    // Header background
    useEffect(() => {
        axios.get(`${baseURL}/api/HeaderBackground/GetALL`)
            .then(response => {
                setHeaderBackgrounds(response.data);
            })
            .catch(err => {
                console.error("Header background error:", err);
            });
    }, []);

    const filteredData = headerBackgrounds.filter(item => item.key === "BlogDetail");

    if (loading) return <p className="text-center mt-5">Yüklənir...</p>;
    if (error) return <p className="text-danger text-center mt-5">{error}</p>;

    return (
        <div>
            {/* Header Background */}
            {filteredData.map((item, index) => (
                <div className="section-title mt-5" key={item.id || index}>
                    <HaederBackground value={item.value} desc={item.description} />
                </div>
            ))}

            <div className="container" style={{ paddingLeft: "40px" }}>
                <div className="d-flex">
                    {/* Main blog image */}
                    <div className="photo mb-4" style={{ width: "960px", height: "600px" }}>
                        {blog?.blogImages?.find(img => img.isMain) && (
                            <img
                                src={blog.blogImages.find(img => img.isMain).image}
                                alt={blog?.title}
                                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                            />
                        )}
                    </div>

                    {/* Right side */}
                    <div className="right-side">
                        <input className="input-area" placeholder="Search here" />
                        <FontAwesomeIcon className="icon-glass" icon={faMagnifyingGlass} rotation={90} />

                        {/* Categories */}
                        <div className="category">
                            <h6>CATEGORIES</h6>
                            <ul>
                                {categories.map((item) => (
                                    <li key={item.id}>{item.name}</li>
                                ))}
                            </ul>
                        </div>

                        {/* Recent posts */}
                        <div className="recent">
                            <h6>RECENT POSTS</h6>
                            {blogs.slice(0, 3).map((item) => {
                                const mainImage = item.images?.find((img) => img.isMain)?.image || "default.jpg";

                                return (
                                    <div className="d-flex" key={item.id}>
                                        <img src={mainImage} alt={item.title} style={{ width: "80px", height: "80px", objectFit: "cover" }} />
                                        <div style={{ marginLeft: "10px" }}>
                                            <h6>{item.title}</h6>
                                            <span>
                                                {item.createdAt
                                                    ? new Date(item.createdAt).toISOString().split("T")[0].split("-").reverse().join(".")
                                                    : "Tarix yoxdur"}
                                            </span>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                    </div>
                </div>
            </div>

            {/* Blog content */}
            <div className="container">
                <div>
                    <h2 className="mb-3">{blog?.title}</h2>
                    <p className="mb-3-p">{blog?.description}</p>
                    <div className="wpb_wrapper">
                        <blockquote className="title-p">
                            <p>
                                “Let VanderSalm’s-Flipse be your first choice for flowers.
                                Creative solutions for all your floral needs.”
                            </p>
                        </blockquote>
                    </div>
                </div>
            </div>
            <div className='container'>
                <p>{blog?.description}</p>
                <div className="image-gallery">
                    {blog?.blogImages?.map((item, index) => (
                        <div key={index}>
                            <img src={item.image} alt={`Image ${index + 1}`} />
                        </div>
                    ))}
                </div>
            </div>

        </div>

    );
}

export default BlogDetail;
