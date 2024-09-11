// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyASmeNAMnqs72wim47JMebZcVK0WsUr0sA",
  authDomain: "netflixgpt1303.firebaseapp.com",
  projectId: "netflixgpt1303",
  storageBucket: "netflixgpt1303.appspot.com",
  messagingSenderId: "933614068643",
  appId: "1:933614068643:web:3dd7842fba75ede2ce7016",
  measurementId: "G-PYYVGHM79P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
