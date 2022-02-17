import React from 'react';
import PageWrapper from './../Component/PageWrapper';
import { useNavigate, useParams } from 'react-router';



function WelcomePage(props) {
    const { course } = useParams();
    const navigate = useNavigate();

    const handleProceed = () =>  {
        navigate("/dashboard");
    }

    return (
        <PageWrapper>
           Willkommen zum {course === "deutsch" ? "Deutsch" : "Mathematik"} Kurs
           <button className="btn btn-primary" onClick={handleProceed}>Weiter zum Kurs</button>
        </PageWrapper>
    );
}

export default WelcomePage;