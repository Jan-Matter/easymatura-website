import React from 'react';
import { Link } from 'react-router-dom';

import { useAuth } from '../Context/AuthContext';

function PageWrapper({children}) {
    const { currentUser } = useAuth();
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/" >easymatura</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-link" to="/about" >About</Link>
                        <Link className="nav-link" to="/kontakt" >Kontakt</Link>
                        { currentUser ? <Link className="nav-link" to="/account">Account</Link> : <Link className="nav-link" to="/login">Login</Link> }
                    </div>
                    </div>
                </div>
            </nav>
            {children}
        </div>
    );
}

export default PageWrapper;