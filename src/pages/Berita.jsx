import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { newsData } from '../data/database';

const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
const itemVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };

export default function Berita() {
  return (
    <div className="bg-gray-900 text-white min-h-screen py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Berita & <span className="text-red-500">Aktivitas</span></h1>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">Ikuti terus perkembangan dan kegiatan terbaru dari UKM Merpati Putih UNIMAL.</p>
        </motion.div>

        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsData.map(article => (
            <Link to={`/berita/${article.id}`} key={article.id}>
              <motion.div variants={itemVariants} whileHover={{ y: -8 }} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden h-full flex flex-col group">
                <div className="overflow-hidden">
                  <img src={article.thumbnail} alt={article.title} className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <p className="text-sm text-red-400 font-semibold">{article.category}</p>
                  <h3 className="text-xl font-bold mt-2 flex-grow">{article.title}</h3>
                  <p className="text-gray-400 mt-4 text-sm font-light">{article.date}</p>
                </div>
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </div>
    </div>
  );
}