import Button from "./Button"
import { useState, useEffect } from "react";
import { useAudio } from "../context/AudioContext";

function MuteButton({ isMuted, onClick, className = '' }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex items-center justify-center w-16 h-16 rounded-full border-4 border-blueblack transition duration-200 hover:scale-110 ease-out active:shadow-[-1px_4px_0px_#0F1B24] ${isMuted ? 'bg-hijaubaru hover:bg-ungupink' : 'bg-ungupink shadow-[-1px_4px_0px_#0F1B24]'} ${className}`}
    >
      {isMuted ? (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
          <line x1="23" y1="9" x2="17" y2="15" />
          <line x1="17" y1="9" x2="23" y2="15" />
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
          <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
          <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
        </svg>
      )}
    </button>
  );
}

export default function Navbar() {
  const { isMuted, toggleMute } = useAudio();
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
    const sections = document.querySelectorAll('#heroes-page, #biomes-page, #gallery-page, #introduction-page, #hero-page');

    // Guard clause: Pastikan elemennya beneran ketemu sebelum di-observe
    if (sections.length > 0) {
      sections.forEach((section) => observer.observe(section));
    } else {
      console.warn("Elemen section tidak ditemukan di DOM!");
    }

    return () => observer.disconnect();
  }, []);

  return (
    <nav className={`w-full flex flex-col px-6 py-4 fixed top-0 left-0 z-999 ${showMobileList ? 'bg-blueblack/75' : passed100vh ? 'bg-blueblack/75' : 'bg-transparent'}  transition-colors duration-300`}>
      {/* Desktop mode */}
      <div className="w-full flex justify-between items-center">
        <div className="flex">
          <button onClick={() => scrollToSection("hero-page")}>
            <img src="/logo-pawpewpew.webp" className="w-20 lg:w-30" />
          </button>
        </div>

        <div className="gap-2 hidden lg:flex items-center">
          <MuteButton isMuted={isMuted} onClick={toggleMute} />
          <div
            className="relative cursor-pointer flex justify-center" 
            onMouseEnter={() => setShowCharDropdown(true)}
            onMouseLeave={() => setShowCharDropdown(false)}
          >
            <Button selected={activeSection === "heroes-page"}>
              {activeSection === "heroes-page" ? "Heroes" : "Characters"}
            </Button>

            {/* Dropdown Menu Desktop */}
            {showCharDropdown && (
              <div className="absolute top-full rounded-xl flex flex-col items-center pt-4 gap-2">
                <Button onClick={() => scrollToSection("heroes-page")} 
                className={`overflow-hidden animate-pop-up opacity-0`}
                style={{ animationDelay: `${1 * 150}ms` }}>Heroes</Button>
                <Button onClick={() => scrollToSection("enemies-page")} 
                className={`overflow-hidden animate-pop-up opacity-0`}
                style={{ animationDelay: `${2 * 150}ms` }}>Enemies</Button>
                <Button onClick={() => scrollToSection("bosses-page")} 
                className={`overflow-hidden animate-pop-up opacity-0`}
                style={{ animationDelay: `${3 * 150}ms` }}>
                  Bosses</Button>
              </div>
            )}
          </div>
          <Button 
            selected={activeSection === "biomes-page"} 
            onClick={() => scrollToSection("biomes-page")}>
            Biomes
          </Button>
          <Button 
            selected={activeSection === "gallery-page"} 
            onClick={() => scrollToSection("gallery-page")}>
            Gallery
          </Button>
          <div className={`transition-all duration-500 ease-out ${passed100vh 
                ? 'w-50 opacity-100 translate-x-0 ml-2' 
                : 'w-0 opacity-0 -translate-x-8 ml-0'
            }`}
          >
            <Button link="https://store.steampowered.com/app/4625080/Paw_Pew_Pew/" className="w-full">
              <div className="flex items-center justify-center gap-2 whitespace-nowrap">
                <img src="/logo-steam.webp" className="w-8 drop-shadow-[-1px_4px_0px_#0F1B24]" />
                <p className="text-lg leading-tight text-left">Wishlist <br /> on Steam</p>
              </div>
            </Button>
          </div>
        </div>

        {/* Mobile toggler */}
        <div className="flex lg:hidden gap-4">
          <MuteButton isMuted={isMuted} onClick={toggleMute} />
          <Button onClick={() => setShowMobileList(!showMobileList)} className="w-20!">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu-icon lucide-menu"><path d="M4 5h16" /><path d="M4 12h16" /><path d="M4 19h16" /></svg>
          </Button>
        </div>
      </div>

      {/* Mobile navbar list */}
      <div className={`w-full flex-col items-stretch mt-8 gap-4 ${showMobileList ? 'flex' : 'hidden'}`}>
        <div className="w-full flex flex-col gap-2">
          <Button 
            className="w-full! flex justify-between items-center" 
            selected={activeSection === "heroes-page"}
            onClick={() => setShowCharDropdown(!showCharDropdown)}
          >
            {activeSection === "heroes-page" ? "Heroes" : activeSection === "biomes-page" ? "Enemies" : "Characters" }
          </Button>
          
          {/* Dropdown Menu Mobile */}
          {showCharDropdown && (
            <div className="flex flex-col gap-2">
              <Button className="w-9/10!" >Heroes</Button >
              <Button className="w-9/10!" >Enemies</Button>
              <Button className="w-9/10!" >Bosses</Button>
            </div>
          )}
        </div>
        <Button className="w-full!" selected={activeSection === "biomes-page"} onClick={() => scrollToSection("biomes-page")}>
          Biomes
        </Button>
        <Button className="w-full!" selected={activeSection === "gallery-page"} onClick={() => scrollToSection("gallery-page")}>
          Gallery
        </Button>
        <Button className={`w-full!`} link="https://store.steampowered.com/app/4625080/Paw_Pew_Pew/">
          <div className="flex items-center justify-center gap-2">
            <img src="/logo-steam.webp" className="w-8 drop-shadow-[-1px_4px_0px_#0F1B24]" />
            <p className="text-2xl 2xl:text-lg leading-tight text-left">Wishlist <br className="hidden 2xl:block" /> on Steam</p>
          </div>
        </Button>
        
      </div>
    </nav>
  )
}