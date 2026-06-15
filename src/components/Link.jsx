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
}