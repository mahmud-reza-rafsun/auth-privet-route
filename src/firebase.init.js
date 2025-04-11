// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDeUtsc_n7-DOaWrLCXPrXey7CzCRcLpCA",
  authDomain: "auth-privet-route-pra.firebaseapp.com",
  projectId: "auth-privet-route-pra",
  storageBucket: "auth-privet-route-pra.firebasestorage.app",
  messagingSenderId: "266801439182",
  appId: "1:266801439182:web:3e3f915e378caa7cce8b9f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
