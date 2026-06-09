import Button from "./Button"
import { useState, useEffect } from "react";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('');
  const [showMobileList, setShowMobileList] = useState(false);
  const [passed100vh, setPassed100vh] = useState(false);
  const [showCharDropdown, setShowCharDropdown] = useState(false);
    
  useEffect(() => {
      const handleScroll = () => {
        const scrollY = window.scrollY;
        setPassed100vh(scrollY >= window.innerHeight);
      };

      handleScroll();

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

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
      threshold: 0,
      rootMargin: "-40% 0px -40% 0px",
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
    <nav className={`w-full flex flex-col px-6 py-4 fixed top-0 left-0 z-999 ${passed100vh ? 'bg-blueblack/75' : 'bg-transparent'}`}>
      {/* Desktop mode */}
      <div className="w-full flex justify-between items-center">
        <div className="flex">
          <button onClick={() => scrollToSection("hero-page")}>
            <img src="/logo-pawpewpew.webp" className="w-20 lg:w-30" />
          </button>
        </div>

        <div className="gap-2 hidden lg:flex">
          <div 
            className="relative" 
            onMouseEnter={() => setShowCharDropdown(true)}
            onMouseLeave={() => setShowCharDropdown(false)}
          >
            <Button selected={activeSection === "character-page"}>
              {activeSection === "character-page" ? "Heroes" : "Characters"}
            </Button>

            {/* Dropdown Menu Desktop */}
            {showCharDropdown && (
              <div className="absolute top-full left-0 mt-5 bg-blueblack/75 backdrop-blur-sm rounded-xl flex flex-col p-2 gap-2">
                <Button> Heroes </Button>
                <Button> Enemies </Button>
                <Button> Bosses </Button>
              </div>
            )}
          </div>
          <Button selected={activeSection === "features-page"}>Features</Button>
          <Button selected={activeSection === "gallery-page"}>Gallery</Button>
          <Button link="https://store.steampowered.com/app/4625080/Paw_Pew_Pew/" className={` ${passed100vh ? 'block' : 'hidden'}`}>
            <div className="flex items-center justify-center gap-2">
              <img src="/logo-steam.webp" className="w-8 drop-shadow-[-1px_4px_0px_#0F1B24]" />
              <p className="text-lg leading-tight text-left">Wishlist <br /> on Steam</p>
            </div>
          </Button>
        </div>

        {/* Mobile toggler */}
        <div className="block lg:hidden">
          <Button onClick={() => setShowMobileList(!showMobileList)} className="w-20!">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu-icon lucide-menu"><path d="M4 5h16" /><path d="M4 12h16" /><path d="M4 19h16" /></svg>
          </Button>
        </div>
      </div>

      {/* Mobile navbar list */}
      <div className={`w-full flex-col items-stretch mt-8 gap-4 ${showMobileList ? 'flex' : 'hidden'}`}>
        {/* Mobile navbar list - Replace the old Button characters with this */}
      <div className="w-full flex flex-col gap-2">
        <Button 
          className="w-full! flex justify-between items-center" 
          selected={activeSection === "character-page"}
          onClick={() => setShowCharDropdown(!showCharDropdown)}
        >
          <span>Characters</span>
        </Button>
        
        {/* Dropdown Menu Mobile */}
        {showCharDropdown && (
          <div className="flex gap-10">
            <Button className="w-full!" >
              Heroes
            </Button >
            <Button className="w-full!" >
              Enemies
            </Button>
            <Button className="w-full!" >
              Bosses
            </Button>
          </div>
        )}
      </div>
        <Button className="w-full!" selected={activeSection === "features-page"}>Features</Button>
        <Button className="w-full!" selected={activeSection === "gallery-page"}>Gallery</Button>
        <Button className="w-full!" link="https://store.steampowered.com/app/4625080/Paw_Pew_Pew/">
          <div className="flex items-center justify-center gap-2">
            <img src="/logo-steam.webp" className="w-8 drop-shadow-[-1px_4px_0px_#0F1B24]" />
            <p className="text-2xl 2xl:text-lg leading-tight text-left">Wishlist <br className="hidden 2xl:block" /> on Steam</p>
          </div>
        </Button>
      </div>
    </nav>
  )
}