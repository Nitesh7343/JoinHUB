import { initializeApp } from "firebase/app";
import { signInWithPopup } from "firebase/auth";
import {
  getAuth,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBOkBSC-LI8WPmGTIjYdEe4MOCZTivE09M",
  authDomain: "join-hub-8fa6c.firebaseapp.com",
  projectId: "join-hub-8fa6c",
  storageBucket: "join-hub-8fa6c.firebasestorage.app",
  messagingSenderId: "485344586375",
  appId: "1:485344586375:web:0a7e93992f10c66e456622",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const googleProvider = new GoogleAuthProvider();

export default app;