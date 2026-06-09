export default function Button({ selected, children, link, className, ...rest }) {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <a type="button"
      href={link} target="_blank" rel="noopener noreferrer"
      onClick={children === "Characters" ? () => scrollToSection("character-page") : 
        children === "Features" ? () => scrollToSection("features-page") : 
        children === "Gallery" ? () => scrollToSection("gallery-page") : null}
      className={`
        justify-center flex items-center w-50 rounded-full py-1 px-4 text-white uppercase 
        border-4 border-blueblack transition-colors duration-200 h-16
        ${selected 
          ? 'bg-ungupink shadow-[-1px_4px_0px_#0F1B24]' // Kalau selected, warna statis ungu dan berbayang
          : 'bg-hijaubaru hover:bg-ungupink'             // Kalau nggak selected, hijau dan berubah ungu SAAT di-hover
        }
        active:shadow-[-1px_4px_0px_#0F1B24]
        ${className}
      `}
      {...rest}
    >
      <p className="text-shadow-[-1px_4px_0px_#0F1B24] text-2xl">{children}</p>
    </a>
  )
}