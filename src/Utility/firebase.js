import firebase from "firebase/compat/app";
//auth
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";

// Your web app's Firebase configuration
/* const firebaseConfig = {
  apiKey: "AIzaSyBXMmw-jnkylWaivcgrpYrXrmznI7bIIDo",
  authDomain: "clone-44cba.firebaseapp.com",
  projectId: "clone-44cba",
  storageBucket: "clone-44cba.appspot.com",
  messagingSenderId: "233417398585",
  appId: "1:233417398585:web:920186971e51c37ae070e8",
};
 */

const firebaseConfig = {
  apiKey: "AIzaSyBnbn2_jraVr1e7oT7G9q6dbH0RnyMJ6PA",
  authDomain: "clone-47310.firebaseapp.com",
  projectId: "clone-47310",
  storageBucket: "clone-47310.appspot.com",
  messagingSenderId: "4636854220",
  appId: "1:4636854220:web:bcc97eddc96501c77e7f69",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firestore();
