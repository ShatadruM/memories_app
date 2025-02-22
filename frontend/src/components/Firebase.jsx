// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBLF57t_bWtCY6oYdqxv-ETI8Hw7JLaqdA",
  authDomain: "memoriesauth-8818e.firebaseapp.com",
  projectId: "memoriesauth-8818e",
  storageBucket: "memoriesauth-8818e.firebasestorage.app",
  messagingSenderId: "697268477021",
  appId: "1:697268477021:web:2e21b32241a74f76f081b4",
  measurementId: "G-XZZWHF664Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export default app;