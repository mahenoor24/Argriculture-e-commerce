import React from 'react';
import { Link} from 'react-router-dom';
import { useHistory, useNavigate } from 'react-router';

import LoginRegistrationForm from './LoginRegistration';

const RegisterPage = () => {
    const navigate = useNavigate();

    const handleNewUser = (formData) => {
        console.log('New user registration:', formData);
        // Add your registration logic here
        // Once registration is successful, you can navigate to the login page
        navigate('/login');
    };


    return (
        <div>
            <LoginRegistrationForm isLogin={false} isNewUser={true} handleNewUser={handleNewUser} />
        </div>
    );
};

export default RegisterPage;
