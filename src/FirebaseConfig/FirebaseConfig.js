// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getStorage, ref } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9TCkv1YdSw_1LabDQJfF-205MCu75_F8",
  authDomain: "images-4caf3.firebaseapp.com",
  projectId: "images-4caf3",
  storageBucket: "images-4caf3.appspot.com",
  messagingSenderId: "518126944399",
  appId: "1:518126944399:web:5b472c1e4ef1acabfff0fa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const  storage = getStorage(app);
