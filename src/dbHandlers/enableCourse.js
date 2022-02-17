
import { updateDoc, doc, Timestamp, getDoc, arrayUnion, increment} from '@firebase/firestore';
import db from './../firebase/firebase-db';

import createKlasseinDB from './createKlasseInDB';

export default async function enableCourse(course, email, gymnasium, klasse){
    const { klasseID, gymnasiumID } = (await getDoc(doc(db, "Users", email))).data();
    await updateDoc(doc(db, "Users", email), {
        [course] : {
            buyDate : Timestamp.fromDate(new Date()),
            enabled : true,
            paymentConfirmed : false,
            opened : [],
        }
    });
    const participantsReference = course + ".participants";
    const participantCountReference = course + ".particCount";

    await updateDoc(doc(db, "Gymnasien", gymnasiumID), {
        [participantsReference] : arrayUnion(email),
        [participantCountReference] : increment(1),
    });

    if(!(await getDoc(doc(db, "Klassen", klasseID))).exists()){
        await createKlasseinDB(gymnasium, klasse);
    }
    await updateDoc(doc(db, "Klassen", klasseID), {
        [participantsReference]: arrayUnion(email),
        [participantCountReference]: increment(1),
    });

}