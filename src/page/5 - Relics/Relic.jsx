import React from 'react'

function Relic({ name, speciality, image }) {
  return (
    <div className='flex gap-5 w-25'>
      <img
        src={image}
        alt={`${image} image`}
        className='w-20 h-20'
      />
      <p className='Uppercase text-4xl'>{name}</p>
      <p className="uppercase text-xl poppins-regular">{speciality}</p>
    </div>
  )
}

export default Relic