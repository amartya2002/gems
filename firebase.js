// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9pBlis4nQuCeGFyTFTfaPQtG4ljjRdEI",
  authDomain: "gems-218db.firebaseapp.com",
  projectId: "gems-218db",
  storageBucket: "gems-218db.appspot.com",
  messagingSenderId: "817821166897",
  appId: "1:817821166897:web:a09866ef60c0b6851c9410",
};

// Check if Firebase has already been initialized

  // Initialize Firebase
  try{
    const app = initializeApp(firebaseConfig);

  } catch(err){
    console.log(err)
    console.log("heheh")
  }
  // Initialize Cloud Firestore and get a reference to the service



try{
     const db = getFirestore(app);

  } catch(err){
    console.log(err)
    console.log("hehgyugeh")
  }
export{db}



