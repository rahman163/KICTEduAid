// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA0LCRdgBf5e-UCud1DyWVnaINQD5n1lqs",
  authDomain: "studentsolution-93ebb.firebaseapp.com",
  projectId: "studentsolution-93ebb",
  storageBucket: "studentsolution-93ebb.appspot.com",
  messagingSenderId: "602572736176",
  appId: "1:602572736176:web:884f7786c848646f9d9d75"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);