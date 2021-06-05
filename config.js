import firebase from 'firebase'
var firebaseConfig = {
    apiKey: "AIzaSyBMu0k3YIYSBfj16IyiZl3h_vLdM9IBisM",
    authDomain: "booksanta-8f9b6.firebaseapp.com",
    projectId: "booksanta-8f9b6",
    storageBucket: "booksanta-8f9b6.appspot.com",
    messagingSenderId: "848916425731",
    appId: "1:848916425731:web:413f34c2435dd7d6b37236"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore()