import React, { useEffect, useState } from 'react';
import { onSnapshot, doc, getDoc } from '@firebase/firestore';
import db from '../firebase/firebase-db';

import CourseCard from './CourseCard';
import { useNavigate } from 'react-router-dom';
import { useUser } from './../Context/UserContext';

function LastWatchedContent({contentID}) {
    const [lastWatched, setLastWatched] = useState();
    const navigate = useNavigate();
    const { userData } = useUser();

    useEffect(async () => {

        const unsubscribe = onSnapshot(doc(db, "Content", contentID), (doc) => {
            setLastWatched(doc.data());
        })

        const lastWatchedSnap = await getDoc(doc(db, "Klassen", userData.klasseID));
        setLastWatched(lastWatchedSnap.data());
        
    }, [contentID])
    return (
        <div>
            {lastWatched && <button onClick={() => navigate(`/kurse/${lastWatched.course}/${lastWatched.subject}/${contentID}`)}><CourseCard title={"Zum letzten Video: " + lastWatched.title} /></button>}
        </div>
    );
}

export default LastWatchedContent;