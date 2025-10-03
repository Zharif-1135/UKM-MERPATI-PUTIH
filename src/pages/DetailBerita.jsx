import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { newsData } from '../data/database';
import NotFound from './NotFound';

export default function DetailBerita() {
  const { id } = useParams();
  const article = newsData.find(article => article.id === id);

  if (!article) {
    return <NotFound />;
  }

  return (
    <div className="bg-gray-900 text-white min-h-screen py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <p className="text-red-400 font-semibold">{article.category}</p>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight my-4">{article.title}</h1>
          <p className="text-gray-400">{article.date}</p>

          <img src={article.thumbnail} alt={article.title} className="w-full h-auto max-h-[500px] object-cover rounded-xl my-8 shadow-2xl" />

          <div 
            className="prose prose-invert prose-lg max-w-none prose-p:text-gray-300 prose-h3:text-white"
            dangerouslySetInnerHTML={{ __html: article.content }} 
          />

          <div className="mt-12 pt-8 border-t border-white/10">
            <Link to="/berita" className="text-red-400 hover:text-red-300 transition-colors">← Kembali ke semua berita</Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}