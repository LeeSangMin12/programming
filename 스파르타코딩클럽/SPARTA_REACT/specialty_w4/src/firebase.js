// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJggpW6EI9HzufGwKNE_QnMzXMxEIr-3I",
  authDomain: "sparta-react-basic-3574c.firebaseapp.com",
  projectId: "sparta-react-basic-3574c",
  storageBucket: "sparta-react-basic-3574c.appspot.com",
  messagingSenderId: "170606414137",
  appId: "1:170606414137:web:5d129bcc2acc3cf1a040e8",
  measurementId: "G-FKHKMTPP24"
};

// Initialize Firebase
initializeApp(firebaseConfig);
// const app = initializeApp(firebaseConfig);

export const db = getFirestore();