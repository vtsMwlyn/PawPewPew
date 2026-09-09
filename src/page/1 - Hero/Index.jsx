import { useState, useEffect } from "react";
import Link from "../../components/Link";
import Button from "../../components/Button";
import { useToast } from "../../context/ToastContext";

export default function Hero() {
  const { showToast } = useToast();
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let timer;

    const resetTimer = () => {
      setIsVisible(true);
      clearTimeout(timer);
      // Sembunyikan elemen setelah 3 detik tidak ada aktivitas
      timer = setTimeout(() => {
        setIsVisible(false);
      }, 3000);
    };

    // Jalankan timer saat pertama kali dimuat
    resetTimer();

    // Event listener untuk memantau interaksi pengguna
    const events = ["mousemove", "mousedown", "keydown", "touchstart", "scroll"];

    events.forEach((event) => {
      window.addEventListener(event, resetTimer);
    });

    return () => {
      clearTimeout(timer);
      events.forEach((event) => {
        window.removeEventListener(event, resetTimer);
      });
    };
  }, []);

  return (
    <div className="relative w-full" id="hero-page">
      {/* <img
        src="/splash-art/bg-hero.webp"
        alt="pawpewpew hero background"
        className="absolute inset-0 -z-5 h-screen w-full object-cover 2xl:object-fit"
      /> */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className={`absolute inset-0 -z-5 h-screen w-full object-cover 2xl:object-fit transition-opacity duration-700 ease-in-out ${isVisible ?'blur-sm':''}`}
      >
        <source src="/videos/cinematic_cut_scene.mp4" type="video/mp4" />
      </video>
      <div
        className={`w-full h-screen px-10 flex flex-col justify-center items-center gap-15 transition-opacity duration-700 ease-in-out ${
          isVisible ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <img
          src="/logo-pawpewpew.webp"
          alt="pawpewpew logo"
          className="w-80 lg:w-100 2xl:w-150 drop-shadow-[0px_0px_25px_white]"
        />
        <div className="flex flex-col lg:flex-row gap-5">
          <Link
            image={`button/button-wishlish-steam.webp`}
            link="https://store.steampowered.com/app/4625080/Paw_Pew_Pew/"
          >
            wishlist <br className="hidden 2xl:block" /> on steam
          </Link>
          <div className="relative group">
            <Button
              buttonType="no_background"
              onClick={() => showToast("Kickstater Soon")}
              image={`button/button-kickstater.webp`}
            />
            <span
              className={`
                absolute poppins-reguler  
                px-2 py-1 text-sm
                bg-stone-900/90 text-white
                rounded-md opacity-0 translate-y-2
                -bottom-10 left-1/2 transform -translate-x-1/2
                group-hover:opacity-100 group-hover:translate-y-0
                transition-all duration-200
                pointer-events-none whitespace-nowrap
              `}
            >
              Coming Soon
            </span>
          </div>
          <Link
            image={`button/button-join-discord.webp`}
            link="https://discord.gg/G27dAtVGSS"
          >
            join our <br className="hidden 2xl:block" />
            discord
          </Link>
        </div>
      </div>
    </div>
  );
}
