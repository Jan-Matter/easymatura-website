import React, { useEffect, useState } from 'react';
import db from '../firebase/firebase-db';

import { getDoc, onSnapshot, doc } from '@firebase/firestore';

import ProtectedPageWrapper from './../Component/ProtectedPageWrapper';
import { useCourse } from '../Context/CourseContext';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router-dom';
import CourseCard from './../Component/CourseCard';
import { useUser } from './../Context/UserContext';
import LastWatchedContent from '../Component/LastWatchedContent';


function CoursePage(props) {
    const [ loading, setLoading ] = useState(true);
    const [ progress, setProgress ] = useState();
    const { userData }  = useUser();
    const { course } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if(!userData) return;

        setProgress(userData.progress);
        setLoading(false);
             
    },[userData]);

    return ( 
        
        <ProtectedPageWrapper>

            {!loading && <>
            {course === "mathematik" ? <>
            <button onClick={() => navigate("/kurse/mathematik/vektoren")}><CourseCard progress={progress.vektoren} title="Vektoren"/></button>
            <button onClick={() => navigate("/kurse/deutsch/differential")}><CourseCard progress={progress.differential} title="Differential"/></button>
            <button onClick={() => navigate("/kurse/mathematik/integral")}><CourseCard progress={progress.integral} title="Integral"/></button>
            <button onClick={() => navigate("/kurse/mathematik/wahrscheinlichkeit")}><CourseCard progress={progress.wahrscheinlichkeit} title="Wahrscheinlichkeit"/></button>
            <LastWatchedContent contentID={userData && userData.lastWatchedInCourse.mathematik}/>
            </> : <>
            <button onClick={() => navigate("/kurse/mathematik/aufklärung")}><CourseCard progress={progress.aufklärung} title="Aufklärung"/></button>
            <button onClick={() => navigate("/kurse/deutsch/realismus")}><CourseCard progress={progress.realismus} title="Realismus"/></button>
            <button onClick={() => navigate("/kurse/mathematik/sturmUndDrang")}><CourseCard progress={progress.sturmUndDrang} title="Sturm und Drang"/></button>
            <button onClick={() => navigate("/kurse/deutsch/klassik")}><CourseCard progress={progress.klassik} title="Klassik"/></button>
            <button className="btn btn-primary" onClick={() => navigate("/kurse/deutsch/wahrscheinlichkeit")}>zum letzten Video</button>
            <LastWatchedContent contentID={userData && userData.lastWatchedInCourse.mathematik}/>
            </>
            }
            </>}
            </ProtectedPageWrapper>
    );
}

export default CoursePage;