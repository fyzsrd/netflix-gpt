// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAhWgKbuHh0GqZzN4p-5Ya5nV-sScGNmyk",
  authDomain: "netflixgpt-f93db.firebaseapp.com",
  projectId: "netflixgpt-f93db",
  storageBucket: "netflixgpt-f93db.firebasestorage.app",
  messagingSenderId: "300641681347",
  appId: "1:300641681347:web:8ac46a23dbb947de5b8776",
  measurementId: "G-7H9NM1H7S9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth=getAuth()