
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAOd8dZXK4Nevafo3P17BnC5NrKJBS_pOU",
  authDomain: "arqadiaestudio-6018a.firebaseapp.com",
  projectId: "arqadiaestudio-6018a",
  storageBucket: "arqadiaestudio-6018a.appspot.com",
  messagingSenderId: "492962874716",
  appId: "1:492962874716:web:d6179d6fc794c016e06d99"
};


const app = initializeApp(firebaseConfig);

export default function getFirestoreApp(){
    return app
}