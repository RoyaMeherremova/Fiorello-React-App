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
    const baseURL = "https://localhost:7292";

    useEffect(() => {
        axios.get(`${baseURL}/api/Category/GetALL`)
            .then((response) => {
                setCategories(response.data);
            })
            .catch((err) => {
                setError('Ошибка при получении данных категорий');
            });

        if (selectedCategoryId === null) {
            axios.get(`${baseURL}/api/Product/GetAll`)
                .then((response) => {
                    setProducts(response.data);
                    setLoading(false);
                })
                .catch((err) => {
                    setError('Ошибка при получении всех продуктов');
                    setLoading(false);
                });
        } else {
            axios.get(`${baseURL}/api/Product/GetCategoryByProduct/${selectedCategoryId}`)
                .then((response) => {
                    setProducts(response.data);
                    setLoading(false);
                })
                .catch((err) => {
                    setError('Ошибка при получении продуктов для категории');
                    setLoading(false);
                });
        }
    }, [selectedCategoryId]);

    const handleCategorySelect = (id) => {
        setSelectedCategoryId(id);
        setLoading(true);
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
                                    <button onClick={() => handleCategorySelect(null)}
                                        className={selectedCategoryId === null ? "active" : ""}>All</button>
                                </li>

                                {categories.map((item) => (
                                    <li key={item.id}>
                                        <button onClick={() => handleCategorySelect(item.id)}>{item.name}</button>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="col-3">
                            <ul className="filter">
                                <li>
                                    <a>Фильтры</a>
                                </li>
                                <li>
                                    <a>
                                        <FontAwesomeIcon style={{ marginBottom: "1px" }} icon={faCaretDown}></FontAwesomeIcon>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <Product products={products} />
                </div>
            </section>
        </div>
    );
}

export default Category;
