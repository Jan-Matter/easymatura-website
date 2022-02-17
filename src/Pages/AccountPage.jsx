import React from 'react';
import ProtectedPageWrapper from './../Component/ProtectedPageWrapper';
import { useAuth } from '../Context/AuthContext';

function AccountPage(props) {
    const { logout } = useAuth();
    return (
        <ProtectedPageWrapper>
            <h1>AccountPage</h1>
            <button className="btn btn-primary" onClick={logout}>Log out</button>
        </ProtectedPageWrapper>
    );
}

export default AccountPage;