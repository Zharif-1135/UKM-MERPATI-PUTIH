import { Link } from 'react-router-dom';

export default function HomeCTA() {
  return (
    <div className="bg-gray-900">
      <div className="max-w-4xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
          <span className="block">Siap Menjadi Bagian dari Kami?</span>
          <span className="block text-red-500">Bergabunglah Sekarang.</span>
        </h2>
        <p className="mt-4 text-lg leading-6 text-gray-300">
          Mulailah perjalanan Anda dalam menempa fisik dan mental. Jadilah pribadi yang tangguh, disiplin, dan berprestasi bersama keluarga besar Merpati Putih UNIMAL.
        </p>
        <Link
          to="/login" // Arahkan ke halaman pendaftaran atau kontak nanti
          className="mt-8 w-full inline-flex items-center justify-center px-8 py-4 border border-transparent rounded-full shadow-sm text-base font-medium text-white bg-red-600 hover:bg-red-700 sm:w-auto transition-transform transform hover:scale-105 duration-300"
        >
          Daftar Sekarang
        </Link>
      </div>
    </div>
  );
}