import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import api from '../services/api';
import './styles.css';

const Dashboard = () => {
    const { user, logout } = useContext(AuthContext);
    const [cards, setCards] = useState([]);

    useEffect(() => {
        const fetchDashboardData = async () => {
            try {
                const response = await api.get('api/v1/dashboard', {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                });
                setCards(response.data.cards);
            } catch (error) {
                console.error('Error fetching dashboard data:', error);
                if (error.response && error.response.status === 401) {
                    logout();
                }
            }
        };

        fetchDashboardData();
    }, [logout]);

    return (
        <div className="dashboard">
            <h1>Welcome, {user.username}</h1>
            <button onClick={logout}>Logout</button>
            <div className="card-container">
                {cards.map(card => (
                    <div key={card.id} className="card">
                        <h2>{card.title}</h2>
                        <p>{card.description}</p>
                        <Link to={`/map/${card.id}`}>View on Map</Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Dashboard;