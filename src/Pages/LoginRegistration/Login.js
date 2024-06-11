import React from 'react';
import { Link } from 'react-router-dom';
import LoginRegistrationForm from './LoginRegistration';

const LoginPage = () => {
    const handleLogin = (formData) => {
        console.log('Login data:', formData);
        // Add your login logic here
        // Once login is successful, you can redirect the user to the dashboard or another page
    };

    return (
        <div>
            
            <LoginRegistrationForm isLogin={true} handleLogin={handleLogin} />
            
        </div>
    );
};

export default LoginPage;
