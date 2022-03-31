// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDoI17v7aH5XVUfxAgBF8l124ELiJ1_ok8",
  authDomain: "sparta-react-basic-6ff45.firebaseapp.com",
  projectId: "sparta-react-basic-6ff45",
  storageBucket: "sparta-react-basic-6ff45.appspot.com",
  messagingSenderId: "817666115993",
  appId: "1:817666115993:web:e2ee244e8ba423557d6b08",
  measurementId: "G-4J0NEHGCBJ"
};

// Initialize Firebase
initializeApp(firebaseConfig);
// const app = initializeApp(firebaseConfig);

export const db = getFirestore();