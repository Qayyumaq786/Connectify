// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDGGKUkeJU5knyXdT38Q1ahzxNkauwUUpU",
  authDomain: "bilsmod.firebaseapp.com",
  projectId: "bilsmod",
  storageBucket: "bilsmod.appspot.com",
  messagingSenderId: "909435650947",
  appId: "1:909435650947:web:01e50cdfd2b061c1a86cb6",
  measurementId: "G-JXM02PR86C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
export {auth, app};