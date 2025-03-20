import React, { useState, useEffect } from 'react';
import '../../assets/scss/_category.scss';
import axios from 'axios';
import Product from '../../components/common/Product';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

function Category() {
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedCategoryId, setSelectedCategoryId] = useState(null);
    const [sortOrder, setSortOrder] = useState('low-to-high');
    const [min, setMinPrice] = useState(null);
    const [max, setMaxPrice] = useState(null);

    const baseURL = "https://localhost:7292";

    useEffect(() => {
        axios.get(`${baseURL}/api/Category/GetALL`)
            .then((response) => {
                setCategories(response.data);
            })
            .catch((err) => {
                setError('Error retrieving categories');
            });
    }, []);

    useEffect(() => {
        setLoading(true);

        if (selectedCategoryId !== null) {
            axios.get(`${baseURL}/api/Product/GetCategoryByProduct/${selectedCategoryId}`)
                .then((response) => {
                    let sortedProducts = response.data;
                    if (sortOrder === 'low-to-high') {
                        sortedProducts = sortedProducts.sort((a, b) => a.price - b.price);
                    } else if (sortOrder === 'high-to-low') {
                        sortedProducts = sortedProducts.sort((a, b) => b.price - a.price);
                    }
                    setProducts(sortedProducts);
                    setLoading(false);
                })
                .catch((err) => {
                    setError('Error retrieving products for the selected category');
                    setLoading(false);
                });
        } else {
            axios.get(`${baseURL}/api/Product/GetAll`)
                .then((response) => {
                    let sortedProducts = response.data;
                    if (sortOrder === 'low-to-high') {
                        sortedProducts = sortedProducts.sort((a, b) => a.price - b.price);
                    } else if (sortOrder === 'high-to-low') {
                        sortedProducts = sortedProducts.sort((a, b) => b.price - a.price);
                    }
                    setProducts(sortedProducts);
                    setLoading(false);
                })
                .catch((err) => {
                    setError('Ошибка при получении всех продуктов');
                    setLoading(false);
                });
        }
    }, [selectedCategoryId, sortOrder]);


    useEffect(() => {
        if (min !== null && max !== null) {
            setLoading(true);

            axios.get(`${baseURL}/api/Product/GetProductsByPriceRange?minPrice=${min}&maxPrice=${max}`)
                .then((response) => {
                    setProducts(response.data);
                    setLoading(false);
                })
                .catch((err) => {
                    setError('Error loading products by price');
                    setLoading(false);
                });
        }
    }, [min, max]);
    const handleCategorySelect = (id) => {
        setSelectedCategoryId(id);
    };

    const handleSortLowToHigh = () => {
        setSortOrder('low-to-high');
    };

    const handleSortHighToLow = () => {
        setSortOrder('high-to-low');
    };
    const handlePriceRangeSelect = (range) => {
        const [min, max] = range.split('-').map(price => parseInt(price.replace('$', ''), 10));
        setMinPrice(min);
        setMaxPrice(max);
    };
    return (
        <div>
            {error && <p className="error">{error}</p>}
            {loading && <p className="loading">Loading...</p>}

            <section id="category">
                <div className="container">
                    <div className="row">
                        <div className="col-9">
                            <ul>
                                <li>
                                    <button onClick={() => handleCategorySelect(null)} className={selectedCategoryId === null ? "active" : ""}>All</button>
                                </li>

                                {categories.map((item) => (
                                    <li key={item.id}>
                                        <button onClick={() => handleCategorySelect(item.id)}>{item.name}</button>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="col-3">
                            <div className='filter'>
                                <ul>
                                    <li>Filter</li>
                                    <li>
                                        <FontAwesomeIcon style={{ marginBottom: "1px" }} icon={faCaretDown} />
                                    </li>
                                </ul>
                                <div className='filter-container'>
                                    <div className='filters'>
                                        <h5>Sort by</h5>
                                        <ul>
                                            <li onClick={handleSortLowToHigh}>Price: To High</li>
                                            <li onClick={handleSortHighToLow}>Price: To Low</li>
                                        </ul>
                                    </div>
                                    <div className='ordering-inner'>
                                        <h5>Price Range</h5>
                                        <ul>
                                            <li onClick={() => handlePriceRangeSelect('$100-$200')}>$100-$200</li>
                                            <li onClick={() => handlePriceRangeSelect('$200-$300')}>$200-$300</li>
                                            <li onClick={() => handlePriceRangeSelect('$300-$400')}>$300-$400</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="product-container">
                        <div className='product-list'>
                            <Product products={products} />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Category;
