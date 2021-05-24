import * as firebase from 'firebase';

const firebaseConfig = {
   apiKey: "AIzaSyBb4MiAa0QJoastlVWF_S5TcRDyi1v_qQk",
    authDomain: "school-attendance-ce3f0.firebaseapp.com",
    databaseURL: "https://school-attendance-ce3f0-default-rtdb.firebaseio.com",
    projectId: "school-attendance-ce3f0",
    storageBucket: "school-attendance-ce3f0.appspot.com",
    messagingSenderId: "492600975189",
    appId: "1:492600975189:web:6caffc5edc67af86a3d9dc"
};

if (!firebase.apps.length) {
  let app = firebase.initializeApp(firebaseConfig);
}

export default firebase.database();

console.log(firebase.name);
console.log(firebase.database());
