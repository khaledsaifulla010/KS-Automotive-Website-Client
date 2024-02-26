// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBVYQP1OFTE-DGelfFOmoEaPD87Kq9MdgY",
    authDomain: "ks-automotive-limited.firebaseapp.com",
    projectId: "ks-automotive-limited",
    storageBucket: "ks-automotive-limited.appspot.com",
    messagingSenderId: "151053323031",
    appId: "1:151053323031:web:28f2316ff0adb0b656c552"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 
const auth = getAuth(app);

export default auth;