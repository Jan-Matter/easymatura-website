import React, { useEffect, useState} from 'react';
import { doc, onSnapshot, getDoc } from '@firebase/firestore';
import db from '../firebase/firebase-db';

import ProtectedPageWrapper from './../Component/ProtectedPageWrapper';
import useScript from './../Hooks/useScript';
import { useParams } from 'react-router-dom';
import { useUser } from './../Context/UserContext';
import MessageWindow from './../Component/MessageWindow';


function VideoplayerPage(props) {
    useScript("https://player.vimeo.com/api/player.js");
    const [videoData, setVideoData] = useState();
    const { course, subject, contentID } = useParams();
    const { watchContent } = useUser();

    useEffect(async () => {
        watchContent(course, subject, contentID);

        const videoDoc = doc(db, "Content", contentID);

        const unsubscribe = onSnapshot(videoDoc)(doc => {
            setVideoData(doc.data());
        })

        const videoDataSnap = await getDoc(videoDoc);
        setVideoData(videoDataSnap.data());

        return unsubscribe;
    }, [])

    return (
        <ProtectedPageWrapper>
            <div >
                <iframe src={`https://player.vimeo.com/video/${contentID}`} style={{position: "absolute", width: "80%", height: "80%" }} frameborder="0" title="Ebene Parameterform-Koordinatenform">
                </iframe>
            </div>
       </ProtectedPageWrapper>
    );
}

export default VideoplayerPage;

