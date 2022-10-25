// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJU4VKas3LHzDuS7TMcvWUjlFuNlMjQFQ",
  authDomain: "ph-learning.firebaseapp.com",
  projectId: "ph-learning",
  storageBucket: "ph-learning.appspot.com",
  messagingSenderId: "676289923040",
  appId: "1:676289923040:web:ba79f91038cca14f950d85"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;