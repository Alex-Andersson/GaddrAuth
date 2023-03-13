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
  apiKey: "AIzaSyDw0IWoxXXfiSUS10xNQAZOFGD3-4hz-TM",
  authDomain: "gaddr-379817.firebaseapp.com",
  projectId: "gaddr-379817",
  storageBucket: "gaddr-379817.appspot.com",
  messagingSenderId: "658786284542",
  appId: "1:658786284542:web:788a956735eecd1117c6af",
  measurementId: "G-7DPEESG92S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export const auth = getAuth(app);