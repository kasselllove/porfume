import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyAr0S9GqUqKll0peFlDlte-3rJcDj9biKc",
    authDomain: "whiff-paradise.firebaseapp.com",
    databaseURL: "https://whiff-paradise-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "whiff-paradise",
    storageBucket: "whiff-paradise.appspot.com",
    messagingSenderId: "1097948978219",
    appId: "1:1097948978219:web:4d51fbf18c908442679e6e",
    measurementId: "G-R81QH4SH8R"
  };
  
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);