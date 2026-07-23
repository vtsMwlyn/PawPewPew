export default function Link({
  selected = false,
  image,
  buttonType = 'background',
  children,
  className = '',
  frameClassName = '',
  ...rest
}) {
  if (buttonType === 'background') {
    return (
      <a
        className={`
          flex justify-center items-center w-50 min-h-15 text-white uppercase relative group
          ${className}
        `}
        {...rest}
      >
        <div className="w-full flex items-center justify-center gap-2 mb-2">
          {image && <img src={image} alt="Logo" className={`h-8 2xl:h-20 drop-shadow-[-1px_3px_0px_#0F1B24]`} />}
          <div className="text-2xl 2xl:text-2xl text-left text-shadow-[-2px_3px_0px_#0F1B24] leading-tight">{children}</div>
        </div>
        <img src="button/button-navbar.webp" className={`${selected ? 'opacity-100' : 'opacity-0'} -z-10 group-hover:opacity-100 absolute w-full h-full hidden xl:block ${frameClassName}`} />
      </a>
    )
  }

  if (buttonType === 'no_background') {
    return (
      <button
        className={`
          flex justify-center items-center text-white uppercase relative
          ${className}
        `}
        {...rest}
      >
        <div className="w-full flex items-center justify-center gap-2">
          <img src={image} alt="Logo" className="h-15 2xl:h-20 hover:scale-110 transition-transform duration-200 active:scale-90" />
        </div>
      </button>
    )
  }
}