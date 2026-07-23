export default function DropdownButton({children, className,
  frameClassName = '',
  ...rest}) {
  return (
    <a
    className={`
      flex justify-center items-center w-50 min-h-15 text-white uppercase relative group hover:brightness-120
      ${className}
    `}
    {...rest}
    >
    <div className="w-full flex items-center justify-center gap-2 mb-2">
      <div className="text-2xl 2xl:text-2xl text-left text-shadow-[-2px_3px_0px_#0F1B24] leading-tight">{children}</div>
    </div>
    <img src="button/button-dropdown.webp" className={`-z-10 group-hover:opacity-100 absolute hidden xl:block w-full h-full ${frameClassName}`} />
  </a>
  )
}