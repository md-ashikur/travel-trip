// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3D1qqh0YpewFoS6BOSI9FdhvBSkC5l7E",
  authDomain: "travel-trip-11eb1.firebaseapp.com",
  projectId: "travel-trip-11eb1",
  storageBucket: "travel-trip-11eb1.appspot.com",
  messagingSenderId: "241249490208",
  appId: "1:241249490208:web:b0036733672ccd4d5a7345"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;