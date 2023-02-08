import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import firebaseConfig from './config';

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

ReactDOM.render(<App firebase={firebase} />, document.getElementById('root'));
