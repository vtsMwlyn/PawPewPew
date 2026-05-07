import CallToAction from "../components/CallToAction"
const Hero = () => {
  return (
    <div className="relative w-full h-screen">
      <img src="/HeroBackground.png" alt="pawpewpew" className="object-cover absolute inset-0 -z-5 h-screen w-full" />
      <div className="w-full h-screen flex flex-col justify-center items-center gap-15">
        <img src="/logo.png" alt="pawpewpew" className="w-120 drop-shadow-[0px_0px_25px_white]" />
        <div className="flex flex-col gap-5 justify-center items-center">
          <div className="flex gap-5">
            <CallToAction image={`/steam.png`}>wishlist <br /> on steam</CallToAction>
            <CallToAction image={`/discord.png`}>join our <br />discord</CallToAction>
          </div>
          <div>
            <CallToAction image={`/kickstart.png`}>back us on <br />kickstarter</CallToAction>
          </div>
        </div>
      </div>
    </div>
    
    
  )
}

export default Hero