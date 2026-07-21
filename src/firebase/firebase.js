import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDjhqpibxvwcCXeD7-BJBOGaDsrmT0VBDE",

  authDomain: "planora-f2f64.firebaseapp.com",

  projectId: "planora-f2f64",

  storageBucket: "planora-f2f64.firebasestorage.app",

  messagingSenderId: "410668003029",

  appId: "1:410668003029:web:c387aa7b470a26126ffc5c",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);

export default app;