  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
  import { getAuth } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
  import { getDatabase } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-database.js";
  import { getStorage } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-storage.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBYdzZegaTYuoRF0H8emqvbyxBOhNCd8Sc",
    authDomain: "hackathon-a8a4a.firebaseapp.com",
    projectId: "hackathon-a8a4a",
    storageBucket: "hackathon-a8a4a.appspot.com",
    messagingSenderId: "65978126053",
    appId: "1:65978126053:web:7037b3051e7fd34e2d0e0c"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const database = getDatabase(app);
  const storage = getStorage(app);
