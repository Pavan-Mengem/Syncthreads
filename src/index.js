import React from 'react';
import ReactDOM from 'react-dom';
import App from './routes/AppRoutes';
import { AuthProvider } from './context/AuthContext';
import './styles/styles.css';

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);