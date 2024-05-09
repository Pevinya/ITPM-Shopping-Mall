// Import the functions you need from the SDKs you need
const { initializeApp } = require("firebase/app");
//const { getAnalytics } = require("firebase/analytics");
const { getStorage } = require("firebase/storage");

const firebaseConfig = {
    apiKey: "AIzaSyC1kHaZnU2GmO04JfOWv1hO7iZespmdyuM",
    authDomain: "images-c5cbc.firebaseapp.com",
    projectId: "images-c5cbc",
    storageBucket: "images-c5cbc.appspot.com",
    messagingSenderId: "923801878345",
    appId: "1:923801878345:web:4c7bd52df0f91ef4bde498"
  };
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

const storage = getStorage(app);

module.exports = { storage }; // Export an object with 'storage' property