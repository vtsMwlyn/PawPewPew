import Link from "../../components/Link"

export default function Hero() {
  return (
    <div className="relative w-full" id="hero-page">
      <img src="/bg-hero.webp" alt="pawpewpew" className="absolute inset-0 -z-5 h-screen w-full object-cover 2xl:object-fit" />
      <div className="w-full h-screen px-10 flex flex-col justify-center items-center gap-15">
        <img src="/logo-pawpewpew.webp" alt="pawpewpew" className="w-80 lg:w-100 2xl:w-150 drop-shadow-[0px_0px_25px_white]" />
        <div className="flex flex-col lg:flex-row justify-center items-center">
          <Link image={`/logo-steam.webp`} link="https://store.steampowered.com/app/4625080/Paw_Pew_Pew/">
            Steam
          </Link>
          <Link image={`/logo-kickstart.webp`} link="#">
            Kickstarter
          </Link>
          <Link image={`/logo-discord.webp`} link="https://discord.gg/G27dAtVGSS">
            Discord
          </Link>
        </div>
      </div>
    </div>
  )
}