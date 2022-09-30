import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDRPtoliayWlrkjDMWzXOOGzMt_Wlmkk6I",
  authDomain: "used-cars-e2bb5.firebaseapp.com",
  projectId: "used-cars-e2bb5",
  storageBucket: "used-cars-e2bb5.appspot.com",
  messagingSenderId: "567226988397",
  appId: "1:567226988397:web:2a2a196c373acefa058c64",
  measurementId: "G-5G1409VHZH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const firestore = getFirestore(app);