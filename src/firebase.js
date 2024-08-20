import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDOKVDXpmVQ8tJ_WmqJW4VhDvyVtvVNWn8",
  authDomain: "angel-ecommerce-project.firebaseapp.com",
  projectId: "angel-ecommerce-project",
  storageBucket: "angel-ecommerce-project.appspot.com",
  messagingSenderId: "644206759552",
  appId: "1:644206759552:web:044b430a1cd9182be76065",
};

export const app = firebase.initializeApp(firebaseConfig)
export const db = firebase.firestore()