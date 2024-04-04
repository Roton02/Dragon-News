// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDADDU_0G_Co1aXHNc02SX6bx18pb0XQQ8",
  authDomain: "dragon-news-58a45.firebaseapp.com",
  projectId: "dragon-news-58a45",
  storageBucket: "dragon-news-58a45.appspot.com",
  messagingSenderId: "824889897421",
  appId: "1:824889897421:web:3bbc48ed4f16dc66519484"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default {auth};