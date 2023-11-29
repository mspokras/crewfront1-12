import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBAWPW8XXrnzgrbZq12RS4dluBccEdXrrM",
  authDomain: "crew-85be0.firebaseapp.com",
  projectId: "crew-85be0",
  storageBucket: "crew-85be0.appspot.com",
  messagingSenderId: "603667794550",
  appId: "1:603667794550:web:2d0a106b783dcd3d49ed57"
};

const app = initializeApp(firebaseConfig);

export const provider = new GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
provider.setCustomParameters({   
  prompt : "select_account "
});

export default app;