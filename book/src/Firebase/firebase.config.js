// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZvi_KRNvEv-Aq6snZJV-ukKN76AzDYgM",
  authDomain: "booknest-cad3c.firebaseapp.com",
  projectId: "booknest-cad3c",
  storageBucket: "booknest-cad3c.appspot.com",
  messagingSenderId: "836240505530",
  appId: "1:836240505530:web:0c8d0e31713befe722a083"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;