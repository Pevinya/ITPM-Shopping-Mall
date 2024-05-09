import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { message } from 'antd';
import { GetLoggedInUserDetails, GetUserDetails } from '../apicalls/users';
import AppHeader from '../pages/Header';
import App from '../pages/Footer';

function ProtectedRoute({ children }) {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);

    const validateUserToken = async () => {
        try {
            const response = await GetLoggedInUserDetails();
            if (response.success) {
                setUser(response.data);
                console.log(response.data)
            } else {
                message.error(response.message);
            }
        } catch (error) {
            message.error(error.message);
        }
    };

    useEffect(() => {
        const token = localStorage.getItem('token'); // Corrected localStorage spelling
        if (!token) {
            navigate('/login');
        } else {
            validateUserToken();
        }
    }, []);

    return <div>
        <AppHeader/>

        {user && children}

        <App/>
        </div>;
}

export default ProtectedRoute;
