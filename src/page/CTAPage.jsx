import CallToAction from "../components/CallToAction.jsx"
export default function CTAPage() {
  return (
    <div className="relative w-full h-full py-150 flex justify-end pl-50 pr-10">
      <img src="/bg-cta.png" alt="map" className="w-full object-cover absolute inset-0 -z-5 h-full w-full" />
      <div className="flex flex-col w-1/2 gap-5">
        <div className="flex flex-col gap-5">
          <h1 className="text-5xl text-white text-shadow-[-2px_6px_0px_#0F1B24]">ready to dominate?</h1>
          <p className="text-2xl text-white w-full comic-relief-bold text-shadow-[-2px_4px_0px_#0F1B24]">Add Paw Pew Pew to your Steam Wishlist and be the first to know when the hunt begins</p>
        </div>
        <div className="flex gap-5">
          <CallToAction image={`/logo-steam.png`}>wishlist <br /> on steam</CallToAction>
          <CallToAction image={`/logo-kickstart.png`}>back us on <br />kickstarter</CallToAction> 
          <CallToAction image={`/logo-discord.png`}>join our <br />discord</CallToAction>
        </div>
        <div className="flex gap-5">
          <img src="/logo-instagram.png" alt="" className="w-10 h-10 drop-shadow-[-2px_6px_0px_#0F1B24]" />
          <img src="/logo-youtube.png" alt="" className="w-10 h-10 drop-shadow-[-2px_6px_0px_#0F1B24]" />
          <img src="/logo-twitter.png" alt="" className="w-10 h-10 drop-shadow-[-2px_6px_0px_#0F1B24]" />
          <img src="/logo-tiktok.png" alt="" className="w-10 h-10 drop-shadow-[-2px_6px_0px_#0F1B24]" />
        </div>
      </div>
    </div>
  )
}
