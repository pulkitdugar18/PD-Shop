// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import { getAuth } from "firebase/auth"; 
// Your web app's Firebase configuration


const firebaseConfig = {
  apiKey: "AIzaSyArP0OEUFuxCVPAzlyWUmR-YXScy2vlrGU",
  authDomain: "pd-shop-7e8b0.firebaseapp.com",
  projectId: "pd-shop-7e8b0",
  storageBucket: "pd-shop-7e8b0.appspot.com",
  messagingSenderId: "725576215795",
  appId: "1:725576215795:web:a7ed60e979d901adc75b86"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export {fireDB, auth};