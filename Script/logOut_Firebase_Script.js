 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-app.js";
 import { getAuth, createUserWithEmailAndPassword , signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-auth.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 const firebaseConfig = {
   apiKey: "AIzaSyC5mkC3BOvsnjCoCJCvLJkHcUBt6eh4QVo",
   authDomain: "netflix-clone-c5079.firebaseapp.com",
   projectId: "netflix-clone-c5079",
   storageBucket: "netflix-clone-c5079.appspot.com",
   messagingSenderId: "621699086705",
   appId: "1:621699086705:web:1318d49fabc64a8bdb1ed0"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const auth = getAuth();

 console.log(app)
 
 document.getElementById('SignoutButton').addEventListener('click', (e) => {
   
    signOut(auth).then(() => {
        localStorage.setItem('login_user', true);
       alert("Signout Succesfully")
     })
     .catch((error) => {
       const errorCode = error.code;
       const errorMessage = error.message;
       // ..
       alert(errorMessage);
     });
 });