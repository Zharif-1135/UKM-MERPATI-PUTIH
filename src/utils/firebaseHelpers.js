import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { app } from "../services/firebase";

const storage = getStorage(app);

/**
 * Upload file ke Firebase Storage
 * @param {File} file - file dari input
 * @param {String} path - folder tujuan (contoh: "galeri" / "prestasi")
 * @returns {Promise<String>} URL file yg bisa dipakai langsung
 */
export async function uploadFile(file, path) {
  if (!file) throw new Error("File tidak ada");
  const storageRef = ref(storage, `${path}/${Date.now()}-${file.name}`);
  await uploadBytes(storageRef, file);
  return await getDownloadURL(storageRef);
}
