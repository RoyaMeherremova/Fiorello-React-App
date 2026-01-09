import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faBagShopping } from '@fortawesome/free-solid-svg-icons';
import { FaRegUser } from "react-icons/fa";
import logo from '../../assets/images/navigation/logo.png';
import '../../assets/scss/_navigation.scss';
import { IoLogOutOutline } from "react-icons/io5";
function Navigation() {
    const [username, setUsername] = useState(null);
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

    useEffect(() => {
        const storedUsername = localStorage.getItem('username');
        if (storedUsername) {
            setUsername(storedUsername);
        }
    }, []);

    const handleUserIconClick = () => {
        setIsUserMenuOpen(prev => !prev);
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('username');
        setUsername(null);
        setIsUserMenuOpen(false);
        window.location.href = '/';

    };

    return (
        <div>
            <section id='nav-area'>
                <div className='container my-5'>
                    <div className='row'>
                        <div className='col-4'>
                            <div className='logo'>
                                <img src={logo} alt="Logo" />
                            </div>
                        </div>
                        <div className='col-6'>
                            <div className='navbar-collapse'>
                                <ul className='navigate'>
                                    <li><NavLink to="/">Home</NavLink></li>
                                    <li><NavLink to="/About">About</NavLink></li>
                                    <li><NavLink to="/Shop">Shop</NavLink></li>
                                    <li><NavLink to="/Blog">Blog</NavLink></li>
                                    <li><NavLink to="/Contact">Contact</NavLink></li>
                                </ul>
                            </div>
                        </div>
                        <div className='col-2'>
                            <div>
                                <ul className='shop-cart'>
                                    <li onClick={handleUserIconClick}>
                                        <FaRegUser className='user' style={{ fontSize: '20px', marginBottom: '3px', cursor: 'pointer' }} />
                                    </li>
                                    <li>
                                        <FontAwesomeIcon icon={faMagnifyingGlass} rotation={90} />
                                    </li>
                                    <li>
                                        <FontAwesomeIcon icon={faBagShopping} />
                                        <span className='count-shopProducts'>0</span>
                                    </li>
                                    <li>
                                        <span>Cart</span>
                                        <span className='total-price'>($0)</span>
                                    </li>
                                </ul>
                            </div>

                            {isUserMenuOpen && (
                                <div className='user-wrapper'>
                                    <div className=''>
                                        {username ? (
                                            <div className='log-out'>
                                                <span>Welcome, {username}</span>
                                                <button onClick={handleLogout} className="logout-btn"><IoLogOutOutline /></button>
                                            </div>
                                        ) : (
                                            <div className='log-in'>
                                                <NavLink to="/Login">Login</NavLink>
                                                <span>/</span>
                                                <NavLink to="/Register">Register</NavLink>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
export default Navigation;