import { getFirestore } from "firebase/firestore";

import app from "./firebase-app";

const db = getFirestore(app);

export default db;