import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage, ref } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAmhfwnYIczhcDcbyKCN7LIa4yetxEYXJU",
  authDomain: "gems-621e9.firebaseapp.com",
  projectId: "gems-621e9",
  storageBucket: "gems-621e9.appspot.com",
  messagingSenderId: "999633149014",
  appId: "1:999633149014:web:9a4f25ac69e0260e4e2ff7",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);
const storageRef=ref(storage)
const imagesRef = ref(storageRef, 'images');
const fileName = 'space.jpg';
const spaceRef = ref(imagesRef, fileName);

// File path is 'images/space.jpg'
const path = spaceRef.fullPath;

// File name is 'space.jpg'
const name = spaceRef.name;

// Points to 'images'
const imagesRefAgain = spaceRef.parent;


// export
export { app, auth, db, storage };