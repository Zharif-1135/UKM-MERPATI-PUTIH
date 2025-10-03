import { Link } from 'react-router-dom';

export default function HomeProfile() {
  return (
    <div className="bg-gray-900 text-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Kolom Gambar */}
        <div className="w-full h-80 md:h-full rounded-lg overflow-hidden shadow-2xl">
          {/* GANTI GAMBAR INI: Simpan gambar di public/images/profile-image.jpg */}
          <img 
            src="/images/profile-image.jpg" 
            alt="Latihan UKM Merpati Putih" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Kolom Teks */}
        <div>
          <h2 className="text-sm font-semibold text-red-500 uppercase tracking-widest">
            Selamat Datang
          </h2>
          <h3 className="mt-2 text-3xl lg:text-4xl font-extrabold tracking-tight">
            Mengenal Merpati Putih UNIMAL
          </h3>
          <p className="mt-4 text-gray-400 text-lg">
            UKM Merpati Putih Universitas Malikussaleh adalah wadah bagi mahasiswa untuk menempa diri, bukan hanya dalam seni bela diri pencak silat, tetapi juga dalam membangun karakter, disiplin, dan persaudaraan.
          </p>
          <p className="mt-4 text-gray-400 text-lg">
            Kami menggabungkan tradisi luhur dengan semangat modern untuk mencetak generasi yang tangguh dan berprestasi.
          </p>
          <div className="mt-8">
            <Link
              to="/visi-misi"
              className="inline-block bg-red-600 text-white font-semibold py-3 px-8 rounded-full hover:bg-red-700 transition-transform transform hover:scale-105 duration-300 ease-in-out"
            >
              Visi & Misi Kami
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}