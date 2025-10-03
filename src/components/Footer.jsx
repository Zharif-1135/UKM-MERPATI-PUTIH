import { FaInstagram, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import { FiArrowUpRight } from 'react-icons/fi';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Data untuk link sosial media, sekarang dengan displayText untuk label
  const socialLinks = [
    {
      name: 'UKM Merpati Putih Unimal',
      ariaLabel: 'Instagram UKM Merpati Putih',
      href: 'https://www.instagram.com/ukmmerpatiputih.unimal?igsh=MXJxNm9iZDMybjczYQ==',
      icon: FaInstagram,
    },
    {
      name: 'Universitas Malikussaleh',
      ariaLabel: 'Instagram Universitas Malikussaleh',
      href: 'https://www.instagram.com/univ.malikussaleh?igsh=Y3B2eTl1dmF4NnI1',
      icon: FaInstagram,
    },
  ];

  // Data untuk informasi kontak
  const contactInfo = [
    {
      name: 'WhatsApp 1',
      href: 'https://wa.me/6289525705693',
      text: '0895-2570-5693',
      icon: FaWhatsapp,
    },
    {
      name: 'WhatsApp 2',
      href: 'https://wa.me/6283104542535',
      text: '0831-0454-2535',
      icon: FaWhatsapp,
    },
    {
      name: 'Email',
      href: 'mailto:merpati.putih@unimal.ac.id',
      text: 'merpati.putih@unimal.ac.id',
      icon: FaEnvelope,
    },
  ];
  
  const registrationLink = 'https://docs.google.com/forms/d/e/1FAIpQLSddixiLxGi7969pIq8MzGjWpTFxbhmbIvPrnlMuaIuuW7eiZg/viewform?fbclid=PAZXh0bgNhZW0CMTEAAadrZ3_SxrWPV_jYyuRRxYuIrXBoOFV_w7KoLsGFr3shbjoQpPVBtDZYMHhzbQ_aem_7VTVRmMOhb0rfmPVsIVfog';

  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
          
          {/* Kolom 1: Tentang UKM */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold text-white tracking-wider">UKM MERPATI PUTIH UNIMAL</h3>
            <p className="mt-4 text-gray-400">
              Membentuk pribadi yang tangguh, disiplin, dan berprestasi melalui seni beladiri tangan kosong. Bersama membangun keluarga besar yang solid dan berintegritas.
            </p>
          </div>

          {/* Kolom 2: Kontak */}
          <div>
            <h3 className="text-lg font-semibold text-white tracking-wider">Hubungi Kami</h3>
            <ul className="mt-4 space-y-3">
              {contactInfo.map((contact) => (
                <li key={contact.name} className="flex items-start">
                  <span className="flex-shrink-0 mt-1">
                    <contact.icon className="h-5 w-5 text-gray-400" />
                  </span>
                  <a href={contact.href} className="ml-3 text-gray-400 hover:text-white transition-colors duration-300">
                    {contact.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Kolom 3: Sosial Media (BAGIAN YANG DIREVISI) */}
          <div>
            <h3 className="text-lg font-semibold text-white tracking-wider">Ikuti Kami</h3>
            <div className="mt-4 space-y-4"> {/* Menggunakan space-y untuk jarak vertikal */}
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.ariaLabel}
                  // Setiap link menjadi flex-container horizontal (ikon + teks)
                  className="flex items-center text-gray-400 hover:text-white group transition-colors duration-300"
                >
                  <social.icon className="h-6 w-6 flex-shrink-0 transform group-hover:scale-110 transition-transform duration-300" />
                  <span className="ml-3 text-sm">{social.name}</span>
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Baris Bawah: Ajakan Mendaftar & Copyright */}
        <div className="mt-12 border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
           <a
              href={registrationLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-red-500 transition-transform transform hover:scale-105 duration-300 mb-6 md:mb-0"
            >
              Formulir Pendaftaran
              <FiArrowUpRight className="ml-2 h-5 w-5" />
            </a>
          <p className="text-sm text-gray-500 text-center md:text-right">
            &copy; {currentYear} UKM Merpati Putih UNIMAL. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}