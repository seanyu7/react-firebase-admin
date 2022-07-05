import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const API_KEY = process.env.REACT_APP_FIREBASE_API_KEY;

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: "admin-panel-41821.firebaseapp.com",
  projectId: "admin-panel-41821",
  storageBucket: "admin-panel-41821.appspot.com",
  messagingSenderId: "792024348887",
  appId: "1:792024348887:web:3218086ddb11ca39a45892"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth();