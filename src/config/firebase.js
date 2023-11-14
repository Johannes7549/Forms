// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGgWxxDWqvLbnfnhTID0IWdP7CA-wDFOM",
  authDomain: "auth-31423.firebaseapp.com",
  projectId: "auth-31423",
  storageBucket: "auth-31423.appspot.com",
  messagingSenderId: "237934398504",
  appId: "1:237934398504:web:a9922dd7d41bfd0990f91d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export {auth}