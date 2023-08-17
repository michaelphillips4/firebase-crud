import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

//import { getAnalytics } from "firebase/analytics";


// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyDxfBqa9OHQkXkOCswQu6M7o1PflcS-6Sc",

  authDomain: "fir-usermanager.firebaseapp.com",

  projectId: "fir-usermanager",

  storageBucket: "fir-usermanager.appspot.com",

  messagingSenderId: "25036110293",

  appId: "1:25036110293:web:28ed70114f30bd69a8e55c",

  measurementId: "G-KL49VS4Z3R"

};


// Initialize Firebase


const app = initializeApp(firebaseConfig);

//const analytics = getAnalytics(app);

console.log(app);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
