import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ Component }: { Component: React.ComponentType }) => {
  const userDetails = localStorage.getItem('userDetails');

  if (!userDetails) {
    alert('You must enter your details before accessing this page.');
    return <Navigate to="/register" />;
  }

  return <Component />;
};

export default ProtectedRoute;
