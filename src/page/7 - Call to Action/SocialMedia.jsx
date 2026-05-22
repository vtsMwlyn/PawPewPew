export default function SocialMedia({ link, image, text }) {
  return (
    <div className="relative inline-flex group">
      <a href={link}
        target="_blank" rel="noopener noreferrer">
        <img
          src={image}
          alt={text}
          className="h-10 drop-shadow-[-2px_6px_0px_#0F1B24]"
        />
      </a>
      <span
        className={`absolute comic-relief-bold  
      px-2 py-1 text-sm font-semibold
      bg-stone-900/90 text-white
      rounded-md opacity-0 translate-y-2
      -bottom-10 left-1/2 transform -translate-x-1/2
      group-hover:opacity-100 group-hover:translate-y-0
      transition-all duration-200
      pointer-events-none whitespace-nowrap`}
      >
        {text}
      </span>
    </div>
  )
}