import React, { useState, useEffect } from 'react';
import '../assets/scss/_category.scss';
import Product from './common/Product';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

function Category() {
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [allProducts, setAllProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedCategoryId, setSelectedCategoryId] = useState(null);
    const [sortOrder, setSortOrder] = useState('low-to-high');
    const [min, setMinPrice] = useState(null);
    const [max, setMaxPrice] = useState(null);

    // Fetch JSON
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('/data/db.json');
                if (!res.ok) throw new Error('Network response was not ok');
                const json = await res.json();

                setCategories(json.categories || []);
                setAllProducts(json.products || []);
                setProducts(json.products || []);
            } catch (err) {
                console.error('Error loading JSON:', err);
                setCategories([]);
                setProducts([]);
                setAllProducts([]);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    // Filter, sort, price range
    useEffect(() => {
        if (!allProducts.length) return;

        let filteredProducts = [];

        // Category filter
        if (selectedCategoryId !== null) {
            filteredProducts = allProducts.filter(p => p.categoryId === selectedCategoryId);
        } else {
            filteredProducts = [...allProducts];
        }

        // Price range filter
        if (min !== null && max !== null) {
            filteredProducts = filteredProducts.filter(p => p.price >= min && p.price <= max);
        }

        // Sort
        if (sortOrder === 'low-to-high') {
            filteredProducts.sort((a, b) => a.price - b.price);
        } else if (sortOrder === 'high-to-low') {
            filteredProducts.sort((a, b) => b.price - a.price);
        }

        setProducts(filteredProducts);
    }, [selectedCategoryId, sortOrder, min, max, allProducts]);

    const handleCategorySelect = (id) => setSelectedCategoryId(id);
    const handleSortLowToHigh = () => setSortOrder('low-to-high');
    const handleSortHighToLow = () => setSortOrder('high-to-low');
    const handlePriceRangeSelect = (range) => {
        const [minPrice, maxPrice] = range.split('-').map(p => parseFloat(p.replace('$', '')));
        setMinPrice(minPrice);
        setMaxPrice(maxPrice);
    };

    if (loading) return <p className="loading">Loading...</p>;

    return (
        <section id="category">
            <div className="container">
                <div className="row">
                    {/* Categories */}
                    <div className="col-9">
                        <ul>
                            <li>
                                <button
                                    onClick={() => handleCategorySelect(null)}
                                    className={selectedCategoryId === null ? 'active' : ''}
                                >
                                    All
                                </button>
                            </li>
                            {categories.map(cat => (
                                <li key={cat.id}>
                                    <button
                                        onClick={() => handleCategorySelect(cat.id)}
                                        className={selectedCategoryId === cat.id ? 'active' : ''}
                                    >
                                        {cat.name}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Filters */}
                    <div className="col-3">
                        <div className="filter">
                            <ul>
                                <li>Filter</li>
                                <li>
                                    <FontAwesomeIcon style={{ marginBottom: '1px' }} icon={faCaretDown} />
                                </li>
                            </ul>

                            <div className="filter-container">
                                <div className="filters">
                                    <h5>Sort by</h5>
                                    <ul>
                                        <li onClick={handleSortLowToHigh}>Price: Low to High</li>
                                        <li onClick={handleSortHighToLow}>Price: High to Low</li>
                                    </ul>
                                </div>
                                <div className="ordering-inner">
                                    <h5>Price Range</h5>
                                    <ul>
                                        <li onClick={() => handlePriceRangeSelect('$10-$20')}>$10-$20</li>
                                        <li onClick={() => handlePriceRangeSelect('$20-$40')}>$20-$40</li>
                                        <li onClick={() => handlePriceRangeSelect('$40-$50')}>$40-$50</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Products */}
                <Product products={products} />
            </div>
        </section>
    );
}

export default Category;
