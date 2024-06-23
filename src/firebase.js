import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAPdk5Mqqyvf5ycvXL49tToxWgqdya4EvE",
  authDomain: "yt-clone-8837b.firebaseapp.com",
  projectId: "yt-clone-8837b",
  storageBucket: "yt-clone-8837b.appspot.com",
  messagingSenderId: "958083838156",
  appId: "1:958083838156:web:2f4389c58c80215d729269"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
provider.addScope("https://www.googleapis.com/auth/youtube.force-ssl");


export { auth, provider };
