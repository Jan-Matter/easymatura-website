import { setDoc, doc } from '@firebase/firestore';
import db from '../firebase/firebase-db';
import createKlasseID from '../functions/createKlasseID';

export default async function createUserInDB(firstName, surName, email, phone, gymnasium, klasse){
    const userObject = {
        firstName,
        surName,
        phone,
        klasseID: createKlasseID(gymnasium, klasse),
        gymnasiumID : gymnasium,
        contentWatched: {},
        lastWatchedInCourse:{
            mathematik: "521839965",
            deutsch: "521839965",
        },
        lastWatched: {
            differential: null,
            integral: null,
            vektoren: null,
            wahrscheinlichkeit: null,
            aufklärung: null,
            realismus: null,
            sturmUndDrang: null,
            klassik: null,
        },
        watchNumber: {
            differential: 0,
            integral: 0,
            vektoren: 0,
            wahrscheinlichkeit: 0,
            aufklärung: 0,
            realismus: 0,
            sturmUndDrang: 0,
            klassik: 0,
        },
        favorite: {
            differential: [],
            integral: [],
            vektoren: [],
            wahrscheinlichkeit: [],
            aufklärung: [],
            realismus: [],
            sturmUndDrang: [],
            klassik: [],
        },
        progress: {
            differential: 0,
            integral: 0,
            vektoren: 0,
            wahrscheinlichkeit: 0,
            aufklärung: 0,
            realismus: 0,
            sturmUndDrang: 0,
            klassik: 0,
        },
        mathematik: {
            buyDate: null,
            enabled: false,
            paymentConfirmed: false,
            opened: [],
        },
        deutsch: {
            buyDate: null,
            enabled: false,
            paymentConfirmed: false,
            opened: [],
        }
    };
    setDoc(doc(db, "Users", email), userObject);
}