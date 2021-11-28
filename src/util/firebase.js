// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
import { getDatabase} from "firebase/database";
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyC8bxUkz9O4c9zyLmwUF3F6YW5gPUqVhmE",
  authDomain: "smartgarden-sigfox.firebaseapp.com",
  databaseURL: "https://smartgarden-sigfox-default-rtdb.firebaseio.com",
  projectId: "smartgarden-sigfox",
  storageBucket: "smartgarden-sigfox.appspot.com",
  messagingSenderId: "946156845923",
  appId: "1:946156845923:web:db94495b6e04d44eb5b156"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get a reference to the database service
const db = getDatabase(app);

export default db;
