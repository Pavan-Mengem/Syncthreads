import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import connectDB from './config/db.js';


const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Database connection
connectDB();
// import routes

import authRoutes from './routes/auth.routes.js';
import mapRoutes from './routes/map.routes.js';
import dashboardRoutes from './routes/dashboard.routes.js';

// Routes
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/map', mapRoutes);
app.use('/api/v1/dashboard', dashboardRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});