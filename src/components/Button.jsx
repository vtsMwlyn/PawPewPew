export default function Link({
  selected = false,
  buttonType = "wooden",
  frameType = "long",
  image,
  children,
  className = '',
  frameClassName = 'w-full',
  ...rest
}) {
  if (buttonType === 'wooden') {
    return (
      <button
        className={`
          flex justify-center items-center w-60 py-1 px-4 text-white uppercase relative
          ${className}
        `}
        {...rest}
        >
          <img src={frameType === 'long' ? '/wooden-border-long.webp' : frameType === 'medium' ? '/wooden-border-medium.webp' : '/wooden-border-short.webp'} className={`${selected && 'opacity-100'} hover:opacity-100 opacity-0 absolute z-5 w-full ${frameClassName}`} />
          <div className="w-full flex items-center justify-center gap-2">
            {image && <img src={image} alt="Logo" className="h-8 2xl:h-10 drop-shadow-[-1px_3px_0px_#0F1B24]" />}
            <div className="text-2xl 2xl:text-2xl text-left text-shadow-[-2px_3px_0px_#0F1B24] leading-tight">{children}</div>
          </div>
      </button>
    )
  }

  if (buttonType === 'root') {
    return (
      <button
        className={`
          flex justify-center items-center w-60 py-1 px-4 text-white uppercase relative
          ${className}
        `}
        {...rest}
        >
          <img src="/root.webp" className={`${selected && 'opacity-100 drop-shadow-[0px_0px_5px_black]'} hover:opacity-100 opacity-0 absolute z-5 w-full ${frameClassName}`} />
          <div className="w-full flex items-center justify-center gap-2">
            {image && <img src={image} alt="Logo" className="h-8 2xl:h-10 drop-shadow-[-1px_3px_0px_#0F1B24]" />}
            <div className="text-2xl 2xl:text-2xl text-left text-shadow-[-2px_3px_0px_#0F1B24] leading-tight">{children}</div>
          </div>
      </button>
    )
  }

  return (
    <button
      className={`
        flex justify-center items-center w-55 py-1 px-4 text-white uppercase relative
        ${className}
      `}
      {...rest}
    >
      <div className="w-full flex items-center justify-center gap-2">
        {image && <img src={image} alt="Logo" className="h-8 2xl:h-10 drop-shadow-[-1px_3px_0px_#0F1B24]" />}
        <div className="text-2xl 2xl:text-2xl text-left text-shadow-[-2px_3px_0px_#0F1B24] leading-tight">{children}</div>
      </div>
    </button>
  )
}