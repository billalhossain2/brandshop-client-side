// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhaPfI4WEn5aQtiX1pmJKYWfwm2JlPeTE",
  authDomain: "tech-store-c80b8.firebaseapp.com",
  projectId: "tech-store-c80b8",
  storageBucket: "tech-store-c80b8.appspot.com",
  messagingSenderId: "137246872299",
  appId: "1:137246872299:web:4071ffc4c74884b3cfa4ae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;