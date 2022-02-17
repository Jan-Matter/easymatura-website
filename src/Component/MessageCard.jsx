import React, { useEffect, useState  } from 'react';
import { useParams, Navigate } from 'react-router-dom';

function MessageCard({ messageID }) {
    const [messageData, setMessageData] = useState();
    useEffect(() => {
        const messageDoc = doc(db, "Content", messageID);

        const unsubscribe = onSnapshot(messageDoc)(doc => {
            setMessageData(doc.data());
        })

        const messageDataSnap = await getDoc(messageDoc);
        setMessageData(messageDataSnap.data());

        return unsubscribe;
    }, [])

    return (
        <>
        {messageData &&
        <Navigate to="messageID">
            <div class="card" style={{width: "400px" }}>
                <div class="card-body">
                        <h5 class="card-title">{messageData.title}</h5>
                        <p class="card-text">{messageData.message}</p>
                        <p>{messageData.responseCounter} Antworten</p>
                </div>
            </div>
        </Navigate>}
        </>
    );
}

export default MessageCard;