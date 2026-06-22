import Link from "../../components/Link"
import Button from "../../components/Button"
import SocialMedia from "./SocialMedia"
import { useToast } from "../../context/ToastContext"

export default function CallToAction() {
  const { showToast } = useToast()
  return (
    <div className="relative w-full h-screen items-center flex justify-end pl-8 lg:pl-50 pr-8" id="cta-page">
      <img src="/bg-cta.webp" alt="map" className="w-full h-screen object-cover absolute inset-0 brightness-80" />
      <div className="flex flex-col w-full lg:w-1/2 lg:gap-5 relative z-5">
        <div className="flex flex-col gap-5">
          <h1 className="text-5xl text-white text-shadow-[-4px_4px_0px_#0F1B24]">join the fight</h1>
          <p className="text-lg 2xl:text-2xl text-white w-full poppins-regular text-shadow-[-2px_3px_0px_#0F1B24]">Add PAWPEWPEW to your Steam Wishlist now and get notified the exact moment the battle begins.</p>
        </div>
        <div className="flex flex-col items-start lg:flex-row gap-5">
          <Link image={`/button-wishlish-steam.webp`} link="https://store.steampowered.com/app/4625080/Paw_Pew_Pew/" />
          <div className="flex justify-center relative group">
            <Button buttonType="no_background" onClick={() => showToast('Kickstater Soon')} image={`/button-kickstater.webp`} />
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
          <Link image={`/button-join-discord.webp`} link="https://discord.gg/G27dAtVGSS" />
        </div>
        <div className="w-full flex mt-8">
          <SocialMedia link="https://www.instagram.com/paw_pewpew?igsh=azBldzNyd3J0eTk2" image="/logo-instagram.webp" text="@paw_pewpew" />
          <SocialMedia link="https://www.youtube.com/@PawPewPew" image="/logo-youtube.webp" text="@PawPewPew" />
          <SocialMedia link="https://x.com/paw_pew_pew" image="/logo-twitter.webp" text="@paw_pew_pew" />
          <SocialMedia link="https://www.tiktok.com/@pawpewpew4?_r=1&_t=ZS-95jwHaah5cO" image="/logo-tiktok.webp" text="@pawpewpew4" />
        </div>
      </div>
    </div>
  )
}