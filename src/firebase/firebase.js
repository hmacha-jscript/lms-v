import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDWVK9zchsOF3d2-Q7mAXmN7A5W7Y21RkI",
  authDomain: "lms1-2583d.firebaseapp.com",
  databaseURL: "https://lms1-2583d.firebaseio.com",
  projectId: "lms1-2583d",
  storageBucket: "lms1-2583d.appspot.com",
  messagingSenderId: "616416485534",
  appId: "1:616416485534:web:321fd19e689a005d68db8f"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
export default firebaseApp.firestore()