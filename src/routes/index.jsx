import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
    
import Home from "../pages/Home";
import Sejarah from "../pages/Sejarah";
import VisiMisi from "../pages/VisiMisi";
import Kepengurusan from "../pages/Kepengurusan";
import Galeri from "../pages/Galeri";
import Prestasi from "../pages/Prestasi";
import Berita from "../pages/Berita"; // <-- Tambah import
import DetailBerita from "../pages/DetailBerita"; // <-- Tambah import
import NotFound from "../pages/NotFound";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="sejarah" element={<Sejarah />} />
        <Route path="visi-misi" element={<VisiMisi />} />
        <Route path="kepengurusan" element={<Kepengurusan />} />
        <Route path="galeri" element={<Galeri />} />
        <Route path="prestasi" element={<Prestasi />} />
        <Route path="berita" element={<Berita />} /> {/* <-- Tambah rute */}
        <Route path="berita/:id" element={<DetailBerita />} /> {/* <-- Tambah rute */}
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}