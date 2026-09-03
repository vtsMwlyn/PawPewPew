export default function Link({
  buttonType = "background",
  link,
  target = "_blank",
  image,
  className = "",
  frameClassName = "",
  selected = false,
  children,
  ...rest
}) {
  if (buttonType === "background") {
    return (
      <a
        href={link}
        target={target}
        className={`
          flex justify-center items-center
        `}
      >
        <img
          src={image}
          alt="Logo"
          className="h-15 2xl:h-20 hover:scale-110 transition-transform duration-200 active:scale-90"
        />
      </a>
    );
  }

  if (buttonType === "no_background") {
    return (
      <a
        className={`
          flex justify-center items-center w-50 min-h-15 text-white uppercase relative group
          ${className}
        `}
        {...rest}
      >
        <div className="w-full flex items-center justify-center gap-2 mb-2">
          <div className="text-2xl 2xl:text-2xl text-left text-shadow-[-2px_3px_0px_#0F1B24] leading-tight">
            {children}
          </div>
        </div>
        <img
          src="button/button-navbar.webp"
          className={`${selected ? "opacity-100" : "opacity-0"} group-hover:opacity-100 -z-10 absolute w-full h-full ${frameClassName}`}
        />
      </a>
    );
  }
}
