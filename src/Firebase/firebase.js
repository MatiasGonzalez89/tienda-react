import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCddfP-WjHYsc09FyjISK03GAZGbFJwHgk",
  authDomain: "tienda-react-37830.firebaseapp.com",
  projectId: "tienda-react-37830",
  storageBucket: "tienda-react-37830.appspot.com",
  messagingSenderId: "1065699232282",
  appId: "1:1065699232282:web:cf3fb0325e51f9a42c9fa3"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)