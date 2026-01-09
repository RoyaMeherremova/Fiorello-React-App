import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import '../assets/scss/_login.scss';
import HaederBackground from '../components/HeaderBackground';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [headerBackgrounds, setHeaderBackgrounds] = useState([]);
    const [rememberMe, setRememberMe] = useState(false);

    const baseURL = "https://localhost:7292";
    const navigate = useNavigate();

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    useEffect(() => {
        axios.get(`${baseURL}/api/HeaderBackground/GetALL`)
            .then((response) => {
                setHeaderBackgrounds(response.data);
            });
    }, []);

    const login = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(`${baseURL}/api/Account/SignIn`, {
                email: email,
                password: password
            });

            if (response.status === 200 && response.data?.token) {
                Swal.fire('Успех!', 'Вы успешно вошли в систему!', 'success');

                const token = response.data.token;
                localStorage.setItem('token', token);

                const tokenParts = token.split('.');
                if (tokenParts.length === 3) {
                    const payload = JSON.parse(atob(tokenParts[1]));

                    const username = payload["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"];
                    const role = payload["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];

                    if (username) {
                        localStorage.setItem('username', username);
                    }

                    if (role) {
                        localStorage.setItem('role', role);
                    }
                }

                // ✅ Всех направляем на главную
                navigate('/');
                window.location.reload();
            }
        } catch (error) {
            if (error.response) {
                Swal.fire('Ошибка', error.response.data.message || 'Что-то пошло не так!', 'error');
            } else {
                Swal.fire('Ошибка', error.message, 'error');
            }
        }
    };

    const filteredData = headerBackgrounds.filter(item => item.key === 'Login');

    return (
        <div>
            {filteredData.length > 0 && filteredData.map((item, index) => (
                <div className="section-title mt-5" key={index}>
                    <HaederBackground value={item.value} desc={item.description} />
                </div>
            ))}
            <div className='container'>
                <div className='login-form'>
                    <h2>Login</h2>
                    <form onSubmit={login}>
                        <label htmlFor="email">Email address<span className="required">*</span></label>
                        <div className='input-area'>
                            <input type="email" required onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <label htmlFor="password">Password<span className="required">*</span></label>
                        <div className='input-area'>
                            <input
                                type={showPassword ? "text" : "password"}
                                required
                                id="passwordId"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className='form-row'>
                            <input
                                type="checkbox"
                                id="myCheckbox"
                                checked={rememberMe}
                                onChange={() => setRememberMe(!rememberMe)}
                            />
                            <span>Remember me</span>
                            <button type="submit">LOG IN</button>
                        </div>
                        <div>
                            <button type="button" className='forget'>Lost your password?</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
