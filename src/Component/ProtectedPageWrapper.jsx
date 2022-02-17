import React from 'react';
import ProtectedRoute from './ProtectedRoute';
import PageWrapper from './PageWrapper';

function ProtectedPageWrapper({children}) {
    return (
        <ProtectedRoute>
            <PageWrapper>
                {children}
            </PageWrapper>
        </ProtectedRoute>
    );
}

export default ProtectedPageWrapper;