import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAMS11LJGTlFRwNTayUj4dKoZTSY-7-tqM",
  authDomain: "next-crud-app-aa9ce.firebaseapp.com",
  projectId: "next-crud-app-aa9ce",
  storageBucket: "next-crud-app-aa9ce.appspot.com",
  messagingSenderId: "242566422774",
  appId: "1:242566422774:web:c788abf480bb99a41a8cd7",
  measurementId: "G-1YHD5F2N83"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);