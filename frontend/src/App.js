import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ComunasPage from './pages/ComunasPage';
import VecinosPage from './pages/VecinosPage';
import NotFoundPage from './pages/NotFoundPage';

import Navbar from './components/Navbar/Navbar';

import { AuthProvider, useAuth } from './contexts/AuthContext';

const PrivateRoute = ({ children, allowedRoles }) => {
    const { isAuthenticated, user, loading } = useAuth();

    if (loading) {
        return <p>Cargando autenticación...</p>;
    }

    const userHasRequiredRole = user && allowedRoles ? allowedRoles.includes(user.role) : true;

    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }
    if (allowedRoles && !userHasRequiredRole) {
        return <Navigate to="/" replace />;
    }
    return children;
};

function App() {
    return (
        <Router>
            <AuthProvider>
                <Navbar />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/comunas" element={
                        <PrivateRoute>
                            <ComunasPage />
                        </PrivateRoute>
                    } />
                    <Route path="/vecinos" element={
                        <PrivateRoute>
                            <VecinosPage />
                        </PrivateRoute>
                    } />


                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </AuthProvider>
        </Router>
    );
}

export default App; 