import React from 'react'
import logo from '../../assets/images/navigation/logo.png'
import '../../assets/scss/_navigation.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faBagShopping } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom';

function Navigation() {
    let alText = 'photo'
    return (
        <div>
            <section id='nav-area'>
                <div className='container my-5'>
                    <div className='row'>
                        <div className='col-4'>
                            <div className='logo'>
                                <img src={logo} alt={alText} />
                            </div>
                        </div>
                        <div className='col-6'>
                            <div className='navbar-collapse'>
                                <ul className='navigate'>
                                    <li>
                                        <NavLink to="/">
                                            Home
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="About">
                                            About
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="Shop">
                                            Shop
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="Blog">
                                            Blog
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="Contact">
                                            Contact
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='col-2'>
                            <div>
                                <a href='g'>
                                    <ul className='shop-cart'>
                                        <li>
                                            <FontAwesomeIcon icon={faMagnifyingGlass} rotation={90}></FontAwesomeIcon>
                                        </li>
                                        <li>
                                            <FontAwesomeIcon icon={faBagShopping}></FontAwesomeIcon>
                                            <span className='count-shopProducts'>0</span>
                                        </li>
                                        <li><span>Cart</span><span className='total-price'>($0)</span></li>
                                    </ul>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section >

        </div >
    )
}

export default Navigation
