import { useState } from 'react';
import { motion } from 'framer-motion';

const prestasiData = [
  { year: 2025, event: 'Kejurda Merpati Putih Piala Kapolda 2025', achievement: 'Medali Emas Kelas E Putri/Dewasa (Nisfatul Mauizzah)', medal: 'gold' },
  { year: 2025, event: 'Kejurda Merpati Putih Piala Kapolda 2025', achievement: 'Medali Emas Kelas A Putri/Dewasa (Nisfatul Mauizzah)', medal: 'gold' },
  { year: 2025, event: 'POMDA Aceh XIXI Universitas Teuku Umar 2025', achievement: 'Medali Perunggu Kelas A Putri (Nisfatul Mauizzah)', medal: 'bronze' },
  { year: 2024, event: 'Berhasil Ujian Kenaikan Tingkat', achievement: 'Balik 1 Ke Balik 2 (Intan Wirnanda)', medal: 'gold' },
  { year: 2024, event: 'Berhasil Ujian Kenaikan Tingkat', achievement: 'Dasar 1 Ke Dasar 2 (Cindy Septiani Saragih)', medal: 'gold' },
  { year: 2024, event: 'Berhasil Ujian Kenaikan Tingkat', achievement: 'Dasar 1 Ke Dasar 2 (Najwa Syahira)', medal: 'gold' },
  { year: 2024, event: 'Berhasil Ujian Kenaikan Tingkat', achievement: 'Dasar 2 Ke Balik 1 (Hashifah Hukaimah)', medal: 'gold' },
  { year: 2024, event: 'Berhasil Ujian Kenaikan Tingkat', achievement: 'Dasar 1 Ke Dasar 2 (Yasmin Suci Mauliza)', medal: 'gold' },
  { year: 2024, event: 'Berhasil Ujian Kenaikan Tingkat', achievement: 'Dasar 1 Ke Dasar 2 (Cut Rozatul Haliza)', medal: 'gold' },
  { year: 2024, event: 'Berhasil Ujian Kenaikan Tingkat', achievement: 'Dasar 1 Ke Dasar 2 (Dinda Zahira)', medal: 'gold' },
  { year: 2024, event: 'Berhasil Ujian Kenaikan Tingkat', achievement: 'Dasar 2 Ke Balik 1 (Putri Aulia Ningsih)', medal: 'gold' },
  { year: 2024, event: 'Lulus Pertukaran Mahasiswa Merdeka (PMM4)', achievement: 'Universitas Padjajaran (Yuli Cahya Ningsih)', medal: 'gold' },
  { year: 2023, event: 'POMDA CABOR Pencak Silat Dewasa Se-Aceh', achievement: 'Medali Perunggu kelas C Putri (Citra Puspita)', medal: 'bronze' },
  { year: 2023, event: 'POMDA CABOR Pencak Silat Dewasa Se-Aceh', achievement: 'Medali Perak Seni kelas B Putri (Raiyatul Rizka)', medal: 'silver' },
  { year: 2023, event: 'POMDA CABOR Pencak Silat Dewasa Se-Aceh', achievement: 'Medali Perunggu Kelas A Putri (Nisfatul Mauizzah)', medal: 'bronze' },
  { year: 2023, event: 'POMDA CABOR Pencak Silat Dewasa Se-Aceh', achievement: 'Medali Perunggu Seni Tunggal Putra (M.Furkan)', medal: 'bronze' },
  { year: 2023, event: 'POMDA CABOR Pencak Silat Dewasa Se-Aceh', achievement: 'Medali Perunggu Kelas F Putra (Rahmat Sugheri)', medal: 'bronze' },
  { year: 2023, event: 'Lolos Seleksi POMDA 2023 Kelas B', achievement: 'Lolos Seleksi (Rizky Abdurrahman)', medal: 'gold' },
  { year: 2023, event: 'Lolos Seleksi POMDA 2023 Seni Tunggal', achievement: 'Lolos Seleksi (M.Furkan)', medal: 'gold' },
  { year: 2023, event: 'Lolos Seleksi POMDA 2023 Kelas C', achievement: 'Lolos Seleksi (Citra Puspita Mahdayani)', medal: 'gold' },
  { year: 2023, event: 'Lolos Seleksi POMDA 2023 Kelas B', achievement: 'Lolos Seleksi (Raiyatul Riska)', medal: 'gold' },
  { year: 2023, event: 'Lolos Seleksi POMDA 2023 Kelas A', achievement: 'Lolos Seleksi (Nisfatul Mauizzah)', medal: 'gold' },
  { year: 2023, event: 'Kejurda Pencak Silat Dewasa Antar Kolat Se-Aceh', achievement: 'Juara 2 kelas B Putri (Raiyatul Riska)', medal: 'silver' },
  { year: 2023, event: 'Kejurda Pencak Silat Dewasa Antar Kolat Se-Aceh', achievement: 'Juara 3 Kelas F Putra (Rahmat Sugheri)', medal: 'bronze' },
  { year: 2023, event: 'Kejurda Pencak Silat Dewasa Antar Kolat Se-Aceh', achievement: 'Juara 2 Kelas C Putri (Citra Puspita Mahdayani S)', medal: 'silver' },
  { year: 2022, event: 'Kejuaraan Aceh Utara Open 2022', achievement: 'Juara 3 (Muhammad Farel Khadafi)', medal: 'bronze' },
  { year: 2022, event: 'Kejuaraan Aceh Utara Open 2022', achievement: 'Juara 3 (Muhammad Hafiz Al-Fahri)', medal: 'bronze' },
];

const filters = ['Semua', 2025, 2024, 2023, 2022];
const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
const itemVariants = { hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1 } };

// --- KOMPONEN ---
const AuroraBackground = () => ( <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10"><div className="absolute -top-1/4 -left-1/4 w-[150%] h-[150%] bg-gradient-to-br from-red-900/30 via-gray-900 to-gray-900 animate-pulse-slow"></div></div> );
const MedalIcon = ({ type }) => {
  const colors = { gold: 'text-yellow-400', silver: 'text-gray-300', bronze: 'text-orange-400' };
  return ( <svg className={`w-16 h-16 ${colors[type]}`} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 2a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0110 2zM5.03 4.97a.75.75 0 011.06 0l1.06 1.06a.75.75 0 11-1.06 1.06L5.03 6.03a.75.75 0 010-1.06zM13.97 4.97a.75.75 0 010 1.06l-1.06 1.06a.75.75 0 01-1.06-1.06L13.97 6.03a.75.75 0 011.06 0zM10 15a5 5 0 100-10 5 5 0 000 10zm0 2.5a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5a.75.75 0 01.75-.75zM3.5 10a.75.75 0 01.75-.75h1.5a.75.75 0 010 1.5h-1.5a.75.75 0 01-.75-.75zM14.25 10a.75.75 0 01.75-.75h1.5a.75.75 0 010 1.5h-1.5a.75.75 0 01-.75-.75zM5.03 13.97a.75.75 0 011.06 0l1.06-1.06a.75.75 0 011.06 1.06L6.03 14.97a.75.75 0 01-1.06 0zM13.97 13.97a.75.75 0 010-1.06l1.06-1.06a.75.75 0 111.06 1.06L14.97 13.97a.75.75 0 01-1.06 0z" clipRule="evenodd" /></svg> );
};

export default function Prestasi() {
  const [activeFilter, setActiveFilter] = useState('Semua');
  const filteredData = activeFilter === 'Semua' ? prestasiData : prestasiData.filter(p => p.year === activeFilter);

  return (
    // SATU-SATUNYA PERUBAHAN ADA DI BARIS INI: py-16 diubah menjadi pt-32 pb-16
    <div className="relative bg-gray-900 text-white min-h-screen pt-32 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <AuroraBackground />
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">Dinding <span className="text-red-500">Prestasi</span></h1>
          <p className="mt-6 text-lg text-gray-300 max-w-3xl mx-auto">Sebuah bukti dari kerja keras, dedikasi, dan semangat juang yang tak pernah padam dari para ksatria Merpati Putih UNIMAL.</p>
        </motion.div>

        <div className="flex justify-center flex-wrap gap-2 md:gap-4 mb-12">
          {filters.map(filter => ( <button key={filter} onClick={() => setActiveFilter(filter)} className={`px-5 py-2 text-sm font-semibold rounded-full transition-all duration-300 ${activeFilter === filter ? 'bg-red-600 text-white shadow-lg' : 'bg-white/5 text-gray-300 hover:bg-white/10'}`}> {filter} </button> ))}
        </div>

        <motion.div key={activeFilter} variants={containerVariants} initial="hidden" animate="visible" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredData.map((item, index) => (
            <motion.div key={index} variants={itemVariants} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-8 flex flex-col items-center text-center shadow-lg transition-all duration-300 hover:border-red-500/50 hover:-translate-y-2">
              <MedalIcon type={item.medal} />
              <p className="text-lg font-semibold text-gray-300 mt-6">{item.year}</p>
              <h3 className="text-xl font-bold text-white mt-2 flex-grow">{item.event}</h3>
              <p className="text-red-400 mt-2 font-medium">{item.achievement}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}