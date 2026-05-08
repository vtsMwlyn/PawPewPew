
export default function Footer() {
  return (
    <div className="flex flex-col justify-content gap-25 bg-hijaubaru py-20 px-10 text-white">
      <div className="flex justify-between">
        <div className="flex flex-col gap-8">
          <h1 className="text-2xl uppercase text-shadow-[-2px_3px_0px_#0F1B24]">SANGNILA INDONESIA — Developer & Publisher</h1>
          <img src="/logo-sangnila.webp" alt="logo sangnila" className="w-75 drop-shadow-[-1px_3px_0px_#0F1B24]" />
        </div>
        <div className="flex flex-col gap-8">
          <h1 className="text-2xl uppercase text-shadow-[-2px_3px_0px_#0F1B24]">paw pew pew</h1>
          <div className="flex flex-col gap-3 comic-relief-bold">
            <p className="hover:text-shadow-[-2px_2px_0px_#0F1B24] cursor-pointer">Character</p>
            <p className="hover:text-shadow-[-2px_2px_0px_#0F1B24] cursor-pointer">Features</p>
            <p className="hover:text-shadow-[-2px_2px_0px_#0F1B24] cursor-pointer">Gallery</p>
            <p className="cursor-pointer hover:underline hover:text-shadow-[-2px_2px_0px_#0F1B24]">Wishlist on Steam↗</p>
            <p className="cursor-pointer hover:underline hover:text-shadow-[-2px_2px_0px_#0F1B24]">Back Us on Kickstarter↗</p>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <h1 className="text-2xl uppercase text-shadow-[-2px_3px_0px_#0F1B24]">contact</h1>
          <div className="flex flex-col gap-3 comic-relief-bold">
            <p className="hover:underline cursor-pointer">admin@pawpewpew.com</p>
            <p className="hover:underline cursor-pointer">Paskal Hyper Square B70, <br /> Jl.Pasir Kaliki No.23, <br /> Kec. Cicendo, Kota Bandung</p>
          </div>
        </div>
      </div>
      <p className="text-xs comic-relief-bold uppercase">©2026 SANGNILA INDONESIA. All rights reserved.</p>
    </div>
  )
}