export default function Footer() {
  return (
    <div className="w-full flex flex-col justify-content gap-25 bg-green py-20 px-10 text-white relative z-50">
      <div className="flex flex-col 2xl:flex-row justify-between">
        <div className="w-full lg:w-1/2 flex flex-col gap-8">
          <h1 className="text-2xl uppercase text-shadow-[-2px_3px_0px_#0F1B24]">SANGNILA INDONESIA — Developer & Publisher</h1>
          <img src="/logo-sangnila.webp" alt="logo sangnila" className="w-30 2xl:w-65 drop-shadow-[-1px_3px_0px_#0F1B24]" />
        </div>

        <div className="w-full 2xl:w-1/2 flex flex-col lg:flex-row">
          {/* Page list */}
          <div className="w-full lg:w-1/2 flex flex-col gap-8 mt-8 2xl:mt-0">
            <h1 className="text-2xl uppercase text-shadow-[-2px_3px_0px_#0F1B24]">paw pew pew</h1>
            <div className="flex flex-col gap-3 comic-relief-bold">
              <p className="hover:text-shadow-[-2px_2px_0px_#0F1B24] cursor-pointer">Character</p>
              <p className="hover:text-shadow-[-2px_2px_0px_#0F1B24] cursor-pointer">Features</p>
              <p className="hover:text-shadow-[-2px_2px_0px_#0F1B24] cursor-pointer">Gallery</p>
              <a href="https://store.steampowered.com/app/4625080/Paw_Pew_Pew/" target="_blank" rel="noopener noreferrer">
                <p className="cursor-pointer hover:underline hover:text-shadow-[-2px_2px_0px_#0F1B24]">
                  Wishlist on Steam↗
                </p>
              </a>
              <a href="https://www.kickstarter.com/projects/pawpewpew/paw-pew-pew" target="_blank" rel="noopener noreferrer">
                <p className="cursor-pointer hover:underline hover:text-shadow-[-2px_2px_0px_#0F1B24]">
                  Back Us on Kickstarter↗
                </p>
              </a>
            </div>
          </div>

          {/* Contact */}
          <div className="w-full lg:w-1/2 flex flex-col gap-8 mt-8 2xl:mt-0">
            <h1 className="text-2xl uppercase text-shadow-[-2px_3px_0px_#0F1B24]">contact</h1>
            <div className="flex flex-col gap-3 comic-relief-bold">
              <a href="mailto:admin@pawpewpew.com"
                target="_blank"
                rel="noopener noreferrer">
                <p className="hover:underline cursor-pointer">
                  admin@pawpewpew.com
                </p>
              </a>
              <a href="https://maps.app.goo.gl/EDKXL7vyb9LimGbN7"
                target="_blank"
                rel="noopener noreferrer">
                <p className="hover:underline cursor-pointer">
                  Paskal Hyper Square B70, 
                  <br /> Jl.Pasir Kaliki No.23, 
                  <br /> Kec. Cicendo, Kota Bandung
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <p className="text-xs comic-relief-bold uppercase">©2026 SANGNILA INDONESIA. <br className="block 2xl:hidden"/> All rights reserved.</p>
    </div>
  )
}