import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDcM6NiLb4ZfUwtQ-4rBmMH_6WgWxIIqj0",
  authDomain: "miniblog-react-2d1fd.firebaseapp.com",
  projectId: "miniblog-react-2d1fd",
  storageBucket: "miniblog-react-2d1fd.appspot.com",
  messagingSenderId: "166064444253",
  appId: "1:166064444253:web:5ac01c65ef3cf02f2bceb4"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
