// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDN5_iBAupMJ-a0wgJnyMe7OiNz61vER1Y",
  authDomain: "netflixgpt-a8d72.firebaseapp.com",
  projectId: "netflixgpt-a8d72",
  storageBucket: "netflixgpt-a8d72.appspot.com",
  messagingSenderId: "736040058617",
  appId: "1:736040058617:web:ff366518223d947a6bac28",
  measurementId: "G-ML51760B8W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();