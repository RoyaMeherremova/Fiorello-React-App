import { useState } from 'react';
import '../../assets/scss/admin/_navbar.scss';
function Navbar() {
    const [isAuthenticated, setIsAuthenticated] = useState(true); // dəyiş bu real auth ilə
    const user = {
        firstName: 'John',
        lastName: 'Doe',
    };

    return (
        <div className="card-body navbar-nav-right d-flex align-items-center" id="navbar-collapse">
            <ul className="navbar-nav flex-row align-items-center ms-auto">
                <li className="nav-item lh-1 me-3 d-flex" style={{ position: 'relative', left: '45px' }}>
                    {!isAuthenticated ? (
                        <div className="login">
                            <button
                                style={{
                                    border: 'none',
                                    color: '#60748a',
                                    background: 'transparent',
                                    marginLeft: '15px',
                                    fontSize: '15px',
                                }}
                                onClick={() => console.log('Login clicked')}
                            >
                                Login
                            </button>
                        </div>
                    ) : (
                        <>
                            <div className="logout">
                                <button
                                    style={{
                                        border: 'none',
                                        color: '#60748a',
                                        background: 'transparent',
                                        marginLeft: '15px',
                                        fontSize: '17px',
                                    }}
                                    onClick={() => setIsAuthenticated(false)}
                                >
                                    Logout
                                </button>
                            </div>
                            <h4 style={{ fontFamily: 'auto', color: '#696cff' }}>
                                {user.firstName} {user.lastName}
                            </h4>
                            <div className="avatar avatar-online">
                            </div>
                        </>
                    )}

                </li>


            </ul>
        </div>
    );
}
export default Navbar;