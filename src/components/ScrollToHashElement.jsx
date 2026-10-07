import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToHashElement() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Ambil id tanpa tanda '#'
      const elementId = hash.replace('#', '');
      const element = document.getElementById(elementId);

      if (element) {
        // Kasih sedikit delay/timeout biar DOM halamannya selesai dimuat sempurna
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      // Jika gak ada hash, scroll otomatis balik ke paling atas halaman
      window.scrollTo(0, 0);
    }
  }, [hash]);

  return null;
}