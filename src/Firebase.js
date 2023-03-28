// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBlpXm1HaeLVvkNPI2IIfwfFd4hQ6QaKrU",
    authDomain: "project-aafed.firebaseapp.com",
    projectId: "project-aafed",
    storageBucket: "project-aafed.appspot.com",
    messagingSenderId: "1050674693529",
    appId: "1:1050674693529:web:f5571d9c212d2f60413f08",
    measurementId: "G-RW95HJ11DX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { auth, analytics, provider }