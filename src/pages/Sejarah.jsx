import { motion, useScroll, useSpring } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import { historyData } from '../data/database';

// Komponen untuk Titik Timeline dengan efek Glow
const TimelineDot = () => (
  <div className="absolute left-1/2 -translate-x-1/2 md:left-1/2 md:-translate-x-1/2 -translate-y-4 top-1/2 h-8 w-8 rounded-full bg-red-600 flex items-center justify-center ring-8 ring-gray-900 z-10">
    {/* Efek Glow */}
    <div className="absolute h-full w-full bg-red-500 rounded-full animate-ping opacity-75"></div>
    {/* Ikon */}
    <svg className="h-5 w-5 text-white relative" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  </div>
);

export default function Sejarah() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start center", "end center"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <div className="bg-gray-900 text-white pt-28 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Jejak Langkah <span className="text-red-500">Merpati Putih</span></h1>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">Dari awal mula berdirinya hingga menjadi keluarga besar yang solid dan berprestasi di UNIMAL.</p>
        </motion.div>

        <div ref={ref} className="relative">
          {/* Garis Vertikal Latar (Desktop) */}
          <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-gray-700/50 hidden md:block"></div>
          {/* Garis Merah Progress Bar (Desktop) */}
          <motion.div style={{ scaleY }} className="absolute left-1/2 -translate-x-1/2 h-full w-1 bg-red-500 origin-top hidden md:block"></motion.div>
          
          {/* Garis Vertikal (Mobile) */}
          <div className="absolute left-4 w-0.5 h-full bg-gray-700/50 block md:hidden"></div>
          {/* Garis Merah Progress Bar (Mobile) - INI PERBAIKANNYA */}
          <motion.div style={{ scaleY }} className="absolute left-4 h-full w-1 bg-red-500 origin-top block md:hidden"></motion.div>

          {historyData.map((item, index) => (
            <motion.div key={index} className="relative flex md:items-center justify-between w-full mb-12 md:mb-24 md:even:flex-row-reverse" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.8 }}>
              <div className="hidden md:block w-5/12"></div>
              <div className="absolute top-1/2 -translate-y-1/2 left-4 -translate-x-1/2 md:left-1/2 md:-translate-x-1/2">
                <TimelineDot />
              </div>
              <motion.div whileHover={{ scale: 1.03, transition: { duration: 0.2 } }} className="w-full md:w-5/12 pl-12 md:pl-0">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl shadow-2xl p-6">
                  <p className="text-sm font-semibold text-red-400 mb-2">{item.year}</p>
                  <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                  {item.image && (<img src={item.image} alt={item.title} className="w-full h-48 object-cover rounded-lg mb-4 shadow-lg"/>)}
                  <p className="text-gray-300 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
        
        <motion.div className="text-center mt-16" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 1, delay: 0.5 }}>
          <h3 className="text-2xl font-bold">Lihat Struktur Organisasi Kami</h3>
          <p className="text-gray-400 mt-2 mb-6">Kenali lebih dekat siapa saja yang berada di balik layar kepengurusan UKM Merpati Putih UNIMAL.</p>
          <Link to="/kepengurusan" className="bg-red-600 text-white font-semibold py-3 px-8 rounded-full hover:bg-red-700 transition-transform transform hover:scale-105 duration-300">Lihat Kepengurusan</Link>
        </motion.div>
      </div>
    </div>
  );
}