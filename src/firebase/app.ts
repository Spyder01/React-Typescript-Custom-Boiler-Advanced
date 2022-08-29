import firebase from "firebase";

const firebaseConfig = {

    apiKey: "AIzaSyDldH72xHy38KlIBRrQet5rmoMHvN7_QEY",
  
    authDomain: "soloboat-8d237.firebaseapp.com",
  
    projectId: "soloboat-8d237",
  
    storageBucket: "soloboat-8d237.appspot.com",
  
    messagingSenderId: "513479688596",
  
    appId: "1:513479688596:web:1ae6ef0d90b45b1e03cf81",
  
    measurementId: "G-970QJ55TJ5"
  
  };
  

const app = firebase.initializeApp(firebaseConfig);

export default app;