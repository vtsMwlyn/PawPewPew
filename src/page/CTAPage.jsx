import CallToAction from "../components/CallToAction.jsx"
import SocialMedia from "../components/SocialMedia.jsx"
export default function CTAPage() {
  return (
    <div className="relative w-full h-full py-10 2xl:py-150 flex justify-end pl-8 2xl:pl-50 pr-8 bg-hijaubaru-light">
      <img src="/bg-cta.webp" alt="map" className="w-full object-cover absolute inset-0 2xl:h-full w-full" />
      <div className="flex flex-col w-full 2xl:w-1/2 gap-5 relative z-5">
        <div className="flex flex-col gap-5 mt-60">
          <h1 className="text-5xl text-white text-shadow-[-2px_6px_0px_#0F1B24]">ready to dominate?</h1>
          <p className="text-lg 2xl:text-2xl text-white w-full comic-relief-bold text-shadow-[-2px_4px_0px_#0F1B24]">Add Paw Pew Pew to your Steam Wishlist and be the first to know when the hunt begins</p>
        </div>
        <div className="flex flex-col 2xl:flex-row gap-5">
          <CallToAction image={`/logo-steam.webp`} link="https://store.steampowered.com/app/4625080/Paw_Pew_Pew/">wishlist <br /> on steam</CallToAction>
          <CallToAction image={`/logo-kickstart.webp`}>back us on <br />kickstarter</CallToAction> 
          <CallToAction image={`/logo-discord.webp`} link="https://discord.gg/G27dAtVGSS">join our <br />discord</CallToAction>
        </div>
        <div className="flex gap-5 mt-8 2xl:mt-0">
          <SocialMedia link="https://www.instagram.com/paw_pewpew?igsh=azBldzNyd3J0eTk2" image="/logo-instagram.webp" text="@paw_pewpew" />
          <SocialMedia link="#" image="/logo-youtube.webp" text="YouTube" />
          <SocialMedia link="https://x.com/paw_pew_pew" image="/logo-twitter.webp" text="@paw_pew_pew" />
          <SocialMedia link="https://www.tiktok.com/@pawpewpew4?_r=1&_t=ZS-95jwHaah5cO" image="/logo-tiktok.webp" text="@pawpewpew4" />
        </div>
      </div>
    </div>
  )
}
