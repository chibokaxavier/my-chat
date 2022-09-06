// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { doc, onSnapshot, collection } from "firebase/firestore";



const firebaseConfig = {
    apiKey: "AIzaSyDmiGL712F9yazQnLo0LH52Qp_L22rtzkA",
    authDomain: "my-chat-3068a.firebaseapp.com",
    projectId: "my-chat-3068a",
    storageBucket: "my-chat-3068a.appspot.com",
    messagingSenderId: "652134834748",
    appId: "1:652134834748:web:6b6084d7a89ec9d8f15939",
    measurementId: "G-3SL69TSSHK"
  };

  // Initialize Firebase
let app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();

export default app
export { auth,db }



