import Link from "../../components/Button"

export default function SocialMedia({ link, image, text }) {
  return (
    <div className="w-15 2xl:w-30 relative group">
      <Link
        frameType="short"
        frameClassName=""
        className="w-full!"
        href={link}
        target="_blank" rel="noopener noreferrer"
      >
        <img src={image} className="w-10 drop-shadow-[-2px_6px_0px_#0F1B24]" />
      </Link>
      <span
        className={`
          absolute outfit-medium  
          px-2 py-1 text-sm
          bg-stone-900/90 text-white
          rounded-md opacity-0 translate-y-2
          -bottom-10 left-1/2 transform -translate-x-1/2
          group-hover:opacity-100 group-hover:translate-y-0
          transition-all duration-200
          pointer-events-none whitespace-nowrap
        `}
      >
        {text}
      </span>
    </div>
  )
}