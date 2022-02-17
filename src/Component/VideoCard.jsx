import React, { useEffect, useState} from 'react';
import { doc, onSnapshot, getDoc } from '@firebase/firestore';

import db from '../firebase/firebase-db';
import ProtectedPageWrapper from './../Component/ProtectedPageWrapper';
import { useParams, useNavigate } from 'react-router-dom';
import { Navigate } from 'react-router';

function VideoCard({contentID}) {
    const [videoData, setVideoData] = useState();
    const { course, subject } = useParams();
    const navigate = useNavigate();

    useEffect(async () => {

        const videoDoc = doc(db, "Content", contentID);

        const unsubscribe = onSnapshot(videoDoc)(doc => {
            setVideoData(doc.data());
        })

        const videoDataSnap = await getDoc(videoDoc);
        setVideoData(videoDataSnap.data());

        return unsubscribe;
    }, [])

    return (
        <>
        {videoData &&
                <div className="card" style={{width: "400px" }}>
                    <div className="card-body">
                            <h5 className="card-title">{videoData.title}</h5>
                            <p className="card-text">{videoData.description}</p>
                            <p>{parseInt( videoData.duration / 60 ) } min</p>
                    </div>
                    <button className="btn btn-primary" onClick={() => navigate(`${contentID}`)}>zum Video</button>
                </div>
            }
        </>
    );
}

export default VideoCard;