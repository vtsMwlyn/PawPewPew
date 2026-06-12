import Link from "../../components/Link"
import SocialMedia from "./SocialMedia"

export default function CallToAction() {
  return (
    <div className="relative w-full h-full py-10 lg:py-100 2xl:py-150 flex justify-end pl-8 lg:pl-50 pr-8 bg-hijaubaru-light" id="cta-page">
      <img src="/bg-cta.webp" alt="map" className="w-full object-cover absolute inset-0 2xl:h-full w-full" />
      <div className="flex flex-col w-full lg:w-1/2 gap-5 relative z-5">
        <div className="flex flex-col gap-5 mt-60 lg:-mt-20 2xl:mt-60">
          <h1 className="text-5xl text-white text-shadow-[-2px_6px_0px_#0F1B24]">join the fight</h1>
          <p className="text-lg 2xl:text-2xl text-white w-full comic-relief-bold text-shadow-[-1px_3px_0px_#0F1B24] lg:text-shadow-[-2px_4px_0px_#0F1B24]">Add PAWPEWPEW to your Steam Wishlist now and get notified the exact moment the battle begins.</p>
        </div>
        <div className="flex flex-col 2xl:flex-row gap-5">
          <Link image={`/button-wishlish-steam.webp`} link="https://store.steampowered.com/app/4625080/Paw_Pew_Pew/">
            wishlist <br className="hidden 2xl:block" /> on steam
          </Link>
          <Link image={`/button-kickstater.webp`}>
            back us on <br className="hidden 2xl:block" />kickstarter
          </Link>
          <Link image={`/button-join-discord.webp`} link="https://discord.gg/G27dAtVGSS">
            join our <br className="hidden 2xl:block" />discord
          </Link>
        </div>
        <div className="w-full flex mt-8">
          <SocialMedia link="https://www.instagram.com/paw_pewpew?igsh=azBldzNyd3J0eTk2" image="/logo-instagram.webp" text="@paw_pewpew" />
          <SocialMedia link="#" image="/logo-youtube.webp" text="YouTube" />
          <SocialMedia link="https://x.com/paw_pew_pew" image="/logo-twitter.webp" text="@paw_pew_pew" />
          <SocialMedia link="https://www.tiktok.com/@pawpewpew4?_r=1&_t=ZS-95jwHaah5cO" image="/logo-tiktok.webp" text="@pawpewpew4" />
        </div>
      </div>
    </div>
  )
}