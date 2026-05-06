export default function CallToAction({children, image}) {
  return(
    <button
      href="www.youtube.com"
      className={`
        h-20
        border-5 border-[#0F1B24]
        rounded-full py-1 px-6 text-white uppercase
        bg-[linear-gradient(to_bottom,#49B888_40%,#428166)]
        hover:bg-[linear-gradient(to_bottom,#d31164_40%,#4a1b4e)]
      `}
    >
      <div className="flex items-center gap-2">
        <img src={image} alt="Logo" className="w-10" />
        <p className="text-shadow-2xs text-lg w-30">{children}</p>
      </div>
    </button>
  )
}