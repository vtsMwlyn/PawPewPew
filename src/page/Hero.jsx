import CallToAction from "../components/CallToAction"
const Hero = () => {
  return (
    <div className="relative w-full h-screen">
      <img src="/HeroBackground.png" alt="pawpewpew" className="object-cover absolute inset-0 -z-5" />
      <div className="w-full h-screen flex flex-col justify-center items-center gap-10">
        <img src="/logo.png" alt="pawpewpew" className="w-120" />
        <div className="flex gap-2 justify-center">
          <CallToAction image={`/steam.png`}>WISHLIST ON STEAM</CallToAction>
          <CallToAction image={`/discord.png`}>JOIN OUR COMMUNITY</CallToAction>
        </div>
      </div>
    </div>
    
    
  )
}

export default Hero