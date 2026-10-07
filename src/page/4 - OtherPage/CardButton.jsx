import { Link } from 'react-router-dom'

function CardButton({ title, desk, section, image, text }) {
  return (
    <div className='flex relative gap-10 w-250 '>
      <img src={image} alt={`${title} image`} className='w-50 h-50 object-cover rounded-2xl border-blueblack border-4' />
      <div className='flex flex-col gap-5'>
        <p className='flex text-4xl lg:text-5xl 2xl:text-6xl text-white uppercase text-shadow-[-4px_4px_0px_#0F1B24]'>
          {title}
        </p>
        <p className='flex text-lg lg:text-xl 2xl:text-2xl outfit-medium text-white text-shadow-[-2px_3px_0px_#0F1B24]'>
          {desk}
        </p>
      </div>
      {/* <img
        src={buttonImg}
        alt={`${buttonImg} button`}
        className='absolute w-60 bottom-5 right-5'
      /> */}
      <Link
        to={`/alcove#${section}`}
        className="w-50 h-12.5 bg-contain bg-no-repeat bg-center absolute bottom-5 right-5 flex items-center justify-center cursor-pointer group no-underline"
        style={{ backgroundImage: `url(button/button-discover.webp)` }}
      >
        <p className="inline-flex items-center gap-1 outfit-medium text-white group-hover:text-shadow-[-1px_2px_0px_#0F1B24] transition-all">
          {text}
          <span className="hidden group-hover:inline-block">→</span>
        </p>
      </Link>
    </div>
  )
}

export default CardButton