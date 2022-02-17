import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBSVcmgCos68XqnXevueihMGbmijJWLwWk",
  authDomain: "easymatura-f5c59.firebaseapp.com",
  projectId: "easymatura-f5c59",
  storageBucket: "easymatura-f5c59.appspot.com",
  messagingSenderId: "573975361364",
  appId: "1:573975361364:web:e2929d2b48ef2aa0cd3ac1",
  measurementId: "G-SDT8QDEG5Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;