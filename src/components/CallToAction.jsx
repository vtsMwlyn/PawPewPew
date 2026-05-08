export default function CallToAction({children, image}) {
  return(
    <button
      href="www.youtube.com"
      className={`
        border-5 border-blueblack
        rounded-full px-6 py-1
        text-white uppercase
        bg-hijaubaru 
        hover:bg-ungupink
      `}
    >
      <div className="flex items-center gap-4">
        <img src={image} alt="Logo" className="h-10 drop-shadow-[-1px_3px_0px_#0F1B24]" />
        <p className="text-2xl text-left text-shadow-[-2px_3px_0px_#0F1B24] leading-tight">{children}</p>
      </div>
    </button>
  )
}