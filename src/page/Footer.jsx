
export default function Footer() {
  return (
    <div className="flex flex-col justify-content gap-10 bg-hijaubaru py-20 px-40 text-white">
      <div className="flex justify-between">
        <div className="flex flex-col gap-8">
          <h1 className="text-2xl uppercase text-shadow-[-2px_3px_0px_#0F1B24]">SANGNILA INDONESIA — Developer & Publisher</h1>
          <img src="/logoSangnila.webp" alt="logo sangnila" className="w-50 drop-shadow-[-1px_3px_0px_#0F1B24]" />
        </div>
        <div className="flex flex-col gap-8">
          <h1 className="text-2xl uppercase text-shadow-[-2px_3px_0px_#0F1B24]">paw pew pew</h1>
          <div className="flex flex-col gap-3 comic-relief-bold">
            <p>Features</p>
            <p>Character</p>
            <p>Gallery</p>
            <p>Wishlist on Steam</p>
            <p>back us on Kickstarter</p>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <h1 className="text-2xl uppercase text-shadow-[-2px_3px_0px_#0F1B24]">contact</h1>
          <div className="flex flex-col gap-3 comic-relief-bold">
            <p>admin@pawpewpew.com</p>
            <p>Paskal Hyper Square B70, <br /> Jl.Pasir Kaliki No.23, <br /> Kec. Cicendo, Kota Bandung</p>
          </div>
        </div>
      </div>
      <p className="text-xs comic-relief-bold uppercase">©2026 SANGNILA INDONESIA. All rights reserved.</p>
    </div>
  )
}