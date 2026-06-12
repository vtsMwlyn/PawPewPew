export default function Link({
  buttonType = "background",
  link,
  target = '_blank',
  image,
  children,
  className = '',
  ...rest
}) {
  if (buttonType === 'background') {
    return (
      <a
        href={link} target={target}
        className={`
          flex justify-center items-center w-60 py-1 px-4 text-white uppercase relative
          ${className}
        `}
        {...rest}
      >
        <img src="/wooden-underline.webp" className={`bottom-4 group-hover:opacity-100 opacity-0 absolute z-5 w-full`} />
        <div className={`w-full h-full absolute group-hover:bg-gradient-to-t group-hover:from-[#551755] group-hover:to-transparent -z-10 scale-y-140`}></div>
        <div className="w-full flex items-center justify-center gap-2">
          {image && <img src={image} alt="Logo" className="h-8 2xl:h-10 drop-shadow-[-1px_3px_0px_#0F1B24]" />}
          <div className="text-2xl 2xl:text-2xl text-left text-shadow-[-2px_3px_0px_#0F1B24] leading-tight">{children}</div>
        </div>
      </a>
    )
  }

  if (buttonType === 'no_background') {
    return ( 
      <a
        href={link} target={target}
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
      </a>
    )
  }
}