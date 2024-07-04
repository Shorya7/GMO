import React from 'react';
import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
  Component: React.ComponentType;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ Component }) => {
  const userDetails = localStorage.getItem('userDetails');

  if (!userDetails) {
    alert('You must enter your details before accessing this page.');
    return <Navigate to="/register" />;
  }

  return <Component />;
};

export default ProtectedRoute;
