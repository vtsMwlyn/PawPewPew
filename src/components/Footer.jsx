export default function Footer() {
  return (
    <div className="w-full flex flex-col bg-blueblack py-12 px-6 sm:px-12 lg:px-20 gap-10 text-white relative z-50">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-0">

        {/* Brand Section */}
        <div className="w-full lg:w-1/2 flex flex-col gap-6">
          <h2 className="text-2xl uppercase">
            SANGNILA — <br className="block 2xl:hidden" /> Developer & Publisher
          </h2>
          <a href="https://www.sangnilaindonesia.com" target="_blank" rel="noopener noreferrer">
            <img
              src="/logo-sangnila.webp"
              alt="logo perusahaan"
              className="w-40 2xl:w-50 "
            />
          </a>
        </div>

        {/* Links Section */}
        <div className="w-full lg:w-1/2 flex flex-col sm:flex-row gap-10 sm:gap-8">

          {/* Page List */}
          <div className="flex-1 flex flex-col gap-6">
            <h2 className="text-2xl uppercase">
              paw pew pew
            </h2>
            <nav className="flex flex-col gap-3 poppins-regular">
              <p className="cursor-pointer">Character</p>
              <p className="cursor-pointer">Features</p>
              <p className="cursor-pointer">Gallery</p>
              <a href="https://store.steampowered.com/app/4625080/Paw_Pew_Pew/" target="_blank" rel="noopener noreferrer">
                <p className="cursor-pointer hover:underline">
                  Wishlist on Steam ↗
                </p>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <p className="cursor-pointer hover:underline">
                  Back Us on Kickstarter ↗
                </p>
              </a>
            </nav>
          </div>

          {/* Contact */}
          <div className="flex-1 flex flex-col gap-6">
            <h2 className="text-2xl uppercase">
              contact
            </h2>
            <div className="flex flex-col gap-3 poppins-regular">
              <a href="mailto:admin@pawpewpew.com" target="_blank" rel="noopener noreferrer">
                <p className="hover:underline cursor-pointer">admin@pawpewpew.com</p>
              </a>
              <a href="https://maps.app.goo.gl/EDKXL7vyb9LimGbN7" target="_blank" rel="noopener noreferrer">
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
      <p className="text-base poppins-bold uppercase leading-relaxed">
        ©2026 Sangnila. <br className="block 2xl:hidden" />All rights reserved.
      </p>
    </div>
  );
}