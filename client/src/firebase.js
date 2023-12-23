// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-f6e66.firebaseapp.com",
  projectId: "mern-estate-f6e66",
  storageBucket: "mern-estate-f6e66.appspot.com",
  messagingSenderId: "697970385510",
  appId: "1:697970385510:web:14d002ba56a44a2275c3a7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
