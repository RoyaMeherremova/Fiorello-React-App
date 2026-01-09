import React, { useState, useEffect, useRef } from 'react';
import '../assets/scss/_shop.scss';
import Pagination from 'react-bootstrap/Pagination';
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import Product from '../components/common/Product';
import HeaderBackground from '../components/HeaderBackground';

export default function Shop() {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [backgrounds, setBackgrounds] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [selectedCategoryId, setSelectedCategoryId] = useState(null);
    const [sortOrder, setSortOrder] = useState('low-to-high');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);

    const [minPrice, setMinPrice] = useState(150);
    const [maxPrice, setMaxPrice] = useState(800);

    const range = useRef(null);
    const itemsPerPage = 6;

    // Fetch local JSON
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('/data/db.json');
                if (!res.ok) throw new Error('JSON fetch failed');
                const data = await res.json();

                setProducts(data.products || []);
                setCategories(data.categories || []);
                setBackgrounds(data.headerBackgrounds || []);
            } catch (err) {
                console.error('Error loading local JSON:', err);
                setError('Ошибка загрузки данных');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    // Filter products by category
    useEffect(() => {
        if (selectedCategoryId) {
            const filtered = products.filter(p => p.categoryId === selectedCategoryId);
            setFilteredProducts(filtered);
        } else {
            setFilteredProducts(products);
        }
        setCurrentPage(1);
    }, [selectedCategoryId, products]);

    // Sort products
    useEffect(() => {
        let sorted = [...filteredProducts];
        if (sortOrder === 'low-to-high') sorted.sort((a, b) => a.price - b.price);
        if (sortOrder === 'high-to-low') sorted.sort((a, b) => b.price - a.price);
        if (sortOrder === 'latest') sorted.sort((a, b) => new Date(b.createdDate) - new Date(a.createdDate));
        setFilteredProducts(sorted);
    }, [sortOrder]);

    // Update range slider
    useEffect(() => {
        if (range.current) {
            const left = (minPrice / 1000) * 100;
            const width = ((maxPrice - minPrice) / 1000) * 100;
            range.current.style.left = `${left}%`;
            range.current.style.width = `${width}%`;
        }
    }, [minPrice, maxPrice]);

    const handleFilter = () => {
        const result = products.filter(p => p.price >= minPrice && p.price <= maxPrice);
        setFilteredProducts(result);
        setCurrentPage(1);
    };

    const handleCategorySelect = (id) => setSelectedCategoryId(id);

    const handleSortChange = (e) => setSortOrder(e.target.value);

    // Pagination
    const indexOfLastProduct = currentPage * itemsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
    const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

    const filteredBackground = backgrounds.find(bg => bg.key === 'Shop');

    const handleNextPage = () => setCurrentPage(prev => Math.min(prev + 1, totalPages));
    const handlePreviousPage = () => setCurrentPage(prev => Math.max(prev - 1, 1));

    if (loading) return <p className="text-center">Loading...</p>;
    if (error) return <p className="text-center">{error}</p>;

    return (
        <>
            {filteredBackground && (
                <div className="section-title mt-5">
                    <HeaderBackground value={filteredBackground.value} desc={filteredBackground.description} />
                </div>
            )}

            <section id="product">
                <div className="container">
                    <div className="d-flex">
                        <div className="sidebar col-md-3">
                            <h6>Category</h6>
                            <ul>
                                <button onClick={() => handleCategorySelect(null)}>ALL</button>
                                {categories.map(cat => (
                                    <li key={cat.id}>
                                        <button onClick={() => handleCategorySelect(cat.id)}>{cat.name}</button>
                                    </li>
                                ))}
                            </ul>

                            <h6>Price</h6>
                            <div className="range-slider">
                                <input type="range" min="150" max="1000" value={minPrice} onChange={e => setMinPrice(Math.min(+e.target.value, maxPrice - 10))} />
                                <input type="range" min="150" max="1000" value={maxPrice} onChange={e => setMaxPrice(Math.max(+e.target.value, minPrice + 10))} />
                                <div className="slider">
                                    <div className="slider-track" />
                                    <div className="slider-range" ref={range} />
                                </div>
                                <div className="filter">
                                    <div>Price: ${minPrice} - ${maxPrice}</div>
                                    <button onClick={handleFilter}>Filter</button>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-9">
                            <div className="order-content d-flex justify-content-between mb-4">
                                <p>Showing {filteredProducts.length} products</p>
                                <select className="form-select w-auto" onChange={handleSortChange}>
                                    <option value="latest">Sort by Latest</option>
                                    <option value="low-to-high">Sort by price: low to high</option>
                                    <option value="high-to-low">Sort by price: high to low</option>
                                </select>
                            </div>

                            <div className="product-list">
                                <Product products={currentProducts} />
                            </div>

                            {totalPages > 1 && (
                                <div className="d-flex justify-content-center align-items-center mt-4">
                                    {currentPage > 1 && <MdNavigateBefore onClick={handlePreviousPage} style={{ cursor: 'pointer', fontSize: '24px', marginLeft: '10px', marginBottom: '15px' }} />}
                                    <Pagination>
                                        {Array.from({ length: totalPages }, (_, i) => (
                                            <Pagination.Item key={i} active={i + 1 === currentPage} onClick={() => setCurrentPage(i + 1)}>
                                                {i + 1}
                                            </Pagination.Item>
                                        ))}
                                    </Pagination>
                                    {currentPage < totalPages && <MdNavigateNext onClick={handleNextPage} style={{ cursor: 'pointer', fontSize: '24px', marginLeft: '10px', marginBottom: '15px' }} />}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
