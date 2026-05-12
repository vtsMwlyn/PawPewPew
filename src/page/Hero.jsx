import CallToAction from "../components/CallToAction"
const Hero = () => {
  return (
    <div className="relative" id="hero-page">
      <img src="/bg-hero.webp" alt="pawpewpew" className="object-cover absolute inset-0 -z-5 h-screen w-full" />
      <div className="w-full h-screen flex flex-col justify-center items-center gap-15">
        <img src="/logo-pawpewpew.webp" alt="pawpewpew" className="w-150 drop-shadow-[0px_0px_25px_white]" />
        <div className="flex gap-5 justify-center items-center">
            <CallToAction image={`/logo-steam.webp`} link="https://store.steampowered.com/app/4625080/Paw_Pew_Pew/">wishlist <br /> on steam</CallToAction>
            <CallToAction image={`/logo-kickstart.webp`} link="#">back us on <br />kickstarter</CallToAction> 
            <CallToAction image={`/logo-discord.webp`} link="https://discord.gg/G27dAtVGSS">join our <br />discord</CallToAction>
        </div>
      </div>
    </div>
    
    
  )
}

export default Hero