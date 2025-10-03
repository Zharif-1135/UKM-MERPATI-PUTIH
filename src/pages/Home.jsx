import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { newsData, featuresData } from '../data/database';
import { useEffect, useRef } from 'react';
import VanillaTilt from 'vanilla-tilt';

// --- KUMPULAN IKON ---
const IconBody = () => <svg className="w-10 h-10 mb-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5.636 18.364a9 9 0 010-12.728m12.728 0a9 9 0 010 12.728m-9.9-2.829a5 5 0 010-7.07m7.072 0a5 5 0 010 7.07M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>;
const IconMind = () => <svg className="w-10 h-10 mb-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>;
const IconTrophy = () => <svg className="w-10 h-10 mb-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z" /></svg>;
const icons = { body: <IconBody />, mind: <IconMind />, trophy: <IconTrophy /> };

// --- KOMPONEN KARTU 3D ---
const TiltCard = ({ children, className }) => {
  const tiltRef = useRef(null);
  useEffect(() => {
    if (tiltRef.current) {
      VanillaTilt.init(tiltRef.current, { max: 15, speed: 400, glare: true, "max-glare": 0.2 });
    }
  }, []);
  return <div ref={tiltRef} className={`bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-8 h-full transform-style-3d ${className}`}>{children}</div>;
};

// --- KOMPONEN LAINNYA ---
const HomeProfile = () => (
    <section className="bg-gray-900 text-white py-20 px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.8 }} className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="w-full h-80 md:h-full rounded-lg overflow-hidden shadow-2xl"><img src="/images/profile-image.jpg" alt="Latihan UKM Merpati Putih" className="w-full h-full object-cover" /></div>
            <div>
                <h2 className="text-sm font-semibold text-red-500 uppercase tracking-widest">Selamat Datang</h2>
                <h3 className="mt-2 text-3xl lg:text-4xl font-extrabold tracking-tight">Mengenal Merpati Putih UNIMAL</h3>
                <p className="mt-4 text-gray-400 text-lg">Wadah bagi mahasiswa untuk menempa diri, bukan hanya dalam seni bela diri, tetapi juga dalam membangun karakter, disiplin, dan persaudaraan.</p>
                <div className="mt-8"><Link to="/visi-misi" className="inline-block bg-red-600 text-white font-semibold py-3 px-8 rounded-full hover:bg-red-700 transition-transform transform hover:scale-105 duration-300">Visi & Misi Kami</Link></div>
            </div>
        </motion.div>
    </section>
);

const HomeCTA = () => (
    <section className="bg-gray-900">
        <div className="max-w-4xl mx-auto text-center py-20 px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl"><span className="block">Siap Menjadi Bagian dari Kami?</span><span className="block text-red-500">Bergabunglah Sekarang.</span></h2>
            <p className="mt-4 text-lg leading-6 text-gray-300">Mulailah perjalanan Anda dalam menempa fisik dan mental. Jadilah pribadi yang tangguh, disiplin, dan berprestasi bersama keluarga besar Merpati Putih UNIMAL.</p>
            <Link to="https://docs.google.com/forms/d/e/1FAIpQLSddixiLxGi7969pIq8MzGjWpTFxbhmbIvPrnlMuaIuuW7eiZg/viewform?fbclid=PAZXh0bgNhZW0CMTEAAadrZ3_SxrWPV_jYyuRRxYuIrXBoOFV_w7KoLsGFr3shbjoQpPVBtDZYMHhzbQ_aem_7VTVRmMOhb0rfmPVsIVfog " className="mt-8 w-full inline-flex items-center justify-center px-8 py-4 border border-transparent rounded-full shadow-sm text-base font-medium text-white bg-red-600 hover:bg-red-700 sm:w-auto transition-transform transform hover:scale-105 duration-300">Bergabung</Link>
        </div>
    </section>
);

// ===================================================================
// HALAMAN BERANDA UTAMA
// ===================================================================
export default function Home() {
  const latestNews = newsData.slice(0, 2);
  const headline = { animate: { transition: { staggerChildren: 0.2, delayChildren: 0.5 } } };
  const word = { initial: { y: 50, opacity: 0 }, animate: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.2, 1, 0.3, 1] } } };

  return (
    <div className="bg-gray-900 text-white">
      {/* HERO SECTION */}
      <section className="relative h-screen w-full flex items-center justify-center text-center overflow-hidden">
        <video autoPlay loop muted playsInline className="absolute z-0 w-auto min-w-full min-h-full max-w-none object-cover"><source src="/videos/hero-bg.mp4" type="video/mp4" /></video>
        <div className="absolute inset-0 bg-black/70 z-10"></div>
        <div className="relative z-20 px-4">
          <motion.h1 variants={headline} initial="initial" animate="animate" className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-4 tracking-wider overflow-hidden">
            {"MERPATI PUTIH UNIMAL".split(" ").map((w, i) => (
              <motion.span key={i} variants={word} className="inline-block mr-4">{w}</motion.span>
            ))}
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: 0.8 }} className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">Mencari dan Membina Potensi Diri Melalui Olah Nafas, Gerak, dan Tenaga Dalam.</motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.8, duration: 0.8 }} className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link to="/kepengurusan" className="bg-red-600 text-white font-semibold py-3 px-8 rounded-full hover:bg-red-700 transition-all transform hover:scale-105 duration-300">Temui Tim Kami</Link>
            <Link to="/galeri" className="border-2 border-white text-white font-semibold py-3 px-8 rounded-full hover:bg-white hover:text-gray-900 transition-colors duration-300">Lihat Aksi Kami</Link>
          </motion.div>
        </div>
      </section>

      {/* PROFIL SINGKAT */}
      <HomeProfile />

      {/* FOKUS LATIHAN */}
      <section className="bg-gray-800 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight text-white">Fokus Latihan Kami</h2>
          </div>
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-3">
            {featuresData.map((feature) => (
              <motion.div key={feature.title} initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once: true, amount: 0.5}} transition={{duration: 0.5}}>
                <TiltCard>
                  {icons[feature.icon]}
                  <h3 className="text-2xl font-bold text-white">{feature.title}</h3>
                  <p className="mt-4 text-gray-300">{feature.description}</p>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* INFO TERKINI */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, amount: 0.3 }} className="max-w-7xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-center mb-4">Info Terkini</h2>
          <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">Ikuti pengumuman, liputan acara, dan berita prestasi terbaru dari keluarga besar Merpati Putih UNIMAL.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {latestNews.map(item => (
              <Link to={`/berita/${item.id}`} key={item.id}>
                <motion.div whileHover={{ y: -8 }} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 h-full flex flex-col group">
                  <p className="text-sm text-red-400 font-semibold">{item.category} • {item.date}</p>
                  <h3 className="text-xl font-bold mt-2 flex-grow">{item.title}</h3>
                  <p className="text-gray-400 mt-2 text-sm">{item.summary}</p>
                </motion.div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/berita" className="bg-red-600 text-white font-semibold py-3 px-8 rounded-full hover:bg-red-700 transition-transform transform hover:scale-105 duration-300">Lihat Semua Berita</Link>
          </div>
        </motion.div>
      </section>
      
      {/* CALL TO ACTION */}
      <HomeCTA />
    </div>
  );
}