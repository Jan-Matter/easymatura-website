import React, { useEffect, useState } from 'react';
import ProtectedPageWrapper from '../Component/ProtectedPageWrapper';
import { useAuth } from './../Context/AuthContext';
import ProtectedRoute from './../Component/ProtectedRoute';
import { useUser } from './../Context/UserContext';
import CourseCard from './../Component/CourseCard';
import { useNavigate } from 'react-router';
import { useGymnasium } from './../Context/GymnasiumContext';
import calculateDiscount from './../functions/calculateDiscount';
import LastWatchedContent from './../Component/LastWatchedContent';

function DashboardPage(props) {
    const [discountStatus, setDiscountStatus] = useState();
    const [progressMath, setProgressMath ] = useState();
    const [progressDeutsch, setProgressDeutsch ] = useState();
    const { userData } = useUser();
    const navigate = useNavigate();
    const { gymnasiumData } = useGymnasium();

    useEffect(() => {
        if(gymnasiumData){
            console.log(calculateDiscount(gymnasiumData.size, gymnasiumData.mathematik.particCount));
            setDiscountStatus(calculateDiscount(gymnasiumData.size, gymnasiumData.mathematik.particCount));
            setProgressMath(parseInt((userData.progress.vektoren + userData.progress.differential + userData.progress.integral + userData.progress.wahrscheinlichkeit) / 4))
            setProgressDeutsch(parseInt((userData.progress.aufklärung + userData.progress.klassik + userData.progress.realismus + userData.progress.sturmUndDrang) / 4))
        }
    }, [gymnasiumData])

    return (
        <ProtectedPageWrapper>
            <h1> Hallo {userData && userData.firstName} </h1>
            <h1>Momentan: {discountStatus} % Rabatt an deiner Schule!</h1>
            <button onClick={() => navigate("/kurse/mathematik/overview")}><CourseCard progress={progressMath} title="Mathematik"/></button>
            <LastWatchedContent contentID={userData && userData.lastWatchedInCourse.mathematik}/>
            <button onClick={() => navigate("/kurse/deutsch/overview")}><CourseCard progress={progressDeutsch} title="Deutsch"/></button>
            <LastWatchedContent contentID={userData && userData.lastWatchedInCourse.deutsch}/>
        </ProtectedPageWrapper>
        
    );
}

export default DashboardPage;