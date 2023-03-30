import firebase from 'firebase/app';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import 'firebase/firestore';
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAKmia-Hs_AjVXwgajyW9LdEbMFy4c1XG0",
    authDomain: "notes-on-love.firebaseapp.com",
    projectId: "notes-on-love",
    storageBucket: "notes-on-love.appspot.com",
    messagingSenderId: "511287679526",
    appId: "1:511287679526:web:3ff8edf9b33964dfdb24e7"
  };
  
  // Initialize Firebase
  export const app = initializeApp(firebaseConfig);


  export const db = getFirestore(app);
 






