import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBs7WOgN6JR9NJ2KQtMQl7hcqyHIa0mOFc",
  authDomain: "admin-panel-41821.firebaseapp.com",
  projectId: "admin-panel-41821",
  storageBucket: "admin-panel-41821.appspot.com",
  messagingSenderId: "792024348887",
  appId: "1:792024348887:web:3218086ddb11ca39a45892"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);
