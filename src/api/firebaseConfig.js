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
  apiKey: "AIzaSyDtvG2kxURqjR7apcMNCABraQJ0aDT1UVo",
  authDomain: "midjotest2.firebaseapp.com",
  projectId: "midjotest2",
  storageBucket: "midjotest2.appspot.com",
  messagingSenderId: "1005210459380",
  appId: "1:1005210459380:web:52ca0632c5427515b252a1",
  measurementId: "G-6HJG8WED45"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app)

export {db,auth};
