// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCiKgxzbIwgsFFKwyW5liy0u4S4xJdZN6U",
  authDomain: "online-food-recipe.firebaseapp.com",
  projectId: "online-food-recipe",
  storageBucket: "online-food-recipe.appspot.com",
  messagingSenderId: "426017816794",
  appId: "1:426017816794:web:5edec30c6ddf8f6d55a5e3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;