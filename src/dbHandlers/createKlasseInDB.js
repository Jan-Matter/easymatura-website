import { getDoc, setDoc, doc } from '@firebase/firestore';
import db from './../firebase/firebase-db';
import createKlasseID from './../functions/createKlasseID';

export default async function createKlasseInDB(gymnasium, klassenName){

    await setDoc(doc(db, "Klassen", createKlasseID(gymnasium, klassenName) ), {
        name: klassenName,
        mathematik: {
            participants : [],
            particCount: 0,
            messages: [],
        },
        deutsch: {
            participants : [],
            particCount: 0,
            messages: [],
        }
    })
}