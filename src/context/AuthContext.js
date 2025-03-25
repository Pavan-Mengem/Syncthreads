import React, { createContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { loginUser, logoutUser } from '../services/auth';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);
    const history = useHistory();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setIsAuthenticated(true);
        }
        setLoading(false);
    }, []);

    const login = async (username, password) => {
        const response = await loginUser(username, password);
        if (response.token) {
            localStorage.setItem('token', response.token);
            setIsAuthenticated(true);
            history.push('/dashboard');
        }
    };

    const logout = () => {
        localStorage.removeItem('token');
        setIsAuthenticated(false);
        history.push('/login');
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, loading, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};