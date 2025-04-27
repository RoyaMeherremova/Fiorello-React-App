import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../assets/scss/_blogPage.scss';
import { BiSolidQuoteAltRight } from "react-icons/bi";
import Pagination from 'react-bootstrap/Pagination';
import { BsLink45Deg } from "react-icons/bs";
import HaederBackground from '../components/HeaderBackground';

function Blog() {
    const [headerBackgrounds, setHeaderBackgrounds] = useState([]);
    const [blogs, setBlogs] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    const baseURL = "https://localhost:7292";
    const itemsPerPage = 6;

    useEffect(() => {
        axios.get(`${baseURL}/api/HeaderBackground/GetALL`)
            .then((response) => {
                setHeaderBackgrounds(response.data);
            });
    }, []);

    useEffect(() => {
        axios.get(`${baseURL}/api/Blog/GetALL`)
            .then((response) => {
                setBlogs(response.data);
            });
    }, []);

    const indexOfLastBlog = currentPage * itemsPerPage;
    const indexOfFirstBlog = indexOfLastBlog - itemsPerPage;
    const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

    const totalPages = Math.ceil(blogs.length / itemsPerPage);

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(prev => prev + 1);
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(prev => prev - 1);
        }
    };

    const filteredData = headerBackgrounds.filter(item => item.key === 'BlogSection');

    return (
        <div>
            {filteredData.length > 0 && filteredData.map((item, index) => (
                <div className="section-title mt-5" key={index}>
                    <HaederBackground value={item.value} desc={item.description} />
                </div>
            ))}

            <div id='blog-list'>
                <div className='container'>

                    <div className='d-flex' style={{ gap: '2%' }}>
                        {currentBlogs.slice(0, 2).map((item) => {
                            const mainImage = item.images.find((img) => img.isMain)?.image || "default.jpg";
                            return (
                                <div className='blog-card' key={item.id}>
                                    <div className='time'><span>{new Date(item.createdDate).toLocaleDateString()}</span></div>
                                    <img src={mainImage} alt={item.title} />
                                    <div>
                                        <h5>{item.title}</h5>
                                        <p>{item.description}</p>
                                    </div>
                                </div>
                            );
                        })}

                        <div className='post-content'>
                            <h4>Making beautiful flowers a part of your life.</h4>
                            <span>Jasmine White</span>
                            <div>
                                <BiSolidQuoteAltRight className='icon' size={24} color="black" />
                            </div>
                        </div>
                    </div>

                    <div className='d-flex' style={{ gap: '2%' }}>
                        {currentBlogs.slice(2, 3).map((item) => {
                            const mainImage = item.images.find((img) => img.isMain)?.image || "default.jpg";
                            return (
                                <div className='blog-card' key={item.id}>
                                    <div className='time'><span>{new Date(item.createdDate).toLocaleDateString()}</span></div>
                                    <img src={mainImage} alt={item.title} />
                                    <div>
                                        <h5>{item.title}</h5>
                                        <p>{item.description}</p>
                                    </div>
                                </div>
                            );
                        })}
                        <div className='post-content'>
                            <h4>You bring the thought. We’ll bring the flowers.</h4>
                            <span>Jasmine White</span>
                            <div>
                                <BiSolidQuoteAltRight className='icon' size={24} color="black" />
                            </div>
                        </div>

                        {currentBlogs.slice(3, 4).map((item) => {
                            const mainImage = item.images.find((img) => img.isMain)?.image || "default.jpg";
                            return (
                                <div className='blog-card blog-right' style={{ position: 'relative', bottom: '184px' }} key={item.id}>
                                    <div className='time'><span>{new Date(item.createdDate).toLocaleDateString()}</span></div>
                                    <img src={mainImage} alt={item.title} />
                                    <div>
                                        <h5>{item.title}</h5>
                                        <p>{item.description}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    <div className='d-flex' style={{ gap: '2%', marginTop: '6%' }}>
                        <div className='post-content'>
                            <h4>Creative solutions for all your floral needs.</h4>
                            <div>
                                <BsLink45Deg size={50} color="#f2dee2" style={{ position: 'relative', left: '36%' }} />
                            </div>
                        </div>

                        <div className='d-flex' style={{ position: 'relative', bottom: '240px', gap: '2%' }}>
                            {currentBlogs.slice(4, 5).map((item) => {
                                const mainImage = item.images.find((img) => img.isMain)?.image || "default.jpg";
                                return (
                                    <div className='blog-card' key={item.id}>
                                        <div className='time'><span>{new Date(item.createdDate).toLocaleDateString()}</span></div>
                                        <img src={mainImage} alt={item.title} />
                                        <div>
                                            <h5>{item.title}</h5>
                                            <p>{item.description}</p>
                                        </div>
                                    </div>
                                );
                            })}
                            {currentBlogs.slice(5, 6).map((item) => {
                                const mainImage = item.images.find((img) => img.isMain)?.image || "default.jpg";
                                return (
                                    <div className='blog-card' key={item.id}>
                                        <div className='time'><span>{new Date(item.createdDate).toLocaleDateString()}</span></div>
                                        <img src={mainImage} alt={item.title} />
                                        <div>
                                            <h5>{item.title}</h5>
                                            <p>{item.description}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Pagination */}
                    {totalPages > 1 && (
                        <div className="paginaton d-flex justify-content-center align-items-center mt-4">
                            <Pagination>
                                {currentPage > 1 && (
                                    <Pagination.Prev style={{ cursor: 'pointer', fontSize: '24px' }} onClick={handlePreviousPage} disabled={currentPage === 1} />
                                )}

                                {Array.from({ length: totalPages }, (_, i) => (
                                    <Pagination.Item
                                        key={i}
                                        active={i + 1 === currentPage}
                                        onClick={() => setCurrentPage(i + 1)}
                                    >
                                        {i + 1}
                                    </Pagination.Item>
                                ))}
                                {currentPage < totalPages && (
                                    <Pagination.Next
                                        onClick={handleNextPage}
                                        disabled={currentPage === totalPages}
                                        style={{ cursor: 'pointer', fontSize: '24px' }}
                                    >
                                    </Pagination.Next>
                                )}

                            </Pagination>

                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Blog;
