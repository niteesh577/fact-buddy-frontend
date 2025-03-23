// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "fact-buddy-74b37.firebaseapp.com",
  projectId: "fact-buddy-74b37",
  storageBucket: "fact-buddy-74b37.firebasestorage.app",
  messagingSenderId: "504344262298",
  appId: "1:504344262298:web:36d327df3f61f7e8231123",
  measurementId: "G-0YXHXNM5YL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);