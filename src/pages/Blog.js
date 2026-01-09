import React, { useState, useEffect } from 'react';
import '../assets/scss/_blogPage.scss';
import { BiSolidQuoteAltRight } from "react-icons/bi";
import { BsLink45Deg } from "react-icons/bs";
import Pagination from 'react-bootstrap/Pagination';
import HaederBackground from '../components/HeaderBackground';
import { NavLink } from 'react-router-dom';

function Blog() {
    const [headerBackgrounds, setHeaderBackgrounds] = useState([]);
    const [blogs, setBlogs] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('/data/db.json'); // local JSON
                if (!res.ok) throw new Error('Failed to fetch JSON');
                const data = await res.json();

                setHeaderBackgrounds(data.headerBackgrounds || []);

                // Hər bloga images əlavə et
                const blogsWithImages = (data.blogs || []).map(blog => ({
                    ...blog,
                    images: (data.blogImages || []).filter(img => img.blogId === blog.id).map(img => ({
                        image: img.image,
                        isMain: true
                    }))
                }));
                setBlogs(blogsWithImages);
            } catch (err) {
                console.error(err);
            }
        };
        fetchData();
    }, []);

    const totalPages = Math.ceil(blogs.length / itemsPerPage);
    const indexOfLastBlog = currentPage * itemsPerPage;
    const indexOfFirstBlog = indexOfLastBlog - itemsPerPage;
    const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

    const handleNextPage = () => currentPage < totalPages && setCurrentPage(prev => prev + 1);
    const handlePreviousPage = () => currentPage > 1 && setCurrentPage(prev => prev - 1);

    const filteredData = headerBackgrounds.filter(item => item.key === 'BlogSection');

    return (
        <div>
            {filteredData.map((item, index) => (
                <div className="section-title mt-5" key={index}>
                    <HaederBackground value={item.value} desc={item.description} />
                </div>
            ))}

            <div id='blog-list'>
                <div className='container'>

                    <div className='d-flex flex-wrap' style={{ gap: '2%' }}>
                        {currentBlogs.map((item, idx) => {
                            const mainImage = item.images.find(img => img.isMain)?.image || "default.jpg";

                            // Post-content logic
                            let postContent = null;
                            if (idx === 1) postContent = {
                                title: 'Making beautiful flowers a part of your life.',
                                author: 'Jasmine White',
                                icon: <BiSolidQuoteAltRight className='icon' size={24} color="black" />
                            };
                            if (idx === 2) postContent = {
                                title: 'You bring the thought. We’ll bring the flowers.',
                                author: 'Jasmine White',
                                icon: <BiSolidQuoteAltRight className='icon' size={24} color="black" />
                            };
                            if (idx === 4) postContent = {
                                title: 'Creative solutions for all your floral needs.',
                                icon: <BsLink45Deg size={50} color="#f2dee2" style={{ position: 'relative', left: '36%' }} />
                            };

                            return (
                                <React.Fragment key={item.id}>
                                    <NavLink to={`/blogDetail/${item.id}`} style={{ color: 'black', textDecoration: 'none' }}>
                                        <div className={`blog-card ${idx === 3 ? 'blog-right' : ''}`} style={idx === 3 ? { position: 'relative', bottom: '184px' } : {}}>
                                            <div className='time'><span>{new Date(item.createdDate).toLocaleDateString()}</span></div>
                                            <img src={mainImage} alt={item.title} />
                                            <div>
                                                <h5>{item.title}</h5>
                                                <p>{item.description}</p>
                                            </div>
                                        </div>
                                    </NavLink>
                                    {postContent && (
                                        <div className='post-content'>
                                            <h4>{postContent.title}</h4>
                                            {postContent.author && <span>{postContent.author}</span>}
                                            {postContent.icon && <div>{postContent.icon}</div>}
                                        </div>
                                    )}
                                </React.Fragment>
                            )
                        })}
                    </div>

                    {/* Pagination */}
                    {totalPages > 1 && (
                        <div className="pagination d-flex justify-content-center align-items-center mt-4">
                            <Pagination>
                                <Pagination.Prev onClick={handlePreviousPage} disabled={currentPage === 1} />
                                {Array.from({ length: totalPages }, (_, i) => (
                                    <Pagination.Item
                                        key={i}
                                        active={i + 1 === currentPage}
                                        onClick={() => setCurrentPage(i + 1)}
                                    >
                                        {i + 1}
                                    </Pagination.Item>
                                ))}
                                <Pagination.Next onClick={handleNextPage} disabled={currentPage === totalPages} />
                            </Pagination>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Blog;
