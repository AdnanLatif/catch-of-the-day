import Rebase from 're-base';
import firebase, { database } from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyA6QLEnY6xHJprZAcZ4qY17Vt6zZiW8cfc",
    authDomain: "catch-of-the-day-adnan-latif.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-adnan-latif.firebaseio.com"
})

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;