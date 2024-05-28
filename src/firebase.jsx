// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBK8ltKn_WHT5esuHoJb1yMj7TOsKQSJgA",
  authDomain: "practice2-af136.firebaseapp.com",
  projectId: "practice2-af136",
  storageBucket: "practice2-af136.appspot.com",
  messagingSenderId: "608316980612",
  appId: "1:608316980612:web:3bfd37169913025a6db1d1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database=getAuth(app);
