import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'; // 1. Import Footer

export default function MainLayout() {
  return (
    <div className="bg-gray-900">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer /> {/* 2. Panggil Footer di sini */}
    </div>
  );
}