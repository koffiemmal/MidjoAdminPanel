// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDnFKOWGaAdd3LKGAWIIgATrVuiZ4DTg3I",
  authDomain: "midjo-493f5.firebaseapp.com",
  projectId: "midjo-493f5",
  storageBucket: "midjo-493f5.appspot.com",
  messagingSenderId: "147892870079",
  appId: "1:147892870079:web:5fa685791bed397b21df0a",
  measurementId: "G-E2KH9H40EH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app)

export {db,auth};
