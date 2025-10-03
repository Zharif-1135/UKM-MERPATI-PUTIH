import { motion } from 'framer-motion';

// --- DATA KEPENGURUSAN LENGKAP ---
// Struktur data ini dirancang agar mudah dikelola dan diperluas.
const pengurusData = {
  "Teras Kepengurusan": {
    layout: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4', // Layout 4 kolom untuk BPH
    members: [
      { name: 'Rafli Hamdan Farabi', jabatan: 'Ketua Umum', image: '/images/team/ketua.jpg' },
      { name: 'M Hafiz Alfahri', jabatan: 'Wakil Ketua Umum', image: '/images/team/wakil.jpg' },
      { name: 'Puan Rahmatun Nisa', jabatan: 'Sekretaris', image: '/images/team/sekretaris.jpg' },
      { name: 'Cindy Septiani Saragih', jabatan: 'Bendahara', image: '/images/team/bendahara.jpg' },
    ]
  },
  "Divisi Kaderisasi": {
    layout: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3', // Layout 3 kolom untuk Divisi
    members: [
      { name: 'Intan Wirnanda', jabatan: 'Ketua Divisi', image: '/images/team/kadiv_kader.jpg' },
      { name: 'Yasmin Suci Mauliza', jabatan: 'Anggota', image: '/images/team/kader_1.jpg' },
      { name: 'Yuli Cahya Ningsih', jabatan: 'Anggota', image: '/images/team/kader_2.jpg' },
      { name: 'M Hafiz Alfauzi', jabatan: 'Anggota', image: '/images/team/kader_3.jpg' },
    ]
  },
  "Divisi Huminfo (Humas & Informasi)": {
    layout: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    members: [
      { name: 'Riskiana', jabatan: 'Ketua Divisi', image: '/images/team/kadiv_huminfo.jpg' },
      { name: 'Zharif Athaya Andarfi', jabatan: 'Anggota', image: '/images/team/huminfo_1.jpg' },
      { name: 'Raihana Salsabila', jabatan: 'Anggota', image: '/images/team/huminfo_2.jpg' },
      { name: 'Farizul Syahputra', jabatan: 'Anggota', image: '/images/team/huminfo_3.jpg' },
    ]
  },
  "Divisi Inventaris": {
    layout: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    members: [
      { name: 'Rayhan Farkira Aldani', jabatan: 'Ketua Divisi', image: '/images/team/kadiv_invent.jpg' },
      { name: 'Alya Rosalinda', jabatan: 'Anggota', image: '/images/team/invent_1.jpg' },
      { name: 'Luffia Amanda', jabatan: 'Anggota', image: '/images/team/invent_2.jpg' },
      { name: 'Mutia Wulandari', jabatan: 'Anggota', image: '/images/team/invent_3.jpg' },
    ]
  }
};

// --- VARIAN ANIMASI ---
const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
const itemVariants = { hidden: { opacity: 0, y: 30, scale: 0.95 }, visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } } };

// --- KOMPONEN ---
const AuroraBackground = () => (
  <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
    <div className="absolute -top-1/4 -left-1/4 w-[150%] h-[150%] bg-gradient-to-br from-red-900/30 via-gray-900 to-gray-900 animate-pulse-slow"></div>
  </div>
);

const SocialIcon = ({ type, link }) => {
    const iconSVG = {
        instagram: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>,
        linkedin: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>,
    };
    return <a href={link} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">{iconSVG[type]}</a>;
};

// --- HALAMAN UTAMA ---
export default function Kepengurusan() {
  return (
    <div className="relative bg-gray-900 text-white min-h-screen pt-32 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <AuroraBackground />
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">Struktur <span className="text-red-500">Kepengurusan</span></h1>
          <p className="mt-6 text-lg text-gray-300 max-w-3xl mx-auto">Sebuah tim yang solid, berdedikasi, dan siap membawa UKM Merpati Putih UNIMAL ke level berikutnya.</p>
        </motion.div>

        {Object.entries(pengurusData).map(([title, data]) => (
          <div key={title} className="mb-20">
            <motion.h2 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold text-center mb-12 text-white relative after:content-[''] after:absolute after:w-24 after:h-1 after:bg-red-600 after:left-1/2 after:-translate-x-1/2 after:top-full after:mt-4 after:rounded-full"
            >
              {title}
            </motion.h2>
            <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className={`grid gap-6 md:gap-8 ${data.layout}`}
            >
              {data.members.map((pengurus, index) => (
                <motion.div key={index} variants={itemVariants} className="group relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-2xl text-center overflow-hidden transition-all duration-300 hover:border-red-500/50">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10"></div>
                    <img src={pengurus.image} alt={pengurus.name} className="w-full h-80 object-cover object-top transition-transform duration-500 group-hover:scale-110" />
                  </div>
                  <div className="p-6 relative">
                    <h3 className="text-2xl font-bold text-white -mt-16 relative z-20">{pengurus.name}</h3>
                    <p className="text-red-400 font-semibold mt-1 relative z-20">{pengurus.jabatan}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}