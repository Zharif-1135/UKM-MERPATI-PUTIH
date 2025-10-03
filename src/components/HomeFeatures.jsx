// Ikon sederhana dalam format komponen React
const BodyIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.636 18.364a9 9 0 010-12.728m12.728 0a9 9 0 010 12.728m-9.9-2.829a5 5 0 010-7.07m7.072 0a5 5 0 010 7.07M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const MindIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);

const TrophyIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z" />
  </svg>
);


export default function HomeFeatures() {
  const features = [
    {
      icon: <BodyIcon />,
      title: 'Pembinaan Fisik',
      description: 'Latihan rutin untuk meningkatkan stamina, kelenturan, dan kekuatan inti tubuh sebagai dasar dari setiap gerakan bela diri.',
    },
    {
      icon: <MindIcon />,
      title: 'Kekuatan Mental & Pernapasan',
      description: 'Penguasaan teknik olah napas untuk membangun energi dalam, fokus, dan ketenangan dalam menghadapi tantangan.',
    },
    {
      icon: <TrophyIcon />,
      title: 'Jenjang Prestasi',
      description: 'Membuka jalan bagi anggota untuk berprestasi di berbagai kejuaraan, dari tingkat universitas hingga nasional.',
    },
  ];

  return (
    <div className="bg-gray-800 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-sm font-semibold text-red-500 uppercase tracking-widest">
            Pilar Utama
          </h2>
          <p className="mt-2 text-3xl lg:text-4xl font-extrabold tracking-tight text-white">
            Apa yang Kami Latih?
          </p>
        </div>
        <div className="mt-12 grid gap-10 sm:grid-cols-1 md:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.title} className="bg-gray-900 p-8 rounded-lg shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-gray-800 mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white">{feature.title}</h3>
              <p className="mt-4 text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}