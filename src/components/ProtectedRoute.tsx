import React from 'react';
import { Navigate } from 'react-router-dom';
import toast from 'react-hot-toast';

interface ProtectedRouteProps {
  Component: React.ComponentType;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ Component }) => {
  const userDetails = localStorage.getItem('userDetails');

  if (!userDetails) {
    toast.error('Uh-oh! Just enter your details first and see the magic');
    return <Navigate to="/register" />;
  }

  return <Component />;
};

export default ProtectedRoute;
