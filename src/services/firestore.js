import { getFirestore, collection, addDoc, getDocs, updateDoc, deleteDoc, doc } from "firebase/firestore";
import { app } from "./firebase";

const db = getFirestore(app);

// Tambah data generik
export async function addData(collectionName, data) {
  return await addDoc(collection(db, collectionName), data);
}

// Ambil semua data
export async function getData(collectionName) {
  const snapshot = await getDocs(collection(db, collectionName));
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
}

// Update data
export async function updateData(collectionName, id, newData) {
  const ref = doc(db, collectionName, id);
  return await updateDoc(ref, newData);
}

// Hapus data
export async function deleteData(collectionName, id) {
  const ref = doc(db, collectionName, id);
  return await deleteDoc(ref);
}
