import React, { useContext, useState, useEffect } from "react"
import { arrayUnion, doc, getDoc, onSnapshot, setDoc, Timestamp, updateDoc } from "@firebase/firestore";

import db from "../firebase/firebase-db";
import { useUser } from './UserContext';


const KlasseContext = React.createContext()

export function useKlasse() {
  return useContext(KlasseContext)
}

export function KlasseProvider({ children }) {
    const { userData } = useUser();
    const [ klasseData, setKlasseData] = useState();
    const [ loading, setLoading] = useState(true);

    useEffect(async () => {
        if(!userData){
            setLoading(false);
            return;
        }

        const unsubscribe = onSnapshot(doc(db, "Klassen", userData.klasseID), (doc) => {
            setKlasseData(doc.data());
        })

        const klasseDataSnap = await getDoc(doc(db, "Klassen", userData.klasseID));
        setKlasseData(klasseDataSnap.data());

        setLoading(false);
        return unsubscribe
    }, [userData])

    const value = {
        klasseData,
    }

    return (
        <KlasseContext.Provider value={value}>
            {!loading && children}
        </KlasseContext.Provider>
    )
}