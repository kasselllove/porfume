
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAIobxLPc8M4PAnCQPbnju6dGni-a5IgCQ",
  authDomain: "porfume-94e62.firebaseapp.com",
  projectId: "porfume-94e62",
  storageBucket: "porfume-94e62.appspot.com",
  messagingSenderId: "82584987414",
  appId: "1:82584987414:web:c233f021e74ffd8f691237",
  measurementId: "G-GTZ7W1BQ56"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig); /* Инициализация firebase хранилища с определенным id конфига */
const auth = getAuth(app); /* Информация об аутентификации пользователя */
const analytics = getAnalytics(app); /* Аналитика, она пока нам не нужна */
const provider = new GoogleAuthProvider(); /* Авторизация через google */
const providerFacebook = new FacebookAuthProvider(); /* Авторизация через google */
const database = getFirestore(app); /* Информация об хранилище */

export {auth, provider, database, providerFacebook} /* Экспортируем нужные нам функции для проекта */