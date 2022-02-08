import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCL7VDmDGgFRnRrzho2H_r4XMtzJ9BloEw",
    authDomain: "netflix-clone-3e017.firebaseapp.com",
    projectId: "netflix-clone-3e017",
    storageBucket: "netflix-clone-3e017.appspot.com",
    messagingSenderId: "462615017076",
    appId: "1:462615017076:web:7c24516035ea61e5330321"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();


export { auth }