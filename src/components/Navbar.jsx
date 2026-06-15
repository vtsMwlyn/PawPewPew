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
          // console.log("Section aktif:", entry.target.id);
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, {
      threshold: 0,
      rootMargin: "-40% 0px -40% 0px",
    });

    // Jangan kaku cuma cari 'section'. Tembak langsung ID-nya buat ngehindarin salah tag HTML.
    const sections = document.querySelectorAll('#heroes-page, #biomes-page, #gallery-page, #introduction-page, #hero-page, #cta-page');

    // Guard clause: Pastikan elemennya beneran ketemu sebelum di-observe
    if (sections.length > 0) {
      sections.forEach((section) => observer.observe(section));
    } else {
      console.warn("Elemen section tidak ditemukan di DOM!");
    }

    return () => observer.disconnect();
  }, []);

  return (
    <nav className={`w-full flex flex-col px-6 py-4 fixed top-0 left-0 z-999 bg-blueblack/75 transition-colors duration-300`}>
      {/* Desktop mode */}
      <div className="w-full flex justify-between items-center">
        <div className="ml-4">
          <button onClick={() => scrollToSection("hero-page")}>
            <img src="/logo-pawpewpew.webp" className="w-20 lg:w-30" />
          </button>
        </div>

        <div className="hidden lg:flex items-center gap-10">
          <Button frameClassName="w-40! h-25" selected={activeSection === "hero-page" || activeSection === "introduction-page"} onClick={() => scrollToSection("hero-page")}>
            Home
          </Button>

          <div
            className="relative cursor-pointer flex justify-center"
            onMouseEnter={() => setShowCharDropdown(true)}
            onMouseLeave={() => setShowCharDropdown(false)}
          >
            <Button frameClassName="w-40! h-25" selected={activeSection === "heroes-page"} >
              {activeSection === "heroes-page" ? "Heroes" : activeSection === "biomes-page" ? "Enemies" : "Characters"}
            </Button>

            {/* Dropdown Menu Desktop */}
            {showCharDropdown && (
              <div className="absolute top-18 rounded-xl flex flex-col items-center pt-4 gap-2 bg-black/50 p-4">
                <Button onClick={() => scrollToSection("heroes-page")}
                  className={`overflow-hidden animate-pop-up opacity-0 h-25`}
                  style={{ animationDelay: `${1 * 150}ms` }}>Heroes</Button>
                <Button onClick={() => scrollToSection("biomes-page")}
                  className={`overflow-hidden animate-pop-up opacity-0 h-25`}
                  style={{ animationDelay: `${2 * 150}ms` }}>Enemies</Button>
                <Button onClick={() => scrollToSection("bosses-page")}
                  className={`overflow-hidden animate-pop-up opacity-0 h-25`}
                  style={{ animationDelay: `${3 * 150}ms` }}>Bosses</Button>
              </div>
            )}
          </div>

          <Button
            frameClassName="w-40! h-25"
            selected={activeSection === "biomes-page"}
            onClick={() => scrollToSection("biomes-page")}>
            Biomes
          </Button>

          <Button
            frameClassName="w-40! h-25"
            selected={activeSection === "gallery-page"}
            onClick={() => scrollToSection("gallery-page")}>
            Gallery
          </Button>

          <div className={`transition-all duration-500 ease-out ${passed100vh
            ? 'w-60 opacity-100 translate-x-0'
            : 'w-0 opacity-0 -translate-x-8'
            }`}
          >
            <Button selected={activeSection === "cta-page"} frameClassName="w-40! h-25" link="https://store.steampowered.com/app/4625080/Paw_Pew_Pew/" className="w-full">
              <div className="flex items-center justify-center gap-2">
                <img src="/logo-steam.webp" className="w-8 drop-shadow-[-1px_4px_0px_#0F1B24]" />
                <p className="leading-tight text-left">Wishlist</p>
              </div>
            </Button>
          </div>
        </div>

        {/* Mobile toggler */}
        <div className="flex lg:hidden gap-4">
          <Button onClick={() => setShowMobileList(!showMobileList)} className="w-20!">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu-icon lucide-menu"><path d="M4 5h16" /><path d="M4 12h16" /><path d="M4 19h16" /></svg>
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
            {activeSection === "heroes-page" ? "Heroes" : activeSection === "biomes-page" ? "Enemies" : "Characters"}
          </Button>

          {/* Dropdown Menu Mobile */}
          {showCharDropdown && (
            <div className="flex gap-2">
              <Button onClick={() => scrollToSection("heroes-page")}
                className={`overflow-hidden animate-pop-up opacity-0`}
                style={{ animationDelay: `${1 * 150}ms` }}>Heroes</Button>
              <Button onClick={() => scrollToSection("biomes-page")}
                className={`overflow-hidden animate-pop-up opacity-0`}
                style={{ animationDelay: `${2 * 150}ms` }}>Enemies</Button>
              <Button onClick={() => scrollToSection("bosses-page")}
                className={`overflow-hidden animate-pop-up opacity-0`}
                style={{ animationDelay: `${3 * 150}ms` }}>Bosses</Button>
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
            <p className="text-xl 2xl:text-lg leading-tight text-left">Wishlist <br className="hidden 2xl:block" /> on Steam</p>
          </div>
        </Button>
      </div>

      <img src="/vine.webp" className="w-50 top-0 -left-24 -rotate-270 -scale-y-100 absolute z-100" />
      <img src="/vine.webp" className="w-50 -bottom-10 -right-18 -scale-x-100 absolute z-100" />
    </nav>
  )
}