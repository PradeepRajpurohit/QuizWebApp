// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDcVAbsvWqlOkJKLdZRctUPIjA_9xF5AKA",
  authDomain: "quizapp-1e2b9.firebaseapp.com",
  projectId: "quizapp-1e2b9",
  storageBucket: "quizapp-1e2b9.appspot.com",
  messagingSenderId: "395849175224",
  appId: "1:395849175224:web:901e2da3fbd783d3ce244d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export default database