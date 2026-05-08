export default function AltFooter() {
  return (
    <div className="flex flex-col justify-content items-center gap-5 bg-blueblack py-20 px-10 text-white">
      <h1 className="text-xl uppercase text-shadow-[-2px_3px_0px_#0F1B24]">SANGNILA INDONESIA — Developer & Publisher</h1>
      <img src="/logo-pawpewpew.png" alt="logo pawpewpew" className="w-25 drop-shadow-[-1px_3px_0px_#0F1B24]" />
      <div className="flex gap-3 comic-relief-bold">
        <p className="hover:text-shadow-[-2px_2px_0px_#0F1B24] text-lg cursor-pointer">Character</p>
        <p className="hover:text-shadow-[-2px_2px_0px_#0F1B24] text-lg cursor-pointer">Features</p>
        <p className="hover:text-shadow-[-2px_2px_0px_#0F1B24] text-lg cursor-pointer">Gallery</p>
        <p className="text-lg cursor-pointer hover:underline">Wishlist on Steam↗</p>
        <p className="text-lg cursor-pointer hover:underline">Back Us on Kickstarter↗</p>
      </div>
      <img src="/logo-sangnila.webp" alt="logo sangnila" className="w-75 drop-shadow-[-1px_3px_0px_#0F1B24]" />
      <p className="text-lg comic-relief-bold uppercase">©2026 SANGNILA INDONESIA. All rights reserved.</p>
    </div>
  )
}
