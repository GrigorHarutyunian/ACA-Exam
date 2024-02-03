import { initializeApp } from "firebase/app";
import { getDatabase, ref, update } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyA-2tjhYchJ5eD52Ctz2WkQg1ST6MqcmHM",
  authDomain: "examen-80e7c.firebaseapp.com",
  databaseURL: "https://examen-80e7c-default-rtdb.firebaseio.com",
  projectId: "examen-80e7c",
  storageBucket: "examen-80e7c.appspot.com",
  messagingSenderId: "803772264974",
  appId: "1:803772264974:web:20bc89d181daf316b3825f",
  measurementId: "G-M0XVEZ6HY9",
};

export const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
