// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCl7d1GDKZqD2Dol2nbG18vmoopj3mDAEY",
  authDomain: "gdh-redesign.firebaseapp.com",
  projectId: "gdh-redesign",
  storageBucket: "gdh-redesign.firebasestorage.app",
  messagingSenderId: "25337139397",
  appId: "1:25337139397:web:de98129b2a3dff6413a0ac",
  measurementId: "G-HRGN6TMWB7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};