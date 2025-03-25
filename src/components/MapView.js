import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import axios from 'axios';

const MapView = () => {
    const [mapData, setMapData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMapData = async () => {
            try {
                const response = await axios.get('/api/v1/map', {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                });
                setMapData(response.data);
            } catch (err) {
                setError('Failed to fetch map data. Please log in.');
            } finally {
                setLoading(false);
            }
        };

        fetchMapData();
    }, []);

    if (loading) return <div>Loading map...</div>;
    if (error) return <div>{error}</div>;

    return (
        <MapContainer center={mapData.center} zoom={mapData.zoom} style={{ height: '100vh', width: '100%' }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {mapData.markers.map(marker => (
                <Marker key={marker.id} position={marker.position}>
                    <Popup>{marker.description}</Popup>
                </Marker>
            ))}
        </MapContainer>
    );
};

export default MapView;