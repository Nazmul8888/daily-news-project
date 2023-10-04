// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration



const firebaseConfig = {
  apiKey: "AIzaSyB6ANMLdmQ3749FlLt8kBkihAt_8OntlZs",
  authDomain: "daily-star-project.firebaseapp.com",
  projectId: "daily-star-project",
  storageBucket: "daily-star-project.appspot.com",
  messagingSenderId: "235158826172",
  appId: "1:235158826172:web:7b8ded32fb6f9b3f34f4b9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
