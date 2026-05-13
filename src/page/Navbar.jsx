import Button from "../components/Button"
import { useState, useEffect } from "react";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('');

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth" });
  };

 useEffect(() => {
  const handleIntersect = (entries) => {
    entries.forEach((entry) => {
      // Tambahkan console.log ini buat ngebuktiin observer-nya beneran nyala
      if (entry.isIntersecting) {
        console.log("Section aktif:", entry.target.id); 
        setActiveSection(entry.target.id);
      }
    });
  };

  const observer = new IntersectionObserver(handleIntersect, {
    root: null,
    // rootMargin ngasih garis batas imajiner. 
    // '-20% 0px' artinya memicu perubahan saat section menyentuh 20% dari atas layar.
    rootMargin: '-20% 0px -40% 0px', 
    // Turunin drastis. 10% - 20% visibilitas udah lebih dari cukup untuk nandain user lagi di situ.
    threshold: 0.1, 
  });

  // Jangan kaku cuma cari 'section'. Tembak langsung ID-nya buat ngehindarin salah tag HTML.
  const sections = document.querySelectorAll('#character-page, #features-page, #gallery-page');
  
  // Guard clause: Pastikan elemennya beneran ketemu sebelum di-observe
  if (sections.length > 0) {
    sections.forEach((section) => observer.observe(section));
  } else {
    console.warn("Elemen section tidak ditemukan di DOM!");
  }

  return () => observer.disconnect();
}, []);

  return (
    <>
    <div className="w-full flex justify-between items-center px-6 py-4 fixed top-0 left-0 z-10 ">
      <div className="flex">
        <button onClick={() => scrollToSection("hero-page")}>
          <img src="/logo-pawpewpew.webp" className="w-20 lg:w-30" />
        </button>
      </div>

      <div className="gap-2 hidden lg:flex">
        <Button selected={activeSection === "character-page"}>Characters</Button>
        <Button selected={activeSection === "features-page"}>Features</Button>
        <Button selected={activeSection === "gallery-page"}>Gallery</Button>
        <Button link="https://store.steampowered.com/app/4625080/Paw_Pew_Pew/">
          <div className="flex items-center justify-center gap-2">
            <img src="/logo-steam.webp" className="w-8 drop-shadow-[-1px_4px_0px_#0F1B24]" />
            <p className="text-lg leading-tight text-left">Wishlist <br /> on Steam</p>
          </div>
        </Button>
      </div>

      <div className="block lg:hidden">
        <Button>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu-icon lucide-menu"><path d="M4 5h16" /><path d="M4 12h16" /><path d="M4 19h16" /></svg>
        </Button>
      </div>
    </div>

    </>
    
  )
}