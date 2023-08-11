// import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER,
//   appId: process.env.REACT_APP_APP_ID,
// };
// const firebaseConfig = {
//   apiKey: "AIzaSyC5pKVD7I8H-u2BvZdPOKswMQxz83JrAYw",
//   authDomain: "netflix-react-yt-38353.firebaseapp.com",
//   projectId: "netflix-react-yt-38353",
//   storageBucket: "netflix-react-yt-38353.appspot.com",
//   messagingSenderId: "442464657927",
//   appId: "1:442464657927:web:6b12b49be3f61ff7b7c0a2",
// };

// export const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);
// export const db = getFirestore(app);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5pKVD7I8H-u2BvZdPOKswMQxz83JrAYw",
  authDomain: "netflix-react-yt-38353.firebaseapp.com",
  projectId: "netflix-react-yt-38353",
  storageBucket: "netflix-react-yt-38353.appspot.com",
  messagingSenderId: "442464657927",
  appId: "1:442464657927:web:6b12b49be3f61ff7b7c0a2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
