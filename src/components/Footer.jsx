import { useLanguage } from "../context/LanguageContext";
import { useNavigate, useLocation } from "react-router-dom";

export default function Footer() {
  const { t } = useLanguage();
  const footer = t.footer;
  const navigate = useNavigate();
  const location = useLocation();

  const handleHomeClick = () => {
    if (location.pathname === "/") {
      const el = document.getElementById("hero-page");
      el?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/");
      setTimeout(() => {
        const el = document.getElementById("hero-page");
        el?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  const handleGalleryClick = () => {
    if (location.pathname === "/") {
      const el = document.getElementById("gallery-page");
      el?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/");
      setTimeout(() => {
        const el = document.getElementById("gallery-page");
        el?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  return (
    <div className="w-full flex flex-col bg-blueblack py-12 px-6 sm:px-12 lg:px-20 gap-10 text-white relative z-50">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-0">
        {/* Brand Section */}
        <div className="w-full lg:w-1/2 flex flex-col gap-6">
          <h2 className="text-2xl uppercase text-shadow-[-2px_3px_0px_#0F1B24]">
            SANGNILA — <br className="block 2xl:hidden" /> Developer & Publisher
          </h2>
          <a
            href="https://www.sangnilaindonesia.com"
            target="_blank"
            rel="noopener noreferrer"
          >
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
            <h2 className="text-2xl uppercase text-shadow-[-2px_3px_0px_#0F1B24]">
              {footer.p3}
            </h2>
            <nav className="flex flex-col gap-3 poppins-regular">
              <p
                onClick={handleHomeClick}
                className="hover:text-shadow-[-2px_3px_0px_#0F1B24] cursor-pointer"
              >
                {footer.home}</p>
              <p
                onClick={() => navigate("/alcove")}
                className="hover:text-shadow-[-2px_3px_0px_#0F1B24] cursor-pointer"
              >
                {footer.alcove}
              </p>
              <p
                onClick={handleGalleryClick}
                className="hover:text-shadow-[-2px_3px_0px_#0F1B24] cursor-pointer"
              >
                {footer.gallery}
              </p>
              <a
                href="https://store.steampowered.com/app/4625080/Paw_Pew_Pew/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="cursor-pointer hover:underline hover:text-shadow-[-2px_3px_0px_#0F1B24]">
                  {footer.wishlist} ↗
                </p>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <p className="cursor-pointer hover:underline hover:text-shadow-[-2px_3px_0px_#0F1B24]">
                  {footer.backus} ↗
                </p>
              </a>
            </nav>
          </div>

          {/* Contact */}
          <div className="flex-1 flex flex-col gap-6">
            <h2 className="text-2xl uppercase text-shadow-[-2px_3px_0px_#0F1B24]">
              {footer.contact}
            </h2>
            <div className="flex flex-col gap-3 poppins-regular">
              <a
                href={`mailto:${footer.mail}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="hover:underline cursor-pointer">
                  {footer.mail}
                </p>
              </a>
              <a
                href="https://maps.app.goo.gl/EDKXL7vyb9LimGbN7"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p
                  className="hover:underline cursor-pointer"
                  dangerouslySetInnerHTML={{ __html: footer.address }}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <p className="text-base poppins-bold uppercase leading-relaxed text-shadow-[-2px_3px_0px_#0F1B24]">
        {footer.copyright}
      </p>
    </div>
  );
}
