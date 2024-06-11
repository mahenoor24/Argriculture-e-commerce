import React, { useState } from 'react';
import './login.css';
import { Link } from 'react-router-dom';
import image from '../../assets/bglogin.gif'

const LoginRegistrationForm = ({ isLogin, isNewUser, handleLogin, handleNewUser }) => {
    const [formData, setFormData] = useState({
        name: '',
        usernameOrEmail: '',
        phoneNumber: '',
        password: '',
        showPassword: false,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleToggleShowPassword = () => {
        setFormData((prevData) => ({
            ...prevData,
            showPassword: !prevData.showPassword,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isLogin) {
            handleLogin(formData);
        } else {
            handleNewUser(formData);
        }
    };

    return (
        <div className='login'>
            <div className='slogan'><div className='the'>The</div> <div className='color-text1'>Future</div> is Planted by<div className='color-text1'> Farmers.</div></div>
        <div className='login-container'>
        <h2>{isLogin ? 'Login' : 'Register'}</h2>
        <form onSubmit={handleSubmit}>
            {!isLogin && (
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                />
            )}
            <input
                    type="text"
                    name="usernameOrEmail"
                    placeholder="Username or Email"
                    value={formData.usernameOrEmail}
                    onChange={handleChange}
                />
            {!isLogin && (
                <input
                    type="tel"
                    name="phoneNumber"
                    placeholder="Phone Number"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                />
            )}
            <input
                type={formData.showPassword ? 'text' : 'password'}
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
            />
            <label >
                <input
                className='show-password'
                    type="checkbox"
                    checked={formData.showPassword}
                    onChange={handleToggleShowPassword}
                />
                Show Password
            </label>
            <button type="submit"><h3>{isLogin ? 'Login' : 'Register'}</h3></button>
            <p>
                {isLogin ? 'Already have an account?':'New user?'}
                <Link className='Link' to={isLogin ? '/register':'/login'}>{isLogin ? 'Register here':'Login here'}</Link>
            </p>
        </form>
        </div>
        </div>
    );
};

export default LoginRegistrationForm;
