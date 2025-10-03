// ==================================================
// PUSAT DATA WEBSITE UKM MERPATI PUTIH UNIMAL
// Untuk mengubah konten website, edit langsung di file ini.
// ==================================================

// Data untuk Halaman Galeri -> /galeri
export const galleryData = [
  { id: 1, src: '/images/gallery/latihan_1.jpg', category: 'Latihan', title: 'Sesi Istirahat' },
  { id: 2, src: '/images/gallery/One-Day-Merpati-Putih.jpg', category: 'Latihan', title: 'One-Day-Merpati-Putih' },
  // Tambahkan foto-foto lain di sini
];

// Data untuk Halaman Sejarah -> /sejarah
export const historyData = [
  { year: '1963', title: 'Kelahiran Merpati Putih', description: 'Didirikan oleh Purwoto Hadi Purnomo (Mas Pung) dan Budi Santoso Hadi Purnomo (Mas Budi) sebagai warisan ilmu bela diri keluarga.', image: '/images/history/mp-national.jpg' },
  { year: '2009', title: 'Awal Mula di UNIMAL', description: 'Dirintis oleh beberapa mahasiswa yang memiliki minat pada pencak silat, dan mulai diperkenalkan di lingkungan kampus.', image: '/images/history/unimal-early.jpg' },
  { year: '2010', title: 'Peresmian UKM', description: 'Secara resmi diakui dan disahkan sebagai salah satu Unit Kegiatan Mahasiswa di Universitas Malikussaleh.', image: '/images/history/unimal-official.jpg' },
  { year: '2019', title: 'Prestasi Pertama', description: 'Meraih medali perunggu dalam kejuaraan pencak silat antar-universitas tingkat regional.', image: '/images/history/first-achievement.jpg' },
  { year: 'Sekarang', title: 'Terus Berkembang', description: 'Aktif merekrut anggota baru, mengadakan latihan rutin, dan berpartisipasi dalam berbagai ajang bergengsi.', image: '/images/history/current-activities.jpg' },
];

// Data untuk Halaman Kepengurusan -> /kepengurusan
export const teamData = {
  "Badan Pengurus Harian": {
    layout: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
    members: [
      { name: 'Ahmad Fauzi', jabatan: 'Ketua Umum', image: '/images/team/ketua.jpg', socials: { instagram: '#', linkedin: '#' } },
      { name: 'Siti Aminah', jabatan: 'Wakil Ketua Umum', image: '/images/team/wakil.jpg', socials: { instagram: '#' } },
      { name: 'Budi Santoso', jabatan: 'Sekretaris', image: '/images/team/sekretaris.jpg', socials: { linkedin: '#' } },
      { name: 'Dewi Lestari', jabatan: 'Bendahara', image: '/images/team/bendahara.jpg', socials: { instagram: '#' } },
    ]
  },
  "Divisi Kaderisasi": {
    layout: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    members: [
      { name: 'Eko Prasetyo', jabatan: 'Ketua Divisi', image: '/images/team/kadiv_kader.jpg', socials: { instagram: '#', linkedin: '#' } },
      { name: 'Rina Wulandari', jabatan: 'Anggota', image: '/images/team/anggota_kader_1.jpg', socials: { instagram: '#' } },
    ]
  },
};

// Data untuk Halaman Prestasi -> /prestasi
export const achievementData = [
  { year: 2025, event: 'Kejuaraan Nasional Antar Mahasiswa', achievement: 'Juara 1 Kategori Tanding Putra', medal: 'gold' },
  { year: 2024, event: 'Unimal Rector Cup', achievement: 'Juara Umum', medal: 'gold' },
  { year: 2023, event: 'Pekan Olahraga Mahasiswa Daerah', achievement: 'Juara 3 Kategori Tanding Putri', medal: 'bronze' },
];

export const newsData = [
  { 
    id: 'pendaftaran-anggota-baru-2025',
    title: 'Pendaftaran Anggota Baru Angkatan 2025 Resmi Dibuka!', 
    date: '13 September 2025', 
    category: 'Pengumuman',
    summary: 'Jadilah bagian dari keluarga besar kami. Pendaftaran dibuka untuk semua mahasiswa Universitas Malikussaleh yang memiliki semangat dan kemauan keras.',
    thumbnail: '/images/news/pendaftaran-2025.jpg',
    content: `
      <p>Tahun ajaran baru, semangat baru! UKM Merpati Putih Unimal dengan bangga membuka pendaftaran bagi para calon anggota baru angkatan 2025. Ini adalah kesempatan emas bagi Anda yang ingin belajar seni bela diri, menempa fisik dan mental, serta menjadi bagian dari organisasi yang solid dan berprestasi.</p>
      <p>Dengan syarat adalah</p>
      <ul class="list-disc list-inside text-gray-300">
        <li>KRS Berjalan</li>
        <li>Pas Photo</li>
        <li>Mengisi Google Form</li>
        <li>Uang Pendaftaran</li>
        <li>Mengisi Formulir Gform yang sudah disediakan</li>
      <h3 class="text-2xl font-bold mt-6 mb-4">Jadwal Pendaftaran</h3>
      <ul class="list-disc list-inside text-gray-300">
        <li>Pendaftaran Online: 13 September 2025</li>
      </ul>
      <p class="mt-4">Untuk Pendaftaran, silakan mendaftar di <a href="https://docs.google.com/forms/d/e/1FAIpQLSddixiLxGi7969pIq8MzGjWpTFxbhmbIvPrnlMuaIuuW7eiZg/viewform" target="_blank" rel="noopener noreferrer" class="text-red-400 hover:text-red-300 underline">sini</a>.</p>
    `
  },
];

export const featuresData = [
  { 
    icon: 'body',
    title: 'Pembinaan Fisik', 
    description: 'Meningkatkan stamina, kelenturan, dan kekuatan inti tubuh sebagai dasar dari setiap gerakan.' 
  },
  { 
    icon: 'mind',
    title: 'Kekuatan Mental & Pernapasan', 
    description: 'Penguasaan teknik olah napas untuk membangun energi dalam, fokus, dan ketenangan.' 
  },
  { 
    icon: 'trophy',
    title: 'Jenjang Prestasi', 
    description: 'Membuka jalan bagi anggota untuk berprestasi di berbagai kejuaraan tingkat regional hingga nasional.' 
  },
];

export const coreValuesData = [
  {
    icon: 'discipline',
    title: 'Disiplin',
    description: 'Membentuk mental yang kuat dan sikap bertanggung jawab melalui latihan yang terstruktur dan konsisten.'
  },
  {
    icon: 'brotherhood',
    title: 'Persaudaraan',
    description: 'Membangun ikatan kekeluargaan yang solid, saling mendukung, dan menghormati satu sama lain.'
  },
  {
    icon: 'achievement',
    title: 'Prestasi',
    description: 'Mendorong setiap anggota untuk mencapai potensi tertinggi, baik di dalam maupun di luar arena pertandingan.'
  }
];