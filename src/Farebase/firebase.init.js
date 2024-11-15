// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDkpFalJyasCd7Jej-xcppZop8XHRFgNZw",
  authDomain: "dragon-news-2bc80.firebaseapp.com",
  projectId: "dragon-news-2bc80",
  storageBucket: "dragon-news-2bc80.firebasestorage.app",
  messagingSenderId: "575318607366",
  appId: "1:575318607366:web:85bd54604ef80e44d3a587"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);  
export default auth;