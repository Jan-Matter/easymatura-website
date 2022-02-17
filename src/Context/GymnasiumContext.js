import React, { useContext, useState, useEffect, updateDoc, arrayUnion } from "react"
import { doc, getDoc, increment, onSnapshot } from "@firebase/firestore";

import db from "../firebase/firebase-db";
import { useUser } from './UserContext';


const GymnasiumContext = React.createContext()

export function useGymnasium() {
  return useContext(GymnasiumContext)
}

export function GymnasiumProvider({ children }) {
    const { userData } = useUser();
    const [ gymnasiumData, setGymnasiumData] = useState();
    const [ loading, setLoading] = useState(true);

    useEffect(async () => {
        if(!userData){
            setLoading(false);
            return;
        }
 
        const unsubscribe = onSnapshot(doc(db, "Gymnasien", userData.gymnasiumID), (doc) => {
            setGymnasiumData(doc.data());
        })

        const gymnasiumDataSnap = await getDoc(doc(db, "Gymnasien", userData.gymnasiumID));
        setGymnasiumData(gymnasiumDataSnap.data());
        
        setLoading(false);
        return unsubscribe
    }, [userData])

    const value = {
        gymnasiumData,
    }

    return (
        <GymnasiumContext.Provider value={value}>
            {!loading && children}
        </GymnasiumContext.Provider>
    )
}