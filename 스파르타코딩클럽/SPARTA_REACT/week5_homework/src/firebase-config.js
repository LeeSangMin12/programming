// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDjASg6BE-5OsJYc3oYPtmBsobpN1frS3M",
  authDomain: "week5-homework-43955.firebaseapp.com",
  projectId: "week5-homework-43955",
  storageBucket: "week5-homework-43955.appspot.com",
  messagingSenderId: "12814572306",
  appId: "1:12814572306:web:3f2f42502bd9bdf05531cb",
  measurementId: "G-ZTHFTZNY09"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);