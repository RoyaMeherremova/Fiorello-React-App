import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../assets/scss/_login.scss';
import HaederBackground from '../components/HeaderBackground';

function Login() {
    const [headerBackgrounds, setHeaderBackgrounds] = useState([]);
    const baseURL = "https://localhost:7292";

    useEffect(() => {
        axios.get(`${baseURL}/api/HeaderBackground/GetALL`)
            .then((response) => {
                setHeaderBackgrounds(response.data);
            });
    }, []);

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
                    <label for="username">Username or email address<span class="required">*</span></label>
                    <div className='input-area'>
                        <input type="text" name="username" id="username"></input>
                    </div>
                    <label for="pasword">Password<span class="required">*</span></label>
                    <div className='input-area'>
                        <input type="password" name="password" id="password"></input>
                    </div>
                    <div className='form-row'>
                        <input type="checkbox" id="myCheckbox" name="terms" value="accepted"></input>
                        <span>Remember me</span><button>LOG IN</button>
                    </div>
                    <div> <button className='forget'>Lost your password?</button> </div>
                </div></div>

        </div>
    )
}

export default Login
