// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBLd-tu9PXA9VoMpdb3TpiOQMlKhR0u_Tw",
  authDomain: "react-martin.firebaseapp.com",
  projectId: "react-martin",
  storageBucket: "react-martin.firebasestorage.app",
  messagingSenderId: "16809890574",
  appId: "1:16809890574:web:8002a30c33658f7eaefd5f",
  measurementId: "G-JCXWTHSD04"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);
 export const db = getFirestore(app)