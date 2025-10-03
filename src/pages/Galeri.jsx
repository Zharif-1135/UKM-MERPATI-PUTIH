import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Masonry from 'react-masonry-css';
import { galleryData } from '../data/database';

const allImages = galleryData;
const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.08 } } };
const itemVariants = { hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } };
const AuroraBackground = () => ( <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10"><div className="absolute top-1/2 -left-1/4 w-[150%] h-[150%] bg-gradient-to-br from-red-900/50 via-gray-900 to-gray-900 animate-pulse-slow"></div></div> );

export default function Galeri() {
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredImages = allImages;
  const breakpointColumnsObj = { default: 3, 1100: 3, 700: 2, 500: 1 };

  return (
    <div className="relative bg-gray-900 text-white min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <AuroraBackground />
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">Galeri <span className="text-red-500">Aktivitas</span></h1>
          <p className="mt-6 text-lg text-gray-300 max-w-3xl mx-auto">Setiap gambar menyimpan cerita. Tentang keringat, semangat persaudaraan, dan perjuangan menggapai prestasi. Inilah dunia kami.</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.3 }} className="mb-20 rounded-xl overflow-hidden shadow-2xl border border-white/10">
          <video className="w-full" loop autoPlay muted playsInline poster="/images/gallery/video_poster.jpg">
            <source src="/videos/gallery-featured.mp4" type="video/mp4" />
            Browser Anda tidak mendukung video.
          </video>
        </motion.div>

        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="mt-12">
          <Masonry breakpointCols={breakpointColumnsObj} className="my-masonry-grid flex -ml-4" columnClassName="my-masonry-grid_column pl-4 bg-clip-padding">
            {filteredImages.map((image) => (
              <motion.div key={image.id} variants={itemVariants} className="mb-4 cursor-pointer overflow-hidden rounded-lg shadow-lg group relative" onClick={() => setSelectedImage(image)}>
                <img src={image.src} alt={image.title} className="w-full h-auto transform group-hover:scale-110 transition-transform duration-500"/>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
                  <h3 className="text-white text-lg font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-in-out">{image.title}</h3>
                </div>
              </motion.div>
            ))}
          </Masonry>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 1, delay: 0.5 }} className="my-20 text-center max-w-3xl mx-auto">
          <p className="text-2xl md:text-3xl font-medium text-gray-200 italic">"Merpati Putih bukan hanya tentang bela diri, tapi tentang menemukan versi terbaik dari dirimu sendiri. Di sini, saya belajar arti disiplin, kekuatan, dan keluarga."</p>
          <p className="mt-6 text-red-400 font-semibold tracking-wider">- KELUARGA BESAR MERPATI PUTIH UNIMAL -</p>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
            <motion.div layoutId={selectedImage.id} className="relative" onClick={(e) => e.stopPropagation()}>
              <img src={selectedImage.src} alt={selectedImage.title} className="max-w-[90vw] max-h-[80vh] object-contain rounded-lg shadow-2xl"/>
              <div className="text-center text-white mt-4 font-semibold">{selectedImage.title}</div>
            </motion.div>
            <motion.button initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1, transition: { delay: 0.3 } }} exit={{ opacity: 0, scale: 0.5 }} className="absolute top-6 right-6 text-white text-4xl" onClick={() => setSelectedImage(null)}>&times;</motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}