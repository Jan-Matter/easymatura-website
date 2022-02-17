import React, { useContext, useState, useEffect } from "react"
import { arrayUnion, doc, getDoc, onSnapshot, setDoc, Timestamp, increment, updateDoc } from "@firebase/firestore";

import db from "../firebase/firebase-db";

import { useAuth } from './AuthContext';

const UserContext = React.createContext()

export function useUser() {
  return useContext(UserContext)
}

export function UserProvider({ children }) {
    const { currentUser } = useAuth();
    const [loading, setLoading] = useState(true);
    const [ userData, setUserData ] = useState();

    async function openedCourse(currentCourse){
            await updateDoc(doc(db, "Users", currentUser.email), {
                [currentCourse + "opened"]: arrayUnion(Timestamp.fromDate(new Date()))
            });
    }

    async function watchContent(course, subject, contentID){
        const contentNumber = (await getDoc(doc(db, "Products", course))).data().contentNumber[subject];
        let watchNumber = (await getDoc(doc(db, "Users", currentUser.email))).data().watchNumber[subject];
        //Content is watched for the first time
        const contentWatchedReference = "contentWatched." + contentID;
        const lastWatchedReferenceSubject = "lastWatched." + subject;
        const lastWatchedReferenceCourse = "lastWatchedInCourse." + course;
        const progressReference = "progress." + subject;
        const watchNumberReference = "watchNumber." + subject;
        
        if(!userData.contentWatched[contentID]){
            await updateDoc(doc(db, "Users", currentUser.email), {
                contentReference : [],
                [watchNumberReference] : increment(1),
            })
            watchNumber += 1;
        }

        await updateDoc(doc(db, "Users", currentUser.email), {
            [contentWatchedReference] : arrayUnion(Timestamp.fromDate(new Date)),
            [lastWatchedReferenceSubject] : contentID,
            [lastWatchedReferenceCourse] : contentID,
            [progressReference] : parseInt(watchNumber / contentNumber * 100),
        })

    }

    useEffect(async () => {
        if(!currentUser) {
            setLoading(false);
            return;
        }

        const unsubscribe = onSnapshot(doc(db, "Users", currentUser.email), doc => {
            setUserData(doc.data());
        })

        const userDataSnap = await getDoc(doc(db, "Users", currentUser.email));
        setUserData(userDataSnap.data());

        setLoading(false);
        return unsubscribe;
    }, [currentUser]);

    const value = {
        userData,
        watchContent,
        openedCourse,
    }

    return (
        <UserContext.Provider value={value}>
            {!loading && children}
        </UserContext.Provider>
    )
}