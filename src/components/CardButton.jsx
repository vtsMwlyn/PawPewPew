import React from 'react'

function CardButton({title, desk, buttonImg, image }) {
  return (
    <div className='flex relative gap-10'>
      <img src={image} alt={`${title} image`} className='w-50 h-50 object-cover' />
      <div>
        <p className='text-xl'>{title}</p>
        <p className='text-xl'>{desk}</p>
      </div>

      <img src={buttonImg} alt={`${buttonImg} button`} className='absolute w-50 top-20 left-200' />
    </div>
  )
}

export default CardButton