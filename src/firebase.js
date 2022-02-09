import firebase from 'firebase';

const firebaseConfig = {
    apiKey:  process.env.REACT_APP_apiKey,// "AIzaSyCL7VDmDGgFRnRrzho2H_r4XMtzJ9BloEw" ||
    authDomain:  process.env.REACT_APP_authDomain, // "netflix-clone-3e017.firebaseapp.com" ||
    projectId:  process.env.REACT_APP_projectId, // "netflix-clone-3e017" ||
    storageBucket:  process.env.REACT_APP_storageBucket, // "netflix-clone-3e017.appspot.com" ||
    messagingSenderId:  process.env.REACT_APP_messagingSenderId, // "462615017076" ||
    appId:  process.env.REACT_APP_appId // "1:462615017076:web:7c24516035ea61e5330321" ||
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();


export { auth }