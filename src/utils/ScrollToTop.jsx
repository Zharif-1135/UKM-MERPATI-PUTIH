import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Komponen ini akan otomatis scroll ke atas setiap kali pindah halaman
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default ScrollToTop; // Perhatikan kita menggunakan "export default"