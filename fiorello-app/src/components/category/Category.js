import React, { useState, useEffect } from 'react';
import '../../assets/scss/_category.scss'
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'

function Category() {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const baseURL = "https://localhost:7292";

    useEffect(() => {
        axios.get(`${baseURL}/api/Category/GetALL`)
            .then((response) => {
                setCategories(response.data);
                console.log(response.data);
                setLoading(false);
            })
            .catch((err) => {
                setError('Ошибка при получении данных');
                setLoading(false);
            });
    }, []);

    return (
        <div>
            {error && <p className="error">{error}</p>}
            {loading && <p className="loading">Loading...</p>}
            <section id='category'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-9'>
                            <ul>
                                <li>
                                    <a href=''>All</a>

                                </li>

                                {categories.map((item) => (

                                    <li key={item.id}>
                                        <a>{item.name}</a>

                                    </li>

                                ))}
                            </ul>
                        </div>
                        <div className='col-3'>
                            <ul className='filter'>
                                <li>
                                    <a>Filter</a>
                                </li>
                                <li>
                                    <li>
                                        <a><FontAwesomeIcon style={{ marginBottom: "1px" }} icon={faCaretDown}></FontAwesomeIcon></a>
                                    </li>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </section >
            {/* <Product products={products} /> */}

        </div >
    )
}

export default Category