// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getStorage } from "firebase/storage"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FB_API_KEY,
  authDomain: "geeksforgeeks-cms.firebaseapp.com",
  projectId: "geeksforgeeks-cms",
  storageBucket: "geeksforgeeks-cms.appspot.com",
  messagingSenderId: process.env.FB_MSG_SENDER_ID ,
  appId: process.env.FB_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);