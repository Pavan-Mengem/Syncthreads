import axios from 'axios';

const API_URL = 'http://localhost:8000/api'; 

const login = async (username, password) => {
    const response = await axios.post(`${API_URL}/login`, { username, password });
    if (response.data.token) {
        localStorage.setItem('token', response.data.token);
    }
    return response.data;
};

const logout = () => {
    localStorage.removeItem('token');
};

const getToken = () => {
    return localStorage.getItem('token');
};

const isAuthenticated = () => {
    return !!getToken();
};

export { login, logout, getToken, isAuthenticated };