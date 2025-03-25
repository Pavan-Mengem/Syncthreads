import axios from 'axios';

const API_URL = 'http://localhost:8000/api'; 

// Function to handle login
export const login = async (username, password) => {
    try {
        const response = await axios.post(`${API_URL}/login`, { username, password });
        return response.data; // Return the response data (e.g., JWT token)
    } catch (error) {
        throw error.response.data; // Throw error response for handling in the component
    }
};

// Function to get dashboard data
export const getDashboardData = async (token) => {
    try {
        const response = await axios.get(`${API_URL}/dashboard`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data; // Return the dashboard data
    } catch (error) {
        throw error.response.data; // Throw error response for handling in the component
    }
};

// Function to get map data
export const getMapData = async (token) => {
    try {
        const response = await axios.get(`${API_URL}/map`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data; // Return the map data
    } catch (error) {
        throw error.response.data; // Throw error response for handling in the component
    }
};