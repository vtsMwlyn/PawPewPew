export default function Link({
  buttonType = "background",
  link,
  target = '_blank',
  image
}) {
  if (buttonType === 'background') {
    return (
      <a href={link} target={target}
        className={`
          flex justify-center items-center
        `}>
         <img src={image} alt="Logo" className="h-15 2xl:h-20 hover:scale-110 transition-transform duration-200 active:scale-90" />
      </a>
    )
  }

  if (buttonType === 'no_background') {
    return (
      <a href={link} target={target}
        className={`
          flex justify-center items-center w-50 py-1 px-4 text-white uppercase relative group
          ${className}
        `}
        {...rest}
      >
        <img src="/wooden-underline.webp" className={`${selected && 'opacity-100'} -bottom-4 group-hover:opacity-100 opacity-0 absolute z-5 w-full hidden xl:block ${frameClassName}`} />
        <div className={`${selected && 'bg-linear-to-t from-[#551755] to-transparent'} w-full h-full absolute group-hover:bg-linear-to-t group-hover:from-[#551755] group-hover:to-transparent -z-10 scale-y-140 hidden xl:block`}></div>
        <div className="w-full flex items-center justify-center gap-2">
          {image && <img src={image} alt="Logo" className={`h-8 2xl:h-10 drop-shadow-[-1px_3px_0px_#0F1B24]`} />}
          <div className="text-2xl 2xl:text-2xl text-left text-shadow-[-2px_3px_0px_#0F1B24] leading-tight">{children}</div>
        </div>
      </a>
    )
  }
}