import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-blue-700 text-white p-4 flex justify-between items-center shadow-md">
      <h1 className="text-2xl font-bold">UKM XYZ</h1>
      <div className="space-x-6">
        <Link to="/">Home</Link>
        <Link to="/sejarah">Sejarah</Link>
        <Link to="/visi-misi">Visi Misi</Link>
        <Link to="/kepengurusan">Kepengurusan</Link>
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
}
