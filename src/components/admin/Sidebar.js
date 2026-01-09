import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FaChartBar, FaUser, FaBook, FaCircleInfo, FaCartShopping } from 'react-icons/fa6';
import { BiHomeCircle } from 'react-icons/bi';
import '../../assets/scss/admin/_sidebar.scss';

function Sidebar() {
    const [isUsersOpen, setIsUsersOpen] = useState(false);
    const [isHomeOpen, setIsHomeOpen] = useState(false);
    const [isAboutOpen, setIsAboutOpen] = useState(false);
    const [isBlogOpen, setIsBlogOpen] = useState(false);
    const [isShopOpen, setIsShopOpen] = useState(false);

    return (
        <aside className="layout-menu menu-vertical menu bg-menu-theme">
            <div className="app-brand demo">
                <Link to="/" className="app-brand-link">
                    <span className="app-brand-logo demo">
                    </span>
                    <span className="app-brand-text demo menu-text fw-bolder ms-2">Admin Panel</span>
                </Link>
            </div>

            <ul className="menu-inner py-1">

                <li className="menu-item active">
                    <Link to="/admin/dashboard" className="menu-link">
                        <FaChartBar className="menu-icon" />
                        <div>Dashboard</div>
                    </Link>
                </li>

                <li className="menu-item">
                    <div className="menu-link menu-toggle" onClick={() => setIsUsersOpen(!isUsersOpen)} style={{ cursor: 'pointer' }}>
                        <Link to="/admin/user" className="menu-link">
                            <FaUser className="menu-icon" />
                            <div>Users</div>
                        </Link>
                    </div>
                    {isUsersOpen && (
                        <ul className="menu-sub">
                            <li className="menu-item">
                                <Link to="/admin/user" className="menu-link">User</Link>
                            </li>
                            <li className="menu-item">
                                <Link to="/admin/subscribe" className="menu-link">Subscribes</Link>
                            </li>
                        </ul>
                    )}
                </li>

                <li className="menu-item">
                    <div className="menu-link menu-toggle" onClick={() => setIsHomeOpen(!isHomeOpen)} style={{ cursor: 'pointer' }}>
                        <BiHomeCircle className="menu-icon" />
                        <div>Home</div>
                    </div>
                    {isHomeOpen && (
                        <ul className="menu-sub">
                            <li className="menu-item">
                                <Link to="/admin/slider" className="menu-link">Slider</Link>
                            </li>
                            <li className="menu-item">
                                <Link to="/admin/home-banner" className="menu-link">Home Banner</Link>
                            </li>
                            <li className="menu-item">
                                <Link to="/admin/about-us" className="menu-link">About Us</Link>
                            </li>
                            <li className="menu-item">
                                <Link to="/admin/bride" className="menu-link">Bride</Link>
                            </li>
                        </ul>
                    )}
                </li>

                <li className="menu-item">
                    <div className="menu-link menu-toggle" onClick={() => setIsAboutOpen(!isAboutOpen)} style={{ cursor: 'pointer' }}>
                        <FaCircleInfo className="menu-icon" />
                        <div>About</div>
                    </div>
                    {isAboutOpen && (
                        <ul className="menu-sub">
                            <li className="menu-item">
                                <Link to="/admin/about" className="menu-link">About Page</Link>
                            </li>
                            <li className="menu-item">
                                <Link to="/admin/team" className="menu-link">Team</Link>
                            </li>
                        </ul>
                    )}
                </li>

                <li className="menu-item">
                    <div className="menu-link menu-toggle" onClick={() => setIsBlogOpen(!isBlogOpen)} style={{ cursor: 'pointer' }}>
                        <FaBook className="menu-icon" />
                        <div>Blog</div>
                    </div>
                    {isBlogOpen && (
                        <ul className="menu-sub">
                            <li className="menu-item">
                                <Link to="/admin/blogs" className="menu-link">All Blogs</Link>
                            </li>
                            <li className="menu-item">
                                <Link to="/admin/blog-categories" className="menu-link">Categories</Link>
                            </li>
                        </ul>
                    )}
                </li>

                {/* Shop */}
                <li className="menu-item">
                    <div className="menu-link menu-toggle" onClick={() => setIsShopOpen(!isShopOpen)} style={{ cursor: 'pointer' }}>
                        <FaCartShopping className="menu-icon" />
                        <div>Shop</div>
                    </div>
                    {isShopOpen && (
                        <ul className="menu-sub">
                            <li className="menu-item">
                                <Link to="/admin/products" className="menu-link">Products</Link>
                            </li>
                            <li className="menu-item">
                                <Link to="/admin/orders" className="menu-link">Orders</Link>
                            </li>
                        </ul>
                    )}
                </li>
            </ul>
        </aside>
    );
}

export default Sidebar;
