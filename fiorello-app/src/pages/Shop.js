import React, { useState, useEffect, useRef } from 'react';
import '../assets/scss/_shop.scss';
import axios from 'axios';
import Pagination from 'react-bootstrap/Pagination';
import { MdNavigateNext } from "react-icons/md";
import { MdNavigateBefore } from "react-icons/md";
import Product from '../components/common/Product';
import HeaderBackground from '../components/HeaderBackground'; // исправил название

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
    const baseURL = "https://localhost:7292";
    const itemsPerPage = 6;

    useEffect(() => {
        axios.get(`${baseURL}/api/Category/GetALL`)
            .then(res => setCategories(res.data))
            .catch(() => setError('Ошибка загрузки категорий'));
    }, []);

    useEffect(() => {
        setLoading(true);
        const fetchProducts = async () => {
            try {
                const url = selectedCategoryId
                    ? `${baseURL}/api/Product/GetCategoryByProduct/${selectedCategoryId}`
                    : `${baseURL}/api/Product/GetAll`;
                const res = await axios.get(url);
                let productsData = res.data;

                if (sortOrder === 'low-to-high') {
                    productsData.sort((a, b) => a.price - b.price);
                } else if (sortOrder === 'high-to-low') {
                    productsData.sort((a, b) => b.price - a.price);
                }
                setProducts(productsData);
                setLoading(false);
            } catch {
                setError('Ошибка загрузки товаров');
                setLoading(false);
            }
        };
        fetchProducts();
    }, [selectedCategoryId, sortOrder]);

    useEffect(() => {
        axios.get(`${baseURL}/api/HeaderBackground/GetALL`)
            .then(res => setBackgrounds(res.data))
            .catch(() => setError('Ошибка загрузки фона'));
    }, []);

    // Обновляем полосу фильтра по цене
    useEffect(() => {
        if (range.current) {
            const left = (minPrice / 1000) * 100;
            const width = ((maxPrice - minPrice) / 1000) * 100;
            range.current.style.left = `${left}%`;
            range.current.style.width = `${width}%`;
        }
    }, [minPrice, maxPrice]);

    // Фильтр товаров по цене
    const handleFilter = () => {
        const result = products.filter(p => p.price >= minPrice && p.price <= maxPrice);
        setFilteredProducts(result);
        setCurrentPage(1);
    };

    // При выборе новой категории
    const handleCategorySelect = (id) => {
        setSelectedCategoryId(id);
    };

    // Обновляем список товаров после загрузки
    useEffect(() => {
        setFilteredProducts(products);
        setCurrentPage(1);
    }, [products]);

    // Обработка сортировки
    const handleSortChange = (e) => {
        const value = e.target.value;
        if (value === "lowToHigh") handleSortLowToHigh();
        else if (value === "highToLow") handleSortHighToLow();
        else if (value === "latest") handleSortByLatest();
    };

    const handleSortLowToHigh = () => {
        const sorted = [...products].sort((a, b) => a.price - b.price);
        setProducts(sorted);
    };

    const handleSortHighToLow = () => {
        const sorted = [...products].sort((a, b) => b.price - a.price);
        setProducts(sorted);
    };

    const handleSortByLatest = () => {
        const sorted = [...products].sort((a, b) => new Date(b.createdDate) - new Date(a.createdDate));
        setProducts(sorted);
    };

    // Пагинация
    const indexOfLastProduct = currentPage * itemsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
    const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

    const filteredBackground = backgrounds.find(bg => bg.key === 'Shop');

    const handleNextPage = () => {
        setCurrentPage(prev => Math.min(prev + 1, totalPages));
    };
    const handlePreviousPage = () => {
        setCurrentPage(prev => Math.max(prev - 1, 1)); // Prevent going below page 1
    };

    return (
        <>
            {error && <p className="error">{error}</p>}
            {loading && <p className="loading">Loading...</p>}

            n            {filteredBackground && (
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
                                <button onClick={() => handleCategorySelect(null)}>
                                    ALL
                                </button>
                                {categories.map(cat => (
                                    <li key={cat.id}>
                                        <button onClick={() => handleCategorySelect(cat.id)}>
                                            {cat.name}
                                        </button>
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
                                    <option value="lowToHigh">Sort by price: low to high </option>
                                    <option value="highToLow">Sort by price: high to low </option>
                                </select>
                            </div>

                            <div className="product-list">
                                <Product products={currentProducts} />
                            </div>
                            {/* Pagination */}
                            {totalPages > 1 && (
                                <div className="d-flex justify-content-center align-items-center mt-4">
                                    {currentPage > 1 && (
                                        <MdNavigateBefore
                                            style={{
                                                cursor: 'pointer',
                                                fontSize: '24px',
                                                marginLeft: '10px',
                                                marginBottom: '15px',
                                            }}
                                            onClick={handlePreviousPage}
                                        />
                                    )}
                                    <Pagination >
                                        {Array.from({ length: totalPages }, (_, i) => (
                                            <Pagination.Item
                                                key={i}
                                                active={i + 1 === currentPage}
                                                onClick={() => setCurrentPage(i + 1)}
                                            >
                                                {i + 1}
                                            </Pagination.Item>
                                        ))}
                                    </Pagination>
                                    {currentPage < totalPages && (
                                        <MdNavigateNext
                                            style={{
                                                cursor: 'pointer',
                                                fontSize: '24px',
                                                marginLeft: '10px',
                                                marginBottom: '15px',
                                            }}
                                            onClick={handleNextPage}
                                        />
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
