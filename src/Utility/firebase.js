// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3d6HIqkF-z0wnQd1ARNYQeC2R0mXR1UY",
  authDomain: "e-project-555fd.firebaseapp.com",
  projectId: "e-project-555fd",
  storageBucket: "e-project-555fd.appspot.com",
  messagingSenderId: "768179137992",
  appId: "1:768179137992:web:52ef2828b30d5e915564fd",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firestore();
