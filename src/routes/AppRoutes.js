import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Login from '../components/Login';
import Dashboard from '../components/Dashboard';
import MapView from '../components/MapView';
import { useAuth } from '../context/AuthContext';

const AppRoutes = () => {
    const { isAuthenticated } = useAuth();

    return (
        <Router>
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/dashboard">
                    {isAuthenticated ? <Dashboard /> : <Redirect to="/login" />}
                </Route>
                <Route path="/map">
                    {isAuthenticated ? <MapView /> : <Redirect to="/login" />}
                </Route>
                <Redirect from="/" to="/login" />
            </Switch>
        </Router>
    );
};

export default AppRoutes;