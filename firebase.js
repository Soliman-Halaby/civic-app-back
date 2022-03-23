import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

import dotenv from "dotenv";
dotenv.config();

// console.log(process.env);

// Config firebase
const firebaseConfig = {
  apiKey: process.env.CIVIC_FIREBASE_API_KEY,
  authDomain: process.env.CIVIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.CIVIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.CIVIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.CIVIC_FIREBASE_MESSAGING_SEND_ID,
  appId: process.env.CIVIC_FIREBASE_APP_ID,
  measurementId: process.env.CIVIC_FIREBASE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);

// Initialize Firebase

export const db = getFirestore();

// export default { db };
