export default function Button({ selected, children, link }) {
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
        rounded-full py-1 px-4 text-white uppercase
        border-4  border-blueblack w-45
        hover: ${selected ? 'shadow-[-1px_4px_0px_#0F1B24] bg-ungupink' : ''}
        active:shadow-[-1px_4px_0px_#0F1B24]
        bg-hijaubaru hover:bg-ungupink
        justify-center flex items-center
      `}
    >
      <p className="text-shadow-[-1px_4px_0px_#0F1B24] text-2xl">{children}</p>
    </a>
  )
}