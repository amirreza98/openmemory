import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASRJp4C-SUbUnj-YQe4-b2phoMnEPDLU0",
  authDomain: "opengram-site-8d933.firebaseapp.com",
  projectId: "opengram-site-8d933",
  storageBucket: "opengram-site-8d933.appspot.com",
  messagingSenderId: "893581928645",
  appId: "1:893581928645:web:0b1307da1c6983e9a228ac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore 
const db = getFirestore(app);

// Initialize Storage
const storage = getStorage(app);

export {db, storage}



