
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

//Colocar os dados na env
const firebaseConfig = {
  apiKey: "AIzaSyCr-DmOvfjPRg4Ybnw2-b72vBzdtwwY2Q8",
  authDomain: "controleplantoes-5826f.firebaseapp.com",
  projectId: "controleplantoes-5826f",
  storageBucket: "controleplantoes-5826f.firebasestorage.app",
  messagingSenderId: "221444072479",
  appId: "1:221444072479:web:aca3e039aae34df3aa212a",
  measurementId: "G-R0023Y1GJ4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);