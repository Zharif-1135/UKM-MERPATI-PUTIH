import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import VanillaTilt from 'vanilla-tilt';
import { coreValuesData } from '../data/database';

// --- KOMPONEN ---
const AuroraBackground = () => ( <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10"><div className="absolute -top-1/4 -left-1/4 w-[150%] h-[150%] bg-gradient-to-br from-red-900/30 via-gray-900 to-gray-900 animate-pulse-slow"></div></div> );
const VisionIcon = () => ( <svg className="w-12 h-12 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" /></svg> );
const MissionIcon = () => ( <svg className="w-12 h-12 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> );

// --- IKON UNTUK NILAI-NILAI INTI ---
const IconDiscipline = () => ( <svg className="w-10 h-10 mb-4 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4m0 4h.01M4.874 15.126a9 9 0 1114.252 0M.75 10.5h22.5" /></svg> );
const IconBrotherhood = () => ( <svg className="w-10 h-10 mb-4 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm-9 0a3 3 0 11-6 0 3 3 0 016 0z" /></svg> );
const IconAchievement = () => ( <svg className="w-10 h-10 mb-4 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z" /></svg> );
const coreValuesIcons = { discipline: <IconDiscipline />, brotherhood: <IconBrotherhood />, achievement: <IconAchievement /> };

// --- KOMPONEN KARTU 3D ---
const TiltCard = ({ children, className }) => {
  const tiltRef = useRef(null);
  useEffect(() => {
    if (tiltRef.current) {
      VanillaTilt.init(tiltRef.current, { max: 8, speed: 400, glare: true, "max-glare": 0.1 });
    }
  }, []);
  return <div ref={tiltRef} className={`bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-2xl h-full transform-style-3d ${className}`}>{children}</div>;
};


export default function VisiMisi() {
  const missions = [
    "Membentuk anggota yang berkarakter, disiplin, dan berbudi pekerti luhur.",
    "Mengembangkan potensi anggota dalam seni bela diri untuk meraih prestasi.",
    "Menjaga dan melestarikan budaya pencak silat sebagai warisan bangsa.",
    "Mempererat tali persaudaraan antar anggota dan dengan masyarakat luas.",
  ];

  return (
    <div className="relative bg-gray-900 text-white min-h-screen py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <AuroraBackground />
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">Visi & <span className="text-red-500">Misi</span></h1>
          <p className="mt-6 text-lg text-gray-300 max-w-3xl mx-auto">Landasan dan arah gerak kami dalam membentuk insan yang tangguh dan berbudaya.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-stretch">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: 'easeOut' }}>
            <TiltCard className="p-8 md:p-10">
              <div className="flex items-center mb-6"><VisionIcon /><h2 className="text-3xl font-bold ml-4">Visi</h2></div>
              <p className="text-xl text-gray-300 leading-relaxed">"Menjadi Unit Kegiatan Mahasiswa yang unggul dalam prestasi dan pembentukan karakter, serta menjadi pusat pelestarian budaya Pencak Silat Merpati Putih di lingkungan universitas dan masyarakat."</p>
            </TiltCard>
          </motion.div>
          
          <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}>
            <TiltCard className="p-8 md:p-10">
              <div className="flex items-center mb-6"><MissionIcon /><h2 className="text-3xl font-bold ml-4">Misi</h2></div>
              <ul className="space-y-4">
                {missions.map((misi, index) => (
                  <motion.li key={index} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }} className="flex items-start">
                    <svg className="w-6 h-6 text-red-500 flex-shrink-0 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                    <span className="text-lg text-gray-300">{misi}</span>
                  </motion.li>
                ))}
              </ul>
            </TiltCard>
          </motion.div>
        </div>

        {/* FITUR BARU: NILAI-NILAI INTI */}
        <div className="my-24">
          <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, amount: 0.5 }} className="text-3xl font-bold text-center mb-12">Nilai-Nilai Inti Kami</motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreValuesData.map((value, index) => (
              <motion.div key={value.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.5, delay: index * 0.2 }}>
                <div className="bg-white/5 border border-white/10 rounded-xl p-8 text-center h-full">
                  {coreValuesIcons[value.icon]}
                  <h3 className="text-xl font-bold text-white mb-2">{value.title}</h3>
                  <p className="text-gray-400">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}