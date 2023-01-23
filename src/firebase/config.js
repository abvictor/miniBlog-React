import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyByAwD0rcJt7251ia2tdxAZktqdkHQt5ns",
  authDomain: "miniblog-4a892.firebaseapp.com",
  databaseURL: "https://miniblog-4a892-default-rtdb.firebaseio.com",
  projectId: "miniblog-4a892",
  storageBucket: "miniblog-4a892.appspot.com",
  messagingSenderId: "29230137832",
  appId: "1:29230137832:web:03cd6c52bd353dc48f645d",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
