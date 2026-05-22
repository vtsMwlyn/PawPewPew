import Link from "../../components/Link"

export default function Hero() {
  return (
    <div className="relative w-full" id="hero-page">
      <img src="/bg-hero.webp" alt="pawpewpew" className="absolute inset-0 -z-5 h-screen w-full" />
      <div className="w-full h-screen px-10 flex flex-col justify-center items-center gap-15">
        <img src="/logo-pawpewpew.webp" alt="pawpewpew" className="w-80 2xl:w-150 drop-shadow-[0px_0px_25px_white]" />
        <div className="flex flex-col 2xl:flex-row gap-3 2xl:gap-5 justify-center items-center">
          <Link image={`/logo-steam.webp`} link="https://store.steampowered.com/app/4625080/Paw_Pew_Pew/">
            wishlist <br className="block lg:hidden 2xl:block" /> on steam
          </Link>
          <Link image={`/logo-kickstart.webp`} link="#">
            back us on <br className="hidden 2xl:block" />kickstarter
          </Link>
          <Link image={`/logo-discord.webp`} link="https://discord.gg/G27dAtVGSS">
            join our <br className="hidden 2xl:block" />discord
          </Link>
        </div>
      </div>
    </div>
  )
}