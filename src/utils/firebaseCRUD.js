import { db, storage } from "../services/firebase";
import { collection, addDoc, getDocs, updateDoc, deleteDoc, doc, serverTimestamp } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL, deleteObject } from "firebase/storage";

// ✅ Upload foto ke storage
export const uploadFile = async (file, folder) => {
  const storageRef = ref(storage, `${folder}/${Date.now()}-${file.name}`);
  await uploadBytes(storageRef, file);
  return await getDownloadURL(storageRef);
};

// ✅ Tambah data (Create)
export const createData = async (col, data) => {
  return await addDoc(collection(db, col), { ...data, createdAt: serverTimestamp() });
};

// ✅ Ambil semua data (Read)
export const getData = async (col) => {
  const snapshot = await getDocs(collection(db, col));
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

// ✅ Update data (Update)
export const updateData = async (col, id, data) => {
  const docRef = doc(db, col, id);
  await updateDoc(docRef, data);
};

// ✅ Hapus data + foto dari storage (Delete)
export const deleteData = async (col, id, fotoUrl = null) => {
  const docRef = doc(db, col, id);
  await deleteDoc(docRef);
  if (fotoUrl) {
    const fileRef = ref(storage, fotoUrl);
    await deleteObject(fileRef);
  }
};
