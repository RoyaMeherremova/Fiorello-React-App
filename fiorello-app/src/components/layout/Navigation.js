import React from 'react'
import logo from '../../assets/images/navigation/logo.png'
import '../../assets/scss/_navigation.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faBagShopping } from '@fortawesome/free-solid-svg-icons'
function Navigation() {
    return (
        <div>
            <section id='nav-area'>
                <div className='container my-5'>
                    <div className='row'>
                        <div className='col-3'>
                            <div className='logo'>
                                <img src={logo} />
                            </div>
                        </div>
                        <div className='col-6'>
                            <div className='navbar-collapse'>
                                <ul className='navigate'>
                                    <li><a>Home</a></li>
                                    <li><a>About</a></li>
                                    <li><a>Shop</a></li>
                                    <li><a>Blog</a></li>
                                    <li><a>Contact</a></li>
                                    <li>
                                        <FontAwesomeIcon icon={faMagnifyingGlass} rotation={90} ></FontAwesomeIcon>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='col-3'>
                            <div>
                                <a>
                                    <ul className='shop-cart'>
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
