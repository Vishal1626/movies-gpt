// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBitOifDB83QM5U8r3uAdSdxAmFG63vr-Q",
  authDomain: "netflixgpt-f1b64.firebaseapp.com",
  projectId: "netflixgpt-f1b64",
  storageBucket: "netflixgpt-f1b64.appspot.com",
  messagingSenderId: "871637350133",
  appId: "1:871637350133:web:5c011715e800b10febb7bc",
  measurementId: "G-8CFHCTDT64",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
