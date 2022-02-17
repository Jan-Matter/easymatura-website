import React from 'react';
import PageWrapper from './PageWrapper';
import { useAuth } from '../Context/AuthContext';
import { Navigate } from 'react-router';

function NewUserPageWrapper({ children }) {
    const { currentUser } = useAuth();
    return (
        <PageWrapper>
            {currentUser ? <Navigate to="/dashboard"/> : children}
        </PageWrapper>
    );
}

export default NewUserPageWrapper;