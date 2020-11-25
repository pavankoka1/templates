import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBoR_6y-xDJzc6N5ODAblde1YP21kFwdj0",
    authDomain: "react-crud-a8a9a.firebaseapp.com",
    databaseURL: "https://react-crud-a8a9a.firebaseio.com",
    projectId: "react-crud-a8a9a",
    storageBucket: "react-crud-a8a9a.appspot.com",
    messagingSenderId: "1054467897165",
    appId: "1:1054467897165:web:19523d81f8d2e2a05d6904"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export default firebase.app().database().ref();