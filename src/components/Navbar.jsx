import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const HamburgerIcon = () => ( <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg> );
const CloseIcon = () => ( <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg> );

const SpecialX = () => (
  <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-2 text-red-500/70 group-hover:text-red-500 transition-colors duration-300">
    <path d="M10 10L38 38" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M38 10L10 38" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Sejarah', path: '/sejarah' },
    { name: 'Visi & Misi', path: '/visi-misi' },
    { name: 'Kepengurusan', path: '/kepengurusan' },
    { name: 'Prestasi', path: '/prestasi' },
    { name: 'Galeri', path: '/galeri' },
    { name: 'Berita', path: '/berita' },
  ];

  return (
    <nav className="bg-gray-900 bg-opacity-80 backdrop-blur-md text-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center group">
              <img src="/images/logo-mp.png" alt="Logo Merpati Putih" className="h-12 w-auto transition-transform duration-300 group-hover:scale-110" />
              <SpecialX />
              <img src="/images/logo-unimal.png" alt="Logo UNIMAL" className="h-12 w-auto transition-transform duration-300 group-hover:scale-110" />
            </Link>
          </div>
          <div className="hidden md:flex md:items-center md:space-x-4">
            {navLinks.map((link) => (
              <NavLink key={link.name} to={link.path} end className={({ isActive }) => `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${ isActive ? 'bg-red-600 text-white' : 'text-gray-300 hover:bg-gray-800/50 hover:text-white' }`}>
                {link.name}
              </NavLink>
            ))}
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              {isOpen ? <CloseIcon /> : <HamburgerIcon />}
            </button>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden absolute w-full bg-gray-900 bg-opacity-95 backdrop-blur-md overflow-hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <NavLink key={link.name} to={link.path} onClick={() => setIsOpen(false)} className={({ isActive }) => `block px-3 py-2 rounded-md text-base font-medium ${ isActive ? 'bg-red-600 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white' }`}>
                  {link.name}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}