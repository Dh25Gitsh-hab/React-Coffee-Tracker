// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  /*apiKey: "AIzaSyCNKXn8hpJBwa_4ELsDcmJcYc7AbQDuiiY",
  authDomain: "coffee-tracker-e2209.firebaseapp.com",
  projectId: "coffee-tracker-e2209",
  storageBucket: "coffee-tracker-e2209.firebasestorage.app",
  messagingSenderId: "864068586517",
  appId: "1:864068586517:web:1cddcaf1a370ce3fd9121c"
 */

  apiKey: "AIzaSyCNKXn8hpJBwa_4ELsDcmJcYc7AbQDuiyI",
  authDomain: "coffee-tracker-e2209.firebaseapp.com",
  projectId: "coffee-tracker-e2209",
  storageBucket: "coffee-tracker-e2209.firebasestorage.app",
  messagingSenderId: "864068586517",
  appId: "1:864068586517:web:1cddcaf1a370ce3fd9121c",
  measurementId: "G-MG1QG1HN8E"
  
};

console.log("API KEY:", firebaseConfig.apiKey);
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);