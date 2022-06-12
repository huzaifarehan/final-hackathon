// Initialize Cloud Firestore through Firebase
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCnWKKASaymBFfwNotOjC6fCwQM-hPbftU",
  authDomain: "saylani-smit-student-portal.firebaseapp.com",
  projectId: "saylani-smit-student-portal",
  storageBucket: "saylani-smit-student-portal.appspot.com",
  messagingSenderId: "288465614773",
  appId: "1:288465614773:web:5c03e318d6541ed3d18bfc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const storage = getStorage();
const auth = getAuth();

export { storage, app, auth, db };

// export default app;

