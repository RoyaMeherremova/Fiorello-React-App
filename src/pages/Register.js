import React, { useState } from 'react';
import axios from 'axios';
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

function Register() {
    const [fullname, setFullname] = useState('');
    const [username, setUsername] = useState('');
    const [mail, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const baseURL = "https://localhost:7292";
    const navigate = useNavigate();

    const register = (e) => {
        e.preventDefault();

        setLoading(true);

        axios.post(`${baseURL}/api/Account/SignUp`, {
            email: mail,
            password: password,
            fullname: fullname,
            username: username,
        })
            .then(response => {
                Swal.fire('Успех!', 'Вы успешно зарегистрированы!', 'success');
                navigate('/login');
            })
            .catch(error => {
                setLoading(false);  // Отключаем индикатор загрузки при ошибке

                if (error.response) {
                    console.log('Ошибка ответа:', error.response.data);
                    Swal.fire('Ошибка', error.response.data.message || 'Что-то пошло не так!', 'error');
                } else {
                    console.log('Ошибка сообщения:', error.message);
                    Swal.fire('Ошибка', error.message, 'error');
                }
            });
    };

    return (
        <div>
            <div className='container'>
                <div className='login-form'>
                    <h2>Register</h2>
                    <form className='form-row' onSubmit={register}>
                        <label htmlFor="text">Fullname<span className="required">*</span></label>
                        <div className='input-area'>
                            <input type="text" required="required" onChange={(e) => setFullname(e.target.value)} />
                        </div>
                        <label htmlFor="text">Username<span className="required">*</span></label>
                        <div className='input-area'>
                            <input type="text" required="required" onChange={(e) => setUsername(e.target.value)} />
                        </div>
                        <label htmlFor="email">Email address<span className="required">*</span></label>
                        <div className='input-area'>
                            <input type="email" required="required" onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <label htmlFor="password">Password<span className="required">*</span></label>
                        <div className='input-area'>
                            <input
                                type="password"
                                required="required"
                                id="passwordId"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <button type="submit" disabled={loading}>{loading ? 'Загрузка...' : 'REGISTER'}</button> {/* Изменение текста кнопки в зависимости от состояния загрузки */}
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Register;
