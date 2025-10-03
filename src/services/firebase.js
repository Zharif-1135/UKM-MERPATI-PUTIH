import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"; // 1. IMPORT getStorage

// Konfigurasi Firebase Anda dari environment variables
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};

// Inisialisasi Firebase
const app = initializeApp(firebaseConfig);

// Inisialisasi semua layanan Firebase yang akan kita gunakan
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app); // 2. INISIALISASI STORAGE

// Ekspor semua layanan agar bisa digunakan di file lain
export { app, auth, db, storage }; // 3. TAMBAHKAN storage KE EXPORT