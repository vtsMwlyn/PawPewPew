import Link from "../../components/Link"
import Button from "../../components/Button"

export default function Hero() {
  return (
    <div className="relative w-full" id="hero-page">
      <img src="/bg-hero.webp" alt="pawpewpew" className="absolute inset-0 -z-5 h-screen w-full object-cover 2xl:object-fit" />
      <div className="w-full h-screen px-10 flex flex-col justify-center items-center gap-15">
        <img src="/logo-pawpewpew.webp" alt="pawpewpew" className="w-80 lg:w-100 2xl:w-150 drop-shadow-[0px_0px_25px_white]" />
        <div className="flex flex-col lg:flex-row gap-5">
          <Link image={`/button-wishlish-steam.webp`} link="https://store.steampowered.com/app/4625080/Paw_Pew_Pew/">
            wishlist <br className="hidden 2xl:block" /> on steam
          </Link>
          <div className="relative group">
            <Button buttonType="no_background" disabled={true} image={`/button-kickstater.webp`} />
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
          <Link image={`/button-join-discord.webp`} link="https://discord.gg/G27dAtVGSS">
            join our <br className="hidden 2xl:block" />discord
          </Link>
        </div>
      </div>
    </div>
  )
}