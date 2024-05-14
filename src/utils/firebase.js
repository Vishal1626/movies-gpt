// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCopMabEoTuYv2_Rpr6s5rC736j3DrLxrs",
  authDomain: "netflixgpt-6afbd.firebaseapp.com",
  projectId: "netflixgpt-6afbd",
  storageBucket: "netflixgpt-6afbd.appspot.com",
  messagingSenderId: "287692488482",
  appId: "1:287692488482:web:b8f6194281e55ed89f6f7b",
  measurementId: "G-W6T17LQC1S",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
