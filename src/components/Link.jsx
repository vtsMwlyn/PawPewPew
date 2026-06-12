export default function Link({children, image, link}) {
  return(
    <a
      // href={link}
      target="_blank"
      className={`text-white uppercase active:shadow-[-1px_4px_0px_#0F1B24]  hover:scale-110 active:scale-80 transition-all duration-200`}
    >
      <img src={image} alt="bg-link-button" className="w-full h-full" />
    </a>
  )
}