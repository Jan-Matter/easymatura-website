import { getAuth } from 'firebase/auth';

import app from "./firebase-app";

const auth = getAuth(app);

export default auth;

