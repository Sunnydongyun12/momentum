import * as firebase from 'firebase';
const FirebaseConfig = {
  apiKey: 'AIzaSyCrzsnSKjkBYmK620Qt8gjlPCgDZGtdY-g',
  authDomain: 'cs188momentum.firebaseapp.com',
  databaseURL: 'https://cs188momentum.firebaseio.com',
  projectId: 'cs188momentum',
  storageBucket: 'cs188momentum.appspot.com',
  messagingSenderId: '188044312099',
};

firebase.initializeApp(FirebaseConfig);

export const databaseRef = firebase.database().ref();
